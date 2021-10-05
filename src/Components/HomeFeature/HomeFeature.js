import React from 'react';
import './HomeFeature.css';

const HomeFeature = () => {
    return (
        <div className="container-fluid my-5">
            {/* feature heading  */}
            <div className="heading mb-5">
                <h1 className="title lh-base fw-bolder">Awesome Features</h1>
                <p className="text-secondary lh-sm mt-3 w-75 mx-auto">There are many ways you can make an impact on the world. But there is no greater impact that you can make than spreading education, and empowering people who’ll empower and teach people, who, in turn, will empower and teach more.</p>
            </div>
            {/* feature card  */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <i className="far fa-clone fs-1 title lh-base mt-3"></i>
                        <div className="card-body">
                            <h5 className="card-title title">Better Future</h5>
                            <p className="card-text text-secondary lh-sm mt-3">Prepare you for the better future, so thst you can compete with the fast phase world to learn new tecnologies.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <i className="fas fa-file-export fs-1 title lh-base mt-3"></i>
                        <div className="card-body">
                            <h5 className="card-title title">Expert Trainers</h5>
                            <p className="card-text text-secondary lh-sm mt-3">Having the best qualified trainrs to teach you, therefore you can learn better and grow in your career</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <i className="fas fa-briefcase fs-1 title lh-base mt-3"></i>
                        <div className="card-body">
                            <h5 className="card-title title">Job Opportunities</h5>
                            <p className="card-text text-secondary lh-sm mt-3">Help you find the best job that fit your skill set. Giving advise how to applyand prepare you for interviews.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HomeFeature;