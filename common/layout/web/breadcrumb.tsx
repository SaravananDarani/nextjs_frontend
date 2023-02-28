import React from 'react'

const breadcrumb = () => {
    return (
        <nav  >
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
        </nav>
    )
}

export default breadcrumb
