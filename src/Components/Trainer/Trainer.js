import React from 'react';

const Trainer = (props) => {
    // data distructing
    const { courseTrainer, trainerimg, position, education, workingTime, numberOfStudents } = props.service;

    return (
        <div className="col">
            <div className="card">
                {/* services details  */}
                <div className="card h-100">
                    <img src={trainerimg} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title title ">Trainer Name:{courseTrainer}</h5>
                        <p className="card-text text-secondary lh-sm mt-3">Designation: {position}</p>
                        <p className="card-text text-secondary lh-sm mt-3">Education: {education}</p>
                        <p className="card-text text-secondary lh-sm mt-3">Working Time: {workingTime}</p>
                        <p className="card-text text-secondary lh-sm mt-3">Number of Students: {numberOfStudents}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trainer;