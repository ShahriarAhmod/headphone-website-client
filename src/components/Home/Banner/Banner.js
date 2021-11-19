import React from 'react';
import banner from '../../../images/headphonesbg.png'
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='d-flex flex-wrap justify-content-around align-items-center pt-5' style={{backgroundColor:''}}>
            <div>
                <h1 style={{color: 'rgb(0, 51, 51)'}}>Tired of the Outside Noise? <br/>Order Headphones now!</h1>
                <h5 className='mt-3 fs-5'>Style your mood with these stylish headphone<br />from Tech Hub. Tune it and have fun.<br /></h5>
                <Link to='/allProducts'>
                    <button className='btn-banner mt-3'>Explore ➜ </button>
                </Link>
            </div>
            <div>
                <img className='img-fluid mt-5 p-2' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;