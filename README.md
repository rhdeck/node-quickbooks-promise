# node-quickbooks-promise
<a name="QuickBooks"></a>

## QuickBooks
**Kind**: global class  

* [QuickBooks](#QuickBooks)
    * [new QuickBooks()](#new_QuickBooks_new)
    * [.revokeAccess](#QuickBooks+revokeAccess)
    * [.getUserInfo](#QuickBooks+getUserInfo)
    * [.batch](#QuickBooks+batch)
    * [.changeDataCapture](#QuickBooks+changeDataCapture)
    * [.upload](#QuickBooks+upload)
    * [.createAccount](#QuickBooks+createAccount)
    * [.createAttachable](#QuickBooks+createAttachable)
    * [.createBill](#QuickBooks+createBill)
    * [.createBillPayment](#QuickBooks+createBillPayment)
    * [.createClass](#QuickBooks+createClass)
    * [.createCreditMemo](#QuickBooks+createCreditMemo)
    * [.createCustomer](#QuickBooks+createCustomer)
    * [.createDepartment](#QuickBooks+createDepartment)
    * [.createDeposit](#QuickBooks+createDeposit)
    * [.createEmployee](#QuickBooks+createEmployee)
    * [.createEstimate](#QuickBooks+createEstimate)
    * [.createInvoice](#QuickBooks+createInvoice)
    * [.createItem](#QuickBooks+createItem)
    * [.createJournalCode](#QuickBooks+createJournalCode)
    * [.createJournalEntry](#QuickBooks+createJournalEntry)
    * [.createPayment](#QuickBooks+createPayment)
    * [.createPaymentMethod](#QuickBooks+createPaymentMethod)
    * [.createPurchase](#QuickBooks+createPurchase)
    * [.createPurchaseOrder](#QuickBooks+createPurchaseOrder)
    * [.createRefundReceipt](#QuickBooks+createRefundReceipt)
    * [.createSalesReceipt](#QuickBooks+createSalesReceipt)
    * [.createTaxAgency](#QuickBooks+createTaxAgency)
    * [.createTaxService](#QuickBooks+createTaxService)
    * [.createTerm](#QuickBooks+createTerm)
    * [.createTimeActivity](#QuickBooks+createTimeActivity)
    * [.createTransfer](#QuickBooks+createTransfer)
    * [.createVendor](#QuickBooks+createVendor)
    * [.createVendorCredit](#QuickBooks+createVendorCredit)
    * [.getAccount](#QuickBooks+getAccount)
    * [.getAttachable](#QuickBooks+getAttachable)
    * [.getBill](#QuickBooks+getBill)
    * [.getBillPayment](#QuickBooks+getBillPayment)
    * [.getClass](#QuickBooks+getClass)
    * [.getCompanyInfo](#QuickBooks+getCompanyInfo)
    * [.getCreditMemo](#QuickBooks+getCreditMemo)
    * [.getCustomer](#QuickBooks+getCustomer)
    * [.getDepartment](#QuickBooks+getDepartment)
    * [.getDeposit](#QuickBooks+getDeposit)
    * [.getEmployee](#QuickBooks+getEmployee)
    * [.getEstimate](#QuickBooks+getEstimate)
    * [.getExchangeRate](#QuickBooks+getExchangeRate)
    * [.getEstimatePdf](#QuickBooks+getEstimatePdf)
    * [.sendEstimatePdf](#QuickBooks+sendEstimatePdf)
    * [.getInvoice](#QuickBooks+getInvoice)
    * [.getInvoicePdf](#QuickBooks+getInvoicePdf)
    * [.sendInvoicePdf](#QuickBooks+sendInvoicePdf)
    * [.getItem](#QuickBooks+getItem)
    * [.getJournalCode](#QuickBooks+getJournalCode)
    * [.getJournalEntry](#QuickBooks+getJournalEntry)
    * [.getPayment](#QuickBooks+getPayment)
    * [.getPaymentMethod](#QuickBooks+getPaymentMethod)
    * [.getPreferences](#QuickBooks+getPreferences)
    * [.getPurchase](#QuickBooks+getPurchase)
    * [.getPurchaseOrder](#QuickBooks+getPurchaseOrder)
    * [.getRefundReceipt](#QuickBooks+getRefundReceipt)
    * [.getReports](#QuickBooks+getReports)
    * [.getSalesReceipt](#QuickBooks+getSalesReceipt)
    * [.getSalesReceiptPdf](#QuickBooks+getSalesReceiptPdf)
    * [.sendSalesReceiptPdf](#QuickBooks+sendSalesReceiptPdf)
    * [.getTaxAgency](#QuickBooks+getTaxAgency)
    * [.getTaxCode](#QuickBooks+getTaxCode)
    * [.getTaxRate](#QuickBooks+getTaxRate)
    * [.getTerm](#QuickBooks+getTerm)
    * [.getTimeActivity](#QuickBooks+getTimeActivity)
    * [.getTransfer](#QuickBooks+getTransfer)
    * [.getVendor](#QuickBooks+getVendor)
    * [.getVendorCredit](#QuickBooks+getVendorCredit)
    * [.updateAccount](#QuickBooks+updateAccount)
    * [.updateAttachable](#QuickBooks+updateAttachable)
    * [.updateBill](#QuickBooks+updateBill)
    * [.updateBillPayment](#QuickBooks+updateBillPayment)
    * [.updateClass](#QuickBooks+updateClass)
    * [.updateCompanyInfo](#QuickBooks+updateCompanyInfo)
    * [.updateCreditMemo](#QuickBooks+updateCreditMemo)
    * [.updateCustomer](#QuickBooks+updateCustomer)
    * [.updateDepartment](#QuickBooks+updateDepartment)
    * [.updateDeposit](#QuickBooks+updateDeposit)
    * [.updateEmployee](#QuickBooks+updateEmployee)
    * [.updateEstimate](#QuickBooks+updateEstimate)
    * [.updateInvoice](#QuickBooks+updateInvoice)
    * [.updateItem](#QuickBooks+updateItem)
    * [.updateJournalCode](#QuickBooks+updateJournalCode)
    * [.updateJournalEntry](#QuickBooks+updateJournalEntry)
    * [.updatePayment](#QuickBooks+updatePayment)
    * [.updatePaymentMethod](#QuickBooks+updatePaymentMethod)
    * [.updatePreferences](#QuickBooks+updatePreferences)
    * [.updatePurchase](#QuickBooks+updatePurchase)
    * [.updatePurchaseOrder](#QuickBooks+updatePurchaseOrder)
    * [.updateRefundReceipt](#QuickBooks+updateRefundReceipt)
    * [.updateSalesReceipt](#QuickBooks+updateSalesReceipt)
    * [.updateTaxAgency](#QuickBooks+updateTaxAgency)
    * [.updateTaxCode](#QuickBooks+updateTaxCode)
    * [.updateTaxRate](#QuickBooks+updateTaxRate)
    * [.updateTerm](#QuickBooks+updateTerm)
    * [.updateTimeActivity](#QuickBooks+updateTimeActivity)
    * [.updateTransfer](#QuickBooks+updateTransfer)
    * [.updateVendor](#QuickBooks+updateVendor)
    * [.updateVendorCredit](#QuickBooks+updateVendorCredit)
    * [.updateExchangeRate](#QuickBooks+updateExchangeRate)
    * [.deleteAttachable](#QuickBooks+deleteAttachable)
    * [.deleteBill](#QuickBooks+deleteBill)
    * [.deleteBillPayment](#QuickBooks+deleteBillPayment)
    * [.deleteCreditMemo](#QuickBooks+deleteCreditMemo)
    * [.deleteDeposit](#QuickBooks+deleteDeposit)
    * [.deleteEstimate](#QuickBooks+deleteEstimate)
    * [.deleteInvoice](#QuickBooks+deleteInvoice)
    * [.deleteJournalCode](#QuickBooks+deleteJournalCode)
    * [.deleteJournalEntry](#QuickBooks+deleteJournalEntry)
    * [.deletePayment](#QuickBooks+deletePayment)
    * [.deletePurchase](#QuickBooks+deletePurchase)
    * [.deletePurchaseOrder](#QuickBooks+deletePurchaseOrder)
    * [.deleteRefundReceipt](#QuickBooks+deleteRefundReceipt)
    * [.deleteSalesReceipt](#QuickBooks+deleteSalesReceipt)
    * [.deleteTimeActivity](#QuickBooks+deleteTimeActivity)
    * [.deleteTransfer](#QuickBooks+deleteTransfer)
    * [.deleteVendorCredit](#QuickBooks+deleteVendorCredit)
    * [.voidInvoice](#QuickBooks+voidInvoice)
    * [.voidPayment](#QuickBooks+voidPayment)
    * [.findAccounts](#QuickBooks+findAccounts)
    * [.findAttachables](#QuickBooks+findAttachables)
    * [.findBills](#QuickBooks+findBills)
    * [.findBillPayments](#QuickBooks+findBillPayments)
    * [.findBudgets](#QuickBooks+findBudgets)
    * [.findClasses](#QuickBooks+findClasses)
    * [.findCompanyInfos](#QuickBooks+findCompanyInfos)
    * [.findCreditMemos](#QuickBooks+findCreditMemos)
    * [.findCustomers](#QuickBooks+findCustomers)
    * [.findDepartments](#QuickBooks+findDepartments)
    * [.findDeposits](#QuickBooks+findDeposits)
    * [.findEmployees](#QuickBooks+findEmployees)
    * [.findEstimates](#QuickBooks+findEstimates)
    * [.findInvoices](#QuickBooks+findInvoices)
    * [.findItems](#QuickBooks+findItems)
    * [.findJournalCodes](#QuickBooks+findJournalCodes)
    * [.findJournalEntries](#QuickBooks+findJournalEntries)
    * [.findPayments](#QuickBooks+findPayments)
    * [.findPaymentMethods](#QuickBooks+findPaymentMethods)
    * [.findPreferenceses](#QuickBooks+findPreferenceses)
    * [.findPurchases](#QuickBooks+findPurchases)
    * [.findPurchaseOrders](#QuickBooks+findPurchaseOrders)
    * [.findRefundReceipts](#QuickBooks+findRefundReceipts)
    * [.findSalesReceipts](#QuickBooks+findSalesReceipts)
    * [.findTaxAgencies](#QuickBooks+findTaxAgencies)
    * [.findTaxCodes](#QuickBooks+findTaxCodes)
    * [.findTaxRates](#QuickBooks+findTaxRates)
    * [.findTerms](#QuickBooks+findTerms)
    * [.findTimeActivities](#QuickBooks+findTimeActivities)
    * [.findTransfers](#QuickBooks+findTransfers)
    * [.findVendors](#QuickBooks+findVendors)
    * [.findVendorCredits](#QuickBooks+findVendorCredits)
    * [.findExchangeRates](#QuickBooks+findExchangeRates)
    * [.reportBalanceSheet](#QuickBooks+reportBalanceSheet)
    * [.reportProfitAndLoss](#QuickBooks+reportProfitAndLoss)
    * [.reportProfitAndLossDetail](#QuickBooks+reportProfitAndLossDetail)
    * [.reportTrialBalance](#QuickBooks+reportTrialBalance)
    * [.reportCashFlow](#QuickBooks+reportCashFlow)
    * [.reportInventoryValuationSummary](#QuickBooks+reportInventoryValuationSummary)
    * [.reportCustomerSales](#QuickBooks+reportCustomerSales)
    * [.reportItemSales](#QuickBooks+reportItemSales)
    * [.reportCustomerIncome](#QuickBooks+reportCustomerIncome)
    * [.reportCustomerBalance](#QuickBooks+reportCustomerBalance)
    * [.reportCustomerBalanceDetail](#QuickBooks+reportCustomerBalanceDetail)
    * [.reportAgedReceivables](#QuickBooks+reportAgedReceivables)
    * [.reportAgedReceivableDetail](#QuickBooks+reportAgedReceivableDetail)
    * [.reportVendorBalance](#QuickBooks+reportVendorBalance)
    * [.reportVendorBalanceDetail](#QuickBooks+reportVendorBalanceDetail)
    * [.reportAgedPayables](#QuickBooks+reportAgedPayables)
    * [.reportAgedPayableDetail](#QuickBooks+reportAgedPayableDetail)
    * [.reportVendorExpenses](#QuickBooks+reportVendorExpenses)
    * [.reportTransactionList](#QuickBooks+reportTransactionList)
    * [.reportGeneralLedgerDetail](#QuickBooks+reportGeneralLedgerDetail)
    * [.reportTaxSummary](#QuickBooks+reportTaxSummary)
    * [.reportDepartmentSales](#QuickBooks+reportDepartmentSales)
    * [.reportClassSales](#QuickBooks+reportClassSales)
    * [.reportAccountListDetail](#QuickBooks+reportAccountListDetail)

<a name="new_QuickBooks_new"></a>

### new QuickBooks()
Quickbooks integration class from node-quickbooks

<a name="QuickBooks+revokeAccess"></a>

### quickBooks.revokeAccess
Use either refresh token or access token to revoke access (OAuth2).

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Description |
| --- | --- |
| useRefresh | boolean - Indicates which token to use: true to use the refresh token, false to use the access token. |

<a name="QuickBooks+getUserInfo"></a>

### quickBooks.getUserInfo
Get user info (OAuth2).

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  
<a name="QuickBooks+batch"></a>

### quickBooks.batch
Batch operation to enable an application to perform multiple operations in a single request.
The following batch items are supported:
     create
     update
     delete
     query
The maximum number of batch items in a single request is 25.

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>object</code> | JavaScript array of batch items |

<a name="QuickBooks+changeDataCapture"></a>

### quickBooks.changeDataCapture
The change data capture (CDC) operation returns a list of entities that have changed since a specified time.

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| entities | <code>object</code> | Comma separated list or JavaScript array of entities to search for changes |
| since | <code>object</code> | JavaScript Date or string representation of the form '2012-07-20T22:25:51-07:00' to look back for changes until |

<a name="QuickBooks+upload"></a>

### quickBooks.upload
Uploads a file as an Attachable in QBO, optionally linking it to the specified
QBO Entity.

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| filename | <code>string</code> | the name of the file |
| contentType | <code>string</code> | the mime type of the file |
| stream | <code>object</code> | ReadableStream of file contents |
| entityType | <code>object</code> | optional string name of the QBO entity the Attachable will be linked to (e.g. Invoice) |
| entityId | <code>object</code> | optional Id of the QBO entity the Attachable will be linked to |

<a name="QuickBooks+createAccount"></a>

### quickBooks.createAccount
Creates the Account in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| account | <code>object</code> | The unsaved account, to be persisted in QuickBooks |

<a name="QuickBooks+createAttachable"></a>

### quickBooks.createAttachable
Creates the Attachable in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| attachable | <code>object</code> | The unsaved attachable, to be persisted in QuickBooks |

<a name="QuickBooks+createBill"></a>

### quickBooks.createBill
Creates the Bill in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| bill | <code>object</code> | The unsaved bill, to be persisted in QuickBooks |

<a name="QuickBooks+createBillPayment"></a>

### quickBooks.createBillPayment
Creates the BillPayment in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| billPayment | <code>object</code> | The unsaved billPayment, to be persisted in QuickBooks |

<a name="QuickBooks+createClass"></a>

### quickBooks.createClass
Creates the Class in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| class | <code>object</code> | The unsaved class, to be persisted in QuickBooks |

<a name="QuickBooks+createCreditMemo"></a>

### quickBooks.createCreditMemo
Creates the CreditMemo in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| creditMemo | <code>object</code> | The unsaved creditMemo, to be persisted in QuickBooks |

<a name="QuickBooks+createCustomer"></a>

### quickBooks.createCustomer
Creates the Customer in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| customer | <code>object</code> | The unsaved customer, to be persisted in QuickBooks |

<a name="QuickBooks+createDepartment"></a>

### quickBooks.createDepartment
Creates the Department in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| department | <code>object</code> | The unsaved department, to be persisted in QuickBooks |

<a name="QuickBooks+createDeposit"></a>

### quickBooks.createDeposit
Creates the Deposit in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| deposit | <code>object</code> | The unsaved Deposit, to be persisted in QuickBooks |

<a name="QuickBooks+createEmployee"></a>

### quickBooks.createEmployee
Creates the Employee in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| employee | <code>object</code> | The unsaved employee, to be persisted in QuickBooks |

<a name="QuickBooks+createEstimate"></a>

### quickBooks.createEstimate
Creates the Estimate in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| estimate | <code>object</code> | The unsaved estimate, to be persisted in QuickBooks |

<a name="QuickBooks+createInvoice"></a>

### quickBooks.createInvoice
Creates the Invoice in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| invoice | <code>object</code> | The unsaved invoice, to be persisted in QuickBooks |

<a name="QuickBooks+createItem"></a>

### quickBooks.createItem
Creates the Item in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>object</code> | The unsaved item, to be persisted in QuickBooks |

<a name="QuickBooks+createJournalCode"></a>

### quickBooks.createJournalCode
Creates the JournalCode in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| journalCode | <code>object</code> | The unsaved journalCode, to be persisted in QuickBooks |

<a name="QuickBooks+createJournalEntry"></a>

### quickBooks.createJournalEntry
Creates the JournalEntry in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| journalEntry | <code>object</code> | The unsaved journalEntry, to be persisted in QuickBooks |

<a name="QuickBooks+createPayment"></a>

### quickBooks.createPayment
Creates the Payment in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| payment | <code>object</code> | The unsaved payment, to be persisted in QuickBooks |

<a name="QuickBooks+createPaymentMethod"></a>

### quickBooks.createPaymentMethod
Creates the PaymentMethod in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| paymentMethod | <code>object</code> | The unsaved paymentMethod, to be persisted in QuickBooks |

<a name="QuickBooks+createPurchase"></a>

### quickBooks.createPurchase
Creates the Purchase in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| purchase | <code>object</code> | The unsaved purchase, to be persisted in QuickBooks |

<a name="QuickBooks+createPurchaseOrder"></a>

### quickBooks.createPurchaseOrder
Creates the PurchaseOrder in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| purchaseOrder | <code>object</code> | The unsaved purchaseOrder, to be persisted in QuickBooks |

<a name="QuickBooks+createRefundReceipt"></a>

### quickBooks.createRefundReceipt
Creates the RefundReceipt in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| refundReceipt | <code>object</code> | The unsaved refundReceipt, to be persisted in QuickBooks |

<a name="QuickBooks+createSalesReceipt"></a>

### quickBooks.createSalesReceipt
Creates the SalesReceipt in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| salesReceipt | <code>object</code> | The unsaved salesReceipt, to be persisted in QuickBooks |

<a name="QuickBooks+createTaxAgency"></a>

### quickBooks.createTaxAgency
Creates the TaxAgency in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| taxAgency | <code>object</code> | The unsaved taxAgency, to be persisted in QuickBooks |

<a name="QuickBooks+createTaxService"></a>

### quickBooks.createTaxService
Creates the TaxService in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| taxService | <code>object</code> | The unsaved taxService, to be persisted in QuickBooks |

<a name="QuickBooks+createTerm"></a>

### quickBooks.createTerm
Creates the Term in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| term | <code>object</code> | The unsaved term, to be persisted in QuickBooks |

<a name="QuickBooks+createTimeActivity"></a>

### quickBooks.createTimeActivity
Creates the TimeActivity in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| timeActivity | <code>object</code> | The unsaved timeActivity, to be persisted in QuickBooks |

<a name="QuickBooks+createTransfer"></a>

### quickBooks.createTransfer
Creates the Transfer in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| transfer | <code>object</code> | The unsaved Transfer, to be persisted in QuickBooks |

<a name="QuickBooks+createVendor"></a>

### quickBooks.createVendor
Creates the Vendor in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| vendor | <code>object</code> | The unsaved vendor, to be persisted in QuickBooks |

<a name="QuickBooks+createVendorCredit"></a>

### quickBooks.createVendorCredit
Creates the VendorCredit in QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| vendorCredit | <code>object</code> | The unsaved vendorCredit, to be persisted in QuickBooks |

<a name="QuickBooks+getAccount"></a>

### quickBooks.getAccount
Retrieves the Account from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Account |

<a name="QuickBooks+getAttachable"></a>

### quickBooks.getAttachable
Retrieves the Attachable from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Attachable |

<a name="QuickBooks+getBill"></a>

### quickBooks.getBill
Retrieves the Bill from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Bill |

<a name="QuickBooks+getBillPayment"></a>

### quickBooks.getBillPayment
Retrieves the BillPayment from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent BillPayment |

<a name="QuickBooks+getClass"></a>

### quickBooks.getClass
Retrieves the Class from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Class |

<a name="QuickBooks+getCompanyInfo"></a>

### quickBooks.getCompanyInfo
Retrieves the CompanyInfo from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent CompanyInfo |

<a name="QuickBooks+getCreditMemo"></a>

### quickBooks.getCreditMemo
Retrieves the CreditMemo from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent CreditMemo |

<a name="QuickBooks+getCustomer"></a>

### quickBooks.getCustomer
Retrieves the Customer from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Customer |

<a name="QuickBooks+getDepartment"></a>

### quickBooks.getDepartment
Retrieves the Department from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Department |

<a name="QuickBooks+getDeposit"></a>

### quickBooks.getDeposit
Retrieves the Deposit from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Deposit |

<a name="QuickBooks+getEmployee"></a>

### quickBooks.getEmployee
Retrieves the Employee from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Employee |

<a name="QuickBooks+getEstimate"></a>

### quickBooks.getEstimate
Retrieves the Estimate from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Estimate |

<a name="QuickBooks+getExchangeRate"></a>

### quickBooks.getExchangeRate
Retrieves an ExchangeRate from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | An object with options including the required `sourcecurrencycode` parameter and optional `asofdate` parameter. |

<a name="QuickBooks+getEstimatePdf"></a>

### quickBooks.getEstimatePdf
Retrieves the Estimate PDF from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Estimate |

<a name="QuickBooks+sendEstimatePdf"></a>

### quickBooks.sendEstimatePdf
Emails the Estimate PDF from QuickBooks to the address supplied in Estimate.BillEmail.EmailAddress
or the specified 'sendTo' address

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Estimate |
| sendTo | <code>string</code> | optional email address to send the PDF to. If not provided, address supplied in Estimate.BillEmail.EmailAddress will be used |

<a name="QuickBooks+getInvoice"></a>

### quickBooks.getInvoice
Retrieves the Invoice from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Invoice |

<a name="QuickBooks+getInvoicePdf"></a>

### quickBooks.getInvoicePdf
Retrieves the Invoice PDF from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Invoice |

<a name="QuickBooks+sendInvoicePdf"></a>

### quickBooks.sendInvoicePdf
Emails the Invoice PDF from QuickBooks to the address supplied in Invoice.BillEmail.EmailAddress
or the specified 'sendTo' address

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Invoice |
| sendTo | <code>string</code> | optional email address to send the PDF to. If not provided, address supplied in Invoice.BillEmail.EmailAddress will be used |

<a name="QuickBooks+getItem"></a>

### quickBooks.getItem
Retrieves the Item from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Item |

<a name="QuickBooks+getJournalCode"></a>

### quickBooks.getJournalCode
Retrieves the JournalCode from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent JournalCode |

<a name="QuickBooks+getJournalEntry"></a>

### quickBooks.getJournalEntry
Retrieves the JournalEntry from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent JournalEntry |

<a name="QuickBooks+getPayment"></a>

### quickBooks.getPayment
Retrieves the Payment from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Payment |

<a name="QuickBooks+getPaymentMethod"></a>

### quickBooks.getPaymentMethod
Retrieves the PaymentMethod from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent PaymentMethod |

<a name="QuickBooks+getPreferences"></a>

### quickBooks.getPreferences
Retrieves the Preferences from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  
<a name="QuickBooks+getPurchase"></a>

### quickBooks.getPurchase
Retrieves the Purchase from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Purchase |

<a name="QuickBooks+getPurchaseOrder"></a>

### quickBooks.getPurchaseOrder
Retrieves the PurchaseOrder from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent PurchaseOrder |

<a name="QuickBooks+getRefundReceipt"></a>

### quickBooks.getRefundReceipt
Retrieves the RefundReceipt from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent RefundReceipt |

<a name="QuickBooks+getReports"></a>

### quickBooks.getReports
Retrieves the Reports from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Reports |

<a name="QuickBooks+getSalesReceipt"></a>

### quickBooks.getSalesReceipt
Retrieves the SalesReceipt from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent SalesReceipt |

<a name="QuickBooks+getSalesReceiptPdf"></a>

### quickBooks.getSalesReceiptPdf
Retrieves the SalesReceipt PDF from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent SalesReceipt |

<a name="QuickBooks+sendSalesReceiptPdf"></a>

### quickBooks.sendSalesReceiptPdf
Emails the SalesReceipt PDF from QuickBooks to the address supplied in SalesReceipt.BillEmail.EmailAddress
or the specified 'sendTo' address

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent SalesReceipt |
| sendTo | <code>string</code> | optional email address to send the PDF to. If not provided, address supplied in SalesReceipt.BillEmail.EmailAddress will be used |

<a name="QuickBooks+getTaxAgency"></a>

### quickBooks.getTaxAgency
Retrieves the TaxAgency from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent TaxAgency |

<a name="QuickBooks+getTaxCode"></a>

### quickBooks.getTaxCode
Retrieves the TaxCode from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent TaxCode |

<a name="QuickBooks+getTaxRate"></a>

### quickBooks.getTaxRate
Retrieves the TaxRate from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent TaxRate |

<a name="QuickBooks+getTerm"></a>

### quickBooks.getTerm
Retrieves the Term from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Term |

<a name="QuickBooks+getTimeActivity"></a>

### quickBooks.getTimeActivity
Retrieves the TimeActivity from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent TimeActivity |

<a name="QuickBooks+getTransfer"></a>

### quickBooks.getTransfer
Retrieves the Transfer from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Term |

<a name="QuickBooks+getVendor"></a>

### quickBooks.getVendor
Retrieves the Vendor from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent Vendor |

<a name="QuickBooks+getVendorCredit"></a>

### quickBooks.getVendorCredit
Retrieves the VendorCredit from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | The Id of persistent VendorCredit |

<a name="QuickBooks+updateAccount"></a>

### quickBooks.updateAccount
Updates QuickBooks version of Account

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| account | <code>object</code> | The persistent Account, including Id and SyncToken fields |

<a name="QuickBooks+updateAttachable"></a>

### quickBooks.updateAttachable
Updates QuickBooks version of Attachable

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| attachable | <code>object</code> | The persistent Attachable, including Id and SyncToken fields |

<a name="QuickBooks+updateBill"></a>

### quickBooks.updateBill
Updates QuickBooks version of Bill

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| bill | <code>object</code> | The persistent Bill, including Id and SyncToken fields |

<a name="QuickBooks+updateBillPayment"></a>

### quickBooks.updateBillPayment
Updates QuickBooks version of BillPayment

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| billPayment | <code>object</code> | The persistent BillPayment, including Id and SyncToken fields |

<a name="QuickBooks+updateClass"></a>

### quickBooks.updateClass
Updates QuickBooks version of Class

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| class | <code>object</code> | The persistent Class, including Id and SyncToken fields |

<a name="QuickBooks+updateCompanyInfo"></a>

### quickBooks.updateCompanyInfo
Updates QuickBooks version of CompanyInfo

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| companyInfo | <code>object</code> | The persistent CompanyInfo, including Id and SyncToken fields |

<a name="QuickBooks+updateCreditMemo"></a>

### quickBooks.updateCreditMemo
Updates QuickBooks version of CreditMemo

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| creditMemo | <code>object</code> | The persistent CreditMemo, including Id and SyncToken fields |

<a name="QuickBooks+updateCustomer"></a>

### quickBooks.updateCustomer
Updates QuickBooks version of Customer

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| customer | <code>object</code> | The persistent Customer, including Id and SyncToken fields |

<a name="QuickBooks+updateDepartment"></a>

### quickBooks.updateDepartment
Updates QuickBooks version of Department

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| department | <code>object</code> | The persistent Department, including Id and SyncToken fields |

<a name="QuickBooks+updateDeposit"></a>

### quickBooks.updateDeposit
Updates QuickBooks version of Deposit

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| deposit | <code>object</code> | The persistent Deposit, including Id and SyncToken fields |

<a name="QuickBooks+updateEmployee"></a>

### quickBooks.updateEmployee
Updates QuickBooks version of Employee

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| employee | <code>object</code> | The persistent Employee, including Id and SyncToken fields |

<a name="QuickBooks+updateEstimate"></a>

### quickBooks.updateEstimate
Updates QuickBooks version of Estimate

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| estimate | <code>object</code> | The persistent Estimate, including Id and SyncToken fields |

<a name="QuickBooks+updateInvoice"></a>

### quickBooks.updateInvoice
Updates QuickBooks version of Invoice

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| invoice | <code>object</code> | The persistent Invoice, including Id and SyncToken fields |

<a name="QuickBooks+updateItem"></a>

### quickBooks.updateItem
Updates QuickBooks version of Item

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>object</code> | The persistent Item, including Id and SyncToken fields |

<a name="QuickBooks+updateJournalCode"></a>

### quickBooks.updateJournalCode
Updates QuickBooks version of JournalCode

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| journalCode | <code>object</code> | The persistent JournalCode, including Id and SyncToken fields |

<a name="QuickBooks+updateJournalEntry"></a>

### quickBooks.updateJournalEntry
Updates QuickBooks version of JournalEntry

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| journalEntry | <code>object</code> | The persistent JournalEntry, including Id and SyncToken fields |

<a name="QuickBooks+updatePayment"></a>

### quickBooks.updatePayment
Updates QuickBooks version of Payment

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| payment | <code>object</code> | The persistent Payment, including Id and SyncToken fields |

<a name="QuickBooks+updatePaymentMethod"></a>

### quickBooks.updatePaymentMethod
Updates QuickBooks version of PaymentMethod

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| paymentMethod | <code>object</code> | The persistent PaymentMethod, including Id and SyncToken fields |

<a name="QuickBooks+updatePreferences"></a>

### quickBooks.updatePreferences
Updates QuickBooks version of Preferences

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| preferences | <code>object</code> | The persistent Preferences, including Id and SyncToken fields |

<a name="QuickBooks+updatePurchase"></a>

### quickBooks.updatePurchase
Updates QuickBooks version of Purchase

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| purchase | <code>object</code> | The persistent Purchase, including Id and SyncToken fields |

<a name="QuickBooks+updatePurchaseOrder"></a>

### quickBooks.updatePurchaseOrder
Updates QuickBooks version of PurchaseOrder

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| purchaseOrder | <code>object</code> | The persistent PurchaseOrder, including Id and SyncToken fields |

<a name="QuickBooks+updateRefundReceipt"></a>

### quickBooks.updateRefundReceipt
Updates QuickBooks version of RefundReceipt

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| refundReceipt | <code>object</code> | The persistent RefundReceipt, including Id and SyncToken fields |

<a name="QuickBooks+updateSalesReceipt"></a>

### quickBooks.updateSalesReceipt
Updates QuickBooks version of SalesReceipt

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| salesReceipt | <code>object</code> | The persistent SalesReceipt, including Id and SyncToken fields |

<a name="QuickBooks+updateTaxAgency"></a>

### quickBooks.updateTaxAgency
Updates QuickBooks version of TaxAgency

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| taxAgency | <code>object</code> | The persistent TaxAgency, including Id and SyncToken fields |

<a name="QuickBooks+updateTaxCode"></a>

### quickBooks.updateTaxCode
Updates QuickBooks version of TaxCode

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| taxCode | <code>object</code> | The persistent TaxCode, including Id and SyncToken fields |

<a name="QuickBooks+updateTaxRate"></a>

### quickBooks.updateTaxRate
Updates QuickBooks version of TaxRate

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| taxRate | <code>object</code> | The persistent TaxRate, including Id and SyncToken fields |

<a name="QuickBooks+updateTerm"></a>

### quickBooks.updateTerm
Updates QuickBooks version of Term

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| term | <code>object</code> | The persistent Term, including Id and SyncToken fields |

<a name="QuickBooks+updateTimeActivity"></a>

### quickBooks.updateTimeActivity
Updates QuickBooks version of TimeActivity

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| timeActivity | <code>object</code> | The persistent TimeActivity, including Id and SyncToken fields |

<a name="QuickBooks+updateTransfer"></a>

### quickBooks.updateTransfer
Updates QuickBooks version of Transfer

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Transfer | <code>object</code> | The persistent Transfer, including Id and SyncToken fields |

<a name="QuickBooks+updateVendor"></a>

### quickBooks.updateVendor
Updates QuickBooks version of Vendor

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| vendor | <code>object</code> | The persistent Vendor, including Id and SyncToken fields |

<a name="QuickBooks+updateVendorCredit"></a>

### quickBooks.updateVendorCredit
Updates QuickBooks version of VendorCredit

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| vendorCredit | <code>object</code> | The persistent VendorCredit, including Id and SyncToken fields |

<a name="QuickBooks+updateExchangeRate"></a>

### quickBooks.updateExchangeRate
Updates QuickBooks version of ExchangeRate

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| exchangeRate | <code>object</code> | The persistent ExchangeRate, including Id and SyncToken fields |

<a name="QuickBooks+deleteAttachable"></a>

### quickBooks.deleteAttachable
Deletes the Attachable from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | <code>object</code> | The persistent Attachable to be deleted, or the Id of the Attachable, in which case an extra GET request will be issued to first retrieve the Attachable |

<a name="QuickBooks+deleteBill"></a>

### quickBooks.deleteBill
Deletes the Bill from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | <code>object</code> | The persistent Bill to be deleted, or the Id of the Bill, in which case an extra GET request will be issued to first retrieve the Bill |

<a name="QuickBooks+deleteBillPayment"></a>

### quickBooks.deleteBillPayment
Deletes the BillPayment from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | <code>object</code> | The persistent BillPayment to be deleted, or the Id of the BillPayment, in which case an extra GET request will be issued to first retrieve the BillPayment |

<a name="QuickBooks+deleteCreditMemo"></a>

### quickBooks.deleteCreditMemo
Deletes the CreditMemo from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | <code>object</code> | The persistent CreditMemo to be deleted, or the Id of the CreditMemo, in which case an extra GET request will be issued to first retrieve the CreditMemo |

<a name="QuickBooks+deleteDeposit"></a>

### quickBooks.deleteDeposit
Deletes the Deposit from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | <code>object</code> | The persistent Deposit to be deleted, or the Id of the Deposit, in which case an extra GET request will be issued to first retrieve the Deposit |

<a name="QuickBooks+deleteEstimate"></a>

### quickBooks.deleteEstimate
Deletes the Estimate from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | <code>object</code> | The persistent Estimate to be deleted, or the Id of the Estimate, in which case an extra GET request will be issued to first retrieve the Estimate |

<a name="QuickBooks+deleteInvoice"></a>

### quickBooks.deleteInvoice
Deletes the Invoice from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | <code>object</code> | The persistent Invoice to be deleted, or the Id of the Invoice, in which case an extra GET request will be issued to first retrieve the Invoice |

<a name="QuickBooks+deleteJournalCode"></a>

### quickBooks.deleteJournalCode
Deletes the JournalCode from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | <code>object</code> | The persistent JournalCode to be deleted, or the Id of the JournalCode, in which case an extra GET request will be issued to first retrieve the JournalCode |

<a name="QuickBooks+deleteJournalEntry"></a>

### quickBooks.deleteJournalEntry
Deletes the JournalEntry from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | <code>object</code> | The persistent JournalEntry to be deleted, or the Id of the JournalEntry, in which case an extra GET request will be issued to first retrieve the JournalEntry |

<a name="QuickBooks+deletePayment"></a>

### quickBooks.deletePayment
Deletes the Payment from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | <code>object</code> | The persistent Payment to be deleted, or the Id of the Payment, in which case an extra GET request will be issued to first retrieve the Payment |

<a name="QuickBooks+deletePurchase"></a>

### quickBooks.deletePurchase
Deletes the Purchase from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | <code>object</code> | The persistent Purchase to be deleted, or the Id of the Purchase, in which case an extra GET request will be issued to first retrieve the Purchase |

<a name="QuickBooks+deletePurchaseOrder"></a>

### quickBooks.deletePurchaseOrder
Deletes the PurchaseOrder from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | <code>object</code> | The persistent PurchaseOrder to be deleted, or the Id of the PurchaseOrder, in which case an extra GET request will be issued to first retrieve the PurchaseOrder |

<a name="QuickBooks+deleteRefundReceipt"></a>

### quickBooks.deleteRefundReceipt
Deletes the RefundReceipt from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | <code>object</code> | The persistent RefundReceipt to be deleted, or the Id of the RefundReceipt, in which case an extra GET request will be issued to first retrieve the RefundReceipt |

<a name="QuickBooks+deleteSalesReceipt"></a>

### quickBooks.deleteSalesReceipt
Deletes the SalesReceipt from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | <code>object</code> | The persistent SalesReceipt to be deleted, or the Id of the SalesReceipt, in which case an extra GET request will be issued to first retrieve the SalesReceipt |

<a name="QuickBooks+deleteTimeActivity"></a>

### quickBooks.deleteTimeActivity
Deletes the TimeActivity from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | <code>object</code> | The persistent TimeActivity to be deleted, or the Id of the TimeActivity, in which case an extra GET request will be issued to first retrieve the TimeActivity |

<a name="QuickBooks+deleteTransfer"></a>

### quickBooks.deleteTransfer
Deletes the Transfer from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | <code>object</code> | The persistent Transfer to be deleted, or the Id of the Transfer, in which case an extra GET request will be issued to first retrieve the Transfer |

<a name="QuickBooks+deleteVendorCredit"></a>

### quickBooks.deleteVendorCredit
Deletes the VendorCredit from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | <code>object</code> | The persistent VendorCredit to be deleted, or the Id of the VendorCredit, in which case an extra GET request will be issued to first retrieve the VendorCredit |

<a name="QuickBooks+voidInvoice"></a>

### quickBooks.voidInvoice
Voids the Invoice from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | <code>object</code> | The persistent Invoice to be voided, or the Id of the Invoice, in which case an extra GET request will be issued to first retrieve the Invoice |

<a name="QuickBooks+voidPayment"></a>

### quickBooks.voidPayment
Voids QuickBooks version of Payment

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| payment | <code>object</code> | The persistent Payment, including Id and SyncToken fields |

<a name="QuickBooks+findAccounts"></a>

### quickBooks.findAccounts
Finds all Accounts in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findAttachables"></a>

### quickBooks.findAttachables
Finds all Attachables in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findBills"></a>

### quickBooks.findBills
Finds all Bills in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findBillPayments"></a>

### quickBooks.findBillPayments
Finds all BillPayments in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findBudgets"></a>

### quickBooks.findBudgets
Finds all Budgets in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findClasses"></a>

### quickBooks.findClasses
Finds all Classs in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findCompanyInfos"></a>

### quickBooks.findCompanyInfos
Finds all CompanyInfos in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findCreditMemos"></a>

### quickBooks.findCreditMemos
Finds all CreditMemos in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findCustomers"></a>

### quickBooks.findCustomers
Finds all Customers in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findDepartments"></a>

### quickBooks.findDepartments
Finds all Departments in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findDeposits"></a>

### quickBooks.findDeposits
Finds all Deposits in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findEmployees"></a>

### quickBooks.findEmployees
Finds all Employees in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findEstimates"></a>

### quickBooks.findEstimates
Finds all Estimates in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findInvoices"></a>

### quickBooks.findInvoices
Finds all Invoices in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findItems"></a>

### quickBooks.findItems
Finds all Items in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findJournalCodes"></a>

### quickBooks.findJournalCodes
Finds all JournalCodes in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findJournalEntries"></a>

### quickBooks.findJournalEntries
Finds all JournalEntrys in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findPayments"></a>

### quickBooks.findPayments
Finds all Payments in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findPaymentMethods"></a>

### quickBooks.findPaymentMethods
Finds all PaymentMethods in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findPreferenceses"></a>

### quickBooks.findPreferenceses
Finds all Preferencess in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findPurchases"></a>

### quickBooks.findPurchases
Finds all Purchases in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findPurchaseOrders"></a>

### quickBooks.findPurchaseOrders
Finds all PurchaseOrders in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findRefundReceipts"></a>

### quickBooks.findRefundReceipts
Finds all RefundReceipts in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findSalesReceipts"></a>

### quickBooks.findSalesReceipts
Finds all SalesReceipts in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findTaxAgencies"></a>

### quickBooks.findTaxAgencies
Finds all TaxAgencys in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findTaxCodes"></a>

### quickBooks.findTaxCodes
Finds all TaxCodes in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findTaxRates"></a>

### quickBooks.findTaxRates
Finds all TaxRates in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findTerms"></a>

### quickBooks.findTerms
Finds all Terms in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findTimeActivities"></a>

### quickBooks.findTimeActivities
Finds all TimeActivitys in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findTransfers"></a>

### quickBooks.findTransfers
Finds all Transfers in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findVendors"></a>

### quickBooks.findVendors
Finds all Vendors in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findVendorCredits"></a>

### quickBooks.findVendorCredits
Finds all VendorCredits in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+findExchangeRates"></a>

### quickBooks.findExchangeRates
Finds all ExchangeRates in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'" |

<a name="QuickBooks+reportBalanceSheet"></a>

### quickBooks.reportBalanceSheet
Retrieves the BalanceSheet Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportProfitAndLoss"></a>

### quickBooks.reportProfitAndLoss
Retrieves the ProfitAndLoss Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportProfitAndLossDetail"></a>

### quickBooks.reportProfitAndLossDetail
Retrieves the ProfitAndLossDetail Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportTrialBalance"></a>

### quickBooks.reportTrialBalance
Retrieves the TrialBalance Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportCashFlow"></a>

### quickBooks.reportCashFlow
Retrieves the CashFlow Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportInventoryValuationSummary"></a>

### quickBooks.reportInventoryValuationSummary
Retrieves the InventoryValuationSummary Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportCustomerSales"></a>

### quickBooks.reportCustomerSales
Retrieves the CustomerSales Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportItemSales"></a>

### quickBooks.reportItemSales
Retrieves the ItemSales Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportCustomerIncome"></a>

### quickBooks.reportCustomerIncome
Retrieves the CustomerIncome Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportCustomerBalance"></a>

### quickBooks.reportCustomerBalance
Retrieves the CustomerBalance Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportCustomerBalanceDetail"></a>

### quickBooks.reportCustomerBalanceDetail
Retrieves the CustomerBalanceDetail Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportAgedReceivables"></a>

### quickBooks.reportAgedReceivables
Retrieves the AgedReceivables Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportAgedReceivableDetail"></a>

### quickBooks.reportAgedReceivableDetail
Retrieves the AgedReceivableDetail Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportVendorBalance"></a>

### quickBooks.reportVendorBalance
Retrieves the VendorBalance Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportVendorBalanceDetail"></a>

### quickBooks.reportVendorBalanceDetail
Retrieves the VendorBalanceDetail Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportAgedPayables"></a>

### quickBooks.reportAgedPayables
Retrieves the AgedPayables Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportAgedPayableDetail"></a>

### quickBooks.reportAgedPayableDetail
Retrieves the AgedPayableDetail Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportVendorExpenses"></a>

### quickBooks.reportVendorExpenses
Retrieves the VendorExpenses Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportTransactionList"></a>

### quickBooks.reportTransactionList
Retrieves the TransactionList Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportGeneralLedgerDetail"></a>

### quickBooks.reportGeneralLedgerDetail
Retrieves the GeneralLedgerDetail Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportTaxSummary"></a>

### quickBooks.reportTaxSummary
Retrieves the TaxSummary Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportDepartmentSales"></a>

### quickBooks.reportDepartmentSales
Retrieves the DepartmentSales Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportClassSales"></a>

### quickBooks.reportClassSales
Retrieves the ClassSales Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

<a name="QuickBooks+reportAccountListDetail"></a>

### quickBooks.reportAccountListDetail
Retrieves the AccountListDetail Report from QuickBooks

**Kind**: instance property of [<code>QuickBooks</code>](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | (Optional) Map of key-value pairs passed as options to the Report |

