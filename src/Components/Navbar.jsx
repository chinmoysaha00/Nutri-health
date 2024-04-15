import React from 'react'
import '../style.css'
import logo from '../Images/Logo.png'
import brandName from "../Images/Brandname.png"

function Navbar() {
    return (
        <div className='sticky-top m-0 p-0'>
            <nav className="py-1 pt-1 navbar navbar-expand-md shadow-lg" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className='text-center'>
                        <a className="navbar-brand" href="/">
                            <img className='logoImage' src={logo} alt="Logo" />
                        </a>
                    </div>
                    <div className=" sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header text-dark border-bottom">
                            <img src={brandName} alt="" className="offcanvas-title text-dark px-3" id="offcanvasNavbarLabel" height="50px" width="150px" />
                            <button type="button" class="btn-close btn-close-dark shadow" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body navbarText">
                            <ul className="navbar-nav justify-content-center flex-grow-1  ">
                                <li className="nav-item mx-3">
                                    <a className="nav-link " href="/" target='blank'>ABOUT US</a>
                                </li>
                                <li className="nav-item mx-3 ">
                                    <a className="nav-link " href="/" target='blank'>CONTACT US</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link " href="/" target='blank'>FREE E-BOOK </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <button className="navbar-toggler border-0 shadow-none text-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
