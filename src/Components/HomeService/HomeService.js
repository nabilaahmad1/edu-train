import React from 'react';
import './HomeService.css';

const HomeService = (props) => {
    // data distructing
    const { img, courseName, courseDetail, coursePrice, courseTrainer } = props.service;
    return (
        <div className="col">
            {/* services details  */}
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title title ">{courseName}</h5>
                    <p className="card-text text-secondary lh-sm mt-3">{courseDetail}</p>
                    <p className="card-text title lh-sm mt-3">Course Price: ${coursePrice}</p>
                    <p className="card-text text-dark lh-sm mt-3">Conducted by: {courseTrainer}</p>
                </div>
            </div>
        </div>
    );
};

export default HomeService;