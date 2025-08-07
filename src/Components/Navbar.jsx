import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md mx-0 position-sticky top-0 z-3 ">
                <div className="container-fluid mx-0 bg-black">
                    <a className="navbar-brand mx-5" href="#">
                        <span className="logo b-1 text-info "><i>Portfolio</i></span> 
                    </a>
                    <button className="navbar-toggler bg-light"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-lg-end justify-content-md-end mx-5" id="navbarNav">
                        <ul className="navbar-nav navbar-text  ">
                            <li className="nav-item"><a href="#home" className="nav-link active text-light">Home</a></li>
                            <li className="nav-item"><a href="#about" className="nav-link text-light">About</a></li>
                            <li className="nav-item"><a href="#services" className="nav-link text-light">Services</a></li>
                            <li className="nav-item"><a href="#education" className="nav-link text-light">Education</a></li>
                            <li className="nav-item"><a href="#portfolio" className="nav-link text-light">Projects</a></li>
                            <li className="nav-item"><a href="#contact" className="nav-link text-light">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;