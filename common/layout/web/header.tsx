import Link from "next/link"
import Head from "next/head"
import logo from "@/public/nologo.png"
import Image from 'next/image'

const header = () => {
    return (
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
                                <Link className="nav-link" href={{ pathname: '/', query: { name: 'test' }, }} passHref> Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href={{ pathname: '/user/abouts', query: { name: 'test' }, }} passHref> About </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href={{ pathname: '/user/contact', query: { name: 'test' }, }} passHref> Contact </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href={{ pathname: '/auth/', query: { name: 'test' }, }} passHref > Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default header 