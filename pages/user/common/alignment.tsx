import React from 'react'

import logo from "@/public/contactus.jpg"
import Image from 'next/image'
const alignment = () => {
    return (
        <>
            <div className='row  '>
                <div className='col-md-4'>
                    <Image
                        src={logo}
                        alt="Picture of the author"
                        className="rounded float-start"
                        width={340}
                        height={340}
                    />
                </div>
                <div className='col-md-6'>
                    <figure className="text-center">
                        <blockquote className="blockquote">
                            <p>A well-known quote, contained in a blockquote element.</p>
                        </blockquote>
                        <blockquote className="blockquote">
                            <p>A well-known quote, contained in a blockquote element.</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div >
                Aspire Systems is a global technology services firm serving as a trusted technology partner for our customers. We work with some of the world's most innovative enterprises and independent software vendors, helping them leverage technology and outsourcing in our specific areas of expertise. Our services include Software Engineering, Enterprise Application Services, Infrastructure & Application Support, Data & Analytics, and Cloud Transformation. Our core philosophy of "Attention. Always." communicates our belief in lavishing care and attention on our customers and employees.
            </div >
            <div className='row'>
                <div className='col-md-1'>  </div>
                <div className='col-md-9'>
                    Our Technical Architects and Technical Managers together form the Advanced Technology Group (ATG). ATG's focus of attention and responsibility is on helping us, and hence our customers, stay on the leading edge of technology development at all times. Members from ATG participate actively in projects during particular phases and/or solve specific problems on demand. They also lead technical audits that ensure propagation of best practices across projects.
                </div>
            </div>
            <div className='row'>

                <div className='col-md-9'>
                    Our Technical Architects and Technical Managers together form the Advanced Technology Group (ATG). ATG's focus of attention and responsibility is on helping us, and hence our customers, stay on the leading edge of technology development at all times. Members from ATG participate actively in projects during particular phases and/or solve specific problems on demand. They also lead technical audits that ensure propagation of best practices across projects.
                </div>
                <div className='col-md-1'>  </div>
            </div>

        </>
    )
}

export default alignment
