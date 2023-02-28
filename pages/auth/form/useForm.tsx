import { useState, useEffect } from "react";

const useForm = ({ initState, callback, validator, defaultValues, states }: any) => {
    const [state, setState] = useState(initState);
    const [errors, setErrors] = useState({});
    const [isSubmited, setIsSubmited] = useState(false);

    useEffect(() => {
        const isValidErrors = () =>
            Object.values(errors).filter(error => typeof error !== "undefined")
                .length > 0;
        if (isSubmited && !isValidErrors()) callback();

    }, [errors, states, state]);

    setTimeout(() => {
        if (states) {
            if (state.firstname === '' && states.firstname) { setState(() => ({ ...state, firstname: states.firstname })); }
            if (state.lastname === '' && states.lastname) { setState(() => ({ ...state, lastname: states.lastname })); }
            if (state.email === '' && states.email) { setState(() => ({ ...state, email: states.email })); }
            if (state.companyname === '' && states.companyname) { setState(() => ({ ...state, companyname: states.companyname })); }
            if (state.alaisename === '' && states.alaisename) { setState(() => ({ ...state, alaisename: states.alaisename })); }
            if (state.address === '' && states.address) { setState(() => ({ ...state, address: states.address })); }
            if (state.mobile === '' && states.mobile) { setState(() => ({ ...state, mobile: states.mobile })); }
        }
    }, 0);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setState(() => ({
            ...state,
            [name]: value
        }));
        const faildFiels = validator(state, name);
        setErrors(() => ({
            ...errors,
            [name]: Object.values(faildFiels)[0]
        }));
        setIsSubmited(false);
    };

    const onBlur = (e: any) => {
        const { name: fieldName } = e.target;
        const faildFiels = validator(state, fieldName);
        setErrors(() => ({
            ...errors,
            [fieldName]: Object.values(faildFiels)[0]
        }));
        setIsSubmited(false);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const { name: fieldName } = e.target;
        const faildFiels = validator(state, fieldName);
        setErrors(() => ({
            ...errors,
            [fieldName]: Object.values(faildFiels)[0]
        }));
        setIsSubmited(true);
    };

    const handleUpdate = (e: any) => {
        e.preventDefault();
        const { name: fieldName } = e.target;
        const faildFiels = validator(state, fieldName);
        setErrors(() => ({
            ...errors,
            [fieldName]: Object.values(faildFiels)[0]
        }));
        setIsSubmited(true);
    };



    return {
        handleChange,
        handleSubmit,
        onBlur,
        state,
        errors,
    };
};
export default useForm;
