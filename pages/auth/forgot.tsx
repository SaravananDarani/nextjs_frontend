
import Link from 'next/link';
import { GlobleImport } from '../globleImport';

import logo from "@/public/nologo.png"
import Image from 'next/image'
import { FormFieldInterface } from '@/common/interface/FormFieldInterface';
const { useRouter, ForgotInput, IndexServices, getServices, swal, useForm, validator, FormInput } = GlobleImport;


export default function Forgot() {
    const router = useRouter();
    let inputs: Array<FormFieldInterface> = ForgotInput;
    const initState = {
        otp: "",
    };

    const submit = () => {
        let dataJson = {
            email: state.email,
        };
        const req = { data: dataJson, url: IndexServices.LoginServices.userForgotUrl }
        getServices.addData(req).then((res: any) => {
            if (res.status === "success") {
                swal(res.message, { icon: "success" });
                router.push({
                    pathname: '/auth',
                    query: { returnUrl: "/auth" }
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
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="container text-center">
                            <Image
                                src={logo}
                                alt=""
                                className="d-inline-block align-text-top"
                                width={80}
                                height={80}
                            />
                        </div>
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>User Signup.</p>
                            </blockquote>
                        </figure>
                        <form className="row g-3"  >
                            {inputs.map((input) => (
                                <FormInput
                                    key={input.id}
                                    {...input}
                                    hidden={"false"}
                                    onChange={handleChange}
                                    defaultValue={state[input.name]}
                                    errors={errors}
                                    onBlur={onBlur}
                                />
                            ))}
                            <div className="col-12 text-end">
                                <button type="submit"
                                    disabled={!isValidForm}
                                    onClick={handleSubmit}
                                    className="btn btn-primary">Sign In</button>
                            </div>
                        </form>
                        <div>

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