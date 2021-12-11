import React from 'react';
import banner from '../../../images/headphonesbg.png'
import { Link } from 'react-router-dom';
import './Banner.css'
import Jump from 'react-reveal/Jump';
import Shake from 'react-reveal/Shake';
import Zoom from 'react-reveal/Zoom';


const Banner = () => {
    
    return (
        <div className='d-flex flex-wrap justify-content-around align-items-center pt-5' style={{backgroundColor:''}}>
            <div>
               
            <Shake> <h1 style={{color: 'rgb(0, 51, 51)'}}> Tired of the Outside Noise? <br/>Order Headphones now! </h1> </Shake>
            <Shake><h5 className='mt-3 fs-5'>Style your mood with these stylish headphone<br />from Tech Hub. Tune it and have fun.<br /></h5></Shake>
               
                
                <Link to='/allProducts'>
                    <button className='btn-banner mt-3'><Jump>Explore ➜</Jump> </button>
                </Link>
            </div>
            <div>
                <Zoom>
                <img className='img-fluid mt-5 p-2' src={banner} alt="" />
                </Zoom>
            </div>
        </div>
    );
};

export default Banner;