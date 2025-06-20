// 💳 SUPPLIER E-WALLET SYSTEM - User-Friendly Visual Interface
// Enhanced supplier statement visualization with wallet-style interface

// ==================== SUPPLIER E-WALLET CLASS ====================
class SupplierEWallet {
    constructor(supplierId) {
        this.supplierId = supplierId;
        this.supplier = this.getSupplierInfo(supplierId);
        this.wallet = {
            id: `WALLET-${supplierId}-${Date.now()}`,
            supplierId: supplierId,
            supplierName: this.supplier.name || supplierId,
            currency: this.supplier.currency || 'USD',
            
            // Wallet Balance Information
            balance: {
                current: 0,           // Current balance (what we owe them)
                available: 0,         // Available credit
                creditLimit: this.supplier.creditLimit || 0,
                lastUpdated: new Date().toISOString()
            },
            
            // Transaction Summary
            summary: {
                totalPurchases: 0,
                totalPayments: 0,
                pendingInvoices: 0,
                overdueAmount: 0,
                averagePaymentDays: 0
            },
            
            // Recent Transactions (last 10)
            recentTransactions: [],
            
            // Payment Status
            paymentStatus: {
                status: 'current',    // current, overdue, critical
                nextPaymentDue: null,
                nextPaymentAmount: 0,
                daysUntilDue: 0
            },
            
            // Wallet Metrics
            metrics: {
                relationshipScore: 0,  // 0-100 based on payment history
                paymentReliability: 0, // 0-100 based on on-time payments
                businessVolume: 0,     // Total business volume
                averageOrderValue: 0
            },
            
            // Visual Elements
            visual: {
                cardColor: '#2c3e50',
                statusColor: '#27ae60',
                progressPercentage: 0,
                riskLevel: 'low'       // low, medium, high
            },
            
            createdAt: new Date().toISOString(),
            lastAccessed: new Date().toISOString()
        };
        
        this.initializeWallet();
    }

    getSupplierInfo(supplierId) {
        if (typeof suppliers !== 'undefined') {
            return suppliers.find(s => s.id === supplierId || s.name === supplierId) || 
                   { id: supplierId, name: supplierId, creditLimit: 0, paymentTerms: 'net30' };
        }
        return { id: supplierId, name: supplierId, creditLimit: 0, paymentTerms: 'net30' };
    }

    initializeWallet() {
        // Generate supplier statement data
        const statement = this.generateSupplierStatement();
        
        // Update wallet with statement data
        this.updateWalletFromStatement(statement);
        
        // Calculate metrics
        this.calculateMetrics();
        
        // Update visual elements
        this.updateVisualElements();
    }

    generateSupplierStatement() {
        if (typeof generateSupplierStatement === 'function') {
            return generateSupplierStatement(this.supplierId);
        }
        
        // Fallback if function not available
        return {
            accountSummary: {
                totalPurchases: 0,
                totalPayments: 0,
                closingBalance: 0,
                overdueAmount: 0
            },
            transactions: [],
            paymentInfo: {
                paymentTerms: 'net30',
                lastPaymentDate: null,
                lastPaymentAmount: 0
            }
        };
    }

    updateWalletFromStatement(statement) {
        // Update balance information
        this.wallet.balance.current = statement.accountSummary.closingBalance;
        this.wallet.balance.available = Math.max(0, 
            this.wallet.balance.creditLimit - this.wallet.balance.current);
        
        // Update summary
        this.wallet.summary.totalPurchases = statement.accountSummary.totalPurchases;
        this.wallet.summary.totalPayments = statement.accountSummary.totalPayments;
        this.wallet.summary.overdueAmount = statement.accountSummary.overdueAmount;
        
        // Update recent transactions (last 10)
        this.wallet.recentTransactions = statement.transactions
            .slice(-10)
            .reverse()
            .map(txn => ({
                id: txn.reference,
                date: txn.date,
                type: txn.type,
                description: txn.description,
                amount: txn.debit > 0 ? -txn.debit : txn.credit,
                balance: txn.balance,
                status: txn.status,
                icon: this.getTransactionIcon(txn.type),
                color: this.getTransactionColor(txn.type)
            }));
        
        // Update payment status
        this.updatePaymentStatus(statement);
    }

    updatePaymentStatus(statement) {
        const today = new Date();
        let nextDueDate = null;
        let nextAmount = 0;
        
        // Find next payment due
        statement.transactions.forEach(txn => {
            if (txn.type === 'PURCHASE_ORDER' && txn.status === 'Pending') {
                const dueDate = new Date(txn.dueDate);
                if (!nextDueDate || dueDate < nextDueDate) {
                    nextDueDate = dueDate;
                    nextAmount = txn.credit;
                }
            }
        });
        
        if (nextDueDate) {
            const daysUntilDue = Math.ceil((nextDueDate - today) / (1000 * 60 * 60 * 24));
            
            this.wallet.paymentStatus = {
                status: daysUntilDue < 0 ? 'overdue' : daysUntilDue <= 7 ? 'due_soon' : 'current',
                nextPaymentDue: nextDueDate.toISOString().split('T')[0],
                nextPaymentAmount: nextAmount,
                daysUntilDue: daysUntilDue
            };
        }
    }

    calculateMetrics() {
        // Calculate relationship score based on payment history and volume
        const totalVolume = this.wallet.summary.totalPurchases;
        const paymentRatio = this.wallet.summary.totalPayments / 
                           Math.max(this.wallet.summary.totalPurchases, 1);
        const overdueRatio = this.wallet.summary.overdueAmount / 
                           Math.max(this.wallet.balance.current, 1);
        
        this.wallet.metrics.businessVolume = totalVolume;
        this.wallet.metrics.paymentReliability = Math.min(100, paymentRatio * 100);
        this.wallet.metrics.relationshipScore = Math.max(0, 
            100 - (overdueRatio * 50) + (this.wallet.metrics.paymentReliability * 0.5));
        
        // Calculate average order value
        const transactionCount = this.wallet.recentTransactions
            .filter(txn => txn.type === 'PURCHASE_ORDER').length;
        this.wallet.metrics.averageOrderValue = transactionCount > 0 ? 
            totalVolume / transactionCount : 0;
    }

    updateVisualElements() {
        // Determine card color based on balance and status
        if (this.wallet.paymentStatus.status === 'overdue') {
            this.wallet.visual.cardColor = '#e74c3c';
            this.wallet.visual.statusColor = '#e74c3c';
            this.wallet.visual.riskLevel = 'high';
        } else if (this.wallet.paymentStatus.status === 'due_soon') {
            this.wallet.visual.cardColor = '#f39c12';
            this.wallet.visual.statusColor = '#f39c12';
            this.wallet.visual.riskLevel = 'medium';
        } else {
            this.wallet.visual.cardColor = '#27ae60';
            this.wallet.visual.statusColor = '#27ae60';
            this.wallet.visual.riskLevel = 'low';
        }
        
        // Calculate progress percentage for credit utilization
        if (this.wallet.balance.creditLimit > 0) {
            this.wallet.visual.progressPercentage = 
                (this.wallet.balance.current / this.wallet.balance.creditLimit) * 100;
        }
    }

    getTransactionIcon(type) {
        const icons = {
            'PURCHASE_ORDER': '🛒',
            'PAYMENT': '💰',
            'INVOICE': '📄',
            'CREDIT': '💳',
            'ADJUSTMENT': '⚖️'
        };
        return icons[type] || '📋';
    }

    getTransactionColor(type) {
        const colors = {
            'PURCHASE_ORDER': '#3498db',
            'PAYMENT': '#27ae60',
            'INVOICE': '#9b59b6',
            'CREDIT': '#1abc9c',
            'ADJUSTMENT': '#f39c12'
        };
        return colors[type] || '#95a5a6';
    }

    // Get wallet data for display
    getWalletData() {
        this.wallet.lastAccessed = new Date().toISOString();
        return this.wallet;
    }

    // Update wallet with new transaction
    addTransaction(transaction) {
        const walletTransaction = {
            id: transaction.reference || transaction.id,
            date: transaction.date,
            type: transaction.type,
            description: transaction.description,
            amount: transaction.debit > 0 ? -transaction.debit : transaction.credit,
            balance: transaction.balance,
            status: transaction.status,
            icon: this.getTransactionIcon(transaction.type),
            color: this.getTransactionColor(transaction.type)
        };
        
        this.wallet.recentTransactions.unshift(walletTransaction);
        
        // Keep only last 10 transactions
        if (this.wallet.recentTransactions.length > 10) {
            this.wallet.recentTransactions = this.wallet.recentTransactions.slice(0, 10);
        }
        
        // Recalculate metrics
        this.calculateMetrics();
        this.updateVisualElements();
    }

    // Make a payment
    makePayment(amount, method = 'bank_transfer', reference = '') {
        const payment = {
            id: `PAY-${Date.now()}`,
            date: new Date().toISOString().split('T')[0],
            type: 'PAYMENT',
            description: `Payment - ${method}`,
            debit: amount,
            credit: 0,
            balance: this.wallet.balance.current - amount,
            status: 'COMPLETED',
            method: method,
            reference: reference
        };
        
        // Update balance
        this.wallet.balance.current -= amount;
        this.wallet.summary.totalPayments += amount;
        
        // Add transaction
        this.addTransaction(payment);
        
        return payment;
    }

    // Get payment schedule
    getPaymentSchedule() {
        const schedule = [];
        const statement = this.generateSupplierStatement();
        
        statement.transactions.forEach(txn => {
            if (txn.type === 'PURCHASE_ORDER' && txn.status === 'Pending') {
                const dueDate = new Date(txn.dueDate);
                const today = new Date();
                const daysUntilDue = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
                
                schedule.push({
                    invoiceId: txn.reference,
                    dueDate: txn.dueDate,
                    amount: txn.credit,
                    daysUntilDue: daysUntilDue,
                    status: daysUntilDue < 0 ? 'overdue' : daysUntilDue <= 7 ? 'due_soon' : 'upcoming',
                    priority: daysUntilDue < 0 ? 'high' : daysUntilDue <= 7 ? 'medium' : 'low'
                });
            }
        });
        
        return schedule.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }

    // Get wallet summary for dashboard
    getSummary() {
        return {
            supplierId: this.supplierId,
            supplierName: this.wallet.supplierName,
            currentBalance: this.wallet.balance.current,
            creditLimit: this.wallet.balance.creditLimit,
            availableCredit: this.wallet.balance.available,
            paymentStatus: this.wallet.paymentStatus.status,
            relationshipScore: this.wallet.metrics.relationshipScore,
            riskLevel: this.wallet.visual.riskLevel,
            nextPaymentDue: this.wallet.paymentStatus.nextPaymentDue,
            nextPaymentAmount: this.wallet.paymentStatus.nextPaymentAmount
        };
    }
}

// ==================== SUPPLIER E-WALLET MANAGER ====================
class SupplierEWalletManager {
    constructor() {
        this.wallets = new Map();
        this.loadWallets();
    }

    // Create or get existing wallet
    getWallet(supplierId) {
        if (!this.wallets.has(supplierId)) {
            const wallet = new SupplierEWallet(supplierId);
            this.wallets.set(supplierId, wallet);
            this.saveWallets();
        }
        return this.wallets.get(supplierId);
    }

    // Get all wallets
    getAllWallets() {
        const walletData = [];
        this.wallets.forEach((wallet, supplierId) => {
            walletData.push(wallet.getSummary());
        });
        return walletData.sort((a, b) => b.currentBalance - a.currentBalance);
    }

    // Get wallets by status
    getWalletsByStatus(status) {
        return this.getAllWallets().filter(wallet => wallet.paymentStatus === status);
    }

    // Get high-risk wallets
    getHighRiskWallets() {
        return this.getAllWallets().filter(wallet => wallet.riskLevel === 'high');
    }

    // Get dashboard summary
    getDashboardSummary() {
        const allWallets = this.getAllWallets();
        
        return {
            totalSuppliers: allWallets.length,
            totalPayables: allWallets.reduce((sum, w) => sum + w.currentBalance, 0),
            overdueSuppliers: allWallets.filter(w => w.paymentStatus === 'overdue').length,
            dueSoonSuppliers: allWallets.filter(w => w.paymentStatus === 'due_soon').length,
            highRiskSuppliers: allWallets.filter(w => w.riskLevel === 'high').length,
            averageRelationshipScore: allWallets.reduce((sum, w) => sum + w.relationshipScore, 0) / allWallets.length || 0
        };
    }

    // Save wallets to storage
    saveWallets() {
        try {
            const walletData = {};
            this.wallets.forEach((wallet, supplierId) => {
                walletData[supplierId] = wallet.getWalletData();
            });
            localStorage.setItem('supplierEWallets', JSON.stringify(walletData));
        } catch (error) {
            console.error('Error saving supplier e-wallets:', error);
        }
    }

    // Load wallets from storage
    loadWallets() {
        try {
            const savedWallets = localStorage.getItem('supplierEWallets');
            if (savedWallets) {
                const walletData = JSON.parse(savedWallets);
                Object.keys(walletData).forEach(supplierId => {
                    const wallet = new SupplierEWallet(supplierId);
                    // Restore wallet data
                    Object.assign(wallet.wallet, walletData[supplierId]);
                    this.wallets.set(supplierId, wallet);
                });
            }
        } catch (error) {
            console.error('Error loading supplier e-wallets:', error);
        }
    }

    // Refresh all wallets
    refreshAllWallets() {
        this.wallets.forEach((wallet, supplierId) => {
            wallet.initializeWallet();
        });
        this.saveWallets();
    }
}

// ==================== GLOBAL FUNCTIONS ====================

// Initialize global wallet manager
let supplierEWalletManager = null;

function initializeSupplierEWalletSystem() {
    console.log('💳 Initializing Supplier E-Wallet System...');
    supplierEWalletManager = new SupplierEWalletManager();
    console.log('✅ Supplier E-Wallet System initialized successfully!');
    return supplierEWalletManager;
}

// Get supplier wallet
function getSupplierWallet(supplierId) {
    if (!supplierEWalletManager) {
        initializeSupplierEWalletSystem();
    }
    return supplierEWalletManager.getWallet(supplierId);
}

// Get all supplier wallets
function getAllSupplierWallets() {
    if (!supplierEWalletManager) {
        initializeSupplierEWalletSystem();
    }
    return supplierEWalletManager.getAllWallets();
}

// Get supplier wallet dashboard
function getSupplierWalletDashboard() {
    if (!supplierEWalletManager) {
        initializeSupplierEWalletSystem();
    }
    return supplierEWalletManager.getDashboardSummary();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SupplierEWallet,
        SupplierEWalletManager,
        initializeSupplierEWalletSystem,
        getSupplierWallet,
        getAllSupplierWallets,
        getSupplierWalletDashboard
    };
}

// ==================== DEMO FUNCTIONS ====================

// Demo supplier e-wallet system
function demoSupplierEWalletSystem() {
    console.log('💳 SUPPLIER E-WALLET SYSTEM DEMONSTRATION');
    console.log('='.repeat(60));

    // Initialize system
    initializeSupplierEWalletSystem();

    // Create sample suppliers if they don't exist
    if (typeof suppliers === 'undefined') {
        window.suppliers = [
            { id: 'SUP001', name: 'K2 Manufacturing', creditLimit: 50000, paymentTerms: 'net30' },
            { id: 'SUP002', name: 'Global Electronics Ltd', creditLimit: 75000, paymentTerms: 'net45' },
            { id: 'SUP003', name: 'Asia Components Co', creditLimit: 30000, paymentTerms: 'net15' }
        ];
    }

    // Create sample supplier invoices
    if (typeof supplierInvoices === 'undefined') {
        window.supplierInvoices = [
            { id: 'PO001', supplier: 'SUP001', date: '2024-06-01', amount: 15000, status: 'Pending', dueDate: '2024-07-01' },
            { id: 'PO002', supplier: 'SUP002', date: '2024-06-05', amount: 25000, status: 'Paid', dueDate: '2024-07-20' },
            { id: 'PO003', supplier: 'SUP003', date: '2024-06-10', amount: 8000, status: 'Overdue', dueDate: '2024-06-25' }
        ];
    }

    console.log('📊 DASHBOARD SUMMARY:');
    const dashboard = getSupplierWalletDashboard();
    console.log(`   Total Suppliers: ${dashboard.totalSuppliers}`);
    console.log(`   Total Payables: $${dashboard.totalPayables.toLocaleString()}`);
    console.log(`   Overdue Suppliers: ${dashboard.overdueSuppliers}`);
    console.log(`   Average Relationship Score: ${Math.round(dashboard.averageRelationshipScore)}%`);
    console.log('');

    console.log('💳 SUPPLIER WALLETS:');
    const wallets = getAllSupplierWallets();
    wallets.forEach(wallet => {
        console.log(`   ${wallet.supplierName}:`);
        console.log(`     Balance: $${wallet.currentBalance.toLocaleString()}`);
        console.log(`     Status: ${wallet.paymentStatus}`);
        console.log(`     Risk Level: ${wallet.riskLevel}`);
        console.log(`     Relationship Score: ${Math.round(wallet.relationshipScore)}%`);
        if (wallet.nextPaymentDue) {
            console.log(`     Next Payment: $${wallet.nextPaymentAmount.toLocaleString()} due ${wallet.nextPaymentDue}`);
        }
        console.log('');
    });

    console.log('🎯 DETAILED WALLET EXAMPLE - K2 Manufacturing:');
    const k2Wallet = getSupplierWallet('SUP001');
    const k2Data = k2Wallet.getWalletData();
    console.log(`   Supplier: ${k2Data.supplierName}`);
    console.log(`   Current Balance: $${k2Data.balance.current.toLocaleString()}`);
    console.log(`   Credit Limit: $${k2Data.balance.creditLimit.toLocaleString()}`);
    console.log(`   Available Credit: $${k2Data.balance.available.toLocaleString()}`);
    console.log(`   Payment Status: ${k2Data.paymentStatus.status}`);
    console.log(`   Relationship Score: ${Math.round(k2Data.metrics.relationshipScore)}%`);
    console.log(`   Business Volume: $${k2Data.metrics.businessVolume.toLocaleString()}`);
    console.log('');

    console.log('📋 RECENT TRANSACTIONS:');
    k2Data.recentTransactions.slice(0, 5).forEach(txn => {
        const amount = txn.amount >= 0 ? `+$${txn.amount.toLocaleString()}` : `-$${Math.abs(txn.amount).toLocaleString()}`;
        console.log(`   ${txn.date} - ${txn.type}: ${amount} (${txn.description})`);
    });
    console.log('');

    console.log('📅 PAYMENT SCHEDULE:');
    const schedule = k2Wallet.getPaymentSchedule();
    schedule.forEach(item => {
        console.log(`   ${item.invoiceId}: $${item.amount.toLocaleString()} due ${item.dueDate} (${item.status})`);
    });
    console.log('');

    console.log('💰 MAKING A SAMPLE PAYMENT:');
    const payment = k2Wallet.makePayment(5000, 'bank_transfer', 'Payment for PO001');
    console.log(`   Payment Made: $${payment.debit.toLocaleString()}`);
    console.log(`   New Balance: $${k2Wallet.getWalletData().balance.current.toLocaleString()}`);
    console.log('');

    console.log('✅ SUPPLIER E-WALLET SYSTEM DEMO COMPLETE!');
    console.log('💡 Open supplier-ewallet-interface.html for visual interface');
    console.log('='.repeat(60));
}

// Auto-initialize when loaded in browser
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        initializeSupplierEWalletSystem();
    });
}
