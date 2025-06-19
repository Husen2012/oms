// 🏢 ENTERPRISE ACCOUNTING SYSTEM - BUSINESS LOGIC INTEGRATION
// Seamless integration with existing saveCustomerInvoice() and saveSupplierInvoice() functions

// ==================== INTEGRATION HOOKS ====================

// Enhanced saveCustomerInvoice with accounting integration
function saveCustomerInvoiceWithAccounting() {
    // Call original function first
    const originalResult = saveCustomerInvoice();
    
    // Get the last created invoice
    const lastInvoice = customerInvoices[customerInvoices.length - 1];
    
    if (lastInvoice) {
        try {
            // Create accounting entries for the sale
            createSalesOrderAccountingEntries(lastInvoice);
            console.log(`✅ Accounting entries created for invoice ${lastInvoice.id}`);
        } catch (error) {
            console.error(`❌ Error creating accounting entries for invoice ${lastInvoice.id}:`, error);
        }
    }
    
    return originalResult;
}

// Enhanced saveSupplierInvoice with accounting integration
function saveSupplierInvoiceWithAccounting() {
    // Call original function first
    const originalResult = saveSupplierInvoice();
    
    // Get the last created supplier invoice
    const lastPO = supplierInvoices[supplierInvoices.length - 1];
    
    if (lastPO) {
        try {
            // Create accounting entries for the purchase
            createPurchaseOrderAccountingEntries(lastPO);
            console.log(`✅ Accounting entries created for PO ${lastPO.id}`);
        } catch (error) {
            console.error(`❌ Error creating accounting entries for PO ${lastPO.id}:`, error);
        }
    }
    
    return originalResult;
}

// ==================== SALES ORDER ACCOUNTING ====================
function createSalesOrderAccountingEntries(invoice) {
    // 1. Revenue Recognition Entry
    const revenueEntry = createJournalEntry(
        invoice.date,
        `Sales Order ${invoice.id} - ${invoice.customer}`,
        invoice.id,
        'sales_order'
    );
    
    // Dr. Accounts Receivable
    revenueEntry.addDebit('1110', invoice.amount, `Sale to ${invoice.customer}`);
    
    // Cr. Product Sales Revenue
    const productTotal = invoice.products.reduce((sum, product) => sum + product.total, 0);
    if (productTotal > 0) {
        revenueEntry.addCredit('4010', productTotal, 'Product sales revenue');
    }
    
    // Cr. Commission Revenue
    if (invoice.commissionAmount > 0) {
        revenueEntry.addCredit('4020', invoice.commissionAmount, 'Commission revenue');
    }
    
    // Cr. Shipping Revenue
    if (invoice.shippingFee > 0) {
        const shippingAccount = getShippingRevenueAccount(invoice.shipmentMethod || 'standard');
        revenueEntry.addCredit(shippingAccount, invoice.shippingFee, `Shipping revenue - ${invoice.shipmentMethod}`);
    }
    
    revenueEntry.post();
    
    // 2. Cost of Goods Sold Entry
    if (invoice.products && invoice.products.length > 0) {
        const cogsEntry = createJournalEntry(
            invoice.date,
            `COGS for Sales Order ${invoice.id}`,
            `${invoice.id}-COGS`,
            'cogs_recognition'
        );
        
        let totalCOGS = 0;
        invoice.products.forEach(product => {
            // Get product cost from products array
            const productInfo = products.find(p => p.id === product.id);
            if (productInfo) {
                const productCOGS = productInfo.costPrice * product.quantity;
                totalCOGS += productCOGS;
            }
        });
        
        if (totalCOGS > 0) {
            cogsEntry.addDebit('5010', totalCOGS, 'Cost of goods sold')
                     .addCredit('1220', totalCOGS, 'Finished goods inventory reduction')
                     .post();
        }
    }
    
    // 3. Shipping Expense Entry (if shipping info available)
    if (invoice.shipping && invoice.shipping.actualCost > 0) {
        const shippingExpenseEntry = createJournalEntry(
            invoice.date,
            `Shipping Expense for ${invoice.id} - ${invoice.shipping.company}`,
            `${invoice.id}-SHIP`,
            'shipping_expense'
        );
        
        const shippingAccounts = getShippingCompanyAccounts(invoice.shipping.company);
        shippingExpenseEntry.addDebit(shippingAccounts.expenseAccount, invoice.shipping.actualCost, 
                                    `Shipping cost via ${invoice.shipping.company}`)
                            .addCredit(shippingAccounts.payableAccount, invoice.shipping.actualCost, 
                                     `Amount owed to ${invoice.shipping.company}`)
                            .post();
    }
    
    // 4. Payment Entry (if payment was made with the invoice)
    if (invoice.payments && invoice.payments.length > 0) {
        invoice.payments.forEach(payment => {
            createCustomerPaymentEntry(invoice, payment);
        });
    }
}

// ==================== PURCHASE ORDER ACCOUNTING ====================
function createPurchaseOrderAccountingEntries(po) {
    // 1. Purchase Entry
    const purchaseEntry = createJournalEntry(
        po.date,
        `Purchase Order ${po.id} - ${po.supplier}`,
        po.id,
        'purchase_order'
    );
    
    // Dr. Inventory
    purchaseEntry.addDebit('1220', po.amount, `Inventory purchase from ${po.supplier}`);
    
    // Cr. Accounts Payable
    purchaseEntry.addCredit('2010', po.amount, `Amount owed to ${po.supplier}`);
    
    purchaseEntry.post();
    
    // 2. Payment Entry (if payment was made with the PO)
    if (po.payments && po.payments.length > 0) {
        po.payments.forEach(payment => {
            createSupplierPaymentEntry(po, payment);
        });
    }
}

// ==================== PAYMENT ACCOUNTING ====================
function createCustomerPaymentEntry(invoice, payment) {
    const paymentEntry = createJournalEntry(
        payment.date,
        `Payment from ${invoice.customer} - ${payment.method}`,
        payment.reference || payment.id,
        'customer_payment'
    );
    
    // Dr. Cash/Bank
    paymentEntry.addDebit('1010', payment.amount, `Payment received via ${payment.method}`);
    
    // Cr. Accounts Receivable
    paymentEntry.addCredit('1110', payment.amount, `Payment from ${invoice.customer}`);
    
    paymentEntry.post();
}

function createSupplierPaymentEntry(po, payment) {
    const paymentEntry = createJournalEntry(
        payment.date,
        `Payment to ${po.supplier} - ${payment.method}`,
        payment.reference || payment.id,
        'supplier_payment'
    );
    
    // Dr. Accounts Payable
    paymentEntry.addDebit('2010', payment.amount, `Payment to ${po.supplier}`);
    
    // Cr. Cash/Bank
    paymentEntry.addCredit('1010', payment.amount, `Payment made via ${payment.method}`);
    
    paymentEntry.post();
}

// ==================== INVENTORY ACCOUNTING ====================
function createInventoryReceiptEntry(productId, quantity, unitCost, supplierId, receiptDate) {
    const product = products.find(p => p.id === productId);
    const productName = product ? product.name : `Product ${productId}`;
    const totalCost = quantity * unitCost;
    
    const receiptEntry = createJournalEntry(
        receiptDate,
        `Inventory Receipt - ${productName}`,
        `RECV-${productId}-${Date.now()}`,
        'inventory_receipt'
    );
    
    // Dr. Inventory
    receiptEntry.addDebit('1220', totalCost, `Received ${quantity} units of ${productName}`);
    
    // Cr. Accounts Payable (if from supplier) or Cash (if paid immediately)
    receiptEntry.addCredit('2010', totalCost, `Amount owed to ${supplierId}`);
    
    receiptEntry.post();
}

function createInventoryAdjustmentEntry(productId, adjustmentQuantity, unitCost, reason, adjustmentDate) {
    const product = products.find(p => p.id === productId);
    const productName = product ? product.name : `Product ${productId}`;
    const adjustmentValue = Math.abs(adjustmentQuantity * unitCost);
    
    const adjustmentEntry = createJournalEntry(
        adjustmentDate,
        `Inventory Adjustment - ${productName} - ${reason}`,
        `ADJ-${productId}-${Date.now()}`,
        'inventory_adjustment'
    );
    
    if (adjustmentQuantity > 0) {
        // Positive adjustment (increase inventory)
        adjustmentEntry.addDebit('1220', adjustmentValue, `Inventory increase - ${reason}`)
                      .addCredit('5040', adjustmentValue, `Inventory adjustment - ${reason}`);
    } else {
        // Negative adjustment (decrease inventory)
        adjustmentEntry.addDebit('5040', adjustmentValue, `Inventory adjustment - ${reason}`)
                      .addCredit('1220', adjustmentValue, `Inventory decrease - ${reason}`);
    }
    
    adjustmentEntry.post();
}

// ==================== SHIPPING ACCOUNTING ====================
function createShippingTransactionEntry(shipment) {
    if (!shipment.actualShippingCost || !shipment.shippingCompany) {
        return;
    }
    
    const shippingEntry = createJournalEntry(
        shipment.shipDate || shipment.date,
        `Shipment ${shipment.id} via ${shipment.shippingCompany}`,
        shipment.id,
        'shipping_transaction'
    );
    
    const shippingAccounts = getShippingCompanyAccounts(shipment.shippingCompany);
    
    // Dr. Shipping Expense
    shippingEntry.addDebit(shippingAccounts.expenseAccount, shipment.actualShippingCost, 
                          `Shipping cost for ${shipment.id}`);
    
    // Cr. Shipping Company Payable
    shippingEntry.addCredit(shippingAccounts.payableAccount, shipment.actualShippingCost, 
                           `Amount owed to ${shipment.shippingCompany}`);
    
    shippingEntry.post();
}

// ==================== INTEGRATION UTILITIES ====================
function generateAccountingReportsForExistingData() {
    console.log('📊 Generating accounting reports for existing business data...');
    
    try {
        // Process existing customer invoices
        if (typeof customerInvoices !== 'undefined') {
            customerInvoices.forEach(invoice => {
                try {
                    createSalesOrderAccountingEntries(invoice);
                } catch (error) {
                    console.error(`Error processing invoice ${invoice.id}:`, error);
                }
            });
        }
        
        // Process existing supplier invoices
        if (typeof supplierInvoices !== 'undefined') {
            supplierInvoices.forEach(po => {
                try {
                    createPurchaseOrderAccountingEntries(po);
                } catch (error) {
                    console.error(`Error processing PO ${po.id}:`, error);
                }
            });
        }
        
        // Process existing shipments
        if (typeof shipments !== 'undefined') {
            shipments.forEach(shipment => {
                try {
                    createShippingTransactionEntry(shipment);
                } catch (error) {
                    console.error(`Error processing shipment ${shipment.id}:`, error);
                }
            });
        }
        
        console.log('✅ Accounting entries created for all existing data');
        
        // Generate comprehensive reports
        const reports = {
            trialBalance: generateTrialBalance(),
            profitLoss: generateProfitLossStatement('2024-01-01', '2024-12-31'),
            balanceSheet: generateBalanceSheet('2024-12-31'),
            customerStatements: [],
            supplierStatements: [],
            shippingStatements: []
        };
        
        // Generate partner statements
        if (typeof customers !== 'undefined') {
            customers.forEach(customer => {
                try {
                    const statement = generateCustomerStatement(customer.id || customer.name);
                    reports.customerStatements.push(statement);
                } catch (error) {
                    console.error(`Error generating customer statement for ${customer.id}:`, error);
                }
            });
        }
        
        if (typeof suppliers !== 'undefined') {
            suppliers.forEach(supplier => {
                try {
                    const statement = generateSupplierStatement(supplier.id || supplier.name);
                    reports.supplierStatements.push(statement);
                } catch (error) {
                    console.error(`Error generating supplier statement for ${supplier.id}:`, error);
                }
            });
        }
        
        console.log('📋 Comprehensive accounting reports generated successfully!');
        return reports;
        
    } catch (error) {
        console.error('❌ Error generating accounting reports:', error);
        return null;
    }
}

// ==================== INITIALIZATION ====================
function initializeAccountingIntegration() {
    console.log('🔗 Initializing Accounting System Integration...');
    
    // Override existing functions with accounting-enabled versions
    if (typeof saveCustomerInvoice === 'function') {
        window.originalSaveCustomerInvoice = saveCustomerInvoice;
        window.saveCustomerInvoice = saveCustomerInvoiceWithAccounting;
        console.log('✅ Customer invoice function enhanced with accounting');
    }
    
    if (typeof saveSupplierInvoice === 'function') {
        window.originalSaveSupplierInvoice = saveSupplierInvoice;
        window.saveSupplierInvoice = saveSupplierInvoiceWithAccounting;
        console.log('✅ Supplier invoice function enhanced with accounting');
    }
    
    console.log('🎯 Accounting integration initialized successfully!');
    console.log('💡 Use generateAccountingReportsForExistingData() to process existing data');
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        saveCustomerInvoiceWithAccounting,
        saveSupplierInvoiceWithAccounting,
        createSalesOrderAccountingEntries,
        createPurchaseOrderAccountingEntries,
        createCustomerPaymentEntry,
        createSupplierPaymentEntry,
        createInventoryReceiptEntry,
        createInventoryAdjustmentEntry,
        createShippingTransactionEntry,
        generateAccountingReportsForExistingData,
        initializeAccountingIntegration
    };
}

// Auto-initialize when loaded in browser
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        setTimeout(initializeAccountingIntegration, 1000); // Delay to ensure other scripts load first
    });
}
