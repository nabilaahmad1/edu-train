import React from 'react';
import { useHistory } from 'react-router';
import banner from '../HomeTop/images/banner.jpg';
import './HomeTop.css';

const HomeTop = () => {

    // navigate to different url 
    const history = useHistory();
    const handleClick = () => {
        history.push('/about');
    }

    return (
        <div className="container-fluid">
            <div className="row">
                {/* top banner intro text  */}
                <div className="col-lg-6 col-12 py-5 text-center mt-5">
                    <h1 className="title lh-base fw-bolder">Making Your Childs World Better</h1>
                    <p className="text-secondary lh-sm mt-3">The more you learn, the more you want to learn, the more the world becomes more interesting to you, and discovering it becomes more fun.</p>
                    <button onClick={handleClick} type="button" className="btn btn-primary rounded-pill mt-3 px-5 me-3">Learn More</button>
                </div>
                {/* top banner image  */}
                <div className="col-lg-6 col-12">
                    <img src={banner} alt="Home-top-banner" className="img img-fluid mr-auto" height="500" width="550" />
                </div>
            </div>
        </div>
    );
};

export default HomeTop;