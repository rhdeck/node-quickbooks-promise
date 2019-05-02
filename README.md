# node-quickbooks-promise
&lt;a name&#x3D;&quot;QuickBooks&quot;&gt;&lt;&#x2F;a&gt;

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

&lt;a name&#x3D;&quot;new_QuickBooks_new&quot;&gt;&lt;&#x2F;a&gt;

### new QuickBooks()
Quickbooks integration class from node-quickbooks

&lt;a name&#x3D;&quot;QuickBooks+revokeAccess&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.revokeAccess
Use either refresh token or access token to revoke access (OAuth2).

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Description |
| --- | --- |
| useRefresh | boolean - Indicates which token to use: true to use the refresh token, false to use the access token. |

&lt;a name&#x3D;&quot;QuickBooks+getUserInfo&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getUserInfo
Get user info (OAuth2).

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  
&lt;a name&#x3D;&quot;QuickBooks+batch&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.batch
Batch operation to enable an application to perform multiple operations in a single request.
The following batch items are supported:
     create
     update
     delete
     query
The maximum number of batch items in a single request is 25.

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| items | &lt;code&gt;object&lt;&#x2F;code&gt; | JavaScript array of batch items |

&lt;a name&#x3D;&quot;QuickBooks+changeDataCapture&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.changeDataCapture
The change data capture (CDC) operation returns a list of entities that have changed since a specified time.

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| entities | &lt;code&gt;object&lt;&#x2F;code&gt; | Comma separated list or JavaScript array of entities to search for changes |
| since | &lt;code&gt;object&lt;&#x2F;code&gt; | JavaScript Date or string representation of the form &#39;2012-07-20T22:25:51-07:00&#39; to look back for changes until |

&lt;a name&#x3D;&quot;QuickBooks+upload&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.upload
Uploads a file as an Attachable in QBO, optionally linking it to the specified
QBO Entity.

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| filename | &lt;code&gt;string&lt;&#x2F;code&gt; | the name of the file |
| contentType | &lt;code&gt;string&lt;&#x2F;code&gt; | the mime type of the file |
| stream | &lt;code&gt;object&lt;&#x2F;code&gt; | ReadableStream of file contents |
| entityType | &lt;code&gt;object&lt;&#x2F;code&gt; | optional string name of the QBO entity the Attachable will be linked to (e.g. Invoice) |
| entityId | &lt;code&gt;object&lt;&#x2F;code&gt; | optional Id of the QBO entity the Attachable will be linked to |

&lt;a name&#x3D;&quot;QuickBooks+createAccount&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createAccount
Creates the Account in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| account | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved account, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createAttachable&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createAttachable
Creates the Attachable in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| attachable | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved attachable, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createBill&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createBill
Creates the Bill in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| bill | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved bill, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createBillPayment&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createBillPayment
Creates the BillPayment in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| billPayment | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved billPayment, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createClass&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createClass
Creates the Class in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| class | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved class, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createCreditMemo&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createCreditMemo
Creates the CreditMemo in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| creditMemo | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved creditMemo, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createCustomer&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createCustomer
Creates the Customer in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| customer | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved customer, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createDepartment&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createDepartment
Creates the Department in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| department | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved department, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createDeposit&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createDeposit
Creates the Deposit in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| deposit | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved Deposit, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createEmployee&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createEmployee
Creates the Employee in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| employee | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved employee, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createEstimate&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createEstimate
Creates the Estimate in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| estimate | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved estimate, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createInvoice&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createInvoice
Creates the Invoice in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| invoice | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved invoice, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createItem&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createItem
Creates the Item in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| item | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved item, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createJournalCode&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createJournalCode
Creates the JournalCode in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| journalCode | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved journalCode, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createJournalEntry&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createJournalEntry
Creates the JournalEntry in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| journalEntry | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved journalEntry, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createPayment&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createPayment
Creates the Payment in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| payment | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved payment, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createPaymentMethod&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createPaymentMethod
Creates the PaymentMethod in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| paymentMethod | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved paymentMethod, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createPurchase&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createPurchase
Creates the Purchase in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| purchase | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved purchase, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createPurchaseOrder&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createPurchaseOrder
Creates the PurchaseOrder in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| purchaseOrder | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved purchaseOrder, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createRefundReceipt&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createRefundReceipt
Creates the RefundReceipt in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| refundReceipt | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved refundReceipt, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createSalesReceipt&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createSalesReceipt
Creates the SalesReceipt in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| salesReceipt | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved salesReceipt, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createTaxAgency&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createTaxAgency
Creates the TaxAgency in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| taxAgency | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved taxAgency, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createTaxService&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createTaxService
Creates the TaxService in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| taxService | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved taxService, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createTerm&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createTerm
Creates the Term in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| term | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved term, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createTimeActivity&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createTimeActivity
Creates the TimeActivity in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| timeActivity | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved timeActivity, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createTransfer&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createTransfer
Creates the Transfer in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| transfer | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved Transfer, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createVendor&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createVendor
Creates the Vendor in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| vendor | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved vendor, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+createVendorCredit&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.createVendorCredit
Creates the VendorCredit in QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| vendorCredit | &lt;code&gt;object&lt;&#x2F;code&gt; | The unsaved vendorCredit, to be persisted in QuickBooks |

&lt;a name&#x3D;&quot;QuickBooks+getAccount&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getAccount
Retrieves the Account from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Account |

&lt;a name&#x3D;&quot;QuickBooks+getAttachable&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getAttachable
Retrieves the Attachable from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Attachable |

&lt;a name&#x3D;&quot;QuickBooks+getBill&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getBill
Retrieves the Bill from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Bill |

&lt;a name&#x3D;&quot;QuickBooks+getBillPayment&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getBillPayment
Retrieves the BillPayment from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent BillPayment |

&lt;a name&#x3D;&quot;QuickBooks+getClass&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getClass
Retrieves the Class from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Class |

&lt;a name&#x3D;&quot;QuickBooks+getCompanyInfo&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getCompanyInfo
Retrieves the CompanyInfo from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent CompanyInfo |

&lt;a name&#x3D;&quot;QuickBooks+getCreditMemo&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getCreditMemo
Retrieves the CreditMemo from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent CreditMemo |

&lt;a name&#x3D;&quot;QuickBooks+getCustomer&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getCustomer
Retrieves the Customer from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Customer |

&lt;a name&#x3D;&quot;QuickBooks+getDepartment&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getDepartment
Retrieves the Department from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Department |

&lt;a name&#x3D;&quot;QuickBooks+getDeposit&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getDeposit
Retrieves the Deposit from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Deposit |

&lt;a name&#x3D;&quot;QuickBooks+getEmployee&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getEmployee
Retrieves the Employee from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Employee |

&lt;a name&#x3D;&quot;QuickBooks+getEstimate&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getEstimate
Retrieves the Estimate from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Estimate |

&lt;a name&#x3D;&quot;QuickBooks+getExchangeRate&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getExchangeRate
Retrieves an ExchangeRate from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | An object with options including the required &#x60;sourcecurrencycode&#x60; parameter and optional &#x60;asofdate&#x60; parameter. |

&lt;a name&#x3D;&quot;QuickBooks+getEstimatePdf&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getEstimatePdf
Retrieves the Estimate PDF from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Estimate |

&lt;a name&#x3D;&quot;QuickBooks+sendEstimatePdf&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.sendEstimatePdf
Emails the Estimate PDF from QuickBooks to the address supplied in Estimate.BillEmail.EmailAddress
or the specified &#39;sendTo&#39; address

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Estimate |
| sendTo | &lt;code&gt;string&lt;&#x2F;code&gt; | optional email address to send the PDF to. If not provided, address supplied in Estimate.BillEmail.EmailAddress will be used |

&lt;a name&#x3D;&quot;QuickBooks+getInvoice&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getInvoice
Retrieves the Invoice from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Invoice |

&lt;a name&#x3D;&quot;QuickBooks+getInvoicePdf&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getInvoicePdf
Retrieves the Invoice PDF from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Invoice |

&lt;a name&#x3D;&quot;QuickBooks+sendInvoicePdf&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.sendInvoicePdf
Emails the Invoice PDF from QuickBooks to the address supplied in Invoice.BillEmail.EmailAddress
or the specified &#39;sendTo&#39; address

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Invoice |
| sendTo | &lt;code&gt;string&lt;&#x2F;code&gt; | optional email address to send the PDF to. If not provided, address supplied in Invoice.BillEmail.EmailAddress will be used |

&lt;a name&#x3D;&quot;QuickBooks+getItem&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getItem
Retrieves the Item from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Item |

&lt;a name&#x3D;&quot;QuickBooks+getJournalCode&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getJournalCode
Retrieves the JournalCode from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent JournalCode |

&lt;a name&#x3D;&quot;QuickBooks+getJournalEntry&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getJournalEntry
Retrieves the JournalEntry from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent JournalEntry |

&lt;a name&#x3D;&quot;QuickBooks+getPayment&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getPayment
Retrieves the Payment from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Payment |

&lt;a name&#x3D;&quot;QuickBooks+getPaymentMethod&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getPaymentMethod
Retrieves the PaymentMethod from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent PaymentMethod |

&lt;a name&#x3D;&quot;QuickBooks+getPreferences&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getPreferences
Retrieves the Preferences from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  
&lt;a name&#x3D;&quot;QuickBooks+getPurchase&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getPurchase
Retrieves the Purchase from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Purchase |

&lt;a name&#x3D;&quot;QuickBooks+getPurchaseOrder&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getPurchaseOrder
Retrieves the PurchaseOrder from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent PurchaseOrder |

&lt;a name&#x3D;&quot;QuickBooks+getRefundReceipt&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getRefundReceipt
Retrieves the RefundReceipt from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent RefundReceipt |

&lt;a name&#x3D;&quot;QuickBooks+getReports&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getReports
Retrieves the Reports from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Reports |

&lt;a name&#x3D;&quot;QuickBooks+getSalesReceipt&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getSalesReceipt
Retrieves the SalesReceipt from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent SalesReceipt |

&lt;a name&#x3D;&quot;QuickBooks+getSalesReceiptPdf&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getSalesReceiptPdf
Retrieves the SalesReceipt PDF from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent SalesReceipt |

&lt;a name&#x3D;&quot;QuickBooks+sendSalesReceiptPdf&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.sendSalesReceiptPdf
Emails the SalesReceipt PDF from QuickBooks to the address supplied in SalesReceipt.BillEmail.EmailAddress
or the specified &#39;sendTo&#39; address

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent SalesReceipt |
| sendTo | &lt;code&gt;string&lt;&#x2F;code&gt; | optional email address to send the PDF to. If not provided, address supplied in SalesReceipt.BillEmail.EmailAddress will be used |

&lt;a name&#x3D;&quot;QuickBooks+getTaxAgency&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getTaxAgency
Retrieves the TaxAgency from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent TaxAgency |

&lt;a name&#x3D;&quot;QuickBooks+getTaxCode&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getTaxCode
Retrieves the TaxCode from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent TaxCode |

&lt;a name&#x3D;&quot;QuickBooks+getTaxRate&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getTaxRate
Retrieves the TaxRate from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent TaxRate |

&lt;a name&#x3D;&quot;QuickBooks+getTerm&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getTerm
Retrieves the Term from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Term |

&lt;a name&#x3D;&quot;QuickBooks+getTimeActivity&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getTimeActivity
Retrieves the TimeActivity from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent TimeActivity |

&lt;a name&#x3D;&quot;QuickBooks+getTransfer&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getTransfer
Retrieves the Transfer from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Term |

&lt;a name&#x3D;&quot;QuickBooks+getVendor&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getVendor
Retrieves the Vendor from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent Vendor |

&lt;a name&#x3D;&quot;QuickBooks+getVendorCredit&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.getVendorCredit
Retrieves the VendorCredit from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Id | &lt;code&gt;string&lt;&#x2F;code&gt; | The Id of persistent VendorCredit |

&lt;a name&#x3D;&quot;QuickBooks+updateAccount&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateAccount
Updates QuickBooks version of Account

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| account | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Account, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateAttachable&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateAttachable
Updates QuickBooks version of Attachable

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| attachable | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Attachable, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateBill&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateBill
Updates QuickBooks version of Bill

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| bill | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Bill, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateBillPayment&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateBillPayment
Updates QuickBooks version of BillPayment

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| billPayment | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent BillPayment, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateClass&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateClass
Updates QuickBooks version of Class

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| class | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Class, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateCompanyInfo&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateCompanyInfo
Updates QuickBooks version of CompanyInfo

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| companyInfo | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent CompanyInfo, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateCreditMemo&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateCreditMemo
Updates QuickBooks version of CreditMemo

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| creditMemo | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent CreditMemo, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateCustomer&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateCustomer
Updates QuickBooks version of Customer

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| customer | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Customer, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateDepartment&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateDepartment
Updates QuickBooks version of Department

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| department | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Department, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateDeposit&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateDeposit
Updates QuickBooks version of Deposit

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| deposit | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Deposit, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateEmployee&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateEmployee
Updates QuickBooks version of Employee

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| employee | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Employee, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateEstimate&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateEstimate
Updates QuickBooks version of Estimate

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| estimate | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Estimate, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateInvoice&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateInvoice
Updates QuickBooks version of Invoice

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| invoice | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Invoice, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateItem&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateItem
Updates QuickBooks version of Item

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| item | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Item, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateJournalCode&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateJournalCode
Updates QuickBooks version of JournalCode

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| journalCode | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent JournalCode, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateJournalEntry&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateJournalEntry
Updates QuickBooks version of JournalEntry

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| journalEntry | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent JournalEntry, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updatePayment&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updatePayment
Updates QuickBooks version of Payment

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| payment | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Payment, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updatePaymentMethod&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updatePaymentMethod
Updates QuickBooks version of PaymentMethod

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| paymentMethod | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent PaymentMethod, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updatePreferences&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updatePreferences
Updates QuickBooks version of Preferences

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| preferences | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Preferences, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updatePurchase&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updatePurchase
Updates QuickBooks version of Purchase

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| purchase | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Purchase, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updatePurchaseOrder&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updatePurchaseOrder
Updates QuickBooks version of PurchaseOrder

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| purchaseOrder | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent PurchaseOrder, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateRefundReceipt&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateRefundReceipt
Updates QuickBooks version of RefundReceipt

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| refundReceipt | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent RefundReceipt, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateSalesReceipt&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateSalesReceipt
Updates QuickBooks version of SalesReceipt

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| salesReceipt | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent SalesReceipt, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateTaxAgency&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateTaxAgency
Updates QuickBooks version of TaxAgency

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| taxAgency | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent TaxAgency, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateTaxCode&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateTaxCode
Updates QuickBooks version of TaxCode

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| taxCode | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent TaxCode, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateTaxRate&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateTaxRate
Updates QuickBooks version of TaxRate

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| taxRate | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent TaxRate, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateTerm&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateTerm
Updates QuickBooks version of Term

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| term | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Term, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateTimeActivity&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateTimeActivity
Updates QuickBooks version of TimeActivity

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| timeActivity | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent TimeActivity, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateTransfer&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateTransfer
Updates QuickBooks version of Transfer

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| Transfer | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Transfer, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateVendor&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateVendor
Updates QuickBooks version of Vendor

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| vendor | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Vendor, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateVendorCredit&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateVendorCredit
Updates QuickBooks version of VendorCredit

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| vendorCredit | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent VendorCredit, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+updateExchangeRate&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.updateExchangeRate
Updates QuickBooks version of ExchangeRate

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| exchangeRate | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent ExchangeRate, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+deleteAttachable&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.deleteAttachable
Deletes the Attachable from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Attachable to be deleted, or the Id of the Attachable, in which case an extra GET request will be issued to first retrieve the Attachable |

&lt;a name&#x3D;&quot;QuickBooks+deleteBill&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.deleteBill
Deletes the Bill from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Bill to be deleted, or the Id of the Bill, in which case an extra GET request will be issued to first retrieve the Bill |

&lt;a name&#x3D;&quot;QuickBooks+deleteBillPayment&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.deleteBillPayment
Deletes the BillPayment from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent BillPayment to be deleted, or the Id of the BillPayment, in which case an extra GET request will be issued to first retrieve the BillPayment |

&lt;a name&#x3D;&quot;QuickBooks+deleteCreditMemo&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.deleteCreditMemo
Deletes the CreditMemo from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent CreditMemo to be deleted, or the Id of the CreditMemo, in which case an extra GET request will be issued to first retrieve the CreditMemo |

&lt;a name&#x3D;&quot;QuickBooks+deleteDeposit&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.deleteDeposit
Deletes the Deposit from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Deposit to be deleted, or the Id of the Deposit, in which case an extra GET request will be issued to first retrieve the Deposit |

&lt;a name&#x3D;&quot;QuickBooks+deleteEstimate&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.deleteEstimate
Deletes the Estimate from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Estimate to be deleted, or the Id of the Estimate, in which case an extra GET request will be issued to first retrieve the Estimate |

&lt;a name&#x3D;&quot;QuickBooks+deleteInvoice&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.deleteInvoice
Deletes the Invoice from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Invoice to be deleted, or the Id of the Invoice, in which case an extra GET request will be issued to first retrieve the Invoice |

&lt;a name&#x3D;&quot;QuickBooks+deleteJournalCode&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.deleteJournalCode
Deletes the JournalCode from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent JournalCode to be deleted, or the Id of the JournalCode, in which case an extra GET request will be issued to first retrieve the JournalCode |

&lt;a name&#x3D;&quot;QuickBooks+deleteJournalEntry&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.deleteJournalEntry
Deletes the JournalEntry from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent JournalEntry to be deleted, or the Id of the JournalEntry, in which case an extra GET request will be issued to first retrieve the JournalEntry |

&lt;a name&#x3D;&quot;QuickBooks+deletePayment&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.deletePayment
Deletes the Payment from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Payment to be deleted, or the Id of the Payment, in which case an extra GET request will be issued to first retrieve the Payment |

&lt;a name&#x3D;&quot;QuickBooks+deletePurchase&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.deletePurchase
Deletes the Purchase from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Purchase to be deleted, or the Id of the Purchase, in which case an extra GET request will be issued to first retrieve the Purchase |

&lt;a name&#x3D;&quot;QuickBooks+deletePurchaseOrder&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.deletePurchaseOrder
Deletes the PurchaseOrder from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent PurchaseOrder to be deleted, or the Id of the PurchaseOrder, in which case an extra GET request will be issued to first retrieve the PurchaseOrder |

&lt;a name&#x3D;&quot;QuickBooks+deleteRefundReceipt&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.deleteRefundReceipt
Deletes the RefundReceipt from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent RefundReceipt to be deleted, or the Id of the RefundReceipt, in which case an extra GET request will be issued to first retrieve the RefundReceipt |

&lt;a name&#x3D;&quot;QuickBooks+deleteSalesReceipt&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.deleteSalesReceipt
Deletes the SalesReceipt from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent SalesReceipt to be deleted, or the Id of the SalesReceipt, in which case an extra GET request will be issued to first retrieve the SalesReceipt |

&lt;a name&#x3D;&quot;QuickBooks+deleteTimeActivity&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.deleteTimeActivity
Deletes the TimeActivity from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent TimeActivity to be deleted, or the Id of the TimeActivity, in which case an extra GET request will be issued to first retrieve the TimeActivity |

&lt;a name&#x3D;&quot;QuickBooks+deleteTransfer&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.deleteTransfer
Deletes the Transfer from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Transfer to be deleted, or the Id of the Transfer, in which case an extra GET request will be issued to first retrieve the Transfer |

&lt;a name&#x3D;&quot;QuickBooks+deleteVendorCredit&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.deleteVendorCredit
Deletes the VendorCredit from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent VendorCredit to be deleted, or the Id of the VendorCredit, in which case an extra GET request will be issued to first retrieve the VendorCredit |

&lt;a name&#x3D;&quot;QuickBooks+voidInvoice&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.voidInvoice
Voids the Invoice from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| idOrEntity | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Invoice to be voided, or the Id of the Invoice, in which case an extra GET request will be issued to first retrieve the Invoice |

&lt;a name&#x3D;&quot;QuickBooks+voidPayment&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.voidPayment
Voids QuickBooks version of Payment

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| payment | &lt;code&gt;object&lt;&#x2F;code&gt; | The persistent Payment, including Id and SyncToken fields |

&lt;a name&#x3D;&quot;QuickBooks+findAccounts&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findAccounts
Finds all Accounts in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findAttachables&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findAttachables
Finds all Attachables in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findBills&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findBills
Finds all Bills in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findBillPayments&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findBillPayments
Finds all BillPayments in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findBudgets&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findBudgets
Finds all Budgets in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findClasses&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findClasses
Finds all Classs in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findCompanyInfos&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findCompanyInfos
Finds all CompanyInfos in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findCreditMemos&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findCreditMemos
Finds all CreditMemos in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findCustomers&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findCustomers
Finds all Customers in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findDepartments&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findDepartments
Finds all Departments in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findDeposits&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findDeposits
Finds all Deposits in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findEmployees&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findEmployees
Finds all Employees in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findEstimates&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findEstimates
Finds all Estimates in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findInvoices&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findInvoices
Finds all Invoices in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findItems&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findItems
Finds all Items in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findJournalCodes&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findJournalCodes
Finds all JournalCodes in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findJournalEntries&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findJournalEntries
Finds all JournalEntrys in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findPayments&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findPayments
Finds all Payments in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findPaymentMethods&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findPaymentMethods
Finds all PaymentMethods in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findPreferenceses&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findPreferenceses
Finds all Preferencess in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findPurchases&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findPurchases
Finds all Purchases in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findPurchaseOrders&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findPurchaseOrders
Finds all PurchaseOrders in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findRefundReceipts&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findRefundReceipts
Finds all RefundReceipts in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findSalesReceipts&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findSalesReceipts
Finds all SalesReceipts in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findTaxAgencies&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findTaxAgencies
Finds all TaxAgencys in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findTaxCodes&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findTaxCodes
Finds all TaxCodes in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findTaxRates&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findTaxRates
Finds all TaxRates in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findTerms&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findTerms
Finds all Terms in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findTimeActivities&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findTimeActivities
Finds all TimeActivitys in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findTransfers&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findTransfers
Finds all Transfers in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findVendors&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findVendors
Finds all Vendors in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findVendorCredits&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findVendorCredits
Finds all VendorCredits in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+findExchangeRates&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.findExchangeRates
Finds all ExchangeRates in QuickBooks, optionally matching the specified criteria

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| criteria | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) String or single-valued map converted to a where clause of the form &quot;where key &#x3D; &#39;value&#39;&quot; |

&lt;a name&#x3D;&quot;QuickBooks+reportBalanceSheet&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportBalanceSheet
Retrieves the BalanceSheet Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportProfitAndLoss&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportProfitAndLoss
Retrieves the ProfitAndLoss Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportProfitAndLossDetail&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportProfitAndLossDetail
Retrieves the ProfitAndLossDetail Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportTrialBalance&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportTrialBalance
Retrieves the TrialBalance Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportCashFlow&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportCashFlow
Retrieves the CashFlow Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportInventoryValuationSummary&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportInventoryValuationSummary
Retrieves the InventoryValuationSummary Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportCustomerSales&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportCustomerSales
Retrieves the CustomerSales Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportItemSales&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportItemSales
Retrieves the ItemSales Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportCustomerIncome&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportCustomerIncome
Retrieves the CustomerIncome Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportCustomerBalance&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportCustomerBalance
Retrieves the CustomerBalance Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportCustomerBalanceDetail&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportCustomerBalanceDetail
Retrieves the CustomerBalanceDetail Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportAgedReceivables&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportAgedReceivables
Retrieves the AgedReceivables Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportAgedReceivableDetail&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportAgedReceivableDetail
Retrieves the AgedReceivableDetail Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportVendorBalance&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportVendorBalance
Retrieves the VendorBalance Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportVendorBalanceDetail&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportVendorBalanceDetail
Retrieves the VendorBalanceDetail Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportAgedPayables&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportAgedPayables
Retrieves the AgedPayables Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportAgedPayableDetail&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportAgedPayableDetail
Retrieves the AgedPayableDetail Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportVendorExpenses&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportVendorExpenses
Retrieves the VendorExpenses Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportTransactionList&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportTransactionList
Retrieves the TransactionList Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportGeneralLedgerDetail&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportGeneralLedgerDetail
Retrieves the GeneralLedgerDetail Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportTaxSummary&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportTaxSummary
Retrieves the TaxSummary Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportDepartmentSales&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportDepartmentSales
Retrieves the DepartmentSales Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportClassSales&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportClassSales
Retrieves the ClassSales Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

&lt;a name&#x3D;&quot;QuickBooks+reportAccountListDetail&quot;&gt;&lt;&#x2F;a&gt;

### quickBooks.reportAccountListDetail
Retrieves the AccountListDetail Report from QuickBooks

**Kind**: instance property of [&lt;code&gt;QuickBooks&lt;&#x2F;code&gt;](#QuickBooks)  

| Param | Type | Description |
| --- | --- | --- |
| options | &lt;code&gt;object&lt;&#x2F;code&gt; | (Optional) Map of key-value pairs passed as options to the Report |

