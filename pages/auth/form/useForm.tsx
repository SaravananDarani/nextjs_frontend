import { useState, useEffect } from "react";

const useForm = ({ initState, callback, callImg, validator, defaultValues, states }: any) => {
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
        let statesLen = states && Object.keys(states).length;
        if (statesLen) {
            if (state.firstname === '' && states.firstname) { setState(() => ({ ...state, firstname: states.firstname })); }
            if (state.lastname === '' && states.lastname) { setState(() => ({ ...state, lastname: states.lastname })); }
            if (state.email === '' && states.email) { setState(() => ({ ...state, email: states.email })); }
            if (state.companyname === '' && states.companyname) { setState(() => ({ ...state, companyname: states.companyname })); }
            if (state.alaisename === '' && states.alaisename) { setState(() => ({ ...state, alaisename: states.alaisename })); }
            if (state.address === '' && states.address) { setState(() => ({ ...state, address: states.address })); }
            if (state.mobile === '' && states.mobile) { setState(() => ({ ...state, mobile: states.mobile })); }
            if (state.name === '' && states.host) { setState(() => ({ ...state, name: states.host })); }
            if (state.name === '' && states.title) { setState(() => ({ ...state, name: states.title })); }
            if (state.menuName === '' && states.menuName) { setState(() => ({ ...state, menuName: states.menuName })); }
            if (state.menuPath === '' && states.menuLink) { setState(() => ({ ...state, menuPath: states.menuLink })); }
            if (state.menuIcon === '' && states.icon) { setState(() => ({ ...state, menuIcon: states.icon })); }
            if (state.name === '' && states.sliderName) { setState(() => ({ ...state, name: states.sliderName })); }
            if (state.title === '' && states.sliderTitle) { setState(() => ({ ...state, title: states.sliderTitle })); }
            if (state.subtitle === '' && states.sliderSubtitle) { setState(() => ({ ...state, subtitle: states.sliderSubtitle })); }
            if (state.img === '' && states.sliderImg) { setState(() => ({ ...state, img: states.sliderImg })); }
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

    return {
        handleChange,
        handleSubmit,
        onBlur,
        state,
        errors,
    };
};
export default useForm;
