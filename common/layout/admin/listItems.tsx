import * as React from 'react';

import logo from "@/public/nologo.png"
import Image from 'next/image'
import Link from 'next/link';
import AccountMenu from './AccountMenu';
import router from 'next/router';

const logout = () => {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('firstname');
    sessionStorage.removeItem('lastname');
    sessionStorage.removeItem('role');
    router.push({
        pathname: '/auth',
        query: { returnUrl: "" }
    });
}
let lables: any = "";
if (typeof window !== 'undefined') {
    lables = sessionStorage.getItem('firstname') ? sessionStorage.getItem('firstname') : "";
}
export const mainListItems = (
    <>
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <Image
                        src={logo}
                        alt="Picture of the author"
                        className="d-inline-block align-text-top"
                        width={40}
                        height={40}
                    />
                    Demo App
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href={{ pathname: '/admin/dashboard', query: { name: 'test' }, }} passHref> Dashboard </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={{ pathname: '/admin', query: { name: 'test' }, }} passHref> Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={{ pathname: '/admin/abouts', query: { name: 'test' }, }} passHref> About </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={{ pathname: '/admin/user', query: { name: 'list' }, }} passHref> User </Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Master
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" href={{ pathname: '/admin/master/company', query: { name: 'test' }, }} passHref> Company </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href={{ pathname: '/admin/master/logo', query: { name: 'test' }, }} passHref> Logo </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href={{ pathname: '/admin/master/title', query: { name: 'test' }, }} passHref> Title </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href={{ pathname: '/admin/master/menu', query: { name: 'test' }, }} passHref> Menu </Link>
                                </li>
                            </ul>

                        </li>
                    </ul>
                </div>
                <span className="navbar-text">
                    <div className="collapse navbar-collapse" >
                        <li className="nav-item dropdown" style={{ "listStyle": "none" }}>
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {lables !== "" ? <AccountMenu /> : ""}
                            </a>
                            <ul className="dropdown-menu ">
                                <li> <Link className="dropdown-item"
                                    href={{ pathname: '/admin/master/profile', query: { name: 'test' } }} passHref> Profile </Link> </li>
                                <li> <button className="dropdown-item" onClick={logout}> Logout </button> </li>
                            </ul>
                        </li>
                    </div>
                </span>
            </div>

        </nav>
    </>
);
