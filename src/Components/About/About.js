import React from 'react';
import useServices from '../../hooks/useServices';
import HomeFeature from '../HomeFeature/HomeFeature';
import Trainer from '../Trainer/Trainer';
import './About.css';

const About = (props) => {
    const [services] = useServices();
    return (
        <div className="container-fluid my-5">
            {/* service heading  */}
            <div className="heading mb-5">
                <h1 className="title lh-base fw-bolder">About Us</h1>
                <p className="text-secondary lh-sm mt-3">Getting education isn’t easy, and most students experience challenges during their degrees. The important thing is to believe in yourself and not give up.</p>
                <HomeFeature></HomeFeature>
                <div className="container-fluid my-5">
                    {/* feature heading  */}
                    <div className="heading mb-5">
                        <h1 className="title lh-base fw-bolder">Our Trainers</h1>
                        <p className="text-secondary lh-sm mt-3 w-75 mx-auto">Education is the first step for people to gain the knowledge, critical thinking, empowerment and skills they need to make this world a better place.</p>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            services.map(service => <Trainer
                                key={service.id}
                                service={service}
                            >
                            </Trainer>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;