// 🏢 ENTERPRISE ACCOUNTING SYSTEM - GENERAL LEDGER
// Task 1.3: General Ledger Management System
// Status: ✅ IN PROGRESS

// ==================== GLOBAL VARIABLES ====================
let generalLedger = [];
let accountBalances = {};
let trialBalance = {};
let accountingPeriods = [];
let closingEntries = [];

// ==================== ACCOUNT BALANCE CLASS ====================
class AccountBalance {
    constructor(accountCode) {
        this.accountCode = accountCode;
        this.accountName = this.getAccountName(accountCode);
        this.accountInfo = this.getAccountInfo(accountCode);
        this.openingBalance = 0;
        this.debitBalance = 0;
        this.creditBalance = 0;
        this.netBalance = 0;
        this.closingBalance = 0;
        this.lastUpdated = new Date().toISOString();
        this.transactions = [];
        this.reconciled = false;
        this.reconciledDate = null;
        this.reconciledBy = null;
    }

    getAccountName(accountCode) {
        if (typeof getAccountName === 'function') {
            return getAccountName(accountCode);
        }
        return `Account ${accountCode}`;
    }

    getAccountInfo(accountCode) {
        if (typeof getAccountInfo === 'function') {
            return getAccountInfo(accountCode);
        }
        return { type: 'unknown', category: 'unknown', normalBalance: 'debit' };
    }

    addTransaction(journalEntry, entryLine) {
        const transaction = {
            id: `TXN-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            journalEntryId: journalEntry.id,
            entryNumber: journalEntry.entryNumber,
            date: journalEntry.date,
            description: entryLine.description,
            reference: journalEntry.reference,
            debit: entryLine.debit,
            credit: entryLine.credit,
            balance: 0, // Will be calculated
            source: journalEntry.source,
            addedAt: new Date().toISOString()
        };

        this.transactions.push(transaction);
        this.updateBalances();
        this.lastUpdated = new Date().toISOString();

        return transaction;
    }

    updateBalances() {
        // Reset balances
        this.debitBalance = 0;
        this.creditBalance = 0;

        // Calculate totals from transactions
        this.transactions.forEach(txn => {
            this.debitBalance += txn.debit;
            this.creditBalance += txn.credit;
        });

        // Calculate net balance based on account type
        if (this.accountInfo.type === 'asset' || this.accountInfo.type === 'expense') {
            this.netBalance = this.openingBalance + this.debitBalance - this.creditBalance;
        } else {
            this.netBalance = this.openingBalance + this.creditBalance - this.debitBalance;
        }

        this.closingBalance = this.netBalance;

        // Update running balances in transactions
        let runningBalance = this.openingBalance;
        this.transactions.forEach(txn => {
            if (this.accountInfo.type === 'asset' || this.accountInfo.type === 'expense') {
                runningBalance += txn.debit - txn.credit;
            } else {
                runningBalance += txn.credit - txn.debit;
            }
            txn.balance = runningBalance;
        });
    }

    getBalance(asOfDate = null) {
        if (!asOfDate) {
            return this.netBalance;
        }

        const cutoffDate = new Date(asOfDate);
        let balance = this.openingBalance;

        this.transactions.forEach(txn => {
            const txnDate = new Date(txn.date);
            if (txnDate <= cutoffDate) {
                if (this.accountInfo.type === 'asset' || this.accountInfo.type === 'expense') {
                    balance += txn.debit - txn.credit;
                } else {
                    balance += txn.credit - txn.debit;
                }
            }
        });

        return balance;
    }

    getTransactionHistory(startDate = null, endDate = null) {
        let filteredTransactions = this.transactions;

        if (startDate) {
            const start = new Date(startDate);
            filteredTransactions = filteredTransactions.filter(txn => new Date(txn.date) >= start);
        }

        if (endDate) {
            const end = new Date(endDate);
            filteredTransactions = filteredTransactions.filter(txn => new Date(txn.date) <= end);
        }

        return filteredTransactions.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    reconcile(reconciledBy = 'system') {
        this.reconciled = true;
        this.reconciledDate = new Date().toISOString();
        this.reconciledBy = reconciledBy;
        this.lastUpdated = new Date().toISOString();
    }

    unreconcile() {
        this.reconciled = false;
        this.reconciledDate = null;
        this.reconciledBy = null;
        this.lastUpdated = new Date().toISOString();
    }
}

// ==================== GENERAL LEDGER FUNCTIONS ====================

// Update account balances from journal entry
function updateAccountBalancesFromJE(journalEntry) {
    if (!journalEntry.posted) {
        throw new Error('Cannot update balances from unposted journal entry');
    }

    journalEntry.entries.forEach(entryLine => {
        const accountCode = entryLine.accountCode;
        
        // Initialize account balance if it doesn't exist
        if (!accountBalances[accountCode]) {
            accountBalances[accountCode] = new AccountBalance(accountCode);
        }

        // Add transaction to account
        accountBalances[accountCode].addTransaction(journalEntry, entryLine);
    });

    // Add to general ledger
    generalLedger.push({
        journalEntryId: journalEntry.id,
        entryNumber: journalEntry.entryNumber,
        date: journalEntry.date,
        description: journalEntry.description,
        reference: journalEntry.reference,
        entries: journalEntry.entries.map(entry => ({
            accountCode: entry.accountCode,
            accountName: entry.accountName,
            debit: entry.debit,
            credit: entry.credit,
            description: entry.description
        })),
        totalDebits: journalEntry.totalDebits,
        totalCredits: journalEntry.totalCredits,
        source: journalEntry.source,
        postedAt: journalEntry.postedAt
    });

    // Save to storage
    saveGeneralLedgerToStorage();
}

// Get account balance
function getAccountBalance(accountCode, asOfDate = null) {
    if (!accountBalances[accountCode]) {
        return 0;
    }
    return accountBalances[accountCode].getBalance(asOfDate);
}

// Get account transaction history
function getAccountTransactionHistory(accountCode, startDate = null, endDate = null) {
    if (!accountBalances[accountCode]) {
        return [];
    }
    return accountBalances[accountCode].getTransactionHistory(startDate, endDate);
}

// Generate trial balance
function generateTrialBalance(asOfDate = null) {
    const cutoffDate = asOfDate || new Date().toISOString().split('T')[0];
    const trial = {
        asOfDate: cutoffDate,
        accounts: [],
        totalDebits: 0,
        totalCredits: 0,
        balanced: false,
        generatedAt: new Date().toISOString()
    };

    // Get all accounts with balances
    Object.values(accountBalances).forEach(accountBalance => {
        const balance = accountBalance.getBalance(asOfDate);
        
        if (Math.abs(balance) > 0.01) { // Only include accounts with significant balances
            const accountInfo = accountBalance.accountInfo;
            let debitBalance = 0;
            let creditBalance = 0;

            // Determine if balance goes in debit or credit column
            if (accountInfo.normalBalance === 'debit') {
                if (balance >= 0) {
                    debitBalance = balance;
                } else {
                    creditBalance = Math.abs(balance);
                }
            } else {
                if (balance >= 0) {
                    creditBalance = balance;
                } else {
                    debitBalance = Math.abs(balance);
                }
            }

            trial.accounts.push({
                accountCode: accountBalance.accountCode,
                accountName: accountBalance.accountName,
                accountType: accountInfo.type,
                accountCategory: accountInfo.category,
                debitBalance: debitBalance,
                creditBalance: creditBalance,
                netBalance: balance
            });

            trial.totalDebits += debitBalance;
            trial.totalCredits += creditBalance;
        }
    });

    // Sort by account code
    trial.accounts.sort((a, b) => a.accountCode.localeCompare(b.accountCode));

    // Check if trial balance is balanced
    trial.balanced = Math.abs(trial.totalDebits - trial.totalCredits) < 0.01;

    // Save trial balance
    trialBalance = trial;
    saveGeneralLedgerToStorage();

    return trial;
}

// Get general ledger entries for an account
function getGeneralLedgerByAccount(accountCode, startDate = null, endDate = null) {
    let entries = generalLedger.filter(entry => 
        entry.entries.some(line => line.accountCode === accountCode)
    );

    if (startDate) {
        const start = new Date(startDate);
        entries = entries.filter(entry => new Date(entry.date) >= start);
    }

    if (endDate) {
        const end = new Date(endDate);
        entries = entries.filter(entry => new Date(entry.date) <= end);
    }

    return entries.sort((a, b) => new Date(a.date) - new Date(b.date));
}

// Get general ledger entries by date range
function getGeneralLedgerByDateRange(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    return generalLedger.filter(entry => {
        const entryDate = new Date(entry.date);
        return entryDate >= start && entryDate <= end;
    }).sort((a, b) => new Date(a.date) - new Date(b.date));
}

// Initialize account balances for all chart of accounts
function initializeAllAccountBalances() {
    if (typeof getAllAccounts === 'function') {
        const allAccounts = getAllAccounts();
        
        allAccounts.forEach(account => {
            if (!accountBalances[account.code]) {
                accountBalances[account.code] = new AccountBalance(account.code);
            }
        });
        
        console.log(`📊 Initialized ${allAccounts.length} account balances`);
    }
}

// Reconcile account
function reconcileAccount(accountCode, reconciledBy = 'system') {
    if (accountBalances[accountCode]) {
        accountBalances[accountCode].reconcile(reconciledBy);
        saveGeneralLedgerToStorage();
        return true;
    }
    return false;
}

// Get accounts requiring reconciliation
function getAccountsRequiringReconciliation() {
    return Object.values(accountBalances).filter(account => 
        !account.reconciled && Math.abs(account.netBalance) > 0.01
    );
}

// Generate aging report for receivables/payables
function generateAgingReport(accountType, asOfDate = null) {
    const cutoffDate = asOfDate ? new Date(asOfDate) : new Date();
    const aging = {
        asOfDate: cutoffDate.toISOString().split('T')[0],
        accountType: accountType,
        accounts: [],
        totals: {
            current: 0,
            days30: 0,
            days60: 0,
            days90: 0,
            over90: 0,
            total: 0
        },
        generatedAt: new Date().toISOString()
    };

    // Get relevant accounts (receivables or payables)
    const relevantAccounts = Object.values(accountBalances).filter(account => {
        if (accountType === 'receivables') {
            return account.accountCode.startsWith('11'); // Receivables accounts
        } else if (accountType === 'payables') {
            return account.accountCode.startsWith('20'); // Payables accounts
        }
        return false;
    });

    relevantAccounts.forEach(account => {
        const balance = account.getBalance(asOfDate);
        if (Math.abs(balance) > 0.01) {
            // Calculate aging buckets (simplified - would need more complex logic for real aging)
            const accountAging = {
                accountCode: account.accountCode,
                accountName: account.accountName,
                current: balance * 0.6, // Simplified distribution
                days30: balance * 0.2,
                days60: balance * 0.1,
                days90: balance * 0.05,
                over90: balance * 0.05,
                total: balance
            };

            aging.accounts.push(accountAging);
            
            // Add to totals
            aging.totals.current += accountAging.current;
            aging.totals.days30 += accountAging.days30;
            aging.totals.days60 += accountAging.days60;
            aging.totals.days90 += accountAging.days90;
            aging.totals.over90 += accountAging.over90;
            aging.totals.total += accountAging.total;
        }
    });

    return aging;
}

// Save general ledger data to storage
function saveGeneralLedgerToStorage() {
    try {
        localStorage.setItem('generalLedger', JSON.stringify(generalLedger));
        localStorage.setItem('accountBalances', JSON.stringify(accountBalances));
        localStorage.setItem('trialBalance', JSON.stringify(trialBalance));
        localStorage.setItem('accountingPeriods', JSON.stringify(accountingPeriods));
    } catch (error) {
        console.error('Error saving general ledger to storage:', error);
    }
}

// Load general ledger data from storage
function loadGeneralLedgerFromStorage() {
    try {
        const savedGeneralLedger = localStorage.getItem('generalLedger');
        const savedAccountBalances = localStorage.getItem('accountBalances');
        const savedTrialBalance = localStorage.getItem('trialBalance');
        const savedAccountingPeriods = localStorage.getItem('accountingPeriods');
        
        if (savedGeneralLedger) {
            generalLedger = JSON.parse(savedGeneralLedger);
        }
        
        if (savedAccountBalances) {
            const balancesData = JSON.parse(savedAccountBalances);
            accountBalances = {};
            
            // Reconstruct AccountBalance objects
            Object.keys(balancesData).forEach(accountCode => {
                const data = balancesData[accountCode];
                const accountBalance = Object.assign(new AccountBalance(accountCode), data);
                accountBalances[accountCode] = accountBalance;
            });
        }
        
        if (savedTrialBalance) {
            trialBalance = JSON.parse(savedTrialBalance);
        }
        
        if (savedAccountingPeriods) {
            accountingPeriods = JSON.parse(savedAccountingPeriods);
        }
        
        console.log(`📊 Loaded general ledger data from storage`);
        
    } catch (error) {
        console.error('Error loading general ledger from storage:', error);
    }
}

// Initialize general ledger system
function initializeGeneralLedger() {
    console.log('📊 Initializing General Ledger System...');
    
    // Load existing data
    loadGeneralLedgerFromStorage();
    
    // Initialize account balances for all accounts
    initializeAllAccountBalances();
    
    const totalAccounts = Object.keys(accountBalances).length;
    const accountsWithBalances = Object.values(accountBalances).filter(acc => Math.abs(acc.netBalance) > 0.01).length;
    const totalTransactions = Object.values(accountBalances).reduce((sum, acc) => sum + acc.transactions.length, 0);
    
    console.log('✅ General Ledger System initialized successfully!');
    console.log(`📊 Total Accounts: ${totalAccounts}`);
    console.log(`💰 Accounts with Balances: ${accountsWithBalances}`);
    console.log(`📋 Total Transactions: ${totalTransactions}`);
    console.log(`🔍 General Ledger Entries: ${generalLedger.length}`);
    
    return {
        totalAccounts,
        accountsWithBalances,
        totalTransactions,
        generalLedgerEntries: generalLedger.length
    };
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        AccountBalance,
        updateAccountBalancesFromJE,
        getAccountBalance,
        getAccountTransactionHistory,
        generateTrialBalance,
        getGeneralLedgerByAccount,
        getGeneralLedgerByDateRange,
        reconcileAccount,
        getAccountsRequiringReconciliation,
        generateAgingReport,
        initializeGeneralLedger
    };
}

// Auto-initialize when loaded in browser
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        initializeGeneralLedger();
    });
}
