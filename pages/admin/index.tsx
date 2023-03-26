import adminLayout from "@/common/layout/adminLayout"
import Link from "next/link"

const index = () => {
    return (
        <div className='content-box'>
            <div className="row">
                <div className="col-sm-3 card-customize">
                    <Link href="/admin/home/slider" className="text-decoration ">
                        <div className="card bg-success text-white text-decoration ">
                            <div className="card-body">
                                <h5 className="card-title">Home Slider</h5>
                                <p className="card-text">Home silder upload dynamic  </p>

                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-sm-3 card-customize">
                    <Link href="/admin/home/secondSlider" className="text-decoration ">
                        <div className="card  text-white text-decoration bg-danger ">
                            <div className="card-body">
                                <h5 className="card-title">Second slider</h5>
                                <p className="card-text">Home silder upload dynamic  </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-sm-3 card-customize">
                    <Link href="/admin/home/colume" className="text-decoration ">
                        <div className="card  text-white text-decoration bg-secondary">
                            <div className="card-body">
                                <h5 className="card-title">Colume</h5>
                                <p className="card-text">Colume upload dynamic  </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-sm-3 card-customize">
                    <Link href="/admin/home/client" className="text-decoration ">
                        <div className="card  text-white text-decoration bg-warning">
                            <div className="card-body">
                                <h5 className="card-title">Client</h5>
                                <p className="card-text">Client upload dynamic  </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default index
index.Layout = adminLayout