import { FormFieldInterface } from "@/common/interface/FormFieldInterface";

export const LoginInput: Array<FormFieldInterface> = [
    {
        id: 1,
        name: "email",
        type: "text",
        errorMessage: "",
        label: "Email",
        pattern: "^[A-Za-z0-9]$",
        required: true,
    },
    {
        id: 2,
        name: "password",
        type: "password",
        errorMessage: "",
        label: "Password",
        pattern: "^[A-Za-z0-9]$",
        required: true,
    },
];

export const RegisterInput: Array<FormFieldInterface> = [
    {
        id: 1,
        name: "firstname",
        type: "text",
        errorMessage: "",
        label: "First Name",
        required: true,
    }, {
        id: 2,
        name: "lastname",
        type: "text",
        errorMessage: "",
        label: "Last Name",
        required: true,

    }, {
        id: 3,
        name: "email",
        type: "text",
        errorMessage: "",
        label: "Email",
        required: true,

    }, {
        id: 4,
        name: "password",
        type: "password",
        errorMessage: "",
        label: "Password",
        required: true,

    },
]

export const otpInput: Array<FormFieldInterface> = [
    {
        id: 1,
        name: "otp",
        type: "text",
        errorMessage: "",
        label: "otp",
        required: true,
    }
]

export const ForgotInput: Array<FormFieldInterface> = [
    {
        id: 1,
        name: "email",
        type: "text",
        errorMessage: "",
        label: "Email",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
    }
];
export const CompanyInput: Array<FormFieldInterface> = [
    {
        id: 1,
        name: "companyname",
        type: "text",
        errorMessage: "",
        label: "Company Name",
        required: true,
    },
    {
        id: 2,
        name: "alaisename",
        type: "text",
        errorMessage: "",
        label: "Alais Name",
        required: true,
    },
    {
        id: 3,
        name: "address",
        type: "text",
        errorMessage: "",
        label: "Address",
        required: true,
    },
    {
        id: 4,
        name: "mobile",
        type: "text",
        errorMessage: "",
        label: "Mobile",
        required: true,
    },
    {
        id: 5,
        name: "email",
        type: "text",
        errorMessage: "",
        label: "Email",
        required: true,
    },
];
