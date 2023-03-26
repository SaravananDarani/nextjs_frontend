import layout from '@/common/layout/layout'
import React from 'react'
import Slider from './common/slider';
import SecondSlider from './common/secondSlider';
import Merge from './common/merge'
import Stickey from './common/stickey'

const Web = () => {
    return (
        <div>

            <Slider />
            <br></br>
            <SecondSlider />
            <br></br>
            <Stickey />
            <br></br>
            <Merge />
            <br></br>

        </div>
    )
}

export default Web
Web.Layout = layout
