let VI = "v1/";
let API = `http://localhost:3001/api/${VI}`;
let USER = "user";
let UpdateOTP = "/updateotp";
let ResendOTP = "/resendotp";
let ForgotOTP = "/forgotpassword";
let login = "/login";
let company = "company";
let master = "master";
let upload = "upload";
let logo = "logo";
let menu = "menu";
let slider = "slider";
let secondSlider = "secondslider";
let colume = "colume";
let client = "client";
let abouts = "abouts";
let contact = "contact";


const BasicServices = {
    uploadUrl: `${API}${upload}`,
}
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
const MasterServices = {
    MasterUrl: `${API}${master}`,
    LogoUrl: `${API}${master}/${logo}`,
    MenuUrl: `${API}${master}/${menu}`,
    SliderUrl: `${API}${master}/${slider}`,
    SecondSliderUrl: `${API}${master}/${secondSlider}`,
    columeUrl: `${API}${master}/${colume}`,
    clientUrl: `${API}${master}/${client}`,
    aboutsUrl: `${API}${master}/${abouts}`,
    contactUrl: `${API}${master}/${contact}`,
}

export const IndexServices = {
    BasicServices: BasicServices,
    LoginServices: LoginServices,
    CompanyServices: CompanyServices,
    MasterServices: MasterServices
};