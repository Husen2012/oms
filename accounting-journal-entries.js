// 🏢 ENTERPRISE ACCOUNTING SYSTEM - JOURNAL ENTRIES ENGINE
// Task 1.2: Double-Entry Bookkeeping System
// Status: ✅ IN PROGRESS

// ==================== GLOBAL VARIABLES ====================
let journalEntries = [];
let journalEntrySequence = 1;
let auditTrail = [];

// ==================== JOURNAL ENTRY CLASS ====================
class JournalEntry {
    constructor(date, description, reference = null, source = 'manual') {
        this.id = this.generateId();
        this.entryNumber = this.generateEntryNumber();
        this.date = this.validateDate(date);
        this.description = description;
        this.reference = reference;
        this.source = source; // manual, auto, import, etc.
        this.entries = [];
        this.totalDebits = 0;
        this.totalCredits = 0;
        this.balanced = false;
        this.posted = false;
        this.reversed = false;
        this.reversalId = null;
        this.createdBy = 'system';
        this.createdAt = new Date().toISOString();
        this.modifiedAt = null;
        this.postedAt = null;
        this.tags = [];
        this.attachments = [];
    }

    generateId() {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        return `JE-${timestamp}-${random}`;
    }

    generateEntryNumber() {
        const currentYear = new Date().getFullYear();
        const entryNum = String(journalEntrySequence++).padStart(6, '0');
        return `${currentYear}-${entryNum}`;
    }

    validateDate(date) {
        const entryDate = new Date(date);
        if (isNaN(entryDate.getTime())) {
            throw new Error('Invalid date provided for journal entry');
        }
        return entryDate.toISOString().split('T')[0];
    }

    addDebit(accountCode, amount, description = '', lineReference = '') {
        // Validate account code
        if (typeof validateAccountCode === 'function') {
            validateAccountCode(accountCode);
        }

        const debitAmount = this.validateAmount(amount);
        
        this.entries.push({
            lineNumber: this.entries.length + 1,
            accountCode: accountCode,
            accountName: this.getAccountName(accountCode),
            debit: debitAmount,
            credit: 0,
            description: description || this.description,
            lineReference: lineReference,
            createdAt: new Date().toISOString()
        });
        
        this.totalDebits += debitAmount;
        this.checkBalance();
        this.modifiedAt = new Date().toISOString();
        
        return this;
    }

    addCredit(accountCode, amount, description = '', lineReference = '') {
        // Validate account code
        if (typeof validateAccountCode === 'function') {
            validateAccountCode(accountCode);
        }

        const creditAmount = this.validateAmount(amount);
        
        this.entries.push({
            lineNumber: this.entries.length + 1,
            accountCode: accountCode,
            accountName: this.getAccountName(accountCode),
            debit: 0,
            credit: creditAmount,
            description: description || this.description,
            lineReference: lineReference,
            createdAt: new Date().toISOString()
        });
        
        this.totalCredits += creditAmount;
        this.checkBalance();
        this.modifiedAt = new Date().toISOString();
        
        return this;
    }

    validateAmount(amount) {
        const numAmount = parseFloat(amount);
        if (isNaN(numAmount) || numAmount < 0) {
            throw new Error(`Invalid amount: ${amount}. Amount must be a positive number.`);
        }
        return Math.round(numAmount * 100) / 100; // Round to 2 decimal places
    }

    getAccountName(accountCode) {
        if (typeof getAccountName === 'function') {
            return getAccountName(accountCode);
        }
        return `Account ${accountCode}`;
    }

    checkBalance() {
        const tolerance = 0.01; // Allow 1 cent tolerance for rounding
        this.balanced = Math.abs(this.totalDebits - this.totalCredits) < tolerance;
        return this.balanced;
    }

    addTag(tag) {
        if (!this.tags.includes(tag)) {
            this.tags.push(tag);
        }
        return this;
    }

    addAttachment(attachment) {
        this.attachments.push({
            id: `ATT-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            name: attachment.name,
            type: attachment.type,
            url: attachment.url,
            uploadedAt: new Date().toISOString()
        });
        return this;
    }

    validate() {
        const errors = [];

        // Check if entry has at least 2 lines
        if (this.entries.length < 2) {
            errors.push('Journal entry must have at least 2 lines (one debit and one credit)');
        }

        // Check if entry is balanced
        if (!this.balanced) {
            errors.push(`Journal entry is not balanced. Debits: ${this.totalDebits}, Credits: ${this.totalCredits}`);
        }

        // Check if all entries have valid amounts
        for (const entry of this.entries) {
            if (entry.debit === 0 && entry.credit === 0) {
                errors.push(`Line ${entry.lineNumber}: Entry must have either debit or credit amount`);
            }
            if (entry.debit > 0 && entry.credit > 0) {
                errors.push(`Line ${entry.lineNumber}: Entry cannot have both debit and credit amounts`);
            }
        }

        // Check for required fields
        if (!this.description || this.description.trim() === '') {
            errors.push('Description is required');
        }

        if (!this.date) {
            errors.push('Date is required');
        }

        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }

    post() {
        // Validate before posting
        const validation = this.validate();
        if (!validation.isValid) {
            throw new Error(`Cannot post journal entry: ${validation.errors.join(', ')}`);
        }

        if (this.posted) {
            throw new Error(`Journal entry ${this.id} is already posted`);
        }

        if (this.reversed) {
            throw new Error(`Journal entry ${this.id} has been reversed and cannot be posted`);
        }

        try {
            // Add to journal entries array
            journalEntries.push(this);
            
            // Update account balances (will be implemented in general ledger module)
            if (typeof updateAccountBalancesFromJE === 'function') {
                updateAccountBalancesFromJE(this);
            }
            
            // Mark as posted
            this.posted = true;
            this.postedAt = new Date().toISOString();
            this.modifiedAt = new Date().toISOString();
            
            // Add to audit trail
            this.addToAuditTrail('POSTED');
            
            // Save to storage
            this.saveToStorage();
            
            console.log(`✅ Journal Entry ${this.entryNumber} posted successfully`);
            return this;
            
        } catch (error) {
            console.error(`❌ Error posting journal entry ${this.id}:`, error);
            throw error;
        }
    }

    reverse(reverseDate = null, reverseDescription = null) {
        if (!this.posted) {
            throw new Error('Cannot reverse unposted journal entry');
        }

        if (this.reversed) {
            throw new Error('Journal entry has already been reversed');
        }

        const revDate = reverseDate || new Date().toISOString().split('T')[0];
        const revDesc = reverseDescription || `Reversal of ${this.description}`;

        // Create reversal entry
        const reversalEntry = new JournalEntry(revDate, revDesc, this.reference, 'reversal');
        
        // Add opposite entries
        this.entries.forEach(entry => {
            if (entry.debit > 0) {
                reversalEntry.addCredit(entry.accountCode, entry.debit, `Reversal: ${entry.description}`);
            } else if (entry.credit > 0) {
                reversalEntry.addDebit(entry.accountCode, entry.credit, `Reversal: ${entry.description}`);
            }
        });

        // Post the reversal
        reversalEntry.post();

        // Mark original as reversed
        this.reversed = true;
        this.reversalId = reversalEntry.id;
        this.modifiedAt = new Date().toISOString();

        // Add to audit trail
        this.addToAuditTrail('REVERSED');

        // Save changes
        this.saveToStorage();

        return reversalEntry;
    }

    addToAuditTrail(action) {
        const auditEntry = {
            id: `AUDIT-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            timestamp: new Date().toISOString(),
            action: action,
            entityType: 'JOURNAL_ENTRY',
            entityId: this.id,
            entryNumber: this.entryNumber,
            userId: this.createdBy,
            details: {
                description: this.description,
                reference: this.reference,
                totalAmount: this.totalDebits,
                entriesCount: this.entries.length,
                source: this.source
            },
            changes: action === 'MODIFIED' ? this.getChanges() : null
        };

        auditTrail.push(auditEntry);
    }

    getChanges() {
        // This would track what changed - simplified for now
        return {
            modifiedAt: this.modifiedAt,
            totalDebits: this.totalDebits,
            totalCredits: this.totalCredits,
            entriesCount: this.entries.length
        };
    }

    saveToStorage() {
        try {
            localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
            localStorage.setItem('auditTrail', JSON.stringify(auditTrail));
            localStorage.setItem('journalEntrySequence', journalEntrySequence.toString());
        } catch (error) {
            console.error('Error saving journal entries to storage:', error);
        }
    }

    // Get summary for display
    getSummary() {
        return {
            id: this.id,
            entryNumber: this.entryNumber,
            date: this.date,
            description: this.description,
            reference: this.reference,
            totalAmount: this.totalDebits,
            entriesCount: this.entries.length,
            balanced: this.balanced,
            posted: this.posted,
            reversed: this.reversed,
            source: this.source,
            createdAt: this.createdAt,
            postedAt: this.postedAt
        };
    }

    // Export to different formats
    toJSON() {
        return {
            id: this.id,
            entryNumber: this.entryNumber,
            date: this.date,
            description: this.description,
            reference: this.reference,
            source: this.source,
            entries: this.entries,
            totalDebits: this.totalDebits,
            totalCredits: this.totalCredits,
            balanced: this.balanced,
            posted: this.posted,
            reversed: this.reversed,
            reversalId: this.reversalId,
            createdBy: this.createdBy,
            createdAt: this.createdAt,
            modifiedAt: this.modifiedAt,
            postedAt: this.postedAt,
            tags: this.tags,
            attachments: this.attachments
        };
    }
}

// ==================== JOURNAL ENTRY MANAGEMENT FUNCTIONS ====================

// Create a new journal entry
function createJournalEntry(date, description, reference = null, source = 'manual') {
    return new JournalEntry(date, description, reference, source);
}

// Get journal entry by ID
function getJournalEntry(entryId) {
    return journalEntries.find(je => je.id === entryId);
}

// Get journal entries by date range
function getJournalEntriesByDateRange(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    return journalEntries.filter(je => {
        const entryDate = new Date(je.date);
        return entryDate >= start && entryDate <= end;
    });
}

// Get journal entries by account
function getJournalEntriesByAccount(accountCode) {
    return journalEntries.filter(je => 
        je.entries.some(entry => entry.accountCode === accountCode)
    );
}

// Get unposted journal entries
function getUnpostedJournalEntries() {
    return journalEntries.filter(je => !je.posted);
}

// Get posted journal entries
function getPostedJournalEntries() {
    return journalEntries.filter(je => je.posted && !je.reversed);
}

// Batch post multiple journal entries
function batchPostJournalEntries(entryIds) {
    const results = {
        successful: [],
        failed: []
    };

    entryIds.forEach(entryId => {
        try {
            const entry = getJournalEntry(entryId);
            if (entry && !entry.posted) {
                entry.post();
                results.successful.push(entryId);
            }
        } catch (error) {
            results.failed.push({
                entryId: entryId,
                error: error.message
            });
        }
    });

    return results;
}

// Load journal entries from storage
function loadJournalEntriesFromStorage() {
    try {
        const savedEntries = localStorage.getItem('journalEntries');
        const savedAuditTrail = localStorage.getItem('auditTrail');
        const savedSequence = localStorage.getItem('journalEntrySequence');
        
        if (savedEntries) {
            const entriesData = JSON.parse(savedEntries);
            journalEntries = entriesData.map(data => {
                const je = Object.assign(new JournalEntry(data.date, data.description), data);
                return je;
            });
        }
        
        if (savedAuditTrail) {
            auditTrail = JSON.parse(savedAuditTrail);
        }
        
        if (savedSequence) {
            journalEntrySequence = parseInt(savedSequence);
        }
        
        console.log(`📋 Loaded ${journalEntries.length} journal entries from storage`);
        
    } catch (error) {
        console.error('Error loading journal entries from storage:', error);
    }
}

// Initialize journal entry system
function initializeJournalEntrySystem() {
    console.log('📝 Initializing Journal Entry System...');
    
    // Load existing data
    loadJournalEntriesFromStorage();
    
    const totalEntries = journalEntries.length;
    const postedEntries = getPostedJournalEntries().length;
    const unpostedEntries = getUnpostedJournalEntries().length;
    
    console.log('✅ Journal Entry System initialized successfully!');
    console.log(`📋 Total Entries: ${totalEntries}`);
    console.log(`✅ Posted Entries: ${postedEntries}`);
    console.log(`⏳ Unposted Entries: ${unpostedEntries}`);
    console.log(`🔍 Audit Trail Records: ${auditTrail.length}`);
    
    return {
        totalEntries,
        postedEntries,
        unpostedEntries,
        auditRecords: auditTrail.length
    };
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        JournalEntry,
        createJournalEntry,
        getJournalEntry,
        getJournalEntriesByDateRange,
        getJournalEntriesByAccount,
        getUnpostedJournalEntries,
        getPostedJournalEntries,
        batchPostJournalEntries,
        initializeJournalEntrySystem
    };
}

// Auto-initialize when loaded in browser
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        initializeJournalEntrySystem();
    });
}
