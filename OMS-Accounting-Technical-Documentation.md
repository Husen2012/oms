# 🔧 Order Management System - Accounting Technical Documentation
## Developer Guide for Accounting Module Integration

---

## 🎯 **Technical Architecture Overview**

The accounting system is implemented as a comprehensive JavaScript module within `script.js` that provides:
- **Double-entry bookkeeping** with automatic balance validation
- **Real-time transaction processing** with immediate account updates
- **Integrated shipping company accounting** with carrier-specific tracking
- **Comprehensive reporting engine** with financial statement generation
- **Data persistence** using browser localStorage with JSON serialization

### **Core Components**
```
📁 Accounting System Architecture
├── 📊 Chart of Accounts (chartOfAccounts)
├── 📝 Journal Entry System (JournalEntry class)
├── 💰 Account Balance Management (accountBalances)
├── 🚚 Shipping Integration (shippingCompanies)
├── 📈 Reporting Engine (generateReports)
└── 💾 Data Persistence (localStorage)
```

---

## 🏗️ **Data Structures**

### **Chart of Accounts Structure**
```javascript
const chartOfAccounts = {
    [accountCode]: {
        name: "Account Name",
        type: "asset|liability|equity|revenue|expense",
        subtype: "current|fixed|other"
    }
};

// Example:
1110: { 
    name: "Accounts Receivable - Trade", 
    type: "asset", 
    subtype: "current" 
}
```

### **Journal Entry Data Model**
```javascript
class JournalEntry {
    constructor(date, description, reference) {
        this.id = generateJournalEntryId();        // Format: JE-{timestamp}-{random}
        this.date = date;                          // ISO date string
        this.description = description;            // Transaction description
        this.reference = reference;                // Reference ID (PO, SO, SHIP)
        this.debits = [];                         // Array of debit entries
        this.credits = [];                        // Array of credit entries
        this.totalDebits = 0;                     // Sum of all debits
        this.totalCredits = 0;                    // Sum of all credits
        this.balanced = false;                    // Balance validation flag
        this.createdDate = new Date().toISOString(); // Creation timestamp
    }
}
```

### **Account Balance Structure**
```javascript
accountBalances[accountCode] = {
    accountCode: "1110",
    accountName: "Accounts Receivable - Trade",
    debitBalance: 0,      // Total debits to this account
    creditBalance: 0,     // Total credits to this account
    netBalance: 0         // Calculated net balance based on account type
};
```

### **Shipping Company Integration**
```javascript
shippingCompany = {
    id: "DHL001",
    name: "DHL Express",
    code: "DHL",
    type: "international_express",
    accountingMapping: {
        accountsPayableAccount: "2015",    // Dedicated AP account
        expenseAccount: "6010",            // Dedicated expense account
        defaultCurrency: "USD"
    },
    performance: {
        totalShipments: 0,
        totalCost: 0,
        averageCost: 0,
        onTimeRate: 0
    }
};
```

---

## 🔧 **Core Functions**

### **Journal Entry Management**

#### **Creating Journal Entries**
```javascript
// Basic journal entry creation
function createJournalEntry(date, description, reference) {
    const je = new JournalEntry(date, description, reference);
    
    // Add debits and credits
    je.addDebit(accountCode, amount, description);
    je.addCredit(accountCode, amount, description);
    
    // Post to general ledger
    return postJournalEntry(je);
}

// Validation and posting
function postJournalEntry(journalEntry) {
    // Validate balance
    if (!journalEntry.balanced) {
        throw new Error(`Journal entry is not balanced. 
            Debits: ${journalEntry.totalDebits}, 
            Credits: ${journalEntry.totalCredits}`);
    }

    // Save to general ledger
    generalLedger.push(journalEntry);
    journalEntries.push(journalEntry);

    // Update account balances
    updateAccountBalances(journalEntry);

    // Persist to storage
    saveAccountingDataToStorage();

    return journalEntry;
}
```

#### **Account Balance Updates**
```javascript
function updateAccountBalances(journalEntry) {
    // Process debits
    journalEntry.debits.forEach(debit => {
        if (!accountBalances[debit.accountCode]) {
            initializeAccountBalance(debit.accountCode, debit.accountName);
        }
        accountBalances[debit.accountCode].debitBalance += debit.amount;
        calculateNetBalance(debit.accountCode);
    });

    // Process credits
    journalEntry.credits.forEach(credit => {
        if (!accountBalances[credit.accountCode]) {
            initializeAccountBalance(credit.accountCode, credit.accountName);
        }
        accountBalances[credit.accountCode].creditBalance += credit.amount;
        calculateNetBalance(credit.accountCode);
    });
}

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

### **Transaction Recording Functions**

#### **Purchase Order Integration**
```javascript
function createPurchaseOrderJournalEntry(po) {
    const je = new JournalEntry(
        po.date,
        `Purchase Order ${po.id} - ${po.supplier}`,
        po.id
    );

    // Dr. Inventory
    je.addDebit('1220', po.amount, `Inventory purchase from ${po.supplier}`);
    
    // Cr. Accounts Payable
    je.addCredit('2010', po.amount, `Amount owed to ${po.supplier}`);

    return postJournalEntry(je);
}

// Integration point in existing PO creation
function saveSupplierInvoice() {
    // ... existing PO creation logic ...
    
    // Add accounting integration
    try {
        const journalEntry = createPurchaseOrderJournalEntry(newPO);
        console.log(`✅ Accounting entry created: ${journalEntry.id}`);
    } catch (error) {
        console.error('❌ Accounting entry failed:', error);
    }
}
```

#### **Sales Order Integration**
```javascript
function createSalesOrderJournalEntry(invoice) {
    const je = new JournalEntry(
        invoice.date,
        `Sales Order ${invoice.id} - ${invoice.customer}`,
        invoice.id
    );

    // Dr. Accounts Receivable (total amount)
    je.addDebit('1110', invoice.amount, `Sale to ${invoice.customer}`);
    
    // Cr. Product Sales Revenue
    je.addCredit('4010', invoice.subtotal, 'Product sales revenue');
    
    // Cr. Commission Revenue
    if (invoice.commissionAmount > 0) {
        je.addCredit('4020', invoice.commissionAmount, 'Commission revenue');
    }
    
    // Cr. Shipping Revenue (by type)
    if (invoice.shippingFee > 0) {
        const shippingAccount = getShippingRevenueAccount(invoice.shippingType);
        je.addCredit(shippingAccount, invoice.shippingFee, 'Shipping revenue');
    }

    // Record COGS
    const cogsAmount = calculateCOGS(invoice.products);
    if (cogsAmount > 0) {
        je.addDebit('5010', cogsAmount, 'Cost of goods sold');
        je.addCredit('1220', cogsAmount, 'Inventory reduction');
    }

    return postJournalEntry(je);
}

// FIFO COGS Calculation
function calculateCOGS(soldProducts) {
    let totalCOGS = 0;

    soldProducts.forEach(soldProduct => {
        const inventoryLots = getInventoryLots(soldProduct.id);
        let remainingQuantity = soldProduct.quantity;
        let productCOGS = 0;

        // FIFO - use oldest inventory first
        inventoryLots.sort((a, b) => new Date(a.receivedDate) - new Date(b.receivedDate));

        for (const lot of inventoryLots) {
            if (remainingQuantity <= 0) break;

            const quantityToUse = Math.min(remainingQuantity, lot.availableQuantity);
            const lotCOGS = quantityToUse * lot.unitCost;
            
            productCOGS += lotCOGS;
            remainingQuantity -= quantityToUse;
            
            // Update lot quantities
            lot.availableQuantity -= quantityToUse;
            lot.allocatedQuantity += quantityToUse;
        }

        totalCOGS += productCOGS;
    });

    return totalCOGS;
}
```

#### **Shipping Integration**
```javascript
function recordShipmentTransaction(shipment) {
    if (!shipment.actualShippingCost || shipment.actualShippingCost <= 0) {
        return null;
    }

    const shippingCompany = getShippingCompany(shipment.carrierId);
    if (!shippingCompany) {
        throw new Error('Shipping company not found');
    }

    const je = new JournalEntry(
        shipment.shipDate,
        `Shipping Expense - ${shipment.id} via ${shippingCompany.name}`,
        shipment.id
    );

    // Dr. Shipping Expenses (carrier-specific)
    je.addDebit(
        shippingCompany.accountingMapping.expenseAccount,
        shipment.actualShippingCost,
        `Shipping cost for ${shipment.id}`
    );

    // Cr. Accounts Payable (carrier-specific)
    je.addCredit(
        shippingCompany.accountingMapping.accountsPayableAccount,
        shipment.actualShippingCost,
        `Amount owed to ${shippingCompany.name}`
    );

    const journalEntry = postJournalEntry(je);
    updateShippingCompanyPerformance(shippingCompany.id, shipment);

    return journalEntry;
}

// Integration with shipment creation
function createShipment(shipmentData) {
    // ... existing shipment creation logic ...
    
    // Add accounting integration
    try {
        const journalEntry = recordShipmentTransaction(newShipment);
        if (journalEntry) {
            console.log(`✅ Shipping accounting entry: ${journalEntry.id}`);
        }
    } catch (error) {
        console.error('❌ Shipping accounting failed:', error);
    }
}
```

---

## 📊 **Reporting Engine**

### **Financial Statement Generation**

#### **Profit & Loss Statement**
```javascript
function generateProfitLossStatement(startDate, endDate) {
    // Revenue calculation
    const revenue = {
        productSales: getAccountBalance('4010', startDate, endDate),
        commissionRevenue: getAccountBalance('4020', startDate, endDate),
        shippingRevenue: getShippingRevenueTotal(startDate, endDate),
        otherRevenue: getAccountBalance('4100', startDate, endDate)
    };

    // COGS calculation
    const cogs = {
        productCosts: getAccountBalance('5010', startDate, endDate),
        freightIn: getAccountBalance('5020', startDate, endDate)
    };

    // Operating expenses
    const expenses = {
        commissionExpenses: getAccountBalance('6000', startDate, endDate),
        shippingExpenses: getShippingExpensesTotal(startDate, endDate),
        operatingExpenses: getOperatingExpensesTotal(startDate, endDate)
    };

    // Calculate totals and margins
    const totalRevenue = Object.values(revenue).reduce((sum, val) => sum + val, 0);
    const totalCOGS = Object.values(cogs).reduce((sum, val) => sum + val, 0);
    const totalExpenses = Object.values(expenses).reduce((sum, val) => sum + val, 0);
    
    const grossProfit = totalRevenue - totalCOGS;
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
        netProfitMargin: (netIncome / totalRevenue) * 100,
        period: { startDate, endDate }
    };
}
```

#### **Balance Sheet Generation**
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
            taxesPayable: getAccountBalance('2200', null, asOfDate)
        }
    };

    const equity = {
        ownersEquity: getAccountBalance('3000', null, asOfDate),
        retainedEarnings: getAccountBalance('3100', null, asOfDate),
        currentYearEarnings: getAccountBalance('3200', null, asOfDate)
    };

    // Calculate totals
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
        balanced: Math.abs(totalAssets - (totalLiabilities + totalEquity)) < 0.01,
        asOfDate
    };
}
```

### **Specialized Shipping Reports**
```javascript
function generateCarrierPerformanceReport(startDate, endDate) {
    return shippingCompanies.map(carrier => {
        const totalCost = getAccountBalance(
            carrier.accountingMapping.expenseAccount, 
            startDate, 
            endDate
        );
        const totalPayable = getAccountBalance(
            carrier.accountingMapping.accountsPayableAccount
        );

        return {
            carrierId: carrier.id,
            carrierName: carrier.name,
            totalCost,
            totalPayable,
            totalShipments: carrier.performance.totalShipments,
            averageCost: carrier.performance.averageCost,
            onTimeRate: carrier.performance.onTimeRate,
            costPerShipment: totalCost / (carrier.performance.totalShipments || 1),
            paymentTerms: carrier.paymentTerms,
            creditLimit: carrier.paymentTerms.creditLimit
        };
    }).sort((a, b) => b.totalCost - a.totalCost);
}
```

---

## 💾 **Data Persistence**

### **Storage Functions**
```javascript
function saveAccountingDataToStorage() {
    try {
        localStorage.setItem('sourcing_generalLedger', JSON.stringify(generalLedger));
        localStorage.setItem('sourcing_journalEntries', JSON.stringify(journalEntries));
        localStorage.setItem('sourcing_accountBalances', JSON.stringify(accountBalances));
        localStorage.setItem('sourcing_revenueRecognitions', JSON.stringify(revenueRecognitions));
        localStorage.setItem('sourcing_shippingCompanyPayments', JSON.stringify(shippingCompanyPayments));
        localStorage.setItem('sourcing_shippingCompanies', JSON.stringify(shippingCompanies));
    } catch (error) {
        console.error('Error saving accounting data:', error);
    }
}

function loadAccountingDataFromStorage() {
    try {
        generalLedger = JSON.parse(localStorage.getItem('sourcing_generalLedger') || '[]');
        journalEntries = JSON.parse(localStorage.getItem('sourcing_journalEntries') || '[]');
        accountBalances = JSON.parse(localStorage.getItem('sourcing_accountBalances') || '{}');
        revenueRecognitions = JSON.parse(localStorage.getItem('sourcing_revenueRecognitions') || '[]');
        shippingCompanyPayments = JSON.parse(localStorage.getItem('sourcing_shippingCompanyPayments') || '[]');

        const storedShippingCompanies = JSON.parse(localStorage.getItem('sourcing_shippingCompanies') || '[]');
        if (storedShippingCompanies.length > 0) {
            shippingCompanies = storedShippingCompanies;
        }

        console.log('✅ Accounting data loaded from storage');
    } catch (error) {
        console.error('Error loading accounting data:', error);
    }
}
```

---

## 🧪 **Testing and Validation**

### **System Testing Functions**
```javascript
function testShippingAccountingIntegration() {
    console.log('🧪 Testing Integrated Shipping Accounting System...');
    
    // Test journal entry creation
    const testShipment = {
        id: 'SHIP-TEST-001',
        carrierId: 'DHL001',
        actualShippingCost: 150.00,
        shipDate: new Date().toISOString().split('T')[0]
    };

    try {
        const journalEntry = recordShipmentTransaction(testShipment);
        console.log(`✅ Test journal entry created: ${journalEntry.id}`);
        console.log(`   Balanced: ${journalEntry.balanced}`);
        
        // Verify account balances
        const dhlExpense = getAccountBalance('6010');
        const dhlPayable = getAccountBalance('2015');
        console.log(`DHL Expenses: $${dhlExpense}`);
        console.log(`DHL Payables: $${dhlPayable}`);
        
    } catch (error) {
        console.error('❌ Test failed:', error);
    }
}

function validateAccountingIntegrity() {
    // Check for unbalanced journal entries
    const unbalanced = journalEntries.filter(je => !je.balanced);
    if (unbalanced.length > 0) {
        console.error(`❌ Found ${unbalanced.length} unbalanced journal entries`);
        return false;
    }

    // Verify account balance calculations
    let balanceErrors = 0;
    Object.keys(accountBalances).forEach(accountCode => {
        const originalBalance = accountBalances[accountCode].netBalance;
        calculateNetBalance(accountCode);
        if (Math.abs(originalBalance - accountBalances[accountCode].netBalance) > 0.01) {
            balanceErrors++;
        }
    });

    if (balanceErrors > 0) {
        console.error(`❌ Found ${balanceErrors} account balance calculation errors`);
        return false;
    }

    console.log('✅ Accounting integrity validation passed');
    return true;
}
```

---

This technical documentation provides developers with the complete implementation details for integrating with and extending the accounting system.
