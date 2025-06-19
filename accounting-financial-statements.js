// 🏢 ENTERPRISE ACCOUNTING SYSTEM - FINANCIAL STATEMENTS
// Task 4.1: Financial Statements Generator (Odoo-Style)
// Status: ✅ IN PROGRESS

// ==================== PROFIT & LOSS STATEMENT ====================
function generateProfitLossStatement(startDate, endDate, comparative = false) {
    const statement = {
        statementType: 'PROFIT_LOSS',
        companyName: 'Sourcing Agent Business',
        periodStart: startDate,
        periodEnd: endDate,
        currency: 'USD',
        comparative: comparative,
        
        // Revenue Section
        revenue: {
            operatingRevenue: {
                productSales: 0,
                commissionRevenue: 0,
                shippingRevenue: {
                    air: 0,
                    sea: 0,
                    express: 0,
                    standard: 0,
                    total: 0
                },
                serviceRevenue: 0,
                totalOperatingRevenue: 0
            },
            otherRevenue: {
                interestIncome: 0,
                foreignExchangeGains: 0,
                discountIncome: 0,
                miscellaneousIncome: 0,
                totalOtherRevenue: 0
            },
            totalRevenue: 0
        },
        
        // Cost of Goods Sold
        costOfGoodsSold: {
            productCosts: 0,
            freightIn: 0,
            importDuties: 0,
            inventoryAdjustments: 0,
            purchaseDiscounts: 0, // Contra account - reduces COGS
            totalCOGS: 0
        },
        
        // Gross Profit
        grossProfit: 0,
        grossProfitMargin: 0,
        
        // Operating Expenses
        operatingExpenses: {
            shippingExpenses: {
                dhl: 0,
                fedex: 0,
                ups: 0,
                seaFreight: 0,
                other: 0,
                total: 0
            },
            generalExpenses: {
                officeRent: 0,
                utilities: 0,
                insurance: 0,
                professionalServices: 0,
                bankCharges: 0,
                depreciation: 0,
                badDebtExpense: 0,
                foreignExchangeLosses: 0,
                other: 0,
                total: 0
            },
            totalOperatingExpenses: 0
        },
        
        // Operating Income
        operatingIncome: 0,
        operatingMargin: 0,
        
        // Net Income
        netIncome: 0,
        netMargin: 0,
        
        // Additional Metrics
        metrics: {
            shippingProfitability: {
                shippingRevenue: 0,
                shippingCosts: 0,
                shippingProfit: 0,
                shippingMargin: 0
            },
            commissionMetrics: {
                commissionRevenue: 0,
                commissionRate: 0,
                productSalesBase: 0
            }
        },
        
        generatedAt: new Date().toISOString(),
        generatedBy: 'system'
    };

    // Get account balances for the period
    const revenueAccounts = getAccountsByType('revenue');
    const expenseAccounts = getAccountsByType('expense');

    // Calculate Revenue
    revenueAccounts.forEach(account => {
        const balance = getAccountBalance(account.code, startDate, endDate);
        
        switch(account.code) {
            case '4010': // Product Sales Revenue
                statement.revenue.operatingRevenue.productSales = balance;
                break;
            case '4020': // Commission Revenue
                statement.revenue.operatingRevenue.commissionRevenue = balance;
                break;
            case '4030': // Shipping Revenue - Air
                statement.revenue.operatingRevenue.shippingRevenue.air = balance;
                break;
            case '4031': // Shipping Revenue - Sea
                statement.revenue.operatingRevenue.shippingRevenue.sea = balance;
                break;
            case '4032': // Shipping Revenue - Express
                statement.revenue.operatingRevenue.shippingRevenue.express = balance;
                break;
            case '4033': // Shipping Revenue - Standard
                statement.revenue.operatingRevenue.shippingRevenue.standard = balance;
                break;
            case '4040': // Service Revenue
                statement.revenue.operatingRevenue.serviceRevenue = balance;
                break;
            case '4110': // Interest Income
                statement.revenue.otherRevenue.interestIncome = balance;
                break;
            case '4120': // Foreign Exchange Gains
                statement.revenue.otherRevenue.foreignExchangeGains = balance;
                break;
            case '4130': // Discount Income
                statement.revenue.otherRevenue.discountIncome = balance;
                break;
            case '4140': // Miscellaneous Income
                statement.revenue.otherRevenue.miscellaneousIncome = balance;
                break;
        }
    });

    // Calculate totals for revenue
    statement.revenue.operatingRevenue.shippingRevenue.total = 
        statement.revenue.operatingRevenue.shippingRevenue.air +
        statement.revenue.operatingRevenue.shippingRevenue.sea +
        statement.revenue.operatingRevenue.shippingRevenue.express +
        statement.revenue.operatingRevenue.shippingRevenue.standard;

    statement.revenue.operatingRevenue.totalOperatingRevenue = 
        statement.revenue.operatingRevenue.productSales +
        statement.revenue.operatingRevenue.commissionRevenue +
        statement.revenue.operatingRevenue.shippingRevenue.total +
        statement.revenue.operatingRevenue.serviceRevenue;

    statement.revenue.otherRevenue.totalOtherRevenue = 
        statement.revenue.otherRevenue.interestIncome +
        statement.revenue.otherRevenue.foreignExchangeGains +
        statement.revenue.otherRevenue.discountIncome +
        statement.revenue.otherRevenue.miscellaneousIncome;

    statement.revenue.totalRevenue = 
        statement.revenue.operatingRevenue.totalOperatingRevenue +
        statement.revenue.otherRevenue.totalOtherRevenue;

    // Calculate Cost of Goods Sold
    expenseAccounts.forEach(account => {
        const balance = getAccountBalance(account.code, startDate, endDate);
        
        if (account.category === 'cogs') {
            switch(account.code) {
                case '5010': // Product Costs
                    statement.costOfGoodsSold.productCosts = balance;
                    break;
                case '5020': // Freight In
                    statement.costOfGoodsSold.freightIn = balance;
                    break;
                case '5030': // Import Duties
                    statement.costOfGoodsSold.importDuties = balance;
                    break;
                case '5040': // Inventory Adjustments
                    statement.costOfGoodsSold.inventoryAdjustments = balance;
                    break;
                case '5050': // Purchase Discounts (contra account)
                    statement.costOfGoodsSold.purchaseDiscounts = balance;
                    break;
            }
        }
    });

    statement.costOfGoodsSold.totalCOGS = 
        statement.costOfGoodsSold.productCosts +
        statement.costOfGoodsSold.freightIn +
        statement.costOfGoodsSold.importDuties +
        statement.costOfGoodsSold.inventoryAdjustments -
        statement.costOfGoodsSold.purchaseDiscounts;

    // Calculate Gross Profit
    statement.grossProfit = statement.revenue.totalRevenue - statement.costOfGoodsSold.totalCOGS;
    statement.grossProfitMargin = statement.revenue.totalRevenue > 0 ? 
        (statement.grossProfit / statement.revenue.totalRevenue) * 100 : 0;

    // Calculate Operating Expenses
    expenseAccounts.forEach(account => {
        const balance = getAccountBalance(account.code, startDate, endDate);
        
        if (account.category === 'operating_expenses') {
            switch(account.code) {
                case '6010': // Shipping Expenses - DHL
                    statement.operatingExpenses.shippingExpenses.dhl = balance;
                    break;
                case '6011': // Shipping Expenses - FedEx
                    statement.operatingExpenses.shippingExpenses.fedex = balance;
                    break;
                case '6012': // Shipping Expenses - UPS
                    statement.operatingExpenses.shippingExpenses.ups = balance;
                    break;
                case '6013': // Shipping Expenses - Sea Freight
                    statement.operatingExpenses.shippingExpenses.seaFreight = balance;
                    break;
                case '6014': // Shipping Expenses - Other
                    statement.operatingExpenses.shippingExpenses.other = balance;
                    break;
                case '6020': // Office Rent
                    statement.operatingExpenses.generalExpenses.officeRent = balance;
                    break;
                case '6030': // Utilities
                    statement.operatingExpenses.generalExpenses.utilities = balance;
                    break;
                case '6040': // Insurance
                    statement.operatingExpenses.generalExpenses.insurance = balance;
                    break;
                case '6050': // Professional Services
                    statement.operatingExpenses.generalExpenses.professionalServices = balance;
                    break;
                case '6060': // Bank Charges
                    statement.operatingExpenses.generalExpenses.bankCharges = balance;
                    break;
                case '6080': // Depreciation Expense
                    statement.operatingExpenses.generalExpenses.depreciation = balance;
                    break;
                case '6090': // Bad Debt Expense
                    statement.operatingExpenses.generalExpenses.badDebtExpense = balance;
                    break;
                case '6070': // Foreign Exchange Losses
                    statement.operatingExpenses.generalExpenses.foreignExchangeLosses = balance;
                    break;
            }
        }
    });

    // Calculate totals for operating expenses
    statement.operatingExpenses.shippingExpenses.total = 
        statement.operatingExpenses.shippingExpenses.dhl +
        statement.operatingExpenses.shippingExpenses.fedex +
        statement.operatingExpenses.shippingExpenses.ups +
        statement.operatingExpenses.shippingExpenses.seaFreight +
        statement.operatingExpenses.shippingExpenses.other;

    statement.operatingExpenses.generalExpenses.total = 
        statement.operatingExpenses.generalExpenses.officeRent +
        statement.operatingExpenses.generalExpenses.utilities +
        statement.operatingExpenses.generalExpenses.insurance +
        statement.operatingExpenses.generalExpenses.professionalServices +
        statement.operatingExpenses.generalExpenses.bankCharges +
        statement.operatingExpenses.generalExpenses.depreciation +
        statement.operatingExpenses.generalExpenses.badDebtExpense +
        statement.operatingExpenses.generalExpenses.foreignExchangeLosses;

    statement.operatingExpenses.totalOperatingExpenses = 
        statement.operatingExpenses.shippingExpenses.total +
        statement.operatingExpenses.generalExpenses.total;

    // Calculate Operating Income
    statement.operatingIncome = statement.grossProfit - statement.operatingExpenses.totalOperatingExpenses;
    statement.operatingMargin = statement.revenue.totalRevenue > 0 ? 
        (statement.operatingIncome / statement.revenue.totalRevenue) * 100 : 0;

    // Calculate Net Income (same as operating income for now - no interest expense/tax)
    statement.netIncome = statement.operatingIncome;
    statement.netMargin = statement.revenue.totalRevenue > 0 ? 
        (statement.netIncome / statement.revenue.totalRevenue) * 100 : 0;

    // Calculate Additional Metrics
    statement.metrics.shippingProfitability.shippingRevenue = statement.revenue.operatingRevenue.shippingRevenue.total;
    statement.metrics.shippingProfitability.shippingCosts = statement.operatingExpenses.shippingExpenses.total;
    statement.metrics.shippingProfitability.shippingProfit = 
        statement.metrics.shippingProfitability.shippingRevenue - statement.metrics.shippingProfitability.shippingCosts;
    statement.metrics.shippingProfitability.shippingMargin = 
        statement.metrics.shippingProfitability.shippingRevenue > 0 ? 
        (statement.metrics.shippingProfitability.shippingProfit / statement.metrics.shippingProfitability.shippingRevenue) * 100 : 0;

    statement.metrics.commissionMetrics.commissionRevenue = statement.revenue.operatingRevenue.commissionRevenue;
    statement.metrics.commissionMetrics.productSalesBase = statement.revenue.operatingRevenue.productSales;
    statement.metrics.commissionMetrics.commissionRate = 
        statement.metrics.commissionMetrics.productSalesBase > 0 ? 
        (statement.metrics.commissionMetrics.commissionRevenue / statement.metrics.commissionMetrics.productSalesBase) * 100 : 0;

    return statement;
}

// ==================== BALANCE SHEET ====================
function generateBalanceSheet(asOfDate) {
    const statement = {
        statementType: 'BALANCE_SHEET',
        companyName: 'Sourcing Agent Business',
        asOfDate: asOfDate,
        currency: 'USD',
        
        // Assets
        assets: {
            currentAssets: {
                cashAndEquivalents: {
                    bankOperating: 0,
                    bankSavings: 0,
                    pettyCash: 0,
                    cashInTransit: 0,
                    total: 0
                },
                receivables: {
                    tradeReceivables: 0,
                    allowanceDoubtfulAccounts: 0,
                    netTradeReceivables: 0,
                    shippingReceivables: 0,
                    commissionReceivables: 0,
                    prepaidExpenses: 0,
                    accruedRevenue: 0,
                    total: 0
                },
                inventory: {
                    finishedGoods: 0,
                    rawMaterials: 0,
                    inventoryInTransit: 0,
                    inventoryReserve: 0,
                    netInventory: 0,
                    total: 0
                },
                totalCurrentAssets: 0
            },
            fixedAssets: {
                propertyPlantEquipment: 0,
                officeEquipment: 0,
                computerEquipment: 0,
                accumulatedDepreciation: 0,
                netFixedAssets: 0,
                intangibleAssets: 0,
                goodwill: 0,
                totalFixedAssets: 0
            },
            totalAssets: 0
        },
        
        // Liabilities
        liabilities: {
            currentLiabilities: {
                payables: {
                    tradePayables: 0,
                    shippingCompanyPayables: 0,
                    accruedExpenses: 0,
                    customerAdvances: 0,
                    accruedSalaries: 0,
                    total: 0
                },
                shortTermDebt: {
                    shortTermLoans: 0,
                    currentPortionLongTermDebt: 0,
                    total: 0
                },
                taxLiabilities: {
                    salesTaxPayable: 0,
                    incomeTaxPayable: 0,
                    vatPayable: 0,
                    importDutiesPayable: 0,
                    total: 0
                },
                totalCurrentLiabilities: 0
            },
            longTermLiabilities: {
                longTermDebt: 0,
                mortgagePayable: 0,
                equipmentLoans: 0,
                deferredTaxLiability: 0,
                totalLongTermLiabilities: 0
            },
            totalLiabilities: 0
        },
        
        // Equity
        equity: {
            ownersEquity: 0,
            retainedEarnings: 0,
            currentYearEarnings: 0,
            capitalContributions: 0,
            drawings: 0,
            accumulatedOtherComprehensiveIncome: 0,
            totalEquity: 0
        },
        
        // Balance Check
        totalLiabilitiesAndEquity: 0,
        balanced: false,
        balanceDifference: 0,
        
        generatedAt: new Date().toISOString(),
        generatedBy: 'system'
    };

    // Get all asset accounts
    const assetAccounts = getAccountsByType('asset');
    assetAccounts.forEach(account => {
        const balance = getAccountBalance(account.code, null, asOfDate);
        
        switch(account.code) {
            // Cash and Cash Equivalents
            case '1010':
                statement.assets.currentAssets.cashAndEquivalents.bankOperating = balance;
                break;
            case '1020':
                statement.assets.currentAssets.cashAndEquivalents.bankSavings = balance;
                break;
            case '1030':
                statement.assets.currentAssets.cashAndEquivalents.pettyCash = balance;
                break;
            case '1040':
                statement.assets.currentAssets.cashAndEquivalents.cashInTransit = balance;
                break;
            
            // Receivables
            case '1110':
                statement.assets.currentAssets.receivables.tradeReceivables = balance;
                break;
            case '1120':
                statement.assets.currentAssets.receivables.allowanceDoubtfulAccounts = balance;
                break;
            case '1160':
                statement.assets.currentAssets.receivables.shippingReceivables = balance;
                break;
            case '1170':
                statement.assets.currentAssets.receivables.commissionReceivables = balance;
                break;
            case '1140':
                statement.assets.currentAssets.receivables.prepaidExpenses = balance;
                break;
            case '1150':
                statement.assets.currentAssets.receivables.accruedRevenue = balance;
                break;
            
            // Inventory
            case '1220':
                statement.assets.currentAssets.inventory.finishedGoods = balance;
                break;
            case '1210':
                statement.assets.currentAssets.inventory.rawMaterials = balance;
                break;
            case '1230':
                statement.assets.currentAssets.inventory.inventoryInTransit = balance;
                break;
            case '1250':
                statement.assets.currentAssets.inventory.inventoryReserve = balance;
                break;
            
            // Fixed Assets
            case '1300':
                statement.assets.fixedAssets.propertyPlantEquipment = balance;
                break;
            case '1310':
                statement.assets.fixedAssets.officeEquipment = balance;
                break;
            case '1320':
                statement.assets.fixedAssets.computerEquipment = balance;
                break;
            case '1330':
                statement.assets.fixedAssets.accumulatedDepreciation = balance;
                break;
            case '1340':
                statement.assets.fixedAssets.intangibleAssets = balance;
                break;
            case '1350':
                statement.assets.fixedAssets.goodwill = balance;
                break;
        }
    });

    // Calculate asset totals
    statement.assets.currentAssets.cashAndEquivalents.total = 
        statement.assets.currentAssets.cashAndEquivalents.bankOperating +
        statement.assets.currentAssets.cashAndEquivalents.bankSavings +
        statement.assets.currentAssets.cashAndEquivalents.pettyCash +
        statement.assets.currentAssets.cashAndEquivalents.cashInTransit;

    statement.assets.currentAssets.receivables.netTradeReceivables = 
        statement.assets.currentAssets.receivables.tradeReceivables - 
        statement.assets.currentAssets.receivables.allowanceDoubtfulAccounts;

    statement.assets.currentAssets.receivables.total = 
        statement.assets.currentAssets.receivables.netTradeReceivables +
        statement.assets.currentAssets.receivables.shippingReceivables +
        statement.assets.currentAssets.receivables.commissionReceivables +
        statement.assets.currentAssets.receivables.prepaidExpenses +
        statement.assets.currentAssets.receivables.accruedRevenue;

    statement.assets.currentAssets.inventory.netInventory = 
        statement.assets.currentAssets.inventory.finishedGoods +
        statement.assets.currentAssets.inventory.rawMaterials +
        statement.assets.currentAssets.inventory.inventoryInTransit -
        statement.assets.currentAssets.inventory.inventoryReserve;

    statement.assets.currentAssets.inventory.total = statement.assets.currentAssets.inventory.netInventory;

    statement.assets.currentAssets.totalCurrentAssets = 
        statement.assets.currentAssets.cashAndEquivalents.total +
        statement.assets.currentAssets.receivables.total +
        statement.assets.currentAssets.inventory.total;

    statement.assets.fixedAssets.netFixedAssets = 
        statement.assets.fixedAssets.propertyPlantEquipment +
        statement.assets.fixedAssets.officeEquipment +
        statement.assets.fixedAssets.computerEquipment -
        statement.assets.fixedAssets.accumulatedDepreciation;

    statement.assets.fixedAssets.totalFixedAssets = 
        statement.assets.fixedAssets.netFixedAssets +
        statement.assets.fixedAssets.intangibleAssets +
        statement.assets.fixedAssets.goodwill;

    statement.assets.totalAssets =
        statement.assets.currentAssets.totalCurrentAssets +
        statement.assets.fixedAssets.totalFixedAssets;

    // Get all liability accounts
    const liabilityAccounts = getAccountsByType('liability');
    liabilityAccounts.forEach(account => {
        const balance = getAccountBalance(account.code, null, asOfDate);

        switch(account.code) {
            // Current Liabilities - Payables
            case '2010':
                statement.liabilities.currentLiabilities.payables.tradePayables = balance;
                break;
            case '2015':
                statement.liabilities.currentLiabilities.payables.shippingCompanyPayables = balance;
                break;
            case '2020':
                statement.liabilities.currentLiabilities.payables.accruedExpenses = balance;
                break;
            case '2040':
                statement.liabilities.currentLiabilities.payables.customerAdvances = balance;
                break;
            case '2050':
                statement.liabilities.currentLiabilities.payables.accruedSalaries = balance;
                break;

            // Short-term Debt
            case '2030':
                statement.liabilities.currentLiabilities.shortTermDebt.shortTermLoans = balance;
                break;

            // Tax Liabilities
            case '2110':
                statement.liabilities.currentLiabilities.taxLiabilities.salesTaxPayable = balance;
                break;
            case '2120':
                statement.liabilities.currentLiabilities.taxLiabilities.incomeTaxPayable = balance;
                break;
            case '2130':
                statement.liabilities.currentLiabilities.taxLiabilities.vatPayable = balance;
                break;
            case '2140':
                statement.liabilities.currentLiabilities.taxLiabilities.importDutiesPayable = balance;
                break;

            // Long-term Liabilities
            case '2200':
                statement.liabilities.longTermLiabilities.longTermDebt = balance;
                break;
            case '2210':
                statement.liabilities.longTermLiabilities.mortgagePayable = balance;
                break;
            case '2220':
                statement.liabilities.longTermLiabilities.equipmentLoans = balance;
                break;
            case '2230':
                statement.liabilities.longTermLiabilities.deferredTaxLiability = balance;
                break;
        }
    });

    // Calculate liability totals
    statement.liabilities.currentLiabilities.payables.total =
        statement.liabilities.currentLiabilities.payables.tradePayables +
        statement.liabilities.currentLiabilities.payables.shippingCompanyPayables +
        statement.liabilities.currentLiabilities.payables.accruedExpenses +
        statement.liabilities.currentLiabilities.payables.customerAdvances +
        statement.liabilities.currentLiabilities.payables.accruedSalaries;

    statement.liabilities.currentLiabilities.shortTermDebt.total =
        statement.liabilities.currentLiabilities.shortTermDebt.shortTermLoans +
        statement.liabilities.currentLiabilities.shortTermDebt.currentPortionLongTermDebt;

    statement.liabilities.currentLiabilities.taxLiabilities.total =
        statement.liabilities.currentLiabilities.taxLiabilities.salesTaxPayable +
        statement.liabilities.currentLiabilities.taxLiabilities.incomeTaxPayable +
        statement.liabilities.currentLiabilities.taxLiabilities.vatPayable +
        statement.liabilities.currentLiabilities.taxLiabilities.importDutiesPayable;

    statement.liabilities.currentLiabilities.totalCurrentLiabilities =
        statement.liabilities.currentLiabilities.payables.total +
        statement.liabilities.currentLiabilities.shortTermDebt.total +
        statement.liabilities.currentLiabilities.taxLiabilities.total;

    statement.liabilities.longTermLiabilities.totalLongTermLiabilities =
        statement.liabilities.longTermLiabilities.longTermDebt +
        statement.liabilities.longTermLiabilities.mortgagePayable +
        statement.liabilities.longTermLiabilities.equipmentLoans +
        statement.liabilities.longTermLiabilities.deferredTaxLiability;

    statement.liabilities.totalLiabilities =
        statement.liabilities.currentLiabilities.totalCurrentLiabilities +
        statement.liabilities.longTermLiabilities.totalLongTermLiabilities;

    // Get all equity accounts
    const equityAccounts = getAccountsByType('equity');
    equityAccounts.forEach(account => {
        const balance = getAccountBalance(account.code, null, asOfDate);

        switch(account.code) {
            case '3000':
                statement.equity.ownersEquity = balance;
                break;
            case '3100':
                statement.equity.retainedEarnings = balance;
                break;
            case '3200':
                statement.equity.currentYearEarnings = balance;
                break;
            case '3300':
                statement.equity.capitalContributions = balance;
                break;
            case '3400':
                statement.equity.drawings = balance;
                break;
            case '3500':
                statement.equity.accumulatedOtherComprehensiveIncome = balance;
                break;
        }
    });

    // Calculate equity total
    statement.equity.totalEquity =
        statement.equity.ownersEquity +
        statement.equity.retainedEarnings +
        statement.equity.currentYearEarnings +
        statement.equity.capitalContributions -
        statement.equity.drawings +
        statement.equity.accumulatedOtherComprehensiveIncome;

    // Calculate total liabilities and equity
    statement.totalLiabilitiesAndEquity =
        statement.liabilities.totalLiabilities + statement.equity.totalEquity;

    // Check if balance sheet is balanced
    statement.balanceDifference = statement.assets.totalAssets - statement.totalLiabilitiesAndEquity;
    statement.balanced = Math.abs(statement.balanceDifference) < 0.01;

    return statement;
}

// ==================== CASH FLOW STATEMENT ====================
function generateCashFlowStatement(startDate, endDate) {
    const statement = {
        statementType: 'CASH_FLOW',
        companyName: 'Sourcing Agent Business',
        periodStart: startDate,
        periodEnd: endDate,
        currency: 'USD',

        // Operating Activities
        operatingActivities: {
            netIncome: 0,
            adjustments: {
                depreciation: 0,
                badDebtExpense: 0,
                inventoryAdjustments: 0,
                foreignExchangeLosses: 0,
                total: 0
            },
            workingCapitalChanges: {
                accountsReceivableChange: 0,
                inventoryChange: 0,
                prepaidExpensesChange: 0,
                accountsPayableChange: 0,
                accruedExpensesChange: 0,
                total: 0
            },
            netCashFromOperating: 0
        },

        // Investing Activities
        investingActivities: {
            equipmentPurchases: 0,
            equipmentSales: 0,
            intangibleAssetPurchases: 0,
            netCashFromInvesting: 0
        },

        // Financing Activities
        financingActivities: {
            capitalContributions: 0,
            drawings: 0,
            loanProceeds: 0,
            loanRepayments: 0,
            netCashFromFinancing: 0
        },

        // Net Change in Cash
        netChangeInCash: 0,
        beginningCash: 0,
        endingCash: 0,

        generatedAt: new Date().toISOString(),
        generatedBy: 'system'
    };

    // Get net income from P&L
    const profitLoss = generateProfitLossStatement(startDate, endDate);
    statement.operatingActivities.netIncome = profitLoss.netIncome;

    // Get adjustments (non-cash expenses)
    statement.operatingActivities.adjustments.depreciation =
        getAccountBalance('6080', startDate, endDate); // Depreciation Expense
    statement.operatingActivities.adjustments.badDebtExpense =
        getAccountBalance('6090', startDate, endDate); // Bad Debt Expense
    statement.operatingActivities.adjustments.inventoryAdjustments =
        getAccountBalance('5040', startDate, endDate); // Inventory Adjustments
    statement.operatingActivities.adjustments.foreignExchangeLosses =
        getAccountBalance('6070', startDate, endDate); // Foreign Exchange Losses

    statement.operatingActivities.adjustments.total =
        statement.operatingActivities.adjustments.depreciation +
        statement.operatingActivities.adjustments.badDebtExpense +
        statement.operatingActivities.adjustments.inventoryAdjustments +
        statement.operatingActivities.adjustments.foreignExchangeLosses;

    // Calculate working capital changes (simplified - would need beginning and ending balances)
    // For now, using period activity as proxy
    statement.operatingActivities.workingCapitalChanges.accountsReceivableChange =
        -getAccountBalance('1110', startDate, endDate); // Increase in AR is cash outflow
    statement.operatingActivities.workingCapitalChanges.inventoryChange =
        -getAccountBalance('1220', startDate, endDate); // Increase in inventory is cash outflow
    statement.operatingActivities.workingCapitalChanges.accountsPayableChange =
        getAccountBalance('2010', startDate, endDate); // Increase in AP is cash inflow

    statement.operatingActivities.workingCapitalChanges.total =
        statement.operatingActivities.workingCapitalChanges.accountsReceivableChange +
        statement.operatingActivities.workingCapitalChanges.inventoryChange +
        statement.operatingActivities.workingCapitalChanges.prepaidExpensesChange +
        statement.operatingActivities.workingCapitalChanges.accountsPayableChange +
        statement.operatingActivities.workingCapitalChanges.accruedExpensesChange;

    statement.operatingActivities.netCashFromOperating =
        statement.operatingActivities.netIncome +
        statement.operatingActivities.adjustments.total +
        statement.operatingActivities.workingCapitalChanges.total;

    // Investing activities (simplified)
    statement.investingActivities.equipmentPurchases =
        -getAccountBalance('1310', startDate, endDate) - getAccountBalance('1320', startDate, endDate);

    statement.investingActivities.netCashFromInvesting =
        statement.investingActivities.equipmentPurchases +
        statement.investingActivities.equipmentSales +
        statement.investingActivities.intangibleAssetPurchases;

    // Financing activities
    statement.financingActivities.capitalContributions =
        getAccountBalance('3300', startDate, endDate);
    statement.financingActivities.drawings =
        -getAccountBalance('3400', startDate, endDate);
    statement.financingActivities.loanProceeds =
        getAccountBalance('2200', startDate, endDate);

    statement.financingActivities.netCashFromFinancing =
        statement.financingActivities.capitalContributions +
        statement.financingActivities.drawings +
        statement.financingActivities.loanProceeds +
        statement.financingActivities.loanRepayments;

    // Calculate net change in cash
    statement.netChangeInCash =
        statement.operatingActivities.netCashFromOperating +
        statement.investingActivities.netCashFromInvesting +
        statement.financingActivities.netCashFromFinancing;

    // Get beginning and ending cash balances
    const startDateObj = new Date(startDate);
    const dayBefore = new Date(startDateObj);
    dayBefore.setDate(dayBefore.getDate() - 1);

    statement.beginningCash =
        getAccountBalance('1010', null, dayBefore.toISOString().split('T')[0]) +
        getAccountBalance('1020', null, dayBefore.toISOString().split('T')[0]) +
        getAccountBalance('1030', null, dayBefore.toISOString().split('T')[0]);

    statement.endingCash =
        getAccountBalance('1010', null, endDate) +
        getAccountBalance('1020', null, endDate) +
        getAccountBalance('1030', null, endDate);

    return statement;
}

// ==================== STATEMENT OF EQUITY ====================
function generateStatementOfEquity(startDate, endDate) {
    const statement = {
        statementType: 'STATEMENT_OF_EQUITY',
        companyName: 'Sourcing Agent Business',
        periodStart: startDate,
        periodEnd: endDate,
        currency: 'USD',

        beginningBalances: {
            ownersEquity: 0,
            retainedEarnings: 0,
            capitalContributions: 0,
            accumulatedOCI: 0,
            total: 0
        },

        changes: {
            netIncome: 0,
            capitalContributions: 0,
            drawings: 0,
            otherComprehensiveIncome: 0,
            total: 0
        },

        endingBalances: {
            ownersEquity: 0,
            retainedEarnings: 0,
            capitalContributions: 0,
            accumulatedOCI: 0,
            total: 0
        },

        generatedAt: new Date().toISOString(),
        generatedBy: 'system'
    };

    // Get beginning balances (simplified - using current balances minus period changes)
    const currentOwnersEquity = getAccountBalance('3000');
    const currentRetainedEarnings = getAccountBalance('3100');
    const currentCapitalContributions = getAccountBalance('3300');
    const currentAccumulatedOCI = getAccountBalance('3500');

    // Get period changes
    const periodNetIncome = generateProfitLossStatement(startDate, endDate).netIncome;
    const periodCapitalContributions = getAccountBalance('3300', startDate, endDate);
    const periodDrawings = getAccountBalance('3400', startDate, endDate);

    // Calculate beginning balances
    statement.beginningBalances.ownersEquity = currentOwnersEquity;
    statement.beginningBalances.retainedEarnings = currentRetainedEarnings - periodNetIncome;
    statement.beginningBalances.capitalContributions = currentCapitalContributions - periodCapitalContributions;
    statement.beginningBalances.accumulatedOCI = currentAccumulatedOCI;
    statement.beginningBalances.total =
        statement.beginningBalances.ownersEquity +
        statement.beginningBalances.retainedEarnings +
        statement.beginningBalances.capitalContributions +
        statement.beginningBalances.accumulatedOCI;

    // Record changes
    statement.changes.netIncome = periodNetIncome;
    statement.changes.capitalContributions = periodCapitalContributions;
    statement.changes.drawings = periodDrawings;
    statement.changes.total =
        statement.changes.netIncome +
        statement.changes.capitalContributions -
        statement.changes.drawings +
        statement.changes.otherComprehensiveIncome;

    // Calculate ending balances
    statement.endingBalances.ownersEquity = currentOwnersEquity;
    statement.endingBalances.retainedEarnings = currentRetainedEarnings;
    statement.endingBalances.capitalContributions = currentCapitalContributions;
    statement.endingBalances.accumulatedOCI = currentAccumulatedOCI;
    statement.endingBalances.total =
        statement.endingBalances.ownersEquity +
        statement.endingBalances.retainedEarnings +
        statement.endingBalances.capitalContributions +
        statement.endingBalances.accumulatedOCI;

    return statement;
}

// ==================== COMPREHENSIVE FINANCIAL PACKAGE ====================
function generateComprehensiveFinancialStatements(startDate, endDate, asOfDate = null) {
    const balanceSheetDate = asOfDate || endDate;

    const financialPackage = {
        reportingPeriod: {
            startDate: startDate,
            endDate: endDate,
            asOfDate: balanceSheetDate
        },

        statements: {
            profitLoss: generateProfitLossStatement(startDate, endDate),
            balanceSheet: generateBalanceSheet(balanceSheetDate),
            cashFlow: generateCashFlowStatement(startDate, endDate),
            equity: generateStatementOfEquity(startDate, endDate)
        },

        keyMetrics: {
            profitability: {
                grossProfitMargin: 0,
                operatingMargin: 0,
                netMargin: 0,
                returnOnAssets: 0,
                returnOnEquity: 0
            },
            liquidity: {
                currentRatio: 0,
                quickRatio: 0,
                cashRatio: 0,
                workingCapital: 0
            },
            efficiency: {
                assetTurnover: 0,
                receivablesTurnover: 0,
                inventoryTurnover: 0,
                payablesTurnover: 0
            },
            leverage: {
                debtToAssets: 0,
                debtToEquity: 0,
                equityRatio: 0,
                interestCoverage: 0
            }
        },

        generatedAt: new Date().toISOString(),
        generatedBy: 'system'
    };

    // Calculate key metrics
    const pl = financialPackage.statements.profitLoss;
    const bs = financialPackage.statements.balanceSheet;

    // Profitability ratios
    financialPackage.keyMetrics.profitability.grossProfitMargin = pl.grossProfitMargin;
    financialPackage.keyMetrics.profitability.operatingMargin = pl.operatingMargin;
    financialPackage.keyMetrics.profitability.netMargin = pl.netMargin;
    financialPackage.keyMetrics.profitability.returnOnAssets =
        bs.assets.totalAssets > 0 ? (pl.netIncome / bs.assets.totalAssets) * 100 : 0;
    financialPackage.keyMetrics.profitability.returnOnEquity =
        bs.equity.totalEquity > 0 ? (pl.netIncome / bs.equity.totalEquity) * 100 : 0;

    // Liquidity ratios
    financialPackage.keyMetrics.liquidity.currentRatio =
        bs.liabilities.currentLiabilities.totalCurrentLiabilities > 0 ?
        bs.assets.currentAssets.totalCurrentAssets / bs.liabilities.currentLiabilities.totalCurrentLiabilities : 0;

    const quickAssets = bs.assets.currentAssets.cashAndEquivalents.total + bs.assets.currentAssets.receivables.total;
    financialPackage.keyMetrics.liquidity.quickRatio =
        bs.liabilities.currentLiabilities.totalCurrentLiabilities > 0 ?
        quickAssets / bs.liabilities.currentLiabilities.totalCurrentLiabilities : 0;

    financialPackage.keyMetrics.liquidity.cashRatio =
        bs.liabilities.currentLiabilities.totalCurrentLiabilities > 0 ?
        bs.assets.currentAssets.cashAndEquivalents.total / bs.liabilities.currentLiabilities.totalCurrentLiabilities : 0;

    financialPackage.keyMetrics.liquidity.workingCapital =
        bs.assets.currentAssets.totalCurrentAssets - bs.liabilities.currentLiabilities.totalCurrentLiabilities;

    // Efficiency ratios (simplified)
    financialPackage.keyMetrics.efficiency.assetTurnover =
        bs.assets.totalAssets > 0 ? pl.revenue.totalRevenue / bs.assets.totalAssets : 0;

    // Leverage ratios
    financialPackage.keyMetrics.leverage.debtToAssets =
        bs.assets.totalAssets > 0 ? (bs.liabilities.totalLiabilities / bs.assets.totalAssets) * 100 : 0;
    financialPackage.keyMetrics.leverage.debtToEquity =
        bs.equity.totalEquity > 0 ? (bs.liabilities.totalLiabilities / bs.equity.totalEquity) * 100 : 0;
    financialPackage.keyMetrics.leverage.equityRatio =
        bs.assets.totalAssets > 0 ? (bs.equity.totalEquity / bs.assets.totalAssets) * 100 : 0;

    return financialPackage;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateProfitLossStatement,
        generateBalanceSheet,
        generateCashFlowStatement,
        generateStatementOfEquity,
        generateComprehensiveFinancialStatements
    };
}
