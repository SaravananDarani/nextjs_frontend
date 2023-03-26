import layout from '@/common/layout/layout'
import Breadcrumb from '@/common/layout/web/breadcrumb'
import React from 'react'
import Alignment from './common/alignment'
import { GlobleImport } from '@/pages/globleImport';
import Image from "./common/images"
const {
    IndexServices, getServices,
    useEffect, useState, Constants
} = GlobleImport;

const abouts = () => {
    const [data, setData] = useState();
    const [title, setTitle] = useState();
    const [subtitle, setSubTitle] = useState();

    useEffect(() => {
        async function fetch() {
            var req = {
                dataId: { id: Constants.webid },
                url: `${IndexServices.MasterServices.aboutsUrl}`,
            }
            const response = await getServices.getIdData(req);
            const fetched = await response.data[0];
            setData(fetched)
            setTitle(fetched.title)
            setSubTitle(fetched.subtitle)
        }
        fetch();
    }, []);

    return (
        <div className='contact-content'>
            <Breadcrumb />
            <div className='row  '>
                <div className='col-md-4'>
                    {data && <Image data={data} />}
                </div>
                <div className='col-md-6'>
                    {title && <Alignment data={title} />}
                </div>
            </div>
            <div>
                {subtitle && <Alignment data={subtitle} />}
            </div>
        </div>
    )
}

export default abouts
abouts.Layout = layout