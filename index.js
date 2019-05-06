const { promisify } = require("util")
/**
* Quickbooks integration class from node-quickbooks
* @class
*/
const QuickBooks = require("@raydeck/node-quickbooks")
//#region Conversion of methods to Old
QuickBooks.prototype.refreshAccessTokenOld = QuickBooks.prototype.refreshAccessToken
QuickBooks.prototype.revokeAccessOld = QuickBooks.prototype.revokeAccess
QuickBooks.prototype.getUserInfoOld = QuickBooks.prototype.getUserInfo
QuickBooks.prototype.batchOld = QuickBooks.prototype.batch
QuickBooks.prototype.changeDataCaptureOld = QuickBooks.prototype.changeDataCapture
QuickBooks.prototype.createAccountOld = QuickBooks.prototype.createAccount
QuickBooks.prototype.createAttachableOld = QuickBooks.prototype.createAttachable
QuickBooks.prototype.createBillOld = QuickBooks.prototype.createBill
QuickBooks.prototype.createBillPaymentOld = QuickBooks.prototype.createBillPayment
QuickBooks.prototype.createClassOld = QuickBooks.prototype.createClass
QuickBooks.prototype.createCreditMemoOld = QuickBooks.prototype.createCreditMemo
QuickBooks.prototype.createCustomerOld = QuickBooks.prototype.createCustomer
QuickBooks.prototype.createDepartmentOld = QuickBooks.prototype.createDepartment
QuickBooks.prototype.createDepositOld = QuickBooks.prototype.createDeposit
QuickBooks.prototype.createEmployeeOld = QuickBooks.prototype.createEmployee
QuickBooks.prototype.createEstimateOld = QuickBooks.prototype.createEstimate
QuickBooks.prototype.createInvoiceOld = QuickBooks.prototype.createInvoice
QuickBooks.prototype.createItemOld = QuickBooks.prototype.createItem
QuickBooks.prototype.createJournalCodeOld = QuickBooks.prototype.createJournalCode
QuickBooks.prototype.createJournalEntryOld = QuickBooks.prototype.createJournalEntry
QuickBooks.prototype.createPaymentOld = QuickBooks.prototype.createPayment
QuickBooks.prototype.createPaymentMethodOld = QuickBooks.prototype.createPaymentMethod
QuickBooks.prototype.createPurchaseOld = QuickBooks.prototype.createPurchase
QuickBooks.prototype.createPurchaseOrderOld = QuickBooks.prototype.createPurchaseOrder
QuickBooks.prototype.createRefundReceiptOld = QuickBooks.prototype.createRefundReceipt
QuickBooks.prototype.createSalesReceiptOld = QuickBooks.prototype.createSalesReceipt
QuickBooks.prototype.createTaxAgencyOld = QuickBooks.prototype.createTaxAgency
QuickBooks.prototype.createTaxServiceOld = QuickBooks.prototype.createTaxService
QuickBooks.prototype.createTermOld = QuickBooks.prototype.createTerm
QuickBooks.prototype.createTimeActivityOld = QuickBooks.prototype.createTimeActivity
QuickBooks.prototype.createTransferOld = QuickBooks.prototype.createTransfer
QuickBooks.prototype.createVendorOld = QuickBooks.prototype.createVendor
QuickBooks.prototype.createVendorCreditOld = QuickBooks.prototype.createVendorCredit
QuickBooks.prototype.getAccountOld = QuickBooks.prototype.getAccount
QuickBooks.prototype.getAttachableOld = QuickBooks.prototype.getAttachable
QuickBooks.prototype.getBillOld = QuickBooks.prototype.getBill
QuickBooks.prototype.getBillPaymentOld = QuickBooks.prototype.getBillPayment
QuickBooks.prototype.getClassOld = QuickBooks.prototype.getClass
QuickBooks.prototype.getCompanyInfoOld = QuickBooks.prototype.getCompanyInfo
QuickBooks.prototype.getCreditMemoOld = QuickBooks.prototype.getCreditMemo
QuickBooks.prototype.getCustomerOld = QuickBooks.prototype.getCustomer
QuickBooks.prototype.getDepartmentOld = QuickBooks.prototype.getDepartment
QuickBooks.prototype.getDepositOld = QuickBooks.prototype.getDeposit
QuickBooks.prototype.getEmployeeOld = QuickBooks.prototype.getEmployee
QuickBooks.prototype.getEstimateOld = QuickBooks.prototype.getEstimate
QuickBooks.prototype.getExchangeRateOld = QuickBooks.prototype.getExchangeRate
QuickBooks.prototype.getEstimatePdfOld = QuickBooks.prototype.getEstimatePdf
QuickBooks.prototype.sendEstimatePdfOld = QuickBooks.prototype.sendEstimatePdf
QuickBooks.prototype.getInvoiceOld = QuickBooks.prototype.getInvoice
QuickBooks.prototype.getInvoicePdfOld = QuickBooks.prototype.getInvoicePdf
QuickBooks.prototype.sendInvoicePdfOld = QuickBooks.prototype.sendInvoicePdf
QuickBooks.prototype.getItemOld = QuickBooks.prototype.getItem
QuickBooks.prototype.getJournalCodeOld = QuickBooks.prototype.getJournalCode
QuickBooks.prototype.getJournalEntryOld = QuickBooks.prototype.getJournalEntry
QuickBooks.prototype.getPaymentOld = QuickBooks.prototype.getPayment
QuickBooks.prototype.getPaymentMethodOld = QuickBooks.prototype.getPaymentMethod
QuickBooks.prototype.getPreferencesOld = QuickBooks.prototype.getPreferences
QuickBooks.prototype.getPurchaseOld = QuickBooks.prototype.getPurchase
QuickBooks.prototype.getPurchaseOrderOld = QuickBooks.prototype.getPurchaseOrder
QuickBooks.prototype.getRefundReceiptOld = QuickBooks.prototype.getRefundReceipt
QuickBooks.prototype.getReportsOld = QuickBooks.prototype.getReports
QuickBooks.prototype.getSalesReceiptOld = QuickBooks.prototype.getSalesReceipt
QuickBooks.prototype.getSalesReceiptPdfOld = QuickBooks.prototype.getSalesReceiptPdf
QuickBooks.prototype.sendSalesReceiptPdfOld = QuickBooks.prototype.sendSalesReceiptPdf
QuickBooks.prototype.getTaxAgencyOld = QuickBooks.prototype.getTaxAgency
QuickBooks.prototype.getTaxCodeOld = QuickBooks.prototype.getTaxCode
QuickBooks.prototype.getTaxRateOld = QuickBooks.prototype.getTaxRate
QuickBooks.prototype.getTermOld = QuickBooks.prototype.getTerm
QuickBooks.prototype.getTimeActivityOld = QuickBooks.prototype.getTimeActivity
QuickBooks.prototype.getTransferOld = QuickBooks.prototype.getTransfer
QuickBooks.prototype.getVendorOld = QuickBooks.prototype.getVendor
QuickBooks.prototype.getVendorCreditOld = QuickBooks.prototype.getVendorCredit
QuickBooks.prototype.updateAccountOld = QuickBooks.prototype.updateAccount
QuickBooks.prototype.updateAttachableOld = QuickBooks.prototype.updateAttachable
QuickBooks.prototype.updateBillOld = QuickBooks.prototype.updateBill
QuickBooks.prototype.updateBillPaymentOld = QuickBooks.prototype.updateBillPayment
QuickBooks.prototype.updateClassOld = QuickBooks.prototype.updateClass
QuickBooks.prototype.updateCompanyInfoOld = QuickBooks.prototype.updateCompanyInfo
QuickBooks.prototype.updateCreditMemoOld = QuickBooks.prototype.updateCreditMemo
QuickBooks.prototype.updateCustomerOld = QuickBooks.prototype.updateCustomer
QuickBooks.prototype.updateDepartmentOld = QuickBooks.prototype.updateDepartment
QuickBooks.prototype.updateDepositOld = QuickBooks.prototype.updateDeposit
QuickBooks.prototype.updateEmployeeOld = QuickBooks.prototype.updateEmployee
QuickBooks.prototype.updateEstimateOld = QuickBooks.prototype.updateEstimate
QuickBooks.prototype.updateInvoiceOld = QuickBooks.prototype.updateInvoice
QuickBooks.prototype.updateItemOld = QuickBooks.prototype.updateItem
QuickBooks.prototype.updateJournalCodeOld = QuickBooks.prototype.updateJournalCode
QuickBooks.prototype.updateJournalEntryOld = QuickBooks.prototype.updateJournalEntry
QuickBooks.prototype.updatePaymentOld = QuickBooks.prototype.updatePayment
QuickBooks.prototype.updatePaymentMethodOld = QuickBooks.prototype.updatePaymentMethod
QuickBooks.prototype.updatePreferencesOld = QuickBooks.prototype.updatePreferences
QuickBooks.prototype.updatePurchaseOld = QuickBooks.prototype.updatePurchase
QuickBooks.prototype.updatePurchaseOrderOld = QuickBooks.prototype.updatePurchaseOrder
QuickBooks.prototype.updateRefundReceiptOld = QuickBooks.prototype.updateRefundReceipt
QuickBooks.prototype.updateSalesReceiptOld = QuickBooks.prototype.updateSalesReceipt
QuickBooks.prototype.updateTaxAgencyOld = QuickBooks.prototype.updateTaxAgency
QuickBooks.prototype.updateTaxCodeOld = QuickBooks.prototype.updateTaxCode
QuickBooks.prototype.updateTaxRateOld = QuickBooks.prototype.updateTaxRate
QuickBooks.prototype.updateTermOld = QuickBooks.prototype.updateTerm
QuickBooks.prototype.updateTimeActivityOld = QuickBooks.prototype.updateTimeActivity
QuickBooks.prototype.updateTransferOld = QuickBooks.prototype.updateTransfer
QuickBooks.prototype.updateVendorOld = QuickBooks.prototype.updateVendor
QuickBooks.prototype.updateVendorCreditOld = QuickBooks.prototype.updateVendorCredit
QuickBooks.prototype.updateExchangeRateOld = QuickBooks.prototype.updateExchangeRate
QuickBooks.prototype.deleteAttachableOld = QuickBooks.prototype.deleteAttachable
QuickBooks.prototype.deleteBillOld = QuickBooks.prototype.deleteBill
QuickBooks.prototype.deleteBillPaymentOld = QuickBooks.prototype.deleteBillPayment
QuickBooks.prototype.deleteCreditMemoOld = QuickBooks.prototype.deleteCreditMemo
QuickBooks.prototype.deleteDepositOld = QuickBooks.prototype.deleteDeposit
QuickBooks.prototype.deleteEstimateOld = QuickBooks.prototype.deleteEstimate
QuickBooks.prototype.deleteInvoiceOld = QuickBooks.prototype.deleteInvoice
QuickBooks.prototype.deleteJournalCodeOld = QuickBooks.prototype.deleteJournalCode
QuickBooks.prototype.deleteJournalEntryOld = QuickBooks.prototype.deleteJournalEntry
QuickBooks.prototype.deletePaymentOld = QuickBooks.prototype.deletePayment
QuickBooks.prototype.deletePurchaseOld = QuickBooks.prototype.deletePurchase
QuickBooks.prototype.deletePurchaseOrderOld = QuickBooks.prototype.deletePurchaseOrder
QuickBooks.prototype.deleteRefundReceiptOld = QuickBooks.prototype.deleteRefundReceipt
QuickBooks.prototype.deleteSalesReceiptOld = QuickBooks.prototype.deleteSalesReceipt
QuickBooks.prototype.deleteTimeActivityOld = QuickBooks.prototype.deleteTimeActivity
QuickBooks.prototype.deleteTransferOld = QuickBooks.prototype.deleteTransfer
QuickBooks.prototype.deleteVendorCreditOld = QuickBooks.prototype.deleteVendorCredit
QuickBooks.prototype.voidInvoiceOld = QuickBooks.prototype.voidInvoice
QuickBooks.prototype.voidPaymentOld = QuickBooks.prototype.voidPayment
QuickBooks.prototype.findAccountsOld = QuickBooks.prototype.findAccounts
QuickBooks.prototype.findAttachablesOld = QuickBooks.prototype.findAttachables
QuickBooks.prototype.findBillsOld = QuickBooks.prototype.findBills
QuickBooks.prototype.findBillPaymentsOld = QuickBooks.prototype.findBillPayments
QuickBooks.prototype.findBudgetsOld = QuickBooks.prototype.findBudgets
QuickBooks.prototype.findClassesOld = QuickBooks.prototype.findClasses
QuickBooks.prototype.findCompanyInfosOld = QuickBooks.prototype.findCompanyInfos
QuickBooks.prototype.findCreditMemosOld = QuickBooks.prototype.findCreditMemos
QuickBooks.prototype.findCustomersOld = QuickBooks.prototype.findCustomers
QuickBooks.prototype.findDepartmentsOld = QuickBooks.prototype.findDepartments
QuickBooks.prototype.findDepositsOld = QuickBooks.prototype.findDeposits
QuickBooks.prototype.findEmployeesOld = QuickBooks.prototype.findEmployees
QuickBooks.prototype.findEstimatesOld = QuickBooks.prototype.findEstimates
QuickBooks.prototype.findInvoicesOld = QuickBooks.prototype.findInvoices
QuickBooks.prototype.findItemsOld = QuickBooks.prototype.findItems
QuickBooks.prototype.findJournalCodesOld = QuickBooks.prototype.findJournalCodes
QuickBooks.prototype.findJournalEntriesOld = QuickBooks.prototype.findJournalEntries
QuickBooks.prototype.findPaymentsOld = QuickBooks.prototype.findPayments
QuickBooks.prototype.findPaymentMethodsOld = QuickBooks.prototype.findPaymentMethods
QuickBooks.prototype.findPreferencesesOld = QuickBooks.prototype.findPreferenceses
QuickBooks.prototype.findPurchasesOld = QuickBooks.prototype.findPurchases
QuickBooks.prototype.findPurchaseOrdersOld = QuickBooks.prototype.findPurchaseOrders
QuickBooks.prototype.findRefundReceiptsOld = QuickBooks.prototype.findRefundReceipts
QuickBooks.prototype.findSalesReceiptsOld = QuickBooks.prototype.findSalesReceipts
QuickBooks.prototype.findTaxAgenciesOld = QuickBooks.prototype.findTaxAgencies
QuickBooks.prototype.findTaxCodesOld = QuickBooks.prototype.findTaxCodes
QuickBooks.prototype.findTaxRatesOld = QuickBooks.prototype.findTaxRates
QuickBooks.prototype.findTermsOld = QuickBooks.prototype.findTerms
QuickBooks.prototype.findTimeActivitiesOld = QuickBooks.prototype.findTimeActivities
QuickBooks.prototype.findTransfersOld = QuickBooks.prototype.findTransfers
QuickBooks.prototype.findVendorsOld = QuickBooks.prototype.findVendors
QuickBooks.prototype.findVendorCreditsOld = QuickBooks.prototype.findVendorCredits
QuickBooks.prototype.findExchangeRatesOld = QuickBooks.prototype.findExchangeRates
QuickBooks.prototype.reportBalanceSheetOld = QuickBooks.prototype.reportBalanceSheet
QuickBooks.prototype.reportProfitAndLossOld = QuickBooks.prototype.reportProfitAndLoss
QuickBooks.prototype.reportProfitAndLossDetailOld = QuickBooks.prototype.reportProfitAndLossDetail
QuickBooks.prototype.reportTrialBalanceOld = QuickBooks.prototype.reportTrialBalance
QuickBooks.prototype.reportCashFlowOld = QuickBooks.prototype.reportCashFlow
QuickBooks.prototype.reportCustomerSalesOld = QuickBooks.prototype.reportCustomerSales
QuickBooks.prototype.reportItemSalesOld = QuickBooks.prototype.reportItemSales
QuickBooks.prototype.reportCustomerIncomeOld = QuickBooks.prototype.reportCustomerIncome
QuickBooks.prototype.reportCustomerBalanceOld = QuickBooks.prototype.reportCustomerBalance
QuickBooks.prototype.reportCustomerBalanceDetailOld = QuickBooks.prototype.reportCustomerBalanceDetail
QuickBooks.prototype.reportAgedReceivablesOld = QuickBooks.prototype.reportAgedReceivables
QuickBooks.prototype.reportAgedReceivableDetailOld = QuickBooks.prototype.reportAgedReceivableDetail
QuickBooks.prototype.reportVendorBalanceOld = QuickBooks.prototype.reportVendorBalance
QuickBooks.prototype.reportVendorBalanceDetailOld = QuickBooks.prototype.reportVendorBalanceDetail
QuickBooks.prototype.reportAgedPayablesOld = QuickBooks.prototype.reportAgedPayables
QuickBooks.prototype.reportAgedPayableDetailOld = QuickBooks.prototype.reportAgedPayableDetail
QuickBooks.prototype.reportVendorExpensesOld = QuickBooks.prototype.reportVendorExpenses
QuickBooks.prototype.reportTransactionListOld = QuickBooks.prototype.reportTransactionList
QuickBooks.prototype.reportGeneralLedgerDetailOld = QuickBooks.prototype.reportGeneralLedgerDetail
QuickBooks.prototype.reportTaxSummaryOld = QuickBooks.prototype.reportTaxSummary
QuickBooks.prototype.reportDepartmentSalesOld = QuickBooks.prototype.reportDepartmentSales
QuickBooks.prototype.reportClassSalesOld = QuickBooks.prototype.reportClassSales
QuickBooks.prototype.reportAccountListDetailOld = QuickBooks.prototype.reportAccountListDetail
QuickBooks.prototype.reconnectOld = QuickBooks.prototype.reconnect
QuickBooks.prototype.disconnectOld = QuickBooks.prototype.disconnect
//#endregion
//#region New Promise declarations


QuickBooks.prototype.refreshAccessToken = promisify(QuickBooks.prototype.refreshAccessTokenOld)

/**
 * Use either refresh token or access token to revoke access (OAuth2).
 *
 * @param useRefresh - boolean - Indicates which token to use: true to use the refresh token, false to use the access token.
 */
QuickBooks.prototype.revokeAccess = promisify(QuickBooks.prototype.revokeAccessOld)

/**
 * Get user info (OAuth2).
 *
 */
QuickBooks.prototype.getUserInfo = promisify(QuickBooks.prototype.getUserInfoOld)

/**
 * Batch operation to enable an application to perform multiple operations in a single request.
 * The following batch items are supported:
     create
     update
     delete
     query
 * The maximum number of batch items in a single request is 25.
 *
 * @param  {object} items - JavaScript array of batch items
 */
QuickBooks.prototype.batch = promisify(QuickBooks.prototype.batchOld)

/**
 * The change data capture (CDC) operation returns a list of entities that have changed since a specified time.
 *
 * @param  {object} entities - Comma separated list or JavaScript array of entities to search for changes
 * @param  {object} since - JavaScript Date or string representation of the form '2012-07-20T22:25:51-07:00' to look back for changes until
 */
QuickBooks.prototype.changeDataCapture = promisify(QuickBooks.prototype.changeDataCaptureOld)

/**
 * Creates the Account in QuickBooks
 *
 * @param  {object} account - The unsaved account, to be persisted in QuickBooks
 */
QuickBooks.prototype.createAccount = promisify(QuickBooks.prototype.createAccountOld)

/**
 * Creates the Attachable in QuickBooks
 *
 * @param  {object} attachable - The unsaved attachable, to be persisted in QuickBooks
 */
QuickBooks.prototype.createAttachable = promisify(QuickBooks.prototype.createAttachableOld)

/**
 * Creates the Bill in QuickBooks
 *
 * @param  {object} bill - The unsaved bill, to be persisted in QuickBooks
 */
QuickBooks.prototype.createBill = promisify(QuickBooks.prototype.createBillOld)

/**
 * Creates the BillPayment in QuickBooks
 *
 * @param  {object} billPayment - The unsaved billPayment, to be persisted in QuickBooks
 */
QuickBooks.prototype.createBillPayment = promisify(QuickBooks.prototype.createBillPaymentOld)

/**
 * Creates the Class in QuickBooks
 *
 * @param  {object} class - The unsaved class, to be persisted in QuickBooks
 */
QuickBooks.prototype.createClass = promisify(QuickBooks.prototype.createClassOld)

/**
 * Creates the CreditMemo in QuickBooks
 *
 * @param  {object} creditMemo - The unsaved creditMemo, to be persisted in QuickBooks
 */
QuickBooks.prototype.createCreditMemo = promisify(QuickBooks.prototype.createCreditMemoOld)

/**
 * Creates the Customer in QuickBooks
 *
 * @param  {object} customer - The unsaved customer, to be persisted in QuickBooks
 */
QuickBooks.prototype.createCustomer = promisify(QuickBooks.prototype.createCustomerOld)

/**
 * Creates the Department in QuickBooks
 *
 * @param  {object} department - The unsaved department, to be persisted in QuickBooks
 */
QuickBooks.prototype.createDepartment = promisify(QuickBooks.prototype.createDepartmentOld)

/**
 * Creates the Deposit in QuickBooks
 *
 * @param  {object} deposit - The unsaved Deposit, to be persisted in QuickBooks
 */
QuickBooks.prototype.createDeposit = promisify(QuickBooks.prototype.createDepositOld)

/**
 * Creates the Employee in QuickBooks
 *
 * @param  {object} employee - The unsaved employee, to be persisted in QuickBooks
 */
QuickBooks.prototype.createEmployee = promisify(QuickBooks.prototype.createEmployeeOld)

/**
 * Creates the Estimate in QuickBooks
 *
 * @param  {object} estimate - The unsaved estimate, to be persisted in QuickBooks
 */
QuickBooks.prototype.createEstimate = promisify(QuickBooks.prototype.createEstimateOld)

/**
 * Creates the Invoice in QuickBooks
 *
 * @param  {object} invoice - The unsaved invoice, to be persisted in QuickBooks
 */
QuickBooks.prototype.createInvoice = promisify(QuickBooks.prototype.createInvoiceOld)

/**
 * Creates the Item in QuickBooks
 *
 * @param  {object} item - The unsaved item, to be persisted in QuickBooks
 */
QuickBooks.prototype.createItem = promisify(QuickBooks.prototype.createItemOld)

/**
 * Creates the JournalCode in QuickBooks
 *
 * @param  {object} journalCode - The unsaved journalCode, to be persisted in QuickBooks
 */
QuickBooks.prototype.createJournalCode = promisify(QuickBooks.prototype.createJournalCodeOld)

/**
 * Creates the JournalEntry in QuickBooks
 *
 * @param  {object} journalEntry - The unsaved journalEntry, to be persisted in QuickBooks
 */
QuickBooks.prototype.createJournalEntry = promisify(QuickBooks.prototype.createJournalEntryOld)

/**
 * Creates the Payment in QuickBooks
 *
 * @param  {object} payment - The unsaved payment, to be persisted in QuickBooks
 */
QuickBooks.prototype.createPayment = promisify(QuickBooks.prototype.createPaymentOld)

/**
 * Creates the PaymentMethod in QuickBooks
 *
 * @param  {object} paymentMethod - The unsaved paymentMethod, to be persisted in QuickBooks
 */
QuickBooks.prototype.createPaymentMethod = promisify(QuickBooks.prototype.createPaymentMethodOld)

/**
 * Creates the Purchase in QuickBooks
 *
 * @param  {object} purchase - The unsaved purchase, to be persisted in QuickBooks
 */
QuickBooks.prototype.createPurchase = promisify(QuickBooks.prototype.createPurchaseOld)

/**
 * Creates the PurchaseOrder in QuickBooks
 *
 * @param  {object} purchaseOrder - The unsaved purchaseOrder, to be persisted in QuickBooks
 */
QuickBooks.prototype.createPurchaseOrder = promisify(QuickBooks.prototype.createPurchaseOrderOld)

/**
 * Creates the RefundReceipt in QuickBooks
 *
 * @param  {object} refundReceipt - The unsaved refundReceipt, to be persisted in QuickBooks
 */
QuickBooks.prototype.createRefundReceipt = promisify(QuickBooks.prototype.createRefundReceiptOld)

/**
 * Creates the SalesReceipt in QuickBooks
 *
 * @param  {object} salesReceipt - The unsaved salesReceipt, to be persisted in QuickBooks
 */
QuickBooks.prototype.createSalesReceipt = promisify(QuickBooks.prototype.createSalesReceiptOld)

/**
 * Creates the TaxAgency in QuickBooks
 *
 * @param  {object} taxAgency - The unsaved taxAgency, to be persisted in QuickBooks
 */
QuickBooks.prototype.createTaxAgency = promisify(QuickBooks.prototype.createTaxAgencyOld)

/**
 * Creates the TaxService in QuickBooks
 *
 * @param  {object} taxService - The unsaved taxService, to be persisted in QuickBooks
 */
QuickBooks.prototype.createTaxService = promisify(QuickBooks.prototype.createTaxServiceOld)

/**
 * Creates the Term in QuickBooks
 *
 * @param  {object} term - The unsaved term, to be persisted in QuickBooks
 */
QuickBooks.prototype.createTerm = promisify(QuickBooks.prototype.createTermOld)

/**
 * Creates the TimeActivity in QuickBooks
 *
 * @param  {object} timeActivity - The unsaved timeActivity, to be persisted in QuickBooks
 */
QuickBooks.prototype.createTimeActivity = promisify(QuickBooks.prototype.createTimeActivityOld)

/**
 * Creates the Transfer in QuickBooks
 *
 * @param  {object} transfer - The unsaved Transfer, to be persisted in QuickBooks
 */
QuickBooks.prototype.createTransfer = promisify(QuickBooks.prototype.createTransferOld)

/**
 * Creates the Vendor in QuickBooks
 *
 * @param  {object} vendor - The unsaved vendor, to be persisted in QuickBooks
 */
QuickBooks.prototype.createVendor = promisify(QuickBooks.prototype.createVendorOld)

/**
 * Creates the VendorCredit in QuickBooks
 *
 * @param  {object} vendorCredit - The unsaved vendorCredit, to be persisted in QuickBooks
 */
QuickBooks.prototype.createVendorCredit = promisify(QuickBooks.prototype.createVendorCreditOld)

/**
 * Retrieves the Account from QuickBooks
 *
 * @param  {string} Id - The Id of persistent Account
 */
QuickBooks.prototype.getAccount = promisify(QuickBooks.prototype.getAccountOld)

/**
 * Retrieves the Attachable from QuickBooks
 *
 * @param  {string} Id - The Id of persistent Attachable
 */
QuickBooks.prototype.getAttachable = promisify(QuickBooks.prototype.getAttachableOld)

/**
 * Retrieves the Bill from QuickBooks
 *
 * @param  {string} Id - The Id of persistent Bill
 */
QuickBooks.prototype.getBill = promisify(QuickBooks.prototype.getBillOld)

/**
 * Retrieves the BillPayment from QuickBooks
 *
 * @param  {string} Id - The Id of persistent BillPayment
 */
QuickBooks.prototype.getBillPayment = promisify(QuickBooks.prototype.getBillPaymentOld)

/**
 * Retrieves the Class from QuickBooks
 *
 * @param  {string} Id - The Id of persistent Class
 */
QuickBooks.prototype.getClass = promisify(QuickBooks.prototype.getClassOld)

/**
 * Retrieves the CompanyInfo from QuickBooks
 *
 * @param  {string} Id - The Id of persistent CompanyInfo
 */
QuickBooks.prototype.getCompanyInfo = promisify(QuickBooks.prototype.getCompanyInfoOld)

/**
 * Retrieves the CreditMemo from QuickBooks
 *
 * @param  {string} Id - The Id of persistent CreditMemo
 */
QuickBooks.prototype.getCreditMemo = promisify(QuickBooks.prototype.getCreditMemoOld)

/**
 * Retrieves the Customer from QuickBooks
 *
 * @param  {string} Id - The Id of persistent Customer
 */
QuickBooks.prototype.getCustomer = promisify(QuickBooks.prototype.getCustomerOld)

/**
 * Retrieves the Department from QuickBooks
 *
 * @param  {string} Id - The Id of persistent Department
 */
QuickBooks.prototype.getDepartment = promisify(QuickBooks.prototype.getDepartmentOld)

/**
 * Retrieves the Deposit from QuickBooks
 *
 * @param  {string} Id - The Id of persistent Deposit
 */
QuickBooks.prototype.getDeposit = promisify(QuickBooks.prototype.getDepositOld)

/**
 * Retrieves the Employee from QuickBooks
 *
 * @param  {string} Id - The Id of persistent Employee
 */
QuickBooks.prototype.getEmployee = promisify(QuickBooks.prototype.getEmployeeOld)

/**
 * Retrieves the Estimate from QuickBooks
 *
 * @param  {string} Id - The Id of persistent Estimate
 */
QuickBooks.prototype.getEstimate = promisify(QuickBooks.prototype.getEstimateOld)

/**
 * Retrieves an ExchangeRate from QuickBooks
 *
 * @param  {object} options - An object with options including the required `sourcecurrencycode` parameter and optional `asofdate` parameter.
 */
QuickBooks.prototype.getExchangeRate = promisify(QuickBooks.prototype.getExchangeRateOld)

/**
 * Retrieves the Estimate PDF from QuickBooks
 *
 * @param  {string} Id - The Id of persistent Estimate
 */
QuickBooks.prototype.getEstimatePdf = promisify(QuickBooks.prototype.getEstimatePdfOld)

/**
 * Emails the Estimate PDF from QuickBooks to the address supplied in Estimate.BillEmail.EmailAddress
 * or the specified 'sendTo' address
 *
 * @param  {string} Id - The Id of persistent Estimate
 * @param  {string} sendTo - optional email address to send the PDF to. If not provided, address supplied in Estimate.BillEmail.EmailAddress will be used
 */
QuickBooks.prototype.sendEstimatePdf = promisify(QuickBooks.prototype.sendEstimatePdfOld)

/**
 * Retrieves the Invoice from QuickBooks
 *
 * @param  {string} Id - The Id of persistent Invoice
 */
QuickBooks.prototype.getInvoice = promisify(QuickBooks.prototype.getInvoiceOld)

/**
 * Retrieves the Invoice PDF from QuickBooks
 *
 * @param  {string} Id - The Id of persistent Invoice
 */
QuickBooks.prototype.getInvoicePdf = promisify(QuickBooks.prototype.getInvoicePdfOld)

/**
 * Emails the Invoice PDF from QuickBooks to the address supplied in Invoice.BillEmail.EmailAddress
 * or the specified 'sendTo' address
 *
 * @param  {string} Id - The Id of persistent Invoice
 * @param  {string} sendTo - optional email address to send the PDF to. If not provided, address supplied in Invoice.BillEmail.EmailAddress will be used
 */
QuickBooks.prototype.sendInvoicePdf = promisify(QuickBooks.prototype.sendInvoicePdfOld)

/**
 * Retrieves the Item from QuickBooks
 *
 * @param  {string} Id - The Id of persistent Item
 */
QuickBooks.prototype.getItem = promisify(QuickBooks.prototype.getItemOld)

/**
 * Retrieves the JournalCode from QuickBooks
 *
 * @param  {string} Id - The Id of persistent JournalCode
 */
QuickBooks.prototype.getJournalCode = promisify(QuickBooks.prototype.getJournalCodeOld)

/**
 * Retrieves the JournalEntry from QuickBooks
 *
 * @param  {string} Id - The Id of persistent JournalEntry
 */
QuickBooks.prototype.getJournalEntry = promisify(QuickBooks.prototype.getJournalEntryOld)

/**
 * Retrieves the Payment from QuickBooks
 *
 * @param  {string} Id - The Id of persistent Payment
 */
QuickBooks.prototype.getPayment = promisify(QuickBooks.prototype.getPaymentOld)

/**
 * Retrieves the PaymentMethod from QuickBooks
 *
 * @param  {string} Id - The Id of persistent PaymentMethod
 */
QuickBooks.prototype.getPaymentMethod = promisify(QuickBooks.prototype.getPaymentMethodOld)

/**
 * Retrieves the Preferences from QuickBooks
 *
 */
QuickBooks.prototype.getPreferences = promisify(QuickBooks.prototype.getPreferencesOld)

/**
 * Retrieves the Purchase from QuickBooks
 *
 * @param  {string} Id - The Id of persistent Purchase
 */
QuickBooks.prototype.getPurchase = promisify(QuickBooks.prototype.getPurchaseOld)

/**
 * Retrieves the PurchaseOrder from QuickBooks
 *
 * @param  {string} Id - The Id of persistent PurchaseOrder
 */
QuickBooks.prototype.getPurchaseOrder = promisify(QuickBooks.prototype.getPurchaseOrderOld)

/**
 * Retrieves the RefundReceipt from QuickBooks
 *
 * @param  {string} Id - The Id of persistent RefundReceipt
 */
QuickBooks.prototype.getRefundReceipt = promisify(QuickBooks.prototype.getRefundReceiptOld)

/**
 * Retrieves the Reports from QuickBooks
 *
 * @param  {string} Id - The Id of persistent Reports
 */
QuickBooks.prototype.getReports = promisify(QuickBooks.prototype.getReportsOld)

/**
 * Retrieves the SalesReceipt from QuickBooks
 *
 * @param  {string} Id - The Id of persistent SalesReceipt
 */
QuickBooks.prototype.getSalesReceipt = promisify(QuickBooks.prototype.getSalesReceiptOld)

/**
 * Retrieves the SalesReceipt PDF from QuickBooks
 *
 * @param  {string} Id - The Id of persistent SalesReceipt
 */
QuickBooks.prototype.getSalesReceiptPdf = promisify(QuickBooks.prototype.getSalesReceiptPdfOld)

/**
 * Emails the SalesReceipt PDF from QuickBooks to the address supplied in SalesReceipt.BillEmail.EmailAddress
 * or the specified 'sendTo' address
 *
 * @param  {string} Id - The Id of persistent SalesReceipt
 * @param  {string} sendTo - optional email address to send the PDF to. If not provided, address supplied in SalesReceipt.BillEmail.EmailAddress will be used
 */
QuickBooks.prototype.sendSalesReceiptPdf = promisify(QuickBooks.prototype.sendSalesReceiptPdfOld)

/**
 * Retrieves the TaxAgency from QuickBooks
 *
 * @param  {string} Id - The Id of persistent TaxAgency
 */
QuickBooks.prototype.getTaxAgency = promisify(QuickBooks.prototype.getTaxAgencyOld)

/**
 * Retrieves the TaxCode from QuickBooks
 *
 * @param  {string} Id - The Id of persistent TaxCode
 */
QuickBooks.prototype.getTaxCode = promisify(QuickBooks.prototype.getTaxCodeOld)

/**
 * Retrieves the TaxRate from QuickBooks
 *
 * @param  {string} Id - The Id of persistent TaxRate
 */
QuickBooks.prototype.getTaxRate = promisify(QuickBooks.prototype.getTaxRateOld)

/**
 * Retrieves the Term from QuickBooks
 *
 * @param  {string} Id - The Id of persistent Term
 */
QuickBooks.prototype.getTerm = promisify(QuickBooks.prototype.getTermOld)

/**
 * Retrieves the TimeActivity from QuickBooks
 *
 * @param  {string} Id - The Id of persistent TimeActivity
 */
QuickBooks.prototype.getTimeActivity = promisify(QuickBooks.prototype.getTimeActivityOld)

/**
 * Retrieves the Transfer from QuickBooks
 *
 * @param  {string} Id - The Id of persistent Term
 */
QuickBooks.prototype.getTransfer = promisify(QuickBooks.prototype.getTransferOld)

/**
 * Retrieves the Vendor from QuickBooks
 *
 * @param  {string} Id - The Id of persistent Vendor
 */
QuickBooks.prototype.getVendor = promisify(QuickBooks.prototype.getVendorOld)

/**
 * Retrieves the VendorCredit from QuickBooks
 *
 * @param  {string} Id - The Id of persistent VendorCredit
 */
QuickBooks.prototype.getVendorCredit = promisify(QuickBooks.prototype.getVendorCreditOld)

/**
 * Updates QuickBooks version of Account
 *
 * @param  {object} account - The persistent Account, including Id and SyncToken fields
 */
QuickBooks.prototype.updateAccount = promisify(QuickBooks.prototype.updateAccountOld)

/**
 * Updates QuickBooks version of Attachable
 *
 * @param  {object} attachable - The persistent Attachable, including Id and SyncToken fields
 */
QuickBooks.prototype.updateAttachable = promisify(QuickBooks.prototype.updateAttachableOld)

/**
 * Updates QuickBooks version of Bill
 *
 * @param  {object} bill - The persistent Bill, including Id and SyncToken fields
 */
QuickBooks.prototype.updateBill = promisify(QuickBooks.prototype.updateBillOld)

/**
 * Updates QuickBooks version of BillPayment
 *
 * @param  {object} billPayment - The persistent BillPayment, including Id and SyncToken fields
 */
QuickBooks.prototype.updateBillPayment = promisify(QuickBooks.prototype.updateBillPaymentOld)

/**
 * Updates QuickBooks version of Class
 *
 * @param  {object} class - The persistent Class, including Id and SyncToken fields
 */
QuickBooks.prototype.updateClass = promisify(QuickBooks.prototype.updateClassOld)

/**
 * Updates QuickBooks version of CompanyInfo
 *
 * @param  {object} companyInfo - The persistent CompanyInfo, including Id and SyncToken fields
 */
QuickBooks.prototype.updateCompanyInfo = promisify(QuickBooks.prototype.updateCompanyInfoOld)

/**
 * Updates QuickBooks version of CreditMemo
 *
 * @param  {object} creditMemo - The persistent CreditMemo, including Id and SyncToken fields
 */
QuickBooks.prototype.updateCreditMemo = promisify(QuickBooks.prototype.updateCreditMemoOld)

/**
 * Updates QuickBooks version of Customer
 *
 * @param  {object} customer - The persistent Customer, including Id and SyncToken fields
 */
QuickBooks.prototype.updateCustomer = promisify(QuickBooks.prototype.updateCustomerOld)

/**
 * Updates QuickBooks version of Department
 *
 * @param  {object} department - The persistent Department, including Id and SyncToken fields
 */
QuickBooks.prototype.updateDepartment = promisify(QuickBooks.prototype.updateDepartmentOld)

/**
 * Updates QuickBooks version of Deposit
 *
 * @param  {object} deposit - The persistent Deposit, including Id and SyncToken fields
 */
QuickBooks.prototype.updateDeposit = promisify(QuickBooks.prototype.updateDepositOld)

/**
 * Updates QuickBooks version of Employee
 *
 * @param  {object} employee - The persistent Employee, including Id and SyncToken fields
 */
QuickBooks.prototype.updateEmployee = promisify(QuickBooks.prototype.updateEmployeeOld)

/**
 * Updates QuickBooks version of Estimate
 *
 * @param  {object} estimate - The persistent Estimate, including Id and SyncToken fields
 */
QuickBooks.prototype.updateEstimate = promisify(QuickBooks.prototype.updateEstimateOld)

/**
 * Updates QuickBooks version of Invoice
 *
 * @param  {object} invoice - The persistent Invoice, including Id and SyncToken fields
 */
QuickBooks.prototype.updateInvoice = promisify(QuickBooks.prototype.updateInvoiceOld)

/**
 * Updates QuickBooks version of Item
 *
 * @param  {object} item - The persistent Item, including Id and SyncToken fields
 */
QuickBooks.prototype.updateItem = promisify(QuickBooks.prototype.updateItemOld)

/**
 * Updates QuickBooks version of JournalCode
 *
 * @param  {object} journalCode - The persistent JournalCode, including Id and SyncToken fields
 */
QuickBooks.prototype.updateJournalCode = promisify(QuickBooks.prototype.updateJournalCodeOld)

/**
 * Updates QuickBooks version of JournalEntry
 *
 * @param  {object} journalEntry - The persistent JournalEntry, including Id and SyncToken fields
 */
QuickBooks.prototype.updateJournalEntry = promisify(QuickBooks.prototype.updateJournalEntryOld)

/**
 * Updates QuickBooks version of Payment
 *
 * @param  {object} payment - The persistent Payment, including Id and SyncToken fields
 */
QuickBooks.prototype.updatePayment = promisify(QuickBooks.prototype.updatePaymentOld)

/**
 * Updates QuickBooks version of PaymentMethod
 *
 * @param  {object} paymentMethod - The persistent PaymentMethod, including Id and SyncToken fields
 */
QuickBooks.prototype.updatePaymentMethod = promisify(QuickBooks.prototype.updatePaymentMethodOld)

/**
 * Updates QuickBooks version of Preferences
 *
 * @param  {object} preferences - The persistent Preferences, including Id and SyncToken fields
 */
QuickBooks.prototype.updatePreferences = promisify(QuickBooks.prototype.updatePreferencesOld)

/**
 * Updates QuickBooks version of Purchase
 *
 * @param  {object} purchase - The persistent Purchase, including Id and SyncToken fields
 */
QuickBooks.prototype.updatePurchase = promisify(QuickBooks.prototype.updatePurchaseOld)

/**
 * Updates QuickBooks version of PurchaseOrder
 *
 * @param  {object} purchaseOrder - The persistent PurchaseOrder, including Id and SyncToken fields
 */
QuickBooks.prototype.updatePurchaseOrder = promisify(QuickBooks.prototype.updatePurchaseOrderOld)

/**
 * Updates QuickBooks version of RefundReceipt
 *
 * @param  {object} refundReceipt - The persistent RefundReceipt, including Id and SyncToken fields
 */
QuickBooks.prototype.updateRefundReceipt = promisify(QuickBooks.prototype.updateRefundReceiptOld)

/**
 * Updates QuickBooks version of SalesReceipt
 *
 * @param  {object} salesReceipt - The persistent SalesReceipt, including Id and SyncToken fields
 */
QuickBooks.prototype.updateSalesReceipt = promisify(QuickBooks.prototype.updateSalesReceiptOld)

/**
 * Updates QuickBooks version of TaxAgency
 *
 * @param  {object} taxAgency - The persistent TaxAgency, including Id and SyncToken fields
 */
QuickBooks.prototype.updateTaxAgency = promisify(QuickBooks.prototype.updateTaxAgencyOld)

/**
 * Updates QuickBooks version of TaxCode
 *
 * @param  {object} taxCode - The persistent TaxCode, including Id and SyncToken fields
 */
QuickBooks.prototype.updateTaxCode = promisify(QuickBooks.prototype.updateTaxCodeOld)

/**
 * Updates QuickBooks version of TaxRate
 *
 * @param  {object} taxRate - The persistent TaxRate, including Id and SyncToken fields
 */
QuickBooks.prototype.updateTaxRate = promisify(QuickBooks.prototype.updateTaxRateOld)

/**
 * Updates QuickBooks version of Term
 *
 * @param  {object} term - The persistent Term, including Id and SyncToken fields
 */
QuickBooks.prototype.updateTerm = promisify(QuickBooks.prototype.updateTermOld)

/**
 * Updates QuickBooks version of TimeActivity
 *
 * @param  {object} timeActivity - The persistent TimeActivity, including Id and SyncToken fields
 */
QuickBooks.prototype.updateTimeActivity = promisify(QuickBooks.prototype.updateTimeActivityOld)

/**
 * Updates QuickBooks version of Transfer
 *
 * @param  {object} Transfer - The persistent Transfer, including Id and SyncToken fields
 */
QuickBooks.prototype.updateTransfer = promisify(QuickBooks.prototype.updateTransferOld)

/**
 * Updates QuickBooks version of Vendor
 *
 * @param  {object} vendor - The persistent Vendor, including Id and SyncToken fields
 */
QuickBooks.prototype.updateVendor = promisify(QuickBooks.prototype.updateVendorOld)

/**
 * Updates QuickBooks version of VendorCredit
 *
 * @param  {object} vendorCredit - The persistent VendorCredit, including Id and SyncToken fields
 */
QuickBooks.prototype.updateVendorCredit = promisify(QuickBooks.prototype.updateVendorCreditOld)

/**
 * Updates QuickBooks version of ExchangeRate
 *
 * @param  {object} exchangeRate - The persistent ExchangeRate, including Id and SyncToken fields
 */
QuickBooks.prototype.updateExchangeRate = promisify(QuickBooks.prototype.updateExchangeRateOld)

/**
 * Deletes the Attachable from QuickBooks
 *
 * @param  {object} idOrEntity - The persistent Attachable to be deleted, or the Id of the Attachable, in which case an extra GET request will be issued to first retrieve the Attachable
 */
QuickBooks.prototype.deleteAttachable = promisify(QuickBooks.prototype.deleteAttachableOld)

/**
 * Deletes the Bill from QuickBooks
 *
 * @param  {object} idOrEntity - The persistent Bill to be deleted, or the Id of the Bill, in which case an extra GET request will be issued to first retrieve the Bill
 */
QuickBooks.prototype.deleteBill = promisify(QuickBooks.prototype.deleteBillOld)

/**
 * Deletes the BillPayment from QuickBooks
 *
 * @param  {object} idOrEntity - The persistent BillPayment to be deleted, or the Id of the BillPayment, in which case an extra GET request will be issued to first retrieve the BillPayment
 */
QuickBooks.prototype.deleteBillPayment = promisify(QuickBooks.prototype.deleteBillPaymentOld)

/**
 * Deletes the CreditMemo from QuickBooks
 *
 * @param  {object} idOrEntity - The persistent CreditMemo to be deleted, or the Id of the CreditMemo, in which case an extra GET request will be issued to first retrieve the CreditMemo
 */
QuickBooks.prototype.deleteCreditMemo = promisify(QuickBooks.prototype.deleteCreditMemoOld)

/**
 * Deletes the Deposit from QuickBooks
 *
 * @param  {object} idOrEntity - The persistent Deposit to be deleted, or the Id of the Deposit, in which case an extra GET request will be issued to first retrieve the Deposit
 */
QuickBooks.prototype.deleteDeposit = promisify(QuickBooks.prototype.deleteDepositOld)

/**
 * Deletes the Estimate from QuickBooks
 *
 * @param  {object} idOrEntity - The persistent Estimate to be deleted, or the Id of the Estimate, in which case an extra GET request will be issued to first retrieve the Estimate
 */
QuickBooks.prototype.deleteEstimate = promisify(QuickBooks.prototype.deleteEstimateOld)

/**
 * Deletes the Invoice from QuickBooks
 *
 * @param  {object} idOrEntity - The persistent Invoice to be deleted, or the Id of the Invoice, in which case an extra GET request will be issued to first retrieve the Invoice
 */
QuickBooks.prototype.deleteInvoice = promisify(QuickBooks.prototype.deleteInvoiceOld)

/**
 * Deletes the JournalCode from QuickBooks
 *
 * @param  {object} idOrEntity - The persistent JournalCode to be deleted, or the Id of the JournalCode, in which case an extra GET request will be issued to first retrieve the JournalCode
 */
QuickBooks.prototype.deleteJournalCode = promisify(QuickBooks.prototype.deleteJournalCodeOld)

/**
 * Deletes the JournalEntry from QuickBooks
 *
 * @param  {object} idOrEntity - The persistent JournalEntry to be deleted, or the Id of the JournalEntry, in which case an extra GET request will be issued to first retrieve the JournalEntry
 */
QuickBooks.prototype.deleteJournalEntry = promisify(QuickBooks.prototype.deleteJournalEntryOld)

/**
 * Deletes the Payment from QuickBooks
 *
 * @param  {object} idOrEntity - The persistent Payment to be deleted, or the Id of the Payment, in which case an extra GET request will be issued to first retrieve the Payment
 */
QuickBooks.prototype.deletePayment = promisify(QuickBooks.prototype.deletePaymentOld)

/**
 * Deletes the Purchase from QuickBooks
 *
 * @param  {object} idOrEntity - The persistent Purchase to be deleted, or the Id of the Purchase, in which case an extra GET request will be issued to first retrieve the Purchase
 */
QuickBooks.prototype.deletePurchase = promisify(QuickBooks.prototype.deletePurchaseOld)

/**
 * Deletes the PurchaseOrder from QuickBooks
 *
 * @param  {object} idOrEntity - The persistent PurchaseOrder to be deleted, or the Id of the PurchaseOrder, in which case an extra GET request will be issued to first retrieve the PurchaseOrder
 */
QuickBooks.prototype.deletePurchaseOrder = promisify(QuickBooks.prototype.deletePurchaseOrderOld)

/**
 * Deletes the RefundReceipt from QuickBooks
 *
 * @param  {object} idOrEntity - The persistent RefundReceipt to be deleted, or the Id of the RefundReceipt, in which case an extra GET request will be issued to first retrieve the RefundReceipt
 */
QuickBooks.prototype.deleteRefundReceipt = promisify(QuickBooks.prototype.deleteRefundReceiptOld)

/**
 * Deletes the SalesReceipt from QuickBooks
 *
 * @param  {object} idOrEntity - The persistent SalesReceipt to be deleted, or the Id of the SalesReceipt, in which case an extra GET request will be issued to first retrieve the SalesReceipt
 */
QuickBooks.prototype.deleteSalesReceipt = promisify(QuickBooks.prototype.deleteSalesReceiptOld)

/**
 * Deletes the TimeActivity from QuickBooks
 *
 * @param  {object} idOrEntity - The persistent TimeActivity to be deleted, or the Id of the TimeActivity, in which case an extra GET request will be issued to first retrieve the TimeActivity
 */
QuickBooks.prototype.deleteTimeActivity = promisify(QuickBooks.prototype.deleteTimeActivityOld)

/**
 * Deletes the Transfer from QuickBooks
 *
 * @param  {object} idOrEntity - The persistent Transfer to be deleted, or the Id of the Transfer, in which case an extra GET request will be issued to first retrieve the Transfer
 */
QuickBooks.prototype.deleteTransfer = promisify(QuickBooks.prototype.deleteTransferOld)

/**
 * Deletes the VendorCredit from QuickBooks
 *
 * @param  {object} idOrEntity - The persistent VendorCredit to be deleted, or the Id of the VendorCredit, in which case an extra GET request will be issued to first retrieve the VendorCredit
 */
QuickBooks.prototype.deleteVendorCredit = promisify(QuickBooks.prototype.deleteVendorCreditOld)

/**
 * Voids the Invoice from QuickBooks
 *
 * @param  {object} idOrEntity - The persistent Invoice to be voided, or the Id of the Invoice, in which case an extra GET request will be issued to first retrieve the Invoice
 */
QuickBooks.prototype.voidInvoice = promisify(QuickBooks.prototype.voidInvoiceOld)

/**
 * Voids QuickBooks version of Payment
 *
 * @param  {object} payment - The persistent Payment, including Id and SyncToken fields
 */
QuickBooks.prototype.voidPayment = promisify(QuickBooks.prototype.voidPaymentOld)

/**
 * Finds all Accounts in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findAccounts = promisify(QuickBooks.prototype.findAccountsOld)

/**
 * Finds all Attachables in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findAttachables = promisify(QuickBooks.prototype.findAttachablesOld)

/**
 * Finds all Bills in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findBills = promisify(QuickBooks.prototype.findBillsOld)

/**
 * Finds all BillPayments in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findBillPayments = promisify(QuickBooks.prototype.findBillPaymentsOld)

/**
 * Finds all Budgets in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findBudgets = promisify(QuickBooks.prototype.findBudgetsOld)

/**
 * Finds all Classs in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findClasses = promisify(QuickBooks.prototype.findClassesOld)

/**
 * Finds all CompanyInfos in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findCompanyInfos = promisify(QuickBooks.prototype.findCompanyInfosOld)

/**
 * Finds all CreditMemos in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findCreditMemos = promisify(QuickBooks.prototype.findCreditMemosOld)

/**
 * Finds all Customers in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findCustomers = promisify(QuickBooks.prototype.findCustomersOld)

/**
 * Finds all Departments in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findDepartments = promisify(QuickBooks.prototype.findDepartmentsOld)

/**
 * Finds all Deposits in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findDeposits = promisify(QuickBooks.prototype.findDepositsOld)

/**
 * Finds all Employees in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findEmployees = promisify(QuickBooks.prototype.findEmployeesOld)

/**
 * Finds all Estimates in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findEstimates = promisify(QuickBooks.prototype.findEstimatesOld)

/**
 * Finds all Invoices in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findInvoices = promisify(QuickBooks.prototype.findInvoicesOld)

/**
 * Finds all Items in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findItems = promisify(QuickBooks.prototype.findItemsOld)

/**
 * Finds all JournalCodes in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findJournalCodes = promisify(QuickBooks.prototype.findJournalCodesOld)

/**
 * Finds all JournalEntrys in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findJournalEntries = promisify(QuickBooks.prototype.findJournalEntriesOld)

/**
 * Finds all Payments in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findPayments = promisify(QuickBooks.prototype.findPaymentsOld)

/**
 * Finds all PaymentMethods in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findPaymentMethods = promisify(QuickBooks.prototype.findPaymentMethodsOld)

/**
 * Finds all Preferencess in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findPreferenceses = promisify(QuickBooks.prototype.findPreferencesesOld)

/**
 * Finds all Purchases in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findPurchases = promisify(QuickBooks.prototype.findPurchasesOld)

/**
 * Finds all PurchaseOrders in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findPurchaseOrders = promisify(QuickBooks.prototype.findPurchaseOrdersOld)

/**
 * Finds all RefundReceipts in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findRefundReceipts = promisify(QuickBooks.prototype.findRefundReceiptsOld)

/**
 * Finds all SalesReceipts in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findSalesReceipts = promisify(QuickBooks.prototype.findSalesReceiptsOld)

/**
 * Finds all TaxAgencys in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findTaxAgencies = promisify(QuickBooks.prototype.findTaxAgenciesOld)

/**
 * Finds all TaxCodes in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findTaxCodes = promisify(QuickBooks.prototype.findTaxCodesOld)

/**
 * Finds all TaxRates in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findTaxRates = promisify(QuickBooks.prototype.findTaxRatesOld)

/**
 * Finds all Terms in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findTerms = promisify(QuickBooks.prototype.findTermsOld)

/**
 * Finds all TimeActivitys in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findTimeActivities = promisify(QuickBooks.prototype.findTimeActivitiesOld)

/**
 * Finds all Transfers in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findTransfers = promisify(QuickBooks.prototype.findTransfersOld)

/**
 * Finds all Vendors in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findVendors = promisify(QuickBooks.prototype.findVendorsOld)

/**
 * Finds all VendorCredits in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findVendorCredits = promisify(QuickBooks.prototype.findVendorCreditsOld)

/**
 * Finds all ExchangeRates in QuickBooks, optionally matching the specified criteria
 *
 * @param  {object} criteria - (Optional) String or single-valued map converted to a where clause of the form "where key = 'value'"
 */
QuickBooks.prototype.findExchangeRates = promisify(QuickBooks.prototype.findExchangeRatesOld)

/**
 * Retrieves the BalanceSheet Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportBalanceSheet = promisify(QuickBooks.prototype.reportBalanceSheetOld)

/**
 * Retrieves the ProfitAndLoss Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportProfitAndLoss = promisify(QuickBooks.prototype.reportProfitAndLossOld)

/**
 * Retrieves the ProfitAndLossDetail Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportProfitAndLossDetail = promisify(QuickBooks.prototype.reportProfitAndLossDetailOld)

/**
 * Retrieves the TrialBalance Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportTrialBalance = promisify(QuickBooks.prototype.reportTrialBalanceOld)

/**
 * Retrieves the CashFlow Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportCashFlow = promisify(QuickBooks.prototype.reportCashFlowOld)

/**
 * Retrieves the CustomerSales Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportCustomerSales = promisify(QuickBooks.prototype.reportCustomerSalesOld)

/**
 * Retrieves the ItemSales Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportItemSales = promisify(QuickBooks.prototype.reportItemSalesOld)

/**
 * Retrieves the CustomerIncome Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportCustomerIncome = promisify(QuickBooks.prototype.reportCustomerIncomeOld)

/**
 * Retrieves the CustomerBalance Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportCustomerBalance = promisify(QuickBooks.prototype.reportCustomerBalanceOld)

/**
 * Retrieves the CustomerBalanceDetail Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportCustomerBalanceDetail = promisify(QuickBooks.prototype.reportCustomerBalanceDetailOld)

/**
 * Retrieves the AgedReceivables Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportAgedReceivables = promisify(QuickBooks.prototype.reportAgedReceivablesOld)

/**
 * Retrieves the AgedReceivableDetail Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportAgedReceivableDetail = promisify(QuickBooks.prototype.reportAgedReceivableDetailOld)

/**
 * Retrieves the VendorBalance Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportVendorBalance = promisify(QuickBooks.prototype.reportVendorBalanceOld)

/**
 * Retrieves the VendorBalanceDetail Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportVendorBalanceDetail = promisify(QuickBooks.prototype.reportVendorBalanceDetailOld)

/**
 * Retrieves the AgedPayables Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportAgedPayables = promisify(QuickBooks.prototype.reportAgedPayablesOld)

/**
 * Retrieves the AgedPayableDetail Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportAgedPayableDetail = promisify(QuickBooks.prototype.reportAgedPayableDetailOld)

/**
 * Retrieves the VendorExpenses Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportVendorExpenses = promisify(QuickBooks.prototype.reportVendorExpensesOld)

/**
 * Retrieves the TransactionList Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportTransactionList = promisify(QuickBooks.prototype.reportTransactionListOld)

/**
 * Retrieves the GeneralLedgerDetail Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportGeneralLedgerDetail = promisify(QuickBooks.prototype.reportGeneralLedgerDetailOld)

/**
 * Retrieves the TaxSummary Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportTaxSummary = promisify(QuickBooks.prototype.reportTaxSummaryOld)

/**
 * Retrieves the DepartmentSales Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportDepartmentSales = promisify(QuickBooks.prototype.reportDepartmentSalesOld)

/**
 * Retrieves the ClassSales Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportClassSales = promisify(QuickBooks.prototype.reportClassSalesOld)

/**
 * Retrieves the AccountListDetail Report from QuickBooks
 *
 * @param  {object} options - (Optional) Map of key-value pairs passed as options to the Report
 */
QuickBooks.prototype.reportAccountListDetail = promisify(QuickBooks.prototype.reportAccountListDetailOld)


QuickBooks.prototype.reconnect = promisify(QuickBooks.prototype.reconnectOld)


QuickBooks.prototype.disconnect = promisify(QuickBooks.prototype.disconnectOld)
//#endregion
module.exports = QuickBooks