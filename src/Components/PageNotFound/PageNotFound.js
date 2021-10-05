import React from 'react';
import './PageNotFound.css';
import errorimg from './images/banner_error_404.jpg'

const PageNotFound = () => {
    return (
        <div className="container-fluid my-5">
            <img src={errorimg} alt="error-pagenotfound" className="img-fluid w-100 h-100" />
        </div>
    );
};

export default PageNotFound;