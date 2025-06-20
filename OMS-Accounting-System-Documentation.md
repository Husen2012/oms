# 📚 Order Management System - Accounting System Documentation
## Complete Double-Entry Bookkeeping Implementation

---

## 🎯 **Accounting System Overview**

The OMS implements a comprehensive **double-entry bookkeeping system** specifically designed for sourcing agent businesses. The system automatically generates journal entries for all business transactions, maintains real-time account balances, and provides detailed financial reporting capabilities.

### **Key Features**
- ✅ **Automated Journal Entries** for all transactions
- ✅ **Real-time Account Balances** with proper debit/credit handling
- ✅ **Multi-Carrier Shipping Integration** with dedicated accounts
- ✅ **Revenue Recognition** with commission and shipping breakdown
- ✅ **FIFO Inventory Costing** for accurate COGS calculation
- ✅ **Comprehensive Financial Reporting** with P&L and Balance Sheet
- ✅ **Audit Trail** with complete transaction history

---

## 📊 **Chart of Accounts Structure**

### **Assets (1000-1999)**
```javascript
1010: "Bank Account - Operating"           // Main operating cash account
1020: "Bank Account - Savings"             // Savings/reserve account
1030: "Petty Cash"                         // Small cash transactions
1110: "Accounts Receivable - Trade"        // Customer receivables
1120: "Allowance for Doubtful Accounts"    // Bad debt provision
1150: "Shipping Deposits & Prepaid"        // Prepaid shipping accounts
1160: "Shipping Receivables"               // Outstanding shipping charges
1220: "Finished Goods Inventory"           // Product inventory
1230: "Inventory in Transit"               // Goods in shipment
1310: "Equipment"                          // Fixed assets
1330: "Accumulated Depreciation"           // Equipment depreciation
```

### **Liabilities (2000-2999)**
```javascript
2010: "Accounts Payable - Trade"           // General supplier payables
2015: "Accounts Payable - DHL Express"     // DHL-specific payables
2016: "Accounts Payable - FedEx"           // FedEx-specific payables
2017: "Accounts Payable - UPS"             // UPS-specific payables
2018: "Accounts Payable - China Post"      // China Post payables
2019: "Accounts Payable - SF Express"      // SF Express payables
2020: "Accounts Payable - Aramex"          // Aramex payables
2021: "Accounts Payable - EMS"             // EMS payables
2030: "Accrued Expenses"                   // Accrued liabilities
2200: "Sales Tax Payable"                  // Tax obligations
2210: "Income Tax Payable"                 // Income tax liability
```

### **Equity (3000-3999)**
```javascript
3000: "Owner's Equity"                     // Initial capital
3100: "Retained Earnings"                  // Accumulated profits
3200: "Current Year Earnings"              // Current period profit
```

### **Revenue (4000-4999)**
```javascript
4010: "Product Sales Revenue"              // Core product sales
4020: "Commission Revenue"                 // Commission income
4030: "Air Shipping Revenue"               // Air freight revenue
4031: "Sea Shipping Revenue"               // Sea freight revenue
4032: "Express Shipping Revenue"           // Express service revenue
4033: "Standard Shipping Revenue"          // Standard shipping revenue
4100: "Other Revenue"                      // Miscellaneous income
```

### **Expenses (5000-6999)**
```javascript
5010: "Cost of Goods Sold"                // Product costs
5020: "Freight In"                         // Inbound shipping costs

6000: "Commission Expenses"                // Sales commissions paid
6010: "Shipping Expenses - DHL"            // DHL shipping costs
6011: "Shipping Expenses - FedEx"          // FedEx shipping costs
6012: "Shipping Expenses - UPS"            // UPS shipping costs
6013: "Shipping Expenses - China Post"     // China Post costs
6014: "Shipping Expenses - SF Express"     // SF Express costs
6015: "Shipping Expenses - Aramex"         // Aramex costs
6016: "Shipping Expenses - EMS"            // EMS costs
6020: "Fuel Surcharges"                    // Carrier fuel surcharges
6030: "Customs & Duties"                   // Import/export fees
6100: "Office Expenses"                    // General office costs
6200: "Professional Services"              // Legal, accounting fees
6300: "Insurance"                          // Business insurance
6400: "Depreciation Expense"               // Asset depreciation
```

### **Other Income/Expense (7000-7999)**
```javascript
7000: "Interest Income"                    // Bank interest earned
7100: "Interest Expense"                   // Interest paid
7200: "Foreign Exchange Gain/Loss"         // Currency fluctuations
```

---

## 🔧 **Journal Entry System Architecture**

### **JournalEntry Class Structure**
```javascript
class JournalEntry {
    constructor(date, description, reference) {
        this.id = generateJournalEntryId();        // Unique identifier
        this.date = date;                          // Transaction date
        this.description = description;            // Transaction description
        this.reference = reference;                // Reference number (PO, SO, etc.)
        this.debits = [];                         // Array of debit entries
        this.credits = [];                        // Array of credit entries
        this.totalDebits = 0;                     // Total debit amount
        this.totalCredits = 0;                    // Total credit amount
        this.balanced = false;                    // Balance validation
        this.createdDate = new Date().toISOString(); // Creation timestamp
    }
}
```

### **Debit/Credit Entry Structure**
```javascript
{
    accountCode: "1110",                          // Chart of accounts code
    accountName: "Accounts Receivable - Trade",   // Account name
    amount: 1500.00,                             // Transaction amount
    description: "Sale to Customer ABC"          // Line item description
}
```

---

## 💼 **Automated Transaction Recording**

### **1. Purchase Order Transactions**
**When a Purchase Order is created:**
```javascript
function createPurchaseOrderJournalEntry(po) {
    const je = new JournalEntry(
        po.date,
        `Purchase Order ${po.id} - ${po.supplier}`,
        po.id
    );

    // Dr. Inventory (increase asset)
    je.addDebit('1220', po.amount, `Inventory purchase from ${po.supplier}`);
    
    // Cr. Accounts Payable (increase liability)
    je.addCredit('2010', po.amount, `Amount owed to ${po.supplier}`);

    return postJournalEntry(je);
}
```

**Business Impact:**
- Increases inventory asset value
- Records obligation to pay supplier
- Maintains balance sheet equation

### **2. Sales Order Transactions**
**When a Sales Order is created:**
```javascript
function createSalesOrderJournalEntry(invoice) {
    const je = new JournalEntry(
        invoice.date,
        `Sales Order ${invoice.id} - ${invoice.customer}`,
        invoice.id
    );

    // Dr. Accounts Receivable (increase asset)
    je.addDebit('1110', invoice.amount, `Sale to ${invoice.customer}`);
    
    // Cr. Product Sales Revenue (increase revenue)
    je.addCredit('4010', invoice.subtotal, 'Product sales revenue');
    
    // Cr. Commission Revenue (increase revenue)
    if (invoice.commissionAmount > 0) {
        je.addCredit('4020', invoice.commissionAmount, 'Commission revenue');
    }
    
    // Cr. Shipping Revenue (increase revenue)
    if (invoice.shippingFee > 0) {
        const shippingAccount = getShippingRevenueAccount(invoice.shippingType);
        je.addCredit(shippingAccount, invoice.shippingFee, 'Shipping revenue');
    }

    // Record Cost of Goods Sold (COGS)
    const cogsAmount = calculateCOGS(invoice.products);
    if (cogsAmount > 0) {
        je.addDebit('5010', cogsAmount, 'Cost of goods sold');
        je.addCredit('1220', cogsAmount, 'Inventory reduction');
    }

    return postJournalEntry(je);
}
```

**Business Impact:**
- Records customer receivable
- Recognizes revenue by type (product, commission, shipping)
- Calculates and records cost of goods sold
- Reduces inventory value

### **3. Shipping Transactions**
**When a Shipment is created:**
```javascript
function recordShipmentTransaction(shipment) {
    const shippingCompany = getShippingCompany(shipment.carrierId);
    const je = new JournalEntry(
        shipment.shipDate,
        `Shipping Expense - ${shipment.id} via ${shippingCompany.name}`,
        shipment.id
    );

    // Dr. Shipping Expenses (increase expense)
    je.addDebit(
        shippingCompany.accountingMapping.expenseAccount,
        shipment.actualShippingCost,
        `Shipping cost for ${shipment.id}`
    );

    // Cr. Accounts Payable (increase liability)
    je.addCredit(
        shippingCompany.accountingMapping.accountsPayableAccount,
        shipment.actualShippingCost,
        `Amount owed to ${shippingCompany.name}`
    );

    return postJournalEntry(je);
}
```

**Business Impact:**
- Records actual shipping expense by carrier
- Creates specific payable to shipping company
- Enables carrier-specific cost tracking

### **4. Payment Transactions**
**When a Payment is made to Shipping Company:**
```javascript
function recordShippingCompanyPayment(paymentData) {
    const shippingCompany = getShippingCompany(paymentData.shippingCompanyId);
    const je = new JournalEntry(
        paymentData.paymentDate,
        `Payment to ${shippingCompany.name}`,
        paymentData.referenceNumber
    );

    // Dr. Accounts Payable (reduce liability)
    je.addDebit(
        shippingCompany.accountingMapping.accountsPayableAccount,
        paymentData.amount,
        `Payment to ${shippingCompany.name}`
    );

    // Cr. Cash (reduce asset)
    je.addCredit('1010', paymentData.amount, 
        `Payment via ${paymentData.paymentMethod}`);

    return postJournalEntry(je);
}
```

---

## 📈 **Account Balance Management**

### **Balance Calculation Logic**
```javascript
function calculateNetBalance(accountCode) {
    const account = accountBalances[accountCode];
    const accountInfo = chartOfAccounts[accountCode];

    if (accountInfo) {
        // Assets and Expenses: Debit increases balance
        if (accountInfo.type === 'asset' || accountInfo.type === 'expense') {
            account.netBalance = account.debitBalance - account.creditBalance;
        }
        // Liabilities, Equity, Revenue: Credit increases balance
        else if (accountInfo.type === 'liability' || 
                 accountInfo.type === 'equity' || 
                 accountInfo.type === 'revenue') {
            account.netBalance = account.creditBalance - account.debitBalance;
        }
    }
}
```

### **Real-time Balance Updates**
Every journal entry automatically updates account balances:
```javascript
function updateAccountBalances(journalEntry) {
    // Process debits
    journalEntry.debits.forEach(debit => {
        if (!accountBalances[debit.accountCode]) {
            accountBalances[debit.accountCode] = {
                accountCode: debit.accountCode,
                accountName: debit.accountName,
                debitBalance: 0,
                creditBalance: 0,
                netBalance: 0
            };
        }
        accountBalances[debit.accountCode].debitBalance += debit.amount;
        calculateNetBalance(debit.accountCode);
    });

    // Process credits
    journalEntry.credits.forEach(credit => {
        // Similar logic for credits
    });
}
```

---

## 📊 **Financial Reporting System**

### **Profit & Loss Statement**
```javascript
function generateProfitLossStatement(startDate, endDate) {
    const revenue = {
        productSales: getAccountBalance('4010', startDate, endDate),
        commissionRevenue: getAccountBalance('4020', startDate, endDate),
        airShippingRevenue: getAccountBalance('4030', startDate, endDate),
        seaShippingRevenue: getAccountBalance('4031', startDate, endDate),
        expressShippingRevenue: getAccountBalance('4032', startDate, endDate),
        standardShippingRevenue: getAccountBalance('4033', startDate, endDate),
        otherRevenue: getAccountBalance('4100', startDate, endDate)
    };

    const totalRevenue = Object.values(revenue).reduce((sum, val) => sum + val, 0);

    const cogs = {
        productCosts: getAccountBalance('5010', startDate, endDate),
        freightIn: getAccountBalance('5020', startDate, endDate)
    };

    const totalCOGS = Object.values(cogs).reduce((sum, val) => sum + val, 0);
    const grossProfit = totalRevenue - totalCOGS;

    const expenses = {
        commissionExpenses: getAccountBalance('6000', startDate, endDate),
        shippingExpenses: getShippingExpensesTotal(startDate, endDate),
        officeExpenses: getAccountBalance('6100', startDate, endDate),
        professionalServices: getAccountBalance('6200', startDate, endDate),
        insurance: getAccountBalance('6300', startDate, endDate),
        depreciation: getAccountBalance('6400', startDate, endDate)
    };

    const totalExpenses = Object.values(expenses).reduce((sum, val) => sum + val, 0);
    const netIncome = grossProfit - totalExpenses;

    return {
        revenue,
        totalRevenue,
        cogs,
        totalCOGS,
        grossProfit,
        grossProfitMargin: (grossProfit / totalRevenue) * 100,
        expenses,
        totalExpenses,
        netIncome,
        netProfitMargin: (netIncome / totalRevenue) * 100
    };
}
```

### **Balance Sheet**
```javascript
function generateBalanceSheet(asOfDate) {
    const assets = {
        currentAssets: {
            cash: getAccountBalance('1010', null, asOfDate),
            accountsReceivable: getAccountBalance('1110', null, asOfDate),
            shippingReceivables: getAccountBalance('1160', null, asOfDate),
            inventory: getAccountBalance('1220', null, asOfDate),
            prepaidShipping: getAccountBalance('1150', null, asOfDate)
        },
        fixedAssets: {
            equipment: getAccountBalance('1310', null, asOfDate),
            accumulatedDepreciation: getAccountBalance('1330', null, asOfDate)
        }
    };

    const liabilities = {
        currentLiabilities: {
            accountsPayable: getAccountBalance('2010', null, asOfDate),
            shippingPayables: getShippingPayablesTotal(asOfDate),
            accruedExpenses: getAccountBalance('2030', null, asOfDate),
            salesTaxPayable: getAccountBalance('2200', null, asOfDate)
        }
    };

    const equity = {
        ownersEquity: getAccountBalance('3000', null, asOfDate),
        retainedEarnings: getAccountBalance('3100', null, asOfDate),
        currentYearEarnings: getAccountBalance('3200', null, asOfDate)
    };

    const totalAssets = calculateTotalAssets(assets);
    const totalLiabilities = calculateTotalLiabilities(liabilities);
    const totalEquity = calculateTotalEquity(equity);

    return {
        assets,
        totalAssets,
        liabilities,
        totalLiabilities,
        equity,
        totalEquity,
        balanced: Math.abs(totalAssets - (totalLiabilities + totalEquity)) < 0.01
    };
}
```

---

## 🚚 **Shipping-Specific Accounting Features**

### **Carrier-Specific Account Mapping**
Each shipping company has dedicated accounts:
```javascript
const shippingCompanyMapping = {
    'DHL001': {
        accountsPayableAccount: '2015',  // Accounts Payable - DHL Express
        expenseAccount: '6010',          // Shipping Expenses - DHL
        defaultCurrency: 'USD'
    },
    'FEDEX001': {
        accountsPayableAccount: '2016',  // Accounts Payable - FedEx
        expenseAccount: '6011',          // Shipping Expenses - FedEx
        defaultCurrency: 'USD'
    }
    // ... additional carriers
};
```

### **Shipping Profit Analysis**
```javascript
function generateShippingProfitAnalysis(startDate, endDate) {
    const shippingRevenue = {
        air: getAccountBalance('4030', startDate, endDate),
        sea: getAccountBalance('4031', startDate, endDate),
        express: getAccountBalance('4032', startDate, endDate),
        standard: getAccountBalance('4033', startDate, endDate)
    };

    const shippingExpenses = {
        dhl: getAccountBalance('6010', startDate, endDate),
        fedex: getAccountBalance('6011', startDate, endDate),
        ups: getAccountBalance('6012', startDate, endDate),
        chinaPost: getAccountBalance('6013', startDate, endDate)
    };

    const totalShippingRevenue = Object.values(shippingRevenue).reduce((sum, val) => sum + val, 0);
    const totalShippingExpenses = Object.values(shippingExpenses).reduce((sum, val) => sum + val, 0);
    const shippingProfit = totalShippingRevenue - totalShippingExpenses;
    const shippingMargin = (shippingProfit / totalShippingRevenue) * 100;

    return {
        revenue: shippingRevenue,
        expenses: shippingExpenses,
        totalRevenue: totalShippingRevenue,
        totalExpenses: totalShippingExpenses,
        profit: shippingProfit,
        margin: shippingMargin
    };
}
```

---

This accounting system documentation provides the foundation for understanding the financial architecture. The next document will cover user guides and technical implementation details.
