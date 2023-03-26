import { GlobleImport } from '@/pages/globleImport';

const { useEffect, IndexServices, getServices, useState, Constants } = GlobleImport;

const { imgPath } = Constants;
const stickey = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        const req = { dataId: { id: Constants.webid }, url: IndexServices.MasterServices.columeUrl }
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
                <div className="col-sm-6 ">
                    <div className="row g-0   position-relative">
                        <div className="col-md-6 mb-md-0 p-md-4">
                            <img
                                src={`${imgPath}${list.img}`} width="100%" height="200"
                                className="imag-border-radius bd-placeholder-img w-100 " />
                        </div>
                        <div className="col-md-6 p-4 ps-md-0">
                            <h5 className="mt-0">{list.name}</h5>
                            <p>{list.title}</p>
                            <p className="stretched-link"> <li> {list.subtitle} </li></p>
                        </div>
                    </div>
                </div>

            );
        });
    }
    return (
        <div className="row">

            {commentNodes}
        </div>
    )
}

export default stickey
