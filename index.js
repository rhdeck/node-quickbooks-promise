const { promisify } = require("utils")
const QuickBooks = require("node-quickbooks")

QuickBooks.prototype.refreshAccessTokenOld = QuickBooks.prototype.refreshAccessToken
QuickBooks.prototype.refreshAccessToken = promisify(QuickBooks.prototype.refreshAccessTokenOld)

QuickBooks.prototype.revokeAccessOld = QuickBooks.prototype.revokeAccess
QuickBooks.prototype.revokeAccess = promisify(QuickBooks.prototype.revokeAccessOld)

QuickBooks.prototype.getUserInfoOld = QuickBooks.prototype.getUserInfo
QuickBooks.prototype.getUserInfo = promisify(QuickBooks.prototype.getUserInfoOld)

QuickBooks.prototype.batchOld = QuickBooks.prototype.batch
QuickBooks.prototype.batch = promisify(QuickBooks.prototype.batchOld)

QuickBooks.prototype.changeDataCaptureOld = QuickBooks.prototype.changeDataCapture
QuickBooks.prototype.changeDataCapture = promisify(QuickBooks.prototype.changeDataCaptureOld)

QuickBooks.prototype.uploadOld = QuickBooks.prototype.upload
QuickBooks.prototype.upload = promisify(QuickBooks.prototype.uploadOld)

QuickBooks.prototype.createAccountOld = QuickBooks.prototype.createAccount
QuickBooks.prototype.createAccount = promisify(QuickBooks.prototype.createAccountOld)

QuickBooks.prototype.createAttachableOld = QuickBooks.prototype.createAttachable
QuickBooks.prototype.createAttachable = promisify(QuickBooks.prototype.createAttachableOld)

QuickBooks.prototype.createBillOld = QuickBooks.prototype.createBill
QuickBooks.prototype.createBill = promisify(QuickBooks.prototype.createBillOld)

QuickBooks.prototype.createBillPaymentOld = QuickBooks.prototype.createBillPayment
QuickBooks.prototype.createBillPayment = promisify(QuickBooks.prototype.createBillPaymentOld)

QuickBooks.prototype.createClassOld = QuickBooks.prototype.createClass
QuickBooks.prototype.createClass = promisify(QuickBooks.prototype.createClassOld)

QuickBooks.prototype.createCreditMemoOld = QuickBooks.prototype.createCreditMemo
QuickBooks.prototype.createCreditMemo = promisify(QuickBooks.prototype.createCreditMemoOld)

QuickBooks.prototype.createCustomerOld = QuickBooks.prototype.createCustomer
QuickBooks.prototype.createCustomer = promisify(QuickBooks.prototype.createCustomerOld)

QuickBooks.prototype.createDepartmentOld = QuickBooks.prototype.createDepartment
QuickBooks.prototype.createDepartment = promisify(QuickBooks.prototype.createDepartmentOld)

QuickBooks.prototype.createDepositOld = QuickBooks.prototype.createDeposit
QuickBooks.prototype.createDeposit = promisify(QuickBooks.prototype.createDepositOld)

QuickBooks.prototype.createEmployeeOld = QuickBooks.prototype.createEmployee
QuickBooks.prototype.createEmployee = promisify(QuickBooks.prototype.createEmployeeOld)

QuickBooks.prototype.createEstimateOld = QuickBooks.prototype.createEstimate
QuickBooks.prototype.createEstimate = promisify(QuickBooks.prototype.createEstimateOld)

QuickBooks.prototype.createInvoiceOld = QuickBooks.prototype.createInvoice
QuickBooks.prototype.createInvoice = promisify(QuickBooks.prototype.createInvoiceOld)

QuickBooks.prototype.createItemOld = QuickBooks.prototype.createItem
QuickBooks.prototype.createItem = promisify(QuickBooks.prototype.createItemOld)

QuickBooks.prototype.createJournalCodeOld = QuickBooks.prototype.createJournalCode
QuickBooks.prototype.createJournalCode = promisify(QuickBooks.prototype.createJournalCodeOld)

QuickBooks.prototype.createJournalEntryOld = QuickBooks.prototype.createJournalEntry
QuickBooks.prototype.createJournalEntry = promisify(QuickBooks.prototype.createJournalEntryOld)

QuickBooks.prototype.createPaymentOld = QuickBooks.prototype.createPayment
QuickBooks.prototype.createPayment = promisify(QuickBooks.prototype.createPaymentOld)

QuickBooks.prototype.createPaymentMethodOld = QuickBooks.prototype.createPaymentMethod
QuickBooks.prototype.createPaymentMethod = promisify(QuickBooks.prototype.createPaymentMethodOld)

QuickBooks.prototype.createPurchaseOld = QuickBooks.prototype.createPurchase
QuickBooks.prototype.createPurchase = promisify(QuickBooks.prototype.createPurchaseOld)

QuickBooks.prototype.createPurchaseOrderOld = QuickBooks.prototype.createPurchaseOrder
QuickBooks.prototype.createPurchaseOrder = promisify(QuickBooks.prototype.createPurchaseOrderOld)

QuickBooks.prototype.createRefundReceiptOld = QuickBooks.prototype.createRefundReceipt
QuickBooks.prototype.createRefundReceipt = promisify(QuickBooks.prototype.createRefundReceiptOld)

QuickBooks.prototype.createSalesReceiptOld = QuickBooks.prototype.createSalesReceipt
QuickBooks.prototype.createSalesReceipt = promisify(QuickBooks.prototype.createSalesReceiptOld)

QuickBooks.prototype.createTaxAgencyOld = QuickBooks.prototype.createTaxAgency
QuickBooks.prototype.createTaxAgency = promisify(QuickBooks.prototype.createTaxAgencyOld)

QuickBooks.prototype.createTaxServiceOld = QuickBooks.prototype.createTaxService
QuickBooks.prototype.createTaxService = promisify(QuickBooks.prototype.createTaxServiceOld)

QuickBooks.prototype.createTermOld = QuickBooks.prototype.createTerm
QuickBooks.prototype.createTerm = promisify(QuickBooks.prototype.createTermOld)

QuickBooks.prototype.createTimeActivityOld = QuickBooks.prototype.createTimeActivity
QuickBooks.prototype.createTimeActivity = promisify(QuickBooks.prototype.createTimeActivityOld)

QuickBooks.prototype.createTransferOld = QuickBooks.prototype.createTransfer
QuickBooks.prototype.createTransfer = promisify(QuickBooks.prototype.createTransferOld)

QuickBooks.prototype.createVendorOld = QuickBooks.prototype.createVendor
QuickBooks.prototype.createVendor = promisify(QuickBooks.prototype.createVendorOld)

QuickBooks.prototype.createVendorCreditOld = QuickBooks.prototype.createVendorCredit
QuickBooks.prototype.createVendorCredit = promisify(QuickBooks.prototype.createVendorCreditOld)

QuickBooks.prototype.getAccountOld = QuickBooks.prototype.getAccount
QuickBooks.prototype.getAccount = promisify(QuickBooks.prototype.getAccountOld)

QuickBooks.prototype.getAttachableOld = QuickBooks.prototype.getAttachable
QuickBooks.prototype.getAttachable = promisify(QuickBooks.prototype.getAttachableOld)

QuickBooks.prototype.getBillOld = QuickBooks.prototype.getBill
QuickBooks.prototype.getBill = promisify(QuickBooks.prototype.getBillOld)

QuickBooks.prototype.getBillPaymentOld = QuickBooks.prototype.getBillPayment
QuickBooks.prototype.getBillPayment = promisify(QuickBooks.prototype.getBillPaymentOld)

QuickBooks.prototype.getClassOld = QuickBooks.prototype.getClass
QuickBooks.prototype.getClass = promisify(QuickBooks.prototype.getClassOld)

QuickBooks.prototype.getCompanyInfoOld = QuickBooks.prototype.getCompanyInfo
QuickBooks.prototype.getCompanyInfo = promisify(QuickBooks.prototype.getCompanyInfoOld)

QuickBooks.prototype.getCreditMemoOld = QuickBooks.prototype.getCreditMemo
QuickBooks.prototype.getCreditMemo = promisify(QuickBooks.prototype.getCreditMemoOld)

QuickBooks.prototype.getCustomerOld = QuickBooks.prototype.getCustomer
QuickBooks.prototype.getCustomer = promisify(QuickBooks.prototype.getCustomerOld)

QuickBooks.prototype.getDepartmentOld = QuickBooks.prototype.getDepartment
QuickBooks.prototype.getDepartment = promisify(QuickBooks.prototype.getDepartmentOld)

QuickBooks.prototype.getDepositOld = QuickBooks.prototype.getDeposit
QuickBooks.prototype.getDeposit = promisify(QuickBooks.prototype.getDepositOld)

QuickBooks.prototype.getEmployeeOld = QuickBooks.prototype.getEmployee
QuickBooks.prototype.getEmployee = promisify(QuickBooks.prototype.getEmployeeOld)

QuickBooks.prototype.getEstimateOld = QuickBooks.prototype.getEstimate
QuickBooks.prototype.getEstimate = promisify(QuickBooks.prototype.getEstimateOld)

QuickBooks.prototype.getExchangeRateOld = QuickBooks.prototype.getExchangeRate
QuickBooks.prototype.getExchangeRate = promisify(QuickBooks.prototype.getExchangeRateOld)

QuickBooks.prototype.getEstimatePdfOld = QuickBooks.prototype.getEstimatePdf
QuickBooks.prototype.getEstimatePdf = promisify(QuickBooks.prototype.getEstimatePdfOld)

QuickBooks.prototype.sendEstimatePdfOld = QuickBooks.prototype.sendEstimatePdf
QuickBooks.prototype.sendEstimatePdf = promisify(QuickBooks.prototype.sendEstimatePdfOld)

QuickBooks.prototype.getInvoiceOld = QuickBooks.prototype.getInvoice
QuickBooks.prototype.getInvoice = promisify(QuickBooks.prototype.getInvoiceOld)

QuickBooks.prototype.getInvoicePdfOld = QuickBooks.prototype.getInvoicePdf
QuickBooks.prototype.getInvoicePdf = promisify(QuickBooks.prototype.getInvoicePdfOld)

QuickBooks.prototype.sendInvoicePdfOld = QuickBooks.prototype.sendInvoicePdf
QuickBooks.prototype.sendInvoicePdf = promisify(QuickBooks.prototype.sendInvoicePdfOld)

QuickBooks.prototype.getItemOld = QuickBooks.prototype.getItem
QuickBooks.prototype.getItem = promisify(QuickBooks.prototype.getItemOld)

QuickBooks.prototype.getJournalCodeOld = QuickBooks.prototype.getJournalCode
QuickBooks.prototype.getJournalCode = promisify(QuickBooks.prototype.getJournalCodeOld)

QuickBooks.prototype.getJournalEntryOld = QuickBooks.prototype.getJournalEntry
QuickBooks.prototype.getJournalEntry = promisify(QuickBooks.prototype.getJournalEntryOld)

QuickBooks.prototype.getPaymentOld = QuickBooks.prototype.getPayment
QuickBooks.prototype.getPayment = promisify(QuickBooks.prototype.getPaymentOld)

QuickBooks.prototype.getPaymentMethodOld = QuickBooks.prototype.getPaymentMethod
QuickBooks.prototype.getPaymentMethod = promisify(QuickBooks.prototype.getPaymentMethodOld)

QuickBooks.prototype.getPreferencesOld = QuickBooks.prototype.getPreferences
QuickBooks.prototype.getPreferences = promisify(QuickBooks.prototype.getPreferencesOld)

QuickBooks.prototype.getPurchaseOld = QuickBooks.prototype.getPurchase
QuickBooks.prototype.getPurchase = promisify(QuickBooks.prototype.getPurchaseOld)

QuickBooks.prototype.getPurchaseOrderOld = QuickBooks.prototype.getPurchaseOrder
QuickBooks.prototype.getPurchaseOrder = promisify(QuickBooks.prototype.getPurchaseOrderOld)

QuickBooks.prototype.getRefundReceiptOld = QuickBooks.prototype.getRefundReceipt
QuickBooks.prototype.getRefundReceipt = promisify(QuickBooks.prototype.getRefundReceiptOld)

QuickBooks.prototype.getReportsOld = QuickBooks.prototype.getReports
QuickBooks.prototype.getReports = promisify(QuickBooks.prototype.getReportsOld)

QuickBooks.prototype.getSalesReceiptOld = QuickBooks.prototype.getSalesReceipt
QuickBooks.prototype.getSalesReceipt = promisify(QuickBooks.prototype.getSalesReceiptOld)

QuickBooks.prototype.getSalesReceiptPdfOld = QuickBooks.prototype.getSalesReceiptPdf
QuickBooks.prototype.getSalesReceiptPdf = promisify(QuickBooks.prototype.getSalesReceiptPdfOld)

QuickBooks.prototype.sendSalesReceiptPdfOld = QuickBooks.prototype.sendSalesReceiptPdf
QuickBooks.prototype.sendSalesReceiptPdf = promisify(QuickBooks.prototype.sendSalesReceiptPdfOld)

QuickBooks.prototype.getTaxAgencyOld = QuickBooks.prototype.getTaxAgency
QuickBooks.prototype.getTaxAgency = promisify(QuickBooks.prototype.getTaxAgencyOld)

QuickBooks.prototype.getTaxCodeOld = QuickBooks.prototype.getTaxCode
QuickBooks.prototype.getTaxCode = promisify(QuickBooks.prototype.getTaxCodeOld)

QuickBooks.prototype.getTaxRateOld = QuickBooks.prototype.getTaxRate
QuickBooks.prototype.getTaxRate = promisify(QuickBooks.prototype.getTaxRateOld)

QuickBooks.prototype.getTermOld = QuickBooks.prototype.getTerm
QuickBooks.prototype.getTerm = promisify(QuickBooks.prototype.getTermOld)

QuickBooks.prototype.getTimeActivityOld = QuickBooks.prototype.getTimeActivity
QuickBooks.prototype.getTimeActivity = promisify(QuickBooks.prototype.getTimeActivityOld)

QuickBooks.prototype.getTransferOld = QuickBooks.prototype.getTransfer
QuickBooks.prototype.getTransfer = promisify(QuickBooks.prototype.getTransferOld)

QuickBooks.prototype.getVendorOld = QuickBooks.prototype.getVendor
QuickBooks.prototype.getVendor = promisify(QuickBooks.prototype.getVendorOld)

QuickBooks.prototype.getVendorCreditOld = QuickBooks.prototype.getVendorCredit
QuickBooks.prototype.getVendorCredit = promisify(QuickBooks.prototype.getVendorCreditOld)

QuickBooks.prototype.updateAccountOld = QuickBooks.prototype.updateAccount
QuickBooks.prototype.updateAccount = promisify(QuickBooks.prototype.updateAccountOld)

QuickBooks.prototype.updateAttachableOld = QuickBooks.prototype.updateAttachable
QuickBooks.prototype.updateAttachable = promisify(QuickBooks.prototype.updateAttachableOld)

QuickBooks.prototype.updateBillOld = QuickBooks.prototype.updateBill
QuickBooks.prototype.updateBill = promisify(QuickBooks.prototype.updateBillOld)

QuickBooks.prototype.updateBillPaymentOld = QuickBooks.prototype.updateBillPayment
QuickBooks.prototype.updateBillPayment = promisify(QuickBooks.prototype.updateBillPaymentOld)

QuickBooks.prototype.updateClassOld = QuickBooks.prototype.updateClass
QuickBooks.prototype.updateClass = promisify(QuickBooks.prototype.updateClassOld)

QuickBooks.prototype.updateCompanyInfoOld = QuickBooks.prototype.updateCompanyInfo
QuickBooks.prototype.updateCompanyInfo = promisify(QuickBooks.prototype.updateCompanyInfoOld)

QuickBooks.prototype.updateCreditMemoOld = QuickBooks.prototype.updateCreditMemo
QuickBooks.prototype.updateCreditMemo = promisify(QuickBooks.prototype.updateCreditMemoOld)

QuickBooks.prototype.updateCustomerOld = QuickBooks.prototype.updateCustomer
QuickBooks.prototype.updateCustomer = promisify(QuickBooks.prototype.updateCustomerOld)

QuickBooks.prototype.updateDepartmentOld = QuickBooks.prototype.updateDepartment
QuickBooks.prototype.updateDepartment = promisify(QuickBooks.prototype.updateDepartmentOld)

QuickBooks.prototype.updateDepositOld = QuickBooks.prototype.updateDeposit
QuickBooks.prototype.updateDeposit = promisify(QuickBooks.prototype.updateDepositOld)

QuickBooks.prototype.updateEmployeeOld = QuickBooks.prototype.updateEmployee
QuickBooks.prototype.updateEmployee = promisify(QuickBooks.prototype.updateEmployeeOld)

QuickBooks.prototype.updateEstimateOld = QuickBooks.prototype.updateEstimate
QuickBooks.prototype.updateEstimate = promisify(QuickBooks.prototype.updateEstimateOld)

QuickBooks.prototype.updateInvoiceOld = QuickBooks.prototype.updateInvoice
QuickBooks.prototype.updateInvoice = promisify(QuickBooks.prototype.updateInvoiceOld)

QuickBooks.prototype.updateItemOld = QuickBooks.prototype.updateItem
QuickBooks.prototype.updateItem = promisify(QuickBooks.prototype.updateItemOld)

QuickBooks.prototype.updateJournalCodeOld = QuickBooks.prototype.updateJournalCode
QuickBooks.prototype.updateJournalCode = promisify(QuickBooks.prototype.updateJournalCodeOld)

QuickBooks.prototype.updateJournalEntryOld = QuickBooks.prototype.updateJournalEntry
QuickBooks.prototype.updateJournalEntry = promisify(QuickBooks.prototype.updateJournalEntryOld)

QuickBooks.prototype.updatePaymentOld = QuickBooks.prototype.updatePayment
QuickBooks.prototype.updatePayment = promisify(QuickBooks.prototype.updatePaymentOld)

QuickBooks.prototype.updatePaymentMethodOld = QuickBooks.prototype.updatePaymentMethod
QuickBooks.prototype.updatePaymentMethod = promisify(QuickBooks.prototype.updatePaymentMethodOld)

QuickBooks.prototype.updatePreferencesOld = QuickBooks.prototype.updatePreferences
QuickBooks.prototype.updatePreferences = promisify(QuickBooks.prototype.updatePreferencesOld)

QuickBooks.prototype.updatePurchaseOld = QuickBooks.prototype.updatePurchase
QuickBooks.prototype.updatePurchase = promisify(QuickBooks.prototype.updatePurchaseOld)

QuickBooks.prototype.updatePurchaseOrderOld = QuickBooks.prototype.updatePurchaseOrder
QuickBooks.prototype.updatePurchaseOrder = promisify(QuickBooks.prototype.updatePurchaseOrderOld)

QuickBooks.prototype.updateRefundReceiptOld = QuickBooks.prototype.updateRefundReceipt
QuickBooks.prototype.updateRefundReceipt = promisify(QuickBooks.prototype.updateRefundReceiptOld)

QuickBooks.prototype.updateSalesReceiptOld = QuickBooks.prototype.updateSalesReceipt
QuickBooks.prototype.updateSalesReceipt = promisify(QuickBooks.prototype.updateSalesReceiptOld)

QuickBooks.prototype.updateTaxAgencyOld = QuickBooks.prototype.updateTaxAgency
QuickBooks.prototype.updateTaxAgency = promisify(QuickBooks.prototype.updateTaxAgencyOld)

QuickBooks.prototype.updateTaxCodeOld = QuickBooks.prototype.updateTaxCode
QuickBooks.prototype.updateTaxCode = promisify(QuickBooks.prototype.updateTaxCodeOld)

QuickBooks.prototype.updateTaxRateOld = QuickBooks.prototype.updateTaxRate
QuickBooks.prototype.updateTaxRate = promisify(QuickBooks.prototype.updateTaxRateOld)

QuickBooks.prototype.updateTermOld = QuickBooks.prototype.updateTerm
QuickBooks.prototype.updateTerm = promisify(QuickBooks.prototype.updateTermOld)

QuickBooks.prototype.updateTimeActivityOld = QuickBooks.prototype.updateTimeActivity
QuickBooks.prototype.updateTimeActivity = promisify(QuickBooks.prototype.updateTimeActivityOld)

QuickBooks.prototype.updateTransferOld = QuickBooks.prototype.updateTransfer
QuickBooks.prototype.updateTransfer = promisify(QuickBooks.prototype.updateTransferOld)

QuickBooks.prototype.updateVendorOld = QuickBooks.prototype.updateVendor
QuickBooks.prototype.updateVendor = promisify(QuickBooks.prototype.updateVendorOld)

QuickBooks.prototype.updateVendorCreditOld = QuickBooks.prototype.updateVendorCredit
QuickBooks.prototype.updateVendorCredit = promisify(QuickBooks.prototype.updateVendorCreditOld)

QuickBooks.prototype.updateExchangeRateOld = QuickBooks.prototype.updateExchangeRate
QuickBooks.prototype.updateExchangeRate = promisify(QuickBooks.prototype.updateExchangeRateOld)

QuickBooks.prototype.deleteAttachableOld = QuickBooks.prototype.deleteAttachable
QuickBooks.prototype.deleteAttachable = promisify(QuickBooks.prototype.deleteAttachableOld)

QuickBooks.prototype.deleteBillOld = QuickBooks.prototype.deleteBill
QuickBooks.prototype.deleteBill = promisify(QuickBooks.prototype.deleteBillOld)

QuickBooks.prototype.deleteBillPaymentOld = QuickBooks.prototype.deleteBillPayment
QuickBooks.prototype.deleteBillPayment = promisify(QuickBooks.prototype.deleteBillPaymentOld)

QuickBooks.prototype.deleteCreditMemoOld = QuickBooks.prototype.deleteCreditMemo
QuickBooks.prototype.deleteCreditMemo = promisify(QuickBooks.prototype.deleteCreditMemoOld)

QuickBooks.prototype.deleteDepositOld = QuickBooks.prototype.deleteDeposit
QuickBooks.prototype.deleteDeposit = promisify(QuickBooks.prototype.deleteDepositOld)

QuickBooks.prototype.deleteEstimateOld = QuickBooks.prototype.deleteEstimate
QuickBooks.prototype.deleteEstimate = promisify(QuickBooks.prototype.deleteEstimateOld)

QuickBooks.prototype.deleteInvoiceOld = QuickBooks.prototype.deleteInvoice
QuickBooks.prototype.deleteInvoice = promisify(QuickBooks.prototype.deleteInvoiceOld)

QuickBooks.prototype.deleteJournalCodeOld = QuickBooks.prototype.deleteJournalCode
QuickBooks.prototype.deleteJournalCode = promisify(QuickBooks.prototype.deleteJournalCodeOld)

QuickBooks.prototype.deleteJournalEntryOld = QuickBooks.prototype.deleteJournalEntry
QuickBooks.prototype.deleteJournalEntry = promisify(QuickBooks.prototype.deleteJournalEntryOld)

QuickBooks.prototype.deletePaymentOld = QuickBooks.prototype.deletePayment
QuickBooks.prototype.deletePayment = promisify(QuickBooks.prototype.deletePaymentOld)

QuickBooks.prototype.deletePurchaseOld = QuickBooks.prototype.deletePurchase
QuickBooks.prototype.deletePurchase = promisify(QuickBooks.prototype.deletePurchaseOld)

QuickBooks.prototype.deletePurchaseOrderOld = QuickBooks.prototype.deletePurchaseOrder
QuickBooks.prototype.deletePurchaseOrder = promisify(QuickBooks.prototype.deletePurchaseOrderOld)

QuickBooks.prototype.deleteRefundReceiptOld = QuickBooks.prototype.deleteRefundReceipt
QuickBooks.prototype.deleteRefundReceipt = promisify(QuickBooks.prototype.deleteRefundReceiptOld)

QuickBooks.prototype.deleteSalesReceiptOld = QuickBooks.prototype.deleteSalesReceipt
QuickBooks.prototype.deleteSalesReceipt = promisify(QuickBooks.prototype.deleteSalesReceiptOld)

QuickBooks.prototype.deleteTimeActivityOld = QuickBooks.prototype.deleteTimeActivity
QuickBooks.prototype.deleteTimeActivity = promisify(QuickBooks.prototype.deleteTimeActivityOld)

QuickBooks.prototype.deleteTransferOld = QuickBooks.prototype.deleteTransfer
QuickBooks.prototype.deleteTransfer = promisify(QuickBooks.prototype.deleteTransferOld)

QuickBooks.prototype.deleteVendorCreditOld = QuickBooks.prototype.deleteVendorCredit
QuickBooks.prototype.deleteVendorCredit = promisify(QuickBooks.prototype.deleteVendorCreditOld)

QuickBooks.prototype.voidInvoiceOld = QuickBooks.prototype.voidInvoice
QuickBooks.prototype.voidInvoice = promisify(QuickBooks.prototype.voidInvoiceOld)

QuickBooks.prototype.voidPaymentOld = QuickBooks.prototype.voidPayment
QuickBooks.prototype.voidPayment = promisify(QuickBooks.prototype.voidPaymentOld)

QuickBooks.prototype.findAccountsOld = QuickBooks.prototype.findAccounts
QuickBooks.prototype.findAccounts = promisify(QuickBooks.prototype.findAccountsOld)

QuickBooks.prototype.findAttachablesOld = QuickBooks.prototype.findAttachables
QuickBooks.prototype.findAttachables = promisify(QuickBooks.prototype.findAttachablesOld)

QuickBooks.prototype.findBillsOld = QuickBooks.prototype.findBills
QuickBooks.prototype.findBills = promisify(QuickBooks.prototype.findBillsOld)

QuickBooks.prototype.findBillPaymentsOld = QuickBooks.prototype.findBillPayments
QuickBooks.prototype.findBillPayments = promisify(QuickBooks.prototype.findBillPaymentsOld)

QuickBooks.prototype.findBudgetsOld = QuickBooks.prototype.findBudgets
QuickBooks.prototype.findBudgets = promisify(QuickBooks.prototype.findBudgetsOld)

QuickBooks.prototype.findClassesOld = QuickBooks.prototype.findClasses
QuickBooks.prototype.findClasses = promisify(QuickBooks.prototype.findClassesOld)

QuickBooks.prototype.findCompanyInfosOld = QuickBooks.prototype.findCompanyInfos
QuickBooks.prototype.findCompanyInfos = promisify(QuickBooks.prototype.findCompanyInfosOld)

QuickBooks.prototype.findCreditMemosOld = QuickBooks.prototype.findCreditMemos
QuickBooks.prototype.findCreditMemos = promisify(QuickBooks.prototype.findCreditMemosOld)

QuickBooks.prototype.findCustomersOld = QuickBooks.prototype.findCustomers
QuickBooks.prototype.findCustomers = promisify(QuickBooks.prototype.findCustomersOld)

QuickBooks.prototype.findDepartmentsOld = QuickBooks.prototype.findDepartments
QuickBooks.prototype.findDepartments = promisify(QuickBooks.prototype.findDepartmentsOld)

QuickBooks.prototype.findDepositsOld = QuickBooks.prototype.findDeposits
QuickBooks.prototype.findDeposits = promisify(QuickBooks.prototype.findDepositsOld)

QuickBooks.prototype.findEmployeesOld = QuickBooks.prototype.findEmployees
QuickBooks.prototype.findEmployees = promisify(QuickBooks.prototype.findEmployeesOld)

QuickBooks.prototype.findEstimatesOld = QuickBooks.prototype.findEstimates
QuickBooks.prototype.findEstimates = promisify(QuickBooks.prototype.findEstimatesOld)

QuickBooks.prototype.findInvoicesOld = QuickBooks.prototype.findInvoices
QuickBooks.prototype.findInvoices = promisify(QuickBooks.prototype.findInvoicesOld)

QuickBooks.prototype.findItemsOld = QuickBooks.prototype.findItems
QuickBooks.prototype.findItems = promisify(QuickBooks.prototype.findItemsOld)

QuickBooks.prototype.findJournalCodesOld = QuickBooks.prototype.findJournalCodes
QuickBooks.prototype.findJournalCodes = promisify(QuickBooks.prototype.findJournalCodesOld)

QuickBooks.prototype.findJournalEntriesOld = QuickBooks.prototype.findJournalEntries
QuickBooks.prototype.findJournalEntries = promisify(QuickBooks.prototype.findJournalEntriesOld)

QuickBooks.prototype.findPaymentsOld = QuickBooks.prototype.findPayments
QuickBooks.prototype.findPayments = promisify(QuickBooks.prototype.findPaymentsOld)

QuickBooks.prototype.findPaymentMethodsOld = QuickBooks.prototype.findPaymentMethods
QuickBooks.prototype.findPaymentMethods = promisify(QuickBooks.prototype.findPaymentMethodsOld)

QuickBooks.prototype.findPreferencesesOld = QuickBooks.prototype.findPreferenceses
QuickBooks.prototype.findPreferenceses = promisify(QuickBooks.prototype.findPreferencesesOld)

QuickBooks.prototype.findPurchasesOld = QuickBooks.prototype.findPurchases
QuickBooks.prototype.findPurchases = promisify(QuickBooks.prototype.findPurchasesOld)

QuickBooks.prototype.findPurchaseOrdersOld = QuickBooks.prototype.findPurchaseOrders
QuickBooks.prototype.findPurchaseOrders = promisify(QuickBooks.prototype.findPurchaseOrdersOld)

QuickBooks.prototype.findRefundReceiptsOld = QuickBooks.prototype.findRefundReceipts
QuickBooks.prototype.findRefundReceipts = promisify(QuickBooks.prototype.findRefundReceiptsOld)

QuickBooks.prototype.findSalesReceiptsOld = QuickBooks.prototype.findSalesReceipts
QuickBooks.prototype.findSalesReceipts = promisify(QuickBooks.prototype.findSalesReceiptsOld)

QuickBooks.prototype.findTaxAgenciesOld = QuickBooks.prototype.findTaxAgencies
QuickBooks.prototype.findTaxAgencies = promisify(QuickBooks.prototype.findTaxAgenciesOld)

QuickBooks.prototype.findTaxCodesOld = QuickBooks.prototype.findTaxCodes
QuickBooks.prototype.findTaxCodes = promisify(QuickBooks.prototype.findTaxCodesOld)

QuickBooks.prototype.findTaxRatesOld = QuickBooks.prototype.findTaxRates
QuickBooks.prototype.findTaxRates = promisify(QuickBooks.prototype.findTaxRatesOld)

QuickBooks.prototype.findTermsOld = QuickBooks.prototype.findTerms
QuickBooks.prototype.findTerms = promisify(QuickBooks.prototype.findTermsOld)

QuickBooks.prototype.findTimeActivitiesOld = QuickBooks.prototype.findTimeActivities
QuickBooks.prototype.findTimeActivities = promisify(QuickBooks.prototype.findTimeActivitiesOld)

QuickBooks.prototype.findTransfersOld = QuickBooks.prototype.findTransfers
QuickBooks.prototype.findTransfers = promisify(QuickBooks.prototype.findTransfersOld)

QuickBooks.prototype.findVendorsOld = QuickBooks.prototype.findVendors
QuickBooks.prototype.findVendors = promisify(QuickBooks.prototype.findVendorsOld)

QuickBooks.prototype.findVendorCreditsOld = QuickBooks.prototype.findVendorCredits
QuickBooks.prototype.findVendorCredits = promisify(QuickBooks.prototype.findVendorCreditsOld)

QuickBooks.prototype.findExchangeRatesOld = QuickBooks.prototype.findExchangeRates
QuickBooks.prototype.findExchangeRates = promisify(QuickBooks.prototype.findExchangeRatesOld)

QuickBooks.prototype.reportBalanceSheetOld = QuickBooks.prototype.reportBalanceSheet
QuickBooks.prototype.reportBalanceSheet = promisify(QuickBooks.prototype.reportBalanceSheetOld)

QuickBooks.prototype.reportProfitAndLossOld = QuickBooks.prototype.reportProfitAndLoss
QuickBooks.prototype.reportProfitAndLoss = promisify(QuickBooks.prototype.reportProfitAndLossOld)

QuickBooks.prototype.reportProfitAndLossDetailOld = QuickBooks.prototype.reportProfitAndLossDetail
QuickBooks.prototype.reportProfitAndLossDetail = promisify(QuickBooks.prototype.reportProfitAndLossDetailOld)

QuickBooks.prototype.reportTrialBalanceOld = QuickBooks.prototype.reportTrialBalance
QuickBooks.prototype.reportTrialBalance = promisify(QuickBooks.prototype.reportTrialBalanceOld)

QuickBooks.prototype.reportCashFlowOld = QuickBooks.prototype.reportCashFlow
QuickBooks.prototype.reportCashFlow = promisify(QuickBooks.prototype.reportCashFlowOld)

QuickBooks.prototype.reportInventoryValuationSummaryOld = QuickBooks.prototype.reportInventoryValuationSummary
QuickBooks.prototype.reportInventoryValuationSummary = promisify(QuickBooks.prototype.reportInventoryValuationSummaryOld)

QuickBooks.prototype.reportCustomerSalesOld = QuickBooks.prototype.reportCustomerSales
QuickBooks.prototype.reportCustomerSales = promisify(QuickBooks.prototype.reportCustomerSalesOld)

QuickBooks.prototype.reportItemSalesOld = QuickBooks.prototype.reportItemSales
QuickBooks.prototype.reportItemSales = promisify(QuickBooks.prototype.reportItemSalesOld)

QuickBooks.prototype.reportCustomerIncomeOld = QuickBooks.prototype.reportCustomerIncome
QuickBooks.prototype.reportCustomerIncome = promisify(QuickBooks.prototype.reportCustomerIncomeOld)

QuickBooks.prototype.reportCustomerBalanceOld = QuickBooks.prototype.reportCustomerBalance
QuickBooks.prototype.reportCustomerBalance = promisify(QuickBooks.prototype.reportCustomerBalanceOld)

QuickBooks.prototype.reportCustomerBalanceDetailOld = QuickBooks.prototype.reportCustomerBalanceDetail
QuickBooks.prototype.reportCustomerBalanceDetail = promisify(QuickBooks.prototype.reportCustomerBalanceDetailOld)

QuickBooks.prototype.reportAgedReceivablesOld = QuickBooks.prototype.reportAgedReceivables
QuickBooks.prototype.reportAgedReceivables = promisify(QuickBooks.prototype.reportAgedReceivablesOld)

QuickBooks.prototype.reportAgedReceivableDetailOld = QuickBooks.prototype.reportAgedReceivableDetail
QuickBooks.prototype.reportAgedReceivableDetail = promisify(QuickBooks.prototype.reportAgedReceivableDetailOld)

QuickBooks.prototype.reportVendorBalanceOld = QuickBooks.prototype.reportVendorBalance
QuickBooks.prototype.reportVendorBalance = promisify(QuickBooks.prototype.reportVendorBalanceOld)

QuickBooks.prototype.reportVendorBalanceDetailOld = QuickBooks.prototype.reportVendorBalanceDetail
QuickBooks.prototype.reportVendorBalanceDetail = promisify(QuickBooks.prototype.reportVendorBalanceDetailOld)

QuickBooks.prototype.reportAgedPayablesOld = QuickBooks.prototype.reportAgedPayables
QuickBooks.prototype.reportAgedPayables = promisify(QuickBooks.prototype.reportAgedPayablesOld)

QuickBooks.prototype.reportAgedPayableDetailOld = QuickBooks.prototype.reportAgedPayableDetail
QuickBooks.prototype.reportAgedPayableDetail = promisify(QuickBooks.prototype.reportAgedPayableDetailOld)

QuickBooks.prototype.reportVendorExpensesOld = QuickBooks.prototype.reportVendorExpenses
QuickBooks.prototype.reportVendorExpenses = promisify(QuickBooks.prototype.reportVendorExpensesOld)

QuickBooks.prototype.reportTransactionListOld = QuickBooks.prototype.reportTransactionList
QuickBooks.prototype.reportTransactionList = promisify(QuickBooks.prototype.reportTransactionListOld)

QuickBooks.prototype.reportGeneralLedgerDetailOld = QuickBooks.prototype.reportGeneralLedgerDetail
QuickBooks.prototype.reportGeneralLedgerDetail = promisify(QuickBooks.prototype.reportGeneralLedgerDetailOld)

QuickBooks.prototype.reportTaxSummaryOld = QuickBooks.prototype.reportTaxSummary
QuickBooks.prototype.reportTaxSummary = promisify(QuickBooks.prototype.reportTaxSummaryOld)

QuickBooks.prototype.reportDepartmentSalesOld = QuickBooks.prototype.reportDepartmentSales
QuickBooks.prototype.reportDepartmentSales = promisify(QuickBooks.prototype.reportDepartmentSalesOld)

QuickBooks.prototype.reportClassSalesOld = QuickBooks.prototype.reportClassSales
QuickBooks.prototype.reportClassSales = promisify(QuickBooks.prototype.reportClassSalesOld)

QuickBooks.prototype.reportAccountListDetailOld = QuickBooks.prototype.reportAccountListDetail
QuickBooks.prototype.reportAccountListDetail = promisify(QuickBooks.prototype.reportAccountListDetailOld)

QuickBooks.prototype.reconnectOld = QuickBooks.prototype.reconnect
QuickBooks.prototype.reconnect = promisify(QuickBooks.prototype.reconnectOld)

QuickBooks.prototype.disconnectOld = QuickBooks.prototype.disconnect
QuickBooks.prototype.disconnect = promisify(QuickBooks.prototype.disconnectOld)
module.exports.QuickBooks = QuickBooks