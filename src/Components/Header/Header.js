import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Header/images/elogo.png';
import './Header.css';


const header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                {/* company logo and name  */}
                <div className="navbar-brand fs-2 title px-5 ">
                    <img src={logo} alt="website-logo" width="50" height="50" className="d-inline-block align-text-top me-3" />
                    EduTrain
                </div>
                {/* tab and phone menu tab  */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* navbar links to different pages  */}
                <div className="collapse navbar-collapse navbar-align px-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav px-5">
                        <NavLink className="nav-link active ps-5" aria-current="page" to="/home">Home</NavLink>
                        <NavLink className="nav-link ps-5" to="/about">About</NavLink>
                        <NavLink className="nav-link ps-5" to="/services">Services</NavLink>
                        <NavLink className="nav-link ps-5" to="/contact">Contact</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default header;