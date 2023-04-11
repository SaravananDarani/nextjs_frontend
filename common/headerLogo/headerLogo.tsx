import React from 'react'

const headerLogo = (props: any) => {
    return (
        <>
            <img
                src={props.path}
                className="header-logo"
                height={props.height}
            />
        </>
    )
}

export default headerLogo
