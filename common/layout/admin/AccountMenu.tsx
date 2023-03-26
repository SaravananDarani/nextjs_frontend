import router from "next/router";
import * as React from "react";


export default function accountMenu() {
    let fn: any = "", ln: any = ""
    if (typeof window !== 'undefined') {
        fn = sessionStorage.getItem('firstname') ? sessionStorage.getItem('firstname') : "";
        ln = sessionStorage.getItem('lastname') ? sessionStorage.getItem('lastname') : "";
    }

    if (fn === "") {
        router.push({ pathname: '/auth', query: { returnUrl: "" } })
    }

    return (
        <>
            <b>{fn.substring(0, 1).toUpperCase()}</b>
            <b>{ln.substring(0, 1).toUpperCase()}</b>
        </>
    );
}
