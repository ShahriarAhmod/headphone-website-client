import React from 'react';
import banner from '../../../images/headphonesbg.png'
import { Link } from 'react-router-dom';
import './Banner.css'
import Flip from 'react-reveal/Flip';
import Jump from 'react-reveal/Jump';
import Shake from 'react-reveal/Shake';


const Banner = () => {
    
    return (
        <div className='d-flex flex-wrap justify-content-around align-items-center pt-5' style={{backgroundColor:''}}>
            <div>
               
                <h1 style={{color: 'rgb(0, 51, 51)'}}> <Flip left cascade> Tired of the Outside Noise? <br/>Order Headphones now! </Flip></h1>
                <h5 className='mt-3 fs-5'><Shake>Style your mood with these stylish headphone<br />from Tech Hub. Tune it and have fun.<br /></Shake></h5>
               
                
                <Link to='/allProducts'>
                    <button className='btn-banner mt-3'><Jump>Explore ➜</Jump> </button>
                </Link>
            </div>
            <div>
                <img className='img-fluid mt-5 p-2' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;