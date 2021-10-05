import React from 'react';
import Review from '../Review/Review';
import './HomeReview.css';

const HomeReview = () => {
    return (
        <div className="container-fluid my-5">
            {/* feature heading  */}
            <div className="heading mb-5">
                <h1 className="title lh-base fw-bolder">Reviews</h1>
                <p className="text-secondary lh-sm mt-3 w-75 mx-auto mb-5">You can have access to professors from the best universities in the world, but you still need to be willing to do the work, even when it’s hard. If you can’t do it alone, remember that asking for help is part of doing the work.</p>
            </div>
            {/* review cards  */}
            <Review></Review>
        </div>
    );
};

export default HomeReview;