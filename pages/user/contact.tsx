import layout from '@/common/layout/layout'
import React, { useEffect, useState } from 'react'
import logo from "@/public/contactus.jpg"
import Image from 'next/image'
import Alignment from './common/alignment'
import { Constants } from '@/common/constants/constants'
import { IndexServices } from '@/services/config'
import { getServices } from '@/services/fetchdata'

const contact = () => {
    const [data, setData] = useState();
    const [title, setTitle] = useState();

    useEffect(() => {
        async function fetch() {
            var req = {
                dataId: { id: Constants.webid },
                url: `${IndexServices.MasterServices.contactUrl}`,
            }
            const response = await getServices.getIdData(req);
            const fetched = await response.data[0];
            setData(fetched)
            setTitle(fetched.title)
        }
        fetch();
    }, []);
    return (
        <div className='row contact-content'>

            <div className='col-md-5'>
                <div className='sendmessage'>
                    <h4>Send a message</h4>

                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='name' />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='email' />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='company name' />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='Business name' />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='what service are you looking for ?' />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='leave your message here' />
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label"  >I confirm.</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <div className='col-md-6'>
                {data && <Image data={data} />}
            </div>
            <div className='col-12'>
                {title && <Alignment data={title} />}
            </div>
        </div >
    )
}

export default contact
contact.Layout = layout