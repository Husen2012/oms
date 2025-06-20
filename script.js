

// ✅ NAVIGATION FUNCTIONS
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}

function toggleMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    const mobileToggle = document.querySelector('.mobile-nav-toggle');

    if (navLinks && mobileToggle) {
        navLinks.classList.toggle('mobile-hidden');
        navLinks.classList.toggle('mobile-menu');

        // Update toggle icon
        mobileToggle.innerHTML = navLinks.classList.contains('mobile-menu') ? '✕' : '☰';
    }
}

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add mobile navigation toggle if needed
    const navbar = document.querySelector('.navbar');
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');

    if (navbar && navContainer && navLinks && window.innerWidth <= 768) {
        // Check if mobile toggle doesn't exist
        if (!navContainer.querySelector('.mobile-nav-toggle')) {
            const mobileToggle = document.createElement('button');
            mobileToggle.className = 'mobile-nav-toggle';
            mobileToggle.innerHTML = '☰';
            mobileToggle.onclick = toggleMobileNav;
            mobileToggle.style.display = 'none'; // Hidden by default, shown in CSS media query

            navContainer.appendChild(mobileToggle);
            navLinks.classList.add('mobile-hidden');
        }
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        const navLinks = document.querySelector('.nav-links');
        const mobileToggle = document.querySelector('.mobile-nav-toggle');

        if (window.innerWidth > 768) {
            if (navLinks) {
                navLinks.classList.remove('mobile-hidden', 'mobile-menu');
            }
            if (mobileToggle) {
                mobileToggle.innerHTML = '☰';
            }
        } else {
            if (navLinks && !navLinks.classList.contains('mobile-menu')) {
                navLinks.classList.add('mobile-hidden');
            }
        }
    });
});

// ✅ COMPREHENSIVE TEST DATA INITIALIZATION
function initializeTestData() {
    console.log("🔄 Initializing comprehensive test data...");

    // Clear existing data to ensure clean test environment
    clearAllData();

    // Initialize basic test data
    initializeCustomersAndSuppliers();
    initializeTestProducts();
    initializeTestPurchaseOrders();
    initializeTestCustomerInvoices();
    initializeTestQuotes();
    initializeTestShipments();
    initializeTestWallets();
    initializeShippingData();

    // Save all test data to storage
    saveDataToStorage();

    console.log("✅ Test data initialized successfully!");
    console.log("📊 Data Summary:");
    console.log(`- Products: ${products.length}`);
    console.log(`- Customers: ${customers.length}`);
    console.log(`- Suppliers: ${suppliers.length}`);
    console.log(`- Purchase Orders: ${supplierInvoices.length}`);
    console.log(`- Customer Invoices: ${customerInvoices.length}`);
    console.log(`- Quotes: ${customerQuotes.length}`);
    console.log(`- Shipments: ${shipments.length}`);
}

// Clear all existing data
function clearAllData() {
    products = [];
    customers = [];
    suppliers = [];
    customerInvoices = [];
    supplierInvoices = [];
    customerQuotes = [];
    shipments = [];
    customerWallets = [];
    walletTransactions = [];
    customerPayments = [];
    supplierPayments = [];
    customerAllocations = [];
    stockUpdates = [];
    customerContacts = [];
    supplierContacts = [];
    shippingAnalytics = {};
    shippingCompanies = [];
    shippingTypes = [];

    // Clear any other global variables
    selectedProducts = {};
    selectedSupplierProducts = {};
    editingProductId = null;
}

// Initialize customers and suppliers
function initializeCustomersAndSuppliers() {
    customers = [
        {
            id: "CUST001",
            name: "F16 Electronics",
            email: "orders@f16electronics.com",
            phone: "+1-555-0101",
            address: "123 Tech Street, Silicon Valley, CA 94000",
            status: "active",
            creditLimit: 50000.00,
            paymentTerms: "net30"
        },
        {
            id: "CUST002",
            name: "Beta Trading Co.",
            email: "purchasing@betatrading.com",
            phone: "+1-555-0102",
            address: "456 Commerce Ave, New York, NY 10001",
            status: "active",
            creditLimit: 25000.00,
            paymentTerms: "net15"
        },
        {
            id: "CUST003",
            name: "Gamma Industries",
            email: "procurement@gammaindustries.com",
            phone: "+1-555-0103",
            address: "789 Industrial Blvd, Chicago, IL 60601",
            status: "active",
            creditLimit: 75000.00,
            paymentTerms: "net30"
        }
    ];

    suppliers = [
        {
            id: "SUPP001",
            name: "K2 Manufacturing",
            email: "sales@k2manufacturing.com",
            phone: "+86-755-1234567",
            address: "Building A, Industrial Park, Shenzhen, China",
            status: "active",
            paymentTerms: "net30",
            currency: "USD"
        },
        {
            id: "SUPP002",
            name: "Beta Components",
            email: "orders@betacomponents.com",
            phone: "+86-755-2345678",
            address: "Factory B, Tech Zone, Guangzhou, China",
            status: "active",
            paymentTerms: "net15",
            currency: "USD"
        },
        {
            id: "SUPP003",
            name: "Gamma Supply",
            email: "sales@gammasupply.com",
            phone: "+86-755-3456789",
            address: "Warehouse C, Export Zone, Dongguan, China",
            status: "active",
            paymentTerms: "net45",
            currency: "USD"
        }
    ];
}

// Initialize test products with comprehensive data
function initializeTestProducts() {
    products = [
        {
            id: 1,
            name: "Wireless Bluetooth Earbuds",
            sku: "WBE-001",
            quantity: 150,
            costPrice: 12.50,
            sellPrice: 39.99,
            shipped: 100,
            remaining: 50,
            category: "Audio",
            brand: "TechSound Pro",
            description: "Premium wireless earbuds with active noise cancellation and 24-hour battery life",
            weight: 0.25,
            cbm: 0.0008,
            photo: "",
            inventory: {
                ordered: 150,
                received: 150,
                available: 50,
                allocated: 100,
                shipped: 100,
                status: "in_stock",
                reorderLevel: 30,
                lastReceived: "2024-06-15",
                lastOrdered: "2024-06-01"
            }
        },
        {
            id: 2,
            name: "Smart Fitness Watch",
            sku: "SFW-002",
            quantity: 75,
            costPrice: 45.00,
            sellPrice: 129.99,
            shipped: 50,
            remaining: 25,
            category: "Wearables",
            brand: "FitTech",
            description: "Advanced fitness tracker with GPS, heart rate monitor, and 7-day battery",
            weight: 0.08,
            cbm: 0.0003,
            photo: "",
            inventory: {
                ordered: 75,
                received: 75,
                available: 25,
                allocated: 50,
                shipped: 50,
                status: "low_stock",
                reorderLevel: 20,
                lastReceived: "2024-06-12",
                lastOrdered: "2024-05-28"
            }
        },
        {
            id: 3,
            name: "Portable Power Bank 20000mAh",
            sku: "PPB-003",
            quantity: 200,
            costPrice: 18.75,
            sellPrice: 49.99,
            shipped: 120,
            remaining: 80,
            category: "Accessories",
            brand: "PowerMax",
            description: "High-capacity power bank with fast charging and wireless charging pad",
            weight: 0.45,
            cbm: 0.0012,
            photo: "",
            inventory: {
                ordered: 200,
                received: 200,
                available: 80,
                allocated: 120,
                shipped: 120,
                status: "in_stock",
                reorderLevel: 50,
                lastReceived: "2024-06-10",
                lastOrdered: "2024-05-25"
            }
        },
        {
            id: 4,
            name: "USB-C Hub 7-in-1",
            sku: "UCH-004",
            quantity: 100,
            costPrice: 22.00,
            sellPrice: 69.99,
            shipped: 60,
            remaining: 40,
            category: "Accessories",
            brand: "ConnectPro",
            description: "Multi-port USB-C hub with HDMI, USB 3.0, SD card reader, and PD charging",
            weight: 0.15,
            cbm: 0.0005,
            photo: "",
            inventory: {
                ordered: 100,
                received: 100,
                available: 40,
                allocated: 60,
                shipped: 60,
                status: "in_stock",
                reorderLevel: 25,
                lastReceived: "2024-06-08",
                lastOrdered: "2024-05-20"
            }
        },
        {
            id: 5,
            name: "Wireless Charging Stand",
            sku: "WCS-005",
            quantity: 80,
            costPrice: 15.50,
            sellPrice: 34.99,
            shipped: 45,
            remaining: 35,
            category: "Accessories",
            brand: "ChargeTech",
            description: "Fast wireless charging stand with adjustable angle and LED indicator",
            weight: 0.35,
            cbm: 0.0009,
            photo: "",
            inventory: {
                ordered: 80,
                received: 80,
                available: 35,
                allocated: 45,
                shipped: 45,
                status: "in_stock",
                reorderLevel: 20,
                lastReceived: "2024-06-05",
                lastOrdered: "2024-05-15"
            }
        }
    ];
}

// Initialize test purchase orders
function initializeTestPurchaseOrders() {
    supplierInvoices = [
        {
            id: "PO-001",
            date: "2024-06-01",
            dueDate: "2024-06-15",
            amount: 3125.00,
            status: "Received",
            supplier: "K2 Manufacturing",
            items: [
                { productId: 1, quantity: 150, unitPrice: 12.50 },
                { productId: 2, quantity: 25, unitPrice: 45.00 }
            ],
            paymentStatus: "Paid",
            paymentTerms: "net30",
            payments: [
                {
                    id: "PAY-PO-001-001",
                    amount: 3125.00,
                    method: "Bank Transfer",
                    date: "2024-06-10",
                    reference: "TXN-PO-001",
                    type: "full_payment",
                    notes: "Full payment for PO-001"
                }
            ],
            totalPaid: 3125.00,
            remainingBalance: 0.00,
            products: [
                { id: 1, name: "Wireless Bluetooth Earbuds", sku: "WBE-001", quantity: 150, costPrice: 12.50 },
                { id: 2, name: "Smart Fitness Watch", sku: "SFW-002", quantity: 25, costPrice: 45.00 }
            ]
        },
        {
            id: "PO-002",
            date: "2024-06-05",
            dueDate: "2024-06-20",
            amount: 5950.00,
            status: "Shipped",
            supplier: "Beta Components",
            items: [
                { productId: 3, quantity: 200, unitPrice: 18.75 },
                { productId: 4, quantity: 75, unitPrice: 22.00 }
            ],
            paymentStatus: "Partial",
            paymentTerms: "net15",
            payments: [
                {
                    id: "PAY-PO-002-001",
                    amount: 2975.00,
                    method: "Credit Card",
                    date: "2024-06-08",
                    reference: "TXN-PO-002",
                    type: "partial_payment",
                    notes: "50% down payment"
                }
            ],
            totalPaid: 2975.00,
            remainingBalance: 2975.00,
            products: [
                { id: 3, name: "Portable Power Bank 20000mAh", sku: "PPB-003", quantity: 200, costPrice: 18.75 },
                { id: 4, name: "USB-C Hub 7-in-1", sku: "UCH-004", quantity: 75, costPrice: 22.00 }
            ]
        },
        {
            id: "PO-003",
            date: "2024-06-10",
            dueDate: "2024-06-25",
            amount: 1860.00,
            status: "Pending",
            supplier: "Gamma Supply",
            items: [
                { productId: 4, quantity: 25, unitPrice: 22.00 },
                { productId: 5, quantity: 80, unitPrice: 15.50 }
            ],
            paymentStatus: "Unpaid",
            paymentTerms: "net45",
            payments: [],
            totalPaid: 0.00,
            remainingBalance: 1860.00,
            products: [
                { id: 4, name: "USB-C Hub 7-in-1", sku: "UCH-004", quantity: 25, costPrice: 22.00 },
                { id: 5, name: "Wireless Charging Stand", sku: "WCS-005", quantity: 80, costPrice: 15.50 }
            ]
        }
    ];
}

// Initialize test customer invoices
function initializeTestCustomerInvoices() {
    customerInvoices = [
        {
            id: "INV-001",
            date: "2024-06-12",
            dueDate: "2024-06-26",
            amount: 5199.75,
            status: "Shipped",
            customer: "F16 Electronics",
            items: [
                { productId: 1, quantity: 50, unitPrice: 39.99 },
                { productId: 2, quantity: 25, unitPrice: 129.99 }
            ],
            paymentStatus: "Paid",
            paymentTerms: "net30",
            payments: [
                {
                    id: "PAY-INV-001-001",
                    amount: 5199.75,
                    method: "Bank Transfer",
                    date: "2024-06-15",
                    reference: "TXN-INV-001",
                    type: "full_payment",
                    notes: "Full payment received"
                }
            ],
            totalPaid: 5199.75,
            remainingBalance: 0.00,
            shippingInfo: {
                type: "Air",
                company: "DHL",
                actualCost: 85.00,
                customerCharge: 120.00,
                profit: 35.00,
                notes: "Express delivery"
            }
        },
        {
            id: "INV-002",
            date: "2024-06-14",
            dueDate: "2024-06-28",
            amount: 7798.60,
            status: "Pending",
            customer: "Beta Trading Co.",
            items: [
                { productId: 3, quantity: 80, unitPrice: 49.99 },
                { productId: 4, quantity: 40, unitPrice: 69.99 }
            ],
            paymentStatus: "Partial",
            paymentTerms: "net15",
            payments: [
                {
                    id: "PAY-INV-002-001",
                    amount: 3899.30,
                    method: "Credit Card",
                    date: "2024-06-16",
                    reference: "TXN-INV-002",
                    type: "partial_payment",
                    notes: "50% down payment"
                }
            ],
            totalPaid: 3899.30,
            remainingBalance: 3899.30,
            shippingInfo: {
                type: "Sea",
                company: "Sea Freight Co",
                actualCost: 150.00,
                customerCharge: 200.00,
                profit: 50.00,
                notes: "Standard sea freight"
            }
        },
        {
            id: "INV-003",
            date: "2024-06-16",
            dueDate: "2024-06-30",
            amount: 2449.65,
            status: "Pending",
            customer: "Gamma Industries",
            items: [
                { productId: 5, quantity: 35, unitPrice: 34.99 },
                { productId: 1, quantity: 25, unitPrice: 39.99 }
            ],
            paymentStatus: "Unpaid",
            paymentTerms: "net30",
            payments: [],
            totalPaid: 0.00,
            remainingBalance: 2449.65,
            shippingInfo: {
                type: "Air",
                company: "FedEx",
                actualCost: 95.00,
                customerCharge: 140.00,
                profit: 45.00,
                notes: "Priority air freight"
            }
        }
    ];
}

// Initialize test quotes
function initializeTestQuotes() {
    customerQuotes = [
        {
            id: "QUO-001",
            date: "2024-06-18",
            validUntil: "2024-07-02",
            customer: "F16 Electronics",
            status: "Active",
            products: [
                { id: 1, name: "Wireless Bluetooth Earbuds", sku: "WBE-001", quantity: 100, sellPrice: 39.99, total: 3999.00 },
                { id: 3, name: "Portable Power Bank 20000mAh", sku: "PPB-003", quantity: 50, sellPrice: 49.99, total: 2499.50 }
            ],
            subtotal: 6498.50,
            otherExpenses: 200.00,
            shippingFee: 150.00,
            commissionPercentage: 5.0,
            commissionAmount: 324.93,
            finalTotal: 7173.43,
            shipmentMethod: "air",
            notes: "Bulk order quote for F16 Electronics",
            convertedToInvoice: null
        },
        {
            id: "QUO-002",
            date: "2024-06-17",
            validUntil: "2024-07-01",
            customer: "Beta Trading Co.",
            status: "Active",
            products: [
                { id: 2, name: "Smart Fitness Watch", sku: "SFW-002", quantity: 30, sellPrice: 129.99, total: 3899.70 },
                { id: 4, name: "USB-C Hub 7-in-1", sku: "UCH-004", quantity: 20, sellPrice: 69.99, total: 1399.80 }
            ],
            subtotal: 5299.50,
            otherExpenses: 100.00,
            shippingFee: 80.00,
            commissionPercentage: 7.5,
            commissionAmount: 397.46,
            finalTotal: 5876.96,
            shipmentMethod: "sea",
            notes: "Standard quote for Beta Trading",
            convertedToInvoice: null
        }
    ];
}

// Initialize test shipments
function initializeTestShipments() {
    shipments = [
        {
            id: "SHIP-001",
            salesOrderId: "INV-001",
            customer: "F16 Electronics",
            status: "Delivered",
            trackingNumber: "DHL123456789",
            shippingCompany: "DHL",
            shippingType: "Air",
            createdDate: "2024-06-12",
            shippedDate: "2024-06-13",
            estimatedDelivery: "2024-06-15",
            actualDelivery: "2024-06-15",
            items: [
                { productId: 1, productName: "Wireless Bluetooth Earbuds", quantity: 50 },
                { productId: 2, productName: "Smart Fitness Watch", quantity: 25 }
            ],
            shippingCost: 85.00,
            customerCharge: 120.00,
            notes: "Express delivery completed successfully"
        },
        {
            id: "SHIP-002",
            salesOrderId: "INV-002",
            customer: "Beta Trading Co.",
            status: "In Transit",
            trackingNumber: "SEA987654321",
            shippingCompany: "Sea Freight Co",
            shippingType: "Sea",
            createdDate: "2024-06-14",
            shippedDate: "2024-06-16",
            estimatedDelivery: "2024-07-01",
            actualDelivery: null,
            items: [
                { productId: 3, productName: "Portable Power Bank 20000mAh", quantity: 80 },
                { productId: 4, productName: "USB-C Hub 7-in-1", quantity: 40 }
            ],
            shippingCost: 150.00,
            customerCharge: 200.00,
            notes: "Sea freight in transit"
        }
    ];
}

// Initialize test wallets and transactions
function initializeTestWallets() {
    customerWallets = [
        {
            customerId: "CUST001",
            customerName: "F16 Electronics",
            balance: 2500.00,
            status: "active",
            createdDate: "2024-06-01",
            lastTransactionDate: "2024-06-15"
        },
        {
            customerId: "CUST002",
            customerName: "Beta Trading Co.",
            balance: 1750.00,
            status: "active",
            createdDate: "2024-06-01",
            lastTransactionDate: "2024-06-16"
        },
        {
            customerId: "CUST003",
            customerName: "Gamma Industries",
            balance: 500.00,
            status: "active",
            createdDate: "2024-06-01",
            lastTransactionDate: "2024-06-10"
        }
    ];

    walletTransactions = [
        {
            id: 1,
            customerId: "CUST001",
            type: "credit",
            amount: 5199.75,
            description: "Payment for INV-001",
            date: "2024-06-15",
            balanceAfter: 5199.75
        },
        {
            id: 2,
            customerId: "CUST001",
            type: "debit",
            amount: 2699.75,
            description: "Partial refund processing",
            date: "2024-06-15",
            balanceAfter: 2500.00
        },
        {
            id: 3,
            customerId: "CUST002",
            type: "credit",
            amount: 3899.30,
            description: "Partial payment for INV-002",
            date: "2024-06-16",
            balanceAfter: 3899.30
        },
        {
            id: 4,
            customerId: "CUST002",
            type: "debit",
            amount: 2149.30,
            description: "Service fee deduction",
            date: "2024-06-16",
            balanceAfter: 1750.00
        },
        {
            id: 5,
            customerId: "CUST003",
            type: "credit",
            amount: 500.00,
            description: "Initial deposit",
            date: "2024-06-10",
            balanceAfter: 500.00
        }
    ];
}

// Initialize shipping data
function initializeShippingData() {
    shippingCompanies = [
        {
            id: 'dhl',
            name: 'DHL',
            services: ['express', 'standard'],
            defaultRates: {
                express: { cost: 50, customerCharge: 70 },
                standard: { cost: 30, customerCharge: 45 }
            }
        },
        {
            id: 'fedex',
            name: 'FedEx',
            services: ['express', 'standard', 'overnight'],
            defaultRates: {
                express: { cost: 45, customerCharge: 65 },
                standard: { cost: 25, customerCharge: 40 },
                overnight: { cost: 85, customerCharge: 120 }
            }
        },
        {
            id: 'sea_freight',
            name: 'Sea Freight Co',
            services: ['sea'],
            defaultRates: {
                sea: { cost: 200, customerCharge: 280 }
            }
        },
        {
            id: 'air_freight',
            name: 'Air Freight Co',
            services: ['air'],
            defaultRates: {
                air: { cost: 150, customerCharge: 220 }
            }
        }
    ];

    shippingTypes = [
        {
            id: 'air',
            name: 'Air',
            description: 'Fast international shipping via air',
            avgDeliveryDays: '3-7',
            compatibleCompanies: ['air_freight', 'fedex', 'dhl']
        },
        {
            id: 'sea',
            name: 'Sea',
            description: 'Cost-effective international shipping via sea',
            avgDeliveryDays: '15-45',
            compatibleCompanies: ['sea_freight']
        }
    ];

    shippingAnalytics = {
        totalShippingRevenue: 0,
        totalShippingCosts: 0,
        totalShippingProfit: 0,
        averageProfitMargin: 0,
        ordersByShippingType: {},
        ordersByShippingCompany: {},
        monthlyShippingData: []
    };
}

// ✅ THEME MANAGEMENT
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');

    if (body.classList.contains('dark')) {
        // Switch to light mode
        body.classList.remove('dark');
        themeIcon.textContent = '🌙';
        localStorage.setItem('sourcing_theme', 'light');
        console.log('🌞 Switched to light mode');
    } else {
        // Switch to dark mode
        body.classList.add('dark');
        themeIcon.textContent = '☀️';
        localStorage.setItem('sourcing_theme', 'dark');
        console.log('🌙 Switched to dark mode');
    }
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('sourcing_theme');
    const themeIcon = document.querySelector('.theme-icon');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        if (themeIcon) themeIcon.textContent = '☀️';
    } else {
        document.body.classList.remove('dark');
        if (themeIcon) themeIcon.textContent = '🌙';
    }

    console.log(`🎨 Theme initialized: ${savedTheme || 'light'}`);
}

// ✅ UTILITY FUNCTIONS FOR TESTING
// Reset all data and reinitialize with fresh test data
function resetToTestData() {
    if (confirm('🔄 This will clear all existing data and load fresh DEMO/TEST data with sample customers, products, and orders. Are you sure?')) {
        console.log("🔄 Loading demo data for testing...");

        // Clear localStorage but preserve theme
        const savedTheme = localStorage.getItem('sourcing_theme');
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('sourcing_')) {
                localStorage.removeItem(key);
            }
        });

        // Restore theme preference
        if (savedTheme) {
            localStorage.setItem('sourcing_theme', savedTheme);
        }

        // Clear empty system flag since we're loading demo data
        localStorage.removeItem('sourcing_empty_system_requested');

        // Initialize fresh test data
        initializeTestData();

        // Refresh the current page to show new data
        location.reload();
    }
}

// ✅ CLEAR ALL DATA FUNCTION - Fresh start with no data
function clearAllDataCompletely() {
    if (confirm('🗑️ This will permanently delete ALL data and start with a completely empty system. Are you sure?')) {
        const secondConfirm = confirm('⚠️ FINAL WARNING: This action cannot be undone. All products, orders, invoices, and customer data will be lost. Continue?');

        if (secondConfirm) {
            console.log("🗑️ Clearing all data completely...");

            // Clear all localStorage including theme preference (but preserve it)
            const savedTheme = localStorage.getItem('sourcing_theme');
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith('sourcing_')) {
                    localStorage.removeItem(key);
                }
            });

            // Restore theme preference
            if (savedTheme) {
                localStorage.setItem('sourcing_theme', savedTheme);
            }

            // Set flag to prevent automatic test data loading
            localStorage.setItem('sourcing_empty_system_requested', 'true');

            // Initialize completely empty arrays - NO TEST DATA
            initializeEmptySystem();

            // Save empty state to localStorage
            saveDataToStorage();

            console.log("✅ All data cleared successfully! System is now completely empty.");

            // Show success message
            alert('✅ All data has been cleared successfully! You now have a completely empty system ready for fresh data entry.');

            // Refresh the current page to show empty state
            location.reload();
        }
    }
}

// ✅ INITIALIZE COMPLETELY EMPTY SYSTEM
function initializeEmptySystem() {
    console.log("🔄 Initializing completely empty system...");

    // Clear all data arrays to empty state
    products = [];
    customerInvoices = [];
    supplierInvoices = [];
    supplierPayments = [];
    customerPayments = [];
    customerWallets = [];
    walletTransactions = [];
    customerAllocations = [];
    shipments = [];
    stockUpdates = [];
    customers = [];
    suppliers = [];
    customerContacts = [];
    supplierContacts = [];
    customerQuotes = [];

    // Initialize empty shipping data
    shippingAnalytics = {
        totalShippingRevenue: 0,
        totalShippingCost: 0,
        totalShippingProfit: 0,
        averageShippingMargin: 0,
        totalShipments: 0,
        shippingProfitByType: {},
        shippingRevenueByCompany: {},
        ordersByShippingCompany: {},
        monthlyShippingData: []
    };

    shippingCompanies = [];
    shippingTypes = [];

    console.log("✅ Empty system initialized - no demo data loaded");
}

// Export test data to console for debugging
function exportTestDataToConsole() {
    console.log("📊 Current Application Data:");
    console.log("Products:", products);
    console.log("Customers:", customers);
    console.log("Suppliers:", suppliers);
    console.log("Customer Invoices:", customerInvoices);
    console.log("Supplier Invoices (POs):", supplierInvoices);
    console.log("Customer Quotes:", customerQuotes);
    console.log("Shipments:", shipments);
    console.log("Customer Wallets:", customerWallets);
    console.log("Wallet Transactions:", walletTransactions);
}

// Show current data status in a user-friendly way
function showDataStatus() {
    const status = {
        products: products.length,
        customers: customers.length,
        suppliers: suppliers.length,
        customerInvoices: customerInvoices.length,
        supplierInvoices: supplierInvoices.length,
        customerQuotes: customerQuotes.length,
        shipments: shipments.length,
        customerWallets: customerWallets.length,
        walletTransactions: walletTransactions.length
    };

    const totalRecords = Object.values(status).reduce((sum, count) => sum + count, 0);

    let message = `📊 Current Data Status:\n\n`;
    message += `📦 Products: ${status.products}\n`;
    message += `👥 Customers: ${status.customers}\n`;
    message += `🏭 Suppliers: ${status.suppliers}\n`;
    message += `🧾 Customer Invoices: ${status.customerInvoices}\n`;
    message += `🛒 Purchase Orders: ${status.supplierInvoices}\n`;
    message += `📋 Customer Quotes: ${status.customerQuotes}\n`;
    message += `🚚 Shipments: ${status.shipments}\n`;
    message += `💰 Customer Wallets: ${status.customerWallets}\n`;
    message += `💳 Wallet Transactions: ${status.walletTransactions}\n`;
    message += `\n📈 Total Records: ${totalRecords}`;

    if (totalRecords === 0) {
        message += `\n\n💡 Your system is completely empty and ready for fresh data entry.`;
        message += `\n\n🔄 Use "Load Demo Data" to add sample data for testing.`;
        message += `\n✨ Or start adding your own customers, products, and orders!`;
    }

    alert(message);
    console.log("📊 Data Status:", status);
}

// Add test data management buttons to the page
function addTestDataControls() {
    const header = document.querySelector('.header');
    if (header && !document.getElementById('testDataControls')) {
        const controlsDiv = document.createElement('div');
        controlsDiv.id = 'testDataControls';
        controlsDiv.style.cssText = `
            margin-top: 15px;
            padding: 12px;
            background: var(--muted);
            border-radius: var(--radius);
            border-left: 4px solid var(--primary);
            box-shadow: var(--shadow-sm);
        `;

        controlsDiv.innerHTML = `
            <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
                <span style="font-weight: 600; color: var(--foreground); font-family: var(--font-sans);">🧪 Data Management:</span>
                <button onclick="showDataStatus()" class="btn btn-secondary btn-small">
                    📊 Data Status
                </button>
                <button onclick="resetToTestData()" class="btn btn-warning btn-small" title="Load sample data for testing">
                    🔄 Load Demo Data
                </button>
                <button onclick="clearAllDataCompletely()" class="btn btn-danger btn-small" title="Complete fresh start - no data">
                    🗑️ Empty System
                </button>
                <button onclick="exportTestDataToConsole()" class="btn btn-info btn-small">
                    📋 Export to Console
                </button>
                <button onclick="saveDataToStorage()" class="btn btn-success btn-small">
                    💾 Save Data
                </button>
                <span style="font-size: 11px; color: var(--muted-foreground); font-family: var(--font-sans);">
                    "Load Demo Data" = Sample data | "Empty System" = Completely clean start
                </span>
            </div>
        `;

        header.appendChild(controlsDiv);
    }
}

// Data Persistence Functions
function saveDataToStorage() {
    localStorage.setItem('sourcing_products', JSON.stringify(products));
    localStorage.setItem('sourcing_customerInvoices', JSON.stringify(customerInvoices));
    localStorage.setItem('sourcing_supplierInvoices', JSON.stringify(supplierInvoices));
    localStorage.setItem('sourcing_supplierPayments', JSON.stringify(supplierPayments));
    localStorage.setItem('sourcing_customerPayments', JSON.stringify(customerPayments));
    localStorage.setItem('sourcing_customerWallets', JSON.stringify(customerWallets));
    localStorage.setItem('sourcing_walletTransactions', JSON.stringify(walletTransactions));
    localStorage.setItem('sourcing_customerAllocations', JSON.stringify(customerAllocations));
    localStorage.setItem('sourcing_shipments', JSON.stringify(shipments));
    localStorage.setItem('sourcing_stockUpdates', JSON.stringify(stockUpdates));
    localStorage.setItem('sourcing_customers', JSON.stringify(customers));
    localStorage.setItem('sourcing_suppliers', JSON.stringify(suppliers));
    localStorage.setItem('sourcing_customerContacts', JSON.stringify(customerContacts));
    localStorage.setItem('sourcing_supplierContacts', JSON.stringify(supplierContacts));
    // ✅ SHIPPING MANAGEMENT DATA PERSISTENCE
    localStorage.setItem('sourcing_shippingAnalytics', JSON.stringify(shippingAnalytics));
    localStorage.setItem('sourcing_shippingCompanies', JSON.stringify(shippingCompanies));
    localStorage.setItem('sourcing_shippingTypes', JSON.stringify(shippingTypes));
    localStorage.setItem('sourcing_shipments', JSON.stringify(shipments));
}

function loadDataFromStorage() {
    const savedProducts = localStorage.getItem('sourcing_products');
    const savedCustomerInvoices = localStorage.getItem('sourcing_customerInvoices');
    const savedSupplierInvoices = localStorage.getItem('sourcing_supplierInvoices');
    const savedSupplierPayments = localStorage.getItem('sourcing_supplierPayments');
    const savedCustomerPayments = localStorage.getItem('sourcing_customerPayments');
    const savedCustomerWallets = localStorage.getItem('sourcing_customerWallets');
    const savedWalletTransactions = localStorage.getItem('sourcing_walletTransactions');
    const savedCustomerAllocations = localStorage.getItem('sourcing_customerAllocations');
    const savedShipments = localStorage.getItem('sourcing_shipments');
    const savedStockUpdates = localStorage.getItem('sourcing_stockUpdates');
    const savedCustomers = localStorage.getItem('sourcing_customers');
    const savedSuppliers = localStorage.getItem('sourcing_suppliers');
    const savedCustomerContacts = localStorage.getItem('sourcing_customerContacts');
    const savedSupplierContacts = localStorage.getItem('sourcing_supplierContacts');
    // ✅ SHIPPING MANAGEMENT DATA LOADING
    const savedShippingAnalytics = localStorage.getItem('sourcing_shippingAnalytics');
    const savedShippingCompanies = localStorage.getItem('sourcing_shippingCompanies');
    const savedShippingTypes = localStorage.getItem('sourcing_shippingTypes');

    if (savedProducts) {
        products = JSON.parse(savedProducts);
    }
    if (savedCustomerInvoices) {
        customerInvoices = JSON.parse(savedCustomerInvoices);
    }
    if (savedSupplierInvoices) {
        supplierInvoices = JSON.parse(savedSupplierInvoices);
    }
    if (savedSupplierPayments) {
        supplierPayments = JSON.parse(savedSupplierPayments);
    }
    if (savedCustomerPayments) {
        customerPayments = JSON.parse(savedCustomerPayments);
    }
    if (savedCustomerWallets) {
        customerWallets = JSON.parse(savedCustomerWallets);
    }
    if (savedWalletTransactions) {
        walletTransactions = JSON.parse(savedWalletTransactions);
    }
    if (savedCustomerAllocations) {
        customerAllocations = JSON.parse(savedCustomerAllocations);
    }
    if (savedShipments) {
        shipments = JSON.parse(savedShipments);
    }
    if (savedStockUpdates) {
        stockUpdates = JSON.parse(savedStockUpdates);
    }
    if (savedCustomers) {
        customers = JSON.parse(savedCustomers);
    }
    if (savedSuppliers) {
        suppliers = JSON.parse(savedSuppliers);
    }
    if (savedCustomerContacts) {
        customerContacts = JSON.parse(savedCustomerContacts);
    }
    if (savedSupplierContacts) {
        supplierContacts = JSON.parse(savedSupplierContacts);
    }
    // ✅ LOAD SHIPPING MANAGEMENT DATA
    if (savedShippingAnalytics) {
        shippingAnalytics = JSON.parse(savedShippingAnalytics);
    }
    if (savedShippingCompanies) {
        shippingCompanies = JSON.parse(savedShippingCompanies);
    }
    if (savedShippingTypes) {
        shippingTypes = JSON.parse(savedShippingTypes);
    }
}

// Global data storage - initialized empty, populated by initialization functions
let products = [];

// ✅ QUOTES DATA STRUCTURE
let customerQuotes = [];

let customerInvoices = [];

let supplierInvoices = [];
let supplierPayments = [];
let customerPayments = [];

// Inventory Management Data Storage
let customerAllocations = [];

let shipments = [];
let stockUpdates = [];

// E-Wallet Data Storage
let customerWallets = [];
let walletTransactions = [];

// Customer and Supplier Management Data Storage
let customers = [];

let suppliers = [];
let customerContacts = [];
let supplierContacts = [];

let editingProductId = null;
let selectedProducts = {}; // Store selected products for customer sales order creation
let selectedSupplierProducts = {}; // Store selected products for supplier PO creation

// ✅ ADVANCED SHIPPING MANAGEMENT DATA
let shippingCompanies = [];
let shippingTypes = [];
let shippingAnalytics = {};

// ===== MAIN ACCOUNTING SYSTEM WITH SHIPPING INTEGRATION =====

// Enhanced Chart of Accounts with Shipping Companies
const chartOfAccounts = {
    // Assets (1000-1999)
    1010: { name: "Bank Account - Operating", type: "asset", subtype: "current" },
    1020: { name: "Bank Account - Savings", type: "asset", subtype: "current" },
    1030: { name: "Petty Cash", type: "asset", subtype: "current" },
    1110: { name: "Accounts Receivable - Trade", type: "asset", subtype: "current" },
    1120: { name: "Allowance for Doubtful Accounts", type: "asset", subtype: "current" },
    1150: { name: "Shipping Deposits & Prepaid", type: "asset", subtype: "current" },
    1160: { name: "Shipping Receivables", type: "asset", subtype: "current" },
    1220: { name: "Finished Goods Inventory", type: "asset", subtype: "current" },
    1230: { name: "Inventory in Transit", type: "asset", subtype: "current" },
    1240: { name: "Inventory Adjustments", type: "asset", subtype: "current" },
    1310: { name: "Office Equipment", type: "asset", subtype: "fixed" },
    1320: { name: "Computer Equipment", type: "asset", subtype: "fixed" },
    1330: { name: "Accumulated Depreciation", type: "asset", subtype: "fixed" },

    // Liabilities (2000-2999)
    2010: { name: "Accounts Payable - Trade", type: "liability", subtype: "current" },
    2015: { name: "Accounts Payable - DHL Express", type: "liability", subtype: "current" },
    2016: { name: "Accounts Payable - FedEx", type: "liability", subtype: "current" },
    2017: { name: "Accounts Payable - UPS", type: "liability", subtype: "current" },
    2018: { name: "Accounts Payable - China Post", type: "liability", subtype: "current" },
    2019: { name: "Accounts Payable - SF Express", type: "liability", subtype: "current" },
    2020: { name: "Accounts Payable - Aramex", type: "liability", subtype: "current" },
    2021: { name: "Accounts Payable - EMS", type: "liability", subtype: "current" },
    2022: { name: "Accounts Payable - Sea Freight", type: "liability", subtype: "current" },
    2023: { name: "Accounts Payable - Air Freight", type: "liability", subtype: "current" },
    2025: { name: "Accrued Shipping Expenses", type: "liability", subtype: "current" },
    2030: { name: "Accrued Payroll", type: "liability", subtype: "current" },
    2100: { name: "Short-term Loans", type: "liability", subtype: "current" },
    2210: { name: "Sales Tax Payable", type: "liability", subtype: "current" },
    2220: { name: "Income Tax Payable", type: "liability", subtype: "current" },

    // Equity (3000-3999)
    3000: { name: "Owner's Equity", type: "equity" },
    3100: { name: "Retained Earnings", type: "equity" },
    3200: { name: "Current Year Earnings", type: "equity" },

    // Revenue (4000-4999)
    4010: { name: "Product Sales Revenue", type: "revenue" },
    4020: { name: "Commission Revenue", type: "revenue" },
    4030: { name: "Shipping Revenue - Air", type: "revenue" },
    4031: { name: "Shipping Revenue - Sea", type: "revenue" },
    4032: { name: "Shipping Revenue - Express", type: "revenue" },
    4033: { name: "Shipping Revenue - Standard", type: "revenue" },
    4100: { name: "Other Revenue", type: "revenue" },
    4900: { name: "Sales Returns and Allowances", type: "revenue" },

    // Cost of Goods Sold (5000-5999)
    5010: { name: "Cost of Goods Sold", type: "expense", subtype: "cogs" },
    5020: { name: "Freight In", type: "expense", subtype: "cogs" },
    5030: { name: "Inventory Adjustments", type: "expense", subtype: "cogs" },
    5040: { name: "Purchase Discounts", type: "expense", subtype: "cogs" },

    // Operating Expenses (6000-6999)
    6000: { name: "Commission Expenses", type: "expense", subtype: "operating" },
    6010: { name: "Shipping Expenses - DHL", type: "expense", subtype: "operating" },
    6011: { name: "Shipping Expenses - FedEx", type: "expense", subtype: "operating" },
    6012: { name: "Shipping Expenses - UPS", type: "expense", subtype: "operating" },
    6013: { name: "Shipping Expenses - China Post", type: "expense", subtype: "operating" },
    6014: { name: "Shipping Expenses - SF Express", type: "expense", subtype: "operating" },
    6015: { name: "Shipping Expenses - Aramex", type: "expense", subtype: "operating" },
    6016: { name: "Shipping Expenses - EMS", type: "expense", subtype: "operating" },
    6017: { name: "Shipping Expenses - Sea Freight", type: "expense", subtype: "operating" },
    6018: { name: "Shipping Expenses - Air Freight", type: "expense", subtype: "operating" },
    6020: { name: "Fuel Surcharges", type: "expense", subtype: "operating" },
    6021: { name: "Customs and Duties", type: "expense", subtype: "operating" },
    6022: { name: "Shipping Insurance", type: "expense", subtype: "operating" },
    6023: { name: "Packaging Materials", type: "expense", subtype: "operating" },
    6024: { name: "Warehouse Handling Fees", type: "expense", subtype: "operating" },
    6200: { name: "Office Expenses", type: "expense", subtype: "administrative" },
    6210: { name: "Professional Fees", type: "expense", subtype: "administrative" },
    6220: { name: "Insurance", type: "expense", subtype: "administrative" },
    6230: { name: "Depreciation Expense", type: "expense", subtype: "administrative" },
    6240: { name: "Bank Fees", type: "expense", subtype: "administrative" },

    // Other Income/Expenses (7000-7999)
    7000: { name: "Interest Income", type: "other_income" },
    7100: { name: "Interest Expense", type: "other_expense" },
    7200: { name: "Foreign Exchange Gain/Loss", type: "other_income" }
};

// Main Accounting System Data Storage
let generalLedger = [];
let journalEntries = [];
let accountBalances = {};
let revenueRecognitions = [];
let shippingCompanyPayments = [];

// Initialize Shipping Companies with Accounting Integration
function initializeShippingCompaniesAccounting() {
    if (shippingCompanies.length === 0) {
        shippingCompanies = [
            {
                id: 'DHL001',
                name: 'DHL Express',
                code: 'DHL',
                type: 'international_express',
                accountingMapping: {
                    accountsPayableAccount: '2015', // Accounts Payable - DHL Express
                    expenseAccount: '6010', // Shipping Expenses - DHL
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
                    discountTerms: '2/10 net 30'
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
                },
                status: 'active'
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
                contactInfo: {
                    email: 'billing@fedex.com',
                    phone: '+1-800-GO-FEDEX',
                    website: 'www.fedex.com',
                    address: 'FedEx Corporation, 942 South Shady Grove Road, Memphis, TN 38120'
                },
                paymentTerms: {
                    terms: 'net30',
                    creditLimit: 45000,
                    currency: 'USD',
                    discountTerms: '2/10 net 30'
                },
                services: [
                    {
                        serviceCode: 'INTERNATIONAL_PRIORITY',
                        serviceName: 'FedEx International Priority',
                        baseRate: 30.00,
                        weightRate: 9.00,
                        fuelSurcharge: 0.16,
                        transitDays: '1-3'
                    }
                ],
                performance: {
                    totalShipments: 0,
                    totalCost: 0,
                    averageCost: 0,
                    onTimeRate: 0,
                    lastShipmentDate: null
                },
                status: 'active'
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
                contactInfo: {
                    email: 'billing@ups.com',
                    phone: '+1-800-PICK-UPS',
                    website: 'www.ups.com',
                    address: 'UPS, 55 Glenlake Parkway, NE, Atlanta, GA 30328'
                },
                paymentTerms: {
                    terms: 'net30',
                    creditLimit: 40000,
                    currency: 'USD',
                    discountTerms: '2/10 net 30'
                },
                services: [
                    {
                        serviceCode: 'WORLDWIDE_EXPRESS',
                        serviceName: 'UPS Worldwide Express',
                        baseRate: 28.00,
                        weightRate: 8.75,
                        fuelSurcharge: 0.14,
                        transitDays: '1-3'
                    }
                ],
                performance: {
                    totalShipments: 0,
                    totalCost: 0,
                    averageCost: 0,
                    onTimeRate: 0,
                    lastShipmentDate: null
                },
                status: 'active'
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
                contactInfo: {
                    email: 'service@chinapost.com.cn',
                    phone: '+86-10-11185',
                    website: 'www.chinapost.com.cn',
                    address: 'China Post Group Corporation, Beijing, China'
                },
                paymentTerms: {
                    terms: 'net15',
                    creditLimit: 20000,
                    currency: 'CNY',
                    discountTerms: 'net 15'
                },
                services: [
                    {
                        serviceCode: 'EMS_INTERNATIONAL',
                        serviceName: 'China Post EMS International',
                        baseRate: 15.00,
                        weightRate: 5.50,
                        fuelSurcharge: 0.10,
                        transitDays: '5-10'
                    }
                ],
                performance: {
                    totalShipments: 0,
                    totalCost: 0,
                    averageCost: 0,
                    onTimeRate: 0,
                    lastShipmentDate: null
                },
                status: 'active'
            }
        ];

        console.log('✅ Shipping companies with accounting integration initialized');
        saveDataToStorage();
    }
}

// ===== MAIN ACCOUNTING SYSTEM FUNCTIONS =====

// Journal Entry Class
class JournalEntry {
    constructor(date, description, reference) {
        this.id = generateJournalEntryId();
        this.date = date;
        this.description = description;
        this.reference = reference;
        this.debits = [];
        this.credits = [];
        this.totalDebits = 0;
        this.totalCredits = 0;
        this.balanced = false;
        this.createdDate = new Date().toISOString();
    }

    addDebit(accountCode, amount, description = '') {
        this.debits.push({
            accountCode,
            accountName: chartOfAccounts[accountCode]?.name || 'Unknown Account',
            amount: parseFloat(amount),
            description
        });
        this.totalDebits += parseFloat(amount);
        this.checkBalance();
    }

    addCredit(accountCode, amount, description = '') {
        this.credits.push({
            accountCode,
            accountName: chartOfAccounts[accountCode]?.name || 'Unknown Account',
            amount: parseFloat(amount),
            description
        });
        this.totalCredits += parseFloat(amount);
        this.checkBalance();
    }

    checkBalance() {
        this.balanced = Math.abs(this.totalDebits - this.totalCredits) < 0.01;
    }
}

// Generate Journal Entry ID
function generateJournalEntryId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `JE-${timestamp}-${random}`;
}

// Post Journal Entry to General Ledger
function postJournalEntry(journalEntry) {
    if (!journalEntry.balanced) {
        throw new Error(`Journal entry is not balanced. Debits: ${journalEntry.totalDebits}, Credits: ${journalEntry.totalCredits}`);
    }

    // Save to general ledger
    generalLedger.push(journalEntry);
    journalEntries.push(journalEntry);

    // Update account balances
    updateAccountBalances(journalEntry);

    // Save to storage
    saveAccountingDataToStorage();

    console.log(`✅ Journal Entry ${journalEntry.id} posted successfully`);
    return journalEntry;
}

// Update Account Balances
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
        if (!accountBalances[credit.accountCode]) {
            accountBalances[credit.accountCode] = {
                accountCode: credit.accountCode,
                accountName: credit.accountName,
                debitBalance: 0,
                creditBalance: 0,
                netBalance: 0
            };
        }
        accountBalances[credit.accountCode].creditBalance += credit.amount;
        calculateNetBalance(credit.accountCode);
    });
}

// Calculate Net Balance for Account
function calculateNetBalance(accountCode) {
    const account = accountBalances[accountCode];
    const accountInfo = chartOfAccounts[accountCode];

    if (accountInfo) {
        // Assets and Expenses: Debit increases balance
        if (accountInfo.type === 'asset' || accountInfo.type === 'expense') {
            account.netBalance = account.debitBalance - account.creditBalance;
        }
        // Liabilities, Equity, Revenue: Credit increases balance
        else if (accountInfo.type === 'liability' || accountInfo.type === 'equity' || accountInfo.type === 'revenue') {
            account.netBalance = account.creditBalance - account.debitBalance;
        }
    }
}

// Get Account Balance
function getAccountBalance(accountCode, startDate = null, endDate = null) {
    if (!accountBalances[accountCode]) {
        return 0;
    }

    // If date range specified, calculate balance for that period
    if (startDate && endDate) {
        let balance = 0;
        const relevantEntries = journalEntries.filter(entry => {
            const entryDate = new Date(entry.date);
            return entryDate >= new Date(startDate) && entryDate <= new Date(endDate);
        });

        relevantEntries.forEach(entry => {
            entry.debits.forEach(debit => {
                if (debit.accountCode === accountCode) {
                    balance += debit.amount;
                }
            });
            entry.credits.forEach(credit => {
                if (credit.accountCode === accountCode) {
                    balance -= credit.amount;
                }
            });
        });

        return balance;
    }

    return accountBalances[accountCode].netBalance || 0;
}

// Save Accounting Data to Storage
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

// Load Accounting Data from Storage
function loadAccountingDataFromStorage() {
    try {
        generalLedger = JSON.parse(localStorage.getItem('sourcing_generalLedger') || '[]');
        journalEntries = JSON.parse(localStorage.getItem('sourcing_journalEntries') || '[]');
        accountBalances = JSON.parse(localStorage.getItem('sourcing_accountBalances') || '{}');
        revenueRecognitions = JSON.parse(localStorage.getItem('sourcing_revenueRecognitions') || '[]');
        shippingCompanyPayments = JSON.parse(localStorage.getItem('sourcing_shippingCompanyPayments') || '[]');

        // Load shipping companies if not already loaded
        const storedShippingCompanies = JSON.parse(localStorage.getItem('sourcing_shippingCompanies') || '[]');
        if (storedShippingCompanies.length > 0) {
            shippingCompanies = storedShippingCompanies;
        }

        console.log('✅ Accounting data loaded from storage');
    } catch (error) {
        console.error('Error loading accounting data:', error);
    }
}

// ===== SHIPPING ACCOUNTING INTEGRATION FUNCTIONS =====

// Get Shipping Company by ID or Code
function getShippingCompany(identifier) {
    return shippingCompanies.find(company =>
        company.id === identifier ||
        company.code === identifier ||
        company.name === identifier
    );
}

// Get Shipping Revenue Account based on shipment type
function getShippingRevenueAccount(shipmentType) {
    const shippingRevenueMapping = {
        'air': '4030', // Shipping Revenue - Air
        'sea': '4031', // Shipping Revenue - Sea
        'express': '4032', // Shipping Revenue - Express
        'standard': '4033', // Shipping Revenue - Standard
        'local': '4033', // Default to Standard
        'pickup': '4033' // Default to Standard
    };

    return shippingRevenueMapping[shipmentType?.toLowerCase()] || '4030';
}

// Enhanced Sales Order Journal Entry with Shipping Accounting
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
            `Shipping revenue - ${invoice.shipmentType || 'standard'}`);
    }

    // COGS Entry
    const cogsAmount = calculateCOGS(invoice.products);
    if (cogsAmount > 0) {
        je.addDebit('5010', cogsAmount, 'Cost of goods sold');
        je.addCredit('1220', cogsAmount, 'Inventory reduction');
    }

    return postJournalEntry(je);
}

// Record Shipment Transaction with Accounting
function recordShipmentTransaction(shipment) {
    if (!shipment.actualShippingCost || shipment.actualShippingCost <= 0) {
        console.log('No shipping cost to record for shipment:', shipment.id);
        return null;
    }

    const shippingCompany = getShippingCompany(shipment.carrierId);
    if (!shippingCompany) {
        console.error('Shipping company not found for carrier:', shipment.carrierId);
        return null;
    }

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

    const journalEntry = postJournalEntry(je);

    // Update shipping company performance
    updateShippingCompanyPerformance(shippingCompany.id, shipment);

    return journalEntry;
}

// Record Payment to Shipping Company
function recordShippingCompanyPayment(paymentData) {
    const {
        shippingCompanyId,
        amount,
        paymentDate,
        paymentMethod,
        referenceNumber,
        invoiceNumbers = [],
        description = ''
    } = paymentData;

    const shippingCompany = getShippingCompany(shippingCompanyId);
    if (!shippingCompany) {
        throw new Error('Shipping company not found');
    }

    const je = new JournalEntry(
        paymentDate,
        `Payment to ${shippingCompany.name} - ${referenceNumber}`,
        referenceNumber
    );

    // Dr. Accounts Payable (reduce what we owe)
    je.addDebit(
        shippingCompany.accountingMapping.accountsPayableAccount,
        amount,
        `Payment to ${shippingCompany.name} ${description ? '- ' + description : ''}`
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
        shippingCompanyName: shippingCompany.name,
        amount,
        paymentDate,
        paymentMethod,
        referenceNumber,
        invoiceNumbers,
        description,
        journalEntryId: journalEntry.id,
        status: 'completed',
        createdDate: new Date().toISOString()
    };

    shippingCompanyPayments.push(payment);
    saveAccountingDataToStorage();

    console.log(`✅ Payment recorded: ${amount} to ${shippingCompany.name}`);
    return payment;
}

// Update Shipping Company Performance
function updateShippingCompanyPerformance(companyId, shipment) {
    const company = getShippingCompany(companyId);
    if (!company) return;

    company.performance.totalShipments += 1;
    company.performance.totalCost += shipment.actualShippingCost;
    company.performance.averageCost = company.performance.totalCost / company.performance.totalShipments;
    company.performance.lastShipmentDate = shipment.shipDate;

    // Calculate on-time rate (simplified - you can enhance this)
    if (shipment.status === 'delivered' && shipment.deliveredDate) {
        const expectedDate = new Date(shipment.estimatedDeliveryDate);
        const actualDate = new Date(shipment.deliveredDate);
        const onTime = actualDate <= expectedDate;

        // Update on-time rate calculation
        const totalDelivered = company.performance.totalDeliveredShipments || 0;
        const onTimeDelivered = company.performance.onTimeDelivered || 0;

        company.performance.totalDeliveredShipments = totalDelivered + 1;
        company.performance.onTimeDelivered = onTimeDelivered + (onTime ? 1 : 0);
        company.performance.onTimeRate = (company.performance.onTimeDelivered / company.performance.totalDeliveredShipments) * 100;
    }

    saveAccountingDataToStorage();
}

// Generate Payment ID
function generatePaymentId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `PAY-${timestamp}-${random}`;
}

// ===== ACCOUNTING REPORTING FUNCTIONS =====

// Generate Shipping Profit & Loss Report
function generateShippingPLReport(startDate, endDate) {
    const shippingRevenue = {
        airShipping: getAccountBalance('4030', startDate, endDate),
        seaShipping: getAccountBalance('4031', startDate, endDate),
        expressShipping: getAccountBalance('4032', startDate, endDate),
        standardShipping: getAccountBalance('4033', startDate, endDate)
    };

    const shippingExpenses = {
        dhlExpenses: getAccountBalance('6010', startDate, endDate),
        fedexExpenses: getAccountBalance('6011', startDate, endDate),
        upsExpenses: getAccountBalance('6012', startDate, endDate),
        chinaPostExpenses: getAccountBalance('6013', startDate, endDate),
        sfExpressExpenses: getAccountBalance('6014', startDate, endDate),
        aramexExpenses: getAccountBalance('6015', startDate, endDate),
        emsExpenses: getAccountBalance('6016', startDate, endDate),
        seaFreightExpenses: getAccountBalance('6017', startDate, endDate),
        airFreightExpenses: getAccountBalance('6018', startDate, endDate),
        fuelSurcharges: getAccountBalance('6020', startDate, endDate),
        customsDuties: getAccountBalance('6021', startDate, endDate),
        shippingInsurance: getAccountBalance('6022', startDate, endDate)
    };

    const totalRevenue = Object.values(shippingRevenue).reduce((sum, val) => sum + val, 0);
    const totalExpenses = Object.values(shippingExpenses).reduce((sum, val) => sum + val, 0);
    const netShippingProfit = totalRevenue - totalExpenses;
    const profitMargin = totalRevenue > 0 ? (netShippingProfit / totalRevenue) * 100 : 0;

    return {
        revenue: shippingRevenue,
        totalRevenue,
        expenses: shippingExpenses,
        totalExpenses,
        netShippingProfit,
        profitMargin,
        period: { startDate, endDate }
    };
}

// Generate Carrier Performance Report
function generateCarrierPerformanceReport(startDate, endDate) {
    return shippingCompanies.map(carrier => {
        const totalCost = getAccountBalance(carrier.accountingMapping.expenseAccount, startDate, endDate);
        const totalPayable = getAccountBalance(carrier.accountingMapping.accountsPayableAccount);

        return {
            carrierId: carrier.id,
            carrierName: carrier.name,
            totalCost,
            totalPayable,
            totalShipments: carrier.performance.totalShipments,
            averageCost: carrier.performance.averageCost,
            onTimeRate: carrier.performance.onTimeRate,
            lastShipmentDate: carrier.performance.lastShipmentDate,
            paymentTerms: carrier.paymentTerms.terms,
            creditLimit: carrier.paymentTerms.creditLimit
        };
    }).sort((a, b) => b.totalCost - a.totalCost);
}

// ===== TEST FUNCTIONS FOR INTEGRATED ACCOUNTING =====

// Test Shipping Accounting Integration
function testShippingAccountingIntegration() {
    console.log('🧪 Testing Integrated Shipping Accounting System...');
    console.log('='.repeat(60));

    // 1. Test Chart of Accounts
    console.log('1. CHART OF ACCOUNTS TEST:');
    console.log('Available shipping expense accounts:');
    Object.entries(chartOfAccounts).forEach(([code, account]) => {
        if (account.name.includes('Shipping Expenses')) {
            console.log(`  ${code}: ${account.name}`);
        }
    });

    // 2. Test Shipping Companies
    console.log('\n2. SHIPPING COMPANIES TEST:');
    console.log(`Total shipping companies: ${shippingCompanies.length}`);
    shippingCompanies.forEach(company => {
        console.log(`  ${company.name} (${company.code})`);
        console.log(`    AP Account: ${company.accountingMapping.accountsPayableAccount}`);
        console.log(`    Expense Account: ${company.accountingMapping.expenseAccount}`);
    });

    // 3. Test Journal Entry Creation
    console.log('\n3. JOURNAL ENTRY TEST:');
    try {
        const testShipment = {
            id: 'SHIP-TEST-001',
            carrierId: 'DHL001',
            actualShippingCost: 150.00,
            shipDate: new Date().toISOString().split('T')[0],
            status: 'shipped'
        };

        const journalEntry = recordShipmentTransaction(testShipment);
        console.log(`✅ Test journal entry created: ${journalEntry.id}`);
        console.log(`   Debits: $${journalEntry.totalDebits}`);
        console.log(`   Credits: $${journalEntry.totalCredits}`);
        console.log(`   Balanced: ${journalEntry.balanced}`);
    } catch (error) {
        console.error('❌ Journal entry test failed:', error);
    }

    // 4. Test Account Balances
    console.log('\n4. ACCOUNT BALANCES TEST:');
    const dhlExpenseBalance = getAccountBalance('6010');
    const dhlPayableBalance = getAccountBalance('2015');
    console.log(`DHL Expenses (6010): $${dhlExpenseBalance}`);
    console.log(`DHL Payable (2015): $${dhlPayableBalance}`);

    console.log('\n✅ Integrated Shipping Accounting Test Complete!');
    console.log('='.repeat(60));
}

// Test Payment Recording
function testShippingPayment() {
    console.log('🧪 Testing Shipping Payment Recording...');

    try {
        const paymentData = {
            shippingCompanyId: 'DHL001',
            amount: 150.00,
            paymentDate: new Date().toISOString().split('T')[0],
            paymentMethod: 'Bank Transfer',
            referenceNumber: 'PAY-TEST-001',
            description: 'Test payment for DHL shipments'
        };

        const payment = recordShippingCompanyPayment(paymentData);
        console.log(`✅ Payment recorded: ${payment.id}`);
        console.log(`   Amount: $${payment.amount}`);
        console.log(`   Company: ${payment.shippingCompanyName}`);
        console.log(`   Journal Entry: ${payment.journalEntryId}`);

        return payment;
    } catch (error) {
        console.error('❌ Payment test failed:', error);
        return null;
    }
}

// ✅ SHIPMENT MANAGEMENT DATA
// shipments array is already declared above
let shipmentStatuses = [
    { id: 'preparing', name: 'Preparing', icon: '📦', color: '#f59e0b' },
    { id: 'shipped', name: 'Shipped', icon: '🚚', color: '#3b82f6' },
    { id: 'in_transit', name: 'In Transit', icon: '🛫', color: '#8b5cf6' },
    { id: 'out_for_delivery', name: 'Out for Delivery', icon: '🚛', color: '#06b6d4' },
    { id: 'delivered', name: 'Delivered', icon: '✅', color: '#10b981' },
    { id: 'exception', name: 'Exception', icon: '⚠️', color: '#ef4444' },
    { id: 'returned', name: 'Returned', icon: '↩️', color: '#6b7280' }
];

// Debug function to check shipment display pipeline
function debugShipmentDisplay() {
    console.log('🐛 DEBUG: Shipment Display Pipeline');
    console.log('='.repeat(50));

    // 1. Check shipments data
    console.log('1. SHIPMENTS DATA:');
    console.log('shipments array length:', shipments.length);
    console.log('shipments data:', shipments);

    // 2. Check DOM elements
    console.log('\n2. DOM ELEMENTS:');
    const shipmentsGrid = document.getElementById('shipmentsGrid');
    const shipmentsTableBody = document.getElementById('shipmentsTableBody');
    const gridView = document.getElementById('gridView');
    const tableView = document.getElementById('tableView');

    console.log('shipmentsGrid element:', shipmentsGrid);
    console.log('shipmentsTableBody element:', shipmentsTableBody);
    console.log('gridView element:', gridView);
    console.log('tableView element:', tableView);

    if (shipmentsGrid) {
        console.log('shipmentsGrid innerHTML length:', shipmentsGrid.innerHTML.length);
        console.log('shipmentsGrid children count:', shipmentsGrid.children.length);
    }

    if (shipmentsTableBody) {
        console.log('shipmentsTableBody innerHTML length:', shipmentsTableBody.innerHTML.length);
        console.log('shipmentsTableBody children count:', shipmentsTableBody.children.length);
    }

    // 3. Check current page
    console.log('\n3. PAGE INFO:');
    console.log('Current page:', window.location.pathname);
    console.log('Page title:', document.title);

    // 4. Test filter function (only on shipments page)
    console.log('\n4. TESTING FILTER FUNCTION:');
    if (document.getElementById('statusFilter')) {
        // We're on the shipments page
        try {
            filterShipments();
            console.log('✅ filterShipments() executed without error');
        } catch (error) {
            console.error('❌ filterShipments() error:', error);
        }
    } else {
        console.log('ℹ️ Skipping filterShipments() test - not on shipments page');
    }

    // 5. Test display functions directly
    console.log('\n5. TESTING DISPLAY FUNCTIONS:');
    if (shipmentsGrid) {
        try {
            displayShipmentsGrid(shipments, shipmentsGrid);
            console.log('✅ displayShipmentsGrid() executed without error');
            console.log('Grid children after display:', shipmentsGrid.children.length);
        } catch (error) {
            console.error('❌ displayShipmentsGrid() error:', error);
        }
    }

    if (shipmentsTableBody) {
        try {
            displayShipmentsTable(shipments, shipmentsTableBody);
            console.log('✅ displayShipmentsTable() executed without error');
            console.log('Table rows after display:', shipmentsTableBody.children.length);
        } catch (error) {
            console.error('❌ displayShipmentsTable() error:', error);
        }
    }

    console.log('='.repeat(50));
}

// Debug function to check shipment creation state
function debugShipmentCreation() {
    console.log('🐛 DEBUG: Shipment Creation State');
    console.log('selectedSalesOrder:', selectedSalesOrder);
    console.log('customerInvoices:', customerInvoices);
    console.log('shipments:', shipments);

    if (selectedSalesOrder) {
        console.log('✅ Sales order is selected');
        console.log('Order details:', {
            id: selectedSalesOrder.id,
            customer: selectedSalesOrder.customer,
            amount: selectedSalesOrder.amount,
            status: selectedSalesOrder.status
        });
    } else {
        console.log('❌ No sales order selected');
    }

    // Check if modal elements exist
    const modal = document.getElementById('standaloneShipmentModal');
    const step1 = document.getElementById('salesOrderSelectionStep');
    const step2 = document.getElementById('shipmentDetailsStep');

    console.log('Modal elements:', {
        modal: !!modal,
        step1: !!step1,
        step2: !!step2
    });
}

// Debug function to manually load shipments
function debugLoadShipments() {
    console.log('🐛 DEBUG: Manual shipments load triggered');
    console.log('Total shipments in array:', shipments.length);
    console.log('Shipments data:', shipments);

    // Check if we're on the shipments page
    const shipmentsGrid = document.getElementById('shipmentsGrid');
    const shipmentsTableBody = document.getElementById('shipmentsTableBody');

    console.log('Shipments grid element:', shipmentsGrid);
    console.log('Shipments table body element:', shipmentsTableBody);

    if (shipmentsGrid || shipmentsTableBody) {
        console.log('On shipments page - calling loadShipments()');
        loadShipments();
    } else {
        console.log('Not on shipments page');
    }
}

// Debug function to check customer invoices state
function debugCustomerInvoices() {
    console.log('🐛 DEBUG: Customer Invoices State Check');
    console.log('='.repeat(50));

    // 1. Check data
    console.log('1. DATA CHECK:');
    console.log('customerInvoices array:', customerInvoices);
    console.log('customerInvoices length:', customerInvoices.length);
    console.log('localStorage data:', localStorage.getItem('sourcing_customerInvoices'));

    // 2. Check DOM elements
    console.log('\n2. DOM ELEMENTS:');
    const tbody = document.getElementById('customerInvoicesTableBody');
    const table = document.getElementById('customerInvoicesTable');
    const section = document.querySelector('[data-step="4"]');

    console.log('customerInvoicesTableBody:', tbody);
    console.log('customerInvoicesTable:', table);
    console.log('Customer Sales Orders section:', section);

    if (tbody) {
        console.log('tbody innerHTML length:', tbody.innerHTML.length);
        console.log('tbody children count:', tbody.children.length);
        console.log('tbody content preview:', tbody.innerHTML.substring(0, 200));
    }

    // 3. Test function call
    console.log('\n3. FUNCTION TEST:');
    try {
        loadCustomerInvoices();
        console.log('✅ loadCustomerInvoices() executed successfully');
    } catch (error) {
        console.error('❌ loadCustomerInvoices() error:', error);
    }

    console.log('='.repeat(50));
}

// ===== ENHANCED ARABIC PDF SUPPORT FUNCTIONS =====

// Arabic font data (base64 encoded Amiri font - simplified version)
const ARABIC_FONT_BASE64 = null; // Will be loaded dynamically if needed

// Configure PDF for Arabic text support with enhanced capabilities
function configurePDFForArabic(doc) {
    try {
        console.log('🔧 Configuring PDF for Arabic text support...');

        // Try to load Arabic font if available
        if (ARABIC_FONT_BASE64) {
            doc.addFont(ARABIC_FONT_BASE64, 'ArabicFont', 'normal');
            doc.setFont('ArabicFont', 'normal');
            console.log('✅ Arabic font loaded successfully');
        } else {
            // Use the best available font for Arabic
            doc.setFont('helvetica', 'normal');
            console.log('⚠️ Using Helvetica as fallback for Arabic text');
        }

        // Set document properties for better Arabic support
        doc.setLanguage('ar');

        console.log('✅ PDF configured for Arabic text support');
        return true;
    } catch (error) {
        console.warn('⚠️ Arabic font configuration failed, using fallback:', error);
        doc.setFont('helvetica', 'normal');
        return false;
    }
}

// Enhanced Arabic character detection
function containsArabic(text) {
    if (!text) return false;

    // Comprehensive Arabic Unicode ranges
    const arabicRanges = [
        /[\u0600-\u06FF]/,  // Arabic
        /[\u0750-\u077F]/,  // Arabic Supplement
        /[\u08A0-\u08FF]/,  // Arabic Extended-A
        /[\uFB50-\uFDFF]/,  // Arabic Presentation Forms-A
        /[\uFE70-\uFEFF]/,  // Arabic Presentation Forms-B
        /[\u1EE00-\u1EEFF]/ // Arabic Mathematical Alphabetic Symbols
    ];

    return arabicRanges.some(regex => regex.test(text));
}

// Advanced Arabic text processing with bidirectional support
function processArabicText(text) {
    if (!text) return '';

    try {
        // If text contains Arabic, process it for proper display
        if (containsArabic(text)) {
            console.log(`🔤 Processing Arabic text: "${text}"`);

            // Use bidi-js library if available for proper bidirectional text handling
            if (typeof bidi !== 'undefined') {
                // Apply bidirectional algorithm
                const processedText = bidi(text, { dir: 'auto' });
                console.log(`✅ Processed with bidi: "${processedText}"`);
                return processedText;
            } else {
                console.warn('⚠️ bidi-js not available, using basic processing');
                // Basic Arabic text processing
                return reverseArabicText(text);
            }
        }

        return text;
    } catch (error) {
        console.error('❌ Error processing Arabic text:', error);
        return text; // Return original text as fallback
    }
}

// Basic Arabic text reversal for RTL display
function reverseArabicText(text) {
    if (!containsArabic(text)) return text;

    try {
        // Split text into words and handle mixed content
        const words = text.split(' ');
        const processedWords = words.map(word => {
            if (containsArabic(word)) {
                // Reverse Arabic words for RTL display
                return word.split('').reverse().join('');
            }
            return word;
        });

        // For mixed content, maintain word order but reverse Arabic words
        return processedWords.join(' ');
    } catch (error) {
        console.error('❌ Error in basic Arabic processing:', error);
        return text;
    }
}

// Enhanced text rendering function with comprehensive Arabic support
function renderTextWithArabicSupport(doc, text, x, y, options = {}) {
    if (!text) return;

    try {
        console.log(`📝 Rendering text: "${text}" at (${x}, ${y})`);

        const processedText = processArabicText(text);
        const isArabic = containsArabic(text);

        if (isArabic) {
            console.log(`🔤 Arabic text detected, processed: "${processedText}"`);

            // For Arabic text, adjust positioning and alignment
            const textWidth = doc.getTextWidth(processedText);
            let adjustedX = x;

            // Handle right-to-left alignment
            if (options.rightAlign || options.align === 'right') {
                adjustedX = x - textWidth;
            } else if (options.align === 'center') {
                adjustedX = x - (textWidth / 2);
            }

            // Render with adjusted positioning
            doc.text(processedText, adjustedX, y, { ...options, align: 'left' });
            console.log(`✅ Arabic text rendered at adjusted position (${adjustedX}, ${y})`);
        } else {
            // Regular text rendering
            doc.text(processedText, x, y, options);
            console.log(`✅ Regular text rendered`);
        }
    } catch (error) {
        console.error('❌ Text rendering error:', error);
        // Fallback to basic text rendering
        try {
            doc.text(text, x, y, options);
            console.log('⚠️ Used fallback text rendering');
        } catch (fallbackError) {
            console.error('❌ Fallback rendering also failed:', fallbackError);
        }
    }
}

// Load Arabic font (this would be called once when the page loads)
function loadArabicFont() {
    // This is a placeholder for loading custom Arabic fonts
    // In a real implementation, you would:
    // 1. Load an Arabic font file (like Amiri, Noto Sans Arabic, etc.)
    // 2. Convert it to base64 or load it as a web font
    // 3. Add it to jsPDF using doc.addFont()

    console.log('📝 Arabic font loading placeholder - implement custom font loading here');

    // Example of how you would add a custom font:
    // doc.addFont('path/to/arabic-font.ttf', 'ArabicFont', 'normal');
    // doc.setFont('ArabicFont');
}

// Enhanced PDF text utilities with comprehensive Arabic support
const PDFTextUtils = {
    // Wrap text for better display with Arabic support
    wrapText: function(doc, text, maxWidth) {
        if (!text) return [''];

        try {
            const processedText = processArabicText(text);

            if (containsArabic(text)) {
                // For Arabic text, handle wrapping more carefully
                const words = processedText.split(' ');
                const lines = [];
                let currentLine = '';

                words.forEach(word => {
                    const testLine = currentLine ? `${currentLine} ${word}` : word;
                    const testWidth = doc.getTextWidth(testLine);

                    if (testWidth <= maxWidth) {
                        currentLine = testLine;
                    } else {
                        if (currentLine) lines.push(currentLine);
                        currentLine = word;
                    }
                });

                if (currentLine) lines.push(currentLine);
                return lines.length > 0 ? lines : [processedText];
            } else {
                // Use jsPDF's built-in text splitting for non-Arabic text
                return doc.splitTextToSize(processedText, maxWidth);
            }
        } catch (error) {
            console.warn('Text wrapping error:', error);
            return [text];
        }
    },

    // Get text width with Arabic support
    getTextWidth: function(doc, text) {
        try {
            const processedText = processArabicText(text || '');
            return doc.getTextWidth(processedText);
        } catch (error) {
            console.warn('Text width calculation error:', error);
            return 0;
        }
    },

    // Center text with Arabic support
    centerText: function(doc, text, pageWidth, y) {
        try {
            const textWidth = this.getTextWidth(doc, text);
            const x = (pageWidth - textWidth) / 2;
            renderTextWithArabicSupport(doc, text, x, y, { align: 'center' });
        } catch (error) {
            console.error('Center text error:', error);
            renderTextWithArabicSupport(doc, text, pageWidth / 2, y, { align: 'center' });
        }
    },

    // Right-align text (useful for Arabic)
    rightAlignText: function(doc, text, rightX, y) {
        try {
            renderTextWithArabicSupport(doc, text, rightX, y, { rightAlign: true, align: 'right' });
        } catch (error) {
            console.error('Right align text error:', error);
            renderTextWithArabicSupport(doc, text, rightX, y);
        }
    },

    // Left-align text (default for English)
    leftAlignText: function(doc, text, leftX, y) {
        try {
            renderTextWithArabicSupport(doc, text, leftX, y, { align: 'left' });
        } catch (error) {
            console.error('Left align text error:', error);
            renderTextWithArabicSupport(doc, text, leftX, y);
        }
    },

    // Smart text alignment based on content
    smartAlignText: function(doc, text, x, y, maxWidth) {
        try {
            if (containsArabic(text)) {
                // Arabic text - right align
                this.rightAlignText(doc, text, x + maxWidth, y);
            } else {
                // English text - left align
                this.leftAlignText(doc, text, x, y);
            }
        } catch (error) {
            console.error('Smart align text error:', error);
            renderTextWithArabicSupport(doc, text, x, y);
        }
    }
};

// Debug function to create a test customer invoice
function createTestCustomerInvoice() {
    console.log('🧪 Creating test customer invoice...');

    const testInvoice = {
        id: `INV-TEST-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        amount: 1000.00,
        status: 'Pending',
        customer: 'Test Customer',
        products: [
            {
                id: 1,
                name: 'Test Product',
                sku: 'TEST-001',
                quantity: 10,
                price: 100.00,
                total: 1000.00
            }
        ],
        subtotal: 1000.00,
        shippingFee: 0,
        paymentStatus: 'Unpaid',
        payments: [],
        totalPaid: 0,
        remainingBalance: 1000.00
    };

    customerInvoices.push(testInvoice);
    console.log('✅ Test invoice created:', testInvoice.id);

    // Save and reload
    saveDataToStorage();
    loadCustomerInvoices();

    console.log('📊 Current customerInvoices count:', customerInvoices.length);
}

// Quick test function to verify customer invoices display
function quickTestCustomerInvoices() {
    console.log('🧪 QUICK TEST: Customer Invoices Display');
    console.log('='.repeat(60));

    // 1. Check current state
    console.log('1. CURRENT STATE:');
    console.log('customerInvoices.length:', customerInvoices.length);
    console.log('localStorage customerInvoices:', localStorage.getItem('sourcing_customerInvoices'));

    // 2. Check DOM
    const tbody = document.getElementById('customerInvoicesTableBody');
    console.log('2. DOM CHECK:');
    console.log('customerInvoicesTableBody exists:', !!tbody);
    if (tbody) {
        console.log('tbody.children.length:', tbody.children.length);
        console.log('tbody.innerHTML preview:', tbody.innerHTML.substring(0, 100));
    }

    // 3. Create test invoice if none exist
    if (customerInvoices.length === 0) {
        console.log('3. CREATING TEST INVOICE:');
        createTestCustomerInvoice();
    } else {
        console.log('3. RELOADING EXISTING INVOICES:');
        loadCustomerInvoices();
    }

    // 4. Final check
    console.log('4. FINAL STATE:');
    console.log('customerInvoices.length after test:', customerInvoices.length);
    if (tbody) {
        console.log('tbody.children.length after test:', tbody.children.length);
    }

    console.log('='.repeat(60));
}

// Comprehensive test function for Arabic PDF support
function testArabicPDFSupport() {
    console.log('🧪 Testing Enhanced Arabic PDF Support...');
    console.log('='.repeat(60));

    // Test 1: Arabic text detection
    console.log('1. TESTING ARABIC TEXT DETECTION:');
    const testTexts = [
        'Hello World', // English
        'مرحبا بالعالم', // Arabic "Hello World"
        'Product Name - اسم المنتج', // Mixed English-Arabic
        'شركة التوريد المحدودة', // Arabic company name
        'العميل: أحمد محمد', // Arabic customer name
        'منتج إلكتروني عالي الجودة', // Arabic product description
        'Samsung Galaxy - سامسونج جالاكسي', // Mixed brand name
    ];

    testTexts.forEach((text, index) => {
        const isArabic = containsArabic(text);
        const processed = processArabicText(text);
        console.log(`${index + 1}. "${text}"`);
        console.log(`   Arabic: ${isArabic} | Processed: "${processed}"`);
    });

    // Test 2: Generate PDF with Arabic content
    console.log('\n2. TESTING PDF GENERATION WITH ARABIC CONTENT:');
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Configure for Arabic
        const arabicConfigured = configurePDFForArabic(doc);
        console.log(`Arabic configuration: ${arabicConfigured ? 'Success' : 'Failed'}`);

        // Test different text rendering scenarios
        let yPos = 30;

        // Title
        doc.setFontSize(18);
        PDFTextUtils.centerText(doc, 'فاتورة مبيعات - Sales Invoice', doc.internal.pageSize.width, yPos);
        yPos += 20;

        // Test product names
        doc.setFontSize(12);
        const testProducts = [
            'هاتف ذكي - Smart Phone',
            'جهاز كمبيوتر محمول - Laptop',
            'منتج إلكتروني عالي الجودة'
        ];

        testProducts.forEach((product, index) => {
            renderTextWithArabicSupport(doc, `${index + 1}. ${product}`, 20, yPos);
            yPos += 15;
        });

        console.log('✅ PDF generation test completed successfully');

        // Save the test PDF
        doc.save('arabic-test.pdf');
        console.log('📄 Test PDF saved as "arabic-test.pdf"');

        return true;
    } catch (error) {
        console.error('❌ PDF generation test failed:', error);
        return false;
    }
}

// Add Arabic test products for testing
function addArabicTestProducts() {
    console.log('🧪 Adding Arabic test products...');

    const arabicTestProducts = [
        {
            id: Date.now() + 1000,
            name: 'هاتف ذكي متطور - Advanced Smartphone',
            sku: 'PHONE-AR-001',
            costPrice: 400,
            sellPrice: 800,
            quantity: 5,
            weight: 0.2,
            cbm: 0.001,
            photo: 'https://via.placeholder.com/150x150/007bff/ffffff?text=📱'
        },
        {
            id: Date.now() + 1001,
            name: 'جهاز كمبيوتر محمول عالي الأداء',
            sku: 'LAPTOP-AR-001',
            costPrice: 600,
            sellPrice: 1200,
            quantity: 3,
            weight: 2.5,
            cbm: 0.01,
            photo: 'https://via.placeholder.com/150x150/28a745/ffffff?text=💻'
        },
        {
            id: Date.now() + 1002,
            name: 'سماعات لاسلكية - Wireless Headphones',
            sku: 'HEADPHONE-AR-001',
            costPrice: 50,
            sellPrice: 120,
            quantity: 10,
            weight: 0.3,
            cbm: 0.002,
            photo: 'https://via.placeholder.com/150x150/ffc107/ffffff?text=🎧'
        },
        {
            id: Date.now() + 1003,
            name: 'ساعة ذكية رياضية - Sports Smart Watch',
            sku: 'WATCH-AR-001',
            costPrice: 150,
            sellPrice: 300,
            quantity: 7,
            weight: 0.1,
            cbm: 0.0005,
            photo: 'https://via.placeholder.com/150x150/dc3545/ffffff?text=⌚'
        }
    ];

    // Add to products array
    arabicTestProducts.forEach(product => {
        products.push(product);
    });

    // Save to storage
    saveDataToStorage();

    // Refresh products display if on main page
    if (document.getElementById('productsTableBody')) {
        loadProducts();
    }

    console.log('✅ Added Arabic test products to product list');
    console.log('📝 You can now create a sales order with these Arabic products and test PDF export');

    return arabicTestProducts;
}

// Function to load test data if no data exists
function loadTestDataIfEmpty() {
    console.log('🔍 Checking if test data needs to be loaded...');

    const hasCustomers = customers.length > 0;
    const hasProducts = products.length > 0;
    const hasCustomerInvoices = customerInvoices.length > 0;

    console.log('Current data state:');
    console.log('- Customers:', customers.length);
    console.log('- Products:', products.length);
    console.log('- Customer Invoices:', customerInvoices.length);

    if (!hasCustomers || !hasProducts || !hasCustomerInvoices) {
        console.log('📊 Loading test data...');
        initializeTestData();

        // Reload the customer invoices display
        if (document.getElementById('customerInvoicesTableBody')) {
            loadCustomerInvoices();
        }

        console.log('✅ Test data loaded successfully!');
        return true;
    } else {
        console.log('✅ Data already exists, no need to load test data');
        return false;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Application starting...');

    // Add global error handler
    window.addEventListener('error', function(e) {
        console.error('🚨 JavaScript Error:', e.error);
        console.error('File:', e.filename, 'Line:', e.lineno);
    });

    // Load data from localStorage first
    try {
        loadDataFromStorage();
        console.log('✅ Data loaded from storage');

        // Initialize accounting system
        loadAccountingDataFromStorage();
        initializeShippingCompaniesAccounting();

        // Load test data if no data exists
        loadTestDataIfEmpty();
    } catch (error) {
        console.error('❌ Error loading data:', error);
    }
    
    // Set today's date for payment forms (only if elements exist)
    const today = new Date().toISOString().split('T')[0];
    const supplierPaymentDate = document.getElementById('supplierPaymentDate');
    const customerPaymentDate = document.getElementById('customerPaymentDate');
    
    if (supplierPaymentDate) supplierPaymentDate.value = today;
    if (customerPaymentDate) customerPaymentDate.value = today;
    
    // Load invoicing page data (only if elements exist)
    if (document.getElementById('productsTableBody') || document.getElementById('comprehensiveProductsTableBody')) {
        loadProducts();
        loadInventoryStatus();
        updateCalculations();
    }

    // Load customer invoices if the table exists (should be on Master Order page)
    if (document.getElementById('customerInvoicesTableBody')) {
        console.log('🔍 Loading customer invoices - table element found');
        loadCustomerInvoices();
    } else {
        console.log('⚠️ customerInvoicesTableBody element not found - skipping customer invoices load');
    }

    // Load supplier invoices if the table exists
    if (document.getElementById('supplierInvoicesTableBody')) {
        loadSupplierInvoices();
    }

    // Load payments if the elements exist
    if (document.getElementById('supplierPaymentsTableBody')) {
        loadSupplierPayments();
    }

    if (document.getElementById('customerPaymentsTableBody')) {
        loadCustomerPayments();
    }
    
    // Load finance data (only if elements exist)
    if (document.getElementById('totalRevenue')) {
        loadFinanceDashboard();
        loadAccountsReceivable();
        loadAccountsPayable();
        updateProfitLoss();
        loadPaymentTracking();
        loadEWalletData();
    }
    
    // Load inventory data (only if elements exist)
    if (document.getElementById('totalItems')) {
        loadInventoryDashboard();
        loadCustomerInventoryTracking();
        loadProductInventoryManagement();
        loadShipmentTracking();
        loadLowStockAlerts();
    }
    
    // Load management data (only if elements exist)
    if (document.getElementById('totalCustomers')) {
        loadManagementDashboard();
        loadCustomersManagement();
        loadSuppliersManagement();
    }
});

// Product Management
function loadProducts() {
    const tbody = document.getElementById('comprehensiveProductsTableBody');
    if (!tbody) {
        // Fallback to old table if new one doesn't exist
        const oldTbody = document.getElementById('productsTableBody');
        if (oldTbody) {
            loadProductsOld();
            return;
        }
        return;
    }

    tbody.innerHTML = '';

    products.forEach(product => {
        // ✅ SYNC WITH PURCHASE ORDERS - Get real inventory data
        syncInventoryWithPOs(product);

        const row = document.createElement('tr');
        row.setAttribute('data-product-id', product.id); // For quick-add highlighting
        const costTotal = product.costPrice * product.quantity;
        const sellTotal = product.sellPrice * product.quantity;
        const profit = sellTotal - costTotal;

        row.innerHTML = `
            <td>
                <input type="checkbox" class="product-list-checkbox" data-product-id="${product.id}"
                       onchange="updateProductSelection(${product.id})" title="Select for quote generation">
            </td>
            <td>
                <div class="product-photo">
                    ${product.photo ? `<img src="${product.photo}" alt="${product.name}" class="product-photo">` : '📷'}
                </div>
            </td>
            <td>
                <div class="product-name">${product.name}</div>
                <div class="product-sku">SKU: ${product.sku}</div>
            </td>
            <td>
                <input type="number" value="${product.quantity}" min="1" class="qty-input"
                       onchange="updateProductQuantity('${product.id}', this.value)">
            </td>
            <td class="price-display">$${product.costPrice.toFixed(2)}</td>
            <td class="total-display">$${costTotal.toFixed(2)}</td>
            <td class="price-display">$${product.sellPrice.toFixed(2)}</td>
            <td class="total-display">$${sellTotal.toFixed(2)}</td>
            <td class="profit-display">$${profit.toFixed(2)}</td>
            <td>
                <div class="product-actions">
                    <button class="product-action-btn edit-btn" onclick="editProduct('${product.id}')" title="Edit">✏️</button>
                    <button class="product-action-btn delete-btn" onclick="deleteProduct('${product.id}')" title="Delete">🗑️</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });

    updateComprehensiveCalculations();
    updateProductsCount();
}

function loadProductsOld() {
    const tbody = document.getElementById('productsTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    products.forEach(product => {
        const amount = product.quantity * product.sellPrice;
        const tax = amount * 0.1; // 10% tax

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div style="font-weight: 500;">${product.name}</div>
                <div style="font-size: 12px; color: #6b7280; margin-top: 2px;">${product.description || 'Product description'}</div>
            </td>
            <td style="font-family: monospace; font-size: 13px;">${product.sku}</td>
            <td style="text-align: center;">${product.quantity}</td>
            <td style="text-align: right;">$${product.sellPrice.toFixed(2)}</td>
            <td style="text-align: right; font-weight: 500;">$${amount.toFixed(2)}</td>
            <td style="text-align: right;">$${tax.toFixed(2)}</td>
            <td style="text-align: center;">
                <button class="btn btn-secondary btn-small" onclick="editProduct(${product.id})" style="margin-right: 4px;">✏️</button>
                <button class="btn btn-danger btn-small" onclick="deleteProduct(${product.id})">🗑️</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    // Update totals
    updateInvoiceTotals();
}

function updateProductsCount() {
    const countElement = document.getElementById('productsCount');
    if (countElement) {
        countElement.textContent = `${products.length} products`;
    }
}

function updateProductQuantity(productId, newQuantity) {
    // Convert string ID to number if needed
    const numericId = typeof productId === 'string' ? parseInt(productId) : productId;
    const product = products.find(p => p.id === numericId);

    if (product) {
        const quantity = parseInt(newQuantity);
        if (quantity > 0) {
            product.quantity = quantity;
            // Update shipping data proportionally
            const shippedRatio = product.shipped / (product.shipped + product.remaining);
            product.shipped = Math.floor(quantity * shippedRatio);
            product.remaining = quantity - product.shipped;

            updateComprehensiveCalculations();
            loadInventoryStatus(); // Update inventory status as well
            saveDataToStorage();
        } else {
            alert('Quantity must be greater than 0');
            // Reset the input to the original value
            const input = document.querySelector(`input[onchange*="${productId}"]`);
            if (input) input.value = product.quantity;
        }
    }
}

function updateComprehensiveCalculations() {
    let totalCostPo = 0;
    let subeTotalSale = 0;
    let priceMarkup = 0;

    products.forEach(product => {
        totalCostPo += product.costPrice * product.quantity;
        subeTotalSale += product.sellPrice * product.quantity;
        priceMarkup += (product.sellPrice - product.costPrice) * product.quantity;
    });

    const otherExpenses = parseFloat(document.getElementById('otherExpenses')?.value || 0);
    const shippingFee = parseFloat(document.getElementById('comprehensiveShippingFee')?.value || 0);
    const commissionRatePercent = parseFloat(document.getElementById('commissionRate')?.value || 5);
    const commissionRate = commissionRatePercent / 100; // Convert percentage to decimal
    const commissionAmount = subeTotalSale * commissionRate;

    // Customer pays: Subtotal + Other Expenses + Shipping Fee - Commission
    const grandTotalSale = subeTotalSale + otherExpenses + shippingFee - commissionAmount;

    // Your profit = Price markup + Commission (customer pays for other expenses and shipping)
    const profitMarginTotal = priceMarkup + commissionAmount;

    // Update display elements
    const totalCostElement = document.getElementById('totalCostPo');
    const subeTotalElement = document.getElementById('subeTotalSale');
    const commissionElement = document.getElementById('commissionAmount');
    const grandTotalElement = document.getElementById('grandTotalSale');
    const profitMarginElement = document.getElementById('profitMarginTotal');

    if (totalCostElement) totalCostElement.textContent = `$${totalCostPo.toFixed(2)}`;
    if (subeTotalElement) subeTotalElement.textContent = `$${subeTotalSale.toFixed(2)}`;
    if (commissionElement) commissionElement.textContent = `$${commissionAmount.toFixed(2)}`;
    if (grandTotalElement) grandTotalElement.textContent = `$${grandTotalSale.toFixed(2)}`;
    if (profitMarginElement) profitMarginElement.textContent = `$${profitMarginTotal.toFixed(2)}`;
}

function updateInvoiceTotals() {
    const subtotal = products.reduce((sum, product) => sum + (product.quantity * product.sellPrice), 0);
    const shippingFee = parseFloat(document.getElementById('shippingFee')?.value || 0);
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + shippingFee + tax;

    // Update main invoice totals
    const subtotalElement = document.getElementById('invoiceSubtotalMain');
    const taxElement = document.getElementById('invoiceTaxMain');
    const totalElement = document.getElementById('orderTotal');

    if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    if (taxElement) taxElement.textContent = `$${tax.toFixed(2)}`;
    if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`;
}

function addProduct() {
    console.log('🔧 addProduct() called - Opening product modal');
    try {
        editingProductId = null;
        const modal = document.getElementById('productModal');
        const modalTitle = document.getElementById('modalTitle');

        console.log('Modal element:', modal);
        console.log('Modal title element:', modalTitle);

        if (!modal || !modalTitle) {
            console.error('Product modal elements not found');
            return;
        }

        modalTitle.textContent = 'Add Product';
        document.getElementById('modalProductName').value = '';
        document.getElementById('modalSKU').value = '';
        document.getElementById('modalQuantity').value = '';
        document.getElementById('modalCostPrice').value = '';
        document.getElementById('modalSellPrice').value = '';
        modal.style.display = 'block';
    } catch (error) {
        console.error('Error opening add product modal:', error);
        alert('Error opening product form. Please refresh the page and try again.');
    }
}

function editProduct(id) {
    // Convert string ID to number if needed
    const numericId = typeof id === 'string' ? parseInt(id) : id;
    const product = products.find(p => p.id === numericId);
    if (!product) {
        console.error('Product not found with ID:', id, 'Converted to:', numericId);
        alert('Product not found. Please refresh the page and try again.');
        return;
    }

    editingProductId = numericId;
    document.getElementById('modalTitle').textContent = 'Edit Product';
    document.getElementById('modalProductName').value = product.name;
    document.getElementById('modalSKU').value = product.sku;
    document.getElementById('modalQuantity').value = product.quantity;
    document.getElementById('modalCostPrice').value = product.costPrice;
    document.getElementById('modalSellPrice').value = product.sellPrice;
    document.getElementById('productModal').style.display = 'block';
}

function saveProduct() {
    try {
        const name = document.getElementById('modalProductName').value.trim();
        const sku = document.getElementById('modalSKU').value.trim();
        const quantity = parseInt(document.getElementById('modalQuantity').value);
        const costPrice = parseFloat(document.getElementById('modalCostPrice').value);
        const sellPrice = parseFloat(document.getElementById('modalSellPrice').value);

        if (!name || !sku || isNaN(quantity) || isNaN(costPrice) || isNaN(sellPrice)) {
            alert('Please fill in all fields with valid values');
            return;
        }

        if (quantity < 0 || costPrice < 0 || sellPrice < 0) {
            alert('Values cannot be negative');
            return;
        }
    
    if (editingProductId) {
        // Edit existing product
        const product = products.find(p => p.id === editingProductId);
        if (product) {
            product.name = name;
            product.sku = sku;
            product.quantity = quantity;
            product.costPrice = costPrice;
            product.sellPrice = sellPrice;
            // Maintain shipping data proportionally
            const shippedRatio = product.shipped / (product.shipped + product.remaining);
            product.shipped = Math.floor(quantity * shippedRatio);
            product.remaining = quantity - product.shipped;
        }
    } else {
        // Add new product
        const newId = Math.max(...products.map(p => p.id), 0) + 1;
        products.push({
            id: newId,
            name,
            sku,
            quantity,
            costPrice,
            sellPrice,
            shipped: 0,
            remaining: quantity
        });
    }
    
        closeProductModal();
        loadProducts();
        loadInventoryStatus();
        updateComprehensiveCalculations();
        saveDataToStorage();

        alert('Product saved successfully!');
    } catch (error) {
        console.error('Error saving product:', error);
        alert('Error saving product. Please try again.');
    }
}

function deleteProduct(id) {
    // Convert string ID to number if needed
    const numericId = typeof id === 'string' ? parseInt(id) : id;
    const product = products.find(p => p.id === numericId);

    if (!product) {
        console.error('Product not found with ID:', id, 'Converted to:', numericId);
        alert('Product not found. Please refresh the page and try again.');
        return;
    }

    if (confirm(`Are you sure you want to delete "${product.name}"?`)) {
        products = products.filter(p => p.id !== numericId);
        loadProducts();
        loadInventoryStatus();
        updateComprehensiveCalculations();
        saveDataToStorage();
        alert('Product deleted successfully!');
    }
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
    editingProductId = null;
}

// ✅ SYNC INVENTORY WITH PURCHASE ORDERS - Automatic data sync to avoid mistakes
function syncInventoryWithPOs(product) {
    // Initialize inventory if it doesn't exist
    if (!product.inventory) {
        product.inventory = {
            ordered: 0,
            received: 0,
            available: 0,
            allocated: 0,
            shipped: 0,
            reorderLevel: 10,
            lastReceived: null,
            lastOrdered: null,
            status: 'out_of_stock'
        };
    }

    // Reset ordered quantities to recalculate from POs
    product.inventory.ordered = 0;
    product.inventory.lastOrdered = null;

    // Calculate ordered quantities from all pending Purchase Orders
    supplierInvoices.forEach(po => {
        if (po.status === 'Pending' && po.products) {
            po.products.forEach(poProduct => {
                if (poProduct.id === product.id) {
                    product.inventory.ordered += poProduct.quantity;

                    // Update last ordered date
                    if (!product.inventory.lastOrdered || po.date > product.inventory.lastOrdered) {
                        product.inventory.lastOrdered = po.date;
                    }
                }
            });
        }
    });

    // Calculate allocated quantities from customer sales orders
    product.inventory.allocated = 0;
    customerInvoices.forEach(invoice => {
        if (invoice.status === 'Pending' && invoice.products) {
            invoice.products.forEach(invProduct => {
                if (invProduct.id === product.id) {
                    product.inventory.allocated += invProduct.quantity;
                }
            });
        }
    });

    // Update inventory status based on real data
    product.inventory.status = determineStockStatus(product);

    console.log(`Synced inventory for ${product.name}: ordered=${product.inventory.ordered}, received=${product.inventory.received}, available=${product.inventory.available}, allocated=${product.inventory.allocated}`);
}

// Enhanced Inventory Status Management
function loadInventoryStatus() {
    const tbody = document.getElementById('inventoryTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    products.forEach(product => {
        // ✅ SYNC WITH PURCHASE ORDERS - Get real data from POs to avoid mistakes
        syncInventoryWithPOs(product);

        // Ensure inventory structure exists
        if (!product.inventory) {
            migrateToEnhancedInventory();
        }

        const inv = product.inventory;
        const progress = inv.received > 0 ? (inv.shipped / inv.received) * 100 : 0;
        const valueRemaining = inv.available * product.sellPrice;

        // Determine status class and text
        let statusClass = '';
        let statusText = '';
        switch (inv.status) {
            case 'in_stock':
                statusClass = 'status-in-stock';
                statusText = 'In Stock';
                break;
            case 'low_stock':
                statusClass = 'status-low-stock';
                statusText = 'Low Stock';
                break;
            case 'out_of_stock':
                statusClass = 'status-out-of-stock';
                statusText = 'Out of Stock';
                break;
            case 'on_order':
                statusClass = 'status-on-order';
                statusText = 'On Order';
                break;
            default:
                statusClass = 'status-unknown';
                statusText = 'Unknown';
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <strong>${product.name}</strong><br>
                <small class="text-muted">${product.sku}</small>
            </td>
            <td>
                <div class="inventory-breakdown">
                    <div>Ordered: <span class="badge badge-info">${inv.ordered}</span></div>
                    <div>Received: <span class="badge badge-success">${inv.received}</span></div>
                </div>
            </td>
            <td>
                <div class="inventory-breakdown">
                    <div>Available: <span class="badge badge-primary">${inv.available}</span></div>
                    <div>Allocated: <span class="badge badge-warning">${inv.allocated}</span></div>
                </div>
            </td>
            <td><span class="shipped-badge">${inv.shipped}</span></td>
            <td>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%">
                        ${Math.round(progress)}%
                    </div>
                </div>
            </td>
            <td>
                <span class="status-badge ${statusClass}">${statusText}</span>
                ${inv.available <= inv.reorderLevel ? '<br><small class="text-danger">⚠️ Reorder needed</small>' : ''}
            </td>
            <td>
                <strong>$${valueRemaining.toFixed(2)}</strong>
                <br><small class="text-muted">Available value</small>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Invoice Management
function switchTab(tab, event) {
    try {
        // Update tab buttons
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        if (event && event.target) {
            event.target.classList.add('active');
        } else {
            // Fallback: find the button by tab name
            const buttons = document.querySelectorAll('.tab-button');
            buttons.forEach(btn => {
                if (btn.textContent.toLowerCase().includes(tab.toLowerCase()) ||
                    btn.getAttribute('onclick').includes(tab)) {
                    btn.classList.add('active');
                }
            });
        }

        // Update tab panels
        document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
        const targetPanel = document.getElementById(tab + 'Invoices');
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    } catch (error) {
        console.error('Error switching tab:', error);
    }
}

function loadCustomerInvoices() {
    console.log('🔍 DEBUG: loadCustomerInvoices called');
    console.log('customerInvoices array:', customerInvoices);
    console.log('customerInvoices length:', customerInvoices.length);

    const tbody = document.getElementById('customerInvoicesTableBody');

    if (!tbody) {
        console.error('❌ ERROR: customerInvoicesTableBody element not found!');
        console.log('Available elements with "customer" in ID:');
        document.querySelectorAll('[id*="customer"]').forEach(el => {
            console.log('- Element ID:', el.id, 'Tag:', el.tagName);
        });
        return;
    }

    console.log('✅ Found customerInvoicesTableBody element:', tbody);
    tbody.innerHTML = '';

    if (customerInvoices.length === 0) {
        console.log('ℹ️ No customer invoices to display');
        tbody.innerHTML = '<tr><td colspan="8" style="text-align: center; padding: 20px; color: #6b7280;">No sales orders found. Create your first sales order to get started!</td></tr>';
        return;
    }

    customerInvoices.forEach((invoice, index) => {
        console.log(`Processing invoice ${index + 1}/${customerInvoices.length}:`, invoice.id);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="checkbox" class="invoice-checkbox" data-invoice-id="${invoice.id}"></td>
            <td><strong>${invoice.id}</strong></td>
            <td>${invoice.customer || 'N/A'}</td>
            <td>${formatDate(invoice.date)}</td>
            <td>${formatDate(invoice.dueDate)}</td>
            <td><strong>$${invoice.amount.toFixed(2)}</strong></td>
            <td><span class="status-badge ${getStatusClass(invoice.status)}">${invoice.status}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-secondary btn-small" onclick="viewInvoice('${invoice.id}', 'customer')" title="View Details">👁️</button>
                    <div class="download-dropdown">
                        <button class="btn btn-primary btn-small dropdown-toggle" onclick="toggleDownloadDropdown('${invoice.id}')" title="Download & Export">📥</button>
                        <div class="dropdown-menu" id="dropdown-${invoice.id}">
                            <div class="dropdown-header">📄 Invoice Documents</div>
                            <button class="dropdown-item" data-icon="📄" onclick="downloadInvoice('${invoice.id}', 'customer', 'pdf')">PDF Invoice</button>
                            <button class="dropdown-item" data-icon="📊" onclick="downloadInvoice('${invoice.id}', 'customer', 'excel')">Excel Invoice</button>
                            <div class="dropdown-divider"></div>
                            <div class="dropdown-header">📦 Packing Lists</div>
                            <button class="dropdown-item" data-icon="📦" onclick="downloadInvoice('${invoice.id}', 'customer', 'packing-pdf')">Packing List (PDF)</button>
                            <button class="dropdown-item" data-icon="📋" onclick="downloadInvoice('${invoice.id}', 'customer', 'packing-excel')">Packing List (Excel)</button>
                        </div>
                    </div>
                    <button class="btn btn-success btn-small" onclick="createPOFromInvoice('${invoice.id}')" title="Create PO">🛒</button>
                    ${invoice.status === 'Pending' || invoice.status === 'Confirmed' ? `
                        <button class="btn btn-info btn-small" onclick="shipOrder('${invoice.id}')" title="Ship Order">🚚</button>
                    ` : ''}
                    ${invoice.status === 'Shipped' ? `
                        <button class="btn btn-secondary btn-small" onclick="viewShipment('${invoice.id}')" title="View Shipment">📦</button>
                    ` : ''}
                    <button class="btn btn-danger btn-small" onclick="deleteInvoice('${invoice.id}', 'customer')" title="Delete">🗑️</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });

    console.log(`✅ Successfully rendered ${customerInvoices.length} customer invoices`);
}

function loadSupplierInvoices() {
    const tbody = document.getElementById('supplierInvoicesTableBody');
    tbody.innerHTML = '';

    // Update dashboard statistics
    updateSupplierDashboardStats();

    supplierInvoices.forEach(invoice => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="checkbox" class="invoice-checkbox" data-invoice-id="${invoice.id}"></td>
            <td><strong>${invoice.id}</strong></td>
            <td>${invoice.supplier || 'N/A'}</td>
            <td>${formatDate(invoice.date)}</td>
            <td>${formatDate(invoice.dueDate)}</td>
            <td><strong>$${invoice.amount.toFixed(2)}</strong></td>
            <td><span class="status-badge ${getStatusClass(invoice.status)}">${invoice.status}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-secondary btn-small" onclick="viewInvoice('${invoice.id}', 'supplier')" title="View Details">👁️</button>
                    <div class="download-dropdown">
                        <button class="btn btn-primary btn-small dropdown-toggle" onclick="toggleDownloadDropdown('${invoice.id}')" title="Download & Export">📥</button>
                        <div class="dropdown-menu" id="dropdown-${invoice.id}">
                            <div class="dropdown-header">🛒 Purchase Order Documents</div>
                            <button class="dropdown-item" data-icon="📄" onclick="downloadInvoice('${invoice.id}', 'supplier', 'pdf')">PDF Purchase Order</button>
                            <button class="dropdown-item" data-icon="📊" onclick="downloadInvoice('${invoice.id}', 'supplier', 'excel')">Excel Purchase Order</button>
                            <div class="dropdown-divider"></div>
                            <div class="dropdown-header">📋 Advanced Reports</div>
                            <button class="dropdown-item" data-icon="📋" onclick="downloadPOReport('${invoice.id}', 'pdf')">Comprehensive PO Report (PDF)</button>
                            <button class="dropdown-item" data-icon="📈" onclick="downloadPOReport('${invoice.id}', 'excel')">Multi-Sheet PO Report (Excel)</button>
                            <button class="dropdown-item" data-icon="📦" onclick="downloadPODeliveryReport('${invoice.id}')">Delivery Performance Report</button>
                        </div>
                    </div>
                    <button class="btn btn-success btn-small" onclick="createCustomerInvoiceFromPO('${invoice.id}')" title="Create Invoice">📄</button>
                    <button class="btn btn-warning btn-small" onclick="editPO('${invoice.id}')" title="Edit">✏️</button>
                    <button class="btn btn-danger btn-small" onclick="deleteInvoice('${invoice.id}', 'supplier')" title="Delete">🗑️</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function createInvoice(type) {
    try {
        console.log('createInvoice called with type:', type);
        if (type === 'customer') {
            // Open the enhanced customer sales order creation modal
            console.log('Calling openCustomerInvoiceModal...');
            if (typeof openCustomerInvoiceModal === 'function') {
                openCustomerInvoiceModal();
            } else {
                console.error('openCustomerInvoiceModal function not found');
                alert('Customer sales order creation is not available. Please refresh the page and try again.');
            }
        } else {
            // Open the enhanced supplier invoice/PO creation modal
            console.log('Calling openSupplierInvoiceModal...');
            if (typeof openSupplierInvoiceModal === 'function') {
                openSupplierInvoiceModal();
            } else {
                console.error('openSupplierInvoiceModal function not found');
                alert('Supplier invoice creation is not available. Please refresh the page and try again.');
            }
        }
    } catch (error) {
        console.error('Error creating invoice:', error);
        alert('Error creating invoice. Please refresh the page and try again.');
    }
}

function viewInvoice(id, type) {
    const invoices = type === 'customer' ? customerInvoices : supplierInvoices;
    const invoice = invoices.find(inv => inv.id === id);
    if (invoice) {
        let details = `${type === 'customer' ? 'Invoice' : 'Purchase Order'} Details:\nID: ${invoice.id}\nDate: ${formatDate(invoice.date)}\nDue Date: ${formatDate(invoice.dueDate)}\nAmount: $${invoice.amount.toFixed(2)}\nStatus: ${invoice.status}`;
        
        // Add customer info and products for enhanced customer sales orders
        if (type === 'customer' && invoice.customer) {
            details += `\nCustomer: ${invoice.customer}`;
            if (invoice.shipmentMethod) {
                const shipmentLabels = {
                    'standard': 'Standard Shipping',
                    'express': 'Express Shipping',
                    'overnight': 'Overnight Shipping',
                    'local': 'Local Delivery',
                    'pickup': 'Customer Pickup'
                };
                details += `\nShipment Method: ${shipmentLabels[invoice.shipmentMethod] || invoice.shipmentMethod}`;
            }
            if (invoice.products && invoice.products.length > 0) {
                details += '\n\nProducts:';
                invoice.products.forEach(product => {
                    details += `\n- ${product.name} (${product.sku}): ${product.quantity} x $${product.price.toFixed(2)} = $${product.total.toFixed(2)}`;
                });
                if (invoice.subtotal !== undefined) {
                    details += `\n\nSubtotal: $${invoice.subtotal.toFixed(2)}`;
                    details += `\nShipping: $${(invoice.shippingFee || 0).toFixed(2)}`;
                }
            }
        }
        
        // Add supplier info and products for enhanced supplier invoices/POs
        if (type === 'supplier' && invoice.supplier) {
            details += `\nSupplier: ${invoice.supplier}`;
            if (invoice.paymentTerms) {
                const paymentTermsLabels = {
                    'net30': 'Net 30 Days',
                    'net15': 'Net 15 Days',
                    'net7': 'Net 7 Days',
                    'cod': 'Cash on Delivery',
                    'prepaid': 'Prepaid'
                };
                details += `\nPayment Terms: ${paymentTermsLabels[invoice.paymentTerms] || invoice.paymentTerms}`;
            }
            if (invoice.deliveryDate) {
                details += `\nExpected Delivery: ${formatDate(invoice.deliveryDate)}`;
            }
            if (invoice.products && invoice.products.length > 0) {
                details += '\n\nProducts:';
                invoice.products.forEach(product => {
                    details += `\n- ${product.name} (${product.sku}): ${product.quantity} x $${product.price.toFixed(2)} = $${product.total.toFixed(2)}`;
                });
                if (invoice.subtotal !== undefined) {
                    details += `\n\nSubtotal: $${invoice.subtotal.toFixed(2)}`;
                    details += `\nTax: $${(invoice.tax || 0).toFixed(2)}`;
                }
            }
        }
        
        alert(details);
    }
}

function toggleDownloadDropdown(invoiceId) {
    // Close all other dropdowns first
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu.id !== `dropdown-${invoiceId}`) {
            menu.classList.remove('show');
        }
    });

    // Remove any existing backdrop
    const existingBackdrop = document.querySelector('.dropdown-backdrop');
    if (existingBackdrop) {
        existingBackdrop.remove();
    }

    // Toggle the clicked dropdown
    const dropdown = document.getElementById(`dropdown-${invoiceId}`);
    const isShowing = dropdown.classList.contains('show');

    if (!isShowing) {
        // Create backdrop
        const backdrop = document.createElement('div');
        backdrop.className = 'dropdown-backdrop';
        backdrop.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
            backdrop-filter: blur(3px);
        `;
        document.body.appendChild(backdrop);

        // Position dropdown in center of screen for better visibility
        const button = document.querySelector(`[onclick="toggleDownloadDropdown('${invoiceId}')"]`);
        const buttonRect = button.getBoundingClientRect();

        dropdown.style.position = 'fixed';
        dropdown.style.top = '50%';
        dropdown.style.left = '50%';
        dropdown.style.transform = 'translate(-50%, -50%)';
        dropdown.style.right = 'auto';
        dropdown.style.bottom = 'auto';
        dropdown.style.maxHeight = '60vh';
        dropdown.style.width = '320px';

        dropdown.classList.add('show');

        // Ensure all content is visible
        setTimeout(() => {
            dropdown.scrollTop = 0;
        }, 100);

        // Close dropdown when clicking backdrop
        backdrop.addEventListener('click', function() {
            dropdown.classList.remove('show');
            backdrop.remove();
        });
    } else {
        dropdown.classList.remove('show');
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function closeDropdown(e) {
        if (!e.target.closest('.download-dropdown')) {
            dropdown.classList.remove('show');
            const backdrop = document.querySelector('.dropdown-backdrop');
            if (backdrop) backdrop.remove();
            document.removeEventListener('click', closeDropdown);
        }
    });
}

function downloadInvoice(id, type, format = 'pdf') {
    const invoices = type === 'customer' ? customerInvoices : supplierInvoices;
    const invoice = invoices.find(inv => inv.id === id);

    if (!invoice) {
        alert('Invoice not found');
        return;
    }

    // Close the dropdown
    const dropdown = document.getElementById(`dropdown-${id}`);
    if (dropdown) {
        dropdown.classList.remove('show');
    }

    if (format === 'excel') {
        downloadInvoiceAsExcel(invoice, type);
    } else if (format === 'packing-pdf') {
        downloadPackingListPDF(invoice, type);
    } else if (format === 'packing-excel') {
        downloadPackingListExcel(invoice, type);
    } else {
        downloadInvoiceAsPDF(invoice, type);
    }
}

function downloadInvoiceAsPDF(invoice, type) {
    // Create PDF using jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Configure PDF for Arabic text support
    configurePDFForArabic(doc);

    // Header
    doc.setFontSize(20);
    const documentTitle = type === 'customer' ? 'INVOICE' : 'PURCHASE ORDER';
    doc.text(documentTitle, 20, 30);
    
    // Invoice details with Arabic support
    doc.setFontSize(12);
    const idLabel = type === 'customer' ? 'Invoice #:' : 'PO #:';
    renderTextWithArabicSupport(doc, `${idLabel} ${invoice.id}`, 20, 50);
    renderTextWithArabicSupport(doc, `Date: ${formatDate(invoice.date)}`, 20, 60);
    renderTextWithArabicSupport(doc, `Due Date: ${formatDate(invoice.dueDate)}`, 20, 70);
    renderTextWithArabicSupport(doc, `Status: ${invoice.status}`, 20, 80);
    
    let yPos = 90;
    
    // Add shipment method for customer sales orders
    if (type === 'customer' && invoice.shipmentMethod) {
        const shipmentLabels = {
            'standard': 'Standard Shipping',
            'express': 'Express Shipping',
            'overnight': 'Overnight Shipping',
            'local': 'Local Delivery',
            'pickup': 'Customer Pickup'
        };
        renderTextWithArabicSupport(doc, `Shipment: ${shipmentLabels[invoice.shipmentMethod] || invoice.shipmentMethod}`, 20, yPos);
        yPos += 10;
    }

    // Add payment terms and delivery date for supplier invoices
    if (type === 'supplier') {
        if (invoice.paymentTerms) {
            const paymentTermsLabels = {
                'net30': 'Net 30 Days',
                'net15': 'Net 15 Days',
                'net7': 'Net 7 Days',
                'cod': 'Cash on Delivery',
                'prepaid': 'Prepaid'
            };
            renderTextWithArabicSupport(doc, `Payment Terms: ${paymentTermsLabels[invoice.paymentTerms] || invoice.paymentTerms}`, 20, yPos);
            yPos += 10;
        }
        if (invoice.deliveryDate) {
            renderTextWithArabicSupport(doc, `Expected Delivery: ${formatDate(invoice.deliveryDate)}`, 20, yPos);
            yPos += 10;
        }
    }

    // Company details with Arabic support
    yPos += 10;
    renderTextWithArabicSupport(doc, 'From:', 20, yPos);
    renderTextWithArabicSupport(doc, 'Sourcing Agent Company', 20, yPos + 10);
    renderTextWithArabicSupport(doc, '123 Business Street', 20, yPos + 20);
    renderTextWithArabicSupport(doc, 'City, State 12345', 20, yPos + 30);

    // Client details with Arabic support
    let clientName;
    if (type === 'customer') {
        clientName = invoice.customer || document.getElementById('customer')?.value || 'Customer';
    } else {
        clientName = invoice.supplier || document.getElementById('supplier')?.value || 'Supplier';
    }

    renderTextWithArabicSupport(doc, `To: ${clientName}`, 120, yPos);
    
    // Products table with Arabic support
    yPos += 60;
    renderTextWithArabicSupport(doc, 'Products:', 20, yPos);
    yPos += 10;

    // Table headers with Arabic support
    renderTextWithArabicSupport(doc, 'Product', 20, yPos);
    renderTextWithArabicSupport(doc, 'Qty', 80, yPos);
    renderTextWithArabicSupport(doc, 'Price', 110, yPos);
    renderTextWithArabicSupport(doc, 'Total', 150, yPos);
    yPos += 10;

    // Table content with Arabic support
    let subtotal = 0;

    if (invoice.products && invoice.products.length > 0) {
        // Use enhanced invoice product data with Arabic support
        invoice.products.forEach(product => {
            renderTextWithArabicSupport(doc, product.name, 20, yPos);
            renderTextWithArabicSupport(doc, product.quantity.toString(), 80, yPos);
            renderTextWithArabicSupport(doc, `$${product.price.toFixed(2)}`, 110, yPos);
            renderTextWithArabicSupport(doc, `$${product.total.toFixed(2)}`, 150, yPos);
            subtotal += product.total;
            yPos += 10;
        });
        
        // Add shipping for customer sales orders or tax for supplier invoices with Arabic support
        if (type === 'customer' && invoice.shippingFee && invoice.shippingFee > 0) {
            yPos += 5;
            renderTextWithArabicSupport(doc, 'Shipping Fee', 20, yPos);
            renderTextWithArabicSupport(doc, `$${invoice.shippingFee.toFixed(2)}`, 150, yPos);
            yPos += 10;
        } else if (type === 'supplier' && invoice.tax && invoice.tax > 0) {
            yPos += 5;
            renderTextWithArabicSupport(doc, 'Tax', 20, yPos);
            renderTextWithArabicSupport(doc, `$${invoice.tax.toFixed(2)}`, 150, yPos);
            yPos += 10;
        }
    } else {
        // Fallback to all products for older invoices with Arabic support
        products.forEach(product => {
            const price = type === 'customer' ? product.sellPrice : product.costPrice;
            const lineTotal = product.quantity * price;
            subtotal += lineTotal;

            renderTextWithArabicSupport(doc, product.name, 20, yPos);
            renderTextWithArabicSupport(doc, product.quantity.toString(), 80, yPos);
            renderTextWithArabicSupport(doc, `$${price.toFixed(2)}`, 110, yPos);
            renderTextWithArabicSupport(doc, `$${lineTotal.toFixed(2)}`, 150, yPos);
            yPos += 10;
        });
    }

    // Total with Arabic support
    yPos += 10;
    doc.setFontSize(14);
    renderTextWithArabicSupport(doc, `Total Amount: $${invoice.amount.toFixed(2)}`, 120, yPos);
    
    // Save the PDF
    doc.save(`${invoice.id}.pdf`);
}

function downloadInvoiceAsExcel(invoice, type) {
    // Create workbook and worksheet
    const wb = XLSX.utils.book_new();

    // Prepare invoice data
    const documentTitle = type === 'customer' ? 'INVOICE' : 'PURCHASE ORDER';
    const idLabel = type === 'customer' ? 'Invoice #' : 'PO #';

    // Header information
    const headerData = [
        [documentTitle],
        [''],
        [idLabel, invoice.id],
        ['Date:', formatDate(invoice.date)],
        ['Due Date:', formatDate(invoice.dueDate)],
        ['Status:', invoice.status],
        ['']
    ];

    // Add shipment method for customer sales orders
    if (type === 'customer' && invoice.shipmentMethod) {
        const shipmentLabels = {
            'standard': 'Standard Shipping',
            'express': 'Express Shipping',
            'overnight': 'Overnight Shipping',
            'local': 'Local Delivery',
            'pickup': 'Customer Pickup'
        };
        headerData.push(['Shipment:', shipmentLabels[invoice.shipmentMethod] || invoice.shipmentMethod]);
    }

    // Add payment terms and delivery date for supplier invoices
    if (type === 'supplier') {
        if (invoice.paymentTerms) {
            const paymentTermsLabels = {
                'net30': 'Net 30 Days',
                'net15': 'Net 15 Days',
                'net7': 'Net 7 Days',
                'cod': 'Cash on Delivery',
                'prepaid': 'Prepaid'
            };
            headerData.push(['Payment Terms:', paymentTermsLabels[invoice.paymentTerms] || invoice.paymentTerms]);
        }
        if (invoice.deliveryDate) {
            headerData.push(['Expected Delivery:', formatDate(invoice.deliveryDate)]);
        }
    }

    // Company and client information
    headerData.push(['']);
    headerData.push(['From:', 'To:']);
    headerData.push(['Sourcing Agent Company', invoice.customer || invoice.supplier || 'Client']);
    headerData.push(['123 Business Street', '']);
    headerData.push(['City, State 12345', '']);
    headerData.push(['']);

    // Products table header
    headerData.push(['Products:']);
    headerData.push(['Product Name', 'SKU', 'Quantity', 'Unit Price', 'Total']);

    // Combine header with product data
    let allData = [...headerData];

    // Add products
    let subtotal = 0;
    if (invoice.products && invoice.products.length > 0) {
        // Use enhanced invoice product data
        invoice.products.forEach(product => {
            allData.push([
                product.name,
                product.sku || '',
                product.quantity,
                product.price,
                product.total
            ]);
            subtotal += product.total;
        });
    } else {
        // Fallback to all products for older invoices
        products.forEach(product => {
            const price = type === 'customer' ? product.sellPrice : product.costPrice;
            const lineTotal = product.quantity * price;
            subtotal += lineTotal;

            allData.push([
                product.name,
                product.sku || '',
                product.quantity,
                price,
                lineTotal
            ]);
        });
    }

    // Add totals
    allData.push(['']);
    allData.push(['', '', '', 'Subtotal:', subtotal]);

    // Add shipping for customer sales orders or tax for supplier invoices
    if (type === 'customer' && invoice.shippingFee && invoice.shippingFee > 0) {
        allData.push(['', '', '', 'Shipping Fee:', invoice.shippingFee]);
    } else if (type === 'supplier' && invoice.tax && invoice.tax > 0) {
        allData.push(['', '', '', 'Tax:', invoice.tax]);
    }

    allData.push(['', '', '', 'Total Amount:', invoice.amount]);

    // Create worksheet
    const ws = XLSX.utils.aoa_to_sheet(allData);

    // Set column widths
    ws['!cols'] = [
        { wch: 25 }, // Product Name
        { wch: 15 }, // SKU
        { wch: 10 }, // Quantity
        { wch: 12 }, // Unit Price
        { wch: 12 }  // Total
    ];

    // Style the header
    const headerStyle = {
        font: { bold: true, sz: 16 },
        alignment: { horizontal: 'center' }
    };

    if (ws['A1']) {
        ws['A1'].s = headerStyle;
    }

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, documentTitle);

    // Save the Excel file
    XLSX.writeFile(wb, `${invoice.id}.xlsx`);
}

function downloadPackingListPDF(invoice, type) {
    // Create PDF using jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Configure PDF for Arabic text support
    configurePDFForArabic(doc);

    // Set up document
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    let yPosition = margin;

    // Header with Arabic support
    doc.setFontSize(24);
    doc.setFont(undefined, 'bold');
    PDFTextUtils.centerText(doc, 'PACKING LIST', pageWidth, yPosition);
    yPosition += 15;

    // Invoice information with Arabic support
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    renderTextWithArabicSupport(doc, `Invoice #: ${invoice.id}`, margin, yPosition);
    renderTextWithArabicSupport(doc, `Date: ${formatDate(invoice.date)}`, pageWidth - margin - 60, yPosition);
    yPosition += 10;

    renderTextWithArabicSupport(doc, `Customer: ${invoice.customer || 'N/A'}`, margin, yPosition);
    yPosition += 15;

    // Table header
    const tableStartY = yPosition;
    const colWidths = [40, 30, 25, 25, 25, 25]; // Photo, Product, Qty, Weight, CBM, Total Weight
    const colPositions = [margin];
    for (let i = 1; i < colWidths.length; i++) {
        colPositions.push(colPositions[i-1] + colWidths[i-1]);
    }

    // Draw table header
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, yPosition, pageWidth - 2 * margin, 10, 'F');

    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    renderTextWithArabicSupport(doc, 'Product Photo', colPositions[0] + 2, yPosition + 7);
    renderTextWithArabicSupport(doc, 'Product Name', colPositions[1] + 2, yPosition + 7);
    renderTextWithArabicSupport(doc, 'Quantity', colPositions[2] + 2, yPosition + 7);
    renderTextWithArabicSupport(doc, 'Unit Weight', colPositions[3] + 2, yPosition + 7);
    renderTextWithArabicSupport(doc, 'Unit CBM', colPositions[4] + 2, yPosition + 7);
    renderTextWithArabicSupport(doc, 'Total Weight', colPositions[5] + 2, yPosition + 7);

    yPosition += 15;

    // Get products for this invoice
    let invoiceProducts = [];
    let totalWeight = 0;
    let totalCBM = 0;

    if (invoice.products && invoice.products.length > 0) {
        // Use enhanced invoice product data
        invoiceProducts = invoice.products.map(item => {
            const product = products.find(p => p.id === item.productId) || {};
            const weight = (product.weight || 0.1) * item.quantity;
            const cbm = (product.cbm || 0.001) * item.quantity;
            totalWeight += weight;
            totalCBM += cbm;

            return {
                name: product.name || item.name || 'Unknown Product',
                quantity: item.quantity,
                unitWeight: product.weight || 0.1,
                unitCBM: product.cbm || 0.001,
                totalWeight: weight,
                totalCBM: cbm,
                photo: product.photo || 'https://via.placeholder.com/150x150/cccccc/ffffff?text=No+Image'
            };
        });
    } else {
        // Fallback to all products for older invoices
        invoiceProducts = products.map(product => {
            const weight = product.weight * product.quantity;
            const cbm = product.cbm * product.quantity;
            totalWeight += weight;
            totalCBM += cbm;

            return {
                name: product.name,
                quantity: product.quantity,
                unitWeight: product.weight,
                unitCBM: product.cbm,
                totalWeight: weight,
                totalCBM: cbm,
                photo: product.photo
            };
        });
    }

    // Add products to table
    doc.setFont(undefined, 'normal');
    invoiceProducts.forEach((product, index) => {
        // Check if we need a new page
        if (yPosition > pageHeight - 40) {
            doc.addPage();
            yPosition = margin;
        }

        const rowHeight = 25;

        // Draw row background (alternating)
        if (index % 2 === 0) {
            doc.setFillColor(250, 250, 250);
            doc.rect(margin, yPosition, pageWidth - 2 * margin, rowHeight, 'F');
        }

        // Add placeholder for photo (we can't embed actual images easily in jsPDF)
        doc.setFillColor(220, 220, 220);
        doc.rect(colPositions[0] + 2, yPosition + 2, 35, 20, 'F');
        doc.setFontSize(8);
        doc.text('PHOTO', colPositions[0] + 12, yPosition + 14);

        // Add product information
        doc.setFontSize(9);
        const productName = product.name.length > 20 ? product.name.substring(0, 20) + '...' : product.name;
        doc.text(productName, colPositions[1] + 2, yPosition + 8);
        doc.text(product.quantity.toString(), colPositions[2] + 2, yPosition + 8);
        doc.text(`${product.unitWeight.toFixed(2)} kg`, colPositions[3] + 2, yPosition + 8);
        doc.text(`${product.unitCBM.toFixed(4)} m³`, colPositions[4] + 2, yPosition + 8);
        doc.text(`${product.totalWeight.toFixed(2)} kg`, colPositions[5] + 2, yPosition + 8);

        // Add CBM on second line
        doc.setFontSize(8);
        doc.text(`Total CBM: ${product.totalCBM.toFixed(4)} m³`, colPositions[1] + 2, yPosition + 18);

        yPosition += rowHeight + 5;
    });

    // Add totals
    yPosition += 10;
    doc.setFont(undefined, 'bold');
    doc.setFontSize(12);
    doc.text('SHIPMENT TOTALS:', margin, yPosition);
    yPosition += 10;

    doc.setFont(undefined, 'normal');
    doc.setFontSize(11);
    doc.text(`Total Packages: ${invoiceProducts.length}`, margin, yPosition);
    yPosition += 8;
    doc.text(`Total Weight: ${totalWeight.toFixed(2)} kg`, margin, yPosition);
    yPosition += 8;
    doc.text(`Total Volume: ${totalCBM.toFixed(4)} cubic meters`, margin, yPosition);
    yPosition += 15;

    // Add shipping notes
    doc.setFont(undefined, 'bold');
    doc.text('SHIPPING NOTES:', margin, yPosition);
    yPosition += 8;
    doc.setFont(undefined, 'normal');
    doc.setFontSize(10);
    doc.text('• Handle with care - Electronic components', margin + 5, yPosition);
    yPosition += 6;
    doc.text('• Keep dry and avoid extreme temperatures', margin + 5, yPosition);
    yPosition += 6;
    doc.text('• Fragile items - This side up', margin + 5, yPosition);

    // Footer
    const footerY = pageHeight - 20;
    doc.setFontSize(8);
    doc.setFont(undefined, 'normal');
    doc.text('This packing list was generated automatically. Please verify contents upon receipt.', pageWidth / 2, footerY, { align: 'center' });

    // Save the PDF
    doc.save(`${invoice.id}_packing_list.pdf`);
}

function downloadPackingListExcel(invoice, type) {
    // Create workbook and worksheet
    const wb = XLSX.utils.book_new();

    // Prepare packing list data
    const documentTitle = 'PACKING LIST';

    // Header information
    const headerData = [
        [documentTitle],
        [''],
        ['Invoice #:', invoice.id],
        ['Date:', formatDate(invoice.date)],
        ['Customer:', invoice.customer || 'N/A'],
        [''],
        ['SHIPMENT DETAILS'],
        ['']
    ];

    // Get products for this invoice
    let invoiceProducts = [];
    let totalWeight = 0;
    let totalCBM = 0;
    let totalPackages = 0;

    if (invoice.products && invoice.products.length > 0) {
        // Use enhanced invoice product data
        invoiceProducts = invoice.products.map(item => {
            const product = products.find(p => p.id === item.productId) || {};
            const unitWeight = product.weight || 0.1;
            const unitCBM = product.cbm || 0.001;
            const totalItemWeight = unitWeight * item.quantity;
            const totalItemCBM = unitCBM * item.quantity;

            totalWeight += totalItemWeight;
            totalCBM += totalItemCBM;
            totalPackages += item.quantity;

            return {
                name: product.name || item.name || 'Unknown Product',
                sku: product.sku || 'N/A',
                quantity: item.quantity,
                unitWeight: unitWeight,
                unitCBM: unitCBM,
                totalWeight: totalItemWeight,
                totalCBM: totalItemCBM,
                photo: product.photo || 'No Image Available'
            };
        });
    } else {
        // Fallback to all products for older invoices
        invoiceProducts = products.map(product => {
            const totalItemWeight = product.weight * product.quantity;
            const totalItemCBM = product.cbm * product.quantity;

            totalWeight += totalItemWeight;
            totalCBM += totalItemCBM;
            totalPackages += product.quantity;

            return {
                name: product.name,
                sku: product.sku,
                quantity: product.quantity,
                unitWeight: product.weight,
                unitCBM: product.cbm,
                totalWeight: totalItemWeight,
                totalCBM: totalItemCBM,
                photo: product.photo
            };
        });
    }

    // Products table header
    headerData.push(['Product Name', 'SKU', 'Quantity', 'Unit Weight (kg)', 'Unit CBM (m³)', 'Total Weight (kg)', 'Total CBM (m³)', 'Photo URL']);

    // Combine header with product data
    let allData = [...headerData];

    // Add products
    invoiceProducts.forEach(product => {
        allData.push([
            product.name,
            product.sku,
            product.quantity,
            product.unitWeight.toFixed(3),
            product.unitCBM.toFixed(6),
            product.totalWeight.toFixed(3),
            product.totalCBM.toFixed(6),
            product.photo
        ]);
    });

    // Add spacing and totals
    allData.push(['']);
    allData.push(['SHIPMENT TOTALS']);
    allData.push(['Total Product Types:', invoiceProducts.length]);
    allData.push(['Total Packages:', totalPackages]);
    allData.push(['Total Weight (kg):', totalWeight.toFixed(3)]);
    allData.push(['Total Volume (m³):', totalCBM.toFixed(6)]);
    allData.push(['']);

    // Add shipping notes
    allData.push(['SHIPPING NOTES']);
    allData.push(['• Handle with care - Electronic components']);
    allData.push(['• Keep dry and avoid extreme temperatures']);
    allData.push(['• Fragile items - This side up']);
    allData.push(['• Verify contents upon receipt']);
    allData.push(['']);

    // Add dimensional weight calculation (if applicable)
    const dimensionalWeight = totalCBM * 167; // Standard air freight calculation (167 kg/m³)
    allData.push(['FREIGHT CALCULATIONS']);
    allData.push(['Actual Weight (kg):', totalWeight.toFixed(3)]);
    allData.push(['Dimensional Weight (kg):', dimensionalWeight.toFixed(3)]);
    allData.push(['Chargeable Weight (kg):', Math.max(totalWeight, dimensionalWeight).toFixed(3)]);
    allData.push(['']);

    // Add handling instructions
    allData.push(['HANDLING INSTRUCTIONS']);
    allData.push(['Fragile', 'This Side Up', 'Keep Dry', 'Electronics']);

    // Create worksheet
    const ws = XLSX.utils.aoa_to_sheet(allData);

    // Set column widths
    ws['!cols'] = [
        { wch: 30 }, // Product Name
        { wch: 15 }, // SKU
        { wch: 10 }, // Quantity
        { wch: 15 }, // Unit Weight
        { wch: 15 }, // Unit CBM
        { wch: 15 }, // Total Weight
        { wch: 15 }, // Total CBM
        { wch: 40 }  // Photo URL
    ];

    // Style the header
    const headerStyle = {
        font: { bold: true, sz: 16 },
        alignment: { horizontal: 'center' }
    };

    if (ws['A1']) {
        ws['A1'].s = headerStyle;
    }

    // Style the section headers
    const sectionHeaderStyle = {
        font: { bold: true, sz: 12 },
        fill: { fgColor: { rgb: "E6E6E6" } }
    };

    // Apply styling to section headers
    const sectionHeaders = ['A7', 'A' + (headerData.length + invoiceProducts.length + 2),
                           'A' + (headerData.length + invoiceProducts.length + 8),
                           'A' + (headerData.length + invoiceProducts.length + 13),
                           'A' + (headerData.length + invoiceProducts.length + 18)];

    sectionHeaders.forEach(cell => {
        if (ws[cell]) {
            ws[cell].s = sectionHeaderStyle;
        }
    });

    // Style the product table header
    const tableHeaderStyle = {
        font: { bold: true },
        fill: { fgColor: { rgb: "D9D9D9" } },
        alignment: { horizontal: 'center' }
    };

    const tableHeaderRow = headerData.length;
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].forEach(col => {
        const cell = col + tableHeaderRow;
        if (ws[cell]) {
            ws[cell].s = tableHeaderStyle;
        }
    });

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Packing List');

    // Save the Excel file
    XLSX.writeFile(wb, `${invoice.id}_packing_list.xlsx`);
}

// PO Management Functions
function createPOFromCustomerInvoice() {
    // Get the latest customer sales order or let user select
    if (customerInvoices.length === 0) {
        alert('No customer sales orders available to create PO from');
        return;
    }

    // For demo, use the first invoice
    const customerInvoice = customerInvoices[0];
    openPOCreationModal(customerInvoice);
}

function createPOFromInvoice(invoiceId) {
    const invoice = customerInvoices.find(inv => inv.id === invoiceId);
    if (!invoice) {
        alert('Invoice not found');
        return;
    }

    openPOCreationModal(invoice);
}

function openPOCreationModal(sourceInvoice = null) {
    const modal = document.getElementById('poCreationModal');
    const title = document.getElementById('poModalTitle');

    if (sourceInvoice) {
        title.textContent = `Create PO from Invoice ${sourceInvoice.id}`;
        populatePOFromInvoice(sourceInvoice);
    } else {
        title.textContent = 'Create Purchase Order';
        clearPOForm();
    }

    loadPOProductList();
    updatePOConfirmationState();
    addScrollIndicator();
    modal.style.display = 'block';

    // Focus on first input for better UX
    setTimeout(() => {
        const firstInput = modal.querySelector('select, input');
        if (firstInput) firstInput.focus();
    }, 100);
}

function addScrollIndicator() {
    const modalBody = document.querySelector('#poCreationModal .modal-body');
    if (!modalBody) return;

    // Remove existing indicator
    const existingIndicator = modalBody.querySelector('.scroll-indicator');
    if (existingIndicator) {
        existingIndicator.remove();
    }

    // Add scroll indicator
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    indicator.textContent = '↓ Scroll to see more';
    modalBody.appendChild(indicator);

    // Hide indicator when scrolled to bottom
    modalBody.addEventListener('scroll', function() {
        const isAtBottom = modalBody.scrollTop + modalBody.clientHeight >= modalBody.scrollHeight - 10;
        indicator.style.display = isAtBottom ? 'none' : 'block';
    });

    // Hide indicator initially if content fits
    setTimeout(() => {
        const needsScroll = modalBody.scrollHeight > modalBody.clientHeight;
        indicator.style.display = needsScroll ? 'block' : 'none';
    }, 100);
}

function populatePOFromInvoice(invoice) {
    // Set delivery date (30 days from now)
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 30);
    document.getElementById('poDeliveryDate').value = deliveryDate.toISOString().split('T')[0];

    // Set default payment terms
    document.getElementById('poPaymentTerms').value = 'net30';

    // Store the source invoice for reference
    window.currentSourceInvoice = invoice;

    // Pre-select products based on invoice
    setTimeout(() => {
        populateProductsFromInvoice(invoice);
        updatePOSummary();
    }, 100);
}

function populateProductsFromInvoice(invoice) {
    // Get products from the invoice
    let invoiceProducts = [];

    if (invoice.products && invoice.products.length > 0) {
        // Use enhanced invoice product data
        invoiceProducts = invoice.products;
    } else if (invoice.items && invoice.items.length > 0) {
        // Use legacy invoice items
        invoiceProducts = invoice.items;
    } else {
        // Fallback: use all current products (for demo purposes)
        console.log('No specific products found in invoice, using current product list');
        return;
    }

    // Clear all quantities first and reset styling
    products.forEach(product => {
        const qtyInput = document.getElementById(`po-qty-${product.id}`);
        if (qtyInput) {
            qtyInput.value = '';
            qtyInput.style.backgroundColor = '';
            qtyInput.style.borderColor = '';

            // Reset product item styling
            const productItem = qtyInput.closest('.po-product-item');
            if (productItem) {
                productItem.style.backgroundColor = '';
                productItem.style.borderColor = '';

                // Remove existing badges
                const existingBadge = productItem.querySelector('.invoice-badge');
                if (existingBadge) {
                    existingBadge.remove();
                }
            }
        }
    });

    // Set quantities for products in the invoice
    invoiceProducts.forEach(invoiceItem => {
        const productId = invoiceItem.productId || invoiceItem.id;
        const quantity = invoiceItem.quantity;
        const sellPrice = invoiceItem.unitPrice || 0;

        // Find the corresponding product to get cost price
        const product = products.find(p => p.id === productId);
        const costPrice = product ? product.costPrice : 0;
        const margin = sellPrice > 0 ? ((sellPrice - costPrice) / sellPrice * 100).toFixed(1) : 0;

        const quantityInput = document.getElementById(`po-qty-${productId}`);
        if (quantityInput) {
            quantityInput.value = quantity;
            // Highlight pre-filled items
            quantityInput.style.backgroundColor = '#dbeafe';
            quantityInput.style.borderColor = '#3b82f6';

            // Add visual indicator
            const productItem = quantityInput.closest('.po-product-item');
            if (productItem) {
                productItem.style.backgroundColor = '#f0f9ff';
                productItem.style.borderColor = '#3b82f6';
                productItem.style.boxShadow = '0 2px 8px rgba(59, 130, 246, 0.2)';

                // Add "From Invoice" badge with pricing info
                const badge = document.createElement('div');
                badge.className = 'invoice-badge';
                badge.style.cssText = `
                    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                    color: white;
                    padding: 4px 8px;
                    border-radius: 12px;
                    font-size: 10px;
                    font-weight: 600;
                    margin-top: 4px;
                    display: inline-block;
                    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
                `;
                badge.innerHTML = `
                    📋 From Invoice • Sell: $${sellPrice.toFixed(2)} • Cost: $${costPrice.toFixed(2)} • Margin: ${margin}%
                `;

                const productDetails = productItem.querySelector('.po-product-details');
                if (productDetails) {
                    productDetails.appendChild(badge);
                }
            }
        }
    });

    // Show summary of pre-filled items
    showInvoiceProductsSummary(invoiceProducts, invoice);
}

function showInvoiceProductsSummary(invoiceProducts, invoice) {
    const container = document.getElementById('poProductList');

    // Remove existing summary
    const existingSummary = container.querySelector('.invoice-products-summary');
    if (existingSummary) {
        existingSummary.remove();
    }

    // Calculate financial summary
    let totalSellValue = 0;
    let totalCostValue = 0;
    let totalQuantity = 0;

    invoiceProducts.forEach(item => {
        const product = products.find(p => p.id === (item.productId || item.id));
        const quantity = item.quantity || 0;
        const sellPrice = item.unitPrice || 0;
        const costPrice = product ? product.costPrice : 0;

        totalQuantity += quantity;
        totalSellValue += quantity * sellPrice;
        totalCostValue += quantity * costPrice;
    });

    const totalMargin = totalSellValue > 0 ? ((totalSellValue - totalCostValue) / totalSellValue * 100).toFixed(1) : 0;
    const totalProfit = totalSellValue - totalCostValue;

    // Create summary
    const summary = document.createElement('div');
    summary.className = 'invoice-products-summary';
    summary.style.cssText = `
        background: linear-gradient(135deg, #059669, #10b981);
        color: white;
        padding: 20px;
        border-radius: 12px;
        margin-bottom: 20px;
        box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;

    const customerName = invoice.customer || 'Customer';

    summary.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
            <span style="font-size: 24px;">🛒</span>
            <div>
                <div style="font-weight: 700; font-size: 18px;">Creating PO from Invoice ${invoice.id}</div>
                <div style="opacity: 0.9; font-size: 14px;">Customer: ${customerName} • Date: ${formatDate(invoice.date)}</div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 16px;">
            <div style="background: rgba(255, 255, 255, 0.15); padding: 12px; border-radius: 8px;">
                <div style="font-size: 12px; opacity: 0.8; margin-bottom: 4px;">PRODUCTS & QUANTITY</div>
                <div style="font-weight: 700; font-size: 16px;">${invoiceProducts.length} types • ${totalQuantity} items</div>
            </div>
            <div style="background: rgba(255, 255, 255, 0.15); padding: 12px; border-radius: 8px;">
                <div style="font-size: 12px; opacity: 0.8; margin-bottom: 4px;">CUSTOMER PAID</div>
                <div style="font-weight: 700; font-size: 16px;">$${totalSellValue.toFixed(2)}</div>
            </div>
            <div style="background: rgba(255, 255, 255, 0.15); padding: 12px; border-radius: 8px;">
                <div style="font-size: 12px; opacity: 0.8; margin-bottom: 4px;">YOUR COST (PO)</div>
                <div style="font-weight: 700; font-size: 16px;">$${totalCostValue.toFixed(2)}</div>
            </div>
            <div style="background: rgba(255, 255, 255, 0.15); padding: 12px; border-radius: 8px;">
                <div style="font-size: 12px; opacity: 0.8; margin-bottom: 4px;">PROFIT MARGIN</div>
                <div style="font-weight: 700; font-size: 16px;">${totalMargin}% ($${totalProfit.toFixed(2)})</div>
            </div>
        </div>

        <div style="background: rgba(255, 255, 255, 0.1); padding: 12px; border-radius: 8px; font-size: 13px; line-height: 1.5;">
            <strong>💡 Smart PO Creation:</strong> Products and quantities are pre-filled from your customer sales order.
            The PO will use <strong>cost prices</strong> for purchasing from suppliers, while you sold at <strong>sell prices</strong> to customers.
        </div>
    `;

    // Insert at the beginning of the product list
    const firstChild = container.firstChild;
    container.insertBefore(summary, firstChild);
}

function loadPOProductList() {
    const container = document.getElementById('poProductList');
    container.innerHTML = '';

    // Add header info
    const headerInfo = document.createElement('div');
    headerInfo.style.cssText = 'margin-bottom: 16px; padding: 12px; background: #e0f2fe; border-radius: 6px; font-size: 14px; color: #0369a1;';
    headerInfo.innerHTML = '💡 <strong>Tip:</strong> Enter quantities for products you want to order. Leave blank to skip.';
    container.appendChild(headerInfo);

    products.forEach((product, index) => {
        const productItem = document.createElement('div');
        productItem.className = 'po-product-item';
        productItem.innerHTML = `
            <div class="po-product-info">
                <div class="po-product-name">${product.name}</div>
                <div class="po-product-details">
                    SKU: ${product.sku} | Cost: $${product.costPrice.toFixed(2)} |
                    Available: ${product.quantity} units |
                    Category: ${product.category || 'General'}
                </div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                <input type="number"
                       id="po-qty-${product.id}"
                       class="po-quantity-input"
                       placeholder="0"
                       min="0"
                       max="${product.quantity}"
                       onchange="updatePOSummary()"
                       oninput="validateQuantity(this, ${product.quantity})">
                <small style="color: #6b7280; font-size: 11px;">Max: ${product.quantity}</small>
            </div>
        `;
        container.appendChild(productItem);
    });

    // Add summary info at bottom
    const summaryInfo = document.createElement('div');
    summaryInfo.style.cssText = 'margin-top: 16px; padding: 12px; background: #f0fdf4; border-radius: 6px; font-size: 14px; color: #166534;';
    summaryInfo.innerHTML = `📊 <strong>${products.length} products available</strong> - Select quantities above to build your purchase order.`;
    container.appendChild(summaryInfo);
}

function validateQuantity(input, maxQuantity) {
    const value = parseInt(input.value);
    if (value > maxQuantity) {
        input.value = maxQuantity;
        showTooltip(input, `Maximum available: ${maxQuantity}`);
    }
    if (value < 0) {
        input.value = 0;
    }
}

function showTooltip(element, message) {
    // Remove existing tooltip
    const existingTooltip = document.querySelector('.quantity-tooltip');
    if (existingTooltip) {
        existingTooltip.remove();
    }

    // Create tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'quantity-tooltip';
    tooltip.textContent = message;
    tooltip.style.cssText = `
        position: absolute;
        background: #dc2626;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        z-index: 1000;
        pointer-events: none;
        transform: translateX(-50%);
    `;

    // Position tooltip
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 + 'px';
    tooltip.style.top = rect.top - 30 + 'px';

    document.body.appendChild(tooltip);

    // Remove tooltip after 2 seconds
    setTimeout(() => {
        tooltip.remove();
    }, 2000);
}

function updatePOSummary() {
    let subtotal = 0;
    let totalItems = 0;
    let selectedProducts = 0;

    products.forEach(product => {
        const qtyInput = document.getElementById(`po-qty-${product.id}`);
        const quantity = parseInt(qtyInput?.value || 0);
        if (quantity > 0) {
            subtotal += quantity * product.costPrice;
            totalItems += quantity;
            selectedProducts++;
        }
    });

    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + tax;

    // Update summary display
    document.getElementById('poSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('poTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('poTotal').textContent = `$${total.toFixed(2)}`;

    // Update summary section with additional info
    const summarySection = document.querySelector('.po-summary');
    if (summarySection) {
        // Remove existing info row
        const existingInfo = summarySection.querySelector('.po-summary-info');
        if (existingInfo) {
            existingInfo.remove();
        }

        // Add summary info
        if (selectedProducts > 0) {
            const infoRow = document.createElement('div');
            infoRow.className = 'po-summary-info';
            infoRow.style.cssText = 'padding: 8px 0; font-size: 13px; color: #6b7280; border-bottom: 1px solid #e5e7eb; margin-bottom: 8px;';
            infoRow.innerHTML = `📦 ${selectedProducts} product types • ${totalItems} total items`;
            summarySection.insertBefore(infoRow, summarySection.firstChild);
        }
    }

    // Enable/disable confirmation based on selection
    const hasSelection = selectedProducts > 0;
    const confirmBtn = document.getElementById('confirmPOBtn');
    if (confirmBtn && !hasSelection) {
        confirmBtn.disabled = true;
        confirmBtn.title = 'Please select at least one product';
    }
}

function updatePOConfirmationState() {
    const checkboxes = [
        document.getElementById('poConfirmDetails'),
        document.getElementById('poConfirmSupplier'),
        document.getElementById('poConfirmProducts')
    ];

    const allChecked = checkboxes.every(cb => cb.checked);
    document.getElementById('confirmPOBtn').disabled = !allChecked;

    // Add event listeners to checkboxes
    checkboxes.forEach(cb => {
        cb.addEventListener('change', updatePOConfirmationState);
    });
}

function savePODraft() {
    const poData = collectPOData();
    poData.status = 'Draft';

    // Generate PO ID
    poData.id = `PO-D${String(supplierInvoices.length + 1).padStart(3, '0')}`;

    // Add to supplier invoices as draft
    supplierInvoices.push(poData);
    loadSupplierInvoices();

    alert('PO saved as draft successfully!');
    closePOModal();
}

function confirmAndCreatePO() {
    const supplier = document.getElementById('poSupplier').value;
    const deliveryDate = document.getElementById('poDeliveryDate').value;

    if (!supplier) {
        alert('Please select a supplier');
        return;
    }

    if (!deliveryDate) {
        alert('Please set expected delivery date');
        return;
    }

    const poData = collectPOData();
    poData.status = 'Confirmed';

    // Generate PO ID
    poData.id = `PO-C${String(supplierInvoices.length + 1).padStart(3, '0')}`;

    // Add to supplier invoices
    supplierInvoices.push(poData);
    loadSupplierInvoices();

    alert(`Purchase Order ${poData.id} created successfully!`);
    closePOModal();
}

function collectPOData() {
    const selectedProducts = [];
    let totalAmount = 0;

    products.forEach(product => {
        const qtyInput = document.getElementById(`po-qty-${product.id}`);
        const quantity = parseInt(qtyInput?.value || 0);
        if (quantity > 0) {
            const lineTotal = quantity * product.costPrice;
            selectedProducts.push({
                productId: product.id,
                name: product.name,
                sku: product.sku,
                quantity: quantity,
                quantityReceived: 0, // Track received quantities
                unitPrice: product.costPrice,
                total: lineTotal,
                status: 'pending' // pending, partial, received
            });
            totalAmount += lineTotal;

            // Update product ordered quantity in inventory
            if (product.inventory) {
                product.inventory.ordered += quantity;
                product.inventory.lastOrdered = new Date().toISOString().split('T')[0];
                product.inventory.status = determineStockStatus(product);
            }
        }
    });

    const tax = totalAmount * 0.1;
    const finalTotal = totalAmount + tax;

    return {
        date: new Date().toISOString().split('T')[0],
        dueDate: document.getElementById('poDeliveryDate').value,
        supplier: document.getElementById('poSupplier').value,
        paymentTerms: document.getElementById('poPaymentTerms').value,
        amount: finalTotal,
        products: selectedProducts,
        tax: tax,
        subtotal: totalAmount,
        status: 'pending', // pending, partial, received, cancelled
        receivingStatus: 'awaiting' // awaiting, partial, complete
    };
}

function clearPOForm() {
    document.getElementById('poSupplier').value = '';
    document.getElementById('poDeliveryDate').value = '';
    document.getElementById('poPaymentTerms').value = 'net30';

    // Clear checkboxes
    document.getElementById('poConfirmDetails').checked = false;
    document.getElementById('poConfirmSupplier').checked = false;
    document.getElementById('poConfirmProducts').checked = false;

    // Clear quantities
    products.forEach(product => {
        const qtyInput = document.getElementById(`po-qty-${product.id}`);
        if (qtyInput) qtyInput.value = '';
    });

    updatePOSummary();
}

function closePOModal() {
    document.getElementById('poCreationModal').style.display = 'none';
}

// PO Recording Functions
function openPORecordingModal() {
    const modal = document.getElementById('poRecordingModal');

    // Set default date to today
    document.getElementById('recordPODate').value = new Date().toISOString().split('T')[0];

    // Set default delivery date to 30 days from now
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 30);
    document.getElementById('recordPODelivery').value = deliveryDate.toISOString().split('T')[0];

    modal.style.display = 'block';
}

function saveRecordedPO() {
    const poNumber = document.getElementById('recordPONumber').value;
    const supplier = document.getElementById('recordPOSupplier').value;
    const amount = parseFloat(document.getElementById('recordPOAmount').value);

    if (!poNumber || !supplier || !amount) {
        alert('Please fill in all required fields');
        return;
    }

    const recordedPO = {
        id: poNumber,
        date: document.getElementById('recordPODate').value,
        dueDate: document.getElementById('recordPODelivery').value,
        amount: amount,
        status: document.getElementById('recordPOStatus').value,
        supplier: supplier,
        notes: document.getElementById('recordPONotes').value,
        recorded: true
    };

    supplierInvoices.push(recordedPO);
    loadSupplierInvoices();

    alert('PO recorded successfully!');
    closePORecordingModal();
}

function closePORecordingModal() {
    document.getElementById('poRecordingModal').style.display = 'none';

    // Clear form
    document.getElementById('recordPONumber').value = '';
    document.getElementById('recordPOSupplier').value = '';
    document.getElementById('recordPOAmount').value = '';
    document.getElementById('recordPONotes').value = '';
}

// PO Management Functions
function editPO(poId) {
    const po = supplierInvoices.find(inv => inv.id === poId);
    if (!po) {
        alert('PO not found');
        return;
    }

    // Open PO creation modal in edit mode
    openPOCreationModal();

    // Populate form with existing data
    document.getElementById('poSupplier').value = po.supplier || '';
    document.getElementById('poDeliveryDate').value = po.dueDate || '';
    document.getElementById('poPaymentTerms').value = po.paymentTerms || 'net30';

    // Update modal title
    document.getElementById('poModalTitle').textContent = `Edit PO ${poId}`;

    // Change button text
    document.getElementById('confirmPOBtn').textContent = 'Update PO';
    document.getElementById('confirmPOBtn').onclick = () => updatePO(poId);
}

function updatePO(poId) {
    const poIndex = supplierInvoices.findIndex(inv => inv.id === poId);
    if (poIndex === -1) {
        alert('PO not found');
        return;
    }

    const updatedData = collectPOData();
    updatedData.id = poId;
    updatedData.status = 'Updated';

    supplierInvoices[poIndex] = { ...supplierInvoices[poIndex], ...updatedData };
    loadSupplierInvoices();

    alert(`PO ${poId} updated successfully!`);
    closePOModal();
}

function recordPODelivery(poId) {
    const po = supplierInvoices.find(inv => inv.id === poId);
    if (!po) {
        alert('PO not found');
        return;
    }

    const modal = document.getElementById('poDeliveryModal');
    document.getElementById('deliveryPONumber').value = poId;
    document.getElementById('deliveryDate').value = new Date().toISOString().split('T')[0];

    modal.style.display = 'block';
}

function saveDeliveryRecord() {
    const poId = document.getElementById('deliveryPONumber').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    const quantity = document.getElementById('deliveryQuantity').value;
    const condition = document.getElementById('deliveryCondition').value;
    const notes = document.getElementById('deliveryNotes').value;

    if (!deliveryDate || !quantity) {
        alert('Please fill in delivery date and quantity');
        return;
    }

    const poIndex = supplierInvoices.findIndex(inv => inv.id === poId);
    if (poIndex !== -1) {
        supplierInvoices[poIndex].status = 'Delivered';
        supplierInvoices[poIndex].deliveryDate = deliveryDate;
        supplierInvoices[poIndex].deliveredQuantity = quantity;
        supplierInvoices[poIndex].deliveryCondition = condition;
        supplierInvoices[poIndex].deliveryNotes = notes;

        loadSupplierInvoices();
        alert('Delivery recorded successfully!');
    }

    closePODeliveryModal();
}

function closePODeliveryModal() {
    document.getElementById('poDeliveryModal').style.display = 'none';

    // Clear form
    document.getElementById('deliveryQuantity').value = '';
    document.getElementById('deliveryNotes').value = '';
}

// Customer Sales Order from PO Functions
function createCustomerInvoiceFromPOList() {
    // Get the latest PO or let user select
    if (supplierInvoices.length === 0) {
        alert('No purchase orders available to create customer sales order from');
        return;
    }

    // For demo, use the first PO
    const po = supplierInvoices[0];
    openCustomerInvoiceFromPOModal(po);
}

function createCustomerInvoiceFromPO(poId) {
    const po = supplierInvoices.find(inv => inv.id === poId);
    if (!po) {
        alert('Purchase Order not found');
        return;
    }

    openCustomerInvoiceFromPOModal(po);
}

function openCustomerInvoiceFromPOModal(sourcePO = null) {
    const modal = document.getElementById('customerInvoiceFromPOModal');
    const title = document.getElementById('customerInvoiceModalTitle');

    if (sourcePO) {
        title.textContent = `Create Customer Sales Order from PO ${sourcePO.id}`;
        populateInvoiceFromPO(sourcePO);
    } else {
        title.textContent = 'Create Customer Sales Order from Purchase Order';
        clearInvoiceForm();
    }

    loadInvoiceProductList();
    updateInvoiceConfirmationState();
    addInvoiceScrollIndicator();
    modal.style.display = 'block';

    // Ensure button event listener is attached
    setTimeout(() => {
        const confirmBtn = document.getElementById('confirmInvoiceBtn');
        if (confirmBtn) {
            // Remove existing listener if any
            confirmBtn.removeEventListener('click', confirmAndCreateCustomerInvoice);
            // Add fresh listener
            confirmBtn.addEventListener('click', confirmAndCreateCustomerInvoice);
            console.log('Event listener attached to confirm button');
        }

        // Focus on first input for better UX
        const firstInput = modal.querySelector('select, input');
        if (firstInput) firstInput.focus();
    }, 100);
}

function populateInvoiceFromPO(po) {
    // Set due date (30 days from now)
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 30);
    document.getElementById('invoiceDueDate').value = dueDate.toISOString().split('T')[0];

    // Set default shipment method
    document.getElementById('invoiceShipmentMethod').value = 'standard';

    // Store the source PO for reference
    window.currentSourcePO = po;

    // Pre-select products based on PO
    setTimeout(() => {
        populateInvoiceProductsFromPO(po);
        updateInvoiceSummary();
    }, 100);
}

function populateInvoiceProductsFromPO(po) {
    // Get products from the PO
    let poProducts = [];

    if (po.products && po.products.length > 0) {
        // Use enhanced PO product data
        poProducts = po.products;
    } else if (po.items && po.items.length > 0) {
        // Use legacy PO items
        poProducts = po.items;
    } else {
        // Fallback: use all current products (for demo purposes)
        console.log('No specific products found in PO, using current product list');
        return;
    }

    // Clear all quantities first and reset styling
    products.forEach(product => {
        const qtyInput = document.getElementById(`invoice-qty-${product.id}`);
        if (qtyInput) {
            qtyInput.value = '';
            qtyInput.style.backgroundColor = '';
            qtyInput.style.borderColor = '';

            // Reset product item styling
            const productItem = qtyInput.closest('.po-product-item');
            if (productItem) {
                productItem.style.backgroundColor = '';
                productItem.style.borderColor = '';

                // Remove existing badges
                const existingBadge = productItem.querySelector('.po-badge');
                if (existingBadge) {
                    existingBadge.remove();
                }
            }
        }
    });

    // Set quantities for products in the PO
    poProducts.forEach(poItem => {
        const productId = poItem.productId || poItem.id;
        const quantity = poItem.quantity;
        const costPrice = poItem.unitPrice || 0;

        // Find the corresponding product to get sell price
        const product = products.find(p => p.id === productId);
        const sellPrice = product ? product.sellPrice : 0;
        const margin = sellPrice > 0 ? ((sellPrice - costPrice) / sellPrice * 100).toFixed(1) : 0;

        const quantityInput = document.getElementById(`invoice-qty-${productId}`);
        if (quantityInput) {
            quantityInput.value = quantity;
            // Highlight pre-filled items
            quantityInput.style.backgroundColor = '#dcfce7';
            quantityInput.style.borderColor = '#10b981';

            // Add visual indicator
            const productItem = quantityInput.closest('.po-product-item');
            if (productItem) {
                productItem.style.backgroundColor = '#f0fdf4';
                productItem.style.borderColor = '#10b981';
                productItem.style.boxShadow = '0 2px 8px rgba(16, 185, 129, 0.2)';

                // Add "From PO" badge with pricing info
                const badge = document.createElement('div');
                badge.className = 'po-badge';
                badge.style.cssText = `
                    background: linear-gradient(135deg, #10b981, #059669);
                    color: white;
                    padding: 4px 8px;
                    border-radius: 12px;
                    font-size: 10px;
                    font-weight: 600;
                    margin-top: 4px;
                    display: inline-block;
                    box-shadow: 0 2px 4px rgba(16, 185, 129, 0.3);
                `;
                badge.innerHTML = `
                    🛒 From PO • Cost: $${costPrice.toFixed(2)} • Sell: $${sellPrice.toFixed(2)} • Margin: ${margin}%
                `;

                const productDetails = productItem.querySelector('.po-product-details');
                if (productDetails) {
                    productDetails.appendChild(badge);
                }
            }
        }
    });

    // Show summary of pre-filled items
    showPOProductsSummary(poProducts, po);
}

function showPOProductsSummary(poProducts, po) {
    const container = document.getElementById('invoiceProductList');

    // Remove existing summary
    const existingSummary = container.querySelector('.po-products-summary');
    if (existingSummary) {
        existingSummary.remove();
    }

    // Calculate financial summary
    let totalCostValue = 0;
    let totalSellValue = 0;
    let totalQuantity = 0;

    poProducts.forEach(item => {
        const product = products.find(p => p.id === (item.productId || item.id));
        const quantity = item.quantity || 0;
        const costPrice = item.unitPrice || 0;
        const sellPrice = product ? product.sellPrice : 0;

        totalQuantity += quantity;
        totalCostValue += quantity * costPrice;
        totalSellValue += quantity * sellPrice;
    });

    const totalMargin = totalSellValue > 0 ? ((totalSellValue - totalCostValue) / totalSellValue * 100).toFixed(1) : 0;
    const totalProfit = totalSellValue - totalCostValue;

    // Create summary
    const summary = document.createElement('div');
    summary.className = 'po-products-summary';
    summary.style.cssText = `
        background: linear-gradient(135deg, #3b82f6, #1d4ed8);
        color: white;
        padding: 20px;
        border-radius: 12px;
        margin-bottom: 20px;
        box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;

    const supplierName = po.supplier || 'Supplier';

    summary.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
            <span style="font-size: 24px;">📄</span>
            <div>
                <div style="font-weight: 700; font-size: 18px;">Creating Customer Sales Order from PO ${po.id}</div>
                <div style="opacity: 0.9; font-size: 14px;">Supplier: ${supplierName} • Date: ${formatDate(po.date)}</div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 16px;">
            <div style="background: rgba(255, 255, 255, 0.15); padding: 12px; border-radius: 8px;">
                <div style="font-size: 12px; opacity: 0.8; margin-bottom: 4px;">PRODUCTS & QUANTITY</div>
                <div style="font-weight: 700; font-size: 16px;">${poProducts.length} types • ${totalQuantity} items</div>
            </div>
            <div style="background: rgba(255, 255, 255, 0.15); padding: 12px; border-radius: 8px;">
                <div style="font-size: 12px; opacity: 0.8; margin-bottom: 4px;">YOUR COST (PO)</div>
                <div style="font-weight: 700; font-size: 16px;">$${totalCostValue.toFixed(2)}</div>
            </div>
            <div style="background: rgba(255, 255, 255, 0.15); padding: 12px; border-radius: 8px;">
                <div style="font-size: 12px; opacity: 0.8; margin-bottom: 4px;">CUSTOMER WILL PAY</div>
                <div style="font-weight: 700; font-size: 16px;">$${totalSellValue.toFixed(2)}</div>
            </div>
            <div style="background: rgba(255, 255, 255, 0.15); padding: 12px; border-radius: 8px;">
                <div style="font-size: 12px; opacity: 0.8; margin-bottom: 4px;">PROFIT MARGIN</div>
                <div style="font-weight: 700; font-size: 16px;">${totalMargin}% ($${totalProfit.toFixed(2)})</div>
            </div>
        </div>

        <div style="background: rgba(255, 255, 255, 0.1); padding: 12px; border-radius: 8px; font-size: 13px; line-height: 1.5;">
            <strong>💡 Smart Invoice Creation:</strong> Products and quantities are pre-filled from your purchase order.
            The invoice will use <strong>sell prices</strong> for billing customers, while you paid <strong>cost prices</strong> to suppliers.
            <br><strong>Partial Sales:</strong> Adjust quantities below for partial customer orders.
        </div>
    `;

    // Insert at the beginning of the product list
    const firstChild = container.firstChild;
    container.insertBefore(summary, firstChild);
}

function loadInvoiceProductList() {
    const container = document.getElementById('invoiceProductList');
    container.innerHTML = '';

    // Add header info
    const headerInfo = document.createElement('div');
    headerInfo.style.cssText = 'margin-bottom: 16px; padding: 12px; background: #e0f2fe; border-radius: 6px; font-size: 14px; color: #0369a1;';
    headerInfo.innerHTML = '💡 <strong>Tip:</strong> Adjust quantities for partial sales or add additional products. Prices shown are sell prices for customers.';
    container.appendChild(headerInfo);

    products.forEach((product, index) => {
        const productItem = document.createElement('div');
        productItem.className = 'po-product-item';
        productItem.innerHTML = `
            <div class="po-product-info">
                <div class="po-product-name">${product.name}</div>
                <div class="po-product-details">
                    SKU: ${product.sku} | Sell Price: $${product.sellPrice.toFixed(2)} |
                    Available: ${product.quantity} units |
                    Category: ${product.category || 'General'}
                </div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                <input type="number"
                       id="invoice-qty-${product.id}"
                       class="po-quantity-input"
                       placeholder="0"
                       min="0"
                       max="${product.quantity}"
                       onchange="updateInvoiceSummary()"
                       oninput="validateInvoiceQuantity(this, ${product.quantity})">
                <small style="color: #6b7280; font-size: 11px;">Max: ${product.quantity}</small>
            </div>
        `;
        container.appendChild(productItem);
    });

    // Add summary info at bottom
    const summaryInfo = document.createElement('div');
    summaryInfo.style.cssText = 'margin-top: 16px; padding: 12px; background: #f0fdf4; border-radius: 6px; font-size: 14px; color: #166534;';
    summaryInfo.innerHTML = `📊 <strong>${products.length} products available</strong> - Select quantities above to build your customer sales order.`;
    container.appendChild(summaryInfo);
}

function validateInvoiceQuantity(input, maxQuantity) {
    const value = parseInt(input.value);
    if (value > maxQuantity) {
        input.value = maxQuantity;
        showTooltip(input, `Maximum available: ${maxQuantity}`);
    }
    if (value < 0) {
        input.value = 0;
    }
}

function updateInvoiceSummary() {
    let subtotal = 0;
    let totalItems = 0;
    let selectedProducts = 0;

    products.forEach(product => {
        const qtyInput = document.getElementById(`invoice-qty-${product.id}`);
        const quantity = parseInt(qtyInput?.value || 0);
        if (quantity > 0) {
            subtotal += quantity * product.sellPrice;
            totalItems += quantity;
            selectedProducts++;
        }
    });

    const shippingFee = 15.00; // Default shipping fee
    const total = subtotal + shippingFee;

    // Update summary display
    document.getElementById('invoiceSubtotalSummary').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('invoiceShippingFee').textContent = `$${shippingFee.toFixed(2)}`;
    document.getElementById('invoiceTotalSummary').textContent = `$${total.toFixed(2)}`;

    // Update summary section with additional info
    const summarySection = document.querySelector('#customerInvoiceFromPOModal .po-summary');
    if (summarySection) {
        // Remove existing info row
        const existingInfo = summarySection.querySelector('.invoice-summary-info');
        if (existingInfo) {
            existingInfo.remove();
        }

        // Add summary info
        if (selectedProducts > 0) {
            const infoRow = document.createElement('div');
            infoRow.className = 'invoice-summary-info';
            infoRow.style.cssText = 'padding: 8px 0; font-size: 13px; color: #6b7280; border-bottom: 1px solid #e5e7eb; margin-bottom: 8px;';
            infoRow.innerHTML = `📦 ${selectedProducts} product types • ${totalItems} total items`;
            summarySection.insertBefore(infoRow, summarySection.firstChild);
        }
    }

    // Update confirmation state
    updateInvoiceConfirmationState();
}

function updateInvoiceConfirmationState() {
    console.log('updateInvoiceConfirmationState called');

    try {
        const confirmBtn = document.getElementById('confirmInvoiceBtn');
        if (!confirmBtn) {
            console.log('Confirm button not found');
            return;
        }

        // For now, keep the button enabled to test functionality
        // We can add validation back later once we confirm the basic function works
        confirmBtn.disabled = false;
        confirmBtn.style.opacity = '1';
        confirmBtn.style.cursor = 'pointer';
        confirmBtn.title = 'Create customer sales order';

        console.log('Button enabled for testing');

        // Add event listeners for future validation
        const checkboxes = [
            document.getElementById('invoiceConfirmDetails'),
            document.getElementById('invoiceConfirmCustomer'),
            document.getElementById('invoiceConfirmPricing')
        ];

        checkboxes.forEach(cb => {
            if (cb && !cb.hasInvoiceListener) {
                cb.addEventListener('change', updateInvoiceConfirmationState);
                cb.hasInvoiceListener = true;
            }
        });

        const customer = document.getElementById('poInvoiceCustomer');
        if (customer && !customer.hasInvoiceListener) {
            customer.addEventListener('change', updateInvoiceConfirmationState);
            customer.hasInvoiceListener = true;
        }

    } catch (error) {
        console.error('Error in updateInvoiceConfirmationState:', error);
    }
}

function addInvoiceScrollIndicator() {
    const modalBody = document.querySelector('#customerInvoiceFromPOModal .modal-body');
    if (!modalBody) return;

    // Remove existing indicator
    const existingIndicator = modalBody.querySelector('.scroll-indicator');
    if (existingIndicator) {
        existingIndicator.remove();
    }

    // Add scroll indicator
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    indicator.textContent = '↓ Scroll to see more';
    modalBody.appendChild(indicator);

    // Hide indicator when scrolled to bottom
    modalBody.addEventListener('scroll', function() {
        const isAtBottom = modalBody.scrollTop + modalBody.clientHeight >= modalBody.scrollHeight - 10;
        indicator.style.display = isAtBottom ? 'none' : 'block';
    });

    // Hide indicator initially if content fits
    setTimeout(() => {
        const needsScroll = modalBody.scrollHeight > modalBody.clientHeight;
        indicator.style.display = needsScroll ? 'block' : 'none';
    }, 100);
}

function saveInvoiceDraft() {
    const invoiceData = collectInvoiceData();
    invoiceData.status = 'Draft';

    // Generate Invoice ID
    invoiceData.id = `INV-D${String(customerInvoices.length + 1).padStart(3, '0')}`;

    // Add to customer sales orders as draft
    customerInvoices.push(invoiceData);
    loadCustomerInvoices();

    alert('Customer Sales Order saved as draft successfully!');
    closeCustomerInvoiceFromPOModal();
}

function confirmAndCreateCustomerInvoice() {
    console.log('confirmAndCreateCustomerInvoice function called');

    try {
        // Get form values - using the correct ID for PO-to-Invoice modal
        const customer = document.getElementById('poInvoiceCustomer')?.value;
        const dueDate = document.getElementById('invoiceDueDate')?.value;
        const shipmentMethod = document.getElementById('invoiceShipmentMethod')?.value || 'standard';

        console.log('Form values:', { customer, dueDate, shipmentMethod });

        // Basic validation
        if (!customer || customer.trim() === '') {
            alert('Please select a customer');
            return;
        }

        if (!dueDate) {
            alert('Please set due date');
            return;
        }

        // Collect selected products
        const selectedProducts = [];
        let subtotal = 0;

        products.forEach(product => {
            const qtyInput = document.getElementById(`invoice-qty-${product.id}`);
            const quantity = parseInt(qtyInput?.value || 0);
            if (quantity > 0) {
                const lineTotal = quantity * product.sellPrice;
                selectedProducts.push({
                    productId: product.id,
                    quantity: quantity,
                    unitPrice: product.sellPrice,
                    total: lineTotal
                });
                subtotal += lineTotal;
            }
        });

        console.log('Selected products:', selectedProducts);

        if (selectedProducts.length === 0) {
            alert('Please select at least one product with quantity greater than 0');
            return;
        }

        // Create invoice
        const shippingFee = 15.00;
        const total = subtotal + shippingFee;

        const newInvoice = {
            id: `INV-C${String(customerInvoices.length + 1).padStart(3, '0')}`,
            date: new Date().toISOString().split('T')[0],
            dueDate: dueDate,
            customer: customer,
            shipmentMethod: shipmentMethod,
            amount: total,
            status: 'Pending',
            items: selectedProducts.map(p => ({
                productId: p.productId,
                quantity: p.quantity,
                unitPrice: p.unitPrice
            })),
            shippingFee: shippingFee,
            sourcePO: window.currentSourcePO ? window.currentSourcePO.id : null
        };

        console.log('Creating invoice:', newInvoice);

        // Add to customer sales orders
        customerInvoices.push(newInvoice);
        loadCustomerInvoices();

        alert(`Customer Sales Order ${newInvoice.id} created successfully!\nCustomer: ${customer}\nTotal: $${total.toFixed(2)}`);
        closeCustomerInvoiceFromPOModal();

    } catch (error) {
        console.error('Error creating customer sales order:', error);
        alert('Error creating invoice: ' + error.message);
    }
}

function collectInvoiceData() {
    const selectedProducts = [];
    let totalAmount = 0;

    products.forEach(product => {
        const qtyInput = document.getElementById(`invoice-qty-${product.id}`);
        const quantity = parseInt(qtyInput?.value || 0);
        if (quantity > 0) {
            const lineTotal = quantity * product.sellPrice;
            selectedProducts.push({
                productId: product.id,
                quantity: quantity,
                unitPrice: product.sellPrice,
                total: lineTotal
            });
            totalAmount += lineTotal;
        }
    });

    const shippingFee = 15.00;
    const finalTotal = totalAmount + shippingFee;

    return {
        date: new Date().toISOString().split('T')[0],
        dueDate: document.getElementById('invoiceDueDate').value,
        customer: document.getElementById('invoiceCustomer').value,
        shipmentMethod: document.getElementById('invoiceShipmentMethod').value,
        amount: finalTotal,
        products: selectedProducts,
        shippingFee: shippingFee,
        subtotal: totalAmount,
        sourcePO: window.currentSourcePO ? window.currentSourcePO.id : null
    };
}

function clearInvoiceForm() {
    document.getElementById('invoiceCustomer').value = '';
    document.getElementById('invoiceDueDate').value = '';
    document.getElementById('invoiceShipmentMethod').value = 'standard';

    // Clear checkboxes
    document.getElementById('invoiceConfirmDetails').checked = false;
    document.getElementById('invoiceConfirmCustomer').checked = false;
    document.getElementById('invoiceConfirmPricing').checked = false;

    // Clear quantities
    products.forEach(product => {
        const qtyInput = document.getElementById(`invoice-qty-${product.id}`);
        if (qtyInput) qtyInput.value = '';
    });

    updateInvoiceSummary();
}

function closeCustomerInvoiceFromPOModal() {
    document.getElementById('customerInvoiceFromPOModal').style.display = 'none';
}

// Dashboard Statistics Functions
function updateCustomerDashboardStats() {
    const totalRevenue = customerInvoices.reduce((sum, inv) => sum + inv.amount, 0);
    const totalCount = customerInvoices.length;
    const pendingCount = customerInvoices.filter(inv => inv.status === 'Pending').length;

    // Calculate estimated profit (assuming 35% margin)
    const estimatedProfit = totalRevenue * 0.35;

    // Update DOM elements
    const revenueElement = document.getElementById('customerInvoiceRevenue');
    const countElement = document.getElementById('customerInvoiceCount');
    const pendingElement = document.getElementById('customerInvoicePending');
    const profitElement = document.getElementById('customerInvoiceProfit');

    if (revenueElement) revenueElement.textContent = `$${totalRevenue.toFixed(2)}`;
    if (countElement) countElement.textContent = totalCount;
    if (pendingElement) pendingElement.textContent = pendingCount;
    if (profitElement) profitElement.textContent = `$${estimatedProfit.toFixed(2)}`;
}

function updateSupplierDashboardStats() {
    const totalCost = supplierInvoices.reduce((sum, inv) => sum + inv.amount, 0);
    const totalCount = supplierInvoices.length;
    const pendingCount = supplierInvoices.filter(inv => inv.status === 'Pending').length;
    const deliveredCount = supplierInvoices.filter(inv => inv.status === 'Delivered').length;

    // Update DOM elements
    const costElement = document.getElementById('supplierInvoiceCost');
    const countElement = document.getElementById('supplierInvoiceCount');
    const pendingElement = document.getElementById('supplierInvoicePending');
    const deliveredElement = document.getElementById('supplierInvoiceDelivered');

    if (costElement) costElement.textContent = `$${totalCost.toFixed(2)}`;
    if (countElement) countElement.textContent = totalCount;
    if (pendingElement) pendingElement.textContent = pendingCount;
    if (deliveredElement) deliveredElement.textContent = deliveredCount;
}

// Enhanced UI Functions
function refreshCustomerData() {
    loadCustomerInvoices();
    updateCustomerDashboardStats();
    showNotification('Customer data refreshed successfully!', 'success');
}

function refreshSupplierData() {
    loadSupplierInvoices();
    updateSupplierDashboardStats();
    showNotification('Supplier data refreshed successfully!', 'success');
}

function filterInvoices(type) {
    // Placeholder for filter functionality
    showNotification(`${type} invoice filtering coming soon!`, 'info');
}

function bulkActions(type) {
    // Placeholder for bulk actions functionality
    showNotification(`${type} bulk actions coming soon!`, 'info');
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Auto-remove after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// Utility Functions
function getStatusClass(status) {
    const statusMap = {
        'Paid': 'status-paid',
        'Pending': 'status-pending',
        'Overdue': 'status-overdue',
        'Shipped': 'status-shipped',
        'Delivered': 'status-delivered',
        'Draft': 'status-draft'
    };
    return statusMap[status] || 'status-pending';
}

// Export Functions
function exportInvoices(type) {
    const invoices = type === 'customer' ? customerInvoices : supplierInvoices;
    const title = type === 'customer' ? 'Customer Sales Orders' : 'Purchase Orders';

    if (invoices.length === 0) {
        alert(`No ${title.toLowerCase()} to export`);
        return;
    }

    // Show export options modal
    showExportModal(invoices, type, title);
}

function showExportModal(invoices, type, title) {
    // Create modal HTML
    const modalHTML = `
        <div id="exportModal" class="modal" style="display: block;">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Export ${title}</h3>
                    <span class="close" onclick="closeExportModal()">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="export-options">
                        <h4>Export Format</h4>
                        <div class="export-format-options">
                            <label class="export-option">
                                <input type="radio" name="exportFormat" value="excel" checked>
                                <span>📊 Excel Spreadsheet (.xlsx)</span>
                            </label>
                            <label class="export-option">
                                <input type="radio" name="exportFormat" value="csv">
                                <span>📄 CSV File (.csv)</span>
                            </label>
                            <label class="export-option">
                                <input type="radio" name="exportFormat" value="pdf">
                                <span>📋 PDF Report (.pdf)</span>
                            </label>
                        </div>

                        <h4>Export Options</h4>
                        <div class="export-data-options">
                            <label class="export-option">
                                <input type="checkbox" name="includeDetails" checked>
                                <span>Include detailed product information</span>
                            </label>
                            <label class="export-option">
                                <input type="checkbox" name="includeSummary" checked>
                                <span>Include summary statistics</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="closeExportModal()">Cancel</button>
                    <button class="btn btn-primary" onclick="performExport('${type}')">📥 Export</button>
                </div>
            </div>
        </div>
    `;

    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function closeExportModal() {
    const modal = document.getElementById('exportModal');
    if (modal) {
        modal.remove();
    }
}

function performExport(type) {
    const format = document.querySelector('input[name="exportFormat"]:checked').value;
    const includeDetails = document.querySelector('input[name="includeDetails"]').checked;
    const includeSummary = document.querySelector('input[name="includeSummary"]').checked;

    const invoices = type === 'customer' ? customerInvoices : supplierInvoices;

    switch (format) {
        case 'excel':
            exportToExcel(invoices, type, includeDetails, includeSummary);
            break;
        case 'csv':
            exportToCSV(invoices, type, includeDetails);
            break;
        case 'pdf':
            exportToPDF(invoices, type, includeDetails, includeSummary);
            break;
    }

    closeExportModal();
}

function exportToExcel(invoices, type, includeDetails, includeSummary) {
    const wb = XLSX.utils.book_new();
    const title = type === 'customer' ? 'Customer Sales Orders' : 'Purchase Orders';

    // Prepare main data
    const mainData = invoices.map(invoice => ({
        'ID': invoice.id,
        'Date': formatDate(invoice.date),
        'Due Date': formatDate(invoice.dueDate),
        'Customer/Supplier': invoice.customer || invoice.supplier || 'N/A',
        'Amount': `$${invoice.amount.toFixed(2)}`,
        'Status': invoice.status,
        'Shipment Method': invoice.shipmentMethod || 'N/A'
    }));

    // Create main worksheet
    const ws = XLSX.utils.json_to_sheet(mainData);
    XLSX.utils.book_append_sheet(wb, ws, title);

    // Add detailed products sheet if requested
    if (includeDetails) {
        const detailsData = [];
        invoices.forEach(invoice => {
            if (invoice.products && invoice.products.length > 0) {
                invoice.products.forEach(product => {
                    detailsData.push({
                        'Invoice ID': invoice.id,
                        'Product Name': product.name || 'N/A',
                        'SKU': product.sku || 'N/A',
                        'Quantity': product.quantity || 0,
                        'Unit Price': `$${(product.price || 0).toFixed(2)}`,
                        'Total': `$${(product.total || 0).toFixed(2)}`
                    });
                });
            }
        });

        if (detailsData.length > 0) {
            const detailsWs = XLSX.utils.json_to_sheet(detailsData);
            XLSX.utils.book_append_sheet(wb, detailsWs, 'Product Details');
        }
    }

    // Add summary sheet if requested
    if (includeSummary) {
        const totalAmount = invoices.reduce((sum, inv) => sum + inv.amount, 0);
        const statusCounts = {};
        invoices.forEach(inv => {
            statusCounts[inv.status] = (statusCounts[inv.status] || 0) + 1;
        });

        const summaryData = [
            { 'Metric': 'Total Invoices', 'Value': invoices.length },
            { 'Metric': 'Total Amount', 'Value': `$${totalAmount.toFixed(2)}` },
            { 'Metric': 'Average Amount', 'Value': `$${(totalAmount / invoices.length).toFixed(2)}` },
            ...Object.entries(statusCounts).map(([status, count]) => ({
                'Metric': `${status} Count`,
                'Value': count
            }))
        ];

        const summaryWs = XLSX.utils.json_to_sheet(summaryData);
        XLSX.utils.book_append_sheet(wb, summaryWs, 'Summary');
    }

    // Save file
    const fileName = `${title.replace(' ', '_')}_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(wb, fileName);

    showNotification(`${title} exported to Excel successfully!`, 'success');
}

function exportToCSV(invoices, type, includeDetails) {
    const title = type === 'customer' ? 'Customer_Invoices' : 'Purchase_Orders';

    // Prepare CSV data
    const csvData = invoices.map(invoice => ({
        'ID': invoice.id,
        'Date': formatDate(invoice.date),
        'Due Date': formatDate(invoice.dueDate),
        'Customer/Supplier': invoice.customer || invoice.supplier || 'N/A',
        'Amount': invoice.amount.toFixed(2),
        'Status': invoice.status,
        'Shipment Method': invoice.shipmentMethod || 'N/A'
    }));

    // Convert to CSV
    const ws = XLSX.utils.json_to_sheet(csvData);
    const csv = XLSX.utils.sheet_to_csv(ws);

    // Download CSV
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${title}_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showNotification(`${title.replace('_', ' ')} exported to CSV successfully!`, 'success');
}

function exportToPDF(invoices, type, includeDetails, includeSummary) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const title = type === 'customer' ? 'Customer Sales Orders Report' : 'Purchase Orders Report';

    // Header
    doc.setFontSize(20);
    doc.text(title, 20, 30);
    doc.setFontSize(12);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 40);
    doc.text(`Total Records: ${invoices.length}`, 20, 50);

    let yPosition = 70;

    // Summary if requested
    if (includeSummary) {
        const totalAmount = invoices.reduce((sum, inv) => sum + inv.amount, 0);
        doc.setFontSize(14);
        doc.text('Summary', 20, yPosition);
        yPosition += 10;
        doc.setFontSize(10);
        doc.text(`Total Amount: $${totalAmount.toFixed(2)}`, 20, yPosition);
        yPosition += 10;
        doc.text(`Average Amount: $${(totalAmount / invoices.length).toFixed(2)}`, 20, yPosition);
        yPosition += 20;
    }

    // Invoice list
    doc.setFontSize(14);
    doc.text('Invoice List', 20, yPosition);
    yPosition += 15;

    doc.setFontSize(8);
    invoices.forEach((invoice, index) => {
        if (yPosition > 270) {
            doc.addPage();
            yPosition = 20;
        }

        const customerSupplier = invoice.customer || invoice.supplier || 'N/A';
        doc.text(`${invoice.id} | ${formatDate(invoice.date)} | ${customerSupplier} | $${invoice.amount.toFixed(2)} | ${invoice.status}`, 20, yPosition);
        yPosition += 8;
    });

    // Save PDF
    const fileName = `${title.replace(' ', '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);

    showNotification(`${title} exported to PDF successfully!`, 'success');
}

// Purchase Order Specific Export Functions
function downloadPOReport(poId, format) {
    const po = supplierInvoices.find(inv => inv.id === poId);
    if (!po) {
        alert('Purchase Order not found');
        return;
    }

    if (format === 'excel') {
        downloadPOReportAsExcel(po);
    } else {
        downloadPOReportAsPDF(po);
    }
}

function downloadPOReportAsExcel(po) {
    const wb = XLSX.utils.book_new();

    // PO Summary Sheet
    const summaryData = [
        { 'Field': 'Purchase Order ID', 'Value': po.id },
        { 'Field': 'Supplier', 'Value': po.supplier || 'N/A' },
        { 'Field': 'Order Date', 'Value': formatDate(po.date) },
        { 'Field': 'Expected Delivery', 'Value': formatDate(po.dueDate) },
        { 'Field': 'Total Amount', 'Value': `$${po.amount.toFixed(2)}` },
        { 'Field': 'Status', 'Value': po.status },
        { 'Field': 'Payment Terms', 'Value': po.paymentTerms || 'Net 30' },
        { 'Field': 'Delivery Date', 'Value': po.deliveryDate ? formatDate(po.deliveryDate) : 'Pending' },
        { 'Field': 'Delivery Condition', 'Value': po.deliveryCondition || 'N/A' }
    ];

    const summaryWs = XLSX.utils.json_to_sheet(summaryData);
    XLSX.utils.book_append_sheet(wb, summaryWs, 'PO Summary');

    // Products Sheet
    if (po.products && po.products.length > 0) {
        const productsData = po.products.map(product => {
            const productInfo = products.find(p => p.id === product.productId);
            return {
                'Product Name': productInfo?.name || 'N/A',
                'SKU': productInfo?.sku || 'N/A',
                'Quantity Ordered': product.quantity,
                'Unit Cost': `$${(product.unitPrice || 0).toFixed(2)}`,
                'Line Total': `$${(product.total || 0).toFixed(2)}`,
                'Category': productInfo?.category || 'N/A'
            };
        });

        const productsWs = XLSX.utils.json_to_sheet(productsData);
        XLSX.utils.book_append_sheet(wb, productsWs, 'Products');
    }

    // Cost Analysis Sheet
    const costAnalysis = [
        { 'Component': 'Subtotal', 'Amount': `$${(po.subtotal || po.amount).toFixed(2)}` },
        { 'Component': 'Tax', 'Amount': `$${(po.tax || 0).toFixed(2)}` },
        { 'Component': 'Shipping', 'Amount': `$${(po.shipping || 0).toFixed(2)}` },
        { 'Component': 'Total', 'Amount': `$${po.amount.toFixed(2)}` }
    ];

    const costWs = XLSX.utils.json_to_sheet(costAnalysis);
    XLSX.utils.book_append_sheet(wb, costWs, 'Cost Analysis');

    // Save file
    XLSX.writeFile(wb, `PO_Report_${po.id}_${new Date().toISOString().split('T')[0]}.xlsx`);
    showNotification(`PO Report for ${po.id} exported to Excel successfully!`, 'success');
}

function downloadPOReportAsPDF(po) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Header
    doc.setFontSize(20);
    doc.text('Purchase Order Report', 20, 30);
    doc.setFontSize(12);
    doc.text(`PO ID: ${po.id}`, 20, 45);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 20, 55);

    // PO Details
    doc.setFontSize(14);
    doc.text('Purchase Order Details', 20, 75);
    doc.setFontSize(10);

    let yPos = 90;
    const details = [
        `Supplier: ${po.supplier || 'N/A'}`,
        `Order Date: ${formatDate(po.date)}`,
        `Expected Delivery: ${formatDate(po.dueDate)}`,
        `Total Amount: $${po.amount.toFixed(2)}`,
        `Status: ${po.status}`,
        `Payment Terms: ${po.paymentTerms || 'Net 30'}`
    ];

    details.forEach(detail => {
        doc.text(detail, 20, yPos);
        yPos += 8;
    });

    // Products
    if (po.products && po.products.length > 0) {
        yPos += 10;
        doc.setFontSize(14);
        doc.text('Ordered Products', 20, yPos);
        yPos += 15;

        doc.setFontSize(8);
        doc.text('Product Name', 20, yPos);
        doc.text('Qty', 100, yPos);
        doc.text('Unit Cost', 130, yPos);
        doc.text('Total', 170, yPos);
        yPos += 10;

        po.products.forEach(product => {
            if (yPos > 270) {
                doc.addPage();
                yPos = 20;
            }

            const productInfo = products.find(p => p.id === product.productId);
            doc.text(productInfo?.name || 'N/A', 20, yPos);
            doc.text(product.quantity.toString(), 100, yPos);
            doc.text(`$${(product.unitPrice || 0).toFixed(2)}`, 130, yPos);
            doc.text(`$${(product.total || 0).toFixed(2)}`, 170, yPos);
            yPos += 8;
        });
    }

    // Delivery Information
    if (po.deliveryDate || po.deliveryCondition) {
        yPos += 15;
        doc.setFontSize(14);
        doc.text('Delivery Information', 20, yPos);
        yPos += 15;
        doc.setFontSize(10);

        if (po.deliveryDate) {
            doc.text(`Delivery Date: ${formatDate(po.deliveryDate)}`, 20, yPos);
            yPos += 8;
        }
        if (po.deliveryCondition) {
            doc.text(`Condition: ${po.deliveryCondition}`, 20, yPos);
            yPos += 8;
        }
        if (po.deliveryNotes) {
            doc.text(`Notes: ${po.deliveryNotes}`, 20, yPos);
        }
    }

    // Save PDF
    doc.save(`PO_Report_${po.id}_${new Date().toISOString().split('T')[0]}.pdf`);
    showNotification(`PO Report for ${po.id} exported to PDF successfully!`, 'success');
}

function downloadPODeliveryReport(poId) {
    const po = supplierInvoices.find(inv => inv.id === poId);
    if (!po) {
        alert('Purchase Order not found');
        return;
    }

    if (!po.deliveryDate && !po.deliveryCondition) {
        alert('No delivery information available for this PO');
        return;
    }

    const wb = XLSX.utils.book_new();

    // Delivery Summary
    const deliveryData = [
        { 'Field': 'Purchase Order ID', 'Value': po.id },
        { 'Field': 'Supplier', 'Value': po.supplier || 'N/A' },
        { 'Field': 'Order Date', 'Value': formatDate(po.date) },
        { 'Field': 'Expected Delivery', 'Value': formatDate(po.dueDate) },
        { 'Field': 'Actual Delivery Date', 'Value': po.deliveryDate ? formatDate(po.deliveryDate) : 'Not delivered' },
        { 'Field': 'Delivery Status', 'Value': po.status },
        { 'Field': 'Delivery Condition', 'Value': po.deliveryCondition || 'N/A' },
        { 'Field': 'Delivered Quantity', 'Value': po.deliveredQuantity || 'N/A' },
        { 'Field': 'Delivery Notes', 'Value': po.deliveryNotes || 'N/A' }
    ];

    const deliveryWs = XLSX.utils.json_to_sheet(deliveryData);
    XLSX.utils.book_append_sheet(wb, deliveryWs, 'Delivery Report');

    // Performance Analysis
    if (po.deliveryDate && po.dueDate) {
        const expectedDate = new Date(po.dueDate);
        const actualDate = new Date(po.deliveryDate);
        const daysDifference = Math.ceil((actualDate - expectedDate) / (1000 * 60 * 60 * 24));

        const performanceData = [
            { 'Metric': 'Expected Delivery', 'Value': formatDate(po.dueDate) },
            { 'Metric': 'Actual Delivery', 'Value': formatDate(po.deliveryDate) },
            { 'Metric': 'Days Difference', 'Value': daysDifference },
            { 'Metric': 'On Time', 'Value': daysDifference <= 0 ? 'Yes' : 'No' },
            { 'Metric': 'Performance', 'Value': daysDifference <= 0 ? 'On Time' : `${daysDifference} days late` }
        ];

        const performanceWs = XLSX.utils.json_to_sheet(performanceData);
        XLSX.utils.book_append_sheet(wb, performanceWs, 'Performance');
    }

    // Save file
    XLSX.writeFile(wb, `Delivery_Report_${po.id}_${new Date().toISOString().split('T')[0]}.xlsx`);
    showNotification(`Delivery Report for ${po.id} exported successfully!`, 'success');
}

// Initialize dashboard stats on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCustomerDashboardStats();
    updateSupplierDashboardStats();
});

function deleteInvoice(id, type) {
    const invoiceType = type === 'customer' ? 'Customer Sales Order' : 'Purchase Order';
    const confirmMessage = `Are you sure you want to delete ${invoiceType} ${id}?\n\nThis action cannot be undone.`;
    
    if (confirm(confirmMessage)) {
        if (type === 'customer') {
            // Find the invoice to check if it has products (for inventory restoration)
            const invoice = customerInvoices.find(inv => inv.id === id);
            
            // If it's an enhanced customer sales order with products, restore inventory
            if (invoice && invoice.products && invoice.products.length > 0) {
                invoice.products.forEach(invoiceProduct => {
                    const product = products.find(p => p.id === invoiceProduct.id);
                    if (product) {
                        // Restore the quantities back to inventory
                        product.remaining += invoiceProduct.quantity;
                        product.shipped -= invoiceProduct.quantity;
                        
                        // Ensure shipped doesn't go below 0
                        if (product.shipped < 0) {
                            product.remaining += Math.abs(product.shipped);
                            product.shipped = 0;
                        }
                    }
                });
                
                // Refresh inventory display
                loadInventoryStatus();
            }
            
            // Remove from customer sales orders array
            customerInvoices = customerInvoices.filter(inv => inv.id !== id);
            loadCustomerInvoices();
        } else {
            // ✅ SYNC INVENTORY WHEN PO IS DELETED
            // Find the PO to check if it has products (for inventory sync)
            const po = supplierInvoices.find(inv => inv.id === id);

            // Remove from supplier invoices array
            supplierInvoices = supplierInvoices.filter(inv => inv.id !== id);

            // ✅ SYNC ALL PRODUCTS WITH REMAINING POs - Recalculate from scratch
            products.forEach(product => {
                syncInventoryWithPOs(product);
            });

            // Refresh all displays
            loadSupplierInvoices();
            loadInventoryStatus();
            loadProducts();
        }

        saveDataToStorage();
        alert(`✅ ${invoiceType} ${id} has been deleted successfully.\n\nInventory has been synced with remaining Purchase Orders!`);
    }
}

// Payment Management
function loadSupplierPayments() {
    const container = document.getElementById('supplierPaymentsList');
    container.innerHTML = '';
    
    supplierPayments.forEach(payment => {
        const div = document.createElement('div');
        div.className = 'payment-item';
        div.innerHTML = `
            <div class="payment-info">
                <div class="payment-amount">$${payment.amount.toFixed(2)}</div>
                <div class="payment-method">${payment.method}</div>
                <div class="payment-date">${formatDate(payment.date)}</div>
            </div>
            <button class="btn btn-danger btn-small" onclick="deleteSupplierPayment(${payment.id})">Delete</button>
        `;
        container.appendChild(div);
    });
}

function loadCustomerPayments() {
    const container = document.getElementById('customerPaymentsList');
    container.innerHTML = '';
    
    customerPayments.forEach(payment => {
        const div = document.createElement('div');
        div.className = 'payment-item';
        div.innerHTML = `
            <div class="payment-info">
                <div class="payment-amount">$${payment.amount.toFixed(2)}</div>
                <div class="payment-method">${payment.method}</div>
                <div class="payment-date">${formatDate(payment.date)}</div>
            </div>
            <button class="btn btn-danger btn-small" onclick="deleteCustomerPayment(${payment.id})">Delete</button>
        `;
        container.appendChild(div);
    });
}

// ✅ OLD PAYMENT FUNCTIONS REMOVED - PAYMENTS NOW INTEGRATED INTO INVOICE/PO CREATION

// ✅ QUOTE GENERATION SYSTEM
let selectedQuoteProducts = {};

function openQuoteModal() {
    console.log('Opening quote generation modal...');

    // ✅ SYNC WITH QUOTATION SECTION - Don't reset, sync instead
    syncQuoteModalWithQuotationSection();

    // Generate quote number
    const newQuoteNumber = `QUO-${String(customerQuotes.length + 1).padStart(3, '0')}`;
    document.getElementById('quoteNumber').value = newQuoteNumber;

    // Set valid until date (14 days from today)
    const today = new Date();
    const validUntil = new Date(today);
    validUntil.setDate(validUntil.getDate() + 14);
    document.getElementById('quoteValidUntil').value = validUntil.toISOString().split('T')[0];

    // Reset form fields (but keep product selections)
    document.getElementById('quoteCustomer').value = '';
    document.getElementById('quoteShipmentMethod').value = 'sea';
    document.getElementById('quoteOtherExpenses').value = '0';
    document.getElementById('quoteCommissionPercentage').value = '5.0';
    document.getElementById('quoteNotes').value = '';

    // ✅ REAL-TIME SYNC - Load updated product list with current selections
    loadQuoteProductSelectionList();

    // ✅ DYNAMIC UPDATES - Update quote summary with current selections
    updateQuoteSummary();

    // Show modal
    const modal = document.getElementById('quoteModal');
    modal.style.display = 'block';

    console.log('Quote modal opened with synced selections:', Object.keys(selectedQuoteProducts).length, 'products selected');
}

// ✅ REAL-TIME SYNCHRONIZATION BETWEEN QUOTATION SECTION AND QUOTE MODAL
function syncQuoteModalWithQuotationSection() {
    console.log('Syncing quote modal with Quotation Section selections...');

    // Clear existing selections in quote modal
    selectedQuoteProducts = {};

    // Get current selections from Quotation Section
    const quotationSectionSelections = Array.from(selectedProductsForQuote);

    console.log('Found', quotationSectionSelections.length, 'products selected in Quotation Section');

    // Sync selections to quote modal
    quotationSectionSelections.forEach(productId => {
        const product = products.find(p => p.id === productId);
        if (product) {
            // Get quantity from Quotation Section table
            const quantityInput = document.querySelector(`input[onchange*="updateProductQuantity('${productId}'"]`);
            const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;

            selectedQuoteProducts[productId] = {
                product: product,
                quantity: quantity
            };

            console.log(`Synced product: ${product.name} (Qty: ${quantity})`);
        }
    });

    console.log('Quote modal sync complete. Selected products:', Object.keys(selectedQuoteProducts).length);
}

// ✅ BIDIRECTIONAL SYNC - Update Quotation Section when quote modal changes
function syncQuotationSectionWithQuoteModal() {
    console.log('Syncing Quotation Section with quote modal selections...');

    // Clear current Quotation Section selections
    selectedProductsForQuote.clear();

    // Add quote modal selections to Quotation Section
    Object.keys(selectedQuoteProducts).forEach(productId => {
        selectedProductsForQuote.add(parseInt(productId));
    });

    // Update Quotation Section checkboxes
    document.querySelectorAll('.product-list-checkbox').forEach(checkbox => {
        const productId = parseInt(checkbox.dataset.productId);
        checkbox.checked = selectedProductsForQuote.has(productId);
    });

    // Update Quotation Section UI
    updateSelectAllCheckbox();
    updateQuoteButtonState();

    console.log('Quotation Section sync complete');
}

function closeQuoteModal() {
    document.getElementById('quoteModal').style.display = 'none';
    selectedQuoteProducts = {};
}

function loadQuoteProductSelectionList() {
    console.log('Loading quote product selection list with real-time sync...');
    const container = document.getElementById('quoteProductSelectionList');
    container.innerHTML = '';

    if (products.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 20px;">No products available</p>';
        return;
    }

    // ✅ CONSISTENT DATA - Use latest product data and maintain selections
    products.forEach(product => {
        const isSelected = selectedQuoteProducts[product.id];

        // ✅ QUOTATION-FOCUSED - Show quotation quantity, not inventory
        const quotationQty = product.quantity || 1; // Quotation quantity from table
        const availableForQuote = quotationQty; // Available for quotation (not inventory)

        const productItem = document.createElement('div');
        productItem.className = `product-selection-item ${isSelected ? 'selected' : ''}`;
        productItem.setAttribute('data-product-id', product.id); // For sync tracking

        productItem.innerHTML = `
            <input type="checkbox"
                   class="product-checkbox quote-modal-checkbox"
                   id="quote-product-${product.id}"
                   data-product-id="${product.id}"
                   ${isSelected ? 'checked' : ''}
                   onchange="toggleQuoteProductSelection(${product.id})">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-details">SKU: ${product.sku} | Sell Price: $${product.sellPrice.toFixed(2)}</div>
                ${product.isQuickAdded ? '<div class="quick-added-badge">⚡ Quick Added</div>' : ''}
            </div>
            <div class="product-availability">
                <div class="available-qty">${availableForQuote}</div>
                <div class="availability-label">Available for Quote</div>
            </div>
            <div class="quantity-controls">
                <label for="quote-qty-${product.id}" style="font-size: 12px; color: #6b7280;">Qty:</label>
                <input type="number"
                       class="quantity-input"
                       id="quote-qty-${product.id}"
                       min="1"
                       value="${isSelected ? selectedQuoteProducts[product.id].quantity : 1}"
                       ${!isSelected ? 'disabled' : ''}
                       onchange="updateQuoteProductQuantity(${product.id}, this.value)">
            </div>
        `;

        container.appendChild(productItem);
    });

    console.log('Quote product selection list loaded with', products.length, 'products,', Object.keys(selectedQuoteProducts).length, 'selected');
}

function toggleQuoteProductSelection(productId) {
    const checkbox = document.getElementById(`quote-product-${productId}`);
    const quantityInput = document.getElementById(`quote-qty-${productId}`);
    const productItem = checkbox.closest('.product-selection-item');

    if (checkbox.checked) {
        // Add product to selection
        const product = products.find(p => p.id === productId);
        const quantity = parseInt(quantityInput.value) || 1;

        selectedQuoteProducts[productId] = {
            product: product,
            quantity: quantity
        };

        quantityInput.disabled = false;
        quantityInput.value = quantity;
        productItem.classList.add('selected');

        // ✅ BIDIRECTIONAL SYNC - Update Quotation Section
        selectedProductsForQuote.add(productId);
        const quotationCheckbox = document.querySelector(`.product-list-checkbox[data-product-id="${productId}"]`);
        if (quotationCheckbox) {
            quotationCheckbox.checked = true;
        }
    } else {
        // Remove product from selection
        delete selectedQuoteProducts[productId];
        quantityInput.disabled = true;
        productItem.classList.remove('selected');

        // ✅ BIDIRECTIONAL SYNC - Update Quotation Section
        selectedProductsForQuote.delete(productId);
        const quotationCheckbox = document.querySelector(`.product-list-checkbox[data-product-id="${productId}"]`);
        if (quotationCheckbox) {
            quotationCheckbox.checked = false;
        }
    }

    // ✅ REAL-TIME UPDATES - Update both interfaces
    updateQuoteSummary();
    updateSelectAllCheckbox();
    updateQuoteButtonState();

    console.log('Product selection toggled:', productId, 'Selected:', checkbox.checked);
}

function updateQuoteProductQuantity(productId, newQuantity) {
    const quantity = Math.max(1, parseInt(newQuantity) || 1);

    if (selectedQuoteProducts[productId]) {
        selectedQuoteProducts[productId].quantity = quantity;
        document.getElementById(`quote-qty-${productId}`).value = quantity;
        updateQuoteSummary();
    }
}

// ✅ QUOTE SUMMARY CALCULATION WITH ENHANCED PRICING STRUCTURE AND REAL-TIME SYNC
function updateQuoteSummary() {
    console.log('Updating quote summary with', Object.keys(selectedQuoteProducts).length, 'selected products');

    // Calculate subtotal from selected products using sellPrice
    let subtotal = 0;
    let productCount = 0;
    Object.values(selectedQuoteProducts).forEach(item => {
        subtotal += item.product.sellPrice * item.quantity;
        productCount++;
    });

    // Get other expenses and commission percentage
    const otherExpenses = parseFloat(document.getElementById('quoteOtherExpenses')?.value) || 0;
    const commissionPercentage = parseFloat(document.getElementById('quoteCommissionPercentage')?.value) || 5.0;

    // ✅ MANUAL SHIPPING FEE INPUT
    const shipmentMethod = document.getElementById('quoteShipmentMethod')?.value || 'sea';
    const manualShippingFee = parseFloat(document.getElementById('quoteShippingFeeManual')?.value) || 0;

    // Use manual shipping fee directly
    const shippingFee = manualShippingFee;

    console.log(`Shipping method: ${shipmentMethod}, Manual Fee: $${shippingFee.toFixed(2)}`);

    // Calculate commission amount (percentage of subtotal)
    const commissionAmount = subtotal * (commissionPercentage / 100);

    // Calculate final total: Subtotal + Other Expenses + Shipping Fee + Commission Amount
    const finalTotal = subtotal + otherExpenses + shippingFee + commissionAmount;

    // ✅ CONSISTENT DATA - Update display with real-time values
    const elements = {
        quoteSubtotal: document.getElementById('quoteSubtotal'),
        quoteOtherExpensesDisplay: document.getElementById('quoteOtherExpensesDisplay'),
        quoteShippingFee: document.getElementById('quoteShippingFee'),
        quoteCommissionPercentageDisplay: document.getElementById('quoteCommissionPercentageDisplay'),
        quoteCommissionAmount: document.getElementById('quoteCommissionAmount'),
        quoteFinalTotal: document.getElementById('quoteFinalTotal')
    };

    // ✅ SEA AND AIR SHIPPING DISPLAY
    const shippingMethodNames = {
        'sea': 'Sea',
        'air': 'Air'
    };
    const methodName = shippingMethodNames[shipmentMethod] || 'Sea';

    if (elements.quoteSubtotal) elements.quoteSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    if (elements.quoteOtherExpensesDisplay) elements.quoteOtherExpensesDisplay.textContent = `$${otherExpenses.toFixed(2)}`;
    if (elements.quoteShippingFee) elements.quoteShippingFee.textContent = `$${shippingFee.toFixed(2)} (${methodName})`;
    if (elements.quoteCommissionPercentageDisplay) elements.quoteCommissionPercentageDisplay.textContent = commissionPercentage.toFixed(1);
    if (elements.quoteCommissionAmount) elements.quoteCommissionAmount.textContent = `$${commissionAmount.toFixed(2)}`;
    if (elements.quoteFinalTotal) elements.quoteFinalTotal.textContent = `$${finalTotal.toFixed(2)}`;

    console.log(`Quote summary updated: ${productCount} products, $${subtotal.toFixed(2)} subtotal, $${shippingFee.toFixed(2)} shipping (${methodName}), $${finalTotal.toFixed(2)} total`);
}

// ✅ SHIPPING FEE PRESET HELPER FUNCTION
function updateShippingFeePreset() {
    const shipmentMethod = document.getElementById('quoteShipmentMethod')?.value;
    const shippingFeeInput = document.getElementById('quoteShippingFeeManual');

    if (!shippingFeeInput) return;

    // Suggest preset values based on shipping method
    const presetValues = {
        'sea': 50.00,
        'air': 150.00,
        'custom': 0.00
    };

    const presetValue = presetValues[shipmentMethod] || 50.00;
    shippingFeeInput.value = presetValue.toFixed(2);

    // Update quote summary
    updateQuoteSummary();

    console.log(`Shipping preset updated: ${shipmentMethod} = $${presetValue.toFixed(2)}`);
}

function saveQuote() {
    const customer = document.getElementById('quoteCustomer').value;
    const validUntil = document.getElementById('quoteValidUntil').value;
    const shipmentMethod = document.getElementById('quoteShipmentMethod').value;
    const notes = document.getElementById('quoteNotes').value;
    const shippingNotes = document.getElementById('quoteShippingNotes').value;

    // Validation
    if (!customer) {
        alert('Please select a customer');
        return;
    }

    if (!validUntil) {
        alert('Please select a valid until date');
        return;
    }

    if (Object.keys(selectedQuoteProducts).length === 0) {
        alert('Please select at least one product');
        return;
    }

    // Calculate totals using the same logic as updateQuoteSummary
    let subtotal = 0;
    Object.values(selectedQuoteProducts).forEach(item => {
        subtotal += item.product.sellPrice * item.quantity;
    });

    const otherExpenses = parseFloat(document.getElementById('quoteOtherExpenses').value) || 0;
    const commissionPercentage = parseFloat(document.getElementById('quoteCommissionPercentage').value) || 5.0;

    // ✅ USE MANUAL SHIPPING FEE
    const shippingFee = parseFloat(document.getElementById('quoteShippingFeeManual')?.value) || 0;
    const commissionAmount = subtotal * (commissionPercentage / 100);
    const finalTotal = subtotal + otherExpenses + shippingFee + commissionAmount;

    // Create quote
    const newId = `QUO-${String(customerQuotes.length + 1).padStart(3, '0')}`;
    const today = new Date();

    const newQuote = {
        id: newId,
        date: today.toISOString().split('T')[0],
        validUntil: validUntil,
        customer: customer,
        status: 'Active',
        products: Object.values(selectedQuoteProducts).map(item => ({
            id: item.product.id,
            name: item.product.name,
            sku: item.product.sku,
            quantity: item.quantity,
            sellPrice: item.product.sellPrice,
            total: item.product.sellPrice * item.quantity
        })),
        subtotal: subtotal,
        otherExpenses: otherExpenses,
        shippingFee: shippingFee,
        commissionPercentage: commissionPercentage,
        commissionAmount: commissionAmount,
        finalTotal: finalTotal,
        shipmentMethod: shipmentMethod,
        shippingNotes: shippingNotes,
        notes: notes,
        convertedToInvoice: null
    };

    // Add to quotes
    customerQuotes.push(newQuote);

    // Save to storage
    saveDataToStorage();

    // Close modal
    closeQuoteModal();

    // Success message
    let successMessage = `✅ Quote ${newId} generated successfully!\n\n`;
    successMessage += `📋 Quote Details:\n`;
    successMessage += `• Customer: ${customer}\n`;
    successMessage += `• Products: ${Object.keys(selectedQuoteProducts).length}\n`;
    successMessage += `• Valid Until: ${validUntil}\n\n`;

    successMessage += `💰 Pricing Breakdown:\n`;
    successMessage += `• Subtotal: $${subtotal.toFixed(2)}\n`;
    successMessage += `• Other Expenses: $${otherExpenses.toFixed(2)}\n`;
    successMessage += `• Shipping Fee: $${shippingFee.toFixed(2)}\n`;
    successMessage += `• Commission (${commissionPercentage}%): $${commissionAmount.toFixed(2)}\n`;
    successMessage += `• Final Total: $${finalTotal.toFixed(2)}\n\n`;

    successMessage += `📋 Quote is ready for customer review!`;

    alert(successMessage);
}

// ✅ QUOTE MANAGEMENT FUNCTIONS
function loadCustomerQuotes() {
    console.log('Loading customer quotes...');
    const container = document.getElementById('customerQuotesList');

    if (!container) {
        console.log('Customer quotes container not found');
        return;
    }

    container.innerHTML = '';

    if (customerQuotes.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 40px;">No quotes available</p>';
        return;
    }

    customerQuotes.forEach(quote => {
        const quoteCard = document.createElement('div');
        quoteCard.className = `quote-card ${quote.status.toLowerCase()}`;

        // Determine status styling
        let statusClass = 'status-active';
        let statusIcon = '✅';
        if (quote.status === 'Expired') {
            statusClass = 'status-expired';
            statusIcon = '⏰';
        } else if (quote.status === 'Converted') {
            statusClass = 'status-converted';
            statusIcon = '📄';
        } else if (quote.status === 'Cancelled') {
            statusClass = 'status-cancelled';
            statusIcon = '❌';
        }

        // ✅ COMPACT USER-FRIENDLY QUOTE CARD LAYOUT
        quoteCard.innerHTML = `
            <div class="quote-compact-header">
                <div class="quote-main-info">
                    <h4 class="quote-id">${quote.id}</h4>
                    <span class="quote-customer">${quote.customer}</span>
                    <span class="status-badge ${statusClass}">${statusIcon} ${quote.status}</span>
                </div>
                <div class="quote-amount">
                    <span class="amount-label">Total:</span>
                    <span class="amount-value">$${quote.finalTotal.toFixed(2)}</span>
                </div>
            </div>

            <div class="quote-compact-details">
                <div class="quote-meta">
                    <span class="meta-item">📅 ${formatDate(quote.date)}</span>
                    <span class="meta-item">⏰ Valid until ${formatDate(quote.validUntil)}</span>
                    <span class="meta-item">📦 ${quote.products.length} products</span>
                </div>
            </div>

            <div class="quote-compact-actions">
                <div class="primary-actions">
                    ${quote.status === 'Active' ? `
                        <button class="btn btn-primary btn-sm" onclick="convertQuoteToPO('${quote.id}')">
                            📋 Convert to PO
                        </button>
                    ` : ''}
                    <button class="btn btn-info btn-sm" onclick="exportQuoteToPDF('${quote.id}')">
                        📄 PDF
                    </button>
                    <button class="btn btn-success btn-sm" onclick="exportQuoteToExcel('${quote.id}')">
                        📊 Excel
                    </button>
                </div>
                <div class="secondary-actions">
                    <button class="btn btn-secondary btn-sm" onclick="duplicateQuote('${quote.id}')">
                        📋 Duplicate
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="deleteQuote('${quote.id}')">
                        🗑️ Delete
                    </button>
                </div>
            </div>
        `;

        container.appendChild(quoteCard);
    });
}

// ✅ CONVERT QUOTE TO PURCHASE ORDER (NEW WORKFLOW)
function convertQuoteToPO(quoteId) {
    const quote = customerQuotes.find(q => q.id === quoteId);
    if (!quote) {
        alert('Quote not found');
        return;
    }

    if (quote.status !== 'Active') {
        alert('Only active quotes can be converted to Purchase Orders');
        return;
    }

    if (confirm(`Convert quote ${quoteId} to Purchase Order?\n\nThis will create a new PO with the same products using cost prices for procurement.`)) {
        try {
            // Create new PO based on quote
            const newPO = {
                id: `PO-${Date.now()}`,
                date: new Date().toISOString().split('T')[0],
                supplier: 'TBD - Select Supplier', // User will need to select supplier
                status: 'Draft',

                // Convert quote products to PO products with cost prices
                products: quote.products.map(quoteProduct => {
                    // Find the original product to get cost price
                    const originalProduct = products.find(p => p.id === quoteProduct.id || p.name === quoteProduct.name);
                    const costPrice = originalProduct ? originalProduct.costPrice : (quoteProduct.sellPrice * 0.7); // Fallback to 70% of sell price

                    return {
                        id: quoteProduct.id,
                        name: quoteProduct.name,
                        sku: quoteProduct.sku || '',
                        quantity: quoteProduct.quantity,
                        costPrice: costPrice,
                        total: costPrice * quoteProduct.quantity
                    };
                }),

                // Calculate totals based on cost prices
                subtotal: quote.products.reduce((sum, quoteProduct) => {
                    const originalProduct = products.find(p => p.id === quoteProduct.id || p.name === quoteProduct.name);
                    const costPrice = originalProduct ? originalProduct.costPrice : (quoteProduct.sellPrice * 0.7);
                    return sum + (costPrice * quoteProduct.quantity);
                }, 0),

                // PO specific fields
                shippingFee: quote.shippingFee || 0,
                tax: 0, // Will be calculated based on supplier
                notes: `Created from Quote ${quoteId}\nOriginal Customer: ${quote.customer}\nQuote Total: $${quote.finalTotal.toFixed(2)}`,

                // Reference to original quote
                sourceQuoteId: quoteId,
                sourceQuoteCustomer: quote.customer
            };

            // Calculate final total
            newPO.total = newPO.subtotal + newPO.shippingFee + newPO.tax;

            // Add to supplier invoices array
            supplierInvoices.push(newPO);

            // Update quote status
            quote.status = 'Converted';
            quote.convertedToPO = newPO.id;
            quote.convertedDate = new Date().toISOString().split('T')[0];

            // Save data and refresh displays
            saveDataToStorage();
            loadCustomerQuotes();
            loadSupplierInvoices();

            alert(`✅ Quote ${quoteId} successfully converted to Purchase Order ${newPO.id}!\n\nNext steps:\n1. Select a supplier for the PO\n2. Review and adjust cost prices if needed\n3. Submit the PO to supplier`);

        } catch (error) {
            console.error('Error converting quote to PO:', error);
            alert('Error converting quote to Purchase Order: ' + error.message);
        }
    }
}

function duplicateQuote(quoteId) {
    const quote = customerQuotes.find(q => q.id === quoteId);
    if (!quote) {
        alert('Quote not found');
        return;
    }

    if (confirm(`Duplicate quote ${quoteId}?\n\nThis will create a new quote with the same details.`)) {
        // Implementation for quote duplication would go here
        alert('Quote duplication feature coming soon!');
    }
}

function deleteQuote(quoteId) {
    if (confirm(`Are you sure you want to delete quote ${quoteId}?\n\nThis action cannot be undone.`)) {
        const index = customerQuotes.findIndex(q => q.id === quoteId);
        if (index !== -1) {
            customerQuotes.splice(index, 1);
            saveDataToStorage();
            loadCustomerQuotes();
            alert(`Quote ${quoteId} has been deleted.`);
        }
    }
}

// ✅ QUOTE EXPORT FUNCTIONS - PDF AND EXCEL
function exportQuoteToPDF(quoteId) {
    console.log('exportQuoteToPDF called with quoteId:', quoteId);
    console.log('customerQuotes:', customerQuotes);

    const quote = customerQuotes.find(q => q.id === quoteId);
    console.log('Found quote:', quote);

    if (!quote) {
        alert('Quote not found');
        return;
    }

    try {
        console.log('Checking jsPDF for quotes:', typeof window.jspdf);

        if (typeof window.jspdf === 'undefined') {
            alert('❌ jsPDF library not loaded. Please refresh the page and try again.');
            return;
        }

        // Create new PDF document
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Set font
        doc.setFont('helvetica');

        // Header
        doc.setFontSize(20);
        doc.setTextColor(0, 102, 204);
        doc.text('SALES QUOTATION', 20, 30);

        // Quote details
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`Quote ID: ${quote.id}`, 20, 50);
        doc.text(`Date: ${formatDate(quote.date)}`, 20, 60);
        doc.text(`Valid Until: ${formatDate(quote.validUntil)}`, 20, 70);
        doc.text(`Customer: ${quote.customer}`, 20, 80);
        doc.text(`Shipping: ${quote.shipmentMethod || 'Sea'}`, 20, 90);

        // Products table header
        let yPos = 110;
        doc.setFontSize(14);
        doc.setTextColor(0, 102, 204);
        doc.text('PRODUCTS', 20, yPos);

        yPos += 10;
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text('Product Name', 20, yPos);
        doc.text('SKU', 80, yPos);
        doc.text('Qty', 120, yPos);
        doc.text('Price', 140, yPos);
        doc.text('Total', 170, yPos);

        // Products
        yPos += 5;
        quote.products.forEach(product => {
            yPos += 10;
            doc.text(product.name.substring(0, 25), 20, yPos);
            doc.text(product.sku, 80, yPos);
            doc.text(product.quantity.toString(), 120, yPos);
            doc.text(`$${product.sellPrice.toFixed(2)}`, 140, yPos);
            doc.text(`$${product.total.toFixed(2)}`, 170, yPos);
        });

        // Pricing breakdown
        yPos += 20;
        doc.setFontSize(12);
        doc.setTextColor(0, 102, 204);
        doc.text('PRICING BREAKDOWN', 20, yPos);

        yPos += 15;
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text(`Subtotal:`, 20, yPos);
        doc.text(`$${quote.subtotal.toFixed(2)}`, 170, yPos);

        yPos += 10;
        doc.text(`Other Expenses:`, 20, yPos);
        doc.text(`$${quote.otherExpenses.toFixed(2)}`, 170, yPos);

        yPos += 10;
        doc.text(`Shipping Fee:`, 20, yPos);
        doc.text(`$${quote.shippingFee.toFixed(2)}`, 170, yPos);

        yPos += 10;
        doc.text(`Commission (${quote.commissionPercentage}%):`, 20, yPos);
        doc.text(`$${quote.commissionAmount.toFixed(2)}`, 170, yPos);

        yPos += 15;
        doc.setFontSize(14);
        doc.setTextColor(0, 102, 204);
        doc.text(`FINAL TOTAL:`, 20, yPos);
        doc.text(`$${quote.finalTotal.toFixed(2)}`, 170, yPos);

        // Notes
        if (quote.notes) {
            yPos += 20;
            doc.setFontSize(12);
            doc.setTextColor(0, 102, 204);
            doc.text('NOTES', 20, yPos);
            yPos += 10;
            doc.setFontSize(10);
            doc.setTextColor(0, 0, 0);
            const splitNotes = doc.splitTextToSize(quote.notes, 170);
            doc.text(splitNotes, 20, yPos);
        }

        // Save PDF
        doc.save(`Quote_${quote.id}_${quote.customer}.pdf`);

        alert(`✅ Quote ${quote.id} exported to PDF successfully!`);

    } catch (error) {
        console.error('PDF export error:', error);
        alert('❌ PDF export failed. Please make sure jsPDF library is loaded.');
    }
}

function exportQuoteToExcel(quoteId) {
    console.log('exportQuoteToExcel called with quoteId:', quoteId);
    console.log('customerQuotes:', customerQuotes);

    const quote = customerQuotes.find(q => q.id === quoteId);
    console.log('Found quote:', quote);

    if (!quote) {
        alert('Quote not found');
        return;
    }

    try {
        console.log('Checking XLSX for quotes:', typeof XLSX);

        if (typeof XLSX === 'undefined') {
            alert('❌ SheetJS (XLSX) library not loaded. Please refresh the page and try again.');
            return;
        }

        // Create workbook and worksheet
        const wb = XLSX.utils.book_new();

        // Quote header data
        const headerData = [
            ['SALES QUOTATION'],
            [''],
            ['Quote ID:', quote.id],
            ['Date:', formatDate(quote.date)],
            ['Valid Until:', formatDate(quote.validUntil)],
            ['Customer:', quote.customer],
            ['Shipping Method:', quote.shipmentMethod || 'Sea'],
            [''],
            ['PRODUCTS'],
            ['Product Name', 'SKU', 'Quantity', 'Unit Price', 'Total']
        ];

        // Add products
        quote.products.forEach(product => {
            headerData.push([
                product.name,
                product.sku,
                product.quantity,
                product.sellPrice,
                product.total
            ]);
        });

        // Add pricing breakdown
        headerData.push(
            [''],
            ['PRICING BREAKDOWN'],
            ['Subtotal:', '', '', '', quote.subtotal],
            ['Other Expenses:', '', '', '', quote.otherExpenses],
            ['Shipping Fee:', '', '', '', quote.shippingFee],
            [`Commission (${quote.commissionPercentage}%):`, '', '', '', quote.commissionAmount],
            [''],
            ['FINAL TOTAL:', '', '', '', quote.finalTotal]
        );

        // Add notes if available
        if (quote.notes) {
            headerData.push(
                [''],
                ['NOTES'],
                [quote.notes]
            );
        }

        // Create worksheet
        const ws = XLSX.utils.aoa_to_sheet(headerData);

        // Style the worksheet
        ws['!cols'] = [
            { width: 25 },
            { width: 15 },
            { width: 10 },
            { width: 12 },
            { width: 12 }
        ];

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(wb, ws, 'Quote');

        // Save Excel file
        XLSX.writeFile(wb, `Quote_${quote.id}_${quote.customer}.xlsx`);

        alert(`✅ Quote ${quote.id} exported to Excel successfully!`);

    } catch (error) {
        console.error('Excel export error:', error);
        alert('❌ Excel export failed. Please make sure SheetJS library is loaded.');
    }
}

function exportAllQuotesToExcel() {
    if (customerQuotes.length === 0) {
        alert('No quotes available to export');
        return;
    }

    try {
        const wb = XLSX.utils.book_new();

        // Summary sheet data
        const summaryData = [
            ['CUSTOMER QUOTES SUMMARY'],
            [''],
            ['Quote ID', 'Date', 'Customer', 'Status', 'Shipping Method', 'Final Total'],
        ];

        customerQuotes.forEach(quote => {
            summaryData.push([
                quote.id,
                quote.date,
                quote.customer,
                quote.status,
                quote.shipmentMethod || 'Sea',
                quote.finalTotal
            ]);
        });

        // Create summary worksheet
        const summaryWs = XLSX.utils.aoa_to_sheet(summaryData);
        summaryWs['!cols'] = [
            { width: 15 },
            { width: 12 },
            { width: 20 },
            { width: 12 },
            { width: 15 },
            { width: 12 }
        ];

        XLSX.utils.book_append_sheet(wb, summaryWs, 'Summary');

        // Create individual sheets for each quote
        customerQuotes.forEach(quote => {
            const quoteData = [
                [`Quote: ${quote.id}`],
                [''],
                ['Date:', quote.date],
                ['Customer:', quote.customer],
                ['Status:', quote.status],
                ['Shipping:', quote.shipmentMethod || 'Sea'],
                [''],
                ['PRODUCTS'],
                ['Product Name', 'SKU', 'Quantity', 'Unit Price', 'Total']
            ];

            quote.products.forEach(product => {
                quoteData.push([
                    product.name,
                    product.sku,
                    product.quantity,
                    product.sellPrice,
                    product.total
                ]);
            });

            quoteData.push(
                [''],
                ['PRICING'],
                ['Subtotal:', quote.subtotal],
                ['Other Expenses:', quote.otherExpenses],
                ['Shipping Fee:', quote.shippingFee],
                ['Commission:', quote.commissionAmount],
                ['FINAL TOTAL:', quote.finalTotal]
            );

            const quoteWs = XLSX.utils.aoa_to_sheet(quoteData);
            quoteWs['!cols'] = [
                { width: 25 },
                { width: 15 },
                { width: 10 },
                { width: 12 },
                { width: 12 }
            ];

            XLSX.utils.book_append_sheet(wb, quoteWs, quote.id);
        });

        // Save Excel file
        const today = new Date().toISOString().split('T')[0];
        XLSX.writeFile(wb, `All_Quotes_${today}.xlsx`);

        alert(`✅ All quotes exported to Excel successfully!`);

    } catch (error) {
        console.error('Excel export error:', error);
        alert('❌ Excel export failed. Please make sure SheetJS library is loaded.');
    }
}





function exportAllInvoicesToExcel() {
    console.log('exportAllInvoicesToExcel called');
    console.log('customerInvoices length:', customerInvoices.length);
    console.log('customerInvoices:', customerInvoices);

    if (customerInvoices.length === 0) {
        alert('No invoices available to export');
        return;
    }

    try {
        const wb = XLSX.utils.book_new();

        // Summary sheet
        const summaryData = [
            ['CUSTOMER SALES ORDERS SUMMARY'],
            [''],
            ['Sales Order ID', 'Date', 'Customer', 'Status', 'Total Amount'],
        ];

        customerInvoices.forEach(invoice => {
            summaryData.push([
                invoice.id,
                invoice.date,
                invoice.customer,
                invoice.status,
                invoice.amount
            ]);
        });

        const summaryWs = XLSX.utils.aoa_to_sheet(summaryData);
        summaryWs['!cols'] = [
            { width: 15 },
            { width: 12 },
            { width: 20 },
            { width: 12 },
            { width: 12 }
        ];

        XLSX.utils.book_append_sheet(wb, summaryWs, 'Summary');

        // Individual invoice sheets
        customerInvoices.forEach(invoice => {
            const invoiceData = [
                [`Invoice: ${invoice.id}`],
                [''],
                ['Date:', invoice.date],
                ['Customer:', invoice.customer],
                ['Status:', invoice.status],
                [''],
                ['PRODUCTS'],
                ['Product Name', 'SKU', 'Quantity', 'Unit Price', 'Total']
            ];

            invoice.products.forEach(product => {
                invoiceData.push([
                    product.name,
                    product.sku,
                    product.quantity,
                    product.price,
                    product.total
                ]);
            });

            const displaySubtotal = invoice.products.reduce((sum, product) => sum + product.total, 0);

            invoiceData.push(
                [''],
                ['PRICING'],
                ['Subtotal:', displaySubtotal],
                ['Shipping Fee:', invoice.shippingFee || 0]
            );



            invoiceData.push(['TOTAL:', invoice.amount]);

            const invoiceWs = XLSX.utils.aoa_to_sheet(invoiceData);
            invoiceWs['!cols'] = [
                { width: 25 },
                { width: 15 },
                { width: 10 },
                { width: 12 },
                { width: 12 }
            ];

            XLSX.utils.book_append_sheet(wb, invoiceWs, invoice.id);
        });

        // Save Excel file
        const today = new Date().toISOString().split('T')[0];
        XLSX.writeFile(wb, `All_Customer_Sales_Orders_${today}.xlsx`);

        alert(`✅ All customer sales orders exported to Excel successfully!`);

    } catch (error) {
        console.error('Excel export error:', error);
        alert('❌ Excel export failed. Please make sure SheetJS library is loaded.');
    }
}

// ✅ TEST FUNCTION FOR DEBUGGING BUTTON ISSUES
function testExportFunctions() {
    console.log('=== TESTING EXPORT FUNCTIONS ===');
    console.log('customerInvoices length:', customerInvoices.length);
    console.log('customerQuotes length:', customerQuotes.length);
    console.log('jsPDF available:', typeof window.jspdf);
    console.log('XLSX available:', typeof XLSX);

    if (customerInvoices.length > 0) {
        console.log('First customer sales order:', customerInvoices[0]);
    }

    if (customerQuotes.length > 0) {
        console.log('First customer quote:', customerQuotes[0]);
    }

    // Test basic functionality
    try {
        if (typeof window.jspdf !== 'undefined') {
            console.log('✅ jsPDF is working');
        } else {
            console.log('❌ jsPDF not available');
        }

        if (typeof XLSX !== 'undefined') {
            console.log('✅ XLSX is working');
        } else {
            console.log('❌ XLSX not available');
        }

        // Test if functions exist
        console.log('exportAllInvoicesToExcel exists:', typeof exportAllInvoicesToExcel);
        console.log('exportQuoteToPDF exists:', typeof exportQuoteToPDF);
        console.log('exportQuoteToExcel exists:', typeof exportQuoteToExcel);

    } catch (error) {
        console.error('Error in test:', error);
    }

    alert('Check console for debug information');
}



function testQuotePDFExport() {
    if (customerQuotes.length > 0) {
        exportQuoteToPDF(customerQuotes[0].id);
    } else {
        alert('No quotes available for testing');
    }
}

// ✅ TEST BASIC BUTTON FUNCTIONALITY
function testBasicButtons() {
    console.log('=== TESTING BASIC BUTTON FUNCTIONALITY ===');

    // Test if key functions exist
    const functions = [
        'addProduct',
        'openCustomerInvoiceModal',
        'openSupplierInvoiceModal',
        'openQuickAddProductModal',
        'generateQuotation',
        'openQuoteModal'
    ];

    functions.forEach(funcName => {
        if (typeof window[funcName] === 'function') {
            console.log(`✅ ${funcName} exists`);
        } else {
            console.log(`❌ ${funcName} missing`);
        }
    });

    // Test basic DOM elements
    const elements = [
        'productModal',
        'customerInvoiceModal',
        'supplierInvoiceModal',
        'quickAddProductModal',
        'quoteModal'
    ];

    elements.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
            console.log(`✅ ${elementId} element exists`);
        } else {
            console.log(`❌ ${elementId} element missing`);
        }
    });

    alert('Check console for basic button functionality test results');
}

// ✅ SIMPLE BUTTON TESTS
function testAddProduct() {
    console.log('Testing addProduct function...');
    try {
        addProduct();
        console.log('✅ addProduct executed successfully');
    } catch (error) {
        console.error('❌ addProduct failed:', error);
        alert('addProduct failed: ' + error.message);
    }
}

function testCreatePO() {
    console.log('Testing openSupplierInvoiceModal function...');
    try {
        openSupplierInvoiceModal();
        console.log('✅ openSupplierInvoiceModal executed successfully');
    } catch (error) {
        console.error('❌ openSupplierInvoiceModal failed:', error);
        alert('Create PO failed: ' + error.message);
    }
}

function testCreateSO() {
    console.log('Testing openCustomerInvoiceModal function...');
    try {
        openCustomerInvoiceModal();
        console.log('✅ openCustomerInvoiceModal executed successfully');
    } catch (error) {
        console.error('❌ openCustomerInvoiceModal failed:', error);
        alert('Create SO failed: ' + error.message);
    }
}

function testQuickAddProduct() {
    console.log('Testing Quick Add Product functionality...');
    try {
        // Test if the function exists
        if (typeof openQuickAddProductModal !== 'function') {
            throw new Error('openQuickAddProductModal function not found');
        }

        // Test if modal element exists
        const modal = document.getElementById('quickAddProductModal');
        if (!modal) {
            throw new Error('quickAddProductModal element not found in DOM');
        }

        // Test if form fields exist
        const requiredFields = [
            'quickProductName',
            'quickSKU',
            'quickCostPrice',
            'quickSellPrice',
            'quickQuantity',
            'addToQuoteDirectly',
            'selectForQuote'
        ];

        const missingFields = [];
        requiredFields.forEach(fieldId => {
            if (!document.getElementById(fieldId)) {
                missingFields.push(fieldId);
            }
        });

        if (missingFields.length > 0) {
            throw new Error(`Missing form fields: ${missingFields.join(', ')}`);
        }

        // Test opening the modal
        openQuickAddProductModal();
        console.log('✅ Quick Add Product modal opened successfully');

        // Test if modal is visible
        if (modal.style.display === 'block') {
            console.log('✅ Modal is visible');
            alert('✅ Quick Add Product functionality test passed! Modal opened successfully.');
        } else {
            throw new Error('Modal did not become visible');
        }

    } catch (error) {
        console.error('❌ Quick Add Product test failed:', error);
        alert('❌ Quick Add Product test failed: ' + error.message);
    }
}

// ✅ GLOBAL DEBUG FUNCTION - Can be called from browser console
window.debugQuickAdd = function() {
    console.log('=== MANUAL DEBUG: Quick Add Product ===');

    // Check button
    const btn = document.querySelector('button[onclick="openQuickAddProductModal()"]');
    console.log('Button element:', btn);

    // Check modal
    const modal = document.getElementById('quickAddProductModal');
    console.log('Modal element:', modal);

    // Check function
    console.log('Function exists:', typeof openQuickAddProductModal);

    // Try to call function directly
    try {
        console.log('Attempting to call openQuickAddProductModal()...');
        openQuickAddProductModal();
        console.log('Function called successfully');
    } catch (error) {
        console.error('Error calling function:', error);
    }

    console.log('=== END MANUAL DEBUG ===');
};

// Calculations
function updateCalculations() {
    // Update invoice totals using the new function
    updateInvoiceTotals();

    // Update customer and supplier info displays
    updateCustomerInfo();
    updateSupplierInfo();
}

function updateCustomerInfo() {
    const customerSelect = document.getElementById('customer');
    const customerInfoDiv = document.getElementById('customerInfo');

    if (!customerSelect || !customerInfoDiv) return;

    const selectedCustomer = customerSelect.value;
    const customerData = {
        'F16': {
            name: 'F16 Electronics',
            address: '456 Customer Ave<br>Business City, BC 67890<br>Phone: +1 (555) 987-6543'
        },
        'Customer B': {
            name: 'Beta Trading Co.',
            address: '789 Trade Street<br>Commerce City, CC 11223<br>Phone: +1 (555) 876-5432'
        },
        'Customer C': {
            name: 'Gamma Industries',
            address: '321 Industrial Blvd<br>Factory Town, FT 44556<br>Phone: +1 (555) 765-4321'
        }
    };

    if (selectedCustomer && customerData[selectedCustomer]) {
        customerInfoDiv.innerHTML = `<strong>${customerData[selectedCustomer].name}</strong><br>${customerData[selectedCustomer].address}`;
    } else {
        customerInfoDiv.innerHTML = 'Please select a customer';
    }
}

function updateSupplierInfo() {
    const supplierSelect = document.getElementById('supplier');
    const supplierInfoDiv = document.getElementById('supplierInfo');

    if (!supplierSelect || !supplierInfoDiv) return;

    const selectedSupplier = supplierSelect.value;
    const supplierData = {
        'K2': {
            name: 'K2 Manufacturing',
            address: '789 Industrial Rd<br>Manufacturing City, MC 13579<br>Phone: +86 138-0013-8000'
        },
        'Supplier B': {
            name: 'Beta Components Inc.',
            address: '200 Manufacturing Blvd<br>Industrial City, IC 24680<br>Phone: +1 (555) 201-3456'
        },
        'Supplier C': {
            name: 'Gamma Global Supply',
            address: 'Floor 15, Business Tower<br>Dubai, UAE<br>Phone: +971-4-123-4567'
        }
    };

    if (selectedSupplier && supplierData[selectedSupplier]) {
        supplierInfoDiv.innerHTML = `<strong>${supplierData[selectedSupplier].name}</strong><br>${supplierData[selectedSupplier].address}`;
    } else {
        supplierInfoDiv.innerHTML = 'Please select a supplier';
    }
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function saveOrder() {
    const supplier = document.getElementById('supplier').value;
    const customer = document.getElementById('customer').value;
    
    if (!supplier || !customer) {
        alert('Please select both supplier and customer');
        return;
    }
    
    alert('Order saved successfully!');
}

// ✅ ADVANCED SHIPPING MANAGEMENT FUNCTIONS
function updateShippingCalculations() {
    console.log('🚚 updateShippingCalculations() called');

    try {
        const shippingType = document.getElementById('invoiceShipmentType')?.value;
        const shippingCompany = document.getElementById('invoiceShippingCompany')?.value;
        const actualCost = parseFloat(document.getElementById('actualShippingCost')?.value) || 0;
        const customerCharge = parseFloat(document.getElementById('customerShippingCharge')?.value) || 0;

        console.log('Shipping calculations:', { shippingType, shippingCompany, actualCost, customerCharge });

        // Auto-populate rates if company and type are selected
        if (shippingCompany && shippingType && actualCost === 0 && customerCharge === 0) {
            const rates = getDefaultShippingRates(shippingCompany, shippingType);
            if (rates) {
                document.getElementById('actualShippingCost').value = rates.cost.toFixed(2);
                document.getElementById('customerShippingCharge').value = rates.customerCharge.toFixed(2);
                console.log('Auto-populated shipping rates:', rates);
            }
        }

        // Calculate profit margin
        const updatedActualCost = parseFloat(document.getElementById('actualShippingCost')?.value) || 0;
        const updatedCustomerCharge = parseFloat(document.getElementById('customerShippingCharge')?.value) || 0;

        const profit = updatedCustomerCharge - updatedActualCost;
        const profitPercentage = updatedActualCost > 0 ? ((profit / updatedActualCost) * 100) : 0;

        // Update profit display
        const profitAmountElement = document.getElementById('shippingProfitAmount');
        const profitPercentageElement = document.getElementById('shippingProfitPercentage');
        const profitDisplay = document.querySelector('.shipping-profit-display');

        if (profitAmountElement && profitPercentageElement && profitDisplay) {
            profitAmountElement.textContent = `$${profit.toFixed(2)}`;
            profitPercentageElement.textContent = `(${profitPercentage.toFixed(1)}%)`;

            // Update styling based on profit/loss
            if (profit < 0) {
                profitDisplay.classList.add('negative');
            } else {
                profitDisplay.classList.remove('negative');
            }
        }

        // Update compatible companies dropdown
        updateCompatibleCompanies(shippingType);

        // Update invoice summary with new shipping charges
        updateInvoiceSummary();

        console.log('Shipping profit calculated:', { profit: profit.toFixed(2), percentage: profitPercentage.toFixed(1) });

    } catch (error) {
        console.error('Error updating shipping calculations:', error);
    }
}

function getDefaultShippingRates(companyId, shippingType) {
    const company = shippingCompanies.find(c => c.id === companyId);
    if (company && company.defaultRates && company.defaultRates[shippingType]) {
        return company.defaultRates[shippingType];
    }
    return null;
}

function updateCompatibleCompanies(selectedType) {
    const companySelect = document.getElementById('invoiceShippingCompany');
    if (!companySelect || !selectedType) return;

    const currentValue = companySelect.value;
    const shippingTypeData = shippingTypes.find(t => t.id === selectedType);

    if (!shippingTypeData) return;

    // Clear and rebuild options
    companySelect.innerHTML = '<option value="">Select Shipping Company</option>';

    // Add compatible companies
    shippingTypeData.compatibleCompanies.forEach(companyId => {
        const company = shippingCompanies.find(c => c.id === companyId);
        if (company) {
            const option = document.createElement('option');
            option.value = company.id;
            option.textContent = company.name;
            companySelect.appendChild(option);
        }
    });

    // Add "Other" option for custom companies
    if (selectedType !== 'pickup') {
        const otherOption = document.createElement('option');
        otherOption.value = 'other';
        otherOption.textContent = 'Other';
        companySelect.appendChild(otherOption);
    }

    // Restore previous selection if still valid
    if (currentValue && Array.from(companySelect.options).some(opt => opt.value === currentValue)) {
        companySelect.value = currentValue;
    }
}

function calculateShippingProfitability(orders) {
    let totalRevenue = 0;
    let totalCosts = 0;
    let totalProfit = 0;
    const typeStats = {};
    const companyStats = {};

    orders.forEach(order => {
        if (order.shipping) {
            const revenue = order.shipping.customerCharge || 0;
            const cost = order.shipping.actualCost || 0;
            const profit = revenue - cost;

            totalRevenue += revenue;
            totalCosts += cost;
            totalProfit += profit;

            // Track by type
            const type = order.shipping.type || 'unknown';
            if (!typeStats[type]) {
                typeStats[type] = { revenue: 0, costs: 0, profit: 0, count: 0 };
            }
            typeStats[type].revenue += revenue;
            typeStats[type].costs += cost;
            typeStats[type].profit += profit;
            typeStats[type].count += 1;

            // Track by company
            const company = order.shipping.company || 'unknown';
            if (!companyStats[company]) {
                companyStats[company] = { revenue: 0, costs: 0, profit: 0, count: 0 };
            }
            companyStats[company].revenue += revenue;
            companyStats[company].costs += cost;
            companyStats[company].profit += profit;
            companyStats[company].count += 1;
        }
    });

    const averageProfitMargin = totalCosts > 0 ? ((totalProfit / totalCosts) * 100) : 0;

    return {
        totalRevenue,
        totalCosts,
        totalProfit,
        averageProfitMargin,
        typeStats,
        companyStats
    };
}

function updateShippingAnalytics(orderShippingData) {
    if (!orderShippingData) return;

    const revenue = orderShippingData.customerCharge || 0;
    const cost = orderShippingData.actualCost || 0;
    const profit = revenue - cost;

    // Update totals
    shippingAnalytics.totalShippingRevenue += revenue;
    shippingAnalytics.totalShippingCosts += cost;
    shippingAnalytics.totalShippingProfit += profit;

    // Update average profit margin
    if (shippingAnalytics.totalShippingCosts > 0) {
        shippingAnalytics.averageProfitMargin =
            (shippingAnalytics.totalShippingProfit / shippingAnalytics.totalShippingCosts) * 100;
    }

    // Update by shipping type
    const type = orderShippingData.type || 'unknown';
    if (!shippingAnalytics.ordersByShippingType[type]) {
        shippingAnalytics.ordersByShippingType[type] = { count: 0, revenue: 0, costs: 0, profit: 0 };
    }
    shippingAnalytics.ordersByShippingType[type].count += 1;
    shippingAnalytics.ordersByShippingType[type].revenue += revenue;
    shippingAnalytics.ordersByShippingType[type].costs += cost;
    shippingAnalytics.ordersByShippingType[type].profit += profit;

    // Update by shipping company
    const company = orderShippingData.company || 'unknown';
    if (!shippingAnalytics.ordersByShippingCompany[company]) {
        shippingAnalytics.ordersByShippingCompany[company] = { count: 0, revenue: 0, costs: 0, profit: 0 };
    }
    shippingAnalytics.ordersByShippingCompany[company].count += 1;
    shippingAnalytics.ordersByShippingCompany[company].revenue += revenue;
    shippingAnalytics.ordersByShippingCompany[company].costs += cost;
    shippingAnalytics.ordersByShippingCompany[company].profit += profit;

    console.log('Shipping analytics updated:', shippingAnalytics);
}

// ✅ SHIPPING ANALYTICS & REPORTING FUNCTIONS
function generateShippingReport() {
    const report = {
        summary: {
            totalOrders: customerInvoices.filter(inv => inv.shipping).length,
            totalRevenue: shippingAnalytics.totalShippingRevenue,
            totalCosts: shippingAnalytics.totalShippingCosts,
            totalProfit: shippingAnalytics.totalShippingProfit,
            averageProfitMargin: shippingAnalytics.averageProfitMargin,
            averageRevenuePerOrder: 0,
            averageCostPerOrder: 0
        },
        byShippingType: {},
        byShippingCompany: {},
        monthlyTrends: shippingAnalytics.monthlyShippingData,
        topPerformers: {
            mostProfitableType: null,
            mostProfitableCompany: null,
            highestMarginType: null,
            highestMarginCompany: null
        }
    };

    // Calculate averages
    if (report.summary.totalOrders > 0) {
        report.summary.averageRevenuePerOrder = report.summary.totalRevenue / report.summary.totalOrders;
        report.summary.averageCostPerOrder = report.summary.totalCosts / report.summary.totalOrders;
    }

    // Process shipping type analytics
    Object.entries(shippingAnalytics.ordersByShippingType).forEach(([type, data]) => {
        const margin = data.costs > 0 ? ((data.profit / data.costs) * 100) : 0;
        report.byShippingType[type] = {
            ...data,
            margin: margin,
            averageRevenuePerOrder: data.count > 0 ? (data.revenue / data.count) : 0,
            averageCostPerOrder: data.count > 0 ? (data.costs / data.count) : 0
        };
    });

    // Process shipping company analytics
    Object.entries(shippingAnalytics.ordersByShippingCompany).forEach(([company, data]) => {
        const margin = data.costs > 0 ? ((data.profit / data.costs) * 100) : 0;
        report.byShippingCompany[company] = {
            ...data,
            margin: margin,
            averageRevenuePerOrder: data.count > 0 ? (data.revenue / data.count) : 0,
            averageCostPerOrder: data.count > 0 ? (data.costs / data.count) : 0
        };
    });

    // Find top performers
    let maxProfit = -Infinity;
    let maxMargin = -Infinity;

    Object.entries(report.byShippingType).forEach(([type, data]) => {
        if (data.profit > maxProfit) {
            maxProfit = data.profit;
            report.topPerformers.mostProfitableType = { type, profit: data.profit };
        }
        if (data.margin > maxMargin) {
            maxMargin = data.margin;
            report.topPerformers.highestMarginType = { type, margin: data.margin };
        }
    });

    maxProfit = -Infinity;
    maxMargin = -Infinity;

    Object.entries(report.byShippingCompany).forEach(([company, data]) => {
        if (data.profit > maxProfit) {
            maxProfit = data.profit;
            report.topPerformers.mostProfitableCompany = { company, profit: data.profit };
        }
        if (data.margin > maxMargin) {
            maxMargin = data.margin;
            report.topPerformers.highestMarginCompany = { company, margin: data.margin };
        }
    });

    return report;
}

function exportShippingAnalyticsToExcel() {
    try {
        const report = generateShippingReport();
        const wb = XLSX.utils.book_new();

        // Summary sheet
        const summaryData = [
            ['SHIPPING ANALYTICS SUMMARY'],
            [''],
            ['Metric', 'Value'],
            ['Total Orders with Shipping', report.summary.totalOrders],
            ['Total Shipping Revenue', `$${report.summary.totalRevenue.toFixed(2)}`],
            ['Total Shipping Costs', `$${report.summary.totalCosts.toFixed(2)}`],
            ['Total Shipping Profit', `$${report.summary.totalProfit.toFixed(2)}`],
            ['Average Profit Margin', `${report.summary.averageProfitMargin.toFixed(1)}%`],
            ['Average Revenue per Order', `$${report.summary.averageRevenuePerOrder.toFixed(2)}`],
            ['Average Cost per Order', `$${report.summary.averageCostPerOrder.toFixed(2)}`],
            [''],
            ['TOP PERFORMERS'],
            ['Most Profitable Shipping Type', report.topPerformers.mostProfitableType?.type || 'N/A'],
            ['Highest Margin Shipping Type', report.topPerformers.highestMarginType?.type || 'N/A'],
            ['Most Profitable Company', report.topPerformers.mostProfitableCompany?.company || 'N/A'],
            ['Highest Margin Company', report.topPerformers.highestMarginCompany?.company || 'N/A']
        ];

        const summaryWS = XLSX.utils.aoa_to_sheet(summaryData);
        XLSX.utils.book_append_sheet(wb, summaryWS, 'Summary');

        // Shipping Types sheet
        const typeData = [
            ['SHIPPING ANALYTICS BY TYPE'],
            [''],
            ['Type', 'Orders', 'Revenue', 'Costs', 'Profit', 'Margin %', 'Avg Revenue/Order', 'Avg Cost/Order']
        ];

        Object.entries(report.byShippingType).forEach(([type, data]) => {
            typeData.push([
                type,
                data.count,
                data.revenue.toFixed(2),
                data.costs.toFixed(2),
                data.profit.toFixed(2),
                data.margin.toFixed(1),
                data.averageRevenuePerOrder.toFixed(2),
                data.averageCostPerOrder.toFixed(2)
            ]);
        });

        const typeWS = XLSX.utils.aoa_to_sheet(typeData);
        XLSX.utils.book_append_sheet(wb, typeWS, 'By Shipping Type');

        // Shipping Companies sheet
        const companyData = [
            ['SHIPPING ANALYTICS BY COMPANY'],
            [''],
            ['Company', 'Orders', 'Revenue', 'Costs', 'Profit', 'Margin %', 'Avg Revenue/Order', 'Avg Cost/Order']
        ];

        Object.entries(report.byShippingCompany).forEach(([company, data]) => {
            companyData.push([
                company,
                data.count,
                data.revenue.toFixed(2),
                data.costs.toFixed(2),
                data.profit.toFixed(2),
                data.margin.toFixed(1),
                data.averageRevenuePerOrder.toFixed(2),
                data.averageCostPerOrder.toFixed(2)
            ]);
        });

        const companyWS = XLSX.utils.aoa_to_sheet(companyData);
        XLSX.utils.book_append_sheet(wb, companyWS, 'By Company');

        // Monthly trends sheet
        const monthlyData = [
            ['MONTHLY SHIPPING TRENDS'],
            [''],
            ['Month', 'Orders', 'Revenue', 'Costs', 'Profit', 'Margin %']
        ];

        report.monthlyTrends.forEach(month => {
            const margin = month.costs > 0 ? ((month.profit / month.costs) * 100) : 0;
            monthlyData.push([
                month.month,
                month.orders,
                month.revenue.toFixed(2),
                month.costs.toFixed(2),
                month.profit.toFixed(2),
                margin.toFixed(1)
            ]);
        });

        const monthlyWS = XLSX.utils.aoa_to_sheet(monthlyData);
        XLSX.utils.book_append_sheet(wb, monthlyWS, 'Monthly Trends');

        // Export file
        const today = new Date().toISOString().split('T')[0];
        XLSX.writeFile(wb, `Shipping_Analytics_Report_${today}.xlsx`);

        alert(`✅ Shipping analytics report exported successfully!\n\nReport includes:\n• Summary metrics\n• Performance by shipping type\n• Performance by company\n• Monthly trends`);

    } catch (error) {
        console.error('Error exporting shipping analytics:', error);
        alert('Error exporting shipping analytics report: ' + error.message);
    }
}

function displayShippingAnalytics() {
    const report = generateShippingReport();

    let analyticsHTML = `
        <div class="analytics-container">
            <h3>📊 Shipping Analytics Dashboard</h3>

            <div class="analytics-summary">
                <h4>Summary</h4>
                <div class="metrics-grid">
                    <div class="metric-card">
                        <div class="metric-value">$${report.summary.totalProfit.toFixed(2)}</div>
                        <div class="metric-label">Total Shipping Profit</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-value">${report.summary.averageProfitMargin.toFixed(1)}%</div>
                        <div class="metric-label">Average Profit Margin</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-value">${report.summary.totalOrders}</div>
                        <div class="metric-label">Orders with Shipping</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-value">$${report.summary.averageRevenuePerOrder.toFixed(2)}</div>
                        <div class="metric-label">Avg Revenue/Order</div>
                    </div>
                </div>
            </div>

            <div class="analytics-section">
                <h4>Performance by Shipping Type</h4>
                <table class="analytics-table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Orders</th>
                            <th>Revenue</th>
                            <th>Costs</th>
                            <th>Profit</th>
                            <th>Margin</th>
                        </tr>
                    </thead>
                    <tbody>
    `;

    Object.entries(report.byShippingType).forEach(([type, data]) => {
        analyticsHTML += `
            <tr>
                <td>${type}</td>
                <td>${data.count}</td>
                <td>$${data.revenue.toFixed(2)}</td>
                <td>$${data.costs.toFixed(2)}</td>
                <td class="${data.profit >= 0 ? 'profit-positive' : 'profit-negative'}">$${data.profit.toFixed(2)}</td>
                <td class="${data.margin >= 0 ? 'profit-positive' : 'profit-negative'}">${data.margin.toFixed(1)}%</td>
            </tr>
        `;
    });

    analyticsHTML += `
                    </tbody>
                </table>
            </div>

            <div class="analytics-actions">
                <button class="btn btn-primary" onclick="exportShippingAnalyticsToExcel()">📊 Export Full Report</button>
            </div>
        </div>
    `;

    return analyticsHTML;
}

// ✅ COLLAPSIBLE SECTION FUNCTIONALITY
function toggleSection(sectionId) {
    const content = document.getElementById(sectionId);
    const icon = document.getElementById(sectionId.replace('Section', 'Icon'));

    if (!content || !icon) {
        console.error('Section or icon not found:', sectionId);
        return;
    }

    const isCollapsed = content.classList.contains('collapsed');

    if (isCollapsed) {
        // Expand section
        content.classList.remove('collapsed');
        content.classList.add('expanding');
        icon.classList.remove('collapsed');
        icon.textContent = '▼';

        // Remove animation class after animation completes
        setTimeout(() => {
            content.classList.remove('expanding');
        }, 300);

        console.log(`Section ${sectionId} expanded`);
    } else {
        // Collapse section
        content.classList.add('collapsing');
        icon.classList.add('collapsed');
        icon.textContent = '▶';

        // Add collapsed class after animation
        setTimeout(() => {
            content.classList.add('collapsed');
            content.classList.remove('collapsing');
        }, 300);

        console.log(`Section ${sectionId} collapsed`);
    }

    // Save section state to localStorage
    const sectionStates = JSON.parse(localStorage.getItem('sectionStates') || '{}');
    sectionStates[sectionId] = !isCollapsed ? 'collapsed' : 'expanded';
    localStorage.setItem('sectionStates', JSON.stringify(sectionStates));
}

// ✅ RESTORE SECTION STATES ON PAGE LOAD
function restoreSectionStates() {
    const sectionStates = JSON.parse(localStorage.getItem('sectionStates') || '{}');

    Object.entries(sectionStates).forEach(([sectionId, state]) => {
        const content = document.getElementById(sectionId);
        const icon = document.getElementById(sectionId.replace('Section', 'Icon'));

        if (content && icon && state === 'collapsed') {
            content.classList.add('collapsed');
            icon.classList.add('collapsed');
            icon.textContent = '▶';
        }
    });

    console.log('Section states restored:', sectionStates);
}

// ✅ SHIPMENT MANAGEMENT FUNCTIONS

// Generate shipment ID from sales order ID (INV001 → SHIP-001)
function generateShipmentId(salesOrderId) {
    // Extract the number part from sales order ID
    const match = salesOrderId.match(/(\d+)$/);
    if (match) {
        const number = match[1];
        return `SHIP-${number.padStart(3, '0')}`;
    }
    // Fallback if pattern doesn't match
    return `SHIP-${Date.now().toString().slice(-3)}`;
}

// Check if shipment already exists for a sales order
function getShipmentBySalesOrder(salesOrderId) {
    return shipments.find(s => s.salesOrderId === salesOrderId || s.orderId === salesOrderId);
}

function shipOrder(invoiceId) {
    const invoice = customerInvoices.find(inv => inv.id === invoiceId);
    if (!invoice) {
        alert('Sales order not found');
        return;
    }

    if (invoice.status !== 'Pending' && invoice.status !== 'Confirmed') {
        alert('Only pending or confirmed orders can be shipped');
        return;
    }

    // Check if shipment already exists
    const existingShipment = getShipmentBySalesOrder(invoiceId);
    if (existingShipment) {
        alert(`Shipment already exists for this order!\n\nShipment ID: ${existingShipment.id}\nStatus: ${existingShipment.status}\nTracking: ${existingShipment.trackingNumber}`);
        return;
    }

    // Generate the shipment ID that will be created
    const futureShipmentId = generateShipmentId(invoiceId);

    // Create enhanced shipment modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content large-modal">
            <div class="modal-header">
                <h3>🚚 Create Shipment for Order ${invoiceId}</h3>
                <p class="modal-subtitle">Shipment ID: <strong>${futureShipmentId}</strong></p>
                <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
            </div>
            <div class="modal-body">
                <!-- Shipment Type Section -->
                <div class="form-section">
                    <h4>📦 Shipment Type</h4>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Shipment Type</label>
                            <select id="shipmentType" required>
                                <option value="door-to-door">🏠 Door-to-Door</option>
                                <option value="container">📦 Container Shipping</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Customer Information Display -->
                <div class="form-section">
                    <h4>📍 Receiver Information</h4>
                    <div class="customer-info-display">
                        <div class="info-row">
                            <span class="info-label">Receiver:</span>
                            <span class="info-value">${invoice.customer}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">Address:</span>
                            <span class="info-value" id="customerAddressDisplay">Auto-populated from customer data</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">Contact:</span>
                            <span class="info-value" id="customerContactDisplay">Auto-populated from customer data</span>
                        </div>
                    </div>
                    <div class="info-note">
                        <small>📝 Receiver details are automatically populated from the customer information in your database.</small>
                    </div>
                </div>

                <!-- Shipping Details Section -->
                <div class="form-section">
                    <h4>🚚 Shipping Details</h4>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Shipping Date</label>
                            <input type="date" id="shipDate" value="${new Date().toISOString().split('T')[0]}" required>
                        </div>
                        <div class="form-group">
                            <label>Estimated Delivery Date</label>
                            <input type="date" id="estimatedDelivery" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Shipping Carrier</label>
                            <select id="shippingCarrier" required>
                                <option value="">Select Carrier</option>
                                <option value="china_post">China Post</option>
                                <option value="sf_express">SF Express</option>
                                <option value="dhl">DHL</option>
                                <option value="fedex">FedEx</option>
                                <option value="ups">UPS</option>
                                <option value="aramex">Aramex</option>
                                <option value="ems">EMS</option>
                                <option value="sea_freight">Sea Freight</option>
                                <option value="air_freight">Air Freight</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Tracking Number</label>
                            <input type="text" id="trackingNumber" placeholder="Enter tracking number" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Shipping Notes</label>
                        <textarea id="shipmentNotes" rows="3" placeholder="Special instructions, delivery notes, customs information, etc."></textarea>
                    </div>
                </div>

                <div class="form-section">
                    <h4>Order Summary</h4>
                    <div class="shipment-summary">
                        <div class="summary-row">
                            <span>Customer:</span>
                            <span>${invoice.customer}</span>
                        </div>
                        <div class="summary-row">
                            <span>Order Total:</span>
                            <span>$${invoice.amount.toFixed(2)}</span>
                        </div>
                        <div class="summary-row">
                            <span>Products:</span>
                            <span>${invoice.products ? invoice.products.length : 0} items</span>
                        </div>
                        ${invoice.shipping ? `
                            <div class="summary-row">
                                <span>Shipping Cost:</span>
                                <span>$${invoice.shipping.actualCost.toFixed(2)}</span>
                            </div>
                            <div class="summary-row">
                                <span>Shipping Revenue:</span>
                                <span>$${invoice.shipping.customerCharge.toFixed(2)}</span>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                <button class="btn btn-primary" onclick="confirmShipment('${invoiceId}')">🚚 Ship Order</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Set default estimated delivery (3 days from ship date)
    const shipDate = document.getElementById('shipDate');
    const estimatedDelivery = document.getElementById('estimatedDelivery');

    shipDate.addEventListener('change', function() {
        const shipDateTime = new Date(this.value);
        shipDateTime.setDate(shipDateTime.getDate() + 3);
        estimatedDelivery.value = shipDateTime.toISOString().split('T')[0];
    });

    // Trigger initial calculation
    shipDate.dispatchEvent(new Event('change'));

    // Pre-fill carrier if available from order
    if (invoice.shipping && invoice.shipping.company) {
        document.getElementById('shippingCarrier').value = invoice.shipping.company;
    }

    // Populate customer information display
    populateCustomerInfoDisplay(invoice.customer);
}

// Function to populate customer information display in shipment forms
function populateCustomerInfoDisplay(customerName) {
    console.log('📋 Populating customer info display for:', customerName);

    if (!customerName) {
        console.warn('⚠️ No customer name provided');
        return;
    }

    const customerData = customers.find(c => c.name === customerName);
    console.log('📋 Found customer data:', customerData);

    if (customerData) {
        // Update address display
        const addressDisplay = document.getElementById('customerAddressDisplay');
        if (addressDisplay) {
            addressDisplay.textContent = customerData.address || 'No address on file';
        }

        // Update contact display
        const contactDisplay = document.getElementById('customerContactDisplay');
        if (contactDisplay) {
            const contactInfo = [];
            if (customerData.phone) contactInfo.push(`📞 ${customerData.phone}`);
            if (customerData.email) contactInfo.push(`📧 ${customerData.email}`);
            contactDisplay.textContent = contactInfo.length > 0 ? contactInfo.join(' | ') : 'No contact info on file';
        }

        // Also update standalone shipment form if it exists
        const standaloneAddressDisplay = document.getElementById('displayReceiverAddress');
        if (standaloneAddressDisplay) {
            standaloneAddressDisplay.textContent = customerData.address || 'No address on file';
        }

        const standaloneContactDisplay = document.getElementById('displayReceiverContact');
        if (standaloneContactDisplay) {
            const contactInfo = [];
            if (customerData.phone) contactInfo.push(`📞 ${customerData.phone}`);
            if (customerData.email) contactInfo.push(`📧 ${customerData.email}`);
            standaloneContactDisplay.textContent = contactInfo.length > 0 ? contactInfo.join(' | ') : 'No contact info on file';
        }

        console.log('✅ Customer info display updated successfully');
    } else {
        console.warn('⚠️ Customer data not found for:', customerName);

        // Update displays to show customer not found
        const addressDisplay = document.getElementById('customerAddressDisplay');
        if (addressDisplay) {
            addressDisplay.textContent = 'Customer not found in database';
        }

        const contactDisplay = document.getElementById('customerContactDisplay');
        if (contactDisplay) {
            contactDisplay.textContent = 'Customer not found in database';
        }

        const standaloneAddressDisplay = document.getElementById('displayReceiverAddress');
        if (standaloneAddressDisplay) {
            standaloneAddressDisplay.textContent = 'Customer not found in database';
        }

        const standaloneContactDisplay = document.getElementById('displayReceiverContact');
        if (standaloneContactDisplay) {
            standaloneContactDisplay.textContent = 'Customer not found in database';
        }
    }
}

function confirmShipment(invoiceId) {
    console.log('🚚 Creating shipment for invoice:', invoiceId);

    // Validate invoice ID
    if (!invoiceId) {
        console.error('❌ No invoice ID provided');
        alert('Error: No invoice ID provided');
        return;
    }

    // Find the invoice first
    const invoice = customerInvoices.find(inv => inv.id === invoiceId);
    if (!invoice) {
        console.error('❌ Sales order not found:', invoiceId);
        alert('Error: Sales order not found');
        return;
    }

    console.log('✅ Found invoice:', invoice);

    // Get shipment details
    const shipDate = document.getElementById('shipDate').value;
    const estimatedDelivery = document.getElementById('estimatedDelivery').value;
    const carrier = document.getElementById('shippingCarrier').value;
    const trackingNumber = document.getElementById('trackingNumber').value;
    const notes = document.getElementById('shipmentNotes').value;
    const shipmentType = document.getElementById('shipmentType').value;

    // Validate required fields
    if (!shipDate || !estimatedDelivery || !carrier || !trackingNumber) {
        alert('Please fill in all required fields (marked with *)');
        return;
    }

    // Get customer information from database
    const customerData = customers.find(c => c.name === invoice.customer);

    // Auto-populate receiver details from customer data
    const receiverName = invoice.customer;
    const receiverPhone = customerData ? customerData.phone : '';
    const receiverEmail = customerData ? customerData.email : '';
    const receiverAddress = customerData ? customerData.address : '';

    // Parse address to extract city and country (basic parsing)
    let receiverCity = '';
    let receiverCountry = '';
    if (receiverAddress) {
        const addressParts = receiverAddress.split(',');
        if (addressParts.length >= 2) {
            receiverCity = addressParts[addressParts.length - 2].trim();
            receiverCountry = addressParts[addressParts.length - 1].trim();
        }
    }

    try {

        // Generate shipment ID from sales order ID (INV001 → SHIP-001)
        const shipmentId = generateShipmentId(invoiceId);

        // Create enhanced shipment record
        const shipment = {
            id: shipmentId,
            salesOrderId: invoiceId, // Link to sales order
            orderId: invoiceId, // Keep for backward compatibility
            customer: invoice.customer,
            customerName: invoice.customer,

            // Enhanced shipment details
            status: 'preparing', // Start with preparing status
            shipmentType: shipmentType,

            // Receiver details from form
            receiverDetails: {
                name: receiverName,
                address: receiverAddress,
                city: receiverCity,
                country: receiverCountry,
                phone: receiverPhone,
                email: receiverEmail
            },

            // Shipping details
            shipDate: shipDate,
            estimatedDelivery: estimatedDelivery,
            actualDelivery: null,
            carrier: carrier,
            trackingNumber: trackingNumber,
            notes: notes,

            // Copy shipping cost data from order
            shippingCost: invoice.shipping ? invoice.shipping.actualCost : 0,
            shippingRevenue: invoice.shipping ? invoice.shipping.customerCharge : 0,
            shippingProfit: invoice.shipping ? invoice.shipping.profit : 0,

            // Copy product information
            products: invoice.products ? [...invoice.products] : [],
            orderTotal: invoice.amount,

            // Enhanced tracking history with timestamps
            trackingHistory: [
                {
                    status: 'preparing',
                    date: new Date().toISOString().split('T')[0],
                    timestamp: new Date().toISOString(),
                    location: 'China - Origin Warehouse',
                    description: 'Shipment created and preparing for dispatch'
                }
            ],

            createdDate: new Date().toISOString().split('T')[0],
            createdTimestamp: new Date().toISOString()
        };

        // Add to shipments array
        shipments.push(shipment);

        // Update invoice status
        invoice.status = 'Shipped';
        invoice.shipmentId = shipment.id;
        invoice.shippedDate = shipDate;

        // Update inventory - mark products as shipped
        if (invoice.products) {
            invoice.products.forEach(orderProduct => {
                const inventoryItem = products.find(p => p.id === orderProduct.id);
                if (inventoryItem) {
                    // Update shipped quantity
                    if (!inventoryItem.shippedQuantity) {
                        inventoryItem.shippedQuantity = 0;
                    }
                    inventoryItem.shippedQuantity += orderProduct.quantity;

                    // Update available quantity
                    inventoryItem.availableQuantity = inventoryItem.quantity -
                        (inventoryItem.allocatedQuantity || 0) -
                        (inventoryItem.shippedQuantity || 0);
                }
            });
        }

        // Save data and refresh displays
        saveDataToStorage();
        loadCustomerInvoices();
        loadInventoryStatus();

        // Close modal
        document.querySelector('.modal').remove();

        alert(`✅ Shipment created successfully!\n\nSales Order: ${invoiceId}\nShipment ID: ${shipment.id}\nReceiver: ${receiverName}\nDestination: ${receiverCity}, ${receiverCountry}\nShipment Type: ${shipmentType}\nCarrier: ${carrier}\nTracking Number: ${trackingNumber}\nEstimated Delivery: ${estimatedDelivery}`);

    } catch (error) {
        console.error('Error creating shipment:', error);
        alert('Error creating shipment: ' + error.message);
    }
}

function viewShipment(invoiceId) {
    const shipment = shipments.find(s => s.orderId === invoiceId);
    if (!shipment) {
        alert('Shipment not found for this order');
        return;
    }

    // For now, show shipment details in alert (will be enhanced with dedicated page)
    let details = `Shipment Details:\n`;
    details += `Shipment ID: ${shipment.id}\n`;
    details += `Status: ${shipment.status}\n`;
    details += `Carrier: ${shipment.carrier}\n`;
    details += `Tracking Number: ${shipment.trackingNumber}\n`;
    details += `Ship Date: ${formatDate(shipment.shipDate)}\n`;
    details += `Estimated Delivery: ${formatDate(shipment.estimatedDelivery)}\n`;
    if (shipment.actualDelivery) {
        details += `Actual Delivery: ${formatDate(shipment.actualDelivery)}\n`;
    }
    if (shipment.notes) {
        details += `Notes: ${shipment.notes}\n`;
    }

    alert(details);
}

// ✅ ENHANCED SHIPMENTS PAGE FUNCTIONS
function loadShipments() {
    console.log('🚚 Loading shipments...');
    console.log('Total shipments in array:', shipments.length);

    // Check if we're on the shipments page
    const shipmentsGrid = document.getElementById('shipmentsGrid');
    const shipmentsTableBody = document.getElementById('shipmentsTableBody');

    if (!shipmentsGrid && !shipmentsTableBody) {
        console.log('❌ Not on shipments page - no shipment containers found');
        return;
    }

    console.log('✅ On shipments page - containers found');
    console.log('shipmentsGrid:', !!shipmentsGrid);
    console.log('shipmentsTableBody:', !!shipmentsTableBody);

    // Update statistics
    updateShipmentStats();

    // Apply current filters (this will display all shipments if no filters are set)
    filterShipments();

    console.log('✅ loadShipments completed');
}

// Force display all shipments without filters (for debugging)
function forceDisplayShipments() {
    console.log('🔧 FORCE DISPLAY: Attempting to display all shipments');

    const shipmentsGrid = document.getElementById('shipmentsGrid');
    const shipmentsTableBody = document.getElementById('shipmentsTableBody');

    console.log('Available shipments:', shipments.length);
    console.log('Shipments data:', shipments);

    if (shipmentsGrid) {
        console.log('📋 Forcing grid display...');
        try {
            displayShipmentsGrid(shipments, shipmentsGrid);
            console.log('✅ Grid display completed. Children:', shipmentsGrid.children.length);
        } catch (error) {
            console.error('❌ Grid display error:', error);
        }
    } else {
        console.log('❌ shipmentsGrid not found');
    }

    if (shipmentsTableBody) {
        console.log('📊 Forcing table display...');
        try {
            displayShipmentsTable(shipments, shipmentsTableBody);
            console.log('✅ Table display completed. Rows:', shipmentsTableBody.children.length);
        } catch (error) {
            console.error('❌ Table display error:', error);
        }
    } else {
        console.log('❌ shipmentsTableBody not found');
    }
}

// Reset shipments to sample data (for debugging)
function resetShipmentsToSampleData() {
    console.log('🔄 Resetting shipments to sample data...');

    shipments = [
        {
            id: "SHIP-001",
            customerId: "F16",
            customerName: "F16",
            customer: "F16",
            salesOrderId: "INV-C001",
            orderId: "INV-C001",
            products: [
                { productId: 1, productName: "Wireless Earbuds", sku: "WE-BT500", quantity: 20 }
            ],
            totalQuantity: 20,
            status: "shipped",
            trackingNumber: "1Z999AA1234567890",
            carrier: "UPS",
            shipDate: "2024-06-15",
            estimatedDelivery: "2024-06-18",
            expectedDelivery: "2024-06-18",
            actualDelivery: null,
            shipmentType: "door-to-door",
            receiverDetails: {
                name: "F16",
                address: "123 Main St",
                city: "New York",
                country: "USA",
                phone: "+1234567890",
                email: "f16@example.com"
            },
            shippingCost: 25.00,
            shippingRevenue: 35.00,
            shippingProfit: 10.00,
            orderTotal: 1199.80,
            createdDate: "2024-06-15"
        },
        {
            id: "SHIP-002",
            customerId: "Customer B",
            customerName: "Customer B",
            customer: "Customer B",
            salesOrderId: "INV-C002",
            orderId: "INV-C002",
            products: [
                { productId: 2, productName: "Smartphone Power Bank", sku: "PB-10K", quantity: 10 }
            ],
            totalQuantity: 10,
            status: "preparing",
            trackingNumber: null,
            carrier: "FedEx",
            shipDate: null,
            estimatedDelivery: "2024-06-20",
            expectedDelivery: "2024-06-20",
            actualDelivery: null,
            shipmentType: "container",
            receiverDetails: {
                name: "Customer B",
                address: "456 Oak Ave",
                city: "Los Angeles",
                country: "USA",
                phone: "+1987654321",
                email: "customerb@example.com"
            },
            shippingCost: 45.00,
            shippingRevenue: 60.00,
            shippingProfit: 15.00,
            orderTotal: 2999.90,
            createdDate: "2024-06-16"
        },
        {
            id: "SHIP-003",
            customerId: "Customer C",
            customerName: "Customer C",
            customer: "Customer C",
            salesOrderId: "INV-C003",
            orderId: "INV-C003",
            products: [
                { productId: 3, productName: "Smart Watch", sku: "SW-FIT1", quantity: 5 }
            ],
            totalQuantity: 5,
            status: "in_transit",
            trackingNumber: "FX123456789",
            carrier: "DHL",
            shipDate: "2024-06-14",
            estimatedDelivery: "2024-06-19",
            expectedDelivery: "2024-06-19",
            actualDelivery: null,
            shipmentType: "door-to-door",
            receiverDetails: {
                name: "Customer C",
                address: "789 Pine St",
                city: "Chicago",
                country: "USA",
                phone: "+1555666777",
                email: "customerc@example.com"
            },
            shippingCost: 30.00,
            shippingRevenue: 40.00,
            shippingProfit: 10.00,
            orderTotal: 1749.95,
            createdDate: "2024-06-14"
        }
    ];

    // Save to localStorage
    saveDataToStorage();

    console.log('✅ Sample shipments data reset. Total shipments:', shipments.length);

    // Force display
    if (typeof forceDisplayShipments === 'function') {
        forceDisplayShipments();
    }
}

// Simple test to add a basic shipment card (for debugging)
function addTestShipmentCard() {
    console.log('🧪 Adding test shipment card...');

    const shipmentsGrid = document.getElementById('shipmentsGrid');
    if (!shipmentsGrid) {
        console.error('❌ shipmentsGrid not found');
        return;
    }

    // Clear existing content
    shipmentsGrid.innerHTML = '';

    // Add a simple test card
    const testCard = document.createElement('div');
    testCard.className = 'shipment-card-enhanced';
    testCard.style.border = '2px solid red';
    testCard.style.padding = '20px';
    testCard.style.margin = '10px';
    testCard.style.backgroundColor = 'yellow';
    testCard.innerHTML = `
        <h3>TEST SHIPMENT CARD</h3>
        <p>This is a test card to verify the display is working</p>
        <p>If you can see this, the container is working properly</p>
    `;

    shipmentsGrid.appendChild(testCard);

    console.log('✅ Test card added. Grid children:', shipmentsGrid.children.length);
    console.log('Grid innerHTML length:', shipmentsGrid.innerHTML.length);
}

function updateShipmentStats() {
    const totalElement = document.getElementById('totalShipments');
    const inTransitElement = document.getElementById('inTransitShipments');
    const deliveredElement = document.getElementById('deliveredShipments');
    const revenueElement = document.getElementById('shippingRevenue');

    if (!totalElement) return; // Not on shipments page

    const total = shipments.length;
    const inTransit = shipments.filter(s => ['shipped', 'in_transit', 'out_for_delivery'].includes(s.status)).length;
    const delivered = shipments.filter(s => s.status === 'delivered').length;
    const revenue = shipments.reduce((sum, s) => sum + (s.shippingRevenue || 0), 0);

    totalElement.textContent = total;
    inTransitElement.textContent = inTransit;
    deliveredElement.textContent = delivered;
    revenueElement.textContent = `$${revenue.toFixed(2)}`;
}

function filterShipments() {
    const statusFilter = document.getElementById('statusFilter')?.value || '';
    const carrierFilter = document.getElementById('carrierFilter')?.value || '';
    const typeFilter = document.getElementById('typeFilter')?.value || '';
    const dateFrom = document.getElementById('dateFrom')?.value || '';
    const dateTo = document.getElementById('dateTo')?.value || '';
    const searchFilter = document.getElementById('searchFilter')?.value.toLowerCase() || '';
    const countryFilter = document.getElementById('countryFilter')?.value.toLowerCase() || '';

    // Filter shipments array
    let filteredShipments = shipments.filter(shipment => {
        let show = true;

        // Status filter
        if (statusFilter && shipment.status !== statusFilter) {
            show = false;
        }

        // Carrier filter
        if (carrierFilter && shipment.carrier !== carrierFilter) {
            show = false;
        }

        // Shipment type filter
        if (typeFilter && shipment.shipmentType !== typeFilter) {
            show = false;
        }

        // Date range filter
        if (dateFrom && shipment.shipDate < dateFrom) {
            show = false;
        }
        if (dateTo && shipment.shipDate > dateTo) {
            show = false;
        }

        // Country filter
        if (countryFilter && shipment.receiverDetails) {
            const country = shipment.receiverDetails.country?.toLowerCase() || '';
            if (!country.includes(countryFilter)) {
                show = false;
            }
        }

        // Enhanced search filter - search in multiple fields
        if (searchFilter) {
            const searchFields = [
                shipment.id,
                shipment.salesOrderId || shipment.orderId,
                shipment.customer || shipment.customerName,
                shipment.trackingNumber,
                shipment.receiverDetails?.name || '',
                shipment.receiverDetails?.city || '',
                shipment.receiverDetails?.country || '',
                shipment.carrier
            ].join(' ').toLowerCase();

            if (!searchFields.includes(searchFilter)) {
                show = false;
            }
        }

        return show;
    });

    // Update results count
    updateResultsCount(filteredShipments.length);

    // Display filtered results
    displayFilteredShipments(filteredShipments);
}

function updateResultsCount(count) {
    const resultsElement = document.getElementById('resultsCount');
    if (resultsElement) {
        resultsElement.textContent = `${count} shipment${count !== 1 ? 's' : ''}`;
    }
}

function displayFilteredShipments(filteredShipments) {
    const gridContainer = document.getElementById('shipmentsGrid');
    const tableBody = document.getElementById('shipmentsTableBody');

    if (gridContainer) {
        displayShipmentsGrid(filteredShipments, gridContainer);
    }

    if (tableBody) {
        displayShipmentsTable(filteredShipments, tableBody);
    }
}

function viewShipmentDetails(shipmentId) {
    const shipment = shipments.find(s => s.id === shipmentId);
    if (!shipment) {
        alert('Shipment not found');
        return;
    }

    let details = `Shipment Details:\n\n`;
    details += `Shipment ID: ${shipment.id}\n`;
    details += `Order ID: ${shipment.orderId}\n`;
    details += `Customer: ${shipment.customer}\n`;
    details += `Status: ${shipment.status}\n`;
    details += `Carrier: ${shipment.carrier}\n`;
    details += `Tracking Number: ${shipment.trackingNumber}\n`;
    details += `Ship Date: ${formatDate(shipment.shipDate)}\n`;
    details += `Estimated Delivery: ${formatDate(shipment.estimatedDelivery)}\n`;

    if (shipment.actualDelivery) {
        details += `Actual Delivery: ${formatDate(shipment.actualDelivery)}\n`;
    }

    details += `\nFinancial Details:\n`;
    details += `Order Total: $${shipment.orderTotal.toFixed(2)}\n`;
    details += `Shipping Cost: $${shipment.shippingCost.toFixed(2)}\n`;
    details += `Shipping Revenue: $${shipment.shippingRevenue.toFixed(2)}\n`;
    details += `Shipping Profit: $${shipment.shippingProfit.toFixed(2)}\n`;

    if (shipment.products && shipment.products.length > 0) {
        details += `\nProducts (${shipment.products.length} items):\n`;
        shipment.products.forEach(product => {
            details += `- ${product.name}: ${product.quantity} x $${product.price.toFixed(2)}\n`;
        });
    }

    if (shipment.notes) {
        details += `\nNotes: ${shipment.notes}\n`;
    }

    alert(details);
}

// ✅ ENHANCED SHIPMENT DISPLAY FUNCTIONS

// Safe date formatting function
function safeFormatDate(dateString) {
    if (!dateString || dateString === 'null' || dateString === 'undefined') {
        return 'Not specified';
    }

    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return 'Invalid date';
        }
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    } catch (error) {
        console.error('Date formatting error:', error, 'for date:', dateString);
        return 'Date error';
    }
}

function displayShipmentsGrid(shipmentsToShow, container) {
    container.innerHTML = '';

    if (shipmentsToShow.length === 0) {
        container.innerHTML = '<div class="no-data">No shipments found matching your criteria</div>';
        return;
    }

    shipmentsToShow.forEach(shipment => {
        const shipmentCard = document.createElement('div');
        shipmentCard.className = 'shipment-card-enhanced';

        const statusInfo = shipmentStatuses.find(s => s.id === shipment.status) ||
                          { icon: '📦', name: shipment.status, color: '#6b7280' };

        // Handle both old and new shipment data structures
        const receiverLocation = shipment.receiverDetails ?
            `${shipment.receiverDetails.city}, ${shipment.receiverDetails.country}` :
            'Location not specified';

        const customerName = shipment.customer || shipment.customerName || shipment.customerId || 'Unknown Customer';
        const salesOrderId = shipment.salesOrderId || shipment.orderId || 'N/A';
        const shipmentType = shipment.shipmentType || 'Standard';
        const shipDate = shipment.shipDate || shipment.createdDate || new Date().toISOString().split('T')[0];
        const deliveryDate = shipment.estimatedDelivery || shipment.expectedDelivery || 'Not specified';

        shipmentCard.innerHTML = `
            <div class="shipment-card-header">
                <div class="shipment-ids">
                    <h4 class="shipment-id">${shipment.id}</h4>
                    <p class="sales-order-id">Sales Order: ${salesOrderId}</p>
                </div>
                <div class="shipment-status">
                    <span class="status-badge-enhanced" style="background-color: ${statusInfo.color}20; color: ${statusInfo.color}; border: 1px solid ${statusInfo.color}40;">
                        ${statusInfo.icon} ${statusInfo.name}
                    </span>
                </div>
            </div>

            <div class="shipment-card-body">
                <div class="shipment-info-grid">
                    <div class="info-item">
                        <span class="info-label">👤 Customer:</span>
                        <span class="info-value">${customerName}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">📍 Destination:</span>
                        <span class="info-value">${receiverLocation}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">🚚 Carrier:</span>
                        <span class="info-value">${shipment.carrier || 'Not specified'}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">📦 Type:</span>
                        <span class="info-value">${shipmentType === 'door-to-door' ? '🏠 Door-to-Door' : shipmentType === 'container' ? '📦 Container' : '📦 ' + shipmentType}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">📋 Tracking:</span>
                        <span class="info-value tracking-number">${shipment.trackingNumber || 'Not assigned'}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">📅 Ship Date:</span>
                        <span class="info-value">${safeFormatDate(shipDate)}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">🚛 Est. Delivery:</span>
                        <span class="info-value">${safeFormatDate(deliveryDate)}</span>
                    </div>
                    ${shipment.actualDelivery ? `
                        <div class="info-item">
                            <span class="info-label">✅ Delivered:</span>
                            <span class="info-value">${safeFormatDate(shipment.actualDelivery)}</span>
                        </div>
                    ` : ''}
                </div>
            </div>

            <div class="shipment-card-footer">
                <div class="shipment-actions-enhanced">
                    <button class="btn btn-info btn-sm" onclick="viewShipmentDetails('${shipment.id}')" title="View Details">👁️ View</button>
                    <button class="btn btn-secondary btn-sm" onclick="updateShipmentStatus('${shipment.id}')" title="Update Status">📝 Update</button>
                    ${shipment.status !== 'delivered' ? `
                        <button class="btn btn-success btn-sm" onclick="markAsDelivered('${shipment.id}')" title="Mark as Delivered">✅ Delivered</button>
                    ` : ''}
                    <button class="btn btn-outline btn-sm" onclick="copyTrackingNumber('${shipment.trackingNumber || 'N/A'}')" title="Copy Tracking">📋 Copy</button>
                </div>
            </div>
        `;

        container.appendChild(shipmentCard);
    });
}

function displayShipmentsTable(shipmentsToShow, tableBody) {
    tableBody.innerHTML = '';

    if (shipmentsToShow.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="9" class="no-data">No shipments found matching your criteria</td></tr>';
        return;
    }

    shipmentsToShow.forEach(shipment => {
        const statusInfo = shipmentStatuses.find(s => s.id === shipment.status) ||
                          { icon: '📦', name: shipment.status, color: '#6b7280' };

        // Handle both old and new shipment data structures
        const receiverLocation = shipment.receiverDetails ?
            `${shipment.receiverDetails.city}, ${shipment.receiverDetails.country}` :
            'Not specified';

        const customerName = shipment.customer || shipment.customerName || shipment.customerId || 'Unknown Customer';
        const salesOrderId = shipment.salesOrderId || shipment.orderId || 'N/A';
        const shipDate = shipment.shipDate || shipment.createdDate || new Date().toISOString().split('T')[0];
        const deliveryDate = shipment.estimatedDelivery || shipment.expectedDelivery || 'Not specified';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${shipment.id}</strong></td>
            <td><strong>${salesOrderId}</strong></td>
            <td>${customerName}</td>
            <td>${receiverLocation}</td>
            <td>
                <span class="status-badge-small" style="background-color: ${statusInfo.color}20; color: ${statusInfo.color};">
                    ${statusInfo.icon} ${statusInfo.name}
                </span>
            </td>
            <td>${shipment.carrier || 'Not specified'}</td>
            <td>${safeFormatDate(shipDate)}</td>
            <td>${safeFormatDate(deliveryDate)}</td>
            <td>
                <div class="table-actions">
                    <button class="btn btn-info btn-xs" onclick="viewShipmentDetails('${shipment.id}')" title="View">👁️</button>
                    <button class="btn btn-secondary btn-xs" onclick="updateShipmentStatus('${shipment.id}')" title="Update">📝</button>
                    ${shipment.status !== 'delivered' ? `
                        <button class="btn btn-success btn-xs" onclick="markAsDelivered('${shipment.id}')" title="Delivered">✅</button>
                    ` : ''}
                </div>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// ✅ ENHANCED SEARCH AND FILTER FUNCTIONS

function clearSearch() {
    const searchInput = document.getElementById('searchFilter');
    if (searchInput) {
        searchInput.value = '';
        filterShipments();
    }
}

function clearAllFilters() {
    // Clear all filter inputs
    const filterIds = ['statusFilter', 'carrierFilter', 'typeFilter', 'dateFrom', 'dateTo', 'searchFilter', 'countryFilter'];
    filterIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.value = '';
        }
    });

    // Remove active state from quick filter buttons
    document.querySelectorAll('.quick-filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Refresh the display
    filterShipments();
}

function quickFilter(status) {
    // Clear other filters first
    clearAllFilters();

    // Set the status filter
    const statusFilter = document.getElementById('statusFilter');
    if (statusFilter) {
        statusFilter.value = status;
    }

    // Update button states
    document.querySelectorAll('.quick-filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Apply filter
    filterShipments();
}

function setView(viewType) {
    const gridView = document.getElementById('gridView');
    const tableView = document.getElementById('tableView');
    const viewButtons = document.querySelectorAll('.view-btn');

    // Update button states
    viewButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Show/hide views
    if (viewType === 'grid') {
        gridView.style.display = 'block';
        tableView.style.display = 'none';
    } else {
        gridView.style.display = 'none';
        tableView.style.display = 'block';
    }

    // Refresh the display
    filterShipments();
}

function sortShipments() {
    const sortBy = document.getElementById('sortBy')?.value || 'created_desc';

    shipments.sort((a, b) => {
        switch (sortBy) {
            case 'created_asc':
                return new Date(a.createdDate) - new Date(b.createdDate);
            case 'created_desc':
                return new Date(b.createdDate) - new Date(a.createdDate);
            case 'ship_date_asc':
                return new Date(a.shipDate) - new Date(b.shipDate);
            case 'ship_date_desc':
                return new Date(b.shipDate) - new Date(a.shipDate);
            case 'status':
                return a.status.localeCompare(b.status);
            case 'customer':
                return (a.customer || a.customerName || '').localeCompare(b.customer || b.customerName || '');
            default:
                return 0;
        }
    });

    // Refresh the display
    filterShipments();
}

function copyTrackingNumber(trackingNumber) {
    navigator.clipboard.writeText(trackingNumber).then(() => {
        // Show temporary success message
        const btn = event.target;
        const originalText = btn.innerHTML;
        btn.innerHTML = '✅ Copied';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 2000);
    }).catch(() => {
        alert(`Tracking Number: ${trackingNumber}`);
    });
}

function createNewShipment() {
    // Open the standalone shipment creation modal
    openStandaloneShipmentModal();
}

function saveFilterPreset() {
    // This could save current filter settings to localStorage
    const filters = {
        status: document.getElementById('statusFilter')?.value || '',
        carrier: document.getElementById('carrierFilter')?.value || '',
        type: document.getElementById('typeFilter')?.value || '',
        dateFrom: document.getElementById('dateFrom')?.value || '',
        dateTo: document.getElementById('dateTo')?.value || '',
        country: document.getElementById('countryFilter')?.value || ''
    };

    localStorage.setItem('shipment_filter_preset', JSON.stringify(filters));
    alert('Filter preset saved!');
}

// ✅ STANDALONE SHIPMENT CREATION FUNCTIONS

let selectedSalesOrder = null;

// Debug function to track selectedSalesOrder changes
function setSelectedSalesOrder(order, source = 'unknown') {
    console.log(`🔄 Setting selectedSalesOrder from: ${source}`);
    console.log('Previous value:', selectedSalesOrder);
    console.log('New value:', order);
    selectedSalesOrder = order;

    // Store in sessionStorage as backup
    if (order) {
        sessionStorage.setItem('selectedSalesOrder', JSON.stringify(order));
        console.log('✅ Stored in sessionStorage');
    } else {
        sessionStorage.removeItem('selectedSalesOrder');
        console.log('🗑️ Removed from sessionStorage');
    }
}

// Function to recover selectedSalesOrder from sessionStorage
function recoverSelectedSalesOrder() {
    if (!selectedSalesOrder) {
        const stored = sessionStorage.getItem('selectedSalesOrder');
        if (stored) {
            try {
                selectedSalesOrder = JSON.parse(stored);
                console.log('🔄 Recovered selectedSalesOrder from sessionStorage:', selectedSalesOrder);
                return selectedSalesOrder;
            } catch (e) {
                console.error('❌ Error parsing stored selectedSalesOrder:', e);
                sessionStorage.removeItem('selectedSalesOrder');
            }
        }
    }
    return selectedSalesOrder;
}

// Debug function to check current state
function debugSelectedSalesOrder(context = 'unknown') {
    console.log(`🐛 DEBUG selectedSalesOrder from ${context}:`);
    console.log('Current value:', selectedSalesOrder);
    console.log('SessionStorage value:', sessionStorage.getItem('selectedSalesOrder'));

    if (selectedSalesOrder) {
        console.log('✅ Order is selected:', selectedSalesOrder.id);
    } else {
        console.log('❌ No order selected');
    }

    return selectedSalesOrder;
}

function openStandaloneShipmentModal() {
    console.log('🚚 Opening standalone shipment creation modal...');

    // Reset modal state
    setSelectedSalesOrder(null, 'openStandaloneShipmentModal');

    // Reset UI elements
    const salesOrderStep = document.getElementById('salesOrderSelectionStep');
    const shipmentStep = document.getElementById('shipmentDetailsStep');
    const proceedBtn = document.getElementById('proceedToDetailsBtn');
    const createBtn = document.getElementById('createShipmentBtn');
    const selectedDisplay = document.getElementById('selectedOrderDisplay');

    if (salesOrderStep) salesOrderStep.style.display = 'block';
    if (shipmentStep) shipmentStep.style.display = 'none';
    if (proceedBtn) {
        proceedBtn.style.display = 'none';
        proceedBtn.disabled = true;
    }
    if (createBtn) {
        createBtn.style.display = 'none';
        createBtn.disabled = true;
    }
    if (selectedDisplay) selectedDisplay.textContent = 'No order selected';

    // Show modal
    const modal = document.getElementById('standaloneShipmentModal');
    if (modal) {
        modal.style.display = 'block';
        console.log('✅ Modal displayed');
    } else {
        console.error('❌ Modal element not found');
        return;
    }

    // Load sales orders
    loadSalesOrdersForShipment();
}

function closeStandaloneShipmentModal() {
    document.getElementById('standaloneShipmentModal').style.display = 'none';
    setSelectedSalesOrder(null, 'closeStandaloneShipmentModal');
}

function loadSalesOrdersForShipment() {
    console.log('Loading sales orders for shipment creation...');

    // Populate customer filter
    populateCustomerFilter();

    // Load and display sales orders
    filterSalesOrdersForShipment();
}

function populateCustomerFilter() {
    const customerFilter = document.getElementById('salesOrderCustomerFilter');
    if (!customerFilter) return;

    // Get unique customers from sales orders
    const customers = [...new Set(customerInvoices.map(order => order.customer).filter(Boolean))];

    // Clear existing options (except "All Customers")
    customerFilter.innerHTML = '<option value="">All Customers</option>';

    // Add customer options
    customers.forEach(customer => {
        const option = document.createElement('option');
        option.value = customer;
        option.textContent = customer;
        customerFilter.appendChild(option);
    });
}

function filterSalesOrdersForShipment() {
    const searchTerm = document.getElementById('salesOrderSearch')?.value.toLowerCase() || '';
    const statusFilter = document.getElementById('salesOrderStatusFilter')?.value || '';
    const customerFilter = document.getElementById('salesOrderCustomerFilter')?.value || '';

    // Filter sales orders
    let filteredOrders = customerInvoices.filter(order => {
        // Check if shipment already exists for this order
        const existingShipment = getShipmentBySalesOrder(order.id);

        let show = true;

        // Don't show orders that already have shipments
        if (existingShipment) {
            show = false;
        }

        // Status filter
        if (statusFilter && order.status !== statusFilter) {
            show = false;
        }

        // Customer filter
        if (customerFilter && order.customer !== customerFilter) {
            show = false;
        }

        // Search filter
        if (searchTerm) {
            const searchFields = [
                order.id,
                order.customer || '',
                order.products ? order.products.map(p => p.name).join(' ') : ''
            ].join(' ').toLowerCase();

            if (!searchFields.includes(searchTerm)) {
                show = false;
            }
        }

        return show;
    });

    // Update count
    updateSalesOrdersCount(filteredOrders.length);

    // Display filtered orders
    displaySalesOrdersForShipment(filteredOrders);
}

function updateSalesOrdersCount(count) {
    const countElement = document.getElementById('salesOrdersCount');
    if (countElement) {
        countElement.textContent = `${count} order${count !== 1 ? 's' : ''}`;
    }
}

function displaySalesOrdersForShipment(orders) {
    const container = document.getElementById('salesOrdersList');
    if (!container) return;

    container.innerHTML = '';

    if (orders.length === 0) {
        container.innerHTML = `
            <div class="no-sales-orders">
                <div class="no-data-icon">📋</div>
                <h4>No Available Sales Orders</h4>
                <p>No sales orders found matching your criteria, or all orders already have shipments.</p>
                <button class="btn btn-outline" onclick="clearSalesOrderFilters()">Clear Filters</button>
            </div>
        `;
        return;
    }

    orders.forEach(order => {
        const orderCard = document.createElement('div');
        orderCard.className = 'sales-order-card';
        orderCard.onclick = () => selectSalesOrder(order, orderCard);

        const statusClass = getStatusClass(order.status);
        const productCount = order.products ? order.products.length : 0;
        const totalProducts = order.products ? order.products.reduce((sum, p) => sum + p.quantity, 0) : 0;

        orderCard.innerHTML = `
            <div class="sales-order-card-header">
                <div class="order-info">
                    <h5 class="order-id">${order.id}</h5>
                    <p class="order-customer">👤 ${order.customer || 'Unknown Customer'}</p>
                </div>
                <div class="order-status">
                    <span class="status-badge ${statusClass}">${order.status}</span>
                </div>
            </div>
            <div class="sales-order-card-body">
                <div class="order-details-grid">
                    <div class="detail-item">
                        <span class="detail-label">📅 Date:</span>
                        <span class="detail-value">${formatDate(order.date)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">💰 Amount:</span>
                        <span class="detail-value">$${order.amount.toFixed(2)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">📦 Products:</span>
                        <span class="detail-value">${productCount} items (${totalProducts} total qty)</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">📋 Due Date:</span>
                        <span class="detail-value">${formatDate(order.dueDate)}</span>
                    </div>
                </div>
                ${order.products && order.products.length > 0 ? `
                    <div class="order-products-preview">
                        <strong>Products:</strong>
                        <div class="products-list">
                            ${order.products.slice(0, 3).map(product =>
                                `<span class="product-tag">${product.name} (${product.quantity})</span>`
                            ).join('')}
                            ${order.products.length > 3 ? `<span class="more-products">+${order.products.length - 3} more</span>` : ''}
                        </div>
                    </div>
                ` : ''}
            </div>
            <div class="sales-order-card-footer">
                <div class="future-shipment-id">
                    <span class="shipment-id-preview">Will create: <strong>${generateShipmentId(order.id)}</strong></span>
                </div>
                <button class="btn btn-primary btn-sm select-order-btn">
                    Select This Order →
                </button>
            </div>
        `;

        container.appendChild(orderCard);
    });
}

function selectSalesOrder(order, cardElement = null) {
    console.log('✅ Selected sales order:', order.id, order);
    setSelectedSalesOrder(order, 'selectSalesOrder');

    // Update UI to show selection
    document.querySelectorAll('.sales-order-card').forEach(card => {
        card.classList.remove('selected');
    });

    // If cardElement is provided, use it; otherwise find the card by order ID
    if (cardElement) {
        cardElement.classList.add('selected');
    } else {
        // Find the card that contains this order ID
        const cards = document.querySelectorAll('.sales-order-card');
        cards.forEach(card => {
            const orderIdElement = card.querySelector('.order-id');
            if (orderIdElement && orderIdElement.textContent === order.id) {
                card.classList.add('selected');
            }
        });
    }

    // Show proceed button
    const proceedBtn = document.getElementById('proceedToDetailsBtn');
    if (proceedBtn) {
        proceedBtn.style.display = 'inline-block';
        proceedBtn.disabled = false;
    }

    // Update selected order display
    const selectedDisplay = document.getElementById('selectedOrderDisplay');
    if (selectedDisplay) {
        selectedDisplay.textContent =
            `Selected: ${order.id} - ${order.customer} ($${order.amount.toFixed(2)})`;
    }

    console.log('✅ Sales order selection completed. selectedSalesOrder:', selectedSalesOrder);
    console.log('✅ Proceed button should now be visible and enabled');
}

function clearSalesOrderSearch() {
    const searchInput = document.getElementById('salesOrderSearch');
    if (searchInput) {
        searchInput.value = '';
        filterSalesOrdersForShipment();
    }
}

function clearSalesOrderFilters() {
    // Clear all filters
    const filterIds = ['salesOrderSearch', 'salesOrderStatusFilter', 'salesOrderCustomerFilter'];
    filterIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.value = '';
        }
    });

    // Set default status filter to show pending orders
    const statusFilter = document.getElementById('salesOrderStatusFilter');
    if (statusFilter) {
        statusFilter.value = 'Pending';
    }

    // Refresh the display
    filterSalesOrdersForShipment();
}

function refreshSalesOrdersList() {
    loadSalesOrdersForShipment();
}

function proceedToShipmentDetails() {
    console.log('📋 Proceeding to shipment details...');
    console.log('selectedSalesOrder before recovery:', selectedSalesOrder);

    // Try to recover selectedSalesOrder if it's null
    recoverSelectedSalesOrder();
    console.log('selectedSalesOrder after recovery:', selectedSalesOrder);

    if (!selectedSalesOrder) {
        console.error('❌ No sales order selected when proceeding and could not recover');
        alert('❌ Please select a sales order first!\n\nClick on a sales order card to select it, then try again.');
        return;
    }

    console.log('✅ Proceeding with order:', selectedSalesOrder.id);

    // Hide step 1, show step 2
    const step1 = document.getElementById('salesOrderSelectionStep');
    const step2 = document.getElementById('shipmentDetailsStep');
    const proceedBtn = document.getElementById('proceedToDetailsBtn');
    const createBtn = document.getElementById('createShipmentBtn');

    if (step1) step1.style.display = 'none';
    if (step2) step2.style.display = 'block';
    if (proceedBtn) {
        proceedBtn.style.display = 'none';
        proceedBtn.disabled = true;
    }
    if (createBtn) {
        createBtn.style.display = 'inline-block';
        createBtn.disabled = false;
    }

    // Generate and populate the shipment form
    try {
        generateShipmentForm(selectedSalesOrder);
        // Populate customer information display
        populateCustomerInfoDisplay(selectedSalesOrder.customer);
        console.log('✅ Shipment form generated successfully');
    } catch (error) {
        console.error('❌ Error generating shipment form:', error);
        alert('Error generating shipment form: ' + error.message);
    }
}

function goBackToOrderSelection() {
    // Show step 1, hide step 2
    document.getElementById('salesOrderSelectionStep').style.display = 'block';
    document.getElementById('shipmentDetailsStep').style.display = 'none';

    // Show proceed button (if order is selected), hide create button
    const proceedBtn = document.getElementById('proceedToDetailsBtn');
    const createBtn = document.getElementById('createShipmentBtn');

    if (proceedBtn) {
        proceedBtn.style.display = selectedSalesOrder ? 'inline-block' : 'none';
        proceedBtn.disabled = !selectedSalesOrder;
    }
    if (createBtn) {
        createBtn.style.display = 'none';
        createBtn.disabled = true;
    }
}

function generateShipmentForm(order) {
    console.log('📋 Generating shipment form for order:', order);

    // Comprehensive validation
    if (!order) {
        console.error('❌ No order provided to generateShipmentForm');
        alert('Error: No order data provided. Please go back and select an order again.');
        return;
    }

    if (!order.id) {
        console.error('❌ Order missing ID:', order);
        alert('Error: Order data is incomplete (missing ID). Please go back and select an order again.');
        return;
    }

    if (!order.customer) {
        console.error('❌ Order missing customer:', order);
        alert('Error: Order data is incomplete (missing customer). Please go back and select an order again.');
        return;
    }

    const container = document.getElementById('shipmentFormContainer');
    if (!container) {
        console.error('❌ Shipment form container not found');
        alert('Error: Shipment form container not found. Please refresh the page and try again.');
        return;
    }

    const futureShipmentId = generateShipmentId(order.id);
    console.log('✅ Will create shipment ID:', futureShipmentId);

    container.innerHTML = `
        <div class="shipment-form-sections">
            <!-- Hidden field to store selected order ID -->
            <input type="hidden" id="selectedOrderId" value="${order.id}">
            <input type="hidden" id="selectedOrderData" value="${encodeURIComponent(JSON.stringify(order))}">

            <!-- Order Summary Section -->
            <div class="form-section">
                <h4>📋 Selected Sales Order Summary</h4>
                <div class="order-summary-grid">
                    <div class="summary-item">
                        <span class="summary-label">Sales Order ID:</span>
                        <span class="summary-value"><strong>${order.id}</strong></span>
                    </div>
                    <div class="summary-item">
                        <span class="summary-label">Will Create Shipment ID:</span>
                        <span class="summary-value"><strong>${futureShipmentId}</strong></span>
                    </div>
                    <div class="summary-item">
                        <span class="summary-label">Customer:</span>
                        <span class="summary-value">${order.customer}</span>
                    </div>
                    <div class="summary-item">
                        <span class="summary-label">Order Amount:</span>
                        <span class="summary-value">$${order.amount.toFixed(2)}</span>
                    </div>
                    <div class="summary-item">
                        <span class="summary-label">Order Date:</span>
                        <span class="summary-value">${formatDate(order.date)}</span>
                    </div>
                    <div class="summary-item">
                        <span class="summary-label">Status:</span>
                        <span class="summary-value"><span class="status-badge ${getStatusClass(order.status)}">${order.status}</span></span>
                    </div>
                </div>
                ${order.products && order.products.length > 0 ? `
                    <div class="order-products-summary">
                        <h5>Products in this order:</h5>
                        <div class="products-summary-list">
                            ${order.products.map(product => `
                                <div class="product-summary-item">
                                    <span class="product-name">${product.name}</span>
                                    <span class="product-details">${product.quantity} × $${product.price.toFixed(2)} = $${product.total.toFixed(2)}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>

            <!-- Shipment Type Section -->
            <div class="form-section">
                <h4>📦 Shipment Type</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>Shipment Type <span class="required">*</span></label>
                        <select id="standaloneShipmentType" required>
                            <option value="door-to-door">🏠 Door-to-Door</option>
                            <option value="container">📦 Container Shipping</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Customer Information Display -->
            <div class="form-section">
                <h4>📍 Receiver Information</h4>
                <div class="customer-info-display">
                    <div class="info-row">
                        <span class="info-label">Receiver:</span>
                        <span class="info-value" id="displayReceiverName">${order.customer}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Address:</span>
                        <span class="info-value" id="displayReceiverAddress">Will be auto-populated from customer data</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Contact:</span>
                        <span class="info-value" id="displayReceiverContact">Will be auto-populated from customer data</span>
                    </div>
                </div>
                <div class="info-note">
                    <small>📝 Receiver details are automatically populated from the customer information in your database.</small>
                </div>
            </div>

            <!-- Shipping Details Section -->
            <div class="form-section">
                <h4>🚚 Shipping Details</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>Shipping Date <span class="required">*</span></label>
                        <input type="date" id="standaloneShipDate" value="${new Date().toISOString().split('T')[0]}" required>
                    </div>
                    <div class="form-group">
                        <label>Estimated Delivery Date <span class="required">*</span></label>
                        <input type="date" id="standaloneEstimatedDelivery" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Shipping Carrier <span class="required">*</span></label>
                        <select id="standaloneShippingCarrier" required>
                            <option value="">Select Carrier</option>
                            <option value="china_post">China Post</option>
                            <option value="sf_express">SF Express</option>
                            <option value="dhl">DHL</option>
                            <option value="fedex">FedEx</option>
                            <option value="ups">UPS</option>
                            <option value="aramex">Aramex</option>
                            <option value="ems">EMS</option>
                            <option value="sea_freight">Sea Freight</option>
                            <option value="air_freight">Air Freight</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Tracking Number <span class="required">*</span></label>
                        <input type="text" id="standaloneTrackingNumber" placeholder="Enter tracking number" required>
                    </div>
                </div>
                <div class="form-group">
                    <label>Shipping Notes</label>
                    <textarea id="standaloneShipmentNotes" rows="3" placeholder="Special instructions, delivery notes, customs information, etc."></textarea>
                </div>
            </div>
        </div>
    `;

    // Set up automatic delivery date calculation
    const shipDateInput = document.getElementById('standaloneShipDate');
    const deliveryDateInput = document.getElementById('standaloneEstimatedDelivery');

    if (shipDateInput && deliveryDateInput) {
        shipDateInput.addEventListener('change', function() {
            const shipDate = new Date(this.value);
            shipDate.setDate(shipDate.getDate() + 7); // Default 7 days for international shipping
            deliveryDateInput.value = shipDate.toISOString().split('T')[0];
        });

        // Trigger initial calculation
        shipDateInput.dispatchEvent(new Event('change'));
    }
}

function createStandaloneShipment() {
    console.log('🚚 Creating standalone shipment...');

    // Enhanced recovery mechanism with multiple fallback strategies
    let orderToUse = null;

    // Strategy 1: Use current selectedSalesOrder if available
    if (selectedSalesOrder && selectedSalesOrder.id) {
        orderToUse = selectedSalesOrder;
        console.log('✅ Using current selectedSalesOrder:', orderToUse.id);
    }

    // Strategy 2: Try to recover from sessionStorage
    if (!orderToUse) {
        try {
            const stored = sessionStorage.getItem('selectedSalesOrder');
            if (stored) {
                const parsedOrder = JSON.parse(stored);
                if (parsedOrder && parsedOrder.id) {
                    orderToUse = parsedOrder;
                    selectedSalesOrder = orderToUse; // Update the global variable
                    console.log('🔄 Recovered from sessionStorage:', orderToUse.id);
                }
            }
        } catch (e) {
            console.error('❌ Error parsing sessionStorage:', e);
        }
    }

    // Strategy 3: Try to recover from form hidden fields
    if (!orderToUse) {
        try {
            const orderDataField = document.getElementById('selectedOrderData');
            if (orderDataField && orderDataField.value) {
                const orderData = JSON.parse(decodeURIComponent(orderDataField.value));
                if (orderData && orderData.id) {
                    orderToUse = orderData;
                    selectedSalesOrder = orderToUse; // Update the global variable
                    console.log('🔄 Recovered from form hidden field:', orderToUse.id);
                }
            }
        } catch (e) {
            console.error('❌ Error parsing form hidden field:', e);
        }
    }

    // Strategy 4: Try to recover from order ID field
    if (!orderToUse) {
        try {
            const orderIdField = document.getElementById('selectedOrderId');
            if (orderIdField && orderIdField.value) {
                const orderId = orderIdField.value;
                const foundOrder = customerInvoices.find(inv => inv.id === orderId);
                if (foundOrder) {
                    orderToUse = foundOrder;
                    selectedSalesOrder = orderToUse; // Update the global variable
                    console.log('🔄 Recovered from order ID field:', orderToUse.id);
                }
            }
        } catch (e) {
            console.error('❌ Error recovering from order ID field:', e);
        }
    }

    // Final check - if we still don't have an order, show error
    if (!orderToUse || !orderToUse.id) {
        console.error('❌ No sales order could be recovered from any source');
        alert('❌ Error: No sales order selected!\n\nThis should not happen. Please:\n1. Go back and select a sales order again\n2. If the problem persists, refresh the page and try again');

        // Force user back to step 1
        goBackToOrderSelection();
        return;
    }

    console.log('✅ Sales order confirmed for shipment creation:', orderToUse.id);

    // Get form values
    const shipmentType = document.getElementById('standaloneShipmentType').value;
    const shipDate = document.getElementById('standaloneShipDate').value;
    const estimatedDelivery = document.getElementById('standaloneEstimatedDelivery').value;
    const carrier = document.getElementById('standaloneShippingCarrier').value;
    const trackingNumber = document.getElementById('standaloneTrackingNumber').value;
    const notes = document.getElementById('standaloneShipmentNotes').value;

    // Get customer information from database
    const customerData = customers.find(c => c.name === orderToUse.customer);

    // Auto-populate receiver details from customer data
    const receiverName = orderToUse.customer;
    const receiverPhone = customerData ? customerData.phone : '';
    const receiverEmail = customerData ? customerData.email : '';
    const receiverAddress = customerData ? customerData.address : '';

    // Parse address to extract city and country (basic parsing)
    let receiverCity = '';
    let receiverCountry = '';
    if (receiverAddress) {
        const addressParts = receiverAddress.split(',');
        if (addressParts.length >= 2) {
            receiverCity = addressParts[addressParts.length - 2].trim();
            receiverCountry = addressParts[addressParts.length - 1].trim();
        }
    }

    // Validate required fields
    if (!shipDate || !estimatedDelivery || !carrier || !trackingNumber) {
        alert('Please fill in all required fields (marked with *)');
        return;
    }

    // Check if shipment already exists (double-check)
    const existingShipment = getShipmentBySalesOrder(orderToUse.id);
    if (existingShipment) {
        alert(`A shipment already exists for this sales order!\n\nShipment ID: ${existingShipment.id}\nStatus: ${existingShipment.status}`);
        return;
    }

    try {
        // Generate shipment ID
        const shipmentId = generateShipmentId(orderToUse.id);

        // Create enhanced shipment record
        const shipment = {
            id: shipmentId,
            salesOrderId: orderToUse.id,
            orderId: orderToUse.id, // Keep for backward compatibility
            customer: orderToUse.customer,
            customerName: orderToUse.customer,

            // Enhanced shipment details
            status: 'preparing',
            shipmentType: shipmentType,

            // Receiver details from form
            receiverDetails: {
                name: receiverName,
                address: receiverAddress,
                city: receiverCity,
                country: receiverCountry,
                phone: receiverPhone,
                email: receiverEmail
            },

            // Shipping details
            shipDate: shipDate,
            estimatedDelivery: estimatedDelivery,
            actualDelivery: null,
            carrier: carrier,
            trackingNumber: trackingNumber,
            notes: notes,

            // Copy shipping cost data from order if available
            shippingCost: orderToUse.shipping ? orderToUse.shipping.actualCost : 0,
            shippingRevenue: orderToUse.shipping ? orderToUse.shipping.customerCharge : 0,
            shippingProfit: orderToUse.shipping ? orderToUse.shipping.profit : 0,

            // Copy product information
            products: orderToUse.products ? [...orderToUse.products] : [],
            orderTotal: orderToUse.amount,

            // Enhanced tracking history with timestamps
            trackingHistory: [
                {
                    status: 'preparing',
                    date: new Date().toISOString().split('T')[0],
                    timestamp: new Date().toISOString(),
                    location: 'China - Origin Warehouse',
                    description: 'Shipment created and preparing for dispatch'
                }
            ],

            createdDate: new Date().toISOString().split('T')[0],
            createdTimestamp: new Date().toISOString()
        };

        // Add to shipments array
        shipments.push(shipment);

        // Update sales order status in the customerInvoices array
        const orderIndex = customerInvoices.findIndex(inv => inv.id === orderToUse.id);
        if (orderIndex !== -1) {
            customerInvoices[orderIndex].status = 'Shipped';
            customerInvoices[orderIndex].shipmentId = shipment.id;
            customerInvoices[orderIndex].shippedDate = shipDate;
        }

        // Update inventory - mark products as shipped
        if (orderToUse.products) {
            orderToUse.products.forEach(orderProduct => {
                const inventoryItem = products.find(p => p.id === orderProduct.id);
                if (inventoryItem) {
                    // Update shipped quantity
                    if (!inventoryItem.shippedQuantity) {
                        inventoryItem.shippedQuantity = 0;
                    }
                    inventoryItem.shippedQuantity += orderProduct.quantity;

                    // Update available quantity
                    inventoryItem.availableQuantity = inventoryItem.quantity -
                        (inventoryItem.allocatedQuantity || 0) -
                        (inventoryItem.shippedQuantity || 0);
                }
            });
        }

        // Save data and refresh displays
        saveDataToStorage();

        // Close modal
        closeStandaloneShipmentModal();

        // Show success message
        alert(`✅ Shipment created successfully!\n\nSales Order: ${orderToUse.id}\nShipment ID: ${shipment.id}\nReceiver: ${receiverName}\nDestination: ${receiverCity}, ${receiverCountry}\nShipment Type: ${shipmentType}\nCarrier: ${carrier}\nTracking Number: ${trackingNumber}\nEstimated Delivery: ${estimatedDelivery}`);

        // Refresh shipments page if we're on it
        if (typeof loadShipments === 'function') {
            loadShipments();
        }

    } catch (error) {
        console.error('Error creating standalone shipment:', error);
        alert('Error creating shipment: ' + error.message);
    }
}

function updateShipmentStatus(shipmentId) {
    const shipment = shipments.find(s => s.id === shipmentId);
    if (!shipment) {
        alert('Shipment not found');
        return;
    }

    // Create status update modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>📝 Update Shipment Status</h3>
                <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>Current Status: <strong>${shipment.status}</strong></label>
                </div>
                <div class="form-group">
                    <label>New Status:</label>
                    <select id="newStatus" required>
                        ${shipmentStatuses.map(status =>
                            `<option value="${status.id}" ${status.id === shipment.status ? 'selected' : ''}>
                                ${status.icon} ${status.name}
                            </option>`
                        ).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>Update Notes:</label>
                    <textarea id="statusNotes" rows="3" placeholder="Optional notes about this status update"></textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                <button class="btn btn-primary" onclick="confirmStatusUpdate('${shipmentId}')">Update Status</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function confirmStatusUpdate(shipmentId) {
    const newStatus = document.getElementById('newStatus').value;
    const notes = document.getElementById('statusNotes').value;

    const shipment = shipments.find(s => s.id === shipmentId);
    if (!shipment) {
        alert('Shipment not found');
        return;
    }

    // Update shipment status
    shipment.status = newStatus;

    // Add to tracking history
    if (!shipment.trackingHistory) {
        shipment.trackingHistory = [];
    }

    shipment.trackingHistory.push({
        status: newStatus,
        date: new Date().toISOString().split('T')[0],
        description: notes || `Status updated to ${newStatus}`
    });

    // If marked as delivered, set actual delivery date
    if (newStatus === 'delivered' && !shipment.actualDelivery) {
        shipment.actualDelivery = new Date().toISOString().split('T')[0];
    }

    // Save and refresh
    saveDataToStorage();
    loadShipments();
    updateShipmentStats();

    // Close modal
    document.querySelector('.modal').remove();

    alert(`Shipment ${shipmentId} status updated to ${newStatus}`);
}

function markAsDelivered(shipmentId) {
    const shipment = shipments.find(s => s.id === shipmentId);
    if (!shipment) {
        alert('Shipment not found');
        return;
    }

    if (confirm(`Mark shipment ${shipmentId} as delivered?`)) {
        shipment.status = 'delivered';
        shipment.actualDelivery = new Date().toISOString().split('T')[0];

        // Add to tracking history
        if (!shipment.trackingHistory) {
            shipment.trackingHistory = [];
        }

        shipment.trackingHistory.push({
            status: 'delivered',
            date: shipment.actualDelivery,
            description: 'Package delivered successfully'
        });

        saveDataToStorage();
        loadShipments();
        updateShipmentStats();

        alert(`Shipment ${shipmentId} marked as delivered!`);
    }
}

function exportShipmentsToExcel() {
    try {
        const wb = XLSX.utils.book_new();

        // Shipments summary sheet
        const summaryData = [
            ['SHIPMENTS SUMMARY'],
            [''],
            ['Total Shipments', shipments.length],
            ['In Transit', shipments.filter(s => ['shipped', 'in_transit', 'out_for_delivery'].includes(s.status)).length],
            ['Delivered', shipments.filter(s => s.status === 'delivered').length],
            ['Total Shipping Revenue', shipments.reduce((sum, s) => sum + (s.shippingRevenue || 0), 0).toFixed(2)],
            ['Total Shipping Costs', shipments.reduce((sum, s) => sum + (s.shippingCost || 0), 0).toFixed(2)],
            ['Total Shipping Profit', shipments.reduce((sum, s) => sum + (s.shippingProfit || 0), 0).toFixed(2)],
            ['']
        ];

        const summaryWS = XLSX.utils.aoa_to_sheet(summaryData);
        XLSX.utils.book_append_sheet(wb, summaryWS, 'Summary');

        // Detailed shipments sheet
        const detailData = [
            ['SHIPMENTS DETAILS'],
            [''],
            ['Shipment ID', 'Order ID', 'Customer', 'Status', 'Carrier', 'Tracking Number',
             'Ship Date', 'Est. Delivery', 'Actual Delivery', 'Order Total', 'Shipping Cost',
             'Shipping Revenue', 'Shipping Profit', 'Notes']
        ];

        shipments.forEach(shipment => {
            detailData.push([
                shipment.id,
                shipment.orderId,
                shipment.customer,
                shipment.status,
                shipment.carrier,
                shipment.trackingNumber,
                shipment.shipDate,
                shipment.estimatedDelivery,
                shipment.actualDelivery || '',
                shipment.orderTotal.toFixed(2),
                shipment.shippingCost.toFixed(2),
                shipment.shippingRevenue.toFixed(2),
                shipment.shippingProfit.toFixed(2),
                shipment.notes || ''
            ]);
        });

        const detailWS = XLSX.utils.aoa_to_sheet(detailData);
        XLSX.utils.book_append_sheet(wb, detailWS, 'Shipments');

        // Performance by carrier sheet
        const carrierStats = {};
        shipments.forEach(shipment => {
            const carrier = shipment.carrier || 'Unknown';
            if (!carrierStats[carrier]) {
                carrierStats[carrier] = {
                    count: 0,
                    revenue: 0,
                    cost: 0,
                    profit: 0,
                    delivered: 0
                };
            }
            carrierStats[carrier].count += 1;
            carrierStats[carrier].revenue += shipment.shippingRevenue || 0;
            carrierStats[carrier].cost += shipment.shippingCost || 0;
            carrierStats[carrier].profit += shipment.shippingProfit || 0;
            if (shipment.status === 'delivered') {
                carrierStats[carrier].delivered += 1;
            }
        });

        const carrierData = [
            ['PERFORMANCE BY CARRIER'],
            [''],
            ['Carrier', 'Shipments', 'Delivered', 'Delivery Rate %', 'Revenue', 'Costs', 'Profit', 'Avg Profit/Shipment']
        ];

        Object.entries(carrierStats).forEach(([carrier, stats]) => {
            const deliveryRate = stats.count > 0 ? ((stats.delivered / stats.count) * 100) : 0;
            const avgProfit = stats.count > 0 ? (stats.profit / stats.count) : 0;

            carrierData.push([
                carrier,
                stats.count,
                stats.delivered,
                deliveryRate.toFixed(1),
                stats.revenue.toFixed(2),
                stats.cost.toFixed(2),
                stats.profit.toFixed(2),
                avgProfit.toFixed(2)
            ]);
        });

        const carrierWS = XLSX.utils.aoa_to_sheet(carrierData);
        XLSX.utils.book_append_sheet(wb, carrierWS, 'By Carrier');

        // Export file
        const today = new Date().toISOString().split('T')[0];
        XLSX.writeFile(wb, `Shipments_Report_${today}.xlsx`);

        alert('✅ Shipments report exported successfully!');

    } catch (error) {
        console.error('Error exporting shipments:', error);
        alert('Error exporting shipments report: ' + error.message);
    }
}

function loadShippingAnalytics() {
    const container = document.getElementById('analyticsContent');
    if (!container) return;

    const analytics = generateShippingReport();

    container.innerHTML = `
        <div class="analytics-dashboard">
            <div class="analytics-grid">
                <div class="analytics-card">
                    <h4>📊 Overall Performance</h4>
                    <div class="metric">
                        <span class="metric-label">Total Shipments:</span>
                        <span class="metric-value">${shipments.length}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Delivery Rate:</span>
                        <span class="metric-value">${shipments.length > 0 ? ((shipments.filter(s => s.status === 'delivered').length / shipments.length) * 100).toFixed(1) : 0}%</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Avg Shipping Profit:</span>
                        <span class="metric-value">$${shipments.length > 0 ? (shipments.reduce((sum, s) => sum + (s.shippingProfit || 0), 0) / shipments.length).toFixed(2) : '0.00'}</span>
                    </div>
                </div>

                <div class="analytics-card">
                    <h4>🚚 By Status</h4>
                    ${shipmentStatuses.map(status => {
                        const count = shipments.filter(s => s.status === status.id).length;
                        const percentage = shipments.length > 0 ? ((count / shipments.length) * 100) : 0;
                        return `
                            <div class="metric">
                                <span class="metric-label">${status.icon} ${status.name}:</span>
                                <span class="metric-value">${count} (${percentage.toFixed(1)}%)</span>
                            </div>
                        `;
                    }).join('')}
                </div>

                <div class="analytics-card">
                    <h4>📈 Financial Summary</h4>
                    <div class="metric">
                        <span class="metric-label">Total Revenue:</span>
                        <span class="metric-value">$${shipments.reduce((sum, s) => sum + (s.shippingRevenue || 0), 0).toFixed(2)}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Total Costs:</span>
                        <span class="metric-value">$${shipments.reduce((sum, s) => sum + (s.shippingCost || 0), 0).toFixed(2)}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Total Profit:</span>
                        <span class="metric-value profit-positive">$${shipments.reduce((sum, s) => sum + (s.shippingProfit || 0), 0).toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <div class="analytics-actions">
                <button class="btn btn-primary" onclick="exportShippingAnalyticsToExcel()">📊 Export Analytics</button>
            </div>
        </div>
    `;
}

function updateShippingAnalytics(orderShippingData) {
    if (!orderShippingData) return;

    const revenue = orderShippingData.customerCharge || 0;
    const cost = orderShippingData.actualCost || 0;
    const profit = revenue - cost;

    // Update totals
    shippingAnalytics.totalShippingRevenue += revenue;
    shippingAnalytics.totalShippingCosts += cost;
    shippingAnalytics.totalShippingProfit += profit;

    // Update average profit margin
    if (shippingAnalytics.totalShippingCosts > 0) {
        shippingAnalytics.averageProfitMargin =
            (shippingAnalytics.totalShippingProfit / shippingAnalytics.totalShippingCosts) * 100;
    }

    // Update by shipping type
    const type = orderShippingData.type || 'unknown';
    if (!shippingAnalytics.ordersByShippingType[type]) {
        shippingAnalytics.ordersByShippingType[type] = { count: 0, revenue: 0, costs: 0, profit: 0 };
    }
    shippingAnalytics.ordersByShippingType[type].count += 1;
    shippingAnalytics.ordersByShippingType[type].revenue += revenue;
    shippingAnalytics.ordersByShippingType[type].costs += cost;
    shippingAnalytics.ordersByShippingType[type].profit += profit;

    // Update by shipping company
    const company = orderShippingData.company || 'unknown';
    if (!shippingAnalytics.ordersByShippingCompany[company]) {
        shippingAnalytics.ordersByShippingCompany[company] = { count: 0, revenue: 0, costs: 0, profit: 0 };
    }
    shippingAnalytics.ordersByShippingCompany[company].count += 1;
    shippingAnalytics.ordersByShippingCompany[company].revenue += revenue;
    shippingAnalytics.ordersByShippingCompany[company].costs += cost;
    shippingAnalytics.ordersByShippingCompany[company].profit += profit;

    // Update monthly data
    const currentMonth = new Date().toISOString().slice(0, 7); // YYYY-MM format
    let monthlyData = shippingAnalytics.monthlyShippingData.find(m => m.month === currentMonth);
    if (!monthlyData) {
        monthlyData = { month: currentMonth, revenue: 0, costs: 0, profit: 0, orders: 0 };
        shippingAnalytics.monthlyShippingData.push(monthlyData);
    }
    monthlyData.revenue += revenue;
    monthlyData.costs += cost;
    monthlyData.profit += profit;
    monthlyData.orders += 1;

    console.log('Shipping analytics updated:', shippingAnalytics);
}

// ✅ INVENTORY MANAGEMENT FUNCTIONS

// Initialize inventory data structure
function initializeInventoryData() {
    if (!localStorage.getItem('inventoryData')) {
        const initialInventory = [];
        localStorage.setItem('inventoryData', JSON.stringify(initialInventory));
    }
}

// Load inventory data
function loadInventoryData() {
    console.log('📦 Loading inventory data...');

    // Ensure inventory is initialized
    initializeInventoryData();

    // Update inventory from POs and sales orders
    syncInventoryWithOrders();

    // Display inventory
    displayInventoryTable();
    updateInventoryMetrics();
}

// Sync inventory with Purchase Orders and Sales Orders
function syncInventoryWithOrders() {
    console.log('🔄 Syncing inventory with orders...');

    // Get current inventory
    let inventory = JSON.parse(localStorage.getItem('inventoryData') || '[]');

    // Process Purchase Orders to update received quantities
    purchaseOrders.forEach(po => {
        if (po.products && po.status === 'Received') {
            po.products.forEach(poProduct => {
                let inventoryItem = inventory.find(item =>
                    item.name === poProduct.name && item.sku === poProduct.sku
                );

                if (!inventoryItem) {
                    // Create new inventory item
                    inventoryItem = {
                        id: generateId(),
                        name: poProduct.name,
                        sku: poProduct.sku || generateSKU(poProduct.name),
                        supplier: po.supplier,
                        category: poProduct.category || 'General',
                        unitCost: poProduct.price,
                        totalReceived: 0,
                        availableQuantity: 0,
                        allocatedQuantity: 0,
                        shippedQuantity: 0,
                        minStockLevel: 10,
                        lastUpdated: new Date().toISOString(),
                        receivedFromPOs: []
                    };
                    inventory.push(inventoryItem);
                }

                // Check if this PO quantity is already recorded
                const existingPORecord = inventoryItem.receivedFromPOs.find(record => record.poId === po.id);
                if (!existingPORecord) {
                    inventoryItem.receivedFromPOs.push({
                        poId: po.id,
                        quantity: poProduct.quantity,
                        receivedDate: po.receivedDate || new Date().toISOString().split('T')[0]
                    });

                    inventoryItem.totalReceived += poProduct.quantity;
                    inventoryItem.availableQuantity += poProduct.quantity;
                    inventoryItem.lastUpdated = new Date().toISOString();
                }
            });
        }
    });

    // Process Customer Sales Orders to update allocated/shipped quantities
    customerInvoices.forEach(invoice => {
        if (invoice.products) {
            invoice.products.forEach(invoiceProduct => {
                let inventoryItem = inventory.find(item =>
                    item.name === invoiceProduct.name
                );

                if (inventoryItem) {
                    // Calculate allocated quantity (for pending orders)
                    if (['Pending', 'In Progress'].includes(invoice.status)) {
                        // Check if already allocated
                        if (!inventoryItem.allocatedToOrders) {
                            inventoryItem.allocatedToOrders = [];
                        }

                        const existingAllocation = inventoryItem.allocatedToOrders.find(
                            alloc => alloc.orderId === invoice.id
                        );

                        if (!existingAllocation) {
                            inventoryItem.allocatedToOrders.push({
                                orderId: invoice.id,
                                quantity: invoiceProduct.quantity
                            });
                            inventoryItem.allocatedQuantity += invoiceProduct.quantity;
                            inventoryItem.availableQuantity -= invoiceProduct.quantity;
                        }
                    }

                    // Calculate shipped quantity (for shipped orders)
                    if (invoice.status === 'Shipped') {
                        if (!inventoryItem.shippedToOrders) {
                            inventoryItem.shippedToOrders = [];
                        }

                        const existingShipment = inventoryItem.shippedToOrders.find(
                            ship => ship.orderId === invoice.id
                        );

                        if (!existingShipment) {
                            inventoryItem.shippedToOrders.push({
                                orderId: invoice.id,
                                quantity: invoiceProduct.quantity,
                                shippedDate: invoice.shippedDate || new Date().toISOString().split('T')[0]
                            });

                            // Remove from allocated if it was allocated
                            const allocIndex = inventoryItem.allocatedToOrders?.findIndex(
                                alloc => alloc.orderId === invoice.id
                            );
                            if (allocIndex >= 0) {
                                inventoryItem.allocatedQuantity -= inventoryItem.allocatedToOrders[allocIndex].quantity;
                                inventoryItem.allocatedToOrders.splice(allocIndex, 1);
                            } else {
                                inventoryItem.availableQuantity -= invoiceProduct.quantity;
                            }

                            inventoryItem.shippedQuantity += invoiceProduct.quantity;
                        }
                    }
                }
            });
        }
    });

    // Save updated inventory
    localStorage.setItem('inventoryData', JSON.stringify(inventory));
    console.log('✅ Inventory synced with orders');
}

// Display inventory table
function displayInventoryTable() {
    const tbody = document.getElementById('inventoryTableBody');
    if (!tbody) return;

    const inventory = JSON.parse(localStorage.getItem('inventoryData') || '[]');
    tbody.innerHTML = '';

    if (inventory.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="10" class="no-data">
                    <div class="no-data-message">
                        <div class="no-data-icon">📦</div>
                        <h4>No Inventory Data</h4>
                        <p>No products have been received from Purchase Orders yet.</p>
                        <button class="btn btn-primary" onclick="openReceiveGoodsModal()">📥 Receive Goods</button>
                    </div>
                </td>
            </tr>
        `;
        return;
    }

    inventory.forEach(item => {
        const stockStatus = getStockStatus(item);
        const totalValue = (item.availableQuantity * item.unitCost).toFixed(2);

        const row = document.createElement('tr');
        row.className = stockStatus.class;

        row.innerHTML = `
            <td>
                <div class="product-info">
                    <strong>${item.name}</strong>
                    <div class="product-details">
                        <span class="sku">SKU: ${item.sku}</span>
                        ${item.category ? `<span class="category">${item.category}</span>` : ''}
                    </div>
                </div>
            </td>
            <td>
                <span class="supplier-name">${item.supplier}</span>
            </td>
            <td>
                <div class="quantity-info">
                    <strong>${item.totalReceived}</strong>
                    <small>Total received</small>
                </div>
            </td>
            <td>
                <div class="quantity-info available">
                    <strong>${item.availableQuantity}</strong>
                    <small>Ready for sale</small>
                </div>
            </td>
            <td>
                <div class="quantity-info allocated">
                    <strong>${item.allocatedQuantity}</strong>
                    <small>Reserved</small>
                </div>
            </td>
            <td>
                <div class="quantity-info shipped">
                    <strong>${item.shippedQuantity}</strong>
                    <small>Delivered</small>
                </div>
            </td>
            <td>
                <span class="status-badge ${stockStatus.class}">${stockStatus.icon} ${stockStatus.text}</span>
            </td>
            <td>
                <span class="currency">$${item.unitCost.toFixed(2)}</span>
            </td>
            <td>
                <span class="currency total-value">$${totalValue}</span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-sm btn-outline" onclick="viewInventoryDetails('${item.id}')" title="View Details">
                        👁️
                    </button>
                    <button class="btn btn-sm btn-primary" onclick="adjustStock('${item.id}')" title="Adjust Stock">
                        📊
                    </button>
                </div>
            </td>
        `;

        tbody.appendChild(row);
    });

    // Update count
    const countElement = document.getElementById('inventoryCount');
    if (countElement) {
        countElement.textContent = `${inventory.length} product${inventory.length !== 1 ? 's' : ''}`;
    }
}

// Get stock status for an inventory item
function getStockStatus(item) {
    if (item.availableQuantity <= 0) {
        return { class: 'out-of-stock', icon: '❌', text: 'Out of Stock' };
    } else if (item.availableQuantity <= item.minStockLevel) {
        return { class: 'low-stock', icon: '⚠️', text: 'Low Stock' };
    } else {
        return { class: 'in-stock', icon: '✅', text: 'In Stock' };
    }
}

// Update inventory metrics
function updateInventoryMetrics() {
    const inventory = JSON.parse(localStorage.getItem('inventoryData') || '[]');

    let totalProducts = inventory.length;
    let availableItems = 0;
    let allocatedItems = 0;
    let shippedItems = 0;
    let totalValue = 0;
    let lowStockCount = 0;

    inventory.forEach(item => {
        availableItems += item.availableQuantity;
        allocatedItems += item.allocatedQuantity;
        shippedItems += item.shippedQuantity;
        totalValue += (item.availableQuantity * item.unitCost);

        if (item.availableQuantity <= item.minStockLevel) {
            lowStockCount++;
        }
    });

    // Update metric cards
    const updateMetric = (id, value) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    };

    updateMetric('totalProductsCount', totalProducts);
    updateMetric('availableItemsCount', availableItems);
    updateMetric('allocatedItemsCount', allocatedItems);
    updateMetric('shippedItemsCount', shippedItems);
    updateMetric('totalInventoryValue', `$${totalValue.toFixed(2)}`);
    updateMetric('lowStockCount', lowStockCount);
}

// Populate inventory filters
function populateInventoryFilters() {
    const inventory = JSON.parse(localStorage.getItem('inventoryData') || '[]');

    // Populate supplier filter
    const supplierFilter = document.getElementById('supplierFilter');
    if (supplierFilter) {
        const suppliers = [...new Set(inventory.map(item => item.supplier).filter(Boolean))];
        supplierFilter.innerHTML = '<option value="">All Suppliers</option>';
        suppliers.forEach(supplier => {
            const option = document.createElement('option');
            option.value = supplier;
            option.textContent = supplier;
            supplierFilter.appendChild(option);
        });
    }

    // Populate category filter
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        const categories = [...new Set(inventory.map(item => item.category).filter(Boolean))];
        categoryFilter.innerHTML = '<option value="">All Categories</option>';
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }
}

// Filter inventory
function filterInventory() {
    const searchTerm = document.getElementById('inventorySearch')?.value.toLowerCase() || '';
    const statusFilter = document.getElementById('stockStatusFilter')?.value || '';
    const supplierFilter = document.getElementById('supplierFilter')?.value || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';

    const inventory = JSON.parse(localStorage.getItem('inventoryData') || '[]');

    const filteredInventory = inventory.filter(item => {
        // Search filter
        if (searchTerm) {
            const searchFields = [
                item.name,
                item.sku,
                item.supplier,
                item.category
            ].join(' ').toLowerCase();

            if (!searchFields.includes(searchTerm)) {
                return false;
            }
        }

        // Status filter
        if (statusFilter) {
            const status = getStockStatus(item);
            if (statusFilter === 'available' && item.availableQuantity <= 0) return false;
            if (statusFilter === 'low-stock' && status.class !== 'low-stock') return false;
            if (statusFilter === 'out-of-stock' && status.class !== 'out-of-stock') return false;
            if (statusFilter === 'allocated' && item.allocatedQuantity <= 0) return false;
        }

        // Supplier filter
        if (supplierFilter && item.supplier !== supplierFilter) {
            return false;
        }

        // Category filter
        if (categoryFilter && item.category !== categoryFilter) {
            return false;
        }

        return true;
    });

    // Display filtered results
    displayFilteredInventory(filteredInventory);
}

// Display filtered inventory
function displayFilteredInventory(filteredInventory) {
    const tbody = document.getElementById('inventoryTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    if (filteredInventory.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="10" class="no-data">
                    <div class="no-data-message">
                        <div class="no-data-icon">🔍</div>
                        <h4>No Results Found</h4>
                        <p>No inventory items match your search criteria.</p>
                        <button class="btn btn-outline" onclick="clearInventoryFilters()">Clear Filters</button>
                    </div>
                </td>
            </tr>
        `;
        return;
    }

    filteredInventory.forEach(item => {
        const stockStatus = getStockStatus(item);
        const totalValue = (item.availableQuantity * item.unitCost).toFixed(2);

        const row = document.createElement('tr');
        row.className = stockStatus.class;

        row.innerHTML = `
            <td>
                <div class="product-info">
                    <strong>${item.name}</strong>
                    <div class="product-details">
                        <span class="sku">SKU: ${item.sku}</span>
                        ${item.category ? `<span class="category">${item.category}</span>` : ''}
                    </div>
                </div>
            </td>
            <td>
                <span class="supplier-name">${item.supplier}</span>
            </td>
            <td>
                <div class="quantity-info">
                    <strong>${item.totalReceived}</strong>
                    <small>Total received</small>
                </div>
            </td>
            <td>
                <div class="quantity-info available">
                    <strong>${item.availableQuantity}</strong>
                    <small>Ready for sale</small>
                </div>
            </td>
            <td>
                <div class="quantity-info allocated">
                    <strong>${item.allocatedQuantity}</strong>
                    <small>Reserved</small>
                </div>
            </td>
            <td>
                <div class="quantity-info shipped">
                    <strong>${item.shippedQuantity}</strong>
                    <small>Delivered</small>
                </div>
            </td>
            <td>
                <span class="status-badge ${stockStatus.class}">${stockStatus.icon} ${stockStatus.text}</span>
            </td>
            <td>
                <span class="currency">$${item.unitCost.toFixed(2)}</span>
            </td>
            <td>
                <span class="currency total-value">$${totalValue}</span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-sm btn-outline" onclick="viewInventoryDetails('${item.id}')" title="View Details">
                        👁️
                    </button>
                    <button class="btn btn-sm btn-primary" onclick="adjustStock('${item.id}')" title="Adjust Stock">
                        📊
                    </button>
                </div>
            </td>
        `;

        tbody.appendChild(row);
    });

    // Update count
    const countElement = document.getElementById('inventoryCount');
    if (countElement) {
        countElement.textContent = `${filteredInventory.length} product${filteredInventory.length !== 1 ? 's' : ''} (filtered)`;
    }
}

// Clear inventory filters
function clearInventoryFilters() {
    const filterIds = ['inventorySearch', 'stockStatusFilter', 'supplierFilter', 'categoryFilter'];
    filterIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = '';
    });

    displayInventoryTable();
}

// Refresh inventory data
function refreshInventoryData() {
    console.log('🔄 Refreshing inventory data...');
    loadInventoryData();
    alert('✅ Inventory data refreshed successfully!');
}

// Open receive goods modal
function openReceiveGoodsModal() {
    console.log('📥 Opening receive goods modal...');

    // Populate PO select
    const poSelect = document.getElementById('receivePOSelect');
    if (poSelect) {
        poSelect.innerHTML = '<option value="">Select a Purchase Order...</option>';

        // Get POs that are ready to receive (Ordered status)
        const readyPOs = purchaseOrders.filter(po => po.status === 'Ordered');

        readyPOs.forEach(po => {
            const option = document.createElement('option');
            option.value = po.id;
            option.textContent = `${po.id} - ${po.supplier} ($${po.amount.toFixed(2)})`;
            poSelect.appendChild(option);
        });

        if (readyPOs.length === 0) {
            poSelect.innerHTML = '<option value="">No Purchase Orders ready to receive</option>';
        }
    }

    document.getElementById('receiveGoodsModal').style.display = 'block';
}

// Close receive goods modal
function closeReceiveGoodsModal() {
    document.getElementById('receiveGoodsModal').style.display = 'none';
    document.getElementById('poItemsForReceiving').style.display = 'none';
    document.getElementById('confirmReceiveBtn').style.display = 'none';
}

// Load PO items for receiving
function loadPOItemsForReceiving() {
    const poId = document.getElementById('receivePOSelect').value;
    if (!poId) {
        document.getElementById('poItemsForReceiving').style.display = 'none';
        document.getElementById('confirmReceiveBtn').style.display = 'none';
        return;
    }

    const po = purchaseOrders.find(p => p.id === poId);
    if (!po || !po.products) {
        alert('Purchase Order not found or has no products');
        return;
    }

    const container = document.getElementById('poItemsList');
    container.innerHTML = '';

    po.products.forEach((product, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'receive-item';
        itemDiv.innerHTML = `
            <div class="receive-item-info">
                <div class="product-details">
                    <strong>${product.name}</strong>
                    <div class="product-meta">
                        <span>SKU: ${product.sku || 'N/A'}</span>
                        <span>Unit Cost: $${product.price.toFixed(2)}</span>
                    </div>
                </div>
                <div class="quantity-controls">
                    <label>Ordered: <strong>${product.quantity}</strong></label>
                    <div class="receive-quantity">
                        <label>Receive:</label>
                        <input type="number"
                               id="receiveQty_${index}"
                               value="${product.quantity}"
                               min="0"
                               max="${product.quantity}"
                               class="receive-quantity-input">
                    </div>
                </div>
            </div>
        `;
        container.appendChild(itemDiv);
    });

    document.getElementById('poItemsForReceiving').style.display = 'block';
    document.getElementById('confirmReceiveBtn').style.display = 'inline-block';
}

// Confirm receive goods
function confirmReceiveGoods() {
    const poId = document.getElementById('receivePOSelect').value;
    const po = purchaseOrders.find(p => p.id === poId);

    if (!po) {
        alert('Purchase Order not found');
        return;
    }

    let hasItemsToReceive = false;
    const receivedItems = [];

    po.products.forEach((product, index) => {
        const qtyInput = document.getElementById(`receiveQty_${index}`);
        const receiveQty = parseInt(qtyInput.value) || 0;

        if (receiveQty > 0) {
            hasItemsToReceive = true;
            receivedItems.push({
                ...product,
                receivedQuantity: receiveQty
            });
        }
    });

    if (!hasItemsToReceive) {
        alert('Please specify quantities to receive');
        return;
    }

    // Update PO status
    po.status = 'Received';
    po.receivedDate = new Date().toISOString().split('T')[0];
    po.receivedItems = receivedItems;

    // Update products with received quantities
    po.products.forEach((product, index) => {
        const qtyInput = document.getElementById(`receiveQty_${index}`);
        product.receivedQuantity = parseInt(qtyInput.value) || 0;
    });

    // Save PO changes
    saveDataToStorage();

    // Sync inventory
    syncInventoryWithOrders();

    // Refresh displays
    if (typeof loadInventoryData === 'function') {
        loadInventoryData();
    }

    // Close modal
    closeReceiveGoodsModal();

    // Show success message
    const totalReceived = receivedItems.reduce((sum, item) => sum + item.receivedQuantity, 0);
    alert(`✅ Successfully received ${totalReceived} items from PO ${po.id}!\n\nInventory has been updated.`);

    console.log('✅ Goods received and inventory updated');
}

// Open stock adjustment modal
function openStockAdjustmentModal() {
    const productSelect = document.getElementById('adjustmentProductSelect');
    if (productSelect) {
        const inventory = JSON.parse(localStorage.getItem('inventoryData') || '[]');
        productSelect.innerHTML = '<option value="">Select a product...</option>';

        inventory.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = `${item.name} (Available: ${item.availableQuantity})`;
            productSelect.appendChild(option);
        });
    }

    document.getElementById('stockAdjustmentModal').style.display = 'block';
}

// Close stock adjustment modal
function closeStockAdjustmentModal() {
    document.getElementById('stockAdjustmentModal').style.display = 'none';

    // Reset form
    const form = document.getElementById('stockAdjustmentModal');
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        if (input.type === 'number') {
            input.value = '';
        } else if (input.tagName === 'SELECT') {
            input.selectedIndex = 0;
        } else {
            input.value = '';
        }
    });
}

// Handle product selection for adjustment
document.addEventListener('change', function(e) {
    if (e.target && e.target.id === 'adjustmentProductSelect') {
        const productId = e.target.value;
        const currentQtyInput = document.getElementById('currentQuantity');

        if (productId && currentQtyInput) {
            const inventory = JSON.parse(localStorage.getItem('inventoryData') || '[]');
            const item = inventory.find(i => i.id === productId);
            if (item) {
                currentQtyInput.value = item.availableQuantity;
            }
        } else if (currentQtyInput) {
            currentQtyInput.value = '';
        }
    }
});

// Confirm stock adjustment
function confirmStockAdjustment() {
    const productId = document.getElementById('adjustmentProductSelect').value;
    const adjustmentType = document.getElementById('adjustmentType').value;
    const adjustmentQuantity = parseInt(document.getElementById('adjustmentQuantity').value) || 0;
    const reason = document.getElementById('adjustmentReason').value;

    if (!productId) {
        alert('Please select a product');
        return;
    }

    if (adjustmentQuantity <= 0) {
        alert('Please enter a valid quantity');
        return;
    }

    if (!reason.trim()) {
        alert('Please provide a reason for the adjustment');
        return;
    }

    const inventory = JSON.parse(localStorage.getItem('inventoryData') || '[]');
    const item = inventory.find(i => i.id === productId);

    if (!item) {
        alert('Product not found');
        return;
    }

    const oldQuantity = item.availableQuantity;
    let newQuantity;

    switch (adjustmentType) {
        case 'add':
            newQuantity = oldQuantity + adjustmentQuantity;
            break;
        case 'remove':
            newQuantity = Math.max(0, oldQuantity - adjustmentQuantity);
            break;
        case 'set':
            newQuantity = adjustmentQuantity;
            break;
        default:
            alert('Invalid adjustment type');
            return;
    }

    // Update inventory
    item.availableQuantity = newQuantity;
    item.lastUpdated = new Date().toISOString();

    // Add adjustment record
    if (!item.adjustmentHistory) {
        item.adjustmentHistory = [];
    }

    item.adjustmentHistory.push({
        date: new Date().toISOString(),
        type: adjustmentType,
        oldQuantity: oldQuantity,
        newQuantity: newQuantity,
        adjustmentQuantity: adjustmentQuantity,
        reason: reason
    });

    // Save changes
    localStorage.setItem('inventoryData', JSON.stringify(inventory));

    // Refresh displays
    loadInventoryData();

    // Close modal
    closeStockAdjustmentModal();

    // Show success message
    alert(`✅ Stock adjustment completed!\n\n${item.name}\nOld quantity: ${oldQuantity}\nNew quantity: ${newQuantity}\nReason: ${reason}`);
}

// Adjust stock (shortcut function)
function adjustStock(itemId) {
    openStockAdjustmentModal();

    // Pre-select the product
    setTimeout(() => {
        const productSelect = document.getElementById('adjustmentProductSelect');
        if (productSelect) {
            productSelect.value = itemId;
            productSelect.dispatchEvent(new Event('change'));
        }
    }, 100);
}

// Show low stock alerts
function showLowStockAlerts() {
    const inventory = JSON.parse(localStorage.getItem('inventoryData') || '[]');
    const lowStockItems = inventory.filter(item => item.availableQuantity <= item.minStockLevel);

    const container = document.getElementById('lowStockList');
    if (!container) return;

    if (lowStockItems.length === 0) {
        container.innerHTML = `
            <div class="no-data-message">
                <div class="no-data-icon">✅</div>
                <h4>No Low Stock Items</h4>
                <p>All products are adequately stocked.</p>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="low-stock-summary">
                <p><strong>${lowStockItems.length}</strong> product${lowStockItems.length !== 1 ? 's' : ''} need${lowStockItems.length === 1 ? 's' : ''} restocking:</p>
            </div>
            <div class="low-stock-items">
                ${lowStockItems.map(item => `
                    <div class="low-stock-item">
                        <div class="item-info">
                            <strong>${item.name}</strong>
                            <div class="item-details">
                                <span>Available: <strong class="low-stock-qty">${item.availableQuantity}</strong></span>
                                <span>Min Level: ${item.minStockLevel}</span>
                                <span>Supplier: ${item.supplier}</span>
                            </div>
                        </div>
                        <div class="item-actions">
                            <button class="btn btn-sm btn-primary" onclick="createPOForItem('${item.id}')">
                                🛒 Order More
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    document.getElementById('lowStockModal').style.display = 'block';
}

// Close low stock modal
function closeLowStockModal() {
    document.getElementById('lowStockModal').style.display = 'none';
}

// Export inventory to Excel
function exportInventoryToExcel() {
    try {
        const inventory = JSON.parse(localStorage.getItem('inventoryData') || '[]');
        const wb = XLSX.utils.book_new();

        // Inventory summary sheet
        const summaryData = [
            ['INVENTORY SUMMARY'],
            [''],
            ['Total Products', inventory.length],
            ['Total Available Items', inventory.reduce((sum, item) => sum + item.availableQuantity, 0)],
            ['Total Allocated Items', inventory.reduce((sum, item) => sum + item.allocatedQuantity, 0)],
            ['Total Shipped Items', inventory.reduce((sum, item) => sum + item.shippedQuantity, 0)],
            ['Total Inventory Value', inventory.reduce((sum, item) => sum + (item.availableQuantity * item.unitCost), 0).toFixed(2)],
            ['Low Stock Items', inventory.filter(item => item.availableQuantity <= item.minStockLevel).length],
            ['']
        ];

        const summaryWS = XLSX.utils.aoa_to_sheet(summaryData);
        XLSX.utils.book_append_sheet(wb, summaryWS, 'Summary');

        // Detailed inventory sheet
        const detailData = [
            ['INVENTORY DETAILS'],
            [''],
            ['Product Name', 'SKU', 'Supplier', 'Category', 'Total Received', 'Available', 'Allocated', 'Shipped', 'Unit Cost', 'Total Value', 'Min Stock Level', 'Status', 'Last Updated']
        ];

        inventory.forEach(item => {
            const status = getStockStatus(item);
            const totalValue = (item.availableQuantity * item.unitCost).toFixed(2);

            detailData.push([
                item.name,
                item.sku,
                item.supplier,
                item.category || '',
                item.totalReceived,
                item.availableQuantity,
                item.allocatedQuantity,
                item.shippedQuantity,
                item.unitCost.toFixed(2),
                totalValue,
                item.minStockLevel,
                status.text,
                new Date(item.lastUpdated).toLocaleDateString()
            ]);
        });

        const detailWS = XLSX.utils.aoa_to_sheet(detailData);
        XLSX.utils.book_append_sheet(wb, detailWS, 'Inventory Details');

        // Export file
        const today = new Date().toISOString().split('T')[0];
        XLSX.writeFile(wb, `Inventory_Report_${today}.xlsx`);

        alert('✅ Inventory report exported successfully!');

    } catch (error) {
        console.error('Error exporting inventory:', error);
        alert('Error exporting inventory report: ' + error.message);
    }
}

// View inventory details
function viewInventoryDetails(itemId) {
    const inventory = JSON.parse(localStorage.getItem('inventoryData') || '[]');
    const item = inventory.find(i => i.id === itemId);

    if (!item) {
        alert('Item not found');
        return;
    }

    const status = getStockStatus(item);
    const totalValue = (item.availableQuantity * item.unitCost).toFixed(2);

    let detailsHTML = `
        <div class="inventory-details">
            <h3>${item.name}</h3>
            <div class="details-grid">
                <div class="detail-item">
                    <label>SKU:</label>
                    <span>${item.sku}</span>
                </div>
                <div class="detail-item">
                    <label>Supplier:</label>
                    <span>${item.supplier}</span>
                </div>
                <div class="detail-item">
                    <label>Category:</label>
                    <span>${item.category || 'N/A'}</span>
                </div>
                <div class="detail-item">
                    <label>Unit Cost:</label>
                    <span>$${item.unitCost.toFixed(2)}</span>
                </div>
                <div class="detail-item">
                    <label>Total Received:</label>
                    <span>${item.totalReceived}</span>
                </div>
                <div class="detail-item">
                    <label>Available:</label>
                    <span>${item.availableQuantity}</span>
                </div>
                <div class="detail-item">
                    <label>Allocated:</label>
                    <span>${item.allocatedQuantity}</span>
                </div>
                <div class="detail-item">
                    <label>Shipped:</label>
                    <span>${item.shippedQuantity}</span>
                </div>
                <div class="detail-item">
                    <label>Status:</label>
                    <span class="status-badge ${status.class}">${status.icon} ${status.text}</span>
                </div>
                <div class="detail-item">
                    <label>Total Value:</label>
                    <span>$${totalValue}</span>
                </div>
                <div class="detail-item">
                    <label>Min Stock Level:</label>
                    <span>${item.minStockLevel}</span>
                </div>
                <div class="detail-item">
                    <label>Last Updated:</label>
                    <span>${new Date(item.lastUpdated).toLocaleString()}</span>
                </div>
            </div>
        </div>
    `;

    // Show in a modal or alert (simplified for now)
    alert(`Inventory Details:\n\n${item.name}\nSKU: ${item.sku}\nSupplier: ${item.supplier}\nAvailable: ${item.availableQuantity}\nAllocated: ${item.allocatedQuantity}\nShipped: ${item.shippedQuantity}\nStatus: ${status.text}\nTotal Value: $${totalValue}`);
}

// Utility functions for inventory
function generateSKU(productName) {
    const prefix = productName.substring(0, 3).toUpperCase();
    const timestamp = Date.now().toString().slice(-4);
    return `${prefix}-${timestamp}`;
}

function generateId() {
    return 'inv_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Create PO for low stock item
function createPOForItem(itemId) {
    const inventory = JSON.parse(localStorage.getItem('inventoryData') || '[]');
    const item = inventory.find(i => i.id === itemId);

    if (!item) {
        alert('Item not found');
        return;
    }

    // Calculate suggested order quantity
    const suggestedQty = Math.max(item.minStockLevel * 2, 50);

    const orderQty = prompt(
        `Create Purchase Order for: ${item.name}\n\n` +
        `Current Available: ${item.availableQuantity}\n` +
        `Minimum Stock Level: ${item.minStockLevel}\n` +
        `Suggested Order Quantity: ${suggestedQty}\n\n` +
        `Enter quantity to order:`,
        suggestedQty
    );

    if (orderQty && parseInt(orderQty) > 0) {
        // Create a new PO with this item
        const newPO = {
            id: generatePOId(),
            supplier: item.supplier,
            date: new Date().toISOString().split('T')[0],
            dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 2 weeks from now
            status: 'Ordered',
            amount: item.unitCost * parseInt(orderQty),
            products: [{
                name: item.name,
                sku: item.sku,
                quantity: parseInt(orderQty),
                price: item.unitCost,
                category: item.category
            }]
        };

        // Add to purchase orders
        purchaseOrders.push(newPO);
        saveDataToStorage();

        alert(`✅ Purchase Order ${newPO.id} created successfully!\n\nSupplier: ${newPO.supplier}\nProduct: ${item.name}\nQuantity: ${orderQty}\nTotal: $${newPO.amount.toFixed(2)}`);

        // Close low stock modal
        closeLowStockModal();
    }
}

// Generate PO ID
function generatePOId() {
    const poCount = purchaseOrders.length + 1;
    return `PO${String(poCount).padStart(3, '0')}`;
}

// Create POs from low stock (batch)
function createPOFromLowStock() {
    const inventory = JSON.parse(localStorage.getItem('inventoryData') || '[]');
    const lowStockItems = inventory.filter(item => item.availableQuantity <= item.minStockLevel);

    if (lowStockItems.length === 0) {
        alert('No low stock items to create POs for');
        return;
    }

    const confirmed = confirm(
        `Create Purchase Orders for ${lowStockItems.length} low stock items?\n\n` +
        `This will create separate POs for each supplier.`
    );

    if (confirmed) {
        // Group by supplier
        const supplierGroups = {};
        lowStockItems.forEach(item => {
            if (!supplierGroups[item.supplier]) {
                supplierGroups[item.supplier] = [];
            }
            supplierGroups[item.supplier].push(item);
        });

        let createdPOs = 0;

        // Create PO for each supplier
        Object.keys(supplierGroups).forEach(supplier => {
            const items = supplierGroups[supplier];
            let totalAmount = 0;
            const products = [];

            items.forEach(item => {
                const suggestedQty = Math.max(item.minStockLevel * 2, 50);
                totalAmount += item.unitCost * suggestedQty;
                products.push({
                    name: item.name,
                    sku: item.sku,
                    quantity: suggestedQty,
                    price: item.unitCost,
                    category: item.category
                });
            });

            const newPO = {
                id: generatePOId(),
                supplier: supplier,
                date: new Date().toISOString().split('T')[0],
                dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                status: 'Ordered',
                amount: totalAmount,
                products: products
            };

            purchaseOrders.push(newPO);
            createdPOs++;
        });

        saveDataToStorage();
        closeLowStockModal();

        alert(`✅ Successfully created ${createdPOs} Purchase Orders for low stock items!`);
    }
}

// Enhanced Customer Sales Order Creation Functions
function openCustomerInvoiceModal() {
    console.log('🔧 openCustomerInvoiceModal() called');
    console.log('Opening customer sales order modal...');

    try {
        // Reset selected products
        selectedProducts = {};

        // Set default customer and due date
        const customerSelect = document.getElementById('newInvoiceCustomer');
        const currentCustomer = document.getElementById('customer')?.value;
        if (currentCustomer && customerSelect) {
            customerSelect.value = currentCustomer;
        }

        // Set due date to 14 days from today
        const today = new Date();
        const dueDate = new Date(today);
        dueDate.setDate(dueDate.getDate() + 14);
        const dueDateElement = document.getElementById('invoiceDueDate');
        if (dueDateElement) {
            dueDateElement.value = dueDate.toISOString().split('T')[0];
        }

        // Initialize customer payment fields
        if (typeof initializeCustomerPaymentFields === 'function') {
            initializeCustomerPaymentFields();
        }

        // Load product selection list
        loadProductSelectionList();

        // Initialize commission settings
        const commissionPercentageElement = document.getElementById('invoiceCommissionPercentage');
        if (commissionPercentageElement) {
            commissionPercentageElement.value = '5.0';
        }

        // ✅ INITIALIZE SHIPPING BREAKDOWN TOGGLE
        const shippingHeader = document.querySelector('.shipping-header');
        if (shippingHeader) {
            shippingHeader.addEventListener('click', function() {
                const breakdown = document.getElementById('shippingBreakdown');
                if (breakdown) {
                    const isVisible = breakdown.style.display !== 'none';
                    breakdown.style.display = isVisible ? 'none' : 'block';
                }
            });
        }

        // Update invoice summary
        updateInvoiceSummary();

        // Show modal
        const modal = document.getElementById('customerInvoiceModal');
        if (!modal) {
            throw new Error('Customer sales order modal not found');
        }

        console.log('Modal element found:', modal);
        modal.style.display = 'block';
        console.log('Modal display set to block');

    } catch (error) {
        console.error('Error opening customer sales order modal:', error);
        alert('Error opening customer sales order form: ' + error.message + '. Please refresh the page and try again.');
    }
}

function closeCustomerInvoiceModal() {
    document.getElementById('customerInvoiceModal').style.display = 'none';
    selectedProducts = {};
}

function loadProductSelectionList() {
    console.log('Loading product selection list...');
    const container = document.getElementById('productSelectionList');
    console.log('Product selection container:', container);
    console.log('Products available:', products.length);
    container.innerHTML = '';
    
    if (products.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 20px;">No products available</p>';
        return;
    }
    
    products.forEach(product => {
        // Use enhanced inventory data if available
        const available = product.inventory ? product.inventory.available : product.remaining;
        const isOutOfStock = available <= 0;
        const isLowStock = product.inventory ? (available <= product.inventory.reorderLevel) : (available <= 10);
        const isSelected = selectedProducts[product.id];

        const productItem = document.createElement('div');
        productItem.className = `product-selection-item ${isSelected ? 'selected' : ''} ${isOutOfStock ? 'out-of-stock' : ''} ${isLowStock ? 'low-stock' : ''}`;

        productItem.innerHTML = `
            <input type="checkbox"
                   class="product-checkbox"
                   id="product-${product.id}"
                   ${isSelected ? 'checked' : ''}
                   ${isOutOfStock ? 'disabled' : ''}
                   onchange="toggleProductSelection(${product.id})">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-details">
                    SKU: ${product.sku} | Price: $${product.sellPrice.toFixed(2)}
                    ${product.inventory ? `<br><small class="text-muted">Ordered: ${product.inventory.ordered} | Received: ${product.inventory.received} | Allocated: ${product.inventory.allocated}</small>` : ''}
                </div>
            </div>
            <div class="product-availability">
                <div class="available-qty ${isOutOfStock ? 'out-of-stock' : isLowStock ? 'low-stock' : ''}">${available}</div>
                <div class="availability-label">
                    Available
                    ${isOutOfStock ? ' (Out of Stock)' : isLowStock ? ' (Low Stock)' : ''}
                </div>
            </div>
            <div class="quantity-controls">
                <label for="qty-${product.id}" style="font-size: 12px; color: #6b7280;">Qty:</label>
                <input type="number" 
                       class="quantity-input" 
                       id="qty-${product.id}" 
                       min="1" 
                       max="${available}"
                       value="${isSelected ? selectedProducts[product.id].quantity : 1}"
                       ${!isSelected || isOutOfStock ? 'disabled' : ''}
                       onchange="updateProductQuantity(${product.id}, this.value)">
            </div>
        `;
        
        container.appendChild(productItem);
    });
}

function toggleProductSelection(productId) {
    const checkbox = document.getElementById(`product-${productId}`);
    const quantityInput = document.getElementById(`qty-${productId}`);
    const productItem = checkbox.closest('.product-selection-item');
    
    if (checkbox.checked) {
        // Add product to selection
        const product = products.find(p => p.id === productId);
        const quantity = Math.min(parseInt(quantityInput.value) || 1, product.remaining);
        
        selectedProducts[productId] = {
            product: product,
            quantity: quantity
        };
        
        quantityInput.disabled = false;
        quantityInput.value = quantity;
        productItem.classList.add('selected');
    } else {
        // Remove product from selection
        delete selectedProducts[productId];
        quantityInput.disabled = true;
        productItem.classList.remove('selected');
    }
    
    updateInvoiceSummary();
}

function updateProductQuantity(productId, newQuantity) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        alert('Product not found');
        return;
    }

    // Use enhanced inventory data if available
    const available = product.inventory ? product.inventory.available : product.remaining;
    const requestedQty = parseInt(newQuantity) || 1;

    // Validate against available inventory
    if (requestedQty > available) {
        alert(`Cannot order ${requestedQty} units of ${product.name}. Only ${available} units available in stock.`);
        // Reset to maximum available or current quantity
        const currentQty = selectedProducts[productId] ? selectedProducts[productId].quantity : 1;
        const maxAllowed = Math.min(available, currentQty);
        document.getElementById(`qty-${productId}`).value = maxAllowed;
        return;
    }

    const quantity = Math.max(1, Math.min(requestedQty, available));

    if (selectedProducts[productId]) {
        selectedProducts[productId].quantity = quantity;
        document.getElementById(`qty-${productId}`).value = quantity;
        updateInvoiceSummary();
    }
}

function updateInvoiceSummary() {
    console.log('updateInvoiceSummary called');
    let subtotal = 0;

    // ✅ GET COMMISSION SETTINGS
    const commissionPercentageElement = document.getElementById('invoiceCommissionPercentage');
    console.log('Commission percentage element:', commissionPercentageElement);

    const commissionPercentage = parseFloat(commissionPercentageElement?.value) || 5.0;

    console.log('Commission percentage:', commissionPercentage);

    // Calculate subtotal from selected products
    Object.values(selectedProducts).forEach(item => {
        let productPrice = item.product.sellPrice;



        subtotal += productPrice * item.quantity;
    });

    // ✅ ENHANCED SHIPPING CALCULATION WITH CUSTOMER CHARGES
    let shippingFee = 0;
    const customerShippingCharge = parseFloat(document.getElementById('customerShippingCharge')?.value) || 0;

    if (customerShippingCharge > 0) {
        // Use the customer shipping charge from advanced shipping management
        shippingFee = customerShippingCharge;
    } else {
        // Fallback to legacy shipping method calculation
        const shipmentMethod = document.getElementById('invoiceShipmentType')?.value || 'standard';
        const shippingRates = {
            'air': 150.00,
            'sea': 200.00,
            'express': 75.00,
            'standard': 50.00,
            'local': 25.00,
            'pickup': 0.00
        };
        shippingFee = shippingRates[shipmentMethod] || 50.00;
    }

    // Calculate commission amount
    const originalSubtotal = Object.values(selectedProducts).reduce((sum, item) => {
        return sum + (item.product.sellPrice * item.quantity);
    }, 0);
    const commissionAmount = originalSubtotal * (commissionPercentage / 100);
    const total = subtotal + shippingFee + commissionAmount;

    // ✅ UPDATE DISPLAY WITH ENHANCED SHIPPING BREAKDOWN
    document.getElementById('invoiceSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('invoiceShipping').textContent = `$${shippingFee.toFixed(2)}`;
    document.getElementById('invoiceCommissionPercentageDisplay').textContent = commissionPercentage.toFixed(1);
    document.getElementById('invoiceCommissionAmount').textContent = `$${commissionAmount.toFixed(2)}`;
    document.getElementById('invoiceTotal').textContent = `$${total.toFixed(2)}`;

    // ✅ UPDATE SHIPPING BREAKDOWN
    const actualCost = parseFloat(document.getElementById('actualShippingCost')?.value) || 0;
    const customerCharge = parseFloat(document.getElementById('customerShippingCharge')?.value) || 0;
    const shippingProfit = customerCharge - actualCost;

    document.getElementById('shippingCustomerCharge').textContent = `$${customerCharge.toFixed(2)}`;
    document.getElementById('shippingActualCost').textContent = `$${actualCost.toFixed(2)}`;
    document.getElementById('shippingSummaryProfit').textContent = `$${shippingProfit.toFixed(2)}`;

    // Show/hide shipping breakdown if there's shipping data
    const shippingBreakdown = document.getElementById('shippingBreakdown');
    if (shippingBreakdown) {
        if (actualCost > 0 || customerCharge > 0) {
            shippingBreakdown.style.display = 'block';
        } else {
            shippingBreakdown.style.display = 'none';
        }
    }

    // ✅ UPDATE PROFITABILITY OVERVIEW
    const productProfit = subtotal - Object.values(selectedProducts).reduce((sum, item) => {
        return sum + (item.product.costPrice * item.quantity);
    }, 0);

    const totalProfit = productProfit + shippingProfit + commissionAmount;
    const totalCosts = Object.values(selectedProducts).reduce((sum, item) => {
        return sum + (item.product.costPrice * item.quantity);
    }, 0) + actualCost;

    const totalProfitMargin = totalCosts > 0 ? ((totalProfit / totalCosts) * 100) : 0;

    const profitMarginElement = document.getElementById('totalProfitMargin');
    const profitabilitySummary = document.getElementById('profitabilitySummary');

    if (profitMarginElement && profitabilitySummary) {
        profitMarginElement.textContent = `$${totalProfit.toFixed(2)} (${totalProfitMargin.toFixed(1)}%)`;

        // Show profitability summary if there's meaningful data
        if (totalCosts > 0) {
            profitabilitySummary.style.display = 'block';

            // Update styling based on profitability
            const profitOverview = profitabilitySummary.querySelector('.profit-overview');
            if (profitOverview) {
                if (totalProfit < 0) {
                    profitOverview.classList.add('negative');
                } else {
                    profitOverview.classList.remove('negative');
                }
            }
        } else {
            profitabilitySummary.style.display = 'none';
        }
    }

    // Show commission row
    const commissionRow = document.getElementById('invoiceCommissionRow');
    if (commissionRow) {
        commissionRow.style.display = 'flex';
        console.log('Commission row display set to:', commissionRow.style.display);
    } else {
        console.log('Commission row element not found');
    }

    console.log(`Invoice summary: Subtotal $${subtotal.toFixed(2)}, Commission $${commissionAmount.toFixed(2)}, Total $${total.toFixed(2)}`);

    // ✅ UPDATE CUSTOMER PAYMENT CALCULATIONS
    calculateCustomerPaymentAmount();
}

function saveCustomerInvoice() {
    const customer = document.getElementById('newInvoiceCustomer').value;
    const dueDate = document.getElementById('invoiceDueDate').value;

    // ✅ ENHANCED SHIPPING DATA COLLECTION
    const shippingData = {
        type: document.getElementById('invoiceShipmentType')?.value || 'standard',
        company: document.getElementById('invoiceShippingCompany')?.value || '',
        actualCost: parseFloat(document.getElementById('actualShippingCost')?.value) || 0,
        customerCharge: parseFloat(document.getElementById('customerShippingCharge')?.value) || 0,
        notes: document.getElementById('shippingNotes')?.value || '',
        profitMargin: 0 // Will be calculated below
    };

    // Calculate shipping profit margin
    if (shippingData.actualCost > 0) {
        const profit = shippingData.customerCharge - shippingData.actualCost;
        shippingData.profitMargin = (profit / shippingData.actualCost) * 100;
        shippingData.profit = profit;
    } else {
        shippingData.profit = shippingData.customerCharge;
        shippingData.profitMargin = 100;
    }

    // Get commission settings
    const commissionPercentage = parseFloat(document.getElementById('invoiceCommissionPercentage')?.value) || 5.0;
    
    // Validation
    if (!customer) {
        alert('Please select a customer');
        return;
    }
    
    if (!dueDate) {
        alert('Please select a due date');
        return;
    }
    
    if (Object.keys(selectedProducts).length === 0) {
        alert('Please select at least one product');
        return;
    }
    
    // Enhanced inventory validation
    const validationErrors = [];
    for (const [productId, item] of Object.entries(selectedProducts)) {
        const product = products.find(p => p.id === item.product.id);
        if (product) {
            const available = product.inventory ? product.inventory.available : product.remaining;
            if (item.quantity > available) {
                validationErrors.push(`${item.product.name}: Requested ${item.quantity}, Available ${available}`);
            }
        }
    }

    if (validationErrors.length > 0) {
        alert('Insufficient inventory for the following products:\n\n' + validationErrors.join('\n') + '\n\nPlease adjust quantities or receive more inventory.');
        return;
    }
    
    // ✅ CALCULATE TOTALS WITH COMMISSION INTEGRATION
    let subtotal = 0;
    let originalSubtotal = 0;

    Object.values(selectedProducts).forEach(item => {
        originalSubtotal += item.product.sellPrice * item.quantity;

        let productPrice = item.product.sellPrice;



        subtotal += productPrice * item.quantity;
    });

    // ✅ USE ENHANCED SHIPPING CHARGE
    const shippingFee = shippingData.customerCharge || 0;

    // Calculate commission amount and total
    const commissionAmount = originalSubtotal * (commissionPercentage / 100);
    const total = subtotal + shippingFee + commissionAmount;

    // ✅ GENERATE INVOICE ID FIRST (BEFORE PAYMENT PROCESSING)
    const newId = `INV-C${String(customerInvoices.length + 1).padStart(3, '0')}`;
    const today = new Date();

    // ✅ PROCESS CUSTOMER PAYMENT INTEGRATION
    const paymentOption = document.getElementById('customerPaymentOption').value;
    let paymentStatus = 'Unpaid';
    let payments = [];
    let totalPaid = 0;
    let remainingBalance = total;

    if (paymentOption !== 'none') {
        const paymentAmount = parseFloat(document.getElementById('customerPaymentAmount').value) || 0;
        const paymentMethod = document.getElementById('customerPaymentMethod').value;
        const paymentDate = document.getElementById('customerPaymentDate').value;
        const paymentReference = document.getElementById('customerPaymentReference').value;
        const paymentNotes = document.getElementById('customerPaymentNotes').value;

        if (paymentAmount > 0) {
            // Create payment record
            const paymentId = `PAY-${newId}-001`;
            const payment = {
                id: paymentId,
                amount: paymentAmount,
                method: paymentMethod,
                date: paymentDate,
                reference: paymentReference || paymentId,
                type: paymentOption,
                notes: paymentNotes
            };

            payments.push(payment);
            totalPaid = paymentAmount;
            remainingBalance = total - paymentAmount;

            // Determine payment status
            if (paymentAmount >= total) {
                paymentStatus = 'Paid';
            } else {
                paymentStatus = 'Partial';
            }
        }
    }

    // Create invoice with enhanced payment integration
    const newInvoice = {
        id: newId,
        date: today.toISOString().split('T')[0],
        dueDate: dueDate,
        amount: total,
        status: 'Pending', // Order status
        customer: customer,

        // ✅ ENHANCED SHIPPING MANAGEMENT DATA
        shipping: shippingData,
        shipmentMethod: shippingData.type, // For backward compatibility

        // Commission settings
        commissionPercentage: commissionPercentage,
        commissionAmount: commissionAmount,

        products: Object.values(selectedProducts).map(item => {
            let productPrice = item.product.sellPrice;
            let displayPrice = productPrice;



            return {
                id: item.product.id,
                name: item.product.name,
                sku: item.product.sku,
                quantity: item.quantity,
                price: productPrice,
                total: productPrice * item.quantity,
                allocated: false, // Track allocation status
                shipped: false   // Track shipping status
            };
        }),
        subtotal: subtotal,
        shippingFee: shippingFee,
        fulfillmentStatus: 'pending', // pending, allocated, shipped, delivered
        // ✅ ENHANCED CUSTOMER PAYMENT INTEGRATION
        paymentStatus: paymentStatus,
        payments: payments,
        totalPaid: totalPaid,
        remainingBalance: remainingBalance
    };

    // Allocate inventory for each product
    let allocationSuccess = true;
    const allocationResults = [];

    Object.values(selectedProducts).forEach(item => {
        const result = allocateInventory(item.product.id, item.quantity, newInvoice.id);
        allocationResults.push(result);
        if (!result.success) {
            allocationSuccess = false;
        } else {
            // Mark product as allocated in the invoice
            const invoiceProduct = newInvoice.products.find(p => p.id === item.product.id);
            if (invoiceProduct) {
                invoiceProduct.allocated = true;
                invoiceProduct.allocationDate = new Date().toISOString().split('T')[0];
            }
        }
    });

    if (!allocationSuccess) {
        alert('Failed to allocate inventory:\n\n' + allocationResults.filter(r => !r.success).map(r => r.message).join('\n'));
        return;
    }

    // Update invoice fulfillment status
    newInvoice.fulfillmentStatus = 'allocated';
    
    // Add to invoices
    customerInvoices.push(newInvoice);

    // ✅ UPDATE SHIPPING ANALYTICS
    updateShippingAnalytics(shippingData);

    // Refresh displays
    loadCustomerInvoices();
    loadInventoryStatus();
    saveDataToStorage();
    
    // Close modal
    closeCustomerInvoiceModal();
    
    // ✅ ENHANCED SUCCESS MESSAGE WITH PAYMENT INFO
    let successMessage = `✅ Customer Sales Order ${newId} created successfully!\n\n`;
    successMessage += `📋 Sales Order Details:\n`;
    successMessage += `• Customer: ${customer}\n`;
    successMessage += `• Total Amount: $${total.toFixed(2)}\n`;
    successMessage += `• Products: ${Object.keys(selectedProducts).length}\n`;
    successMessage += `• Due Date: ${dueDate}\n`;
    successMessage += `• Shipment: ${shipmentMethod}\n\n`;

    successMessage += `💰 Payment Status:\n`;
    if (paymentOption === 'none') {
        successMessage += `• Payment Status: Unpaid\n`;
        successMessage += `• Outstanding Balance: $${total.toFixed(2)}\n`;
    } else {
        successMessage += `• Payment Status: ${paymentStatus}\n`;
        successMessage += `• Amount Received: $${totalPaid.toFixed(2)}\n`;
        successMessage += `• Remaining Balance: $${remainingBalance.toFixed(2)}\n`;
        if (payments.length > 0) {
            successMessage += `• Payment Method: ${payments[0].method}\n`;
        }
    }

    successMessage += `\n📦 Inventory has been allocated for all products!`;

    alert(successMessage);
}

// Enhanced Supplier Invoice/PO Creation Functions
function openSupplierInvoiceModal() {
    console.log('🔧 openSupplierInvoiceModal() called');
    console.log('Opening supplier invoice modal...');

    // Reset selected products
    selectedSupplierProducts = {};
    
    // Set default supplier and delivery date
    const supplierSelect = document.getElementById('supplierModalSupplier');
    const currentSupplier = document.getElementById('orderSupplier') ? document.getElementById('orderSupplier').value : '';
    if (currentSupplier) {
        supplierSelect.value = currentSupplier;
    }

    // Set delivery date to 30 days from today
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(deliveryDate.getDate() + 30);
    document.getElementById('supplierModalDeliveryDate').value = deliveryDate.toISOString().split('T')[0];

    // Generate PO number
    const newPoNumber = `PO-S${String(supplierInvoices.length + 1).padStart(3, '0')}`;
    document.getElementById('supplierModalPONumber').value = newPoNumber;

    // ✅ INITIALIZE PAYMENT FIELDS
    initializePaymentFields();

    // Load product selection list for supplier
    loadSupplierProductSelectionList();

    // Update PO summary
    updateSupplierInvoiceSummary();

    // Show modal
    const modal = document.getElementById('supplierInvoiceModal');
    console.log('Supplier modal element found:', modal);
    modal.style.display = 'block';
    console.log('Supplier modal display set to block');
}

// ✅ PAYMENT INTEGRATION FUNCTIONS
function initializePaymentFields() {
    // Reset payment fields
    document.getElementById('supplierPaymentOption').value = 'none';
    document.getElementById('supplierPaymentPercentage').value = '50';
    document.getElementById('supplierPaymentAmount').value = '';
    document.getElementById('supplierPaymentMethod').value = 'Bank Transfer';
    document.getElementById('supplierPaymentDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('supplierPaymentReference').value = '';
    document.getElementById('supplierPaymentNotes').value = '';

    // Hide payment sections
    document.getElementById('paymentPercentageGroup').style.display = 'none';
    document.getElementById('paymentDetailsSection').style.display = 'none';

    // Update displays
    document.getElementById('paymentAmountDisplay').textContent = '$0.00';
    document.getElementById('remainingBalanceDisplay').textContent = '$0.00';
}

function togglePaymentFields() {
    const paymentOption = document.getElementById('supplierPaymentOption').value;
    const percentageGroup = document.getElementById('paymentPercentageGroup');
    const detailsSection = document.getElementById('paymentDetailsSection');

    if (paymentOption === 'none') {
        percentageGroup.style.display = 'none';
        detailsSection.style.display = 'none';
    } else if (paymentOption === 'down_payment') {
        percentageGroup.style.display = 'block';
        detailsSection.style.display = 'block';
        calculatePaymentAmount();
    } else if (paymentOption === 'full_payment') {
        percentageGroup.style.display = 'none';
        detailsSection.style.display = 'block';
        calculatePaymentAmount();
    }
}

function calculatePaymentAmount() {
    const paymentOption = document.getElementById('supplierPaymentOption').value;
    const totalAmount = parseFloat(document.getElementById('supplierModalTotal').textContent.replace('$', '')) || 0;
    let paymentAmount = 0;

    if (paymentOption === 'full_payment') {
        paymentAmount = totalAmount;
    } else if (paymentOption === 'down_payment') {
        const percentage = parseFloat(document.getElementById('supplierPaymentPercentage').value) || 0;
        paymentAmount = totalAmount * (percentage / 100);
    }

    const remainingBalance = totalAmount - paymentAmount;

    // Update displays
    document.getElementById('supplierPaymentAmount').value = paymentAmount.toFixed(2);
    document.getElementById('paymentAmountDisplay').textContent = `$${paymentAmount.toFixed(2)}`;
    document.getElementById('remainingBalanceDisplay').textContent = `$${remainingBalance.toFixed(2)}`;
}

// ✅ CUSTOMER PAYMENT INTEGRATION FUNCTIONS
function initializeCustomerPaymentFields() {
    // Reset payment fields
    document.getElementById('customerPaymentOption').value = 'none';
    document.getElementById('customerPaymentPercentage').value = '50';
    document.getElementById('customerPaymentAmount').value = '';
    document.getElementById('customerPaymentMethod').value = 'Bank Transfer';
    document.getElementById('customerPaymentDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('customerPaymentReference').value = '';
    document.getElementById('customerPaymentNotes').value = '';

    // Hide payment sections
    document.getElementById('customerPaymentPercentageGroup').style.display = 'none';
    document.getElementById('customerPaymentDetailsSection').style.display = 'none';

    // Update displays
    document.getElementById('customerPaymentAmountDisplay').textContent = '$0.00';
    document.getElementById('customerRemainingBalanceDisplay').textContent = '$0.00';
}

function toggleCustomerPaymentFields() {
    const paymentOption = document.getElementById('customerPaymentOption').value;
    const percentageGroup = document.getElementById('customerPaymentPercentageGroup');
    const detailsSection = document.getElementById('customerPaymentDetailsSection');

    if (paymentOption === 'none') {
        percentageGroup.style.display = 'none';
        detailsSection.style.display = 'none';
    } else if (paymentOption === 'partial_payment') {
        percentageGroup.style.display = 'block';
        detailsSection.style.display = 'block';
        calculateCustomerPaymentAmount();
    } else if (paymentOption === 'full_payment') {
        percentageGroup.style.display = 'none';
        detailsSection.style.display = 'block';
        calculateCustomerPaymentAmount();
    }
}

function calculateCustomerPaymentAmount() {
    try {
        const paymentOption = document.getElementById('customerPaymentOption').value;
        const totalAmount = parseFloat(document.getElementById('invoiceTotal').textContent.replace('$', '')) || 0;
        let paymentAmount = 0;

        if (paymentOption === 'full_payment') {
            paymentAmount = totalAmount;
        } else if (paymentOption === 'partial_payment') {
            const percentage = parseFloat(document.getElementById('customerPaymentPercentage').value) || 0;
            paymentAmount = totalAmount * (percentage / 100);
        }

        const remainingBalance = totalAmount - paymentAmount;

        // Update displays
        document.getElementById('customerPaymentAmount').value = paymentAmount.toFixed(2);
        document.getElementById('customerPaymentAmountDisplay').textContent = `$${paymentAmount.toFixed(2)}`;
        document.getElementById('customerRemainingBalanceDisplay').textContent = `$${remainingBalance.toFixed(2)}`;
    } catch (error) {
        console.error('Error calculating customer payment amount:', error);
        // Set default values if there's an error
        document.getElementById('customerPaymentAmount').value = '0.00';
        document.getElementById('customerPaymentAmountDisplay').textContent = '$0.00';
        document.getElementById('customerRemainingBalanceDisplay').textContent = '$0.00';
    }
}

function closeSupplierInvoiceModal() {
    document.getElementById('supplierInvoiceModal').style.display = 'none';
    selectedSupplierProducts = {};
}

function loadSupplierProductSelectionList() {
    console.log('Loading supplier product selection list...');
    const container = document.getElementById('supplierProductSelectionList');
    console.log('Supplier product selection container:', container);
    console.log('Products available:', products.length);
    container.innerHTML = '';
    
    if (products.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 20px;">No products available</p>';
        return;
    }
    
    products.forEach(product => {
        const isSelected = selectedSupplierProducts[product.id];
        
        const productItem = document.createElement('div');
        productItem.className = `product-selection-item ${isSelected ? 'selected' : ''}`;
        
        productItem.innerHTML = `
            <input type="checkbox" 
                   class="product-checkbox" 
                   id="supplier-product-${product.id}" 
                   ${isSelected ? 'checked' : ''} 
                   onchange="toggleSupplierProductSelection(${product.id})">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-details">SKU: ${product.sku} | Cost Price: $${product.costPrice.toFixed(2)}</div>
            </div>
            <div class="product-availability">
                <div class="available-qty">∞</div>
                <div class="availability-label">Available</div>
            </div>
            <div class="quantity-controls">
                <label for="supplier-qty-${product.id}" style="font-size: 12px; color: #6b7280;">Qty:</label>
                <input type="number" 
                       class="quantity-input" 
                       id="supplier-qty-${product.id}" 
                       min="1" 
                       value="${isSelected ? selectedSupplierProducts[product.id].quantity : 1}"
                       ${!isSelected ? 'disabled' : ''}
                       onchange="updateSupplierProductQuantity(${product.id}, this.value)">
            </div>
        `;
        
        container.appendChild(productItem);
    });
}

function toggleSupplierProductSelection(productId) {
    const checkbox = document.getElementById(`supplier-product-${productId}`);
    const quantityInput = document.getElementById(`supplier-qty-${productId}`);
    const productItem = checkbox.closest('.product-selection-item');
    
    if (checkbox.checked) {
        // Add product to selection
        const product = products.find(p => p.id === productId);
        const quantity = parseInt(quantityInput.value) || 1;
        
        selectedSupplierProducts[productId] = {
            product: product,
            quantity: quantity
        };
        
        quantityInput.disabled = false;
        quantityInput.value = quantity;
        productItem.classList.add('selected');
    } else {
        // Remove product from selection
        delete selectedSupplierProducts[productId];
        quantityInput.disabled = true;
        productItem.classList.remove('selected');
    }
    
    updateSupplierInvoiceSummary();
}

function updateSupplierProductQuantity(productId, newQuantity) {
    const quantity = Math.max(1, parseInt(newQuantity) || 1);
    
    if (selectedSupplierProducts[productId]) {
        selectedSupplierProducts[productId].quantity = quantity;
        document.getElementById(`supplier-qty-${productId}`).value = quantity;
        updateSupplierInvoiceSummary();
    }
}

function updateSupplierInvoiceSummary() {
    let subtotal = 0;

    // Calculate subtotal from selected products using cost prices
    Object.values(selectedSupplierProducts).forEach(item => {
        subtotal += item.product.costPrice * item.quantity;
    });

    // Calculate tax (optional - can be 0 for now)
    const taxRate = 0.00; // 0% tax for now, can be made configurable
    const tax = subtotal * taxRate;

    const total = subtotal + tax;

    // Update display
    document.getElementById('supplierModalSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('supplierModalTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('supplierModalTotal').textContent = `$${total.toFixed(2)}`;

    // ✅ UPDATE PAYMENT CALCULATIONS
    calculatePaymentAmount();
}

function saveSupplierInvoice() {
    const supplier = document.getElementById('supplierModalSupplier').value;
    const deliveryDate = document.getElementById('supplierModalDeliveryDate').value;
    const paymentTerms = document.getElementById('supplierModalPaymentTerms').value;
    const poNumber = document.getElementById('supplierModalPONumber').value;
    
    // Validation
    if (!supplier) {
        alert('Please select a supplier');
        return;
    }
    
    if (!deliveryDate) {
        alert('Please select an expected delivery date');
        return;
    }
    
    if (Object.keys(selectedSupplierProducts).length === 0) {
        alert('Please select at least one product');
        return;
    }
    
    // Calculate totals using cost prices
    let subtotal = 0;
    Object.values(selectedSupplierProducts).forEach(item => {
        subtotal += item.product.costPrice * item.quantity;
    });
    
    // Calculate tax (optional)
    const taxRate = 0.00; // 0% tax for now
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    
    // Calculate due date based on payment terms
    const today = new Date();
    let dueDate = new Date(today);
    
    switch (paymentTerms) {
        case 'net30':
            dueDate.setDate(dueDate.getDate() + 30);
            break;
        case 'net15':
            dueDate.setDate(dueDate.getDate() + 15);
            break;
        case 'net7':
            dueDate.setDate(dueDate.getDate() + 7);
            break;
        case 'cod':
        case 'prepaid':
            dueDate = new Date(today); // Same day
            break;
        default:
            dueDate.setDate(dueDate.getDate() + 30);
    }
    
    // ✅ PROCESS PAYMENT INTEGRATION
    const paymentOption = document.getElementById('supplierPaymentOption').value;
    let paymentStatus = 'Unpaid';
    let payments = [];
    let totalPaid = 0;
    let remainingBalance = total;

    if (paymentOption !== 'none') {
        const paymentAmount = parseFloat(document.getElementById('supplierPaymentAmount').value) || 0;
        const paymentMethod = document.getElementById('supplierPaymentMethod').value;
        const paymentDate = document.getElementById('supplierPaymentDate').value;
        const paymentReference = document.getElementById('supplierPaymentReference').value;
        const paymentNotes = document.getElementById('supplierPaymentNotes').value;

        if (paymentAmount > 0) {
            // Create payment record
            const paymentId = `PAY-${poNumber}-001`;
            const payment = {
                id: paymentId,
                amount: paymentAmount,
                method: paymentMethod,
                date: paymentDate,
                reference: paymentReference || paymentId,
                type: paymentOption,
                notes: paymentNotes
            };

            payments.push(payment);
            totalPaid = paymentAmount;
            remainingBalance = total - paymentAmount;

            // Determine payment status
            if (paymentAmount >= total) {
                paymentStatus = 'Paid';
            } else {
                paymentStatus = 'Partial';
            }
        }
    }

    // Create supplier invoice/PO with enhanced payment integration
    const newInvoice = {
        id: poNumber,
        date: today.toISOString().split('T')[0],
        dueDate: dueDate.toISOString().split('T')[0],
        deliveryDate: deliveryDate,
        amount: total,
        status: 'Pending', // Order status
        supplier: supplier,
        paymentTerms: paymentTerms,
        products: Object.values(selectedSupplierProducts).map(item => ({
            id: item.product.id,
            name: item.product.name,
            sku: item.product.sku,
            quantity: item.quantity,
            price: item.product.costPrice,
            total: item.product.costPrice * item.quantity
        })),
        subtotal: subtotal,
        tax: tax,
        // ✅ ENHANCED PAYMENT INTEGRATION
        paymentStatus: paymentStatus,
        payments: payments,
        totalPaid: totalPaid,
        remainingBalance: remainingBalance
    };
    
    // Add to supplier invoices
    supplierInvoices.push(newInvoice);

    // ✅ UPDATE INVENTORY SYSTEM - Add ordered quantities to inventory
    Object.values(selectedSupplierProducts).forEach(item => {
        const product = products.find(p => p.id === item.product.id);
        if (product) {
            // Initialize inventory if it doesn't exist
            if (!product.inventory) {
                product.inventory = {
                    ordered: 0,
                    received: 0,
                    available: 0,
                    allocated: 0,
                    shipped: 0,
                    reorderLevel: 10,
                    lastReceived: null,
                    lastOrdered: null,
                    status: 'out_of_stock'
                };
            }

            // Add ordered quantity to inventory
            product.inventory.ordered += item.quantity;
            product.inventory.lastOrdered = today.toISOString().split('T')[0];

            // Update inventory status
            product.inventory.status = determineStockStatus(product);

            console.log(`Updated inventory for ${product.name}: ordered +${item.quantity} (total ordered: ${product.inventory.ordered})`);
        }
    });

    // Refresh displays
    loadSupplierInvoices();
    loadInventoryStatus(); // ✅ Refresh inventory display
    loadProducts(); // ✅ Refresh products display
    saveDataToStorage();

    // Close modal
    closeSupplierInvoiceModal();

    // ✅ ENHANCED SUCCESS MESSAGE WITH PAYMENT INFO
    let successMessage = `✅ Purchase Order ${poNumber} created successfully!\n\n`;
    successMessage += `📋 Order Details:\n`;
    successMessage += `• Supplier: ${supplier}\n`;
    successMessage += `• Total Amount: $${total.toFixed(2)}\n`;
    successMessage += `• Products: ${Object.keys(selectedSupplierProducts).length}\n`;
    successMessage += `• Expected Delivery: ${deliveryDate}\n\n`;

    successMessage += `💳 Payment Status:\n`;
    if (paymentOption === 'none') {
        successMessage += `• Payment Status: Unpaid\n`;
        successMessage += `• Outstanding Balance: $${total.toFixed(2)}\n`;
    } else {
        successMessage += `• Payment Status: ${paymentStatus}\n`;
        successMessage += `• Amount Paid: $${totalPaid.toFixed(2)}\n`;
        successMessage += `• Remaining Balance: $${remainingBalance.toFixed(2)}\n`;
        if (payments.length > 0) {
            successMessage += `• Payment Method: ${payments[0].method}\n`;
        }
    }

    successMessage += `\n📦 Inventory updated with ordered quantities!`;

    alert(successMessage);
}

// Finance System Functions

// Finance Tab Management
function switchFinanceTab(tab, event) {
    // Update tab buttons
    document.querySelectorAll('.finance-tab-button').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    } else {
        // Fallback: find the button by tab name
        const buttons = document.querySelectorAll('.finance-tab-button');
        buttons.forEach(btn => {
            if (btn.textContent.toLowerCase().includes(tab.toLowerCase()) ||
                btn.getAttribute('onclick').includes(tab)) {
                btn.classList.add('active');
            }
        });
    }

    // Update tab panels
    document.querySelectorAll('.finance-tab-panel').forEach(panel => panel.classList.remove('active'));
    const targetPanel = document.getElementById('finance' + tab.charAt(0).toUpperCase() + tab.slice(1));
    if (targetPanel) {
        targetPanel.classList.add('active');
    }

    // Refresh data for the selected tab
    try {
        switch(tab) {
            case 'dashboard':
                loadFinanceDashboard();
                break;
            case 'receivables':
                loadAccountsReceivable();
                break;
            case 'payables':
                loadAccountsPayable();
                break;
            case 'profitloss':
                updateProfitLoss();
                break;
            case 'payments':
                loadPaymentTracking();
                break;
            case 'ewallet':
                loadEWalletData();
                break;
        }
    } catch (error) {
        console.error('Error loading tab data:', error);
    }
}

// Financial Dashboard
function loadFinanceDashboard() {
    const totalRevenue = calculateTotalRevenue();
    const totalCosts = calculateTotalCosts();
    const grossProfit = totalRevenue - totalCosts;
    const outstandingReceivables = calculateOutstandingReceivables();
    const outstandingPayables = calculateOutstandingPayables();
    const netCashFlow = calculateNetCashFlow();
    
    // Update metric cards
    document.getElementById('totalRevenue').textContent = `$${totalRevenue.toFixed(2)}`;
    document.getElementById('totalCosts').textContent = `$${totalCosts.toFixed(2)}`;
    document.getElementById('grossProfit').textContent = `$${grossProfit.toFixed(2)}`;
    document.getElementById('outstandingReceivables').textContent = `$${outstandingReceivables.toFixed(2)}`;
    document.getElementById('outstandingPayables').textContent = `$${outstandingPayables.toFixed(2)}`;
    document.getElementById('netCashFlow').textContent = `$${netCashFlow.toFixed(2)}`;
    
    // Update profit metric card color based on value
    const profitCard = document.querySelector('.metric-card.profit');
    if (grossProfit >= 0) {
        profitCard.classList.remove('negative');
        profitCard.classList.add('positive');
    } else {
        profitCard.classList.remove('positive');
        profitCard.classList.add('negative');
    }
    
    // Update cash flow metric card color
    const cashFlowCard = document.querySelector('.metric-card.cashflow');
    if (netCashFlow >= 0) {
        cashFlowCard.classList.remove('negative');
        cashFlowCard.classList.add('positive');
    } else {
        cashFlowCard.classList.remove('positive');
        cashFlowCard.classList.add('negative');
    }
    
    // Update chart
    updateFinanceChart(totalRevenue, totalCosts);
}

function updateFinanceChart(revenue, costs) {
    const maxValue = Math.max(revenue, costs, 1000); // Minimum scale of 1000
    
    const revenuePercentage = (revenue / maxValue) * 100;
    const costsPercentage = (costs / maxValue) * 100;
    
    document.getElementById('revenueBar').style.width = `${revenuePercentage}%`;
    document.getElementById('costsBar').style.width = `${costsPercentage}%`;
    document.getElementById('revenueBarValue').textContent = `$${revenue.toFixed(0)}`;
    document.getElementById('costsBarValue').textContent = `$${costs.toFixed(0)}`;
}

// Accounts Receivable
function loadAccountsReceivable() {
    const tbody = document.getElementById('receivablesTableBody');
    tbody.innerHTML = '';
    
    let totalReceivables = 0;
    let overdueReceivables = 0;
    const today = new Date();
    
    const pendingInvoices = customerInvoices.filter(invoice => invoice.status === 'Pending');
    
    pendingInvoices.forEach(invoice => {
        const dueDate = new Date(invoice.dueDate);
        const daysOverdue = Math.max(0, Math.floor((today - dueDate) / (1000 * 60 * 60 * 24)));
        const isOverdue = daysOverdue > 0;
        
        totalReceivables += invoice.amount;
        if (isOverdue) {
            overdueReceivables += invoice.amount;
        }
        
        const row = document.createElement('tr');
        if (isOverdue) {
            row.classList.add('overdue-row');
        }
        
        row.innerHTML = `
            <td>${invoice.id}</td>
            <td>${invoice.customer || 'N/A'}</td>
            <td>${formatDate(invoice.date)}</td>
            <td>${formatDate(invoice.dueDate)}</td>
            <td>$${invoice.amount.toFixed(2)}</td>
            <td class="${isOverdue ? 'overdue-days' : ''}">${isOverdue ? daysOverdue : '-'}</td>
            <td><span class="status-badge ${isOverdue ? 'status-overdue' : 'status-pending'}">${isOverdue ? 'Overdue' : 'Pending'}</span></td>
            <td>
                <button class="btn btn-secondary btn-small" onclick="viewInvoice('${invoice.id}', 'customer')">View</button>
                <button class="btn btn-success btn-small" onclick="markAsPaid('${invoice.id}', 'customer')">Mark Paid</button>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    // Update summary
    document.getElementById('totalReceivables').textContent = `$${totalReceivables.toFixed(2)}`;
    document.getElementById('overdueReceivables').textContent = `$${overdueReceivables.toFixed(2)}`;
}

// Accounts Payable
function loadAccountsPayable() {
    const tbody = document.getElementById('payablesTableBody');
    tbody.innerHTML = '';
    
    let totalPayables = 0;
    let overduePayables = 0;
    const today = new Date();
    
    const pendingInvoices = supplierInvoices.filter(invoice => invoice.status === 'Pending');
    
    pendingInvoices.forEach(invoice => {
        const dueDate = new Date(invoice.dueDate);
        const daysOverdue = Math.max(0, Math.floor((today - dueDate) / (1000 * 60 * 60 * 24)));
        const isOverdue = daysOverdue > 0;
        
        totalPayables += invoice.amount;
        if (isOverdue) {
            overduePayables += invoice.amount;
        }
        
        const row = document.createElement('tr');
        if (isOverdue) {
            row.classList.add('overdue-row');
        }
        
        row.innerHTML = `
            <td>${invoice.id}</td>
            <td>${invoice.supplier || 'N/A'}</td>
            <td>${formatDate(invoice.date)}</td>
            <td>${formatDate(invoice.dueDate)}</td>
            <td>$${invoice.amount.toFixed(2)}</td>
            <td class="${isOverdue ? 'overdue-days' : ''}">${isOverdue ? daysOverdue : '-'}</td>
            <td><span class="status-badge ${isOverdue ? 'status-overdue' : 'status-pending'}">${isOverdue ? 'Overdue' : 'Pending'}</span></td>
            <td>
                <button class="btn btn-secondary btn-small" onclick="viewInvoice('${invoice.id}', 'supplier')">View</button>
                <button class="btn btn-success btn-small" onclick="markAsPaid('${invoice.id}', 'supplier')">Mark Paid</button>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    // Update summary
    document.getElementById('totalPayables').textContent = `$${totalPayables.toFixed(2)}`;
    document.getElementById('overduePayables').textContent = `$${overduePayables.toFixed(2)}`;
}

// Profit & Loss
function updateProfitLoss() {
    const period = document.getElementById('plPeriod').value;
    const { revenue, costs } = calculateProfitLossForPeriod(period);
    
    const grossProfit = revenue - costs;
    const grossMargin = revenue > 0 ? (grossProfit / revenue) * 100 : 0;
    
    document.getElementById('plRevenue').textContent = `$${revenue.toFixed(2)}`;
    document.getElementById('plTotalRevenue').textContent = `$${revenue.toFixed(2)}`;
    document.getElementById('plCosts').textContent = `$${costs.toFixed(2)}`;
    document.getElementById('plTotalCosts').textContent = `$${costs.toFixed(2)}`;
    document.getElementById('plGrossProfit').textContent = `$${grossProfit.toFixed(2)}`;
    document.getElementById('plGrossMargin').textContent = `${grossMargin.toFixed(1)}%`;
    
    // Update profit color
    const profitElement = document.getElementById('plGrossProfit');
    profitElement.style.color = grossProfit >= 0 ? '#059669' : '#dc2626';
}

// Payment Tracking
function loadPaymentTracking() {
    // Load recent customer payments
    const customerPaymentsBody = document.getElementById('recentCustomerPaymentsBody');
    customerPaymentsBody.innerHTML = '';
    
    const recentCustomerPayments = customerPayments
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 10);
    
    recentCustomerPayments.forEach(payment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${formatDate(payment.date)}</td>
            <td>$${payment.amount.toFixed(2)}</td>
            <td>${payment.method}</td>
            <td><span class="status-badge status-paid">Received</span></td>
        `;
        customerPaymentsBody.appendChild(row);
    });
    
    // Load recent supplier payments
    const supplierPaymentsBody = document.getElementById('recentSupplierPaymentsBody');
    supplierPaymentsBody.innerHTML = '';
    
    const recentSupplierPayments = supplierPayments
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 10);
    
    recentSupplierPayments.forEach(payment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${formatDate(payment.date)}</td>
            <td>$${payment.amount.toFixed(2)}</td>
            <td>${payment.method}</td>
            <td><span class="status-badge status-paid">Paid</span></td>
        `;
        supplierPaymentsBody.appendChild(row);
    });
    
    // Update totals
    const totalPaymentsReceived = customerPayments.reduce((sum, payment) => sum + payment.amount, 0);
    const totalPaymentsMade = supplierPayments.reduce((sum, payment) => sum + payment.amount, 0);
    
    document.getElementById('totalPaymentsReceived').textContent = `$${totalPaymentsReceived.toFixed(2)}`;
    document.getElementById('totalPaymentsMade').textContent = `$${totalPaymentsMade.toFixed(2)}`;
}

// Financial Calculation Functions
function calculateTotalRevenue() {
    return customerInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);
}

function calculateTotalCosts() {
    return supplierInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);
}

function calculateOutstandingReceivables() {
    return customerInvoices
        .filter(invoice => invoice.status === 'Pending')
        .reduce((sum, invoice) => sum + invoice.amount, 0);
}

function calculateOutstandingPayables() {
    return supplierInvoices
        .filter(invoice => invoice.status === 'Pending')
        .reduce((sum, invoice) => sum + invoice.amount, 0);
}

function calculateNetCashFlow() {
    const paymentsReceived = customerPayments.reduce((sum, payment) => sum + payment.amount, 0);
    const paymentsMade = supplierPayments.reduce((sum, payment) => sum + payment.amount, 0);
    return paymentsReceived - paymentsMade;
}

function calculateProfitLossForPeriod(period) {
    let startDate, endDate;
    const today = new Date();
    
    switch(period) {
        case 'current':
            startDate = new Date(today.getFullYear(), today.getMonth(), 1);
            endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
            break;
        case 'last':
            startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
            endDate = new Date(today.getFullYear(), today.getMonth(), 0);
            break;
        default: // 'all'
            startDate = new Date(2000, 0, 1);
            endDate = new Date(2099, 11, 31);
    }
    
    const revenue = customerInvoices
        .filter(invoice => {
            const invoiceDate = new Date(invoice.date);
            return invoiceDate >= startDate && invoiceDate <= endDate;
        })
        .reduce((sum, invoice) => sum + invoice.amount, 0);
    
    const costs = supplierInvoices
        .filter(invoice => {
            const invoiceDate = new Date(invoice.date);
            return invoiceDate >= startDate && invoiceDate <= endDate;
        })
        .reduce((sum, invoice) => sum + invoice.amount, 0);
    
    return { revenue, costs };
}

// Mark invoice as paid
function markAsPaid(invoiceId, type) {
    const invoices = type === 'customer' ? customerInvoices : supplierInvoices;
    const invoice = invoices.find(inv => inv.id === invoiceId);
    
    if (invoice && confirm(`Mark ${type === 'customer' ? 'Invoice' : 'Purchase Order'} ${invoiceId} as paid?`)) {
        invoice.status = 'Paid';
        
        // Refresh displays
        if (type === 'customer') {
            loadCustomerInvoices();
            if (document.getElementById('totalReceivables')) {
                loadAccountsReceivable();
            }
        } else {
            loadSupplierInvoices();
            if (document.getElementById('totalPayables')) {
                loadAccountsPayable();
            }
        }
        
        saveDataToStorage();
        
        // Refresh dashboard
        if (document.getElementById('totalRevenue')) {
            loadFinanceDashboard();
        }
        
        alert(`${type === 'customer' ? 'Invoice' : 'Purchase Order'} ${invoiceId} marked as paid.`);
    }
}



// E-Wallet Management Functions
let currentWalletCustomer = null;

function loadEWalletData() {
    if (!document.getElementById('walletCardsContainer')) return;
    
    loadWalletCards();
    loadRecentWalletTransactions();
    updateWalletSummary();
    
    // Set today's date for transaction modal
    const today = new Date().toISOString().split('T')[0];
    const transactionDate = document.getElementById('transactionDate');
    if (transactionDate) {
        transactionDate.value = today;
    }
}

function loadWalletCards() {
    const container = document.getElementById('walletCardsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    customerWallets.forEach(wallet => {
        const card = createWalletCard(wallet);
        container.appendChild(card);
    });
}

function createWalletCard(wallet) {
    const card = document.createElement('div');
    card.className = 'wallet-card';
    card.onclick = () => openCustomerWalletDetails(wallet.customerId);

    const balanceClass = wallet.balance >= 0 ? 'positive' : 'negative';

    // Determine card type based on balance and customer
    const cardTypes = [
        { type: 'visa-classic', brand: 'VISA', logo: 'VISA', bank: 'PRIME BANK' },
        { type: 'visa-gold', brand: 'VISA', logo: 'VISA', bank: 'GOLD BANK' },
        { type: 'visa-platinum', brand: 'VISA', logo: 'VISA', bank: 'PLATINUM' },
        { type: 'visa-black', brand: 'VISA', logo: 'VISA', bank: 'BLACK CARD' },
        { type: 'mastercard-standard', brand: 'MASTERCARD', logo: 'mastercard', bank: 'PRIME BANK' },
        { type: 'mastercard-gold', brand: 'MASTERCARD', logo: 'mastercard', bank: 'GOLD BANK' },
        { type: 'mastercard-platinum', brand: 'MASTERCARD', logo: 'mastercard', bank: 'PLATINUM' },
        { type: 'mastercard-world', brand: 'MASTERCARD', logo: 'mastercard', bank: 'WORLD ELITE' }
    ];

    // Select card type based on balance and customer ID
    let cardTypeIndex;
    if (Math.abs(wallet.balance) > 5000) {
        cardTypeIndex = wallet.customerId.length % 2 === 0 ? 3 : 7; // Black/World Elite
    } else if (Math.abs(wallet.balance) > 2000) {
        cardTypeIndex = wallet.customerId.length % 2 === 0 ? 2 : 6; // Platinum
    } else if (Math.abs(wallet.balance) > 500) {
        cardTypeIndex = wallet.customerId.length % 2 === 0 ? 1 : 5; // Gold
    } else {
        cardTypeIndex = wallet.customerId.length % 2 === 0 ? 0 : 4; // Classic/Standard
    }

    const selectedCard = cardTypes[cardTypeIndex];

    // Generate card number
    const cardNumber = `4${wallet.customerId.slice(-3).padStart(3, '0')} ${'*'.repeat(4)} ${'*'.repeat(4)} ${wallet.customerId.slice(-4).padStart(4, '0')}`;

    // Generate expiry date (2 years from now)
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 2);
    const expiryMonth = String(expiryDate.getMonth() + 1).padStart(2, '0');
    const expiryYear = String(expiryDate.getFullYear()).slice(-2);

    // Create brand logo HTML
    let brandLogoHTML;
    if (selectedCard.logo === 'mastercard') {
        brandLogoHTML = `
            <div class="mastercard-logo">
                <span class="mastercard-circle red"></span>
                <span class="mastercard-circle yellow"></span>
            </div>
        `;
    } else {
        brandLogoHTML = `<div class="card-brand-logo visa-logo">${selectedCard.logo}</div>`;
    }

    card.innerHTML = `
        <div class="wallet-card-inner ${selectedCard.type}">
            <div class="wallet-card-header">
                <div class="wallet-card-brand">
                    ${brandLogoHTML}
                </div>
            </div>
            <div class="wallet-card-content">
                <div class="wallet-card-chip"></div>
                <div class="wallet-card-details">
                    <div class="wallet-cardholder-info">
                        <div class="wallet-customer-name">${wallet.customerName}</div>
                    </div>
                    <div class="wallet-balance-info">
                        <div class="wallet-balance ${balanceClass}">
                            $${Math.abs(wallet.balance).toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    return card;
}

function updateWalletSummary() {
    const totalBalance = customerWallets.reduce((sum, wallet) => sum + wallet.balance, 0);
    const activeWallets = customerWallets.filter(wallet => wallet.status === 'active').length;
    
    const totalBalanceElement = document.getElementById('totalWalletBalance');
    const activeWalletsElement = document.getElementById('activeWallets');
    
    if (totalBalanceElement) {
        totalBalanceElement.textContent = `$${totalBalance.toFixed(2)}`;
        totalBalanceElement.className = totalBalance >= 0 ? 'positive' : 'negative';
    }
    
    if (activeWalletsElement) {
        activeWalletsElement.textContent = activeWallets;
    }
}

function loadRecentWalletTransactions() {
    const tbody = document.getElementById('recentWalletTransactionsBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    // Get recent transactions (last 10)
    const recentTransactions = walletTransactions
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 10);
    
    recentTransactions.forEach(transaction => {
        const row = document.createElement('tr');
        const typeClass = transaction.type === 'credit' ? 'credit' : 'debit';
        const typeIcon = transaction.type === 'credit' ? '💰' : '💸';
        const amountPrefix = transaction.type === 'credit' ? '+' : '-';
        
        row.innerHTML = `
            <td>${formatDate(transaction.date)}</td>
            <td>${transaction.customerId}</td>
            <td><span class="transaction-type ${typeClass}">${typeIcon} ${transaction.type.toUpperCase()}</span></td>
            <td class="transaction-amount ${typeClass}">${amountPrefix}$${transaction.amount.toFixed(2)}</td>
            <td>${transaction.description}</td>
            <td>$${transaction.balanceAfter.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });
}

function openWalletTransactionModal() {
    document.getElementById('walletTransactionModal').style.display = 'block';
    
    // Reset form
    document.getElementById('transactionCustomer').value = '';
    document.getElementById('transactionType').value = '';
    document.getElementById('transactionAmount').value = '';
    document.getElementById('transactionDescription').value = '';
    document.getElementById('transactionDate').value = new Date().toISOString().split('T')[0];
}

function closeWalletTransactionModal() {
    document.getElementById('walletTransactionModal').style.display = 'none';
}

function addWalletTransaction() {
    const customerId = document.getElementById('transactionCustomer').value;
    const type = document.getElementById('transactionType').value;
    const amount = parseFloat(document.getElementById('transactionAmount').value);
    const description = document.getElementById('transactionDescription').value.trim();
    const date = document.getElementById('transactionDate').value;
    
    if (!customerId || !type || !amount || !description || !date) {
        alert('Please fill in all fields');
        return;
    }
    
    if (amount <= 0) {
        alert('Amount must be greater than 0');
        return;
    }
    
    // Find or create customer wallet
    let wallet = customerWallets.find(w => w.customerId === customerId);
    if (!wallet) {
        wallet = {
            customerId: customerId,
            customerName: customerId,
            balance: 0.00,
            status: 'active',
            createdDate: date,
            lastTransactionDate: date
        };
        customerWallets.push(wallet);
    }
    
    // Calculate new balance
    const oldBalance = wallet.balance;
    const newBalance = type === 'credit' ? oldBalance + amount : oldBalance - amount;
    
    // Update wallet
    wallet.balance = newBalance;
    wallet.lastTransactionDate = date;
    
    // Create transaction record
    const newTransactionId = Math.max(...walletTransactions.map(t => t.id), 0) + 1;
    const transaction = {
        id: newTransactionId,
        customerId: customerId,
        type: type,
        amount: amount,
        description: description,
        date: date,
        balanceAfter: newBalance
    };
    
    walletTransactions.push(transaction);
    
    // Save and refresh
    saveDataToStorage();
    loadEWalletData();
    closeWalletTransactionModal();
    
    alert(`Transaction added successfully! New balance for ${customerId}: $${newBalance.toFixed(2)}`);
}

function openCustomerWalletDetails(customerId) {
    currentWalletCustomer = customerId;
    const wallet = customerWallets.find(w => w.customerId === customerId);
    
    if (!wallet) return;
    
    // Update modal content
    document.getElementById('walletModalTitle').textContent = `${wallet.customerName} - Wallet Details`;
    document.getElementById('walletModalCustomer').textContent = wallet.customerName;
    document.getElementById('walletModalBalance').textContent = `$${wallet.balance.toFixed(2)}`;
    document.getElementById('walletModalBalance').className = wallet.balance >= 0 ? 'positive' : 'negative';
    
    // Update avatar
    const avatar = document.getElementById('walletModalAvatar');
    avatar.textContent = wallet.customerName.charAt(0).toUpperCase();
    
    // Load transaction history for this customer
    loadCustomerTransactionHistory(customerId);
    
    // Show modal
    document.getElementById('customerWalletModal').style.display = 'block';
}

function closeCustomerWalletModal() {
    document.getElementById('customerWalletModal').style.display = 'none';
    currentWalletCustomer = null;
}

function loadCustomerTransactionHistory(customerId) {
    const tbody = document.getElementById('customerTransactionHistoryBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    // Get transactions for this customer
    const customerTransactions = walletTransactions
        .filter(t => t.customerId === customerId)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    
    customerTransactions.forEach(transaction => {
        const row = document.createElement('tr');
        const typeClass = transaction.type === 'credit' ? 'credit' : 'debit';
        const typeIcon = transaction.type === 'credit' ? '💰' : '💸';
        const amountPrefix = transaction.type === 'credit' ? '+' : '-';
        
        row.innerHTML = `
            <td>${formatDate(transaction.date)}</td>
            <td><span class="transaction-type ${typeClass}">${typeIcon} ${transaction.type.toUpperCase()}</span></td>
            <td class="transaction-amount ${typeClass}">${amountPrefix}$${transaction.amount.toFixed(2)}</td>
            <td>${transaction.description}</td>
            <td>$${transaction.balanceAfter.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });
    
    if (customerTransactions.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="5" style="text-align: center; color: #6b7280;">No transactions found</td>';
        tbody.appendChild(row);
    }
}

function quickAddCredit() {
    if (!currentWalletCustomer) return;
    
    const amount = prompt('Enter credit amount:');
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    
    const description = prompt('Enter description:', 'Quick credit added');
    if (!description) return;
    
    // Add transaction
    addQuickTransaction(currentWalletCustomer, 'credit', parseFloat(amount), description);
}

function quickAddDebit() {
    if (!currentWalletCustomer) return;
    
    const amount = prompt('Enter debit amount:');
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    
    const description = prompt('Enter description:', 'Quick debit added');
    if (!description) return;
    
    // Add transaction
    addQuickTransaction(currentWalletCustomer, 'debit', parseFloat(amount), description);
}

function addQuickTransaction(customerId, type, amount, description) {
    const wallet = customerWallets.find(w => w.customerId === customerId);
    if (!wallet) return;
    
    const today = new Date().toISOString().split('T')[0];
    const oldBalance = wallet.balance;
    const newBalance = type === 'credit' ? oldBalance + amount : oldBalance - amount;
    
    // Update wallet
    wallet.balance = newBalance;
    wallet.lastTransactionDate = today;
    
    // Create transaction record
    const newTransactionId = Math.max(...walletTransactions.map(t => t.id), 0) + 1;
    const transaction = {
        id: newTransactionId,
        customerId: customerId,
        type: type,
        amount: amount,
        description: description,
        date: today,
        balanceAfter: newBalance
    };
    
    walletTransactions.push(transaction);
    
    // Save and refresh
    saveDataToStorage();
    loadEWalletData();
    
    // Update modal if open
    if (document.getElementById('customerWalletModal').style.display === 'block') {
        openCustomerWalletDetails(customerId);
    }
    
    alert(`${type.charAt(0).toUpperCase() + type.slice(1)} of $${amount.toFixed(2)} added successfully!`);
}

function refreshWalletData() {
    loadEWalletData();
    alert('Wallet data refreshed successfully!');
}

// ===== ENHANCED INVENTORY MANAGEMENT FUNCTIONS =====

// Enhanced Inventory Data Model Functions
function determineStockStatus(product) {
    const available = product.inventory ? product.inventory.available : product.remaining;
    const reorderLevel = product.inventory ? product.inventory.reorderLevel : 10;

    if (available <= 0) {
        return "out_of_stock";
    } else if (available <= reorderLevel) {
        return "low_stock";
    } else {
        return "in_stock";
    }
}

function migrateToEnhancedInventory() {
    console.log('Migrating to enhanced inventory system...');

    products.forEach(product => {
        if (!product.inventory) {
            // Create enhanced inventory structure from legacy data
            product.inventory = {
                ordered: product.quantity || 0,
                received: product.quantity || 0,
                available: product.remaining || 0,
                allocated: (product.quantity || 0) - (product.remaining || 0),
                shipped: product.shipped || 0,
                status: determineStockStatus(product),
                reorderLevel: Math.max(10, Math.floor((product.quantity || 0) * 0.2)), // 20% of total as reorder level
                lastReceived: new Date().toISOString().split('T')[0],
                lastOrdered: null
            };
        }

        // Update status based on current levels
        product.inventory.status = determineStockStatus(product);
    });

    console.log('Enhanced inventory migration completed');
    saveDataToStorage();
}

// Inventory Validation Functions
function checkAvailability(productId, requestedQuantity) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inventory) {
        return false;
    }
    return product.inventory.available >= requestedQuantity;
}

function getAvailableQuantity(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inventory) {
        return 0;
    }
    return product.inventory.available;
}

function allocateInventory(productId, quantity, orderId = null) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inventory) {
        return { success: false, message: "Product not found" };
    }

    if (!checkAvailability(productId, quantity)) {
        return {
            success: false,
            message: `Insufficient stock. Available: ${product.inventory.available}, Requested: ${quantity}`
        };
    }

    // Allocate inventory
    product.inventory.available -= quantity;
    product.inventory.allocated += quantity;

    // Update legacy fields for backward compatibility
    product.remaining = product.inventory.available;

    // Update status
    product.inventory.status = determineStockStatus(product);

    console.log(`Allocated ${quantity} units of ${product.name} for order ${orderId || 'N/A'}`);

    return { success: true, message: "Inventory allocated successfully" };
}

function deallocateInventory(productId, quantity, orderId = null) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inventory) {
        return { success: false, message: "Product not found" };
    }

    // Deallocate inventory (return to available)
    const deallocateQty = Math.min(quantity, product.inventory.allocated);
    product.inventory.available += deallocateQty;
    product.inventory.allocated -= deallocateQty;

    // Update legacy fields for backward compatibility
    product.remaining = product.inventory.available;

    // Update status
    product.inventory.status = determineStockStatus(product);

    console.log(`Deallocated ${deallocateQty} units of ${product.name} from order ${orderId || 'N/A'}`);

    return { success: true, message: "Inventory deallocated successfully" };
}

function receiveGoods(productId, receivedQuantity, poId = null) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inventory) {
        return { success: false, message: "Product not found" };
    }

    // Update inventory levels
    product.inventory.received += receivedQuantity;
    product.inventory.available += receivedQuantity;
    product.inventory.lastReceived = new Date().toISOString().split('T')[0];

    // Update legacy fields for backward compatibility
    product.quantity = product.inventory.received;
    product.remaining = product.inventory.available;

    // Update status
    product.inventory.status = determineStockStatus(product);

    console.log(`Received ${receivedQuantity} units of ${product.name} from PO ${poId || 'N/A'}`);

    return { success: true, message: "Goods received successfully" };
}

function shipInventory(productId, shippedQuantity, orderId = null) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inventory) {
        return { success: false, message: "Product not found" };
    }

    if (product.inventory.allocated < shippedQuantity) {
        return {
            success: false,
            message: `Cannot ship more than allocated. Allocated: ${product.inventory.allocated}, Requested: ${shippedQuantity}`
        };
    }

    // Ship inventory
    product.inventory.allocated -= shippedQuantity;
    product.inventory.shipped += shippedQuantity;

    // Update legacy fields for backward compatibility
    product.shipped = product.inventory.shipped;

    // Update status
    product.inventory.status = determineStockStatus(product);

    console.log(`Shipped ${shippedQuantity} units of ${product.name} for order ${orderId || 'N/A'}`);

    return { success: true, message: "Inventory shipped successfully" };
}

// Enhanced Inventory Management UI Functions
function openReceiveGoodsModal() {
    // Create modal if it doesn't exist
    let modal = document.getElementById('receiveGoodsModal');
    if (!modal) {
        modal = createReceiveGoodsModal();
        document.body.appendChild(modal);
    }

    // Populate with pending POs
    populateReceiveGoodsModal();
    modal.style.display = 'block';
}

function createReceiveGoodsModal() {
    const modal = document.createElement('div');
    modal.id = 'receiveGoodsModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content large-modal">
            <div class="modal-header">
                <h3>📥 Receive Goods</h3>
                <span class="close" onclick="closeReceiveGoodsModal()">&times;</span>
            </div>
            <div class="modal-body">
                <div class="receive-goods-section">
                    <h4>Select Purchase Order</h4>
                    <select id="receivePOSelect" onchange="loadPOItemsForReceiving()">
                        <option value="">Select a Purchase Order...</option>
                    </select>
                </div>

                <div id="receiveItemsContainer" style="display: none;">
                    <h4>Items to Receive</h4>
                    <div id="receiveItemsList"></div>

                    <div class="receive-summary">
                        <h4>Receiving Summary</h4>
                        <div id="receivingSummary"></div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeReceiveGoodsModal()">Cancel</button>
                <button class="btn btn-primary" onclick="processGoodsReceiving()" id="processReceivingBtn" disabled>Process Receiving</button>
            </div>
        </div>
    `;
    return modal;
}

function populateReceiveGoodsModal() {
    const select = document.getElementById('receivePOSelect');
    if (!select) return;

    select.innerHTML = '<option value="">Select a Purchase Order...</option>';

    // Get pending supplier invoices (POs)
    const pendingPOs = supplierInvoices.filter(po => po.status === 'Pending' || po.status === 'Partial');

    pendingPOs.forEach(po => {
        const option = document.createElement('option');
        option.value = po.id;
        option.textContent = `${po.id} - ${po.supplier} ($${po.amount.toFixed(2)})`;
        select.appendChild(option);
    });
}

function loadPOItemsForReceiving() {
    const poId = document.getElementById('receivePOSelect').value;
    const container = document.getElementById('receiveItemsContainer');
    const itemsList = document.getElementById('receiveItemsList');

    if (!poId) {
        container.style.display = 'none';
        return;
    }

    const po = supplierInvoices.find(p => p.id === poId);
    if (!po) return;

    container.style.display = 'block';
    itemsList.innerHTML = '';

    // Get PO items (use products if no specific items)
    const items = po.products || products.map(p => ({
        productId: p.id,
        quantity: Math.floor(Math.random() * 20) + 5, // Demo data
        unitPrice: p.costPrice
    }));

    items.forEach(item => {
        // ✅ FIX: Handle both PO structure cases
        const productId = item.id || item.productId; // PO products use 'id', fallback uses 'productId'
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'receive-item';
        itemDiv.innerHTML = `
            <div class="receive-item-info">
                <strong>${product.name}</strong> (${product.sku})
                <br><small>Ordered: ${item.quantity} units</small>
            </div>
            <div class="receive-item-input">
                <label>Quantity Received:</label>
                <input type="number" id="receive-qty-${productId}"
                       min="0" max="${item.quantity}" value="${item.quantity}"
                       onchange="updateReceivingSummary()">
                <small>Max: ${item.quantity}</small>
            </div>
            <div class="receive-item-condition">
                <label>Condition:</label>
                <select id="receive-condition-${productId}">
                    <option value="good">Good</option>
                    <option value="damaged">Damaged</option>
                    <option value="rejected">Rejected</option>
                </select>
            </div>
        `;
        itemsList.appendChild(itemDiv);
    });

    updateReceivingSummary();
}

function updateReceivingSummary() {
    const summaryDiv = document.getElementById('receivingSummary');
    const processBtn = document.getElementById('processReceivingBtn');

    if (!summaryDiv) return;

    let totalItems = 0;
    let totalValue = 0;
    let hasItems = false;

    // ✅ FIX: Get the current PO to check its structure
    const poId = document.getElementById('receivePOSelect').value;
    if (poId) {
        const po = supplierInvoices.find(p => p.id === poId);
        if (po && po.products) {
            // Use PO products structure
            po.products.forEach(poItem => {
                const qtyInput = document.getElementById(`receive-qty-${poItem.id}`);
                if (qtyInput) {
                    const qty = parseInt(qtyInput.value) || 0;
                    if (qty > 0) {
                        totalItems += qty;
                        totalValue += qty * poItem.price; // Use PO price
                        hasItems = true;
                    }
                }
            });
        } else {
            // Fallback: use all products
            products.forEach(product => {
                const qtyInput = document.getElementById(`receive-qty-${product.id}`);
                if (qtyInput) {
                    const qty = parseInt(qtyInput.value) || 0;
                    if (qty > 0) {
                        totalItems += qty;
                        totalValue += qty * product.costPrice;
                        hasItems = true;
                    }
                }
            });
        }
    }

    summaryDiv.innerHTML = `
        <div class="summary-row">
            <span>Total Items to Receive:</span>
            <span><strong>${totalItems}</strong></span>
        </div>
        <div class="summary-row">
            <span>Total Value:</span>
            <span><strong>$${totalValue.toFixed(2)}</strong></span>
        </div>
    `;

    processBtn.disabled = !hasItems;
}

function processGoodsReceiving() {
    const poId = document.getElementById('receivePOSelect').value;
    if (!poId) return;

    const po = supplierInvoices.find(p => p.id === poId);
    if (!po) {
        alert('Purchase Order not found');
        return;
    }

    let receivedItems = [];
    let totalReceived = 0;
    let allItemsReceived = true;

    // Process each product in the PO
    if (po.products && po.products.length > 0) {
        po.products.forEach(poItem => {
            // ✅ FIX: Use poItem.id (not poItem.productId) - matches PO structure
            const qtyInput = document.getElementById(`receive-qty-${poItem.id}`);
            const conditionSelect = document.getElementById(`receive-condition-${poItem.id}`);

            if (qtyInput && conditionSelect) {
                const qty = parseInt(qtyInput.value) || 0;
                const condition = conditionSelect.value;

                if (qty > 0 && condition === 'good') {
                    // Only receive items in good condition
                    const result = receiveGoods(poItem.id, qty, poId);
                    if (result.success) {
                        // Update PO item status
                        poItem.quantityReceived = (poItem.quantityReceived || 0) + qty;
                        if (poItem.quantityReceived >= poItem.quantity) {
                            poItem.status = 'received';
                        } else {
                            poItem.status = 'partial';
                            allItemsReceived = false;
                        }

                        receivedItems.push({
                            product: poItem.name,
                            quantity: qty,
                            condition: condition
                        });
                        totalReceived += qty;
                    }
                } else if (poItem.quantityReceived < poItem.quantity) {
                    allItemsReceived = false;
                }
            }
        });
    } else {
        // Fallback for POs without specific products
        products.forEach(product => {
            const qtyInput = document.getElementById(`receive-qty-${product.id}`);
            const conditionSelect = document.getElementById(`receive-condition-${product.id}`);

            if (qtyInput && conditionSelect) {
                const qty = parseInt(qtyInput.value) || 0;
                const condition = conditionSelect.value;

                if (qty > 0 && condition === 'good') {
                    const result = receiveGoods(product.id, qty, poId);
                    if (result.success) {
                        receivedItems.push({
                            product: product.name,
                            quantity: qty,
                            condition: condition
                        });
                        totalReceived += qty;
                    }
                }
            }
        });
    }

    if (totalReceived > 0) {
        // Update PO status based on receiving completion
        if (allItemsReceived) {
            po.status = 'Received';
            po.receivingStatus = 'complete';
        } else {
            po.status = 'Partial';
            po.receivingStatus = 'partial';
        }
        po.receivedDate = new Date().toISOString().split('T')[0];

        // Add receiving record
        if (!po.receivingHistory) {
            po.receivingHistory = [];
        }
        po.receivingHistory.push({
            date: new Date().toISOString().split('T')[0],
            items: receivedItems,
            totalQuantity: totalReceived,
            notes: `Received ${totalReceived} items in good condition`
        });

        // ✅ SYNC AND REFRESH ALL DISPLAYS
        // Sync all products with PO data to ensure consistency
        products.forEach(product => syncInventoryWithPOs(product));

        loadInventoryStatus();
        loadSupplierInvoices();
        loadProducts(); // Refresh products display
        saveDataToStorage();

        alert(`✅ Successfully received ${totalReceived} items from PO ${poId}\nStatus: ${po.status}\n\nInventory has been synced with Purchase Orders!`);
        closeReceiveGoodsModal();
    } else {
        alert('No items were received. Please check quantities and conditions.');
    }
}

function closeReceiveGoodsModal() {
    const modal = document.getElementById('receiveGoodsModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function openStockAdjustmentModal() {
    alert('Stock Adjustment feature coming soon!');
}

function showLowStockAlerts() {
    const lowStockProducts = products.filter(product => {
        if (!product.inventory) return false;
        return product.inventory.available <= product.inventory.reorderLevel;
    });

    if (lowStockProducts.length === 0) {
        alert('No low stock alerts! All products are above reorder levels.');
        return;
    }

    let alertMessage = 'Low Stock Alerts:\n\n';
    lowStockProducts.forEach(product => {
        alertMessage += `• ${product.name}: ${product.inventory.available} available (reorder at ${product.inventory.reorderLevel})\n`;
    });

    alert(alertMessage);
}

function refreshInventoryData() {
    // ✅ SYNC WITH PURCHASE ORDERS - Refresh all data from POs
    products.forEach(product => {
        syncInventoryWithPOs(product);
        if (product.inventory) {
            product.inventory.status = determineStockStatus(product);
        }
    });

    loadInventoryStatus();
    loadProducts(); // Also refresh products display
    alert('✅ Inventory data refreshed and synced with Purchase Orders!');
}

// ✅ ENHANCED PRODUCT-FIRST QUOTATION GENERATION
function generateQuotation() {
    console.log('Opening product-first quote generation...');

    // Check if there are products to quote
    if (products.length === 0) {
        alert('No products available for quotation. Please add products first.');
        return;
    }

    // Open the quote modal with product-first workflow
    openProductFirstQuoteModal();
}

function openProductFirstQuoteModal() {
    console.log('Opening product-first quote modal with real-time sync...');

    // ✅ USE SYNC SYSTEM - Don't reset, sync with current selections
    syncQuoteModalWithQuotationSection();

    // Generate quote number
    const newQuoteNumber = `QUO-${String(customerQuotes.length + 1).padStart(3, '0')}`;
    document.getElementById('quoteNumber').value = newQuoteNumber;

    // Set valid until date (14 days from today)
    const today = new Date();
    const validUntil = new Date(today);
    validUntil.setDate(validUntil.getDate() + 14);
    document.getElementById('quoteValidUntil').value = validUntil.toISOString().split('T')[0];

    // Reset form fields (but keep product selections)
    document.getElementById('quoteCustomer').value = '';
    document.getElementById('quoteShipmentMethod').value = 'sea';
    document.getElementById('quoteOtherExpenses').value = '0';
    document.getElementById('quoteCommissionPercentage').value = '5.0';
    document.getElementById('quoteNotes').value = '';

    // ✅ PRODUCT-FIRST WORKFLOW: Enhanced with sync
    prePopulateProductsForQuote();

    // ✅ REAL-TIME SYNC: Load updated product list
    loadQuoteProductSelectionList();

    // ✅ DYNAMIC UPDATES: Update summary with current selections
    updateQuoteSummary();

    // Show modal
    const modal = document.getElementById('quoteModal');
    modal.style.display = 'block';

    // ✅ SHOW PRODUCT-FIRST GUIDANCE
    showProductFirstGuidance();

    console.log('Product-first quote modal opened with', Object.keys(selectedQuoteProducts).length, 'synced products');
}

function prePopulateProductsForQuote() {
    // Check if any products are pre-selected from the product list
    const preSelectedProducts = getPreSelectedProducts();

    if (preSelectedProducts.length > 0) {
        console.log(`Pre-populating ${preSelectedProducts.length} selected products...`);

        preSelectedProducts.forEach(productId => {
            const product = products.find(p => p.id === productId);
            if (product) {
                selectedQuoteProducts[productId] = {
                    product: product,
                    quantity: 1 // Default quantity
                };
            }
        });

        console.log('Pre-populated products for quote:', selectedQuoteProducts);

        // Show success message
        const selectedNames = preSelectedProducts.map(id => {
            const product = products.find(p => p.id === id);
            return product ? product.name : 'Unknown';
        }).join(', ');

        // You could show a toast notification here
        console.log(`✅ Pre-selected products: ${selectedNames}`);

        // Clear pre-selection after use
        clearProductPreSelection();
    }
}

function getPreSelectedProducts() {
    // Check for products that might be pre-selected in the product list
    const selectedCheckboxes = document.querySelectorAll('.product-list-checkbox:checked');
    return Array.from(selectedCheckboxes).map(checkbox => parseInt(checkbox.dataset.productId));
}

function clearProductPreSelection() {
    // Clear any pre-selection checkboxes in the product list
    document.querySelectorAll('.product-list-checkbox:checked').forEach(checkbox => {
        checkbox.checked = false;
    });
}

function showProductFirstGuidance() {
    // Show a brief guidance message for product-first workflow
    const guidanceMessage = `
        💡 Product-First Quote Generation:

        1. Select products and quantities below
        2. Configure pricing and commission
        3. Choose customer and shipping details
        4. Generate your professional quote

        Tip: You can adjust commission percentage for each quote!
    `;

    // You could show this in a toast notification or modal
    console.log(guidanceMessage);
}

// ✅ PRODUCT SELECTION FUNCTIONS FOR QUOTE GENERATION
let selectedProductsForQuote = new Set();

function updateProductSelection(productId) {
    const checkbox = document.querySelector(`.product-list-checkbox[data-product-id="${productId}"]`);

    if (checkbox.checked) {
        selectedProductsForQuote.add(productId);

        // ✅ BIDIRECTIONAL SYNC - Update quote modal if open
        const product = products.find(p => p.id === productId);
        if (product) {
            // Get quantity from Quotation Section
            const quantityInput = document.querySelector(`input[onchange*="updateProductQuantity('${productId}'"]`);
            const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;

            selectedQuoteProducts[productId] = {
                product: product,
                quantity: quantity
            };

            // Update quote modal checkbox if modal is open
            const quoteModalCheckbox = document.getElementById(`quote-product-${productId}`);
            if (quoteModalCheckbox) {
                quoteModalCheckbox.checked = true;
                const quoteQuantityInput = document.getElementById(`quote-qty-${productId}`);
                if (quoteQuantityInput) {
                    quoteQuantityInput.value = quantity;
                    quoteQuantityInput.disabled = false;
                }
                const productItem = quoteModalCheckbox.closest('.product-selection-item');
                if (productItem) {
                    productItem.classList.add('selected');
                }
            }
        }
    } else {
        selectedProductsForQuote.delete(productId);

        // ✅ BIDIRECTIONAL SYNC - Update quote modal if open
        delete selectedQuoteProducts[productId];

        const quoteModalCheckbox = document.getElementById(`quote-product-${productId}`);
        if (quoteModalCheckbox) {
            quoteModalCheckbox.checked = false;
            const quoteQuantityInput = document.getElementById(`quote-qty-${productId}`);
            if (quoteQuantityInput) {
                quoteQuantityInput.disabled = true;
            }
            const productItem = quoteModalCheckbox.closest('.product-selection-item');
            if (productItem) {
                productItem.classList.remove('selected');
            }
        }
    }

    updateSelectAllCheckbox();
    updateQuoteButtonState();

    // ✅ REAL-TIME UPDATES - Update quote summary if modal is open
    if (document.getElementById('quoteModal').style.display === 'block') {
        updateQuoteSummary();
    }

    console.log('Quotation Section selection updated:', productId, 'Selected:', checkbox.checked);
}

function toggleAllProductSelection() {
    const selectAllCheckbox = document.getElementById('selectAllProducts');
    const productCheckboxes = document.querySelectorAll('.product-list-checkbox');

    productCheckboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
        const productId = parseInt(checkbox.dataset.productId);

        if (selectAllCheckbox.checked) {
            selectedProductsForQuote.add(productId);
        } else {
            selectedProductsForQuote.delete(productId);
        }
    });

    updateQuoteButtonState();
}

function updateSelectAllCheckbox() {
    const selectAllCheckbox = document.getElementById('selectAllProducts');
    const productCheckboxes = document.querySelectorAll('.product-list-checkbox');
    const checkedCheckboxes = document.querySelectorAll('.product-list-checkbox:checked');

    if (checkedCheckboxes.length === 0) {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = false;
    } else if (checkedCheckboxes.length === productCheckboxes.length) {
        selectAllCheckbox.checked = true;
        selectAllCheckbox.indeterminate = false;
    } else {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = true;
    }
}

function updateQuoteButtonState() {
    const quoteButton = document.querySelector('.btn[onclick="generateQuotation()"]');
    const selectedCount = selectedProductsForQuote.size;
    const guidancePanel = document.getElementById('productSelectionGuidance');
    const selectedProductsText = document.getElementById('selectedProductsText');

    if (quoteButton) {
        if (selectedCount > 0) {
            quoteButton.innerHTML = `📋 Generate Quote (${selectedCount} selected)`;
            quoteButton.classList.add('btn-success');
            quoteButton.classList.remove('btn-primary');
        } else {
            quoteButton.innerHTML = '📋 Generate Quote';
            quoteButton.classList.remove('btn-success');
            quoteButton.classList.add('btn-primary');
        }
    }

    // Update guidance panel
    if (guidancePanel && selectedProductsText) {
        if (selectedCount > 0) {
            const selectedNames = Array.from(selectedProductsForQuote).map(id => {
                const product = products.find(p => p.id === id);
                return product ? product.name : 'Unknown';
            }).slice(0, 3); // Show first 3 product names

            let displayText = `${selectedCount} product${selectedCount > 1 ? 's' : ''} selected`;
            if (selectedNames.length > 0) {
                displayText += `: ${selectedNames.join(', ')}`;
                if (selectedCount > 3) {
                    displayText += ` and ${selectedCount - 3} more`;
                }
            }

            selectedProductsText.textContent = displayText;
            guidancePanel.style.display = 'block';
        } else {
            guidancePanel.style.display = 'none';
        }
    }
}

function getPreSelectedProducts() {
    return Array.from(selectedProductsForQuote);
}

function clearProductPreSelection() {
    selectedProductsForQuote.clear();
    document.querySelectorAll('.product-list-checkbox:checked').forEach(checkbox => {
        checkbox.checked = false;
    });
    updateSelectAllCheckbox();
    updateQuoteButtonState();

    // Show confirmation
    console.log('✅ Product selection cleared');
}

// ✅ QUICK ADD PRODUCT FUNCTIONALITY FOR QUOTATION SECTION
function openQuickAddProductModal() {
    console.log('🔧 openQuickAddProductModal() called - Opening quick add modal');

    try {
        // Check if modal exists
        const modal = document.getElementById('quickAddProductModal');
        if (!modal) {
            console.error('Quick Add Product modal not found!');
            alert('Error: Quick Add Product modal not found. Please refresh the page.');
            return;
        }

        // Reset form fields with error checking
        const fields = [
            'quickProductName',
            'quickSKU',
            'quickCostPrice',
            'quickSellPrice',
            'quickQuantity',
            'addToQuoteDirectly',
            'selectForQuote'
        ];

        fields.forEach(fieldId => {
            const element = document.getElementById(fieldId);
            if (!element) {
                console.error(`Field ${fieldId} not found!`);
                return;
            }

            if (element.type === 'checkbox') {
                element.checked = fieldId === 'addToQuoteDirectly' || fieldId === 'selectForQuote';
            } else {
                element.value = fieldId === 'quickQuantity' ? '1' : '';
            }
        });

        // Show modal
        modal.style.display = 'block';
        console.log('Modal displayed successfully');

        // Focus on product name field
        setTimeout(() => {
            const nameField = document.getElementById('quickProductName');
            if (nameField) {
                nameField.focus();
                console.log('Focus set on product name field');
            }
        }, 100);

    } catch (error) {
        console.error('Error opening Quick Add Product modal:', error);
        alert('Error opening Quick Add Product modal. Please check the console for details.');
    }
}

function closeQuickAddProductModal() {
    document.getElementById('quickAddProductModal').style.display = 'none';
}

function saveQuickProduct() {
    console.log('Saving quick product...');

    try {
        // Get form values with error checking
        const nameField = document.getElementById('quickProductName');
        const skuField = document.getElementById('quickSKU');
        const costPriceField = document.getElementById('quickCostPrice');
        const sellPriceField = document.getElementById('quickSellPrice');
        const quantityField = document.getElementById('quickQuantity');
        const addToQuoteDirectlyField = document.getElementById('addToQuoteDirectly');
        const selectForQuoteField = document.getElementById('selectForQuote');

        if (!nameField || !skuField || !costPriceField || !sellPriceField || !quantityField || !addToQuoteDirectlyField || !selectForQuoteField) {
            console.error('One or more form fields not found');
            alert('Error: Form fields not found. Please refresh the page.');
            return;
        }

        const name = nameField.value.trim();
        const sku = skuField.value.trim();
        const costPrice = parseFloat(costPriceField.value) || 0;
        const sellPrice = parseFloat(sellPriceField.value) || 0;
        const quantity = parseInt(quantityField.value) || 1;
        const addToQuoteDirectly = addToQuoteDirectlyField.checked;
        const selectForQuote = selectForQuoteField.checked;

        // Validation
        if (!name) {
            alert('Please enter a product name');
            nameField.focus();
            return;
        }

        if (!sku) {
            alert('Please enter a SKU');
            skuField.focus();
            return;
        }

        if (costPrice <= 0) {
            alert('Please enter a valid cost price');
            costPriceField.focus();
            return;
        }

        if (sellPrice <= 0) {
            alert('Please enter a valid sell price');
            sellPriceField.focus();
            return;
        }

        // Check for duplicate SKU
        const existingProduct = products.find(p => p.sku.toLowerCase() === sku.toLowerCase());
        if (existingProduct) {
            alert(`A product with SKU "${sku}" already exists. Please use a different SKU.`);
            skuField.focus();
            return;
        }

    // Create new product with quotation-focused structure
    const newProduct = {
        id: Date.now(), // Simple ID generation
        name: name,
        sku: sku,
        quantity: quantity, // This is quotation quantity, not inventory
        costPrice: costPrice,
        sellPrice: sellPrice,
        photo: null, // No photo for quick add
        // ✅ QUOTATION-FOCUSED: No inventory constraints
        remaining: quantity, // Available for quotation
        inventory: {
            ordered: 0,
            received: 0,
            available: 0, // No actual inventory yet
            allocated: 0,
            shipped: 0
        },
        isQuickAdded: true, // Flag to identify quick-added products
        addedForQuotation: true
    };

    // Add to products array
    products.push(newProduct);

    // Save to storage
    saveDataToStorage();

    // Reload products table
    loadProducts();

    // ✅ INSTANT ADDITION FEATURES WITH REAL-TIME SYNC
    if (selectForQuote) {
        // Automatically select the product for quote generation
        selectedProductsForQuote.add(newProduct.id);

        // Add to quote modal selections
        selectedQuoteProducts[newProduct.id] = {
            product: newProduct,
            quantity: quantity
        };

        // Update the checkbox in the table
        setTimeout(() => {
            const checkbox = document.querySelector(`.product-list-checkbox[data-product-id="${newProduct.id}"]`);
            if (checkbox) {
                checkbox.checked = true;
            }
            updateSelectAllCheckbox();
            updateQuoteButtonState();

            // ✅ REAL-TIME SYNC - Update quote modal if open
            if (document.getElementById('quoteModal').style.display === 'block') {
                loadQuoteProductSelectionList();
                updateQuoteSummary();
            }
        }, 100);
    }

    // Close modal
    closeQuickAddProductModal();

    // Success message
    let successMessage = `✅ Product "${name}" added successfully!\n\n`;
    successMessage += `📋 Product Details:\n`;
    successMessage += `• Name: ${name}\n`;
    successMessage += `• SKU: ${sku}\n`;
    successMessage += `• Cost Price: $${costPrice.toFixed(2)}\n`;
    successMessage += `• Sell Price: $${sellPrice.toFixed(2)}\n`;
    successMessage += `• Quotation Quantity: ${quantity}\n\n`;

    if (selectForQuote) {
        successMessage += `🎯 Product automatically selected for quote generation!\n`;
        successMessage += `Click "Generate Quote" to create quotation.`;
    } else {
        successMessage += `💡 Product added to catalog. Select it to include in quotes.`;
    }

    alert(successMessage);

        // Scroll to the new product in the table
        setTimeout(() => {
            const productRow = document.querySelector(`tr[data-product-id="${newProduct.id}"]`);
            if (productRow) {
                productRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
                productRow.style.backgroundColor = '#dcfce7';
                setTimeout(() => {
                    productRow.style.backgroundColor = '';
                }, 2000);
            }
        }, 200);

    } catch (error) {
        console.error('Error saving quick product:', error);
        alert('Error saving product. Please check the console for details and try again.');
    }
}

// Inventory Dashboard Functions
function loadInventoryDashboard() {
    const totalItems = products.reduce((sum, product) => sum + product.quantity, 0);
    const pendingShipment = customerAllocations.reduce((sum, allocation) => sum + allocation.pendingQuantity, 0);
    const activeCustomers = [...new Set(customerAllocations.map(allocation => allocation.customerId))].length;
    const lowStockCount = products.filter(product => {
        const allocated = customerAllocations
            .filter(allocation => allocation.productId === product.id)
            .reduce((sum, allocation) => sum + allocation.allocatedQuantity, 0);
        const available = product.quantity - allocated;
        return available <= 10; // Low stock threshold
    }).length;
    const inventoryValue = products.reduce((sum, product) => sum + (product.quantity * product.costPrice), 0);
    const availableStock = products.reduce((sum, product) => {
        const allocated = customerAllocations
            .filter(allocation => allocation.productId === product.id)
            .reduce((sum, allocation) => sum + allocation.allocatedQuantity, 0);
        return sum + (product.quantity - allocated);
    }, 0);

    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('pendingShipment').textContent = pendingShipment;
    document.getElementById('activeCustomers').textContent = activeCustomers;
    document.getElementById('lowStockAlerts').textContent = lowStockCount;
    document.getElementById('inventoryValue').textContent = `$${inventoryValue.toFixed(2)}`;
    document.getElementById('availableStock').textContent = availableStock;
}

// Inventory Tab Management
function switchInventoryTab(tab) {
    // Update tab buttons
    document.querySelectorAll('.inventory-tab-button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Update tab panels
    document.querySelectorAll('.inventory-tab-panel').forEach(panel => panel.classList.remove('active'));
    
    const tabMap = {
        'customer-tracking': 'customerTracking',
        'product-management': 'productManagement',
        'shipment-tracking': 'shipmentTracking',
        'low-stock-alerts': 'lowStockAlerts'
    };
    
    document.getElementById(tabMap[tab]).classList.add('active');
    
    // Load specific tab data
    switch(tab) {
        case 'customer-tracking':
            loadCustomerInventoryTracking();
            break;
        case 'product-management':
            loadProductInventoryManagement();
            break;
        case 'shipment-tracking':
            loadShipmentTracking();
            break;
        case 'low-stock-alerts':
            loadLowStockAlerts();
            break;
    }
}

// Customer Inventory Tracking
function loadCustomerInventoryTracking() {
    const container = document.getElementById('customerInventoryGrid');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Group allocations by customer
    const customerGroups = {};
    customerAllocations.forEach(allocation => {
        if (!customerGroups[allocation.customerId]) {
            customerGroups[allocation.customerId] = {
                customerId: allocation.customerId,
                customerName: allocation.customerName,
                allocations: []
            };
        }
        customerGroups[allocation.customerId].allocations.push(allocation);
    });
    
    Object.values(customerGroups).forEach(customer => {
        const totalAllocated = customer.allocations.reduce((sum, allocation) => sum + allocation.allocatedQuantity, 0);
        const totalPending = customer.allocations.reduce((sum, allocation) => sum + allocation.pendingQuantity, 0);
        const totalShipped = customer.allocations.reduce((sum, allocation) => sum + allocation.shippedQuantity, 0);
        const totalValue = customer.allocations.reduce((sum, allocation) => {
            const product = products.find(p => p.id === allocation.productId);
            return sum + (allocation.allocatedQuantity * (product ? product.sellPrice : 0));
        }, 0);
        
        const card = document.createElement('div');
        card.className = 'customer-inventory-card';
        card.innerHTML = `
            <div class="customer-card-header">
                <div class="customer-avatar">${customer.customerName.charAt(0)}</div>
                <div class="customer-info">
                    <h4>${customer.customerName}</h4>
                    <p>${customer.allocations.length} products • ${totalAllocated} items</p>
                </div>
                <div class="customer-status ${totalPending > 0 ? 'pending' : 'complete'}">
                    ${totalPending > 0 ? '🚚 Pending' : '✅ Complete'}
                </div>
            </div>
            <div class="customer-metrics">
                <div class="metric">
                    <span class="metric-label">Allocated</span>
                    <span class="metric-value">${totalAllocated}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Shipped</span>
                    <span class="metric-value">${totalShipped}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Pending</span>
                    <span class="metric-value">${totalPending}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Value</span>
                    <span class="metric-value">$${totalValue.toFixed(2)}</span>
                </div>
            </div>
            <div class="customer-actions">
                <button class="btn btn-primary btn-small" onclick="openCustomerInventoryDetails('${customer.customerId}')">
                    View Details
                </button>
                <button class="btn btn-success btn-small" onclick="openQuickAllocation('${customer.customerId}')">
                    Quick Allocate
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Product Inventory Management
function loadProductInventoryManagement() {
    const tbody = document.getElementById('productInventoryTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    products.forEach(product => {
        const allocated = customerAllocations
            .filter(allocation => allocation.productId === product.id)
            .reduce((sum, allocation) => sum + allocation.allocatedQuantity, 0);
        const available = product.quantity - allocated;
        const reorderLevel = 10; // Default reorder level
        const status = available <= 0 ? 'out-of-stock' : available <= reorderLevel ? 'low-stock' : 'in-stock';
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="product-info">
                    <strong>${product.name}</strong>
                </div>
            </td>
            <td>${product.sku}</td>
            <td>${product.quantity}</td>
            <td>${allocated}</td>
            <td>${available}</td>
            <td>${product.shipped || 0}</td>
            <td>${reorderLevel}</td>
            <td>
                <span class="status-badge status-${status}">
                    ${status === 'out-of-stock' ? 'Out of Stock' : 
                      status === 'low-stock' ? 'Low Stock' : 'In Stock'}
                </span>
            </td>
            <td>
                <button class="btn btn-secondary btn-small" onclick="openStockUpdateModal(${product.id})">
                    Update Stock
                </button>
                <button class="btn btn-primary btn-small" onclick="openAllocationModal(${product.id})">
                    Allocate
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Shipment Tracking
function loadShipmentTracking() {
    const tbody = document.getElementById('shipmentTrackingTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    shipments.forEach(shipment => {
        const productsList = shipment.products.map(p => `${p.productName} (${p.quantity})`).join(', ');
        const statusClass = shipment.status === 'delivered' ? 'status-shipped' : 
                           shipment.status === 'shipped' ? 'status-partial' : 'status-pending';
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${shipment.id}</td>
            <td>${shipment.customerName}</td>
            <td>${productsList}</td>
            <td>${shipment.totalQuantity}</td>
            <td><span class="status-badge ${statusClass}">${shipment.status.charAt(0).toUpperCase() + shipment.status.slice(1)}</span></td>
            <td>${shipment.trackingNumber || 'N/A'}</td>
            <td>${shipment.carrier}</td>
            <td>${shipment.shipDate ? formatDate(shipment.shipDate) : 'N/A'}</td>
            <td>${formatDate(shipment.expectedDelivery)}</td>
            <td>
                <button class="btn btn-secondary btn-small" onclick="updateShipmentStatus('${shipment.id}')">
                    Update Status
                </button>
                <button class="btn btn-primary btn-small" onclick="viewShipmentDetails('${shipment.id}')">
                    View Details
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Low Stock Alerts
function loadLowStockAlerts() {
    const tbody = document.getElementById('lowStockTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    let criticalCount = 0;
    let warningCount = 0;
    
    products.forEach(product => {
        const allocated = customerAllocations
            .filter(allocation => allocation.productId === product.id)
            .reduce((sum, allocation) => sum + allocation.allocatedQuantity, 0);
        const available = product.quantity - allocated;
        const reorderLevel = 10;
        
        if (available <= reorderLevel) {
            const alertLevel = available <= 5 ? 'critical' : 'warning';
            if (alertLevel === 'critical') criticalCount++;
            else warningCount++;
            
            const suggestedOrder = Math.max(50, reorderLevel * 2);
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.sku}</td>
                <td>${available}</td>
                <td>${reorderLevel}</td>
                <td>
                    <span class="status-badge ${alertLevel === 'critical' ? 'status-pending' : 'status-partial'}">
                        ${alertLevel.charAt(0).toUpperCase() + alertLevel.slice(1)}
                    </span>
                </td>
                <td>${suggestedOrder}</td>
                <td>
                    <button class="btn btn-primary btn-small" onclick="openStockUpdateModal(${product.id})">
                        Reorder
                    </button>
                </td>
            `;
            tbody.appendChild(row);
        }
    });
    
    document.getElementById('criticalAlerts').textContent = criticalCount;
    document.getElementById('warningAlerts').textContent = warningCount;
}

// Modal Functions
function openStockUpdateModal(productId = null) {
    const modal = document.getElementById('stockUpdateModal');
    const productSelect = document.getElementById('stockUpdateProduct');
    
    // Populate product dropdown
    productSelect.innerHTML = '<option value="">Select Product</option>';
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = `${product.name} (${product.sku})`;
        if (productId && product.id === productId) {
            option.selected = true;
        }
        productSelect.appendChild(option);
    });
    
    modal.style.display = 'block';
}

function closeStockUpdateModal() {
    document.getElementById('stockUpdateModal').style.display = 'none';
    document.getElementById('stockUpdateProduct').value = '';
    document.getElementById('stockUpdateType').value = '';
    document.getElementById('stockUpdateQuantity').value = '';
    document.getElementById('stockUpdateReason').value = '';
}

function updateStock() {
    const productId = parseInt(document.getElementById('stockUpdateProduct').value);
    const type = document.getElementById('stockUpdateType').value;
    const quantity = parseInt(document.getElementById('stockUpdateQuantity').value);
    const reason = document.getElementById('stockUpdateReason').value.trim();
    
    if (!productId || !type || !quantity || !reason) {
        alert('Please fill in all fields');
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        alert('Product not found');
        return;
    }
    
    let newQuantity = product.quantity;
    switch(type) {
        case 'add':
            newQuantity += quantity;
            break;
        case 'remove':
            newQuantity = Math.max(0, newQuantity - quantity);
            break;
        case 'set':
            newQuantity = quantity;
            break;
    }
    
    // Update product quantity
    product.quantity = newQuantity;
    
    // Update remaining quantity proportionally
    const totalShipped = product.shipped || 0;
    product.remaining = Math.max(0, newQuantity - totalShipped);
    
    // Add stock update record
    const updateId = Math.max(...stockUpdates.map(u => u.id), 0) + 1;
    stockUpdates.push({
        id: updateId,
        productId: productId,
        type: type,
        quantity: quantity,
        reason: reason,
        date: new Date().toISOString().split('T')[0],
        user: 'Admin'
    });
    
    closeStockUpdateModal();
    saveDataToStorage();
    loadInventoryDashboard();
    loadProductInventoryManagement();
    loadLowStockAlerts();
    
    alert(`Stock updated successfully! New quantity: ${newQuantity}`);
}

function openAllocationModal(productId = null) {
    const modal = document.getElementById('allocationModal');
    const productSelect = document.getElementById('allocationProduct');
    
    // Populate product dropdown
    productSelect.innerHTML = '<option value="">Select Product</option>';
    products.forEach(product => {
        const allocated = customerAllocations
            .filter(allocation => allocation.productId === product.id)
            .reduce((sum, allocation) => sum + allocation.allocatedQuantity, 0);
        const available = product.quantity - allocated;
        
        if (available > 0) {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = `${product.name} (${product.sku}) - Available: ${available}`;
            if (productId && product.id === productId) {
                option.selected = true;
            }
            productSelect.appendChild(option);
        }
    });
    
    // Set default expected ship date (7 days from now)
    const expectedDate = new Date();
    expectedDate.setDate(expectedDate.getDate() + 7);
    document.getElementById('allocationExpectedShip').value = expectedDate.toISOString().split('T')[0];
    
    modal.style.display = 'block';
    
    if (productId) {
        updateAvailableStock();
    }
}

function closeAllocationModal() {
    document.getElementById('allocationModal').style.display = 'none';
    document.getElementById('allocationCustomer').value = '';
    document.getElementById('allocationProduct').value = '';
    document.getElementById('allocationQuantity').value = '';
    document.getElementById('allocationExpectedShip').value = '';
    document.getElementById('allocationNotes').value = '';
}

function updateAvailableStock() {
    const productId = parseInt(document.getElementById('allocationProduct').value);
    const infoElement = document.getElementById('availableStockInfo');
    
    if (productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            const allocated = customerAllocations
                .filter(allocation => allocation.productId === product.id)
                .reduce((sum, allocation) => sum + allocation.allocatedQuantity, 0);
            const available = product.quantity - allocated;
            infoElement.textContent = `Available: ${available} units`;
        }
    } else {
        infoElement.textContent = 'Available: 0 units';
    }
}

function allocateStock() {
    const customerId = document.getElementById('allocationCustomer').value;
    const productId = parseInt(document.getElementById('allocationProduct').value);
    const quantity = parseInt(document.getElementById('allocationQuantity').value);
    const expectedShipDate = document.getElementById('allocationExpectedShip').value;
    const notes = document.getElementById('allocationNotes').value.trim();
    
    if (!customerId || !productId || !quantity || !expectedShipDate) {
        alert('Please fill in all required fields');
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        alert('Product not found');
        return;
    }
    
    // Check available stock
    const allocated = customerAllocations
        .filter(allocation => allocation.productId === productId)
        .reduce((sum, allocation) => sum + allocation.allocatedQuantity, 0);
    const available = product.quantity - allocated;
    
    if (quantity > available) {
        alert(`Not enough stock available. Available: ${available} units`);
        return;
    }
    
    // Create new allocation
    const allocationId = Math.max(...customerAllocations.map(a => a.id), 0) + 1;
    customerAllocations.push({
        id: allocationId,
        customerId: customerId,
        customerName: customerId, // In a real app, you'd look up the customer name
        productId: productId,
        productName: product.name,
        sku: product.sku,
        allocatedQuantity: quantity,
        shippedQuantity: 0,
        pendingQuantity: quantity,
        expectedShipDate: expectedShipDate,
        status: 'pending',
        notes: notes || ''
    });
    
    closeAllocationModal();
    saveDataToStorage();
    loadInventoryDashboard();
    loadCustomerInventoryTracking();
    loadProductInventoryManagement();
    
    alert(`Successfully allocated ${quantity} units of ${product.name} to ${customerId}`);
}

function openShipmentModal() {
    const modal = document.getElementById('shipmentModal');
    
    // Set default expected delivery date (5 days from now)
    const expectedDate = new Date();
    expectedDate.setDate(expectedDate.getDate() + 5);
    document.getElementById('shipmentExpectedDelivery').value = expectedDate.toISOString().split('T')[0];
    
    modal.style.display = 'block';
}

function closeShipmentModal() {
    document.getElementById('shipmentModal').style.display = 'none';
    document.getElementById('shipmentCustomer').value = '';
    document.getElementById('shipmentCarrier').value = '';
    document.getElementById('shipmentTrackingNumber').value = '';
    document.getElementById('shipmentExpectedDelivery').value = '';
    document.getElementById('shipmentItemsList').innerHTML = '';
}

function loadCustomerAllocations() {
    const customerId = document.getElementById('shipmentCustomer').value;
    const itemsList = document.getElementById('shipmentItemsList');
    
    if (!customerId) {
        itemsList.innerHTML = '';
        return;
    }
    
    const customerAllocs = customerAllocations.filter(allocation => 
        allocation.customerId === customerId && allocation.pendingQuantity > 0
    );
    
    if (customerAllocs.length === 0) {
        itemsList.innerHTML = '<p>No pending items for this customer</p>';
        return;
    }
    
    itemsList.innerHTML = '';
    customerAllocs.forEach(allocation => {
        const item = document.createElement('div');
        item.className = 'shipment-item';
        item.innerHTML = `
            <label>
                <input type="checkbox" name="shipmentItem" value="${allocation.id}" checked>
                ${allocation.productName} (${allocation.sku}) - Pending: ${allocation.pendingQuantity}
            </label>
            <input type="number" min="1" max="${allocation.pendingQuantity}" value="${allocation.pendingQuantity}" 
                   id="shipQuantity_${allocation.id}" placeholder="Quantity to ship">
        `;
        itemsList.appendChild(item);
    });
}

function createShipment() {
    const customerId = document.getElementById('shipmentCustomer').value;
    const carrier = document.getElementById('shipmentCarrier').value;
    const trackingNumber = document.getElementById('shipmentTrackingNumber').value.trim();
    const expectedDelivery = document.getElementById('shipmentExpectedDelivery').value;
    
    if (!customerId || !carrier || !expectedDelivery) {
        alert('Please fill in all required fields');
        return;
    }
    
    const selectedItems = [];
    const checkboxes = document.querySelectorAll('input[name="shipmentItem"]:checked');
    
    checkboxes.forEach(checkbox => {
        const allocationId = parseInt(checkbox.value);
        const quantityInput = document.getElementById(`shipQuantity_${allocationId}`);
        const quantity = parseInt(quantityInput.value);
        
        if (quantity > 0) {
            selectedItems.push({ allocationId, quantity });
        }
    });
    
    if (selectedItems.length === 0) {
        alert('Please select at least one item to ship');
        return;
    }
    
    // Create shipment
    const shipmentId = `SHIP-${String(shipments.length + 1).padStart(3, '0')}`;
    const shipmentProducts = [];
    let totalQuantity = 0;
    
    selectedItems.forEach(item => {
        const allocation = customerAllocations.find(a => a.id === item.allocationId);
        if (allocation) {
            // Update allocation
            allocation.shippedQuantity += item.quantity;
            allocation.pendingQuantity -= item.quantity;
            if (allocation.pendingQuantity === 0) {
                allocation.status = 'shipped';
            }
            
            // Update product shipped quantity
            const product = products.find(p => p.id === allocation.productId);
            if (product) {
                product.shipped = (product.shipped || 0) + item.quantity;
                product.remaining = Math.max(0, product.remaining - item.quantity);
            }
            
            shipmentProducts.push({
                productId: allocation.productId,
                productName: allocation.productName,
                sku: allocation.sku,
                quantity: item.quantity
            });
            
            totalQuantity += item.quantity;
        }
    });
    
    shipments.push({
        id: shipmentId,
        customerId: customerId,
        customerName: customerId,
        products: shipmentProducts,
        totalQuantity: totalQuantity,
        status: trackingNumber ? 'shipped' : 'preparing',
        trackingNumber: trackingNumber || null,
        carrier: carrier,
        shipDate: trackingNumber ? new Date().toISOString().split('T')[0] : null,
        expectedDelivery: expectedDelivery,
        actualDelivery: null
    });
    
    closeShipmentModal();
    saveDataToStorage();
    loadInventoryDashboard();
    loadCustomerInventoryTracking();
    loadProductInventoryManagement();
    loadShipmentTracking();
    
    alert(`Shipment ${shipmentId} created successfully!`);
}

function openCustomerInventoryDetails(customerId) {
    const modal = document.getElementById('customerInventoryModal');
    const customerAllocs = customerAllocations.filter(allocation => allocation.customerId === customerId);
    
    if (customerAllocs.length === 0) {
        alert('No inventory found for this customer');
        return;
    }
    
    // Update modal title and customer info
    document.getElementById('customerInventoryModalTitle').textContent = `${customerId} - Inventory Details`;
    document.getElementById('customerInventoryAvatar').textContent = customerId.charAt(0);
    document.getElementById('customerInventoryName').textContent = customerId;
    
    // Calculate totals
    const totalAllocated = customerAllocs.reduce((sum, allocation) => sum + allocation.allocatedQuantity, 0);
    const totalPending = customerAllocs.reduce((sum, allocation) => sum + allocation.pendingQuantity, 0);
    const totalShipped = customerAllocs.reduce((sum, allocation) => sum + allocation.shippedQuantity, 0);
    const totalValue = customerAllocs.reduce((sum, allocation) => {
        const product = products.find(p => p.id === allocation.productId);
        return sum + (allocation.allocatedQuantity * (product ? product.sellPrice : 0));
    }, 0);
    
    document.getElementById('customerInventoryStats').textContent = `${customerAllocs.length} products • ${totalPending} items pending`;
    document.getElementById('customerTotalAllocated').textContent = totalAllocated;
    document.getElementById('customerPendingShipment').textContent = totalPending;
    document.getElementById('customerShipped').textContent = totalShipped;
    document.getElementById('customerTotalValue').textContent = `$${totalValue.toFixed(2)}`;
    
    // Load product table
    const tbody = document.getElementById('customerProductTableBody');
    tbody.innerHTML = '';
    
    customerAllocs.forEach(allocation => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${allocation.productName}</td>
            <td>${allocation.sku}</td>
            <td>${allocation.allocatedQuantity}</td>
            <td>${allocation.shippedQuantity}</td>
            <td>${allocation.pendingQuantity}</td>
            <td>${formatDate(allocation.expectedShipDate)}</td>
            <td>
                <span class="status-badge ${allocation.status === 'shipped' ? 'status-shipped' : 'status-partial'}">
                    ${allocation.status.charAt(0).toUpperCase() + allocation.status.slice(1)}
                </span>
            </td>
            <td>
                <button class="btn btn-primary btn-small" onclick="quickShipItem(${allocation.id})">
                    Ship
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    modal.style.display = 'block';
}

function closeCustomerInventoryModal() {
    document.getElementById('customerInventoryModal').style.display = 'none';
}

function refreshInventoryData() {
    loadInventoryDashboard();
    loadCustomerInventoryTracking();
    loadProductInventoryManagement();
    loadShipmentTracking();
    loadLowStockAlerts();
    alert('Inventory data refreshed successfully!');
}

function filterCustomerInventory() {
    const filterElement = document.getElementById('customerFilter');
    if (filterElement) {
        const filter = filterElement.value;
        loadCustomerInventoryTracking();
        // Additional filtering logic can be added here
    }
}

function filterInventoryShipments() {
    // This function is for inventory management shipment tracking
    // It's different from the main shipments page filterShipments() function
    const filterElement = document.getElementById('shipmentStatusFilter');
    if (filterElement) {
        const filter = filterElement.value;
        loadShipmentTracking();
        // Additional filtering logic can be added here
    } else {
        // If no filter element exists, just load the data without filtering
        loadShipmentTracking();
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const productModal = document.getElementById('productModal');
    const customerInvoiceModal = document.getElementById('customerInvoiceModal');
    const supplierInvoiceModal = document.getElementById('supplierInvoiceModal');
    const walletTransactionModal = document.getElementById('walletTransactionModal');
    const customerWalletModal = document.getElementById('customerWalletModal');
    const stockUpdateModal = document.getElementById('stockUpdateModal');
    const allocationModal = document.getElementById('allocationModal');
    const shipmentModal = document.getElementById('shipmentModal');
    const customerInventoryModal = document.getElementById('customerInventoryModal');
    
    if (event.target === productModal) {
        closeProductModal();
    }
    
    if (event.target === customerInvoiceModal) {
        closeCustomerInvoiceModal();
    }
    
    if (event.target === supplierInvoiceModal) {
        closeSupplierInvoiceModal();
    }
    
    if (event.target === walletTransactionModal) {
        closeWalletTransactionModal();
    }
    
    if (event.target === customerWalletModal) {
        closeCustomerWalletModal();
    }
    
    if (event.target === stockUpdateModal) {
        closeStockUpdateModal();
    }
    
    if (event.target === allocationModal) {
        closeAllocationModal();
    }
    
    if (event.target === shipmentModal) {
        closeShipmentModal();
    }
    
    if (event.target === customerInventoryModal) {
        closeCustomerInventoryModal();
    }
    
    // Management modals
    const customerModal = document.getElementById('customerModal');
    const supplierModal = document.getElementById('supplierModal');
    const customerDetailsModal = document.getElementById('customerDetailsModal');
    const supplierDetailsModal = document.getElementById('supplierDetailsModal');
    
    if (event.target === customerModal) {
        closeCustomerModal();
    }
    
    if (event.target === supplierModal) {
        closeSupplierModal();
    }
    
    if (event.target === customerDetailsModal) {
        closeCustomerDetailsModal();
    }
    
    if (event.target === supplierDetailsModal) {
        closeSupplierDetailsModal();
    }
}

// ===== CUSTOMER & SUPPLIER MANAGEMENT FUNCTIONS =====

// Management Dashboard Functions
function loadManagementDashboard() {
    const totalCustomers = customers.length;
    const totalSuppliers = suppliers.length;
    const activeCustomers = customers.filter(c => c.status === 'active' || c.status === 'vip').length;
    const activeSuppliers = suppliers.filter(s => s.status === 'active' || s.status === 'preferred').length;
    
    // Find top customer by revenue
    const topCustomer = customers.reduce((max, customer) => 
        customer.totalRevenue > max.totalRevenue ? customer : max, customers[0] || {totalRevenue: 0});
    
    // Find top supplier by purchase volume
    const topSupplier = suppliers.reduce((max, supplier) => 
        supplier.totalPurchaseVolume > max.totalPurchaseVolume ? supplier : max, suppliers[0] || {totalPurchaseVolume: 0});
    
    document.getElementById('totalCustomers').textContent = totalCustomers;
    document.getElementById('totalSuppliers').textContent = totalSuppliers;
    document.getElementById('activeCustomers').textContent = activeCustomers;
    document.getElementById('activeSuppliers').textContent = activeSuppliers;
    document.getElementById('topCustomerRevenue').textContent = `$${topCustomer.totalRevenue?.toFixed(2) || '0.00'}`;
    document.getElementById('topSupplierVolume').textContent = `$${topSupplier.totalPurchaseVolume?.toFixed(2) || '0.00'}`;
}

function refreshManagementData() {
    loadManagementDashboard();
    loadCustomersManagement();
    loadSuppliersManagement();
}

// Management Tab Functions
function switchManagementTab(tabName) {
    // Remove active class from all tab buttons
    document.querySelectorAll('.management-tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Hide all tab panels
    document.querySelectorAll('.management-tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(`${tabName}Management`).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Load appropriate data
    if (tabName === 'customers') {
        loadCustomersManagement();
    } else if (tabName === 'suppliers') {
        loadSuppliersManagement();
    }
}

// Customer Management Functions
function loadCustomersManagement() {
    const grid = document.getElementById('customersGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    customers.forEach(customer => {
        const customerCard = createCustomerCard(customer);
        grid.appendChild(customerCard);
    });
}

function createCustomerCard(customer) {
    const card = document.createElement('div');
    card.className = 'customer-card';
    card.onclick = () => openCustomerDetails(customer.id);
    
    const statusClass = customer.status === 'vip' ? 'status-vip' : 
                       customer.status === 'active' ? 'status-active' : 'status-inactive';
    
    card.innerHTML = `
        <div class="customer-card-header">
            <div class="customer-avatar">${customer.name.charAt(0)}</div>
            <div class="customer-info">
                <h4>${customer.name}</h4>
                <p>${customer.company}</p>
                <span class="status-badge ${statusClass}">${customer.status.toUpperCase()}</span>
            </div>
        </div>
        <div class="customer-card-stats">
            <div class="stat-item">
                <span class="stat-label">Total Orders</span>
                <span class="stat-value">${customer.totalOrders}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Revenue</span>
                <span class="stat-value">$${customer.totalRevenue.toFixed(2)}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Outstanding</span>
                <span class="stat-value ${customer.outstandingBalance > 0 ? 'text-warning' : 'text-success'}">
                    $${customer.outstandingBalance.toFixed(2)}
                </span>
            </div>
        </div>
        <div class="customer-card-actions">
            <button class="btn btn-primary btn-small" onclick="event.stopPropagation(); createCustomerInvoiceFromCard('${customer.id}')">
                <span>📄</span> Invoice
            </button>
            <button class="btn btn-secondary btn-small" onclick="event.stopPropagation(); editCustomerFromCard('${customer.id}')">
                <span>✏️</span> Edit
            </button>
        </div>
    `;
    
    return card;
}

function filterCustomers() {
    const searchTerm = document.getElementById('customerSearch').value.toLowerCase();
    const statusFilter = document.getElementById('customerStatusFilter').value;
    const categoryFilter = document.getElementById('customerCategoryFilter').value;
    
    const filteredCustomers = customers.filter(customer => {
        const matchesSearch = customer.name.toLowerCase().includes(searchTerm) ||
                            customer.company.toLowerCase().includes(searchTerm) ||
                            customer.email.toLowerCase().includes(searchTerm);
        
        const matchesStatus = statusFilter === 'all' || customer.status === statusFilter;
        const matchesCategory = categoryFilter === 'all' || customer.category === categoryFilter;
        
        return matchesSearch && matchesStatus && matchesCategory;
    });
    
    const grid = document.getElementById('customersGrid');
    grid.innerHTML = '';
    
    filteredCustomers.forEach(customer => {
        const customerCard = createCustomerCard(customer);
        grid.appendChild(customerCard);
    });
}

// Supplier Management Functions
function loadSuppliersManagement() {
    const grid = document.getElementById('suppliersGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    suppliers.forEach(supplier => {
        const supplierCard = createSupplierCard(supplier);
        grid.appendChild(supplierCard);
    });
}

function createSupplierCard(supplier) {
    const card = document.createElement('div');
    card.className = 'supplier-card';
    card.onclick = () => openSupplierDetails(supplier.id);
    
    const statusClass = supplier.status === 'preferred' ? 'status-preferred' : 
                       supplier.status === 'active' ? 'status-active' : 'status-inactive';
    
    const stars = '⭐'.repeat(supplier.rating);
    
    card.innerHTML = `
        <div class="supplier-card-header">
            <div class="supplier-avatar">${supplier.name.charAt(0)}</div>
            <div class="supplier-info">
                <h4>${supplier.name}</h4>
                <p>${supplier.company}</p>
                <span class="status-badge ${statusClass}">${supplier.status.toUpperCase()}</span>
                <div class="supplier-rating">${stars}</div>
            </div>
        </div>
        <div class="supplier-card-stats">
            <div class="stat-item">
                <span class="stat-label">Total Orders</span>
                <span class="stat-value">${supplier.totalOrders}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Purchase Volume</span>
                <span class="stat-value">$${supplier.totalPurchaseVolume.toFixed(2)}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Lead Time</span>
                <span class="stat-value">${supplier.leadTime} days</span>
            </div>
        </div>
        <div class="supplier-card-actions">
            <button class="btn btn-primary btn-small" onclick="event.stopPropagation(); createSupplierPOFromCard('${supplier.id}')">
                <span>📄</span> Create PO
            </button>
            <button class="btn btn-secondary btn-small" onclick="event.stopPropagation(); editSupplierFromCard('${supplier.id}')">
                <span>✏️</span> Edit
            </button>
        </div>
    `;
    
    return card;
}

function filterSuppliers() {
    const searchTerm = document.getElementById('supplierSearch').value.toLowerCase();
    const statusFilter = document.getElementById('supplierStatusFilter').value;
    const ratingFilter = document.getElementById('supplierRatingFilter').value;
    
    const filteredSuppliers = suppliers.filter(supplier => {
        const matchesSearch = supplier.name.toLowerCase().includes(searchTerm) ||
                            supplier.company.toLowerCase().includes(searchTerm) ||
                            supplier.email.toLowerCase().includes(searchTerm);
        
        const matchesStatus = statusFilter === 'all' || supplier.status === statusFilter;
        const matchesRating = ratingFilter === 'all' || supplier.rating >= parseInt(ratingFilter);
        
        return matchesSearch && matchesStatus && matchesRating;
    });
    
    const grid = document.getElementById('suppliersGrid');
    grid.innerHTML = '';
    
    filteredSuppliers.forEach(supplier => {
        const supplierCard = createSupplierCard(supplier);
        grid.appendChild(supplierCard);
    });
}

// Customer Modal Functions
let editingCustomerId = null;

function openAddCustomerModal() {
    editingCustomerId = null;
    document.getElementById('customerModalTitle').textContent = 'Add Customer';
    clearCustomerForm();
    document.getElementById('customerModal').style.display = 'block';
}

function editCustomerFromCard(customerId) {
    const customer = customers.find(c => c.id === customerId);
    if (!customer) return;
    
    editingCustomerId = customerId;
    document.getElementById('customerModalTitle').textContent = 'Edit Customer';
    populateCustomerForm(customer);
    document.getElementById('customerModal').style.display = 'block';
}

function closeCustomerModal() {
    document.getElementById('customerModal').style.display = 'none';
    editingCustomerId = null;
}

function clearCustomerForm() {
    document.getElementById('customerName').value = '';
    document.getElementById('customerCompany').value = '';
    document.getElementById('customerStatus').value = 'active';
    document.getElementById('customerCategory').value = 'retail';
    document.getElementById('customerCreditLimit').value = '';
    document.getElementById('customerPaymentTerms').value = 'net30';
    document.getElementById('customerContactPerson').value = '';
    document.getElementById('customerEmail').value = '';
    document.getElementById('customerPhone').value = '';
    document.getElementById('customerWebsite').value = '';
    document.getElementById('customerAddress').value = '';
    document.getElementById('customerTaxId').value = '';
    document.getElementById('customerRegistrationNumber').value = '';
    document.getElementById('customerNotes').value = '';
    document.getElementById('customerTags').value = '';
}

function populateCustomerForm(customer) {
    document.getElementById('customerName').value = customer.name;
    document.getElementById('customerCompany').value = customer.company;
    document.getElementById('customerStatus').value = customer.status;
    document.getElementById('customerCategory').value = customer.category;
    document.getElementById('customerCreditLimit').value = customer.creditLimit;
    document.getElementById('customerPaymentTerms').value = customer.paymentTerms;
    document.getElementById('customerContactPerson').value = customer.contactPerson;
    document.getElementById('customerEmail').value = customer.email;
    document.getElementById('customerPhone').value = customer.phone;
    document.getElementById('customerWebsite').value = customer.website || '';
    document.getElementById('customerAddress').value = customer.address;
    document.getElementById('customerTaxId').value = customer.taxId || '';
    document.getElementById('customerRegistrationNumber').value = customer.registrationNumber || '';
    document.getElementById('customerNotes').value = customer.notes || '';
    document.getElementById('customerTags').value = customer.tags || '';
}

function saveCustomer() {
    const name = document.getElementById('customerName').value.trim();
    if (!name) {
        alert('Customer name is required');
        return;
    }
    
    const customerData = {
        name: name,
        company: document.getElementById('customerCompany').value.trim(),
        status: document.getElementById('customerStatus').value,
        category: document.getElementById('customerCategory').value,
        creditLimit: parseFloat(document.getElementById('customerCreditLimit').value) || 0,
        paymentTerms: document.getElementById('customerPaymentTerms').value,
        contactPerson: document.getElementById('customerContactPerson').value.trim(),
        email: document.getElementById('customerEmail').value.trim(),
        phone: document.getElementById('customerPhone').value.trim(),
        website: document.getElementById('customerWebsite').value.trim(),
        address: document.getElementById('customerAddress').value.trim(),
        taxId: document.getElementById('customerTaxId').value.trim(),
        registrationNumber: document.getElementById('customerRegistrationNumber').value.trim(),
        notes: document.getElementById('customerNotes').value.trim(),
        tags: document.getElementById('customerTags').value.trim()
    };
    
    if (editingCustomerId) {
        // Update existing customer
        const customerIndex = customers.findIndex(c => c.id === editingCustomerId);
        if (customerIndex !== -1) {
            customers[customerIndex] = { ...customers[customerIndex], ...customerData };
        }
    } else {
        // Add new customer
        const newCustomer = {
            id: generateCustomerId(),
            ...customerData,
            createdDate: new Date().toISOString().split('T')[0],
            lastOrderDate: null,
            totalOrders: 0,
            totalRevenue: 0,
            outstandingBalance: 0
        };
        customers.push(newCustomer);
    }
    
    saveDataToStorage();
    closeCustomerModal();
    loadCustomersManagement();
    loadManagementDashboard();
}

function generateCustomerId() {
    const existingIds = customers.map(c => c.id);
    let counter = 1;
    let newId = `Customer ${String.fromCharCode(64 + counter)}`;
    
    while (existingIds.includes(newId)) {
        counter++;
        newId = `Customer ${String.fromCharCode(64 + counter)}`;
    }
    
    return newId;
}

// Supplier Modal Functions
let editingSupplierId = null;

function openAddSupplierModal() {
    editingSupplierId = null;
    document.getElementById('supplierModalTitle').textContent = 'Add Supplier';
    clearSupplierForm();
    document.getElementById('supplierModal').style.display = 'block';
}

function editSupplierFromCard(supplierId) {
    const supplier = suppliers.find(s => s.id === supplierId);
    if (!supplier) return;
    
    editingSupplierId = supplierId;
    document.getElementById('supplierModalTitle').textContent = 'Edit Supplier';
    populateSupplierForm(supplier);
    document.getElementById('supplierModal').style.display = 'block';
}

function closeSupplierModal() {
    document.getElementById('supplierModal').style.display = 'none';
    editingSupplierId = null;
}

function clearSupplierForm() {
    document.getElementById('supplierName').value = '';
    document.getElementById('supplierCompany').value = '';
    document.getElementById('supplierStatus').value = 'active';
    document.getElementById('supplierRating').value = '5';
    document.getElementById('supplierPaymentTerms').value = 'net30';
    document.getElementById('supplierLeadTime').value = '';
    document.getElementById('supplierContactPerson').value = '';
    document.getElementById('supplierEmail').value = '';
    document.getElementById('supplierPhone').value = '';
    document.getElementById('supplierWebsite').value = '';
    document.getElementById('supplierAddress').value = '';
    document.getElementById('supplierTaxId').value = '';
    document.getElementById('supplierRegistrationNumber').value = '';
    document.getElementById('supplierMinOrderValue').value = '';
    document.getElementById('supplierCurrency').value = 'USD';
    document.getElementById('supplierNotes').value = '';
    document.getElementById('supplierTags').value = '';
}

function populateSupplierForm(supplier) {
    document.getElementById('supplierName').value = supplier.name;
    document.getElementById('supplierCompany').value = supplier.company;
    document.getElementById('supplierStatus').value = supplier.status;
    document.getElementById('supplierRating').value = supplier.rating;
    document.getElementById('supplierPaymentTerms').value = supplier.paymentTerms;
    document.getElementById('supplierLeadTime').value = supplier.leadTime;
    document.getElementById('supplierContactPerson').value = supplier.contactPerson;
    document.getElementById('supplierEmail').value = supplier.email;
    document.getElementById('supplierPhone').value = supplier.phone;
    document.getElementById('supplierWebsite').value = supplier.website || '';
    document.getElementById('supplierAddress').value = supplier.address;
    document.getElementById('supplierTaxId').value = supplier.taxId || '';
    document.getElementById('supplierRegistrationNumber').value = supplier.registrationNumber || '';
    document.getElementById('supplierMinOrderValue').value = supplier.minOrderValue || '';
    document.getElementById('supplierCurrency').value = supplier.currency || 'USD';
    document.getElementById('supplierNotes').value = supplier.notes || '';
    document.getElementById('supplierTags').value = supplier.tags || '';
}

function saveSupplier() {
    const name = document.getElementById('supplierName').value.trim();
    if (!name) {
        alert('Supplier name is required');
        return;
    }
    
    const supplierData = {
        name: name,
        company: document.getElementById('supplierCompany').value.trim(),
        status: document.getElementById('supplierStatus').value,
        rating: parseInt(document.getElementById('supplierRating').value),
        paymentTerms: document.getElementById('supplierPaymentTerms').value,
        leadTime: parseInt(document.getElementById('supplierLeadTime').value) || 0,
        contactPerson: document.getElementById('supplierContactPerson').value.trim(),
        email: document.getElementById('supplierEmail').value.trim(),
        phone: document.getElementById('supplierPhone').value.trim(),
        website: document.getElementById('supplierWebsite').value.trim(),
        address: document.getElementById('supplierAddress').value.trim(),
        taxId: document.getElementById('supplierTaxId').value.trim(),
        registrationNumber: document.getElementById('supplierRegistrationNumber').value.trim(),
        minOrderValue: parseFloat(document.getElementById('supplierMinOrderValue').value) || 0,
        currency: document.getElementById('supplierCurrency').value,
        notes: document.getElementById('supplierNotes').value.trim(),
        tags: document.getElementById('supplierTags').value.trim()
    };
    
    if (editingSupplierId) {
        // Update existing supplier
        const supplierIndex = suppliers.findIndex(s => s.id === editingSupplierId);
        if (supplierIndex !== -1) {
            suppliers[supplierIndex] = { ...suppliers[supplierIndex], ...supplierData };
        }
    } else {
        // Add new supplier
        const newSupplier = {
            id: generateSupplierId(),
            ...supplierData,
            createdDate: new Date().toISOString().split('T')[0],
            lastOrderDate: null,
            totalOrders: 0,
            totalPurchaseVolume: 0,
            outstandingBalance: 0,
            onTimeDelivery: 100,
            qualityRating: 5.0,
            communicationRating: 5.0
        };
        suppliers.push(newSupplier);
    }
    
    saveDataToStorage();
    closeSupplierModal();
    loadSuppliersManagement();
    loadManagementDashboard();
}

function generateSupplierId() {
    const existingIds = suppliers.map(s => s.id);
    let counter = 1;
    let newId = `Supplier ${String.fromCharCode(64 + counter)}`;
    
    while (existingIds.includes(newId)) {
        counter++;
        newId = `Supplier ${String.fromCharCode(64 + counter)}`;
    }
    
    return newId;
}

// Form Tab Functions
function switchCustomerFormTab(tabName) {
    // Remove active class from all tab buttons
    document.querySelectorAll('.customer-form-tabs .form-tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Hide all tab panels
    document.querySelectorAll('.customer-modal .form-tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(`customer${tabName.charAt(0).toUpperCase() + tabName.slice(1)}Tab`).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

function switchSupplierFormTab(tabName) {
    // Remove active class from all tab buttons
    document.querySelectorAll('.supplier-form-tabs .form-tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Hide all tab panels
    document.querySelectorAll('.supplier-modal .form-tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(`supplier${tabName.charAt(0).toUpperCase() + tabName.slice(1)}Tab`).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Customer Details Modal Functions
let currentCustomerId = null;

function openCustomerDetails(customerId) {
    currentCustomerId = customerId;
    const customer = customers.find(c => c.id === customerId);
    if (!customer) return;
    
    // Update modal header
    document.getElementById('customerDetailsTitle').textContent = `${customer.name} - Details`;
    document.getElementById('customerDetailsAvatar').textContent = customer.name.charAt(0);
    document.getElementById('customerDetailsName').textContent = customer.name;
    document.getElementById('customerDetailsCompany').textContent = customer.company;
    
    const statusClass = customer.status === 'vip' ? 'status-vip' : 
                       customer.status === 'active' ? 'status-active' : 'status-inactive';
    const statusBadge = document.getElementById('customerDetailsStatus');
    statusBadge.textContent = customer.status.toUpperCase();
    statusBadge.className = `customer-status-badge ${statusClass}`;
    
    // Update overview stats
    document.getElementById('customerTotalOrders').textContent = customer.totalOrders;
    document.getElementById('customerTotalRevenue').textContent = `$${customer.totalRevenue.toFixed(2)}`;
    document.getElementById('customerOutstandingBalance').textContent = `$${customer.outstandingBalance.toFixed(2)}`;
    document.getElementById('customerCreditLimitDisplay').textContent = `$${customer.creditLimit.toFixed(2)}`;
    
    // Update contact information
    document.getElementById('customerDetailsEmail').textContent = customer.email || '-';
    document.getElementById('customerDetailsPhone').textContent = customer.phone || '-';
    document.getElementById('customerDetailsAddress').textContent = customer.address || '-';
    
    // Update business information
    document.getElementById('customerDetailsCategory').textContent = customer.category || '-';
    document.getElementById('customerDetailsPaymentTerms').textContent = customer.paymentTerms || '-';
    document.getElementById('customerDetailsTaxId').textContent = customer.taxId || '-';
    
    // Load order history
    loadCustomerOrderHistory(customerId);
    
    // Load payment history
    loadCustomerPaymentHistory(customerId);
    
    // Load contacts
    loadCustomerContacts(customerId);
    
    document.getElementById('customerDetailsModal').style.display = 'block';
}

function closeCustomerDetailsModal() {
    document.getElementById('customerDetailsModal').style.display = 'none';
    currentCustomerId = null;
}

function loadCustomerOrderHistory(customerId) {
    const tbody = document.getElementById('customerOrderHistoryBody');
    const customerInvoices = customerInvoices.filter(invoice => invoice.customer === customerId);
    
    tbody.innerHTML = '';
    
    customerInvoices.forEach(invoice => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${invoice.id}</td>
            <td>${formatDate(invoice.date)}</td>
            <td>$${invoice.amount.toFixed(2)}</td>
            <td>
                <span class="status-badge ${invoice.status === 'Paid' ? 'status-paid' : 'status-pending'}">
                    ${invoice.status}
                </span>
            </td>
            <td>${formatDate(invoice.dueDate)}</td>
            <td>
                <button class="btn btn-primary btn-small" onclick="viewInvoice('${invoice.id}')">
                    View
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function loadCustomerPaymentHistory(customerId) {
    const tbody = document.getElementById('customerPaymentHistoryBody');
    const payments = customerPayments.filter(payment => payment.customer === customerId);
    
    tbody.innerHTML = '';
    
    payments.forEach(payment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${formatDate(payment.date)}</td>
            <td>$${payment.amount.toFixed(2)}</td>
            <td>${payment.method}</td>
            <td>${payment.reference || '-'}</td>
            <td>
                <span class="status-badge status-paid">Completed</span>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function loadCustomerContacts(customerId) {
    const container = document.getElementById('customerContactsList');
    const contacts = customerContacts.filter(contact => contact.customerId === customerId);
    
    container.innerHTML = '';
    
    contacts.forEach(contact => {
        const contactCard = document.createElement('div');
        contactCard.className = 'contact-card';
        contactCard.innerHTML = `
            <div class="contact-info">
                <h5>${contact.name}</h5>
                <p>${contact.role} - ${contact.department}</p>
                <p>${contact.email}</p>
                <p>${contact.phone}</p>
            </div>
            <div class="contact-actions">
                <button class="btn btn-secondary btn-small" onclick="editContact(${contact.id})">
                    Edit
                </button>
                <button class="btn btn-danger btn-small" onclick="deleteContact(${contact.id})">
                    Delete
                </button>
            </div>
        `;
        container.appendChild(contactCard);
    });
}

// Supplier Details Modal Functions
let currentSupplierId = null;

function openSupplierDetails(supplierId) {
    currentSupplierId = supplierId;
    const supplier = suppliers.find(s => s.id === supplierId);
    if (!supplier) return;
    
    // Update modal header
    document.getElementById('supplierDetailsTitle').textContent = `${supplier.name} - Details`;
    document.getElementById('supplierDetailsAvatar').textContent = supplier.name.charAt(0);
    document.getElementById('supplierDetailsName').textContent = supplier.name;
    document.getElementById('supplierDetailsCompany').textContent = supplier.company;
    
    const statusClass = supplier.status === 'preferred' ? 'status-preferred' : 
                       supplier.status === 'active' ? 'status-active' : 'status-inactive';
    const statusBadge = document.getElementById('supplierDetailsStatus');
    statusBadge.textContent = supplier.status.toUpperCase();
    statusBadge.className = `supplier-status-badge ${statusClass}`;
    
    // Update rating
    const stars = '⭐'.repeat(supplier.rating);
    document.getElementById('supplierDetailsRating').textContent = stars;
    
    // Update overview stats
    document.getElementById('supplierTotalOrders').textContent = supplier.totalOrders;
    document.getElementById('supplierTotalVolume').textContent = `$${supplier.totalPurchaseVolume.toFixed(2)}`;
    document.getElementById('supplierOutstandingBalance').textContent = `$${supplier.outstandingBalance.toFixed(2)}`;
    document.getElementById('supplierAvgLeadTime').textContent = `${supplier.leadTime} days`;
    
    // Update contact information
    document.getElementById('supplierDetailsEmail').textContent = supplier.email || '-';
    document.getElementById('supplierDetailsPhone').textContent = supplier.phone || '-';
    document.getElementById('supplierDetailsAddress').textContent = supplier.address || '-';
    
    // Update business information
    document.getElementById('supplierDetailsPaymentTerms').textContent = supplier.paymentTerms || '-';
    document.getElementById('supplierDetailsLeadTime').textContent = `${supplier.leadTime} days` || '-';
    document.getElementById('supplierDetailsMinOrder').textContent = `$${supplier.minOrderValue.toFixed(2)}` || '-';
    
    // Update performance metrics
    document.getElementById('supplierOnTimeDelivery').textContent = `${supplier.onTimeDelivery}%`;
    document.getElementById('supplierQualityRating').textContent = `${supplier.qualityRating}/5`;
    document.getElementById('supplierCommunication').textContent = `${supplier.communicationRating}/5`;
    
    // Load purchase history
    loadSupplierOrderHistory(supplierId);
    
    // Load contacts
    loadSupplierContacts(supplierId);
    
    document.getElementById('supplierDetailsModal').style.display = 'block';
}

function closeSupplierDetailsModal() {
    document.getElementById('supplierDetailsModal').style.display = 'none';
    currentSupplierId = null;
}

function loadSupplierOrderHistory(supplierId) {
    const tbody = document.getElementById('supplierOrderHistoryBody');
    const supplierInvoices = supplierInvoices.filter(invoice => invoice.supplier === supplierId);
    
    tbody.innerHTML = '';
    
    supplierInvoices.forEach(invoice => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${invoice.id}</td>
            <td>${formatDate(invoice.date)}</td>
            <td>$${invoice.amount.toFixed(2)}</td>
            <td>
                <span class="status-badge ${invoice.status === 'Paid' ? 'status-paid' : 'status-pending'}">
                    ${invoice.status}
                </span>
            </td>
            <td>${formatDate(invoice.dueDate)}</td>
            <td>
                <button class="btn btn-primary btn-small" onclick="viewPO('${invoice.id}')">
                    View
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function loadSupplierContacts(supplierId) {
    const container = document.getElementById('supplierContactsList');
    const contacts = supplierContacts.filter(contact => contact.supplierId === supplierId);
    
    container.innerHTML = '';
    
    contacts.forEach(contact => {
        const contactCard = document.createElement('div');
        contactCard.className = 'contact-card';
        contactCard.innerHTML = `
            <div class="contact-info">
                <h5>${contact.name}</h5>
                <p>${contact.role} - ${contact.department}</p>
                <p>${contact.email}</p>
                <p>${contact.phone}</p>
            </div>
            <div class="contact-actions">
                <button class="btn btn-secondary btn-small" onclick="editSupplierContact(${contact.id})">
                    Edit
                </button>
                <button class="btn btn-danger btn-small" onclick="deleteSupplierContact(${contact.id})">
                    Delete
                </button>
            </div>
        `;
        container.appendChild(contactCard);
    });
}

// Details Tab Functions
function switchCustomerDetailsTab(tabName) {
    // Remove active class from all tab buttons
    document.querySelectorAll('.customer-details-tabs .details-tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Hide all tab panels
    document.querySelectorAll('.customer-details-content .details-tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(`customer${tabName.charAt(0).toUpperCase() + tabName.slice(1)}Tab`).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

function switchSupplierDetailsTab(tabName) {
    // Remove active class from all tab buttons
    document.querySelectorAll('.supplier-details-tabs .details-tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Hide all tab panels
    document.querySelectorAll('.supplier-details-content .details-tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(`supplier${tabName.charAt(0).toUpperCase() + tabName.slice(1)}Tab`).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Quick Action Functions
function createCustomerInvoiceFromCard(customerId) {
    // Redirect to invoicing page with customer pre-selected
    window.location.href = `index.html?customer=${customerId}`;
}

function createSupplierPOFromCard(supplierId) {
    // Redirect to invoicing page with supplier pre-selected
    window.location.href = `index.html?supplier=${supplierId}`;
}

function createCustomerInvoice() {
    createCustomerInvoiceFromCard(currentCustomerId);
}

function createSupplierPO() {
    createSupplierPOFromCard(currentSupplierId);
}

function viewCustomerTransactions() {
    // Redirect to finance page with customer filter
    window.location.href = `finance.html?customer=${currentCustomerId}`;
}

function viewSupplierTransactions() {
    // Redirect to finance page with supplier filter
    window.location.href = `finance.html?supplier=${currentSupplierId}`;
}

function editCustomerDetails() {
    closeCustomerDetailsModal();
    editCustomerFromCard(currentCustomerId);
}

function editSupplierDetails() {
    closeSupplierDetailsModal();
    editSupplierFromCard(currentSupplierId);
}

// Export Functions
function exportData() {
    const data = {
        customers: customers,
        suppliers: suppliers,
        customerContacts: customerContacts,
        supplierContacts: supplierContacts,
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `customer_supplier_data_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
}

// Utility Functions
function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString();
}

// Contact Management Functions
function addCustomerContact() {
    // Implementation for adding customer contact
    alert('Add Customer Contact functionality to be implemented');
}

function addSupplierContact() {
    // Implementation for adding supplier contact
    alert('Add Supplier Contact functionality to be implemented');
}

function editContact(contactId) {
    // Implementation for editing contact
    alert('Edit Contact functionality to be implemented');
}

function deleteContact(contactId) {
    if (confirm('Are you sure you want to delete this contact?')) {
        const index = customerContacts.findIndex(c => c.id === contactId);
        if (index !== -1) {
            customerContacts.splice(index, 1);
            saveDataToStorage();
            loadCustomerContacts(currentCustomerId);
        }
    }
}

function editSupplierContact(contactId) {
    // Implementation for editing supplier contact
    alert('Edit Supplier Contact functionality to be implemented');
}

function deleteSupplierContact(contactId) {
    if (confirm('Are you sure you want to delete this contact?')) {
        const index = supplierContacts.findIndex(c => c.id === contactId);
        if (index !== -1) {
            supplierContacts.splice(index, 1);
            saveDataToStorage();
            loadSupplierContacts(currentSupplierId);
        }
    }
}

// Initialize Finance Page
function initializeFinancePage() {
    try {
        // Load the dashboard by default
        loadFinanceDashboard();

        // Initialize other components
        if (document.getElementById('plPeriod')) {
            document.getElementById('plPeriod').value = 'all';
        }

        console.log('Finance page initialized successfully');
    } catch (error) {
        console.error('Error initializing finance page:', error);
    }
}

// Order Details Management
function initializeOrderDetails() {
    // Set default invoice date to today
    const today = new Date().toISOString().split('T')[0];
    const invoiceDateElement = document.getElementById('orderInvoiceDate');
    if (invoiceDateElement) {
        invoiceDateElement.value = today;
    }

    // Set default delivery date to 30 days from now
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 30);
    const deliveryDateElement = document.getElementById('orderDeliveryDate');
    if (deliveryDateElement) {
        deliveryDateElement.value = deliveryDate.toISOString().split('T')[0];
    }
}

function updateOrderCalculations() {
    // Update comprehensive calculations when order details change
    updateComprehensiveCalculations();
}

function getOrderDetails() {
    return {
        customer: document.getElementById('orderCustomer')?.value || '',
        supplier: document.getElementById('orderSupplier')?.value || '',
        reference: document.getElementById('orderReference')?.value || '',
        deliveryDate: document.getElementById('orderDeliveryDate')?.value || '',
        invoiceDate: document.getElementById('orderInvoiceDate')?.value || '',
        shippingRef: document.getElementById('orderShippingRef')?.value || '',
        status: document.getElementById('orderStatus')?.value || 'draft',
        payment: document.getElementById('orderPayment')?.value || 'pending',
        shippingType: document.getElementById('orderShippingType')?.value || 'air'
    };
}

function validateOrderDetails() {
    const details = getOrderDetails();
    const errors = [];

    if (!details.customer) errors.push('Customer is required');
    if (!details.supplier) errors.push('Supplier is required');
    if (!details.invoiceDate) errors.push('Invoice Date is required');
    if (!details.status) errors.push('Status is required');

    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

function saveOrderDetails() {
    const validation = validateOrderDetails();

    if (!validation.isValid) {
        alert('Please fix the following errors:\n' + validation.errors.join('\n'));
        return false;
    }

    const orderDetails = getOrderDetails();

    // Save to localStorage
    localStorage.setItem('currentOrderDetails', JSON.stringify(orderDetails));

    // Show success message
    alert('Order details saved successfully!');
    return true;
}

// Badge Update Functions
function updateStatusBadge() {
    const statusSelect = document.getElementById('orderStatus');
    const statusBadge = document.getElementById('statusBadge');

    if (!statusSelect || !statusBadge) return;

    const selectedValue = statusSelect.value;
    const selectedText = statusSelect.options[statusSelect.selectedIndex].text;

    // Remove all status classes
    statusBadge.className = 'status-badge';

    // Add the appropriate class
    statusBadge.classList.add(`status-${selectedValue}`);
    statusBadge.textContent = selectedText;
}

function updatePaymentBadge() {
    const paymentSelect = document.getElementById('orderPayment');
    const paymentBadge = document.getElementById('paymentBadge');

    if (!paymentSelect || !paymentBadge) return;

    const selectedValue = paymentSelect.value;
    const selectedText = paymentSelect.options[paymentSelect.selectedIndex].text;

    // Remove all payment classes
    paymentBadge.className = 'payment-badge';

    // Add the appropriate class
    paymentBadge.classList.add(`payment-${selectedValue}`);
    paymentBadge.textContent = selectedText;
}

function updateShippingBadge() {
    const shippingSelect = document.getElementById('orderShippingType');
    const shippingBadge = document.getElementById('shippingBadge');

    if (!shippingSelect || !shippingBadge) return;

    const selectedValue = shippingSelect.value;
    const selectedText = shippingSelect.options[shippingSelect.selectedIndex].text;

    // Remove all shipping classes
    shippingBadge.className = 'shipping-badge';

    // Add the appropriate class
    shippingBadge.classList.add(`shipping-${selectedValue}`);
    shippingBadge.textContent = selectedText;
}

// Collapsible Order Details Functions
function toggleOrderDetails() {
    const content = document.getElementById('orderDetailsContent');
    const indicator = document.getElementById('orderDetailsIndicator');

    if (!content || !indicator) return;

    const isCollapsed = content.classList.contains('collapsed');

    if (isCollapsed) {
        // Expand
        content.classList.remove('collapsed');
        content.classList.add('expanded');
        indicator.textContent = '▼';
        indicator.classList.remove('collapsed');

        // Save state
        localStorage.setItem('orderDetailsExpanded', 'true');
    } else {
        // Collapse
        content.classList.remove('expanded');
        content.classList.add('collapsed');
        indicator.textContent = '▶';
        indicator.classList.add('collapsed');

        // Save state
        localStorage.setItem('orderDetailsExpanded', 'false');
    }
}

function initializeOrderDetailsState() {
    const content = document.getElementById('orderDetailsContent');
    const indicator = document.getElementById('orderDetailsIndicator');

    if (!content || !indicator) return;

    // Check saved state (default to collapsed for better UX)
    const isExpanded = localStorage.getItem('orderDetailsExpanded') === 'true';

    if (isExpanded) {
        content.classList.add('expanded');
        content.classList.remove('collapsed');
        indicator.textContent = '▼';
        indicator.classList.remove('collapsed');
    } else {
        content.classList.add('collapsed');
        content.classList.remove('expanded');
        indicator.textContent = '▶';
        indicator.classList.add('collapsed');
    }
}

// Collapsible Inline OTS Functions
function toggleOTSInline() {
    const content = document.getElementById('otsInlineContent');
    const indicator = document.getElementById('otsInlineIndicator');

    if (!content || !indicator) return;

    const isCollapsed = content.classList.contains('collapsed');

    if (isCollapsed) {
        // Expand
        content.classList.remove('collapsed');
        content.classList.add('expanded');
        indicator.textContent = '▼';
        indicator.classList.remove('collapsed');

        // Save state
        localStorage.setItem('otsInlineExpanded', 'true');
    } else {
        // Collapse
        content.classList.remove('expanded');
        content.classList.add('collapsed');
        indicator.textContent = '▶';
        indicator.classList.add('collapsed');

        // Save state
        localStorage.setItem('otsInlineExpanded', 'false');
    }
}

function initializeOTSInlineState() {
    const content = document.getElementById('otsInlineContent');
    const indicator = document.getElementById('otsInlineIndicator');

    if (!content || !indicator) return;

    // Check saved state (default to collapsed for better UX)
    const isExpanded = localStorage.getItem('otsInlineExpanded') === 'true';

    if (isExpanded) {
        content.classList.add('expanded');
        content.classList.remove('collapsed');
        indicator.textContent = '▼';
        indicator.classList.remove('collapsed');
    } else {
        content.classList.add('collapsed');
        content.classList.remove('expanded');
        indicator.textContent = '▶';
        indicator.classList.add('collapsed');
    }
}



// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Load data from storage first
    loadDataFromStorage();

    // Check if user explicitly requested empty system
    const emptySystemRequested = localStorage.getItem('sourcing_empty_system_requested');

    // Initialize test data if no data exists AND user didn't request empty system
    if ((products.length === 0 || customers.length === 0) && !emptySystemRequested) {
        console.log("📊 No data found, loading test data...");
        initializeTestData();
    } else if (emptySystemRequested) {
        console.log("🗑️ Empty system requested - skipping test data initialization");
        // Remove the flag after checking it
        localStorage.removeItem('sourcing_empty_system_requested');
    }

    // Initialize theme
    initializeTheme();

    // Add test data controls for development
    addTestDataControls();

    // Initialize the page based on current location
    const currentPage = window.location.pathname.split('/').pop();

    switch(currentPage) {
        case 'index.html':
        case '':
            // Initialize invoicing page
            try {
                // Migrate to enhanced inventory system if needed
                migrateToEnhancedInventory();

                initializeOrderDetails();
                initializeOrderDetailsState();
                initializeOTSInlineState();
                loadProducts();
                loadInventoryStatus();
                loadCustomerInvoices();
                loadSupplierInvoices();
                loadSupplierPayments();
                loadCustomerPayments();
                loadCustomerQuotes(); // ✅ Load customer quotes
                updateComprehensiveCalculations();
                // ✅ RESTORE COLLAPSIBLE SECTION STATES
                restoreSectionStates();
            } catch (error) {
                console.error('Error initializing invoicing page:', error);
            }
            break;
        case 'finance.html':
            // Initialize finance page
            initializeFinancePage();
            break;
        case 'inventory.html':
            // Initialize inventory page if it exists
            if (typeof initializeInventoryPage === 'function') {
                initializeInventoryPage();
            }
            break;
        case 'management.html':
            // Initialize management page if it exists
            if (typeof initializeManagementPage === 'function') {
                initializeManagementPage();
            }
            break;
        case 'shipments.html':
            // Initialize shipments page
            console.log('🚚 Initializing shipments page...');
            try {
                loadShipments();
                updateShipmentStats();
                console.log('✅ Shipments page initialized successfully');
            } catch (error) {
                console.error('❌ Error initializing shipments page:', error);
            }
            break;
    }

    console.log('Application initialized successfully!');
    console.log(`Loaded ${products.length} products, ${customers.length} customers, ${suppliers.length} suppliers`);

    // Make debug functions globally accessible
    window.debugShipmentDisplay = debugShipmentDisplay;
    window.debugShipmentCreation = debugShipmentCreation;
    window.debugLoadShipments = debugLoadShipments;
    window.forceDisplayShipments = forceDisplayShipments;
    window.resetShipmentsToSampleData = resetShipmentsToSampleData;
    window.addTestShipmentCard = addTestShipmentCard;

    // ✅ DEBUG: Test button functionality after DOM is loaded
    setTimeout(() => {
        console.log('=== DEBUGGING BUTTON FUNCTIONALITY ===');

        // Test basic functions
        const functions = [
            'addProduct',
            'openCustomerInvoiceModal',
            'openSupplierInvoiceModal',
            'openQuickAddProductModal',
            'openQuoteModal'
        ];

        functions.forEach(funcName => {
            if (typeof window[funcName] === 'function') {
                console.log(`✅ ${funcName} function exists`);
            } else {
                console.log(`❌ ${funcName} function missing`);
            }
        });

        // Test if key buttons exist
        const buttons = [
            'button[onclick="addProduct()"]',
            'button[onclick="openCustomerInvoiceModal()"]',
            'button[onclick="openSupplierInvoiceModal()"]',
            'button[onclick="openQuickAddProductModal()"]'
        ];

        buttons.forEach(selector => {
            const btn = document.querySelector(selector);
            console.log(`Button ${selector} found:`, !!btn);
        });

        // Test if key modals exist
        const modals = ['productModal', 'customerInvoiceModal', 'supplierInvoiceModal', 'quickAddProductModal'];
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            console.log(`Modal ${modalId} found:`, !!modal);
        });

        console.log('=== END DEBUG ===');

        // Test button functionality
        testButtonFunctionality();
    }, 1000);
});

// ✅ BUTTON FUNCTIONALITY TEST
function testButtonFunctionality() {
    console.log('=== TESTING BUTTON FUNCTIONALITY ===');

    // Test if key functions exist
    const functions = [
        'addProduct',
        'openCustomerInvoiceModal',
        'openSupplierInvoiceModal',
        'openQuickAddProductModal',
        'generateQuotation',
        'exportAllInvoicesToExcel',
        'openQuoteModal'
    ];

    functions.forEach(funcName => {
        if (typeof window[funcName] === 'function') {
            console.log(`✅ ${funcName} function exists`);
        } else {
            console.log(`❌ ${funcName} function missing`);
        }
    });

    // Test if key buttons exist
    const buttons = [
        'button[onclick="addProduct()"]',
        'button[onclick="openCustomerInvoiceModal()"]',
        'button[onclick="openSupplierInvoiceModal()"]',
        'button[onclick="openQuickAddProductModal()"]'
    ];

    buttons.forEach(selector => {
        const btn = document.querySelector(selector);
        console.log(`Button ${selector} found:`, !!btn);
        if (btn) {
            console.log('Button element:', btn);
            // Test if button is clickable
            console.log('Button disabled:', btn.disabled);
            console.log('Button style display:', btn.style.display);
        }
    });

    // Test if key modals exist
    const modals = ['productModal', 'customerInvoiceModal', 'supplierInvoiceModal', 'quickAddProductModal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        console.log(`Modal ${modalId} found:`, !!modal);
    });

    console.log('=== END BUTTON TEST ===');

    // Add a global test function that can be called from browser console
    window.testButtonFunctions = function() {
        console.log('🧪 Testing button functions manually...');

        try {
            console.log('Testing addProduct...');
            addProduct();
            console.log('✅ addProduct worked');
        } catch (error) {
            console.error('❌ addProduct failed:', error);
        }

        try {
            console.log('Testing openQuickAddProductModal...');
            openQuickAddProductModal();
            console.log('✅ openQuickAddProductModal worked');
        } catch (error) {
            console.error('❌ openQuickAddProductModal failed:', error);
        }
    };

    console.log('💡 You can test functions manually by typing: testButtonFunctions() in the console');

    // Add backup event listeners for critical buttons
    addBackupEventListeners();

    // Add comprehensive button testing
    const buttonTests = [
        { selector: 'button[onclick="addProduct()"]', name: 'Add Product', func: 'addProduct' },
        { selector: 'button[onclick="openQuickAddProductModal()"]', name: 'Quick Add Product', func: 'openQuickAddProductModal' },
        { selector: 'button[onclick="openCustomerInvoiceModal()"]', name: 'Create Sales Order', func: 'openCustomerInvoiceModal' },
        { selector: 'button[onclick="openSupplierInvoiceModal()"]', name: 'Create PO', func: 'openSupplierInvoiceModal' },
        { selector: 'button[onclick="generateQuotation()"]', name: 'Generate Quote', func: 'generateQuotation' }
    ];

    buttonTests.forEach(test => {
        const btn = document.querySelector(test.selector);
        if (btn) {
            console.log(`✅ Found ${test.name} button`);
            console.log('Button properties:', {
                disabled: btn.disabled,
                style: btn.style.cssText,
                offsetParent: btn.offsetParent,
                clientWidth: btn.clientWidth,
                clientHeight: btn.clientHeight
            });

            // Test if the function exists
            if (typeof window[test.func] === 'function') {
                console.log(`✅ Function ${test.func} exists`);

                // Add a test click handler
                btn.addEventListener('click', function(e) {
                    console.log(`🔥 ${test.name} button clicked via event listener!`);
                    console.log('Event details:', e);
                });

                // Test direct function call
                try {
                    console.log(`Testing direct call to ${test.func}...`);
                    // Don't actually call the function, just test if it would work
                    console.log(`✅ ${test.func} can be called directly`);
                } catch (error) {
                    console.error(`❌ Error testing ${test.func}:`, error);
                }
            } else {
                console.log(`❌ Function ${test.func} does not exist`);
            }
        } else {
            console.log(`❌ ${test.name} button not found`);
        }
    });
}

// ✅ BACKUP EVENT LISTENERS - In case onclick handlers fail
function addBackupEventListeners() {
    console.log('🔧 Adding backup event listeners...');

    // Add Product button
    const addProductBtn = document.querySelector('button[onclick="addProduct()"]');
    if (addProductBtn) {
        addProductBtn.addEventListener('click', function(e) {
            console.log('🔥 Add Product clicked via backup listener');
            if (e.target.onclick) {
                // If onclick exists, let it handle
                return;
            }
            e.preventDefault();
            addProduct();
        });
        console.log('✅ Add Product backup listener added');
    }

    // Quick Add Product button
    const quickAddBtn = document.querySelector('button[onclick="openQuickAddProductModal()"]');
    if (quickAddBtn) {
        quickAddBtn.addEventListener('click', function(e) {
            console.log('🔥 Quick Add Product clicked via backup listener');
            if (e.target.onclick) {
                return;
            }
            e.preventDefault();
            openQuickAddProductModal();
        });
        console.log('✅ Quick Add Product backup listener added');
    }

    // Create Sales Order button
    const createSOBtn = document.querySelector('button[onclick="openCustomerInvoiceModal()"]');
    if (createSOBtn) {
        createSOBtn.addEventListener('click', function(e) {
            console.log('🔥 Create Sales Order clicked via backup listener');
            if (e.target.onclick) {
                return;
            }
            e.preventDefault();
            openCustomerInvoiceModal();
        });
        console.log('✅ Create Sales Order backup listener added');
    }

    // Create PO button
    const createPOBtn = document.querySelector('button[onclick="openSupplierInvoiceModal()"]');
    if (createPOBtn) {
        createPOBtn.addEventListener('click', function(e) {
            console.log('🔥 Create PO clicked via backup listener');
            if (e.target.onclick) {
                return;
            }
            e.preventDefault();
            openSupplierInvoiceModal();
        });
        console.log('✅ Create PO backup listener added');
    }

    // Generate Quote buttons
    const quoteButtons = document.querySelectorAll('button[onclick="generateQuotation()"]');
    quoteButtons.forEach((btn, index) => {
        btn.addEventListener('click', function(e) {
            console.log(`🔥 Generate Quote ${index + 1} clicked via backup listener`);
            if (e.target.onclick) {
                return;
            }
            e.preventDefault();
            generateQuotation();
        });
        console.log(`✅ Generate Quote ${index + 1} backup listener added`);
    });

    console.log('🎯 All backup event listeners added successfully');
}
