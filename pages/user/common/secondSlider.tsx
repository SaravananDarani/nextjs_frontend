import { GlobleImport } from '@/pages/globleImport';

const { useRouter, useEffect, IndexServices, getServices, useState, Link, nextBase64,
    DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Nav, Moment, adminLayout, Constants } = GlobleImport;

const secondSlider = () => {

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        const req = { dataId: { id: Constants.webid }, url: IndexServices.MasterServices.SecondSliderUrl }
        getServices.getIdData(req).then((res: any) => {
            if (res.status === Constants.success) {
                const { data } = res;
                setUserData(data);
            }
        })
    }, []);

    if (userData) {
        var commentNodes: any = userData.map((list: any, i: number) => {
            return (
                <>
                    <div className="col-sm-4">
                        <h3>{list.name}</h3>
                        <p>{list.title}</p>
                        <p>{list.subtitle}</p>
                    </div>
                </>
            );
        });
    }

    return (
        <div className="container mt-5">
            <div className="row">
                {commentNodes}
            </div>
        </div>
    )
}

export default secondSlider
