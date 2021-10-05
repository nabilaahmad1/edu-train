import React from 'react';
import { useHistory } from 'react-router';
import useServices from '../../hooks/useServices';
import HomeService from '../HomeService/HomeService';
import './Services.css';

const Services = (props) => {
    const [services] = useServices();
    // navigate to different url 
    const history = useHistory();
    const handleClick = () => {
        history.push('/services');
    }
    return (
        <div className="container-fluid">
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
                        <button onClick={handleClick} className="btn btn-primary rounded-pill mt-3 px-5" type="button">View Details</button>
                    </HomeService>
                    )
                }
            </div>
        </div>
    );
};

export default Services;