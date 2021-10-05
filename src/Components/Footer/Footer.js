import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="container-fluid background mt-5 py-3">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <h1>EduTrain</h1>
                    <a href="http://facebok.com" target="_blank" rel='noreferrer'><i className="fab fa-facebook-square fs-2 mx-3 text-white"></i></a>
                    <a href="http://twitter.com" target="_blank" rel='noreferrer'><i className="fab fa-twitter-square fs-2 mx-3 text-white"></i></a>
                    <a href="http://instagram.com" target="_blank" rel='noreferrer'><i className="fab fa-instagram-square fs-2 mx-3 text-white"></i></a>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <h3>Contact</h3>
                    <ul className="list">
                        <li>Address: Farmgate, Dhaka, Bangldesh</li>
                        <li>Phone: 017124567899</li>
                        <li>Mail: edutrain@gmail.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;