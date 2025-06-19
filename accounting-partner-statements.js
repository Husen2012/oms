// 🏢 ENTERPRISE ACCOUNTING SYSTEM - PARTNER STATEMENTS
// Task 4.2: Customer/Supplier/Shipping Company Statements (Odoo-Style)
// Status: ✅ IN PROGRESS

// ==================== PARTNER STATEMENT GENERATOR ====================

// Generate comprehensive customer statement
function generateCustomerStatement(customerId, startDate = null, endDate = null, includeAging = true) {
    const customer = getCustomerInfo(customerId);
    if (!customer) {
        throw new Error(`Customer not found: ${customerId}`);
    }

    const statement = {
        statementType: 'CUSTOMER',
        customer: customer,
        statementDate: new Date().toISOString().split('T')[0],
        periodStart: startDate,
        periodEnd: endDate,
        currency: 'USD',
        
        // Account Summary
        accountSummary: {
            openingBalance: 0,
            totalInvoiced: 0,
            totalPayments: 0,
            totalAdjustments: 0,
            closingBalance: 0,
            creditLimit: customer.creditLimit || 0,
            availableCredit: 0,
            overdueAmount: 0
        },
        
        // Transaction Details
        transactions: [],
        
        // Aging Analysis
        aging: null,
        
        // Payment Terms & Credit Info
        creditInfo: {
            paymentTerms: customer.paymentTerms || 'net30',
            creditLimit: customer.creditLimit || 0,
            creditUsed: 0,
            creditAvailable: 0,
            lastPaymentDate: null,
            lastPaymentAmount: 0,
            averagePaymentDays: 0
        },
        
        // Summary by Invoice Status
        invoiceSummary: {
            draft: { count: 0, amount: 0 },
            pending: { count: 0, amount: 0 },
            paid: { count: 0, amount: 0 },
            overdue: { count: 0, amount: 0 },
            cancelled: { count: 0, amount: 0 }
        },
        
        generatedAt: new Date().toISOString(),
        generatedBy: 'system'
    };

    // Get customer invoices
    const customerInvoices = getCustomerInvoices(customerId, startDate, endDate);
    
    // Get customer payments
    const customerPayments = getCustomerPayments(customerId, startDate, endDate);
    
    // Process transactions
    const allTransactions = [];
    
    // Add invoices as transactions
    customerInvoices.forEach(invoice => {
        allTransactions.push({
            date: invoice.date,
            type: 'INVOICE',
            reference: invoice.id,
            description: `Sales Invoice ${invoice.id}`,
            debit: invoice.amount,
            credit: 0,
            balance: 0, // Will be calculated
            status: invoice.status,
            dueDate: invoice.dueDate,
            paymentTerms: invoice.paymentTerms || customer.paymentTerms,
            details: {
                products: invoice.products || [],
                shippingFee: invoice.shippingFee || 0,
                commissionAmount: invoice.commissionAmount || 0,
                subtotal: invoice.subtotal || 0
            }
        });
        
        // Update invoice summary
        const status = invoice.status?.toLowerCase() || 'pending';
        if (statement.invoiceSummary[status]) {
            statement.invoiceSummary[status].count++;
            statement.invoiceSummary[status].amount += invoice.amount;
        }
        
        statement.accountSummary.totalInvoiced += invoice.amount;
    });
    
    // Add payments as transactions
    customerPayments.forEach(payment => {
        allTransactions.push({
            date: payment.date,
            type: 'PAYMENT',
            reference: payment.id || payment.reference,
            description: `Payment - ${payment.method}`,
            debit: 0,
            credit: payment.amount,
            balance: 0, // Will be calculated
            status: 'RECEIVED',
            paymentMethod: payment.method,
            details: {
                method: payment.method,
                reference: payment.reference,
                notes: payment.notes
            }
        });
        
        statement.accountSummary.totalPayments += payment.amount;
        
        // Update last payment info
        if (!statement.creditInfo.lastPaymentDate || payment.date > statement.creditInfo.lastPaymentDate) {
            statement.creditInfo.lastPaymentDate = payment.date;
            statement.creditInfo.lastPaymentAmount = payment.amount;
        }
    });
    
    // Sort transactions by date
    allTransactions.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Calculate running balances
    let runningBalance = statement.accountSummary.openingBalance;
    allTransactions.forEach(txn => {
        runningBalance += txn.debit - txn.credit;
        txn.balance = runningBalance;
    });
    
    statement.transactions = allTransactions;
    statement.accountSummary.closingBalance = runningBalance;
    
    // Calculate credit information
    statement.creditInfo.creditUsed = Math.max(0, runningBalance);
    statement.creditInfo.creditAvailable = Math.max(0, statement.creditInfo.creditLimit - statement.creditInfo.creditUsed);
    
    // Calculate overdue amount
    const today = new Date();
    statement.accountSummary.overdueAmount = customerInvoices
        .filter(inv => inv.status === 'Pending' && new Date(inv.dueDate) < today)
        .reduce((sum, inv) => sum + (inv.remainingBalance || inv.amount), 0);
    
    // Generate aging analysis if requested
    if (includeAging) {
        statement.aging = generateCustomerAging(customerId);
    }
    
    return statement;
}

// Generate comprehensive supplier statement
function generateSupplierStatement(supplierId, startDate = null, endDate = null, includeAging = true) {
    const supplier = getSupplierInfo(supplierId);
    if (!supplier) {
        throw new Error(`Supplier not found: ${supplierId}`);
    }

    const statement = {
        statementType: 'SUPPLIER',
        supplier: supplier,
        statementDate: new Date().toISOString().split('T')[0],
        periodStart: startDate,
        periodEnd: endDate,
        currency: supplier.currency || 'USD',
        
        // Account Summary
        accountSummary: {
            openingBalance: 0,
            totalPurchases: 0,
            totalPayments: 0,
            totalAdjustments: 0,
            closingBalance: 0,
            creditLimit: supplier.creditLimit || 0,
            overdueAmount: 0
        },
        
        // Transaction Details
        transactions: [],
        
        // Aging Analysis
        aging: null,
        
        // Payment Terms & Credit Info
        paymentInfo: {
            paymentTerms: supplier.paymentTerms || 'net30',
            lastPaymentDate: null,
            lastPaymentAmount: 0,
            averagePaymentDays: 0,
            onTimePaymentRate: 0
        },
        
        // Summary by PO Status
        purchaseOrderSummary: {
            pending: { count: 0, amount: 0 },
            received: { count: 0, amount: 0 },
            paid: { count: 0, amount: 0 },
            overdue: { count: 0, amount: 0 },
            cancelled: { count: 0, amount: 0 }
        },
        
        generatedAt: new Date().toISOString(),
        generatedBy: 'system'
    };

    // Get supplier invoices (purchase orders)
    const supplierInvoices = getSupplierInvoices(supplierId, startDate, endDate);
    
    // Get supplier payments
    const supplierPayments = getSupplierPayments(supplierId, startDate, endDate);
    
    // Process transactions
    const allTransactions = [];
    
    // Add purchase orders as transactions
    supplierInvoices.forEach(po => {
        allTransactions.push({
            date: po.date,
            type: 'PURCHASE_ORDER',
            reference: po.id,
            description: `Purchase Order ${po.id}`,
            debit: 0,
            credit: po.amount,
            balance: 0, // Will be calculated
            status: po.status,
            dueDate: po.dueDate,
            deliveryDate: po.deliveryDate,
            paymentTerms: po.paymentTerms,
            details: {
                products: po.products || [],
                deliveryDate: po.deliveryDate,
                paymentTerms: po.paymentTerms
            }
        });
        
        // Update PO summary
        const status = po.status?.toLowerCase() || 'pending';
        if (statement.purchaseOrderSummary[status]) {
            statement.purchaseOrderSummary[status].count++;
            statement.purchaseOrderSummary[status].amount += po.amount;
        }
        
        statement.accountSummary.totalPurchases += po.amount;
    });
    
    // Add payments as transactions
    supplierPayments.forEach(payment => {
        allTransactions.push({
            date: payment.date,
            type: 'PAYMENT',
            reference: payment.id || payment.reference,
            description: `Payment - ${payment.method}`,
            debit: payment.amount,
            credit: 0,
            balance: 0, // Will be calculated
            status: 'PAID',
            paymentMethod: payment.method,
            details: {
                method: payment.method,
                reference: payment.reference,
                notes: payment.notes
            }
        });
        
        statement.accountSummary.totalPayments += payment.amount;
        
        // Update last payment info
        if (!statement.paymentInfo.lastPaymentDate || payment.date > statement.paymentInfo.lastPaymentDate) {
            statement.paymentInfo.lastPaymentDate = payment.date;
            statement.paymentInfo.lastPaymentAmount = payment.amount;
        }
    });
    
    // Sort transactions by date
    allTransactions.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Calculate running balances (for suppliers, credit balance means we owe them)
    let runningBalance = statement.accountSummary.openingBalance;
    allTransactions.forEach(txn => {
        runningBalance += txn.credit - txn.debit;
        txn.balance = runningBalance;
    });
    
    statement.transactions = allTransactions;
    statement.accountSummary.closingBalance = runningBalance;
    
    // Calculate overdue amount
    const today = new Date();
    statement.accountSummary.overdueAmount = supplierInvoices
        .filter(po => po.status === 'Pending' && new Date(po.dueDate) < today)
        .reduce((sum, po) => sum + (po.remainingBalance || po.amount), 0);
    
    // Generate aging analysis if requested
    if (includeAging) {
        statement.aging = generateSupplierAging(supplierId);
    }
    
    return statement;
}

// Generate shipping company statement
function generateShippingCompanyStatement(shippingCompanyId, startDate = null, endDate = null) {
    const shippingCompany = getShippingCompanyInfo(shippingCompanyId);
    if (!shippingCompany) {
        throw new Error(`Shipping company not found: ${shippingCompanyId}`);
    }

    const statement = {
        statementType: 'SHIPPING_COMPANY',
        shippingCompany: shippingCompany,
        statementDate: new Date().toISOString().split('T')[0],
        periodStart: startDate,
        periodEnd: endDate,
        currency: 'USD',
        
        // Account Summary
        accountSummary: {
            openingBalance: 0,
            totalShippingCosts: 0,
            totalPayments: 0,
            closingBalance: 0,
            overdueAmount: 0
        },
        
        // Performance Metrics
        performance: {
            totalShipments: 0,
            averageCost: 0,
            costPerKg: 0,
            onTimeDeliveryRate: 0,
            totalWeight: 0,
            totalVolume: 0
        },
        
        // Profitability Analysis
        profitability: {
            totalRevenue: 0, // What we charged customers
            totalCosts: 0,   // What shipping company charged us
            grossProfit: 0,
            profitMargin: 0
        },
        
        // Transaction Details
        transactions: [],
        
        // Shipment Summary
        shipmentSummary: {
            air: { count: 0, cost: 0, revenue: 0 },
            sea: { count: 0, cost: 0, revenue: 0 },
            express: { count: 0, cost: 0, revenue: 0 },
            standard: { count: 0, cost: 0, revenue: 0 }
        },
        
        generatedAt: new Date().toISOString(),
        generatedBy: 'system'
    };

    // Get shipments for this company
    const shipments = getShipmentsByCompany(shippingCompanyId, startDate, endDate);
    
    // Get payments to this shipping company
    const payments = getShippingCompanyPayments(shippingCompanyId, startDate, endDate);
    
    // Process shipments
    const allTransactions = [];
    
    shipments.forEach(shipment => {
        allTransactions.push({
            date: shipment.shipDate || shipment.date,
            type: 'SHIPMENT',
            reference: shipment.id,
            description: `Shipment ${shipment.id} - ${shipment.serviceType || 'Standard'}`,
            debit: 0,
            credit: shipment.actualShippingCost || shipment.cost,
            balance: 0,
            status: shipment.status,
            details: {
                serviceType: shipment.serviceType,
                weight: shipment.weight,
                volume: shipment.volume,
                customerCharge: shipment.customerShippingCharge,
                actualCost: shipment.actualShippingCost,
                profit: (shipment.customerShippingCharge || 0) - (shipment.actualShippingCost || 0)
            }
        });
        
        // Update performance metrics
        statement.performance.totalShipments++;
        statement.performance.totalWeight += shipment.weight || 0;
        statement.performance.totalVolume += shipment.volume || 0;
        
        // Update account summary
        statement.accountSummary.totalShippingCosts += shipment.actualShippingCost || shipment.cost || 0;
        
        // Update profitability
        statement.profitability.totalCosts += shipment.actualShippingCost || shipment.cost || 0;
        statement.profitability.totalRevenue += shipment.customerShippingCharge || 0;
        
        // Update shipment summary by type
        const serviceType = (shipment.serviceType || 'standard').toLowerCase();
        if (statement.shipmentSummary[serviceType]) {
            statement.shipmentSummary[serviceType].count++;
            statement.shipmentSummary[serviceType].cost += shipment.actualShippingCost || 0;
            statement.shipmentSummary[serviceType].revenue += shipment.customerShippingCharge || 0;
        }
    });
    
    // Process payments
    payments.forEach(payment => {
        allTransactions.push({
            date: payment.date,
            type: 'PAYMENT',
            reference: payment.id || payment.reference,
            description: `Payment - ${payment.method}`,
            debit: payment.amount,
            credit: 0,
            balance: 0,
            status: 'PAID',
            paymentMethod: payment.method,
            details: {
                method: payment.method,
                reference: payment.reference,
                invoiceNumbers: payment.invoiceNumbers || []
            }
        });
        
        statement.accountSummary.totalPayments += payment.amount;
    });
    
    // Sort transactions by date
    allTransactions.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Calculate running balances
    let runningBalance = statement.accountSummary.openingBalance;
    allTransactions.forEach(txn => {
        runningBalance += txn.credit - txn.debit;
        txn.balance = runningBalance;
    });
    
    statement.transactions = allTransactions;
    statement.accountSummary.closingBalance = runningBalance;
    
    // Calculate performance metrics
    if (statement.performance.totalShipments > 0) {
        statement.performance.averageCost = statement.profitability.totalCosts / statement.performance.totalShipments;
        if (statement.performance.totalWeight > 0) {
            statement.performance.costPerKg = statement.profitability.totalCosts / statement.performance.totalWeight;
        }
    }
    
    // Calculate profitability
    statement.profitability.grossProfit = statement.profitability.totalRevenue - statement.profitability.totalCosts;
    if (statement.profitability.totalRevenue > 0) {
        statement.profitability.profitMargin = (statement.profitability.grossProfit / statement.profitability.totalRevenue) * 100;
    }
    
    return statement;
}

// Helper function to get customer info
function getCustomerInfo(customerId) {
    if (typeof customers !== 'undefined') {
        return customers.find(c => c.id === customerId || c.name === customerId);
    }
    return { id: customerId, name: customerId, creditLimit: 0, paymentTerms: 'net30' };
}

// Helper function to get supplier info
function getSupplierInfo(supplierId) {
    if (typeof suppliers !== 'undefined') {
        return suppliers.find(s => s.id === supplierId || s.name === supplierId);
    }
    return { id: supplierId, name: supplierId, paymentTerms: 'net30', currency: 'USD' };
}

// Helper function to get shipping company info
function getShippingCompanyInfo(companyId) {
    if (typeof shippingCompanies !== 'undefined') {
        return shippingCompanies.find(sc => sc.id === companyId || sc.name === companyId);
    }
    return { id: companyId, name: companyId, type: 'shipping' };
}

// Helper function to get customer invoices
function getCustomerInvoices(customerId, startDate, endDate) {
    if (typeof customerInvoices === 'undefined') return [];
    
    let invoices = customerInvoices.filter(inv => inv.customer === customerId);
    
    if (startDate) {
        invoices = invoices.filter(inv => inv.date >= startDate);
    }
    if (endDate) {
        invoices = invoices.filter(inv => inv.date <= endDate);
    }
    
    return invoices;
}

// Helper function to get supplier invoices
function getSupplierInvoices(supplierId, startDate, endDate) {
    if (typeof supplierInvoices === 'undefined') return [];
    
    let invoices = supplierInvoices.filter(inv => inv.supplier === supplierId);
    
    if (startDate) {
        invoices = invoices.filter(inv => inv.date >= startDate);
    }
    if (endDate) {
        invoices = invoices.filter(inv => inv.date <= endDate);
    }
    
    return invoices;
}

// Helper function to get customer payments
function getCustomerPayments(customerId, startDate, endDate) {
    if (typeof customerPayments === 'undefined') return [];

    let payments = customerPayments.filter(pay => pay.customer === customerId);

    if (startDate) {
        payments = payments.filter(pay => pay.date >= startDate);
    }
    if (endDate) {
        payments = payments.filter(pay => pay.date <= endDate);
    }

    return payments;
}

// Helper function to get supplier payments
function getSupplierPayments(supplierId, startDate, endDate) {
    if (typeof supplierPayments === 'undefined') return [];

    let payments = supplierPayments.filter(pay => pay.supplier === supplierId);

    if (startDate) {
        payments = payments.filter(pay => pay.date >= startDate);
    }
    if (endDate) {
        payments = payments.filter(pay => pay.date <= endDate);
    }

    return payments;
}

// Helper function to get shipments by company
function getShipmentsByCompany(companyId, startDate, endDate) {
    if (typeof shipments === 'undefined') return [];

    let companyShipments = shipments.filter(ship =>
        ship.carrierId === companyId ||
        ship.shippingCompany === companyId ||
        ship.company === companyId
    );

    if (startDate) {
        companyShipments = companyShipments.filter(ship => (ship.shipDate || ship.date) >= startDate);
    }
    if (endDate) {
        companyShipments = companyShipments.filter(ship => (ship.shipDate || ship.date) <= endDate);
    }

    return companyShipments;
}

// Helper function to get shipping company payments
function getShippingCompanyPayments(companyId, startDate, endDate) {
    if (typeof shippingCompanyPayments === 'undefined') return [];

    let payments = shippingCompanyPayments.filter(pay => pay.shippingCompanyId === companyId);

    if (startDate) {
        payments = payments.filter(pay => pay.date >= startDate);
    }
    if (endDate) {
        payments = payments.filter(pay => pay.date <= endDate);
    }

    return payments;
}

// Generate customer aging analysis
function generateCustomerAging(customerId, asOfDate = null) {
    const cutoffDate = asOfDate ? new Date(asOfDate) : new Date();
    const aging = {
        customerId: customerId,
        asOfDate: cutoffDate.toISOString().split('T')[0],
        current: 0,
        days1to30: 0,
        days31to60: 0,
        days61to90: 0,
        over90: 0,
        total: 0,
        details: []
    };

    const invoices = getCustomerInvoices(customerId);

    invoices.forEach(invoice => {
        if (invoice.status === 'Pending' && invoice.remainingBalance > 0) {
            const dueDate = new Date(invoice.dueDate);
            const daysOverdue = Math.floor((cutoffDate - dueDate) / (1000 * 60 * 60 * 24));
            const amount = invoice.remainingBalance || invoice.amount;

            const detail = {
                invoiceId: invoice.id,
                invoiceDate: invoice.date,
                dueDate: invoice.dueDate,
                amount: amount,
                daysOverdue: Math.max(0, daysOverdue)
            };

            if (daysOverdue <= 0) {
                aging.current += amount;
                detail.agingBucket = 'current';
            } else if (daysOverdue <= 30) {
                aging.days1to30 += amount;
                detail.agingBucket = '1-30';
            } else if (daysOverdue <= 60) {
                aging.days31to60 += amount;
                detail.agingBucket = '31-60';
            } else if (daysOverdue <= 90) {
                aging.days61to90 += amount;
                detail.agingBucket = '61-90';
            } else {
                aging.over90 += amount;
                detail.agingBucket = 'over90';
            }

            aging.details.push(detail);
            aging.total += amount;
        }
    });

    return aging;
}

// Generate supplier aging analysis
function generateSupplierAging(supplierId, asOfDate = null) {
    const cutoffDate = asOfDate ? new Date(asOfDate) : new Date();
    const aging = {
        supplierId: supplierId,
        asOfDate: cutoffDate.toISOString().split('T')[0],
        current: 0,
        days1to30: 0,
        days31to60: 0,
        days61to90: 0,
        over90: 0,
        total: 0,
        details: []
    };

    const invoices = getSupplierInvoices(supplierId);

    invoices.forEach(invoice => {
        if (invoice.status === 'Pending' && invoice.remainingBalance > 0) {
            const dueDate = new Date(invoice.dueDate);
            const daysOverdue = Math.floor((cutoffDate - dueDate) / (1000 * 60 * 60 * 24));
            const amount = invoice.remainingBalance || invoice.amount;

            const detail = {
                invoiceId: invoice.id,
                invoiceDate: invoice.date,
                dueDate: invoice.dueDate,
                amount: amount,
                daysOverdue: Math.max(0, daysOverdue)
            };

            if (daysOverdue <= 0) {
                aging.current += amount;
                detail.agingBucket = 'current';
            } else if (daysOverdue <= 30) {
                aging.days1to30 += amount;
                detail.agingBucket = '1-30';
            } else if (daysOverdue <= 60) {
                aging.days31to60 += amount;
                detail.agingBucket = '31-60';
            } else if (daysOverdue <= 90) {
                aging.days61to90 += amount;
                detail.agingBucket = '61-90';
            } else {
                aging.over90 += amount;
                detail.agingBucket = 'over90';
            }

            aging.details.push(detail);
            aging.total += amount;
        }
    });

    return aging;
}

// Generate all partner statements
function generateAllPartnerStatements(startDate = null, endDate = null) {
    const statements = {
        customers: [],
        suppliers: [],
        shippingCompanies: [],
        summary: {
            totalCustomers: 0,
            totalSuppliers: 0,
            totalShippingCompanies: 0,
            totalReceivables: 0,
            totalPayables: 0,
            totalShippingPayables: 0
        },
        generatedAt: new Date().toISOString()
    };

    // Generate customer statements
    if (typeof customers !== 'undefined') {
        customers.forEach(customer => {
            try {
                const statement = generateCustomerStatement(customer.id, startDate, endDate);
                statements.customers.push(statement);
                statements.summary.totalReceivables += statement.accountSummary.closingBalance;
            } catch (error) {
                console.error(`Error generating statement for customer ${customer.id}:`, error);
            }
        });
        statements.summary.totalCustomers = statements.customers.length;
    }

    // Generate supplier statements
    if (typeof suppliers !== 'undefined') {
        suppliers.forEach(supplier => {
            try {
                const statement = generateSupplierStatement(supplier.id, startDate, endDate);
                statements.suppliers.push(statement);
                statements.summary.totalPayables += statement.accountSummary.closingBalance;
            } catch (error) {
                console.error(`Error generating statement for supplier ${supplier.id}:`, error);
            }
        });
        statements.summary.totalSuppliers = statements.suppliers.length;
    }

    // Generate shipping company statements
    if (typeof shippingCompanies !== 'undefined') {
        shippingCompanies.forEach(company => {
            try {
                const statement = generateShippingCompanyStatement(company.id, startDate, endDate);
                statements.shippingCompanies.push(statement);
                statements.summary.totalShippingPayables += statement.accountSummary.closingBalance;
            } catch (error) {
                console.error(`Error generating statement for shipping company ${company.id}:`, error);
            }
        });
        statements.summary.totalShippingCompanies = statements.shippingCompanies.length;
    }

    return statements;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateCustomerStatement,
        generateSupplierStatement,
        generateShippingCompanyStatement,
        generateCustomerAging,
        generateSupplierAging,
        generateAllPartnerStatements
    };
}
