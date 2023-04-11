const accountName = () => {
    let firstName: string = "", lastName: string = "";
    if (typeof window !== 'undefined') {
        firstName = sessionStorage.getItem('firstname') ? JSON.parse(JSON.stringify(sessionStorage.getItem('firstname') || "")) : "";
        lastName = sessionStorage.getItem('lastname') ? JSON.parse(JSON.stringify(sessionStorage.getItem('lastname') || "")) : "";
    }

    return (
        <>
            <span className="name first-letter"><b>{firstName}</b></span>
            <span className="profession first-letter"><b>{lastName}</b></span>
        </>
    );
}
export default accountName;