
import { get } from "lodash";

// ******************************
export const validator = (values: any, fieldName: any) => {
    let errors = {};
    switch (fieldName) {
        case "firstname":
            validateFirstname(values.firstname, errors);
            break;
        case "lastname":
            validateLastname(values.lastname, errors);
            break;
        case "email":
            validateEmail(values.email, errors);
            break;
        case "password":
            validatePassword(values.password, errors);
            break;
        case "phone":
            validatePhoneNumber(values.phone, errors);
            break;
        case "otp":
            validateOTP(values.otp, errors);
            break;
        default:
    }
    return errors;
};

// ******************************
export function getCountryCode(phoneNumber: any) {
    return get((phoneNumber), "country");
}

// ******************************
function validatePhoneNumber(phone: any, errors: any) {
    let result = true;
    const phoneObject = phone;
    if (!phoneObject) {
        errors.phone = "Invalid Phonenumber";
        result = false;
    }
    return result;
}
// ******************************
function validateEmail(email: any, errors: any) {
    let result = true;

    if (!email) {
        errors.email = "Email is Required";
        result = false;
    } else {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        result = re.test(String(email).toLowerCase());
        if (!result) errors.email = "Invalid Email address";
    }
    return result;
}
// ******************************
function validatePassword(pass: any, errors: any) {
    let result = true;

    if (!pass) {
        errors.password = "Password is Required";
        result = false;
    } else {
        var lower = /(?=.*[a-z])/;
        result = lower.test(pass);

        if (pass.length < 5) {
            errors.password = "Your password has less than 5 characters.";
            result = false;
        }
    }
    return result;
}


// ******************************
function validateFirstname(first: any, errors: any) {
    let result = true;
    if (!first) {
        errors.firstname = "First Name is Required";
        result = false;
    }
    return result;
}
// ******************************
function validateLastname(first: any, errors: any) {
    let result = true;
    if (!first) {
        errors.lastname = "Last Name is Required";
        result = false;
    }
    return result;
}
function validateOTP(otp: any, errors: any) {
    let result = true;
    if (!otp) {
        errors.lastname = "OTP is Required";
        result = false;
    } else {
        if (otp.length < 4) {
            errors.password = "Your OTP has less than 4 characters.";
            result = false;
        }
    }
    return result;
}
