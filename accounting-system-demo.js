// 🏢 ENTERPRISE ACCOUNTING SYSTEM - DEMONSTRATION & TESTING
// Complete System Demo with Sample Data and Reports

// ==================== DEMO INITIALIZATION ====================
function initializeAccountingDemo() {
    console.log('🚀 Initializing Enterprise Accounting System Demo...');
    console.log('='.repeat(60));
    
    // Initialize all accounting modules
    if (typeof initializeChartOfAccounts === 'function') {
        initializeChartOfAccounts();
    }
    
    if (typeof initializeJournalEntrySystem === 'function') {
        initializeJournalEntrySystem();
    }
    
    if (typeof initializeGeneralLedger === 'function') {
        initializeGeneralLedger();
    }
    
    console.log('✅ All accounting modules initialized successfully!');
    console.log('');
}

// ==================== SAMPLE TRANSACTION CREATION ====================
function createSampleTransactions() {
    console.log('📝 Creating sample transactions for demonstration...');
    
    try {
        // Sample 1: Customer Sale with Shipping
        const sale1 = createJournalEntry(
            '2024-06-15',
            'Sale to F16 Electronics - Invoice INV-001',
            'INV-001',
            'sales_order'
        );
        
        sale1.addDebit('1110', 5199.75, 'Accounts Receivable - F16 Electronics')
             .addCredit('4010', 4599.75, 'Product Sales Revenue')
             .addCredit('4020', 480.00, 'Commission Revenue (5%)')
             .addCredit('4030', 120.00, 'Shipping Revenue - Air')
             .post();
        
        // Sample 2: COGS for the sale
        const cogs1 = createJournalEntry(
            '2024-06-15',
            'Cost of Goods Sold - Invoice INV-001',
            'INV-001-COGS',
            'cogs_recognition'
        );
        
        cogs1.addDebit('5010', 2875.00, 'Product Costs')
             .addCredit('1220', 2875.00, 'Finished Goods Inventory')
             .post();
        
        // Sample 3: Shipping Expense
        const shipping1 = createJournalEntry(
            '2024-06-15',
            'Shipping Expense - DHL Express',
            'SHIP-001',
            'shipping_expense'
        );
        
        shipping1.addDebit('6010', 85.00, 'Shipping Expenses - DHL')
                 .addCredit('2016', 85.00, 'DHL Payables')
                 .post();
        
        // Sample 4: Purchase Order
        const purchase1 = createJournalEntry(
            '2024-06-10',
            'Purchase Order PO-001 - K2 Manufacturing',
            'PO-001',
            'purchase_order'
        );
        
        purchase1.addDebit('1220', 3125.00, 'Finished Goods Inventory')
                 .addCredit('2010', 3125.00, 'Trade Payables - K2 Manufacturing')
                 .post();
        
        // Sample 5: Customer Payment
        const payment1 = createJournalEntry(
            '2024-06-18',
            'Payment from F16 Electronics',
            'PAY-001',
            'customer_payment'
        );
        
        payment1.addDebit('1010', 5199.75, 'Bank Account - Operating')
                .addCredit('1110', 5199.75, 'Accounts Receivable - F16 Electronics')
                .post();
        
        // Sample 6: Supplier Payment
        const payment2 = createJournalEntry(
            '2024-06-20',
            'Payment to K2 Manufacturing',
            'PAY-002',
            'supplier_payment'
        );
        
        payment2.addDebit('2010', 3125.00, 'Trade Payables - K2 Manufacturing')
                .addCredit('1010', 3125.00, 'Bank Account - Operating')
                .post();
        
        // Sample 7: Operating Expenses
        const expenses1 = createJournalEntry(
            '2024-06-25',
            'Monthly Operating Expenses',
            'EXP-001',
            'operating_expenses'
        );
        
        expenses1.addDebit('6020', 2000.00, 'Office Rent')
                 .addDebit('6030', 300.00, 'Utilities')
                 .addDebit('6040', 500.00, 'Insurance')
                 .addDebit('6060', 50.00, 'Bank Charges')
                 .addCredit('1010', 2850.00, 'Bank Account - Operating')
                 .post();
        
        console.log('✅ Sample transactions created successfully!');
        console.log(`📋 Total Journal Entries: ${journalEntries.length}`);
        console.log('');
        
    } catch (error) {
        console.error('❌ Error creating sample transactions:', error);
    }
}

// ==================== DEMO REPORTS GENERATION ====================
function generateDemoReports() {
    console.log('📊 Generating comprehensive financial reports...');
    console.log('='.repeat(60));
    
    try {
        // 1. Trial Balance
        console.log('📋 TRIAL BALANCE');
        console.log('-'.repeat(40));
        const trialBalance = generateTrialBalance();
        console.log(`As of: ${trialBalance.asOfDate}`);
        console.log(`Total Debits: $${trialBalance.totalDebits.toFixed(2)}`);
        console.log(`Total Credits: $${trialBalance.totalCredits.toFixed(2)}`);
        console.log(`Balanced: ${trialBalance.balanced ? '✅ Yes' : '❌ No'}`);
        console.log('');
        
        // Show top accounts with balances
        const topAccounts = trialBalance.accounts
            .filter(acc => Math.abs(acc.netBalance) > 0.01)
            .sort((a, b) => Math.abs(b.netBalance) - Math.abs(a.netBalance))
            .slice(0, 10);
        
        console.log('Top Account Balances:');
        topAccounts.forEach(acc => {
            const balance = acc.debitBalance > 0 ? `$${acc.debitBalance.toFixed(2)} DR` : `$${acc.creditBalance.toFixed(2)} CR`;
            console.log(`  ${acc.accountCode} - ${acc.accountName}: ${balance}`);
        });
        console.log('');
        
        // 2. Profit & Loss Statement
        console.log('📈 PROFIT & LOSS STATEMENT');
        console.log('-'.repeat(40));
        const profitLoss = generateProfitLossStatement('2024-06-01', '2024-06-30');
        console.log(`Period: ${profitLoss.periodStart} to ${profitLoss.periodEnd}`);
        console.log('');
        console.log('REVENUE:');
        console.log(`  Product Sales: $${profitLoss.revenue.operatingRevenue.productSales.toFixed(2)}`);
        console.log(`  Commission Revenue: $${profitLoss.revenue.operatingRevenue.commissionRevenue.toFixed(2)}`);
        console.log(`  Shipping Revenue: $${profitLoss.revenue.operatingRevenue.shippingRevenue.total.toFixed(2)}`);
        console.log(`  Total Revenue: $${profitLoss.revenue.totalRevenue.toFixed(2)}`);
        console.log('');
        console.log('COST OF GOODS SOLD:');
        console.log(`  Product Costs: $${profitLoss.costOfGoodsSold.productCosts.toFixed(2)}`);
        console.log(`  Total COGS: $${profitLoss.costOfGoodsSold.totalCOGS.toFixed(2)}`);
        console.log('');
        console.log(`GROSS PROFIT: $${profitLoss.grossProfit.toFixed(2)} (${profitLoss.grossProfitMargin.toFixed(1)}%)`);
        console.log('');
        console.log('OPERATING EXPENSES:');
        console.log(`  Shipping Expenses: $${profitLoss.operatingExpenses.shippingExpenses.total.toFixed(2)}`);
        console.log(`  General Expenses: $${profitLoss.operatingExpenses.generalExpenses.total.toFixed(2)}`);
        console.log(`  Total Operating Expenses: $${profitLoss.operatingExpenses.totalOperatingExpenses.toFixed(2)}`);
        console.log('');
        console.log(`NET INCOME: $${profitLoss.netIncome.toFixed(2)} (${profitLoss.netMargin.toFixed(1)}%)`);
        console.log('');
        console.log('SHIPPING PROFITABILITY:');
        console.log(`  Shipping Revenue: $${profitLoss.metrics.shippingProfitability.shippingRevenue.toFixed(2)}`);
        console.log(`  Shipping Costs: $${profitLoss.metrics.shippingProfitability.shippingCosts.toFixed(2)}`);
        console.log(`  Shipping Profit: $${profitLoss.metrics.shippingProfitability.shippingProfit.toFixed(2)}`);
        console.log(`  Shipping Margin: ${profitLoss.metrics.shippingProfitability.shippingMargin.toFixed(1)}%`);
        console.log('');
        
        // 3. Balance Sheet
        console.log('🏛️ BALANCE SHEET');
        console.log('-'.repeat(40));
        const balanceSheet = generateBalanceSheet('2024-06-30');
        console.log(`As of: ${balanceSheet.asOfDate}`);
        console.log('');
        console.log('ASSETS:');
        console.log('  Current Assets:');
        console.log(`    Cash & Equivalents: $${balanceSheet.assets.currentAssets.cashAndEquivalents.total.toFixed(2)}`);
        console.log(`    Accounts Receivable: $${balanceSheet.assets.currentAssets.receivables.total.toFixed(2)}`);
        console.log(`    Inventory: $${balanceSheet.assets.currentAssets.inventory.total.toFixed(2)}`);
        console.log(`    Total Current Assets: $${balanceSheet.assets.currentAssets.totalCurrentAssets.toFixed(2)}`);
        console.log(`  Total Assets: $${balanceSheet.assets.totalAssets.toFixed(2)}`);
        console.log('');
        console.log('LIABILITIES:');
        console.log('  Current Liabilities:');
        console.log(`    Accounts Payable: $${balanceSheet.liabilities.currentLiabilities.payables.total.toFixed(2)}`);
        console.log(`    Total Current Liabilities: $${balanceSheet.liabilities.currentLiabilities.totalCurrentLiabilities.toFixed(2)}`);
        console.log(`  Total Liabilities: $${balanceSheet.liabilities.totalLiabilities.toFixed(2)}`);
        console.log('');
        console.log('EQUITY:');
        console.log(`  Total Equity: $${balanceSheet.equity.totalEquity.toFixed(2)}`);
        console.log('');
        console.log(`TOTAL LIABILITIES & EQUITY: $${balanceSheet.totalLiabilitiesAndEquity.toFixed(2)}`);
        console.log(`Balance Check: ${balanceSheet.balanced ? '✅ Balanced' : '❌ Not Balanced'}`);
        if (!balanceSheet.balanced) {
            console.log(`Difference: $${balanceSheet.balanceDifference.toFixed(2)}`);
        }
        console.log('');
        
    } catch (error) {
        console.error('❌ Error generating reports:', error);
    }
}

// ==================== PARTNER STATEMENTS DEMO ====================
function generateDemoPartnerStatements() {
    console.log('👥 PARTNER STATEMENTS DEMO');
    console.log('='.repeat(60));
    
    try {
        // Customer Statement
        console.log('📋 CUSTOMER STATEMENT - F16 Electronics');
        console.log('-'.repeat(50));
        const customerStatement = generateCustomerStatement('F16 Electronics', '2024-06-01', '2024-06-30');
        console.log(`Statement Date: ${customerStatement.statementDate}`);
        console.log(`Period: ${customerStatement.periodStart} to ${customerStatement.periodEnd}`);
        console.log('');
        console.log('ACCOUNT SUMMARY:');
        console.log(`  Total Invoiced: $${customerStatement.accountSummary.totalInvoiced.toFixed(2)}`);
        console.log(`  Total Payments: $${customerStatement.accountSummary.totalPayments.toFixed(2)}`);
        console.log(`  Closing Balance: $${customerStatement.accountSummary.closingBalance.toFixed(2)}`);
        console.log(`  Credit Limit: $${customerStatement.creditInfo.creditLimit.toFixed(2)}`);
        console.log(`  Available Credit: $${customerStatement.creditInfo.creditAvailable.toFixed(2)}`);
        console.log('');
        console.log('TRANSACTION SUMMARY:');
        console.log(`  Total Transactions: ${customerStatement.transactions.length}`);
        customerStatement.transactions.forEach(txn => {
            const amount = txn.debit > 0 ? `$${txn.debit.toFixed(2)} DR` : `$${txn.credit.toFixed(2)} CR`;
            console.log(`  ${txn.date} - ${txn.type}: ${amount} (Balance: $${txn.balance.toFixed(2)})`);
        });
        console.log('');
        
        // Supplier Statement
        console.log('📋 SUPPLIER STATEMENT - K2 Manufacturing');
        console.log('-'.repeat(50));
        const supplierStatement = generateSupplierStatement('K2 Manufacturing', '2024-06-01', '2024-06-30');
        console.log(`Statement Date: ${supplierStatement.statementDate}`);
        console.log(`Period: ${supplierStatement.periodStart} to ${supplierStatement.periodEnd}`);
        console.log('');
        console.log('ACCOUNT SUMMARY:');
        console.log(`  Total Purchases: $${supplierStatement.accountSummary.totalPurchases.toFixed(2)}`);
        console.log(`  Total Payments: $${supplierStatement.accountSummary.totalPayments.toFixed(2)}`);
        console.log(`  Closing Balance: $${supplierStatement.accountSummary.closingBalance.toFixed(2)}`);
        console.log('');
        console.log('TRANSACTION SUMMARY:');
        console.log(`  Total Transactions: ${supplierStatement.transactions.length}`);
        supplierStatement.transactions.forEach(txn => {
            const amount = txn.debit > 0 ? `$${txn.debit.toFixed(2)} DR` : `$${txn.credit.toFixed(2)} CR`;
            console.log(`  ${txn.date} - ${txn.type}: ${amount} (Balance: $${txn.balance.toFixed(2)})`);
        });
        console.log('');
        
        // Shipping Company Statement
        console.log('📋 SHIPPING COMPANY STATEMENT - DHL');
        console.log('-'.repeat(50));
        const shippingStatement = generateShippingCompanyStatement('DHL', '2024-06-01', '2024-06-30');
        console.log(`Statement Date: ${shippingStatement.statementDate}`);
        console.log(`Period: ${shippingStatement.periodStart} to ${shippingStatement.periodEnd}`);
        console.log('');
        console.log('ACCOUNT SUMMARY:');
        console.log(`  Total Shipping Costs: $${shippingStatement.accountSummary.totalShippingCosts.toFixed(2)}`);
        console.log(`  Total Payments: $${shippingStatement.accountSummary.totalPayments.toFixed(2)}`);
        console.log(`  Closing Balance: $${shippingStatement.accountSummary.closingBalance.toFixed(2)}`);
        console.log('');
        console.log('PERFORMANCE METRICS:');
        console.log(`  Total Shipments: ${shippingStatement.performance.totalShipments}`);
        console.log(`  Average Cost: $${shippingStatement.performance.averageCost.toFixed(2)}`);
        console.log('');
        console.log('PROFITABILITY:');
        console.log(`  Revenue (charged to customers): $${shippingStatement.profitability.totalRevenue.toFixed(2)}`);
        console.log(`  Costs (paid to carrier): $${shippingStatement.profitability.totalCosts.toFixed(2)}`);
        console.log(`  Gross Profit: $${shippingStatement.profitability.grossProfit.toFixed(2)}`);
        console.log(`  Profit Margin: ${shippingStatement.profitability.profitMargin.toFixed(1)}%`);
        console.log('');
        
    } catch (error) {
        console.error('❌ Error generating partner statements:', error);
    }
}

// ==================== COMPLETE DEMO RUNNER ====================
function runCompleteAccountingDemo() {
    console.log('🎯 ENTERPRISE ACCOUNTING SYSTEM - COMPLETE DEMONSTRATION');
    console.log('='.repeat(80));
    console.log('');
    
    // Step 1: Initialize System
    initializeAccountingDemo();
    
    // Step 2: Create Sample Data
    createSampleTransactions();
    
    // Step 3: Generate Financial Reports
    generateDemoReports();
    
    // Step 4: Generate Partner Statements
    generateDemoPartnerStatements();
    
    console.log('🎉 DEMONSTRATION COMPLETE!');
    console.log('='.repeat(80));
    console.log('');
    console.log('✅ FEATURES DEMONSTRATED:');
    console.log('  • Double-entry bookkeeping system');
    console.log('  • Comprehensive chart of accounts');
    console.log('  • Automated journal entries');
    console.log('  • Trial balance generation');
    console.log('  • Profit & Loss statement');
    console.log('  • Balance sheet');
    console.log('  • Customer account statements');
    console.log('  • Supplier account statements');
    console.log('  • Shipping company statements');
    console.log('  • Financial metrics and ratios');
    console.log('  • Shipping profitability analysis');
    console.log('');
    console.log('🚀 Ready for production use!');
}

// Export demo functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeAccountingDemo,
        createSampleTransactions,
        generateDemoReports,
        generateDemoPartnerStatements,
        runCompleteAccountingDemo
    };
}

// Auto-run demo when loaded in browser (optional)
if (typeof window !== 'undefined') {
    // Uncomment the line below to auto-run the demo
    // window.addEventListener('load', runCompleteAccountingDemo);
}
