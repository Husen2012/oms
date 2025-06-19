// 🏢 ENTERPRISE ACCOUNTING SYSTEM - CHART OF ACCOUNTS
// Task 1.1: Comprehensive Chart of Accounts System
// Status: ✅ IN PROGRESS

// ==================== COMPREHENSIVE CHART OF ACCOUNTS ====================
const CHART_OF_ACCOUNTS = {
    // ASSETS (1000-1999) - What the company owns
    assets: {
        currentAssets: {
            // Cash and Cash Equivalents (1000-1099)
            '1000': { name: 'Cash and Cash Equivalents', type: 'asset', category: 'current_assets', normalBalance: 'debit' },
            '1010': { name: 'Bank Account - Operating', type: 'asset', category: 'current_assets', normalBalance: 'debit' },
            '1020': { name: 'Bank Account - Savings', type: 'asset', category: 'current_assets', normalBalance: 'debit' },
            '1030': { name: 'Petty Cash', type: 'asset', category: 'current_assets', normalBalance: 'debit' },
            '1040': { name: 'Cash in Transit', type: 'asset', category: 'current_assets', normalBalance: 'debit' },
            
            // Receivables (1100-1199)
            '1100': { name: 'Accounts Receivable', type: 'asset', category: 'current_assets', normalBalance: 'debit' },
            '1110': { name: 'Trade Receivables - Customers', type: 'asset', category: 'current_assets', normalBalance: 'debit' },
            '1120': { name: 'Allowance for Doubtful Accounts', type: 'asset', category: 'current_assets', normalBalance: 'credit', contra: true },
            '1130': { name: 'Customer Deposits Receivable', type: 'asset', category: 'current_assets', normalBalance: 'debit' },
            '1140': { name: 'Prepaid Expenses', type: 'asset', category: 'current_assets', normalBalance: 'debit' },
            '1150': { name: 'Accrued Revenue', type: 'asset', category: 'current_assets', normalBalance: 'debit' },
            '1160': { name: 'Shipping Receivables', type: 'asset', category: 'current_assets', normalBalance: 'debit' },
            '1170': { name: 'Commission Receivables', type: 'asset', category: 'current_assets', normalBalance: 'debit' },
            
            // Inventory (1200-1299)
            '1200': { name: 'Inventory', type: 'asset', category: 'current_assets', normalBalance: 'debit' },
            '1210': { name: 'Raw Materials Inventory', type: 'asset', category: 'current_assets', normalBalance: 'debit' },
            '1220': { name: 'Finished Goods Inventory', type: 'asset', category: 'current_assets', normalBalance: 'debit' },
            '1230': { name: 'Inventory in Transit', type: 'asset', category: 'current_assets', normalBalance: 'debit' },
            '1240': { name: 'Inventory Adjustments', type: 'asset', category: 'current_assets', normalBalance: 'debit' },
            '1250': { name: 'Inventory Reserve', type: 'asset', category: 'current_assets', normalBalance: 'credit', contra: true }
        },
        
        fixedAssets: {
            // Property, Plant & Equipment (1300-1399)
            '1300': { name: 'Property, Plant & Equipment', type: 'asset', category: 'fixed_assets', normalBalance: 'debit' },
            '1310': { name: 'Office Equipment', type: 'asset', category: 'fixed_assets', normalBalance: 'debit' },
            '1320': { name: 'Computer Equipment', type: 'asset', category: 'fixed_assets', normalBalance: 'debit' },
            '1330': { name: 'Accumulated Depreciation', type: 'asset', category: 'fixed_assets', normalBalance: 'credit', contra: true },
            '1340': { name: 'Intangible Assets', type: 'asset', category: 'fixed_assets', normalBalance: 'debit' },
            '1350': { name: 'Goodwill', type: 'asset', category: 'fixed_assets', normalBalance: 'debit' }
        }
    },
    
    // LIABILITIES (2000-2999) - What the company owes
    liabilities: {
        currentLiabilities: {
            // Accounts Payable (2000-2099)
            '2000': { name: 'Accounts Payable', type: 'liability', category: 'current_liabilities', normalBalance: 'credit' },
            '2010': { name: 'Trade Payables - Suppliers', type: 'liability', category: 'current_liabilities', normalBalance: 'credit' },
            '2015': { name: 'Shipping Company Payables', type: 'liability', category: 'current_liabilities', normalBalance: 'credit' },
            '2016': { name: 'DHL Payables', type: 'liability', category: 'current_liabilities', normalBalance: 'credit' },
            '2017': { name: 'FedEx Payables', type: 'liability', category: 'current_liabilities', normalBalance: 'credit' },
            '2018': { name: 'UPS Payables', type: 'liability', category: 'current_liabilities', normalBalance: 'credit' },
            '2019': { name: 'Sea Freight Payables', type: 'liability', category: 'current_liabilities', normalBalance: 'credit' },
            
            // Accrued Liabilities (2020-2099)
            '2020': { name: 'Accrued Expenses', type: 'liability', category: 'current_liabilities', normalBalance: 'credit' },
            '2030': { name: 'Short-term Loans', type: 'liability', category: 'current_liabilities', normalBalance: 'credit' },
            '2040': { name: 'Customer Advances', type: 'liability', category: 'current_liabilities', normalBalance: 'credit' },
            '2050': { name: 'Accrued Salaries', type: 'liability', category: 'current_liabilities', normalBalance: 'credit' },
            '2060': { name: 'Accrued Interest', type: 'liability', category: 'current_liabilities', normalBalance: 'credit' },
            
            // Tax Liabilities (2100-2199)
            '2100': { name: 'Tax Liabilities', type: 'liability', category: 'current_liabilities', normalBalance: 'credit' },
            '2110': { name: 'Sales Tax Payable', type: 'liability', category: 'current_liabilities', normalBalance: 'credit' },
            '2120': { name: 'Income Tax Payable', type: 'liability', category: 'current_liabilities', normalBalance: 'credit' },
            '2130': { name: 'VAT Payable', type: 'liability', category: 'current_liabilities', normalBalance: 'credit' },
            '2140': { name: 'Import Duties Payable', type: 'liability', category: 'current_liabilities', normalBalance: 'credit' }
        },
        
        longTermLiabilities: {
            // Long-term Debt (2200-2299)
            '2200': { name: 'Long-term Debt', type: 'liability', category: 'long_term_liabilities', normalBalance: 'credit' },
            '2210': { name: 'Mortgage Payable', type: 'liability', category: 'long_term_liabilities', normalBalance: 'credit' },
            '2220': { name: 'Equipment Loans', type: 'liability', category: 'long_term_liabilities', normalBalance: 'credit' },
            '2230': { name: 'Deferred Tax Liability', type: 'liability', category: 'long_term_liabilities', normalBalance: 'credit' }
        }
    },
    
    // EQUITY (3000-3999) - Owner's stake in the company
    equity: {
        '3000': { name: 'Owner\'s Equity', type: 'equity', category: 'equity', normalBalance: 'credit' },
        '3100': { name: 'Retained Earnings', type: 'equity', category: 'equity', normalBalance: 'credit' },
        '3200': { name: 'Current Year Earnings', type: 'equity', category: 'equity', normalBalance: 'credit' },
        '3300': { name: 'Capital Contributions', type: 'equity', category: 'equity', normalBalance: 'credit' },
        '3400': { name: 'Drawings', type: 'equity', category: 'equity', normalBalance: 'debit', contra: true },
        '3500': { name: 'Accumulated Other Comprehensive Income', type: 'equity', category: 'equity', normalBalance: 'credit' }
    },
    
    // REVENUE (4000-4999) - Income from business operations
    revenue: {
        operatingRevenue: {
            // Sales Revenue (4000-4099)
            '4000': { name: 'Sales Revenue', type: 'revenue', category: 'operating_revenue', normalBalance: 'credit' },
            '4010': { name: 'Product Sales Revenue', type: 'revenue', category: 'operating_revenue', normalBalance: 'credit' },
            '4020': { name: 'Commission Revenue', type: 'revenue', category: 'operating_revenue', normalBalance: 'credit' },
            
            // Shipping Revenue (4030-4099)
            '4030': { name: 'Shipping Revenue - Air', type: 'revenue', category: 'operating_revenue', normalBalance: 'credit' },
            '4031': { name: 'Shipping Revenue - Sea', type: 'revenue', category: 'operating_revenue', normalBalance: 'credit' },
            '4032': { name: 'Shipping Revenue - Express', type: 'revenue', category: 'operating_revenue', normalBalance: 'credit' },
            '4033': { name: 'Shipping Revenue - Standard', type: 'revenue', category: 'operating_revenue', normalBalance: 'credit' },
            '4040': { name: 'Service Revenue', type: 'revenue', category: 'operating_revenue', normalBalance: 'credit' }
        },
        
        otherRevenue: {
            // Other Revenue (4100-4199)
            '4100': { name: 'Other Revenue', type: 'revenue', category: 'other_revenue', normalBalance: 'credit' },
            '4110': { name: 'Interest Income', type: 'revenue', category: 'other_revenue', normalBalance: 'credit' },
            '4120': { name: 'Foreign Exchange Gains', type: 'revenue', category: 'other_revenue', normalBalance: 'credit' },
            '4130': { name: 'Discount Income', type: 'revenue', category: 'other_revenue', normalBalance: 'credit' },
            '4140': { name: 'Miscellaneous Income', type: 'revenue', category: 'other_revenue', normalBalance: 'credit' }
        }
    },
    
    // EXPENSES (5000-5999) - Costs of doing business
    expenses: {
        cogs: {
            // Cost of Goods Sold (5000-5099)
            '5000': { name: 'Cost of Goods Sold', type: 'expense', category: 'cogs', normalBalance: 'debit' },
            '5010': { name: 'Product Costs', type: 'expense', category: 'cogs', normalBalance: 'debit' },
            '5020': { name: 'Freight In', type: 'expense', category: 'cogs', normalBalance: 'debit' },
            '5030': { name: 'Import Duties', type: 'expense', category: 'cogs', normalBalance: 'debit' },
            '5040': { name: 'Inventory Adjustments', type: 'expense', category: 'cogs', normalBalance: 'debit' },
            '5050': { name: 'Purchase Discounts', type: 'expense', category: 'cogs', normalBalance: 'credit', contra: true }
        },
        
        operatingExpenses: {
            // Shipping Expenses (6000-6099)
            '6000': { name: 'Operating Expenses', type: 'expense', category: 'operating_expenses', normalBalance: 'debit' },
            '6010': { name: 'Shipping Expenses - DHL', type: 'expense', category: 'operating_expenses', normalBalance: 'debit' },
            '6011': { name: 'Shipping Expenses - FedEx', type: 'expense', category: 'operating_expenses', normalBalance: 'debit' },
            '6012': { name: 'Shipping Expenses - UPS', type: 'expense', category: 'operating_expenses', normalBalance: 'debit' },
            '6013': { name: 'Shipping Expenses - Sea Freight', type: 'expense', category: 'operating_expenses', normalBalance: 'debit' },
            '6014': { name: 'Shipping Expenses - Other', type: 'expense', category: 'operating_expenses', normalBalance: 'debit' },
            
            // General Operating Expenses (6020-6099)
            '6020': { name: 'Office Rent', type: 'expense', category: 'operating_expenses', normalBalance: 'debit' },
            '6030': { name: 'Utilities', type: 'expense', category: 'operating_expenses', normalBalance: 'debit' },
            '6040': { name: 'Insurance', type: 'expense', category: 'operating_expenses', normalBalance: 'debit' },
            '6050': { name: 'Professional Services', type: 'expense', category: 'operating_expenses', normalBalance: 'debit' },
            '6060': { name: 'Bank Charges', type: 'expense', category: 'operating_expenses', normalBalance: 'debit' },
            '6070': { name: 'Foreign Exchange Losses', type: 'expense', category: 'operating_expenses', normalBalance: 'debit' },
            '6080': { name: 'Depreciation Expense', type: 'expense', category: 'operating_expenses', normalBalance: 'debit' },
            '6090': { name: 'Bad Debt Expense', type: 'expense', category: 'operating_expenses', normalBalance: 'debit' }
        }
    }
};

// ==================== ACCOUNT MANAGEMENT FUNCTIONS ====================

// Get account information by code
function getAccountInfo(accountCode) {
    for (const category of Object.values(CHART_OF_ACCOUNTS)) {
        if (typeof category === 'object') {
            for (const subCategory of Object.values(category)) {
                if (typeof subCategory === 'object' && subCategory[accountCode]) {
                    return {
                        code: accountCode,
                        ...subCategory[accountCode]
                    };
                }
            }
            if (category[accountCode]) {
                return {
                    code: accountCode,
                    ...category[accountCode]
                };
            }
        }
    }
    return null;
}

// Get all accounts by type
function getAccountsByType(accountType) {
    const accounts = [];
    for (const category of Object.values(CHART_OF_ACCOUNTS)) {
        if (typeof category === 'object') {
            for (const subCategory of Object.values(category)) {
                if (typeof subCategory === 'object') {
                    for (const [code, account] of Object.entries(subCategory)) {
                        if (account.type === accountType) {
                            accounts.push({ code, ...account });
                        }
                    }
                }
            }
        }
    }
    return accounts;
}

// Get all accounts by category
function getAccountsByCategory(categoryName) {
    const accounts = [];
    for (const category of Object.values(CHART_OF_ACCOUNTS)) {
        if (typeof category === 'object') {
            for (const subCategory of Object.values(category)) {
                if (typeof subCategory === 'object') {
                    for (const [code, account] of Object.entries(subCategory)) {
                        if (account.category === categoryName) {
                            accounts.push({ code, ...account });
                        }
                    }
                }
            }
        }
    }
    return accounts;
}

// Validate account code
function validateAccountCode(accountCode) {
    const account = getAccountInfo(accountCode);
    if (!account) {
        throw new Error(`Invalid account code: ${accountCode}`);
    }
    return account;
}

// Get account name by code
function getAccountName(accountCode) {
    const account = getAccountInfo(accountCode);
    return account ? account.name : `Unknown Account (${accountCode})`;
}

// Get all accounts as flat list
function getAllAccounts() {
    const accounts = [];
    for (const category of Object.values(CHART_OF_ACCOUNTS)) {
        if (typeof category === 'object') {
            for (const subCategory of Object.values(category)) {
                if (typeof subCategory === 'object') {
                    for (const [code, account] of Object.entries(subCategory)) {
                        accounts.push({ code, ...account });
                    }
                }
            }
        }
    }
    return accounts.sort((a, b) => a.code.localeCompare(b.code));
}

// ==================== SPECIALIZED ACCOUNT MAPPINGS ====================

// Shipping company account mappings
const SHIPPING_COMPANY_ACCOUNTS = {
    'DHL': {
        expenseAccount: '6010',
        payableAccount: '2016'
    },
    'FedEx': {
        expenseAccount: '6011',
        payableAccount: '2017'
    },
    'UPS': {
        expenseAccount: '6012',
        payableAccount: '2018'
    },
    'Sea Freight': {
        expenseAccount: '6013',
        payableAccount: '2019'
    }
};

// Revenue account mappings for shipping types
const SHIPPING_REVENUE_ACCOUNTS = {
    'air': '4030',
    'sea': '4031',
    'express': '4032',
    'standard': '4033'
};

// Get shipping company accounts
function getShippingCompanyAccounts(companyName) {
    return SHIPPING_COMPANY_ACCOUNTS[companyName] || {
        expenseAccount: '6014', // Other shipping expenses
        payableAccount: '2015'  // General shipping payables
    };
}

// Get shipping revenue account
function getShippingRevenueAccount(shippingType) {
    return SHIPPING_REVENUE_ACCOUNTS[shippingType] || '4030'; // Default to air
}

// ==================== INITIALIZATION ====================

// Initialize chart of accounts
function initializeChartOfAccounts() {
    console.log('📊 Initializing Chart of Accounts...');
    
    const totalAccounts = getAllAccounts().length;
    const assetAccounts = getAccountsByType('asset').length;
    const liabilityAccounts = getAccountsByType('liability').length;
    const equityAccounts = getAccountsByType('equity').length;
    const revenueAccounts = getAccountsByType('revenue').length;
    const expenseAccounts = getAccountsByType('expense').length;
    
    console.log('✅ Chart of Accounts initialized successfully!');
    console.log(`📋 Total Accounts: ${totalAccounts}`);
    console.log(`💰 Assets: ${assetAccounts} accounts`);
    console.log(`💳 Liabilities: ${liabilityAccounts} accounts`);
    console.log(`🏛️ Equity: ${equityAccounts} accounts`);
    console.log(`📈 Revenue: ${revenueAccounts} accounts`);
    console.log(`📉 Expenses: ${expenseAccounts} accounts`);
    
    return {
        totalAccounts,
        assetAccounts,
        liabilityAccounts,
        equityAccounts,
        revenueAccounts,
        expenseAccounts
    };
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CHART_OF_ACCOUNTS,
        getAccountInfo,
        getAccountsByType,
        getAccountsByCategory,
        validateAccountCode,
        getAccountName,
        getAllAccounts,
        getShippingCompanyAccounts,
        getShippingRevenueAccount,
        initializeChartOfAccounts
    };
}

// Auto-initialize when loaded in browser
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        initializeChartOfAccounts();
    });
}
