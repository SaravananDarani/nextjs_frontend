import layout from '@/common/layout/layout'
import React from 'react'

import logo from "@/public/contactus.jpg"
import Image from 'next/image'
const contact = () => {
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
                <Image
                    src={logo}
                    alt="Picture of the author"
                    className="rounded float-start"
                    width={500}
                    height={500}
                />
            </div>

        </div >
    )
}

export default contact
contact.Layout = layout