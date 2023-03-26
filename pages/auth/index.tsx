
import { GlobleImport } from '../globleImport';
import logo from "@/public/nologo.png"
import Image from 'next/image'
import { FormFieldInterface } from '@/common/interface/FormFieldInterface';
import Link from 'next/link';

const { FormInput, LoginInput,
    IndexServices, getServices, swal,
    useForm, validator, useRouter,
} = GlobleImport;

export default function Forgot() {
    const router = useRouter();
    let inputs: Array<FormFieldInterface> = LoginInput;
    const initState = {
        email: "",
    };
    const submit = () => {
        let dataJson = {
            email: state.email,
            password: state.password,
        };
        const req = { data: dataJson, url: IndexServices.LoginServices.userLoginUrl }
        getServices.addData(req).then((res: any) => {
            if (res.status === "success") {

                const { id, firstname, email, lastname, role, status } = res.data;
                if (status === 0) {
                    swal("User not active", { icon: "info" });
                } else {
                    swal(res.message, { icon: "success" });
                    sessionStorage.setItem('userId', id);
                    sessionStorage.setItem('email', email);
                    sessionStorage.setItem('firstname', firstname);
                    sessionStorage.setItem('lastname', lastname);
                    sessionStorage.setItem('role', role);
                    router.push({
                        pathname: '/auth/company',
                        query: { returnUrl: "login successfully" }
                    });
                }
            } else {
                swal("Invalide Username/Password", { icon: "error" });
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
                                alt="Picture of the author"
                                className="d-inline-block align-text-top"
                                width={80}
                                height={80}
                            />
                        </div>
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>User SignIn.</p>
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
                                    // disabled={!isValidForm}
                                    onClick={handleSubmit}
                                    className="btn btn-primary">Sign In</button>
                            </div>
                        </form>
                        <div>
                            <div>
                                <Link href="/auth/forgot"  >
                                    Forgot password?
                                </Link>
                            </div>
                            &nbsp; &nbsp;
                            <div  >
                                <Link href="/auth/signup"  >
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