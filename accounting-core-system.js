// 🏢 ENTERPRISE ACCOUNTING SYSTEM - CORE MODULE
// Advanced Double-Entry Bookkeeping System with Odoo-Style Features

// ==================== CHART OF ACCOUNTS ====================
const CHART_OF_ACCOUNTS = {
    // ASSETS (1000-1999)
    assets: {
        currentAssets: {
            '1000': { name: 'Cash and Cash Equivalents', type: 'asset', category: 'current_assets' },
            '1010': { name: 'Bank Account - Operating', type: 'asset', category: 'current_assets' },
            '1020': { name: 'Bank Account - Savings', type: 'asset', category: 'current_assets' },
            '1030': { name: 'Petty Cash', type: 'asset', category: 'current_assets' },
            '1100': { name: 'Accounts Receivable', type: 'asset', category: 'current_assets' },
            '1110': { name: 'Trade Receivables', type: 'asset', category: 'current_assets' },
            '1120': { name: 'Allowance for Doubtful Accounts', type: 'asset', category: 'current_assets', contra: true },
            '1130': { name: 'Customer Deposits', type: 'asset', category: 'current_assets' },
            '1140': { name: 'Prepaid Expenses', type: 'asset', category: 'current_assets' },
            '1150': { name: 'Accrued Revenue', type: 'asset', category: 'current_assets' },
            '1160': { name: 'Shipping Receivables', type: 'asset', category: 'current_assets' },
            '1200': { name: 'Inventory', type: 'asset', category: 'current_assets' },
            '1210': { name: 'Raw Materials Inventory', type: 'asset', category: 'current_assets' },
            '1220': { name: 'Finished Goods Inventory', type: 'asset', category: 'current_assets' },
            '1230': { name: 'Inventory in Transit', type: 'asset', category: 'current_assets' },
            '1240': { name: 'Inventory Adjustments', type: 'asset', category: 'current_assets' }
        },
        fixedAssets: {
            '1300': { name: 'Property, Plant & Equipment', type: 'asset', category: 'fixed_assets' },
            '1310': { name: 'Office Equipment', type: 'asset', category: 'fixed_assets' },
            '1320': { name: 'Computer Equipment', type: 'asset', category: 'fixed_assets' },
            '1330': { name: 'Accumulated Depreciation', type: 'asset', category: 'fixed_assets', contra: true },
            '1340': { name: 'Intangible Assets', type: 'asset', category: 'fixed_assets' }
        }
    },
    
    // LIABILITIES (2000-2999)
    liabilities: {
        currentLiabilities: {
            '2000': { name: 'Accounts Payable', type: 'liability', category: 'current_liabilities' },
            '2010': { name: 'Trade Payables', type: 'liability', category: 'current_liabilities' },
            '2015': { name: 'Shipping Company Payables', type: 'liability', category: 'current_liabilities' },
            '2020': { name: 'Accrued Expenses', type: 'liability', category: 'current_liabilities' },
            '2030': { name: 'Short-term Loans', type: 'liability', category: 'current_liabilities' },
            '2040': { name: 'Customer Advances', type: 'liability', category: 'current_liabilities' },
            '2050': { name: 'Accrued Salaries', type: 'liability', category: 'current_liabilities' },
            '2100': { name: 'Tax Liabilities', type: 'liability', category: 'current_liabilities' },
            '2110': { name: 'Sales Tax Payable', type: 'liability', category: 'current_liabilities' },
            '2120': { name: 'Income Tax Payable', type: 'liability', category: 'current_liabilities' },
            '2130': { name: 'VAT Payable', type: 'liability', category: 'current_liabilities' }
        },
        longTermLiabilities: {
            '2200': { name: 'Long-term Debt', type: 'liability', category: 'long_term_liabilities' },
            '2210': { name: 'Mortgage Payable', type: 'liability', category: 'long_term_liabilities' },
            '2220': { name: 'Equipment Loans', type: 'liability', category: 'long_term_liabilities' }
        }
    },
    
    // EQUITY (3000-3999)
    equity: {
        '3000': { name: 'Owner\'s Equity', type: 'equity', category: 'equity' },
        '3100': { name: 'Retained Earnings', type: 'equity', category: 'equity' },
        '3200': { name: 'Current Year Earnings', type: 'equity', category: 'equity' },
        '3300': { name: 'Capital Contributions', type: 'equity', category: 'equity' },
        '3400': { name: 'Drawings', type: 'equity', category: 'equity', contra: true }
    },
    
    // REVENUE (4000-4999)
    revenue: {
        '4000': { name: 'Sales Revenue', type: 'revenue', category: 'operating_revenue' },
        '4010': { name: 'Product Sales Revenue', type: 'revenue', category: 'operating_revenue' },
        '4020': { name: 'Commission Revenue', type: 'revenue', category: 'operating_revenue' },
        '4030': { name: 'Shipping Revenue - Air', type: 'revenue', category: 'operating_revenue' },
        '4031': { name: 'Shipping Revenue - Sea', type: 'revenue', category: 'operating_revenue' },
        '4032': { name: 'Shipping Revenue - Express', type: 'revenue', category: 'operating_revenue' },
        '4033': { name: 'Shipping Revenue - Standard', type: 'revenue', category: 'operating_revenue' },
        '4100': { name: 'Other Revenue', type: 'revenue', category: 'other_revenue' },
        '4110': { name: 'Interest Income', type: 'revenue', category: 'other_revenue' },
        '4120': { name: 'Foreign Exchange Gains', type: 'revenue', category: 'other_revenue' }
    },
    
    // EXPENSES (5000-5999)
    expenses: {
        cogs: {
            '5000': { name: 'Cost of Goods Sold', type: 'expense', category: 'cogs' },
            '5010': { name: 'Product Costs', type: 'expense', category: 'cogs' },
            '5020': { name: 'Freight In', type: 'expense', category: 'cogs' },
            '5030': { name: 'Import Duties', type: 'expense', category: 'cogs' },
            '5040': { name: 'Inventory Adjustments', type: 'expense', category: 'cogs' }
        },
        operating: {
            '6000': { name: 'Operating Expenses', type: 'expense', category: 'operating_expenses' },
            '6010': { name: 'Shipping Expenses - DHL', type: 'expense', category: 'operating_expenses' },
            '6011': { name: 'Shipping Expenses - FedEx', type: 'expense', category: 'operating_expenses' },
            '6012': { name: 'Shipping Expenses - UPS', type: 'expense', category: 'operating_expenses' },
            '6013': { name: 'Shipping Expenses - Sea Freight', type: 'expense', category: 'operating_expenses' },
            '6020': { name: 'Office Rent', type: 'expense', category: 'operating_expenses' },
            '6030': { name: 'Utilities', type: 'expense', category: 'operating_expenses' },
            '6040': { name: 'Insurance', type: 'expense', category: 'operating_expenses' },
            '6050': { name: 'Professional Services', type: 'expense', category: 'operating_expenses' },
            '6060': { name: 'Bank Charges', type: 'expense', category: 'operating_expenses' },
            '6070': { name: 'Foreign Exchange Losses', type: 'expense', category: 'operating_expenses' }
        }
    }
};

// ==================== GLOBAL ACCOUNTING VARIABLES ====================
let generalLedger = [];
let journalEntries = [];
let accountBalances = {};
let trialBalance = {};
let accountingPeriods = [];
let auditTrail = [];

// ==================== JOURNAL ENTRY CLASS ====================
class JournalEntry {
    constructor(date, description, reference = null) {
        this.id = this.generateId();
        this.date = date;
        this.description = description;
        this.reference = reference;
        this.entries = [];
        this.totalDebits = 0;
        this.totalCredits = 0;
        this.balanced = false;
        this.posted = false;
        this.createdBy = 'system';
        this.createdAt = new Date().toISOString();
        this.modifiedAt = null;
    }

    generateId() {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        return `JE-${timestamp}-${random}`;
    }

    addDebit(accountCode, amount, description = '') {
        this.entries.push({
            accountCode,
            accountName: this.getAccountName(accountCode),
            debit: parseFloat(amount),
            credit: 0,
            description: description || this.description
        });
        this.totalDebits += parseFloat(amount);
        this.checkBalance();
        return this;
    }

    addCredit(accountCode, amount, description = '') {
        this.entries.push({
            accountCode,
            accountName: this.getAccountName(accountCode),
            debit: 0,
            credit: parseFloat(amount),
            description: description || this.description
        });
        this.totalCredits += parseFloat(amount);
        this.checkBalance();
        return this;
    }

    getAccountName(accountCode) {
        // Search through all account categories
        for (const category of Object.values(CHART_OF_ACCOUNTS)) {
            if (typeof category === 'object') {
                for (const subCategory of Object.values(category)) {
                    if (subCategory[accountCode]) {
                        return subCategory[accountCode].name;
                    }
                }
                if (category[accountCode]) {
                    return category[accountCode].name;
                }
            }
        }
        return `Account ${accountCode}`;
    }

    checkBalance() {
        this.balanced = Math.abs(this.totalDebits - this.totalCredits) < 0.01;
        return this.balanced;
    }

    post() {
        if (!this.balanced) {
            throw new Error(`Journal entry ${this.id} is not balanced. Debits: ${this.totalDebits}, Credits: ${this.totalCredits}`);
        }

        if (this.posted) {
            throw new Error(`Journal entry ${this.id} is already posted`);
        }

        // Add to general ledger
        generalLedger.push(this);
        
        // Update account balances
        this.updateAccountBalances();
        
        // Mark as posted
        this.posted = true;
        this.modifiedAt = new Date().toISOString();
        
        // Add to audit trail
        this.addToAuditTrail('POSTED');
        
        // Save to storage
        saveAccountingDataToStorage();
        
        return this;
    }

    updateAccountBalances() {
        this.entries.forEach(entry => {
            if (!accountBalances[entry.accountCode]) {
                accountBalances[entry.accountCode] = {
                    accountCode: entry.accountCode,
                    accountName: entry.accountName,
                    debitBalance: 0,
                    creditBalance: 0,
                    netBalance: 0,
                    lastUpdated: new Date().toISOString()
                };
            }

            const account = accountBalances[entry.accountCode];
            account.debitBalance += entry.debit;
            account.creditBalance += entry.credit;
            
            // Calculate net balance based on account type
            const accountInfo = this.getAccountInfo(entry.accountCode);
            if (accountInfo && (accountInfo.type === 'asset' || accountInfo.type === 'expense')) {
                account.netBalance = account.debitBalance - account.creditBalance;
            } else {
                account.netBalance = account.creditBalance - account.debitBalance;
            }
            
            account.lastUpdated = new Date().toISOString();
        });
    }

    getAccountInfo(accountCode) {
        for (const category of Object.values(CHART_OF_ACCOUNTS)) {
            if (typeof category === 'object') {
                for (const subCategory of Object.values(category)) {
                    if (subCategory[accountCode]) {
                        return subCategory[accountCode];
                    }
                }
                if (category[accountCode]) {
                    return category[accountCode];
                }
            }
        }
        return null;
    }

    addToAuditTrail(action) {
        auditTrail.push({
            id: `AUDIT-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            timestamp: new Date().toISOString(),
            action: action,
            entityType: 'JOURNAL_ENTRY',
            entityId: this.id,
            userId: 'system',
            details: {
                description: this.description,
                reference: this.reference,
                totalAmount: this.totalDebits,
                entriesCount: this.entries.length
            }
        });
    }
}

// ==================== CORE ACCOUNTING FUNCTIONS ====================

// Initialize accounting system
function initializeAccountingSystem() {
    console.log('🏢 Initializing Enterprise Accounting System...');
    
    // Load existing data
    loadAccountingDataFromStorage();
    
    // Initialize account balances if empty
    if (Object.keys(accountBalances).length === 0) {
        initializeAccountBalances();
    }
    
    console.log('✅ Accounting system initialized successfully');
    console.log(`📊 Accounts: ${Object.keys(accountBalances).length}`);
    console.log(`📋 Journal Entries: ${journalEntries.length}`);
    console.log(`🔍 General Ledger Entries: ${generalLedger.length}`);
}

// Initialize account balances
function initializeAccountBalances() {
    for (const category of Object.values(CHART_OF_ACCOUNTS)) {
        if (typeof category === 'object') {
            for (const subCategory of Object.values(category)) {
                if (typeof subCategory === 'object') {
                    for (const [accountCode, accountInfo] of Object.entries(subCategory)) {
                        accountBalances[accountCode] = {
                            accountCode: accountCode,
                            accountName: accountInfo.name,
                            debitBalance: 0,
                            creditBalance: 0,
                            netBalance: 0,
                            lastUpdated: new Date().toISOString()
                        };
                    }
                }
            }
        }
    }
}

// Get account balance
function getAccountBalance(accountCode, startDate = null, endDate = null) {
    if (!accountBalances[accountCode]) {
        return 0;
    }
    
    if (!startDate && !endDate) {
        return accountBalances[accountCode].netBalance;
    }
    
    // Calculate balance for specific period
    let balance = 0;
    const relevantEntries = generalLedger.filter(je => {
        const entryDate = new Date(je.date);
        const start = startDate ? new Date(startDate) : new Date('1900-01-01');
        const end = endDate ? new Date(endDate) : new Date();
        return entryDate >= start && entryDate <= end && je.posted;
    });
    
    relevantEntries.forEach(je => {
        je.entries.forEach(entry => {
            if (entry.accountCode === accountCode) {
                const accountInfo = je.getAccountInfo(accountCode);
                if (accountInfo && (accountInfo.type === 'asset' || accountInfo.type === 'expense')) {
                    balance += entry.debit - entry.credit;
                } else {
                    balance += entry.credit - entry.debit;
                }
            }
        });
    });
    
    return balance;
}

// Save accounting data to storage
function saveAccountingDataToStorage() {
    try {
        localStorage.setItem('accountingGeneralLedger', JSON.stringify(generalLedger));
        localStorage.setItem('accountingJournalEntries', JSON.stringify(journalEntries));
        localStorage.setItem('accountingAccountBalances', JSON.stringify(accountBalances));
        localStorage.setItem('accountingAuditTrail', JSON.stringify(auditTrail));
        localStorage.setItem('accountingTrialBalance', JSON.stringify(trialBalance));
    } catch (error) {
        console.error('Error saving accounting data:', error);
    }
}

// Load accounting data from storage
function loadAccountingDataFromStorage() {
    try {
        const savedGeneralLedger = localStorage.getItem('accountingGeneralLedger');
        const savedJournalEntries = localStorage.getItem('accountingJournalEntries');
        const savedAccountBalances = localStorage.getItem('accountingAccountBalances');
        const savedAuditTrail = localStorage.getItem('accountingAuditTrail');
        const savedTrialBalance = localStorage.getItem('accountingTrialBalance');
        
        if (savedGeneralLedger) generalLedger = JSON.parse(savedGeneralLedger);
        if (savedJournalEntries) journalEntries = JSON.parse(savedJournalEntries);
        if (savedAccountBalances) accountBalances = JSON.parse(savedAccountBalances);
        if (savedAuditTrail) auditTrail = JSON.parse(savedAuditTrail);
        if (savedTrialBalance) trialBalance = JSON.parse(savedTrialBalance);
    } catch (error) {
        console.error('Error loading accounting data:', error);
    }
}

// Initialize accounting system on load
if (typeof window !== 'undefined') {
    window.addEventListener('load', initializeAccountingSystem);
}
