import adminLayout from '@/common/layout/adminLayout'
import { GlobleImport } from '@/pages/globleImport';

import Moment from 'moment';
const { useRouter, useEffect, IndexServices, getServices, useState, Link, nextBase64,
    DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Nav, Constants } = GlobleImport;
const index = (props: any) => {
    const title = "Menu"
    const [userData, setUserData] = useState([]);
    const router = useRouter();
    const addNew = () => {
        router.push({
            pathname: `/admin/master/menu/menuadd`,
            search: '?query=abc',
        });
    }

    useEffect(() => {
        async function fetchEmployees() {
            var req = {
                dataId: { id: Constants.webid },
                url: IndexServices.MasterServices.MenuUrl,
            }
            const response = await getServices.getIdData(req);
            const fetched = await response.data;
            setUserData(fetched);
        }
        fetchEmployees();
    }, []);

    const deletes = (e: any) => {
        var r = window.confirm("Please confirm delete this record.");
        if (r == true) {
            let dataJson = {};
            const req = {
                dataId: { id: e },
                data: dataJson,
                url: IndexServices.MasterServices.MenuUrl
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
                <tr key={i} >
                    <td>
                        {i + 1} {list.name}
                    </td>
                    <td>
                        <Nav className="listSub"  >
                            <UncontrolledDropdown  >
                                <DropdownToggle  >
                                    <a> : </a>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Link className="nav-link black"
                                        href={{
                                            pathname: '/admin/master/menu/menuadd',
                                            query: { id: nextBase64.encode(list.id), view: nextBase64.encode('1') },
                                        }}
                                    ><i className="bi bi-eye-fill"></i> View </Link>
                                    <Link className="nav-link black"
                                        href={{
                                            pathname: '/admin/master/menu/menuadd',
                                            query: { id: nextBase64.encode(list.id), view: nextBase64.encode('2') },
                                        }}
                                    ><i className="bi bi-pencil-fill"></i>  Edit </Link>
                                    <Link className="nav-link black"
                                        href={{
                                            pathname: '/admin/master/menu/menuadd',
                                            query: {
                                                id: nextBase64.encode(list.id),
                                                view: nextBase64.encode('3'),
                                                parent: nextBase64.encode(list.id)
                                            },
                                        }}
                                    ><i className="bi bi-pencil-fill"></i>  Sub Menu </Link>
                                    <DropdownItem onClick={() => deletes(list.id)}  >
                                        <span  ><i className="bi bi-trash-fill"></i>  Delete</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>

                    </td>
                    <td>

                        {list.submenu.map((lists: any, j: number) => {
                            return (
                                <tr  >
                                    <td style={{ width: 200 }}>{i + 1}.{j + 1} {lists.name}</td>

                                    <td>
                                        <Nav className="listSub"  >
                                            <UncontrolledDropdown  >
                                                <DropdownToggle  >
                                                    <a> : </a>
                                                </DropdownToggle>
                                                <DropdownMenu right>
                                                    <Link className="nav-link black"
                                                        href={{
                                                            pathname: '/admin/master/menu/menuadd',
                                                            query: { id: nextBase64.encode(lists.id), view: nextBase64.encode('1') },
                                                        }}
                                                    ><i className="bi bi-eye-fill"></i> View </Link>
                                                    <Link className="nav-link black"
                                                        href={{
                                                            pathname: '/admin/master/menu/menuadd',
                                                            query: { id: nextBase64.encode(lists.id), view: nextBase64.encode('2') },
                                                        }}
                                                    ><i className="bi bi-pencil-fill"></i>  Edit </Link>
                                                    <Link className="nav-link black"
                                                        href={{
                                                            pathname: '/admin/master/menu/menuadd',
                                                            query: {
                                                                id: nextBase64.encode(lists.id),
                                                                view: nextBase64.encode('3'),
                                                                parent: nextBase64.encode(lists.id)
                                                            },
                                                        }}
                                                    ><i className="bi bi-pencil-fill"></i>  Sub Menu </Link>
                                                    <DropdownItem onClick={() => deletes(lists.id)}  >
                                                        <span  ><i className="bi bi-trash-fill"></i>  Delete</span>
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </Nav>
                                    </td>
                                    <td>{lists.submenu.map((lis: any, k: number) => {
                                        return (
                                            <tr key={i} >
                                                <td>{i + 1}.{j + 1}.{k + 1} - </td>
                                                <td style={{ width: 100 }}> {lis.name}</td>
                                                <td>
                                                    <Nav className="listSub">
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle> <a> : </a> </DropdownToggle>
                                                            <DropdownMenu right>
                                                                <Link className="nav-link black" href={{ pathname: '/admin/master/menu/menuadd', query: { id: nextBase64.encode(lis.id), view: nextBase64.encode('1') }, }} ><i className="bi bi-eye-fill"></i> View </Link>
                                                                <Link className="nav-link black" href={{ pathname: '/admin/master/menu/menuadd', query: { id: nextBase64.encode(lis.id), view: nextBase64.encode('2') }, }}  ><i className="bi bi-pencil-fill"></i>  Edit </Link>
                                                                <Link className="nav-link black" href={{ pathname: '/admin/master/menu/menuadd', query: { id: nextBase64.encode(lis.id), view: nextBase64.encode('3'), parent: nextBase64.encode(lis.id) }, }} ><i className="bi bi-pencil-fill"></i>  Sub Menu </Link>
                                                                <DropdownItem onClick={() => deletes(lis.id)}> <span><i className="bi bi-trash-fill"></i>  Delete</span> </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </Nav>
                                                </td>
                                                <td>{lis.submenu.map((li: any, l: number) => {
                                                    return (
                                                        <tr key={i} >
                                                            <td>{i + 1}.{j + 1}.{k + 1}{l + 1} -</td>
                                                            <td style={{ width: 100 }}> {li.name}</td>
                                                            <td>
                                                                <Nav className="listSub">
                                                                    <UncontrolledDropdown>
                                                                        <DropdownToggle> <a> : </a> </DropdownToggle>
                                                                        <DropdownMenu right>
                                                                            <Link className="nav-link black" href={{ pathname: '/admin/master/menu/menuadd', query: { id: nextBase64.encode(li.id), view: nextBase64.encode('1') }, }} ><i className="bi bi-eye-fill"></i> View </Link>
                                                                            <Link className="nav-link black" href={{ pathname: '/admin/master/menu/menuadd', query: { id: nextBase64.encode(li.id), view: nextBase64.encode('2') }, }}  ><i className="bi bi-pencil-fill"></i>  Edit </Link>
                                                                            <Link className="nav-link black" href={{ pathname: '/admin/master/menu/menuadd', query: { id: nextBase64.encode(li.id), view: nextBase64.encode('3'), parent: nextBase64.encode(li.id) }, }} ><i className="bi bi-pencil-fill"></i>  Sub Menu </Link>
                                                                            <DropdownItem onClick={() => deletes(li.id)}> <span><i className="bi bi-trash-fill"></i>  Delete</span> </DropdownItem>
                                                                        </DropdownMenu>
                                                                    </UncontrolledDropdown>
                                                                </Nav>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    </td>
                                </tr>
                            )
                        })}
                    </td >

                </tr >
            );
        });
    }

    return (
        <div className='content-box'>
            <div className='row'>
                <div className='col-md-6 text-left'>
                    <p> <i className="bi bi-building-fill-gear"></i> {title} List</p>
                </div>
                <div className='col-md-6 text-end'>
                    <button type="button" onClick={addNew} className="btn btn-brand btn-icon-sm  btn-primary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="bi bi-plus-lg"></i> Add New
                    </button>

                </div>
            </div>

            <table className="table " id="kt_table_1">
                <tbody>
                    {commentNodes}
                </tbody>
            </table>
        </div>
    )
}

export default index
index.Layout = adminLayout
