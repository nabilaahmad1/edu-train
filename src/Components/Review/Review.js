import React from 'react';
import './Review.css';
import slide1 from './images/people.jpg';
import slide2 from './images/people1.jpg';
import slide3 from './images/people2.jpg';

const Review = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
            <div className="col">
                <div className="card h-100">
                    <img src={slide1} className="card-img-top" alt="slide-image1" />
                    <div className="card-body">
                        <h5 className="card-title title">Anna Michale</h5>
                        <p className="card-text">Jr. UX/UI Desiner</p>
                        <p className="card-text text-secondary lh-sm mt-3">Best course ever. Trainers were pretty helful. Easy to understand course module. Ovarall it's a good course and I recomend all of you to join the course..</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={slide2} className="card-img-top" alt="slide-image2" />
                    <div className="card-body">
                        <h5 className="card-title title">Jhon Doe</h5>
                        <p className="card-text">Jr. Web Devoloper</p>
                        <p className="card-text text-secondary lh-sm mt-3">TBest course ever.Trainers were pretty helful.Easy to understand course module.Ovarall it's a good course and I recomend all of you to join the course.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={slide3} className="card-img-top" alt="slide-image3" />
                    <div className="card-body">
                        <h5 className="card-title title ">Martha Swart</h5>
                        <p className="card-text">Jr.UX/UI Desiner</p>
                        <p className="card-text text-secondary lh-sm mt-3">Best course ever.Trainers were pretty helful.Easy to understand course module.Ovarall it's a good course and I recomend all of you to join the course.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;