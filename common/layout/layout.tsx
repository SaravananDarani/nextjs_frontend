import { GlobleImport } from '@/pages/globleImport';
const {
    IndexServices, getServices, useEffect, useState, Constants
} = GlobleImport;
import Header from "./web/header";
import Footer from "./web/footer"

let idIndex = 0;

const layout = ({ children }: any) => {
    const [states, setStates]: any = useState({});
    const [hostname, setHostname]: any = useState('');
    const [menuData, setMenuData] = useState([]);
    const getPosts = async () => {
        var db = {
            dataId: { id: hostname },
            url: `${IndexServices.MasterServices.MasterUrl}/host/find`,
        }
        const { data } = await getServices.getIdData(db);
        setStates(data)
        sessionStorage.setItem('web', JSON.stringify(data));
        sessionStorage.setItem('webid', JSON.stringify(data.id));
        var req = {
            dataId: { id: data.id ? data.id : Constants.defaultCompany },
            url: IndexServices.MasterServices.MenuUrl,
        }
        const response = await getServices.getIdData(req);
        const fetched = await response?.data;
        setMenuData(fetched);
        sessionStorage.setItem('menu', JSON.stringify(fetched));
    }

    useEffect(() => {
        const getdata: any = Constants.web;
        if (getdata !== Constants.undefined) { var dataJson = getdata && JSON.parse(getdata); }
        dataJson && setStates(dataJson)

        const getdatamenu: any = Constants.menu;
        if (getdatamenu !== Constants.undefined) { var dataJsonMenu = getdatamenu && JSON.parse(getdatamenu); }
        dataJsonMenu && setMenuData(dataJsonMenu)
        if (!dataJson?.id || idIndex === 0) {
            if (typeof window !== Constants.undefined) {
                setHostname(window.location.origin);
            }
            if (hostname && idIndex === 0) {
                getPosts(); idIndex = +1
            }
        }
    }, [idIndex, hostname]);

    return (
        <>
            <Header data={states} menuData={menuData} />
            {children}
            <Footer />
        </>
    )
}

export default layout
