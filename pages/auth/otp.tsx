
import Link from 'next/link';
import { GlobleImport } from '../globleImport';

import logo from "@/public/nologo.png"
import Image from 'next/image'
import { FormFieldInterface } from '@/common/interface/FormFieldInterface';
const { useRouter, nextBase64, useState, otpInput, IndexServices, getServices, swal,
    useEffect, useForm, validator, FormInput } = GlobleImport;


export default function otp() {
    const router = useRouter();
    let id: any = router.query["tk"];
    let base64decoded = id ? nextBase64.decode(id) : "";

    const [resetBtn, setResetBtn] = useState(true)
    const [values, setValues] = useState<any>({
        otp: "",
    });

    let inputs: Array<FormFieldInterface> = otpInput;

    const initState = {
        otp: "",
    };

    const submit = () => {
        let dataJson = {
            otp: state.otp,
            email: base64decoded
        };
        const req = { data: dataJson, url: IndexServices.LoginServices.userUpdateOTPUrl }
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

    useEffect(() => {
        var elem: any = document.getElementById('some_div');
        if (elem && !elem.innerHTML) {
            elem.innerHTML = 60;
        }
        var timerId = setInterval(countdown, 1000);
        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                setResetBtn(false)
                callbackSettime();
            } else {
                if (resetBtn === true && elem && elem.innerHTML) {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    }, [])

    const { handleChange, handleSubmit, onBlur, state, errors }
        = useForm({ initState, callback: submit, validator });

    let isValidForm = Object.values(errors).filter((error) => typeof error !== "undefined").length === 0;

    var timeLeft = 60;
    if (process.browser) {
        var elem: any = document.getElementById('some_div');
        if (elem && !elem.innerHTML) {
            elem.innerHTML = 60;
        }
        var timerId = setInterval(countdown, 1000);
    }

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            setResetBtn(false)
            callbackSettime();
        } else {
            if (resetBtn === true && elem && elem.innerHTML) {
                elem.innerHTML = timeLeft;
                timeLeft--;
            }
        }
    }

    const callbackSettime = () => { if (elem && elem.innerHTML) (elem.innerHTML = 60) }

    const resendOTP = () => {
        setResetBtn(true);
        let dataJson = {
            email: base64decoded
        };
        const req = { data: dataJson, url: IndexServices.LoginServices.userResendOTPUrl }
        getServices.addData(req).then((res: any) => {
            if (res.status === "success") {
                swal(res.message, { icon: "success" });
            } else {
                swal(res.message, { icon: "error" });
            }
        })

    }
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
                                <p>User Signup.</p>
                            </blockquote>
                        </figure>
                        <form className="row g-3"  >
                            {inputs.map((input) => (
                                <FormInput
                                    key={input.id}
                                    {...input}
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