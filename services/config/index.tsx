let VI = "v1/";
let API = `http://localhost:3001/api/${VI}`;
let USER = "user";
let UpdateOTP = "/updateotp";
let ResendOTP = "/resendotp";
let ForgotOTP = "/forgotpassword";
let login = "/login";
let company = "company";


const LoginServices = {
    userUrl: `${API}${USER}`,
    userUpdateOTPUrl: `${API}${USER}${UpdateOTP}`,
    userResendOTPUrl: `${API}${USER}${ResendOTP}`,
    userForgotUrl: `${API}${USER}${ForgotOTP}`,
    userLoginUrl: `${API}${USER}${login}`,
}
const CompanyServices = {
    CompanyUrl: `${API}${company}`,
}

export const IndexServices = {
    LoginServices: LoginServices,
    CompanyServices: CompanyServices
};