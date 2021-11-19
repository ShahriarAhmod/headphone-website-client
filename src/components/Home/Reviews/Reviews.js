import React, { useEffect } from 'react';
import { useState } from 'react';
import './Reviews.css'


const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://enigmatic-reef-99485.herokuapp.com/showReview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <h3 className='fw-bold mt-5 mb-5 pt-5' style={{color: 'rgb(102, 102, 204)'}}>Valuable Review of Our Customers</h3>
            <div className='d-flex container justify-content-center mb-5 user-review'>
                {
                    reviews.map((review, i) => <div key={i}>
                        <div className="card text-dark mb-2 ms-3" style={{ width: '20rem', height: '250px' }}>

                            <div className="card-body review-text">
                                <div className="fs-5 fw-bold">{review.reviewerName}</div>
                                Rating: <span className='text-warning rounded ps-1 pe-1'> ★ </span>{review.rating} <br/> 
                                {
                                    review.rating <= 0 ?
                                        <div className='text-warning fs-3'>☆☆☆☆☆</div> :
                                        review.rating > 0 && review.rating <= 1 ? <div className='text-warning fs-3'>★☆☆☆☆</div> :
                                            review.rating > 1 && review.rating <= 1.5 ? <div className='text-warning fs-3'>★⯪☆☆☆</div> :
                                                review.rating > 1.5 && review.rating <= 2 ? <div className='text-warning fs-3'>★★☆☆☆</div> :
                                                    review.rating > 2 && review.rating <= 2.5 ? <div className='text-warning fs-3'>★★⯪☆☆</div> :
                                                        review.rating > 2.5 && review.rating <= 3 ? <div className='text-warning fs-3'>★★★☆☆</div> :
                                                            review.rating > 3 && review.rating <= 3.5 ? <div className='text-warning fs-3'>★★★⯪☆</div> :
                                                                review.rating > 3.5 && review.rating <= 4 ? <div className='text-warning fs-3'>★★★★☆</div> :
                                                                    review.rating > 4 && review.rating <= 4.5 ? <div className='text-warning fs-3'>★★★⯪☆</div> :
                                                                        <div className='text-warning fs-3'>★★★★★</div>
                                }
                                 <h5 className="card-title fs-5 ">{review.topicName}</h5>
                                <p className="card-text">{review.comment}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;