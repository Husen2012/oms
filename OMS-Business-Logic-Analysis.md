# 📊 Order Management System (OMS) - Business Logic Analysis
## Comprehensive Business Process Documentation

---

## 🎯 **Executive Summary**

The Order Management System (OMS) is a sophisticated sourcing agent platform that manages the complete order lifecycle from customer quotation to product delivery. The system integrates order processing, inventory management, supplier relationships, shipping coordination, and financial accounting into a unified platform designed specifically for sourcing agent businesses.

---

## 🏗️ **Business Model Overview**

### **Sourcing Agent Business Model**
The system supports a **sourcing agent business model** where the company:
- Acts as an intermediary between customers and suppliers
- Sources products from suppliers based on customer requirements
- Manages inventory, shipping, and fulfillment
- Generates revenue through product markup and commissions
- Handles multiple shipping carriers and service types

### **Revenue Streams**
1. **Product Sales Revenue** (Account 4010) - Markup on products sold to customers
2. **Commission Revenue** (Account 4020) - Percentage-based commissions on sales
3. **Shipping Revenue** (Accounts 4030-4033) - Markup on shipping services

---

## 🔄 **Complete Business Workflow**

### **Phase 1: Order Initiation & Quotation**
```
Customer Inquiry → Product Selection → Quotation Generation → Customer Approval
```

**Key Components:**
- **Order Details Capture**: Customer information, delivery requirements, reference numbers
- **Product Selection**: Multi-product quotations with real-time pricing
- **Commission Calculation**: Configurable commission percentages (default 5%)
- **Shipping Cost Estimation**: Multiple carrier options with cost comparison
- **Quote Generation**: Professional PDF quotes with terms and conditions

**Business Rules:**
- All quotes include product cost + markup + commission + shipping
- Commission is calculated as percentage of total sale value
- Shipping costs are estimated based on weight, destination, and service type
- Quotes have validity periods and require customer approval

### **Phase 2: Procurement & Purchase Orders**
```
Approved Quote → Supplier Selection → Purchase Order Creation → Supplier Payment
```

**Key Components:**
- **Supplier Management**: Multiple suppliers with payment terms and credit limits
- **Purchase Order Creation**: Automated PO generation based on customer orders
- **Payment Integration**: Supplier payment tracking with multiple payment methods
- **Delivery Tracking**: Expected delivery dates and supplier performance monitoring

**Accounting Integration:**
```
Dr. Inventory (1220)                    $XXX
    Cr. Accounts Payable - Supplier (2010)    $XXX
```

### **Phase 3: Inventory Management & Receiving**
```
Goods Receipt → Inventory Update → Quality Control → Allocation to Orders
```

**Key Components:**
- **Goods Receiving**: Quantity verification and quality control
- **Inventory Tracking**: Real-time stock levels with FIFO costing
- **Allocation Management**: Automatic allocation to pending customer orders
- **Stock Adjustments**: Manual adjustments for damaged/lost goods

**Inventory States:**
- **Total Received**: All goods received from suppliers
- **Available**: Unallocated inventory ready for sale
- **Allocated**: Reserved for specific customer orders
- **Shipped**: Goods dispatched to customers

### **Phase 4: Sales Order Processing & Revenue Recognition**
```
Customer Order → Inventory Allocation → Sales Order Creation → Revenue Recognition
```

**Key Components:**
- **Sales Order Creation**: Formal customer orders with payment terms
- **Revenue Recognition**: Accrual-based revenue recording
- **COGS Calculation**: FIFO-based cost of goods sold calculation
- **Customer Payment Processing**: Multiple payment methods and terms

**Accounting Integration:**
```
Dr. Accounts Receivable (1110)          $XXX
    Cr. Product Sales Revenue (4010)         $XXX
    Cr. Commission Revenue (4020)             $XXX
    Cr. Shipping Revenue (4030)               $XXX

Dr. Cost of Goods Sold (5010)           $XXX
    Cr. Inventory (1220)                      $XXX
```

### **Phase 5: Shipping & Fulfillment**
```
Shipment Creation → Carrier Selection → Shipping Cost Recording → Delivery Tracking
```

**Key Components:**
- **Multi-Carrier Support**: DHL, FedEx, UPS, China Post, SF Express, Aramex, EMS
- **Service Types**: Air, Sea, Express, Standard, Local, Pickup
- **Cost Management**: Actual shipping costs vs. customer charges
- **Performance Tracking**: Delivery times, success rates, carrier performance

**Shipping Accounting:**
```
Dr. Shipping Expenses - Carrier (6010-6013)  $XXX
    Cr. Accounts Payable - Carrier (2015-2018)   $XXX
```

### **Phase 6: Delivery & Completion**
```
Shipment Dispatch → Tracking Updates → Delivery Confirmation → Order Completion
```

---

## 🏢 **Business Entities & Relationships**

### **Core Entities**

#### **1. Customers**
- **Attributes**: Name, contact information, payment terms, credit limits
- **Relationships**: One-to-many with Sales Orders, Payments, Shipments
- **Business Rules**: Credit limit enforcement, payment term validation

#### **2. Suppliers**
- **Attributes**: Name, contact information, payment terms, performance metrics
- **Relationships**: One-to-many with Purchase Orders, Products, Payments
- **Business Rules**: Payment term compliance, performance tracking

#### **3. Products**
- **Attributes**: SKU, name, description, cost price, sell price, category
- **Relationships**: Many-to-many with Orders, One-to-many with Inventory Lots
- **Business Rules**: Pricing validation, inventory allocation rules

#### **4. Purchase Orders (POs)**
- **Attributes**: PO number, supplier, date, amount, status, due date
- **Relationships**: Many-to-many with Products, One-to-many with Payments
- **Business Rules**: Approval workflows, budget constraints

#### **5. Sales Orders (Customer Invoices)**
- **Attributes**: Order number, customer, date, amount, status, payment terms
- **Relationships**: Many-to-many with Products, One-to-many with Shipments
- **Business Rules**: Credit limit checks, inventory availability

#### **6. Inventory**
- **Attributes**: Product, quantity received/available/allocated/shipped, unit cost
- **Relationships**: Belongs to Product, linked to Purchase Orders and Sales Orders
- **Business Rules**: FIFO costing, allocation priorities

#### **7. Shipments**
- **Attributes**: Shipment ID, carrier, service type, cost, tracking number, status
- **Relationships**: Belongs to Sales Order, linked to Shipping Company
- **Business Rules**: Cost validation, delivery tracking

#### **8. Shipping Companies**
- **Attributes**: Name, services, rates, payment terms, performance metrics
- **Relationships**: One-to-many with Shipments, Payments
- **Business Rules**: Rate calculations, performance tracking

### **Entity Relationship Diagram**
```
Customer ──┐
           ├── Sales Order ──── Shipment ──── Shipping Company
           └── Payment

Supplier ──┐
           ├── Purchase Order ──── Product ──── Inventory
           └── Payment

Product ────┬── Purchase Order
            └── Sales Order
```

---

## 💰 **Financial Transaction Flows**

### **Revenue Cycle**
1. **Quote Generation**: Estimate revenue potential
2. **Sales Order Creation**: Record accounts receivable and revenue
3. **Customer Payment**: Reduce receivables, increase cash
4. **Revenue Recognition**: Match revenue with delivery

### **Procurement Cycle**
1. **Purchase Order Creation**: Record inventory and accounts payable
2. **Goods Receipt**: Confirm inventory receipt
3. **Supplier Payment**: Reduce payables, decrease cash
4. **COGS Recognition**: Transfer inventory cost to expense

### **Shipping Cycle**
1. **Shipment Creation**: Record shipping expense and carrier payable
2. **Customer Shipping Charge**: Record shipping revenue and receivable
3. **Carrier Payment**: Reduce payables, decrease cash
4. **Profit Recognition**: Calculate shipping profit margin

---

## 📊 **Key Performance Indicators (KPIs)**

### **Operational KPIs**
- Order processing time (target: <24 hours)
- Inventory turnover ratio
- Order fulfillment accuracy (target: >99%)
- Supplier delivery performance
- Customer satisfaction scores

### **Financial KPIs**
- Gross profit margin by product category
- Commission revenue percentage
- Shipping profit margins
- Accounts receivable turnover
- Cash conversion cycle

### **Shipping KPIs**
- Carrier performance ratings
- Shipping cost optimization
- Delivery time performance
- Shipping profit margins by service type

---

## 🔧 **Business Rules & Constraints**

### **Order Processing Rules**
1. **Credit Limits**: Customer orders cannot exceed approved credit limits
2. **Inventory Allocation**: Products allocated on first-come, first-served basis
3. **Pricing Validation**: Sell prices must exceed cost prices plus minimum margin
4. **Commission Calculation**: Applied to total order value including shipping

### **Inventory Management Rules**
1. **FIFO Costing**: Oldest inventory used first for COGS calculation
2. **Allocation Priority**: Confirmed orders take priority over quotes
3. **Stock Adjustments**: Require approval and documentation
4. **Reorder Points**: Automatic alerts when stock falls below minimum levels

### **Financial Rules**
1. **Double-Entry Bookkeeping**: All transactions must balance
2. **Revenue Recognition**: Revenue recognized when goods are shipped
3. **Payment Terms**: Enforced based on customer/supplier agreements
4. **Currency Handling**: Multi-currency support with exchange rate tracking

---

## 🚀 **System Integration Points**

### **Internal Integrations**
- **Order ↔ Inventory**: Real-time allocation and availability checking
- **Sales ↔ Accounting**: Automatic journal entry generation
- **Shipping ↔ Accounting**: Automated expense and revenue recording
- **Payments ↔ Accounting**: Real-time AR/AP updates

### **External Integration Opportunities**
- **Supplier Systems**: EDI integration for automated ordering
- **Shipping APIs**: Real-time tracking and rate calculation
- **Payment Gateways**: Automated payment processing
- **ERP Systems**: Data synchronization with enterprise systems

---

This business logic analysis provides the foundation for understanding how the OMS operates and integrates with the accounting system. The next document will detail the accounting system architecture and implementation.
