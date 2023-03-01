import { GlobleImport } from "@/pages/globleImport";

const {
    useEffect, useState, Link,
    FormInput, Copyright, Slide, RegisterInput,
    IndexServices, getServices, swal, useForm, validator, useRouter, userHeadCell,
    Title, adminLayout, nextBase64, Moment,
    Button, Card, CardHeader, CardBody, CardTitle, Collapse, DropdownMenu,
    DropdownItem, UncontrolledDropdown, DropdownToggle, FormGroup,
    Form, Input, InputGroupText, InputGroup, Media, NavbarBrand, Navbar, NavItem, NavLink,
    Nav, Progress, Table, Container, Row, Col
} = GlobleImport;
const index = () => {
    const [userData, setUserData] = useState([]);
    const router = useRouter();
    const addNew = () => {
        router.push({
            pathname: `/admin/user/adduser`,
            search: '?query=abc',
        });
    }
    useEffect(() => {
        let dataJson = {};
        const req = { data: dataJson, url: IndexServices.LoginServices.userUrl }
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
                url: IndexServices.LoginServices.userUrl
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
                    <td>  {list.firstname}  </td>
                    <td>  {list.lastname}  </td>
                    <td>  {list.email}  </td>
                    <td>  {list.status ? "Active" : "InAcive"}  </td>
                    <td>  {list.role ? "User" : "User"}  </td>
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
                                            pathname: '/admin/user/adduser',
                                            query: { id: nextBase64.encode(list.id), view: nextBase64.encode('1') },
                                        }}
                                    > View </Link>
                                    <Link className="nav-link black"
                                        href={{
                                            pathname: '/admin/user/adduser',
                                            query: { id: nextBase64.encode(list.id), view: nextBase64.encode('2') },
                                        }}
                                    > Edit </Link>
                                    <DropdownItem onClick={() => deletes(list.id)}  >
                                        <span  ><i className="la la-trash"></i>  Delete</span>
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
                    <p>  User List</p>
                </div>
                <div className='col-md-6 text-end'>
                    <button type="button" onClick={addNew} className="btn btn-brand btn-icon-sm  btn-primary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Add New
                    </button>
                </div>
            </div>
            <table className="table table-striped-table-bordered caption-top table-hover table-checkable" id="kt_table_1">
                <caption>List of User</caption>
                <thead>
                    <tr>

                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Role</th>
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

export default index
index.Layout = adminLayout