# 📊 Order Management System - Business Flow Diagrams
## Visual Documentation of Business Processes and Accounting Integration

---

## 🎯 **Overview**

This document provides visual representations of the business workflows and accounting integration points within the Order Management System. Each diagram shows the complete flow from business action to accounting impact.

---

## 🔄 **Complete Order Lifecycle Flow**

### **Master Business Process Flow**
```mermaid
graph TD
    A[Customer Inquiry] --> B[Product Selection & Quotation]
    B --> C{Customer Approval?}
    C -->|No| B
    C -->|Yes| D[Purchase Order Creation]
    D --> E[Supplier Payment]
    E --> F[Goods Receipt & Inventory Update]
    F --> G[Sales Order Creation]
    G --> H[Customer Payment]
    H --> I[Shipment Creation]
    I --> J[Carrier Payment]
    J --> K[Delivery & Completion]
    
    %% Accounting Integration Points
    D -.-> D1[Dr. Inventory<br/>Cr. A/P Supplier]
    E -.-> E1[Dr. A/P Supplier<br/>Cr. Cash]
    G -.-> G1[Dr. A/R Customer<br/>Cr. Revenue<br/>Dr. COGS<br/>Cr. Inventory]
    H -.-> H1[Dr. Cash<br/>Cr. A/R Customer]
    I -.-> I1[Dr. Shipping Expense<br/>Cr. A/P Carrier]
    J -.-> J1[Dr. A/P Carrier<br/>Cr. Cash]
    
    style D1 fill:#e1f5fe
    style E1 fill:#e1f5fe
    style G1 fill:#e1f5fe
    style H1 fill:#e1f5fe
    style I1 fill:#e1f5fe
    style J1 fill:#e1f5fe
```

---

## 💰 **Revenue Recognition Flow**

### **Sales Order Revenue Recognition Process**
```mermaid
graph TD
    A[Sales Order Created] --> B[Calculate Revenue Components]
    B --> C[Product Revenue<br/>Account 4010]
    B --> D[Commission Revenue<br/>Account 4020]
    B --> E[Shipping Revenue<br/>Accounts 4030-4033]
    
    C --> F[Record A/R Debit<br/>Account 1110]
    D --> F
    E --> F
    
    F --> G[Calculate COGS<br/>FIFO Method]
    G --> H[Record COGS Debit<br/>Account 5010]
    H --> I[Record Inventory Credit<br/>Account 1220]
    
    I --> J[Update Account Balances]
    J --> K[Save Journal Entry]
    K --> L[Revenue Recognized]
    
    style C fill:#c8e6c9
    style D fill:#c8e6c9
    style E fill:#c8e6c9
    style H fill:#ffcdd2
    style I fill:#ffcdd2
```

### **Revenue Breakdown by Type**
```mermaid
pie title Revenue Components
    "Product Sales (4010)" : 70
    "Commission Revenue (4020)" : 20
    "Shipping Revenue (4030-4033)" : 10
```

---

## 🚚 **Shipping Accounting Integration**

### **Multi-Carrier Shipping Process**
```mermaid
graph TD
    A[Shipment Created] --> B{Identify Carrier}
    
    B -->|DHL| C1[DHL Expense<br/>Account 6010]
    B -->|FedEx| C2[FedEx Expense<br/>Account 6011]
    B -->|UPS| C3[UPS Expense<br/>Account 6012]
    B -->|China Post| C4[China Post Expense<br/>Account 6013]
    
    C1 --> D1[DHL Payable<br/>Account 2015]
    C2 --> D2[FedEx Payable<br/>Account 2016]
    C3 --> D3[UPS Payable<br/>Account 2017]
    C4 --> D4[China Post Payable<br/>Account 2018]
    
    D1 --> E[Update Performance Metrics]
    D2 --> E
    D3 --> E
    D4 --> E
    
    E --> F[Record Journal Entry]
    F --> G[Update Account Balances]
    G --> H[Save to Storage]
    
    style C1 fill:#ffeb3b
    style C2 fill:#ffeb3b
    style C3 fill:#ffeb3b
    style C4 fill:#ffeb3b
    style D1 fill:#f44336
    style D2 fill:#f44336
    style D3 fill:#f44336
    style D4 fill:#f44336
```

### **Shipping Profit Analysis Flow**
```mermaid
graph LR
    A[Customer Pays Shipping] --> B[Shipping Revenue<br/>Accounts 4030-4033]
    C[Carrier Charges Cost] --> D[Shipping Expense<br/>Accounts 6010-6016]
    
    B --> E[Calculate Shipping Profit]
    D --> E
    
    E --> F{Profit Margin}
    F -->|Positive| G[Profitable Shipping]
    F -->|Negative| H[Loss on Shipping]
    
    G --> I[Optimize Pricing]
    H --> J[Review Carrier Rates]
    
    style B fill:#4caf50
    style D fill:#f44336
    style G fill:#4caf50
    style H fill:#f44336
```

---

## 📦 **Inventory Management Flow**

### **Inventory Lifecycle with Accounting**
```mermaid
graph TD
    A[Purchase Order Created] --> B[Record Inventory Asset<br/>Dr. Inventory 1220<br/>Cr. A/P 2010]
    
    B --> C[Goods Received] --> D[Verify Quantities]
    D --> E[Update Inventory Levels]
    E --> F[Allocate to Sales Orders]
    
    F --> G[Sales Order Created] --> H[Calculate COGS<br/>FIFO Method]
    H --> I[Record COGS<br/>Dr. COGS 5010<br/>Cr. Inventory 1220]
    
    I --> J[Update Available Inventory]
    J --> K[Shipment Created]
    K --> L[Mark as Shipped]
    
    %% Inventory States
    M[Total Received] --> N[Available]
    N --> O[Allocated]
    O --> P[Shipped]
    
    style B fill:#e3f2fd
    style H fill:#fff3e0
    style I fill:#fff3e0
```

### **FIFO Costing Method**
```mermaid
graph TD
    A[Product Sale] --> B[Identify Inventory Lots]
    B --> C[Sort by Received Date<br/>Oldest First]
    
    C --> D{Sufficient Qty<br/>in Oldest Lot?}
    D -->|Yes| E[Use Oldest Lot Cost]
    D -->|No| F[Use Multiple Lots<br/>Oldest First]
    
    E --> G[Calculate COGS]
    F --> G
    
    G --> H[Update Lot Quantities]
    H --> I[Record Journal Entry<br/>Dr. COGS<br/>Cr. Inventory]
    
    style C fill:#e8f5e8
    style G fill:#fff3e0
    style I fill:#e3f2fd
```

---

## 💳 **Payment Processing Flows**

### **Supplier Payment Process**
```mermaid
graph TD
    A[Purchase Order Outstanding] --> B[Payment Due Date]
    B --> C[Initiate Payment]
    C --> D[Select Payment Method]
    
    D --> E1[Cash Payment]
    D --> E2[Check Payment]
    D --> E3[Bank Transfer]
    D --> E4[Credit Card]
    
    E1 --> F[Record Payment<br/>Dr. A/P Supplier 2010<br/>Cr. Cash 1010]
    E2 --> F
    E3 --> F
    E4 --> F
    
    F --> G[Update Supplier Balance]
    G --> H[Update Payment History]
    H --> I[Generate Payment Record]
    
    style F fill:#e3f2fd
```

### **Customer Payment Process**
```mermaid
graph TD
    A[Sales Order Outstanding] --> B[Customer Payment Received]
    B --> C[Verify Payment Amount]
    C --> D{Full Payment?}
    
    D -->|Yes| E[Record Full Payment<br/>Dr. Cash 1010<br/>Cr. A/R 1110]
    D -->|No| F[Record Partial Payment<br/>Dr. Cash 1010<br/>Cr. A/R 1110]
    
    E --> G[Mark Order as Paid]
    F --> H[Update Outstanding Balance]
    
    G --> I[Update Customer Account]
    H --> I
    I --> J[Generate Receipt]
    
    style E fill:#c8e6c9
    style F fill:#fff3e0
```

---

## 📊 **Financial Reporting Flow**

### **Report Generation Process**
```mermaid
graph TD
    A[Report Request] --> B{Report Type}
    
    B -->|P&L| C[Profit & Loss Statement]
    B -->|Balance Sheet| D[Balance Sheet]
    B -->|Shipping Analysis| E[Shipping Profit Report]
    B -->|Carrier Performance| F[Carrier Performance Report]
    
    C --> G1[Calculate Revenue<br/>Accounts 4000-4999]
    C --> G2[Calculate COGS<br/>Accounts 5000-5999]
    C --> G3[Calculate Expenses<br/>Accounts 6000-6999]
    
    D --> H1[Calculate Assets<br/>Accounts 1000-1999]
    D --> H2[Calculate Liabilities<br/>Accounts 2000-2999]
    D --> H3[Calculate Equity<br/>Accounts 3000-3999]
    
    E --> I1[Shipping Revenue by Type]
    E --> I2[Shipping Expenses by Carrier]
    E --> I3[Calculate Profit Margins]
    
    F --> J1[Cost Analysis by Carrier]
    F --> J2[Performance Metrics]
    F --> J3[Outstanding Payables]
    
    G1 --> K[Generate Report]
    G2 --> K
    G3 --> K
    H1 --> K
    H2 --> K
    H3 --> K
    I1 --> K
    I2 --> K
    I3 --> K
    J1 --> K
    J2 --> K
    J3 --> K
    
    K --> L[Display/Export Results]
    
    style C fill:#e8f5e8
    style D fill:#e3f2fd
    style E fill:#fff3e0
    style F fill:#fce4ec
```

---

## 🔄 **Account Balance Update Flow**

### **Real-time Balance Calculation**
```mermaid
graph TD
    A[Journal Entry Posted] --> B[Process Debits]
    B --> C[Process Credits]
    
    C --> D{Account Type}
    D -->|Asset/Expense| E[Net = Debits - Credits]
    D -->|Liability/Equity/Revenue| F[Net = Credits - Debits]
    
    E --> G[Update Account Balance]
    F --> G
    
    G --> H[Save to Storage]
    H --> I[Trigger Balance Events]
    I --> J[Update UI Displays]
    
    style E fill:#c8e6c9
    style F fill:#ffcdd2
    style G fill:#e3f2fd
```

---

## 🧪 **System Integration Points**

### **Module Integration Architecture**
```mermaid
graph TD
    A[Order Management] --> B[Accounting System]
    C[Inventory Management] --> B
    D[Shipping Management] --> B
    E[Payment Processing] --> B
    
    B --> F[Journal Entries]
    B --> G[Account Balances]
    B --> H[Financial Reports]
    
    F --> I[General Ledger]
    G --> I
    H --> I
    
    I --> J[Data Storage<br/>localStorage]
    
    style B fill:#e3f2fd
    style I fill:#fff3e0
    style J fill:#f3e5f5
```

---

These business flow diagrams provide a comprehensive visual guide to understanding how the Order Management System processes business transactions and integrates them with the accounting system. Each flow shows the complete path from business action to financial recording, ensuring transparency and auditability of all operations.

---

## 📋 **Documentation Summary**

This comprehensive documentation package includes:

1. **📊 OMS-Business-Logic-Analysis.md** - Complete business process analysis
2. **📚 OMS-Accounting-System-Documentation.md** - Detailed accounting system architecture
3. **👥 OMS-Accounting-User-Guide.md** - User guide for business users and accountants
4. **🔧 OMS-Accounting-Technical-Documentation.md** - Developer technical reference
5. **📊 OMS-Business-Flow-Diagrams.md** - Visual business process flows

### **Key Integration Points:**
- ✅ **Automated Journal Entries** for all business transactions
- ✅ **Real-time Account Balances** with proper debit/credit handling
- ✅ **Multi-Carrier Shipping Integration** with dedicated expense tracking
- ✅ **FIFO Inventory Costing** for accurate cost of goods sold
- ✅ **Comprehensive Financial Reporting** with P&L and Balance Sheet
- ✅ **Complete Audit Trail** with transaction history and validation

### **Business Benefits:**
- **Financial Transparency** - Real-time visibility into all financial aspects
- **Operational Efficiency** - Automated accounting reduces manual work
- **Compliance Ready** - Double-entry bookkeeping with audit trails
- **Performance Tracking** - Detailed carrier and shipping profitability analysis
- **Scalable Architecture** - Designed to grow with business needs
