import React, { Children } from 'react'
import Menu from './menu'
import Footer from './Footer'

const Base =(
    {
        title="My Title",
        description="My description",
        className="bg-dark text-white p-4",
        children
    }
)=>(
    <div>
        <Menu/>
        <div className="container-fluid">
            <div className="jumbotron bg-dark text-white text-center">
                <h2 className="display-4">{title}</h2>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
        <Footer/>
    </div>
)

export default Base