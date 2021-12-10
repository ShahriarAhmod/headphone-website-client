import React from 'react';
import headphoneUser from '../../../images/headphoneuser.png'
import Zoom from 'react-reveal/Zoom';

const ExtraSection = () => {
    return (
        <div className=' d-flex justify-content-evenly  pt-5 pb-4 mt-5' style={{ backgroundColor: 'rgb(240, 245, 245)' }}>
             <div>
             <Zoom left>
                <img className='mb-3' style={{ padding: '5px', margin: '5px', borderRadius: '5px', boxShadow: '0 0 8px 0 grey', width: '450px', height: '300px' }} src={headphoneUser} alt="" />
                </Zoom>
            </div> 
            <div className="p-5">
                <Zoom right>
                <h2 className="fw-bold pb-2 text-center" style={{color: 'rgb(51, 51, 153)'}}>About us</h2>
                <h5 className='mt-3 fs-5 text-center'>We are selling popular and high quality headphones for you.<br/> We are also providing return facilities and warranty.<br/> We try to provide the best service for you</h5>
                </Zoom>
            </div>
           


        </div>
    );
};

export default ExtraSection;