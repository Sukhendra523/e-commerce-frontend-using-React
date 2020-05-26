import React from 'react'
import '../styles.css'
import Base from './Base'
export default function (){
    return(
        <Base title="Home Page" description="Welcome to the Tshirt Store">
            <div class="row">
                <div className="col-4">
                <button class="btn btn-success">Buy</button>
                </div>
                <div className="col-4">
                <button class="btn btn-success">Buy</button>
                </div>
                <div className="col-4">
                <button class="btn btn-success">Buy</button>
                </div>
            </div>
        </Base>
    )
}