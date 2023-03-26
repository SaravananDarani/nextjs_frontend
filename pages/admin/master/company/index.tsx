import adminLayout from '@/common/layout/adminLayout'
import { GlobleImport } from '@/pages/globleImport';

import Moment from 'moment';
const { useRouter, useEffect, IndexServices, getServices, useState, Link, nextBase64,
    DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Nav } = GlobleImport;
const company = (props: any) => {
    const [userData, setUserData] = useState([]);
    const router = useRouter();
    const addNew = () => {
        router.push({
            pathname: `/admin/master/company/companyadd`,
            search: '?query=abc',
        });
    }
    useEffect(() => {
        let dataJson = {};
        const req = { data: dataJson, url: IndexServices.CompanyServices.CompanyUrl }
        getServices.getData(req).then((res: any) => {
            if (res.status === "success") {
                const { data } = res;
                setUserData(data);
            }
        })
    }, []);

    const deletes = (e: any) => {
        var r = window.confirm("Please confirm delete this record.");
        if (r == true) {
            let dataJson = {};
            const req = {
                dataId: { id: e },
                data: dataJson,
                url: IndexServices.CompanyServices.CompanyUrl
            }
            getServices.deleteData(req).then((res: any) => {
                if (res.status === "success") {
                    const { data } = res;
                }
            })
        }
    }

    if (userData) {
        var commentNodes: any = userData.map((list: any, i: number) => {
            return (
                <tr key={i}
                    style={{
                        backgroundColor: Moment(list.createddate).format('DD/MM/YYYY') === Moment(new Date()).format('DD/MM/YYYY') ? '#e0e0e0' : ''
                    }}>
                    <td scope="row"><b>{i + 1}</b></td>
                    <td>  {list.companyname}  </td>
                    <td>  {list.alaisename}  </td>
                    <td>  {list.address}  </td>
                    <td>  {list.mobile}  </td>
                    <td>  {list.email}  </td>
                    <td>  {Moment(list.createddate).format('DD/MM/YYYY')}   </td>
                    <td>
                        <Nav className="listSub"  >
                            <UncontrolledDropdown  >
                                <DropdownToggle  >
                                    <a> : </a>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Link className="nav-link black"
                                        href={{
                                            pathname: '/admin/master/company/companyadd',
                                            query: { id: nextBase64.encode(list.id), view: nextBase64.encode('1') },
                                        }}
                                    ><i className="bi bi-eye-fill"></i> View </Link>
                                    <Link className="nav-link black"
                                        href={{
                                            pathname: '/admin/master/company/companyadd',
                                            query: { id: nextBase64.encode(list.id), view: nextBase64.encode('2') },
                                        }}
                                    ><i className="bi bi-pencil-fill"></i>  Edit </Link>
                                    <DropdownItem onClick={() => deletes(list.id)}  >
                                        <span  ><i className="bi bi-trash-fill"></i>  Delete</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </td>
                </tr >
            );
        });
    }

    return (
        <div className='content-box'>
            <div className='row'>
                <div className='col-md-6 text-left'>
                    <p> <i className="bi bi-building-fill-gear"></i> Company List</p>
                </div>
                <div className='col-md-6 text-end'>
                    <button type="button" onClick={addNew} className="btn btn-brand btn-icon-sm  btn-primary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="bi bi-plus-lg"></i> Add New
                    </button>
                </div>
            </div>
            <table className="table table-striped-table-bordered caption-top table-hover table-checkable" id="kt_table_1">
                <caption> <i className="bi bi-buildings"></i> List of company</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Company Name</th>
                        <th>Alais Name</th>
                        <th>Address</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Created Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {commentNodes}
                </tbody>
            </table>
        </div>
    )
}

export default company
company.Layout = adminLayout
