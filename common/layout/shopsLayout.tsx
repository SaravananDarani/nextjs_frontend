import React from 'react'
import Slider from "./shops/slider"
const shopsLayout = ({ children }: any) => {
    return (
        <div>
            <Slider />
            <section className="home">
                <div className='content-box'>
                    {children}
                </div>
            </section>

        </div>
    )
}

export default shopsLayout
