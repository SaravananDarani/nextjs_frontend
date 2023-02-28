
import { GlobleImport } from '../globleImport';

import logo from "@/public/nologo.png"
import Image from 'next/image'
import Link from 'next/link';
import { FormFieldInterface } from '@/common/interface/FormFieldInterface';
const { useRouter, useState, RegisterInput, IndexServices, getServices,
    swal, nextBase64, useForm, validator, FormInput } = GlobleImport;


export default function Signup() {
    const router = useRouter();
    const [values, setValues] = useState<any>({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
    });

    let inputs: Array<FormFieldInterface> = RegisterInput;

    const onChange = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const initState = {
        email: "",
        password: "",
        firstname: "",
        lastname: "",
    };

    const submit = () => {
        let dataJson = {
            email: state.email,
            password: state.password,
            firstname: state.firstname,
            lastname: state.lastname,
            status: 0,
            role: 0
        };

        const req = { data: dataJson, url: IndexServices.LoginServices.userUrl }
        getServices.addData(req).then((res: any) => {
            if (res.status === "success") {
                swal(res.message, { icon: "success" });
                router.push({
                    pathname: '/auth/otp',
                    query: { tk: nextBase64.encode(dataJson.email) }
                });
            } else {
                swal(res.message, { icon: "error" });
            }
        })
    };

    const { handleChange, handleSubmit, onBlur, state, errors }
        = useForm({ initState, callback: submit, validator });

    let isValidForm = Object.values(errors).filter((error) => typeof error !== "undefined").length === 0;
    return (
        <>
            <div className=''>
                <div className='row '>
                    <div className='col-md-6' style={{ height: "100%" }}></div>
                    <div className='col-md-5'>
                        <br></br>
                        <br></br>
                        <div className="container text-center"><Image
                            src={logo}
                            alt="Picture of the author"
                            className="d-inline-block align-text-top"
                            width={80}
                            height={80}
                        />
                        </div>
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>User SignUp.</p>
                            </blockquote>
                        </figure>
                        <form className="row g-3" onSubmit={handleSubmit}>
                            {inputs.map((input) => (
                                <FormInput
                                    key={input.id}
                                    {...input}
                                    onChange={handleChange}
                                    defaultValue={state.email}
                                    errors={errors}
                                    onBlur={onBlur}
                                />
                            ))}
                            <div className="col-12  text-end">
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>


                        <div>

                            &nbsp; &nbsp;
                            <div>
                                <Link href="/auth"  >
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}