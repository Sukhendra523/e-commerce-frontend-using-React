import React from 'react'

const Footer =()=>{
    return(
        <footer className="footer bg-dark mt-auto py-3">
            <div className="container-fluid bg-success text-white text-center py-3">
                <h4>if you have any qustion feel free to ask us</h4>
                <button className="btn btn-warning btn-lg">Contact us</button>
            </div>
            <div className="container">
                <span className="text-muted">created by <span className="text-white">Sukhendra Rajawat</span></span>
            </div>
        </footer>
    )
}

export default Footer