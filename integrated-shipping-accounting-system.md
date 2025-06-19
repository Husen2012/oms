# 🚢 Integrated Shipping Companies Accounting System
## Seamless Integration with Main Accounting System

---

## 🎯 **Integrated Approach Overview**

Instead of separate shipping accounting, we'll integrate shipping companies directly into the main accounting system using:
- ✅ **Extended Chart of Accounts** with shipping-specific accounts
- ✅ **Enhanced Journal Entry System** for shipping transactions
- ✅ **Unified General Ledger** for all financial transactions
- ✅ **Integrated Financial Reporting** including shipping data

---

## 📊 **Enhanced Chart of Accounts Integration**

### **Extended Main Chart of Accounts**

```javascript
// Enhanced Chart of Accounts with Shipping Integration
const integratedChartOfAccounts = {
    // Assets (1000-1999)
    1010: "Bank Account - Operating",
    1110: "Accounts Receivable - Trade", 
    1150: "Shipping Deposits & Prepaid", // NEW: Prepaid shipping accounts
    1160: "Shipping Receivables", // NEW: Outstanding shipping charges to customers
    1220: "Finished Goods Inventory",
    
    // Liabilities (2000-2999)
    2010: "Accounts Payable - Trade",
    2015: "Accounts Payable - DHL Express", // NEW: Shipping company AP
    2016: "Accounts Payable - FedEx", // NEW
    2017: "Accounts Payable - UPS", // NEW
    2018: "Accounts Payable - China Post", // NEW
    2019: "Accounts Payable - SF Express", // NEW
    2020: "Accounts Payable - Aramex", // NEW
    2021: "Accounts Payable - EMS", // NEW
    2022: "Accounts Payable - Sea Freight", // NEW
    2023: "Accounts Payable - Air Freight", // NEW
    2025: "Accrued Shipping Expenses", // NEW
    2210: "Sales Tax Payable",
    
    // Revenue (4000-4999)
    4010: "Product Sales Revenue",
    4020: "Commission Revenue", 
    4030: "Shipping Revenue - Air", // ENHANCED: Split by type
    4031: "Shipping Revenue - Sea", // NEW
    4032: "Shipping Revenue - Express", // NEW
    4033: "Shipping Revenue - Standard", // NEW
    
    // Cost of Goods Sold (5000-5999)
    5010: "Cost of Goods Sold",
    5020: "Freight In", // Shipping costs on purchases
    
    // Operating Expenses (6000-6999)
    6000: "Commission Expenses",
    6010: "Shipping Expenses - DHL", // NEW: Detailed by carrier
    6011: "Shipping Expenses - FedEx", // NEW
    6012: "Shipping Expenses - UPS", // NEW
    6013: "Shipping Expenses - China Post", // NEW
    6014: "Shipping Expenses - SF Express", // NEW
    6015: "Shipping Expenses - Aramex", // NEW
    6016: "Shipping Expenses - EMS", // NEW
    6017: "Shipping Expenses - Sea Freight", // NEW
    6018: "Shipping Expenses - Air Freight", // NEW
    6020: "Fuel Surcharges", // NEW
    6021: "Customs and Duties", // NEW
    6022: "Shipping Insurance", // NEW
    6023: "Packaging Materials", // NEW
    6024: "Warehouse Handling Fees" // NEW
};
```

### **Shipping Companies Master Data**

```javascript
// Integrated Shipping Companies with Accounting Mapping
const shippingCompanies = [
    {
        id: 'DHL001',
        name: 'DHL Express',
        code: 'DHL',
        type: 'international_express',
        accountingMapping: {
            accountsPayableAccount: '2015', // Maps to "Accounts Payable - DHL Express"
            expenseAccount: '6010', // Maps to "Shipping Expenses - DHL"
            defaultCurrency: 'USD'
        },
        contactInfo: {
            email: 'billing@dhl.com',
            phone: '+1-800-CALL-DHL',
            website: 'www.dhl.com',
            address: 'DHL Express, 1200 S Pine Island Rd, Plantation, FL 33324'
        },
        paymentTerms: {
            terms: 'net30',
            creditLimit: 50000,
            currency: 'USD',
            discountTerms: '2/10 net 30' // 2% discount if paid within 10 days
        },
        services: [
            {
                serviceCode: 'EXPRESS_WORLDWIDE',
                serviceName: 'DHL Express Worldwide',
                baseRate: 25.00,
                weightRate: 8.50,
                fuelSurcharge: 0.15,
                transitDays: '1-3'
            }
        ],
        performance: {
            totalShipments: 0,
            totalCost: 0,
            averageCost: 0,
            onTimeRate: 0,
            lastShipmentDate: null
        }
    },
    {
        id: 'FEDEX001',
        name: 'FedEx Corporation',
        code: 'FEDEX',
        type: 'international_express',
        accountingMapping: {
            accountsPayableAccount: '2016',
            expenseAccount: '6011',
            defaultCurrency: 'USD'
        },
        // ... similar structure
    },
    {
        id: 'UPS001',
        name: 'United Parcel Service',
        code: 'UPS',
        type: 'international_express',
        accountingMapping: {
            accountsPayableAccount: '2017',
            expenseAccount: '6012',
            defaultCurrency: 'USD'
        },
        // ... similar structure
    },
    {
        id: 'CHINAPOST001',
        name: 'China Post',
        code: 'CHINA_POST',
        type: 'postal_service',
        accountingMapping: {
            accountsPayableAccount: '2018',
            expenseAccount: '6013',
            defaultCurrency: 'CNY'
        },
        // ... similar structure
    }
];
```

---

## 🔄 **Integrated Transaction Recording System**

### **Enhanced Sales Order Journal Entry with Shipping**

```javascript
// Enhanced Sales Order Journal Entry including shipping accounting
function createSalesOrderJournalEntry(invoice) {
    const je = new JournalEntry(
        invoice.date,
        `Sales Order ${invoice.id} - ${invoice.customer}`,
        invoice.id
    );

    // Dr. Accounts Receivable (total amount including shipping)
    je.addDebit('1110', invoice.amount, `Sale to ${invoice.customer}`);
    
    // Cr. Product Sales Revenue
    je.addCredit('4010', invoice.subtotal, 'Product sales revenue');
    
    // Cr. Commission Revenue
    if (invoice.commissionAmount > 0) {
        je.addCredit('4020', invoice.commissionAmount, 'Commission revenue');
    }
    
    // Cr. Shipping Revenue (categorized by type)
    if (invoice.shippingFee > 0) {
        const shippingRevenueAccount = getShippingRevenueAccount(invoice.shipmentType);
        je.addCredit(shippingRevenueAccount, invoice.shippingFee, 
            `Shipping revenue - ${invoice.shipmentType}`);
    }

    // COGS Entry
    const cogsAmount = calculateCOGS(invoice.products);
    je.addDebit('5010', cogsAmount, 'Cost of goods sold');
    je.addCredit('1220', cogsAmount, 'Inventory reduction');

    return postJournalEntry(je);
}

// Helper function to determine shipping revenue account
function getShippingRevenueAccount(shipmentType) {
    const shippingRevenueMapping = {
        'air': '4030', // Shipping Revenue - Air
        'sea': '4031', // Shipping Revenue - Sea
        'express': '4032', // Shipping Revenue - Express
        'standard': '4033', // Shipping Revenue - Standard
        'local': '4033', // Default to Standard
        'pickup': '4033' // Default to Standard
    };
    
    return shippingRevenueMapping[shipmentType] || '4030';
}
```

### **Shipment Creation with Integrated Accounting**

```javascript
// When a shipment is created, record the shipping expense
function createShipmentWithAccounting(shipmentData) {
    // Create the shipment record
    const shipment = createShipment(shipmentData);
    
    // Get shipping company details
    const shippingCompany = getShippingCompany(shipment.carrierId);
    
    if (shipment.actualShippingCost > 0 && shippingCompany) {
        // Create journal entry for shipping expense
        const je = new JournalEntry(
            shipment.shipDate,
            `Shipping Expense - ${shipment.id} via ${shippingCompany.name}`,
            shipment.id
        );
        
        // Dr. Shipping Expenses (specific to carrier)
        je.addDebit(
            shippingCompany.accountingMapping.expenseAccount,
            shipment.actualShippingCost,
            `Shipping cost for ${shipment.id} via ${shippingCompany.name}`
        );
        
        // Cr. Accounts Payable (specific to carrier)
        je.addCredit(
            shippingCompany.accountingMapping.accountsPayableAccount,
            shipment.actualShippingCost,
            `Amount owed to ${shippingCompany.name} for ${shipment.id}`
        );
        
        // Post the journal entry
        const journalEntry = postJournalEntry(je);
        
        // Link journal entry to shipment
        shipment.journalEntryId = journalEntry.id;
        
        // Update shipping company performance
        updateShippingCompanyPerformance(shippingCompany.id, shipment);
    }
    
    return shipment;
}
```

### **Shipping Company Payment Recording**

```javascript
// Record payment to shipping company
function recordShippingCompanyPayment(paymentData) {
    const {
        shippingCompanyId,
        amount,
        paymentDate,
        paymentMethod,
        referenceNumber,
        invoiceNumbers = []
    } = paymentData;
    
    const shippingCompany = getShippingCompany(shippingCompanyId);
    
    const je = new JournalEntry(
        paymentDate,
        `Payment to ${shippingCompany.name} - ${referenceNumber}`,
        referenceNumber
    );
    
    // Dr. Accounts Payable (reduce what we owe)
    je.addDebit(
        shippingCompany.accountingMapping.accountsPayableAccount,
        amount,
        `Payment to ${shippingCompany.name} for invoices: ${invoiceNumbers.join(', ')}`
    );
    
    // Cr. Cash (reduce cash)
    je.addCredit(
        '1010',
        amount,
        `Payment via ${paymentMethod} - ${referenceNumber}`
    );
    
    const journalEntry = postJournalEntry(je);
    
    // Record payment in shipping company records
    const payment = {
        id: generatePaymentId(),
        shippingCompanyId,
        amount,
        paymentDate,
        paymentMethod,
        referenceNumber,
        invoiceNumbers,
        journalEntryId: journalEntry.id,
        status: 'completed'
    };
    
    // Add to payments array
    shippingCompanyPayments.push(payment);
    saveDataToStorage();
    
    return payment;
}
```
