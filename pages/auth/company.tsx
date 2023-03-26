import { IndexServices } from '@/services/config';
import { getServices } from '@/services/fetchdata';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobleImport } from '../globleImport';
import logo from "@/public/nologo.png"
import Image from 'next/image'
import { useRouter } from 'next/router';
import { Constants } from '@/common/constants/constants';
const company = () => {
    const [employees, setEmployees] = useState([]);
    const [company, setCompany] = useState("0");
    useEffect(() => {
        async function fetchEmployees() {
            let dataJson = {};
            const req = { data: dataJson, url: IndexServices.CompanyServices.CompanyUrl }
            const response = await getServices.getData(req);
            const fetchedEmployees = await response.data;
            setEmployees(fetchedEmployees);

            const dafaultvalue = Constants.webid
            if (!dafaultvalue) {
                localStorage.setItem("defaultCompany", fetchedEmployees[0].id);
                setCompany(fetchedEmployees[0].id)
            } else {
                if (company === "0") setCompany(dafaultvalue)
            }
        }
        fetchEmployees();
    }, [company]);

    const onChange = (e: any) => {
        const { value } = e.target;
        localStorage.setItem("defaultCompany", value);
        setCompany(value)
    }
    const router = useRouter();
    const submit = () => {
        router.push({
            pathname: '/admin/dashboard',
            query: { returnUrl: "login successfully" }
        });

    };
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
                                <p>User SignIn.</p>
                            </blockquote>
                        </figure>
                        <div className='row'>
                            <div className='col-md-4'>
                                select  company
                            </div>
                            <div className='col-md-8'>
                                <select
                                    className="form-control"
                                    id="demo"
                                    onChange={onChange}
                                    defaultValue={company}
                                    value={company}
                                >
                                    <option value="" disabled> - Select - </option>
                                    {employees &&
                                        employees.map((row: any) =>
                                            <option value={row.id}  >{row.companyname} {row.alaisename}</option>
                                        )
                                    }
                                </select>
                                <div className="col-12 text-end">
                                    <button type="submit"
                                        onClick={submit}
                                        className="btn btn-primary">Sign In</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default company 