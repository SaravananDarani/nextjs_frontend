export default function accountMenu() {
    let firstname: string = "", lastname: string = ""
    if (typeof window !== 'undefined') {
        firstname = sessionStorage.getItem('firstname') ? JSON.parse(JSON.stringify(sessionStorage.getItem('firstname') || "")) : "";
        lastname = sessionStorage.getItem('lastname') ? JSON.parse(JSON.stringify(sessionStorage.getItem('lastname') || "")) : "";
    }

    return (
        <>
            <b>{firstname.substring(0, 1).toUpperCase()}</b>
            <b>{lastname.substring(0, 1).toUpperCase()}</b>
        </>
    );
}
