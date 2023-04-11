import { Constants } from '@/common/constants/Constants';
import { IndexServices } from '@/services/config';
import { getServices } from '@/services/fetchdata';
import { useEffect, useState } from 'react';
const headerCompany = () => {
    const [employees, setEmployees] = useState([]);
    const [company, setCompany] = useState("0");
    useEffect(() => {
        async function fetchEmployees() {
            let dataJson = {};
            const req = { data: dataJson, url: IndexServices.CompanyServices.CompanyUrl }
            const response = await getServices.getData(req);
            const fetchedEmployees = await response.data;
            setEmployees(fetchedEmployees);

            const dafaultvalue = Constants.defaultCompany
            if (!dafaultvalue) {
                localStorage.setItem("defaultCompany", fetchedEmployees[0].id);
                setCompany(fetchedEmployees[0].id)
            } else {
                if (company === "0") { setCompany(dafaultvalue); }
            }
        }
        fetchEmployees();
    }, [company]);

    const onChange = (e: any) => {
        const { value } = e.target;
        localStorage.setItem("defaultCompany", value);
        setCompany(value)
    }

    return (
        <div className='row'>
            <div className='col-md-4'>
                company
            </div>
            <div className='col-md-8'>
                <select
                    disabled
                    className="form-control"
                    id="demo"
                    onChange={onChange}
                    defaultValue={company}
                    value={company}
                >
                    <option value="" disabled> - Select - </option>
                    {employees &&
                        employees.map((row: any, i) =>
                            <option value={row.id} key={i} >{row.companyname} {row.alaisename}</option>
                        )
                    }
                </select>
            </div>
        </div>
    )
}

export default headerCompany 