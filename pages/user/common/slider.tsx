import { GlobleImport } from '@/pages/globleImport';

const { useEffect, IndexServices, getServices, useState, Constants } = GlobleImport;

const { imgPath } = Constants;

const slider = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        const req = { dataId: { id: Constants.webid }, url: IndexServices.MasterServices.SliderUrl }
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
                <div className={i === 0 ? "carousel-item active" : "carousel-item"}>
                    <img src={`${imgPath}${list.img}`} width={200} className="boarder-radius bd-placeholder-img bd-placeholder-img-lg d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{list.name}</h5>
                        <p>{list.title}</p>
                        <p>{list.subtitle}</p>
                    </div>
                </div>
            );
        });
    }

    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide tabsbackground">
                <div className="carousel-indicators">
                    {userData && userData.map((list: any, i: number) => {
                        return (
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={i}
                                className={i === 0 ? "active" : ""}
                                aria-current={i === 0 ? "true" : "false"}
                                aria-label={`Slide ${i + 1}`} >
                            </button>
                        );
                    })}
                </div>

                <div className="carousel-inner">
                    {commentNodes}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div >
    )
}

export default slider 