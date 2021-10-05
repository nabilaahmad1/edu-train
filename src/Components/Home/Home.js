import React from 'react';
import useServices from '../../hooks/useServices';
import HomeFeature from '../HomeFeature/HomeFeature';
import HomeReview from '../HomerReview/HomeReview';
import HomeService from '../HomeService/HomeService';
import HomeTop from '../HomeTop/HomeTop';
import './Home.css';

const Home = () => {

    // fetch services data 
    const [services] = useServices();

    return (
        <div>
            <HomeTop></HomeTop>
            <HomeFeature></HomeFeature>
            <div className="container-fluid my-5">
                {/* service heading  */}
                <div className="heading mb-5">
                    <h1 className="title lh-base fw-bolder">Our Services</h1>
                    <p className="text-secondary lh-sm mt-3">Getting education isn’t easy, and most students experience challenges during their degrees. The important thing is to believe in yourself and not give up.</p>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        services.map(service => <HomeService
                            key={service.id}
                            service={service}
                        >
                        </HomeService>
                        )
                    }
                </div>
            </div>
            <HomeReview></HomeReview>
        </div>
    );
};

export default Home;