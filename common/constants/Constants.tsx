const ThreeDots = "...";
const isString = "";
const all = "all";
const numZero = 0;
const numOne = 1;
const numTwo = 2;
const numThree = 3;
const numFour = 4;
const numFive = 5;
const numTen = 10;
const num100 = 100;
const numCharZero = "0";
const numCharOne = "1";
const numCharTwo = "2";
const numCharThree = "3";
const numCharFour = "4";
const hybrent = "hybrent";
const hybrentCom = ".hybrent.com";
const vendorName = "vendor_name";
const vendorId = "vendor_id";
const customerName = "customer_name";
const poNumber = "po_number";
const dashboard = "dashboard";
const invoiceManager = "invoice_manager";
const adminSettings = "admin_settings";
const manageUser = "manage_user";
const manageEmail = "manage_email";
const manageFtp = "manage_ftp";
const userMenu = "user_menu";
const logout = "logout";
const add = "add";
const update = "update";
const adminSettingsMenu = "Admin Settings";
const invoiceNo = "invoice_number";
const invoiceNoPattern = /[^a-zA-Z0-9-#]/g
const noNagativePattern = /[^0-9]/g
const yetProcess = "Yet to be Processed";
const poReview = "PO Review";
const ocrReview = "OCR Review";
const contactCustomer = "Contact Customer";
const ocrPoReview = "OCR & PO Review";
const invoiceNumberExist = "Invoice number already exists";
const ocrVerifyError = "Please remove/resolve the mismatched line items to proceed";
const assignErrMsg = "Please select atleast one invoice to assign";
const hybrentErrMsg = "Please select atleast one invoice to Send to Hybrent";
const invoiceAtleasetErrMsg = "Please add atleast one line item";
const sendtoHybrentErrMsg = "Selected Invoices have been successfully sent to Hybrent Platform.";
const addEditInvoiceErrMsg = "Invoice add/update successfully.";
const addEditErrMsg = "Invoice Added Successfully";
const successSendToErrMsg = "Invoice have been successfully sent to Hybrent Platform.";
const failSendToErrMsg = "Invoice could not be sent.";
const successMoreSendToErrMsg = "Invoice(s) have been successfully sent to Hybrent Platform.";
const failMoreSendToErrMsg = "Invoice(s) could not be sent.";
const waitPoErrMsg = "Waiting for PO Approval.";
const waitMsg = "Please wait...";
const vendorErrMsg = "Please select a Customer";
const totalAmount = "total_amount";
const unitPrice = "unit_price";
const departments = "departments";
const inputNumber = "number";
const inputText = "text";
const inputSelect = "select";
const inputTrue = "true";
const assignedTo = "assigned_to";
const invoiceNumberPrefix = "INV-";
const invoiceDate = "invoice_date";
const afterDueDateTotal = "after_due_date_total";
const invoiceDueAmount = "total_invoice_amount_due";
const totalInvoiceAmountDue = "total_invoice_amount_due";
const invoiceAmount = "invoice_amount";
const poAmount = "po_amount";
const taxes = "taxes";
const shippingAddress = "shipping_address";
const facility = "facility";
const siteLink = "site_link";
const freight = "freight";
const invoiceDueDate = "invoice_due_date";
const miscCharges = "misc_charges";
const paymentTerms = "payment_terms";
const discountAmounts = "discount_amounts";
const imagePng = "image/png";
const imageJpg = "image/jpg";
const imageJpeg = "image/jpeg";
const applicationPdf = "application/pdf";
const textPlain = "text/plain";
const zoomIn = "Zoom In";
const zoomOut = "Zoom Out";
const pageUp = "Page Up";
const pageDown = "Page Down";
const openFile = "Open File";
const downloadFile = "Download File";
const clearFile = "Clear File";
const attachementSizeErr = "Exceeds the file size limit, max 3MB doc can be uploaded.";
const attachmentExtensionErr = "Only jpeg/jpg/png types are allowed.";
const attachementRestriction = "Maximum 3 Files only uploaded.";
const pdfRestriction = "Exceeds the file size limit, max 3MB file can be uploaded."
const clear = "Clear";
const review = "review";
const processed = "processed";
const selectAll = "Select all";
const download = "Download";
const basee64PDF = "dataapplication/pdfbase64";
const allowFileSize = 3;
const internalServerErr = "Sorry, unexpected error";
const actionItem = "action_item";
const deleteConfirmMessage = "Are you sure to delete the Errored Invoice";
const unknownError = "Something went wrong. Please try later.";
const deleteSuccessMessage = "Invoice has been deleted successfully.";
const tokenSuccessMsg = "The token was successfully received.";
const refreshToken = "refresh_token";
const poStatus = {
    searchPo: 0,
    verifyPo: 1,
    resetPo: 2,
    unVerifyPo: 3,
    multiplePo: 4
}
const actionItems = {
    ocrVerify: 1,
    poVerify: 2,
    markProcessed: 3,
    contactCustomer: 4,
    revertNeedsReview: 5
}
const userRole = {
    admin: 10,
    nonAdmin: 5
}
const filterActionItems = [
    { "id": "1", "name": "OCR & PO Review" },
    { "id": "2", "name": "OCR Review" },
    { "id": "3", "name": "PO Review" },
    { "id": "4", "name": "Yet to be Processed" },
    { "id": "5", "name": "Contact Customer" }
]
const forbidden = 403;
const baseURL = "/app/dashboard";
const authenticationType = "auth_type_id";
const protocolId = "protocol_id";
const textarea = "textarea";
const confirmPassword = "confirmPassword";
const password = "password";
const ftp = "ftp";
const mail = "mail";

export const Constants = {
    imagePng, imageJpg, imageJpeg, applicationPdf,
    isString, textPlain,
    ThreeDots, numZero,
    numOne, numTwo, numThree, numFour, numFive,
    numTen, num100, numCharOne, numCharTwo, numCharThree, numCharFour, hybrent,
    vendorName, customerName,
    poStatus, actionItems,
    numCharZero, poNumber,
    dashboard, invoiceManager, adminSettings,
    manageUser, manageEmail, manageFtp, userMenu,
    logout, adminSettingsMenu, add, update, invoiceNo,
    yetProcess, poReview, ocrReview, contactCustomer,
    ocrPoReview, invoiceNumberExist, ocrVerifyError,
    assignErrMsg, hybrentErrMsg,
    invoiceAtleasetErrMsg, waitMsg, vendorErrMsg, vendorId,
    assignedTo, userRole, invoiceNumberPrefix,
    totalAmount,
    unitPrice,
    inputNumber,
    inputText,
    inputSelect,
    inputTrue,
    invoiceNoPattern,
    noNagativePattern, departments,
    invoiceDate,
    afterDueDateTotal, totalInvoiceAmountDue, poAmount, taxes,
    shippingAddress, facility, siteLink, freight, invoiceAmount,
    invoiceDueDate, miscCharges, paymentTerms, discountAmounts,
    hybrentCom, invoiceDueAmount, sendtoHybrentErrMsg, addEditInvoiceErrMsg,
    successSendToErrMsg, failSendToErrMsg,
    successMoreSendToErrMsg, failMoreSendToErrMsg, waitPoErrMsg, addEditErrMsg,
    all, zoomIn, zoomOut, pageUp, pageDown, openFile, downloadFile, clearFile,
    attachementSizeErr, clear, attachmentExtensionErr, attachementRestriction,
    review, processed, selectAll, pdfRestriction, download, basee64PDF, allowFileSize,
    internalServerErr,
    forbidden,
    baseURL, actionItem, filterActionItems,
    deleteConfirmMessage, unknownError, deleteSuccessMessage,
    authenticationType, protocolId, textarea, confirmPassword,
    password, ftp, mail, tokenSuccessMsg, refreshToken
}