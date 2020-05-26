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
        <div class="container-fluid">
            <div class="jumbotron bg-dark text-white text-center">
                <h2 class="display-4">{title}</h2>
                <p class="lead">{description}</p>
            </div>
            <div class={className}>{children}</div>
        </div>
        <Footer/>
    </div>
)

export default Base