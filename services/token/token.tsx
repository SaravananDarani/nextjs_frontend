export const TokenServices = {
    getCSToken,
    getrdToken,
    getPassKey
}
function getCSToken() {
    const TOKEN = sessionStorage.getItem('userToken');
    const HEADERS: any = {
        Authorization: 'JWT ' + TOKEN
    }
    return HEADERS;
}
function getrdToken() {
    const TOKEN = sessionStorage.getItem('userToken');
    const HEADERS: any = {
        token: TOKEN
    }
    return HEADERS;
}
function getPassKey() {
    let PassKey = "Aspire@iAmIndian@iLoveMyFamily*";
    return PassKey;
}