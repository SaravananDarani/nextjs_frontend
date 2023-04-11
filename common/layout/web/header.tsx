import { Constants } from "@/common/constants/Constants";
import Link from "next/link";
import Logo from "@/common/headerLogo/headerLogo"
const header = (props: any) => {
    const { data, menuData } = props
    const files = data?.logo;
    const entry = Constants.imgPath;
    let path = files ? `${entry}${files}` : "";

    if (menuData) {
        var commentNodes: any = menuData.map((list: any, i: number) => {
            return (
                <>
                    <li className={list.submenu.length === 0 ? "nav-item" : "nav-item  dropdown"}>
                        {list.submenu.length === 0 ?
                            <Link className={list.submenu.length === 0 ? "nav-link" : "nav-link dropdown-toggle"}
                                href={{ pathname: list.route, query: { name: 'test' }, }}
                                passHref> {list.name} </Link>
                            :
                            <>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {list.name}
                                    </a>
                                    <ul className="dropdown-menu">
                                        {list.submenu.map((lists: any, j: number) => {
                                            return (
                                                <li>
                                                    <Link
                                                        className="dropdown-item"
                                                        href={{ pathname: lists.route, query: { name: 'test' }, }}
                                                        passHref> {lists.name}
                                                    </Link>
                                                    <ul className="submenu dropdown-menu">
                                                        {lists.submenu.map((lis: any, j: number) => {
                                                            return (
                                                                <li>
                                                                    <Link
                                                                        className="dropdown-item"
                                                                        href={{ pathname: lis.route, query: { name: 'test' }, }}
                                                                        passHref> {lis.name}
                                                                    </Link>
                                                                    {lis.submenu.length !== 0 &&
                                                                        <ul className="submenu dropdown-menu">
                                                                            {lis.submenu.map((li: any, j: number) => {
                                                                                return (
                                                                                    <li>
                                                                                        <Link
                                                                                            className="dropdown-item"
                                                                                            href={{ pathname: li.route, query: { name: 'test' }, }}
                                                                                            passHref> {li.name}
                                                                                        </Link>
                                                                                    </li>
                                                                                )
                                                                            })}
                                                                        </ul>
                                                                    }
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            </>
                        }
                        <ul className="dropdown-menu">
                            {list.submenu.map((lists: any, j: number) => {
                                return (
                                    <li>
                                        <Link className="dropdown-item" href={{ pathname: '/admin/master/company', query: { name: 'test' }, }} passHref>  {lists.name} </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                </>
            );
        });
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand header-nav" href="#">
                        <div className="row">
                            <div className="col-md-3">
                                <Logo
                                    path={path}
                                    height={40}
                                />
                            </div>
                            <div className="col-md-8 aligntop">
                                <h5 className="header-title">{data?.title}</h5>
                            </div>
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {commentNodes}
                        </ul>
                    </div>
                    <div className="navbar-text">
                        <div className="collapse navbar-collapse" >
                            <li className="nav-item dropdown" style={{ "listStyle": "none", color: "#fff", marginRight: 10 }}>
                                <Link className="nav-link" href={{ pathname: '/auth/', query: { name: 'test' }, }} passHref > <i className="bi bi-box-arrow-in-right"></i> Login</Link>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default header 