import { GlobleImport } from '@/pages/globleImport';

const { useEffect, IndexServices, getServices, useState, Constants } = GlobleImport;

const { imgPath } = Constants;
const merge = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        const req = { dataId: { id: Constants.webid }, url: IndexServices.MasterServices.clientUrl }
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
                <div className="bg-body-tertiary">
                    <img
                        src={`${imgPath}${list.img}`}
                        width={150}
                        className="imag-border-radius card-customize"
                    />
                </div>
            );
        });
    }

    return (
        <div className='' >

            <h5 className="mt-0 text-center"> Our Client </h5>
            <div className="hstack gap-3 ">
                {commentNodes}
            </div>
        </div >
    )
}

export default merge
