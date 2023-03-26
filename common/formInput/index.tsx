import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
const FormInput = (props: any) => {

    const { label, name, type, errorMessage, onChange, id, errors, onBlur, hidden, ...inputProps } = props;

    return (
        <>
            {hidden === "false" &&
                <div>
                    <label className="form-label">{label}</label>
                    <input
                        className="form-control"
                        name={name}
                        label={label}
                        type={type}
                        id={name}
                        {...inputProps}
                        onChange={onChange}
                        autoComplete="off"
                        error={errors?.[name] ? true : false}
                        helperText={errors?.[name]}
                        onBlur={onBlur}
                    />
                    {errors?.[name]}
                </div>
            }
        </>
    );
};

export default FormInput;