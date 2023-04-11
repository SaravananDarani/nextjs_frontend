import React, { useState } from 'react'
import AccountMenu from '../admin/accountMenu';
import router from 'next/router';
import AccountName from './accountName';

const slider = () => {
    const [menuAction, setMenuAction] = useState(true)
    const toggle = () => {
        setMenuAction(!menuAction);
    }

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

    return (
        <>
            <nav className={menuAction ? "sidebar" : "sidebar close"}>
                <header>
                    <div className="image-text">
                        <span className="image"> <AccountMenu /> </span>
                        <div className="text logo-text">
                            <AccountName />
                        </div>
                    </div>
                    <div>
                        {menuAction ?
                            <i className='bi bi-list toggle ' onClick={toggle}></i> :
                            <i className='bi bi-arrow-right-short toggle' onClick={toggle}></i>
                        }
                    </div>
                </header>

                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-links">
                            <li className="nav-link">
                                <a href="#">
                                    <i className='bi bi-house icon' ></i>
                                    <span className="text nav-text">Dashboard</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="bottom-content">
                        <li className="">
                            <a href="#" onClick={logout}>
                                <i className='bi bi-power icon' ></i>
                                <span className="text nav-text">Logout</span>
                            </a>
                        </li>
                    </div>
                </div>
            </nav>



        </>
    )
}

export default slider
