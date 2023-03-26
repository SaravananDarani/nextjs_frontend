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
const userMenu = "user_menu";
const logout = "logout";
const add = "add";
const update = "update";
const adminSettingsMenu = "Admin Settings";
const invoiceNo = "invoice_number";
const invoiceNoPattern = /[^a-zA-Z0-9-#]/g
const noNagativePattern = /[^0-9]/g
const yetProcess = "Yet to be Processed";
const waitMsg = "Please wait...";
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
const userRole = {
    admin: 10,
    nonAdmin: 5
}
const forbidden = 403;
const baseURL = "/app/dashboard";
const authenticationType = "auth_type_id";
const protocolId = "protocol_id";
const textarea = "textarea";
const confirmPassword = "confirmPassword";
const password = "password";
const success = "success";
const routerUrl = {
    sliderAddUrl: "/admin/home/slider/slider",
    sliderUrl: "/admin/home/slider",
    secondSliderAddUrl: "/admin/home/secondSlider/secondSlider",
    secondSliderUrl: "/admin/home/secondSlider",
    columeAddUrl: "/admin/home/colume/colume",
    columeUrl: "/admin/home/colume",
    clientAddUrl: "/admin/home/client/client",
    clientUrl: "/admin/home/client",
}
const deleteConfirmMsg = "Please confirm delete this record."
const dateFormate = "DD/MM/YYYY";
const droupDownList = {
    view: "View",
    edit: "Edit",
    delete: "Delete",
    add: "Add",
    addNew: "Add New",
    update: "Update",
    submit: "Submit",
}
const imgPath = "http://localhost:3001/public/uploads/originals/"
const undefined = "undefined";
let defaultCompany: any = "", web: any = {}, webid: any = 0, menu: any = {};
if (typeof window !== 'undefined') {
    defaultCompany = localStorage.getItem('defaultCompany');
    web = sessionStorage.getItem('web');
    webid = sessionStorage.getItem('webid');
    menu = sessionStorage.getItem('menu');
}
export const Constants = {
    imagePng, imageJpg, imageJpeg, applicationPdf,
    isString, textPlain,
    ThreeDots, numZero,
    numOne, numTwo, numThree, numFour, numFive,
    numTen, num100, numCharOne, numCharTwo, numCharThree, numCharFour, userMenu,
    logout, adminSettingsMenu, add, update, invoiceNo,
    yetProcess, waitMsg, userRole,
    invoiceNoPattern,
    noNagativePattern,
    all, zoomIn, zoomOut, pageUp, pageDown, openFile, downloadFile, clearFile,
    attachementSizeErr, clear, attachmentExtensionErr, attachementRestriction,
    review, processed, selectAll, pdfRestriction, download, basee64PDF, allowFileSize,
    internalServerErr,
    forbidden,
    baseURL, actionItem,
    deleteConfirmMessage, unknownError, deleteSuccessMessage,
    authenticationType, protocolId, textarea, confirmPassword,
    password, tokenSuccessMsg, refreshToken, success, routerUrl, deleteConfirmMsg, dateFormate,
    droupDownList, imgPath, undefined, defaultCompany, web, menu, webid
}