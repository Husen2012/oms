# 👥 Order Management System - Accounting User Guide
## Complete Guide for Business Users and Accountants

---

## 🎯 **Introduction**

This user guide provides comprehensive instructions for using the accounting features of the Order Management System. The system automatically handles most accounting transactions, but understanding how it works will help you monitor financial performance and ensure accuracy.

---

## 🏗️ **Getting Started with Accounting**

### **System Initialization**
When you first load the system, the accounting module automatically:
1. **Loads Chart of Accounts** - All account codes and names
2. **Initializes Shipping Companies** - With dedicated accounting mappings
3. **Restores Previous Data** - Journal entries and account balances from storage
4. **Sets Up Real-time Tracking** - For all financial transactions

### **Accessing Accounting Information**
The accounting system runs in the background, but you can access information through:
- **Browser Console** (F12) for detailed reports and testing
- **Automatic Integration** with order processing workflows
- **Real-time Updates** in order and shipment screens

---

## 📊 **Understanding Automatic Transaction Recording**

### **What Happens Automatically**

#### **1. When You Create a Purchase Order**
**System Action:**
```
✅ Records inventory increase
✅ Records supplier payable
✅ Updates account balances
✅ Saves journal entry
```

**Accounting Entry:**
- **Debit**: Inventory (1220) - Increases asset value
- **Credit**: Accounts Payable (2010) - Records amount owed to supplier

**What You See:**
- Purchase order appears in the PO table
- Inventory levels update when goods are received
- Supplier payment tracking becomes available

#### **2. When You Create a Sales Order**
**System Action:**
```
✅ Records customer receivable
✅ Records product revenue
✅ Records commission revenue
✅ Records shipping revenue
✅ Calculates and records cost of goods sold
✅ Reduces inventory value
```

**Accounting Entry:**
- **Debit**: Accounts Receivable (1110) - Amount customer owes
- **Credit**: Product Sales Revenue (4010) - Product sales income
- **Credit**: Commission Revenue (4020) - Commission income
- **Credit**: Shipping Revenue (4030-4033) - Shipping income
- **Debit**: Cost of Goods Sold (5010) - Product cost
- **Credit**: Inventory (1220) - Inventory reduction

**What You See:**
- Sales order appears in customer invoices table
- Revenue is immediately recognized
- Inventory allocation updates
- Profit calculations are available

#### **3. When You Create a Shipment**
**System Action:**
```
✅ Records shipping expense by carrier
✅ Records amount owed to shipping company
✅ Updates carrier performance metrics
✅ Tracks shipping profitability
```

**Accounting Entry:**
- **Debit**: Shipping Expenses - [Carrier] (6010-6016) - Shipping cost
- **Credit**: Accounts Payable - [Carrier] (2015-2021) - Amount owed

**What You See:**
- Shipment tracking information
- Shipping cost vs. revenue comparison
- Carrier performance updates

---

## 💰 **Managing Payments**

### **Recording Supplier Payments**
**How to Record:**
1. Go to Purchase Orders section
2. Click "Record Payment" on a PO
3. Enter payment details:
   - Payment amount
   - Payment date
   - Payment method (Cash, Check, Bank Transfer, etc.)
   - Reference number

**System Action:**
- **Debit**: Accounts Payable (2010) - Reduces amount owed
- **Credit**: Cash (1010) - Reduces cash balance

### **Recording Customer Payments**
**How to Record:**
1. Go to Customer Sales Orders section
2. Click "Record Payment" on an invoice
3. Enter payment details:
   - Payment amount
   - Payment date
   - Payment method
   - Reference number

**System Action:**
- **Debit**: Cash (1010) - Increases cash balance
- **Credit**: Accounts Receivable (1110) - Reduces amount owed by customer

### **Recording Shipping Company Payments**
**How to Record:**
```javascript
// Use browser console for advanced payment recording
recordShippingCompanyPayment({
    shippingCompanyId: 'DHL001',
    amount: 500.00,
    paymentDate: '2024-01-15',
    paymentMethod: 'Bank Transfer',
    referenceNumber: 'PAY-DHL-001',
    description: 'Payment for January shipments'
});
```

---

## 📈 **Financial Reporting**

### **Available Reports**

#### **1. Profit & Loss Statement**
**How to Generate:**
```javascript
// Open browser console (F12) and run:
const plReport = generateProfitLossStatement('2024-01-01', '2024-12-31');
console.table(plReport);
```

**Report Includes:**
- **Revenue Breakdown**: Product sales, commissions, shipping by type
- **Cost of Goods Sold**: Product costs and freight
- **Operating Expenses**: Shipping costs by carrier, office expenses
- **Net Income**: Bottom-line profitability
- **Margin Analysis**: Gross and net profit margins

#### **2. Balance Sheet**
**How to Generate:**
```javascript
// Open browser console (F12) and run:
const balanceSheet = generateBalanceSheet('2024-12-31');
console.table(balanceSheet);
```

**Report Includes:**
- **Assets**: Cash, receivables, inventory, equipment
- **Liabilities**: Payables by supplier and carrier, accrued expenses
- **Equity**: Owner's equity and retained earnings
- **Balance Verification**: Confirms Assets = Liabilities + Equity

#### **3. Shipping Profit Analysis**
**How to Generate:**
```javascript
// Open browser console (F12) and run:
const shippingPL = generateShippingPLReport('2024-01-01', '2024-12-31');
console.table(shippingPL);
```

**Report Includes:**
- **Shipping Revenue**: By service type (air, sea, express, standard)
- **Shipping Expenses**: By carrier (DHL, FedEx, UPS, etc.)
- **Shipping Profit**: Revenue minus expenses
- **Margin Analysis**: Profitability by service type

#### **4. Carrier Performance Report**
**How to Generate:**
```javascript
// Open browser console (F12) and run:
const carrierReport = generateCarrierPerformanceReport('2024-01-01', '2024-12-31');
console.table(carrierReport);
```

**Report Includes:**
- **Cost Analysis**: Total expenses by carrier
- **Outstanding Payables**: Amount owed to each carrier
- **Performance Metrics**: On-time delivery rates
- **Volume Analysis**: Number of shipments per carrier

### **Account Balance Inquiries**
**Check Individual Account Balances:**
```javascript
// Check cash balance
getAccountBalance('1010');

// Check accounts receivable
getAccountBalance('1110');

// Check inventory value
getAccountBalance('1220');

// Check DHL payables
getAccountBalance('2015');

// Check product sales revenue (year-to-date)
getAccountBalance('4010', '2024-01-01', '2024-12-31');
```

---

## 🔍 **Monitoring and Verification**

### **Daily Monitoring Tasks**

#### **1. Review Journal Entries**
```javascript
// View recent journal entries
console.log(journalEntries.slice(-10)); // Last 10 entries

// Check for unbalanced entries
journalEntries.filter(je => !je.balanced);
```

#### **2. Verify Account Balances**
```javascript
// Quick balance check
console.log('Cash:', getAccountBalance('1010'));
console.log('A/R:', getAccountBalance('1110'));
console.log('Inventory:', getAccountBalance('1220'));
console.log('A/P:', getAccountBalance('2010'));
```

#### **3. Check Shipping Payables**
```javascript
// View all shipping company payables
shippingCompanies.forEach(company => {
    const balance = getAccountBalance(company.accountingMapping.accountsPayableAccount);
    console.log(`${company.name}: $${balance}`);
});
```

### **Monthly Reconciliation**

#### **1. Generate Monthly Reports**
```javascript
// Monthly P&L
const monthlyPL = generateProfitLossStatement('2024-01-01', '2024-01-31');

// Monthly Balance Sheet
const monthlyBS = generateBalanceSheet('2024-01-31');

// Verify balance sheet balances
console.log('Balance Sheet Balanced:', monthlyBS.balanced);
```

#### **2. Review Inventory Valuation**
- Check inventory levels in Inventory Management page
- Verify inventory value matches accounting records
- Review any stock adjustments made during the month

#### **3. Reconcile Shipping Costs**
```javascript
// Compare shipping revenue vs expenses
const shippingAnalysis = generateShippingProfitAnalysis('2024-01-01', '2024-01-31');
console.log('Shipping Margin:', shippingAnalysis.margin + '%');
```

---

## ⚠️ **Important Notes and Best Practices**

### **Data Integrity**
1. **Never manually edit** journal entries or account balances
2. **Always use the system functions** to record transactions
3. **Backup data regularly** - the system auto-saves to browser storage
4. **Verify balances** after major transactions

### **Transaction Recording**
1. **Record payments promptly** to maintain accurate cash flow
2. **Verify shipping costs** before finalizing shipments
3. **Review commission calculations** on large orders
4. **Check inventory allocations** before confirming sales orders

### **Reporting**
1. **Generate reports regularly** for business monitoring
2. **Compare periods** to identify trends
3. **Review carrier performance** monthly for cost optimization
4. **Monitor profit margins** by product category

### **Troubleshooting**
If you encounter issues:
1. **Check browser console** for error messages
2. **Verify data integrity** with balance checks
3. **Reload the page** to refresh data
4. **Contact system administrator** for persistent issues

---

## 🧪 **Testing the System**

### **Test Accounting Integration**
```javascript
// Run comprehensive test
testShippingAccountingIntegration();

// Test payment recording
testShippingPayment();
```

### **Verify System Health**
```javascript
// Check for unbalanced entries
const unbalanced = journalEntries.filter(je => !je.balanced);
console.log('Unbalanced entries:', unbalanced.length);

// Verify account balance calculations
Object.keys(accountBalances).forEach(accountCode => {
    calculateNetBalance(accountCode);
});
```

---

This user guide provides the essential information for effectively using the accounting features. The system is designed to work automatically, but understanding these processes will help you monitor and verify financial accuracy.
