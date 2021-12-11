import React from 'react';
import ScrollToTop from "react-scroll-to-top";


const Footer = () => {
    return (
        <div className="pb-3 " style={{ backgroundColor: 'rgb(82, 122, 122)' }}>
            <ScrollToTop smooth="20" />
            <h2 className="pt-2 fw-bold" style={{ color: 'rgb(209, 224, 224)' }}>Tech hub</h2>
            <div className="d-flex align-items-center justify-content-evenly p-2">
                <div classname="">
                    <div className="text-light">
                        <h4>Our Address:</h4>
                        <h6>Gulshan 2/10 <br />Dhaka,Bangladesh</h6>
                        <h6><i class="fas fa-phone-alt pe-1"></i> +88087597781</h6>
                        <h6><i class="fas fa-briefcase pe-1"></i> +67955426713</h6>
                        <h6><i class="fas fa-envelope pe-1"></i> TechHub@gmail.com</h6>
                    </div>
                </div>
                <div classname="">
                    <div className="text-light">
                        <h4>Link</h4>
                        <u>About Us</u>
                        <br/>
                        <u>Contact Us</u>
                        <br/>
                        <u>Visit Us</u>
                        <br/>
                        <u>Our Shop</u>
                        <br/>
                    </div>
                </div>
                <div className="">
                    <div className="text-light">
                        <h3 className="mb-3">Follow Us On</h3>
                        <i class="fab fa-facebook-square fs-2"></i>
                        <i class="fab fa-instagram-square fs-2 ps-2"></i>
                        <i class="fab fa-linkedin fs-2 ps-2"></i>
                        <i class="fab fa-google-plus-square fs-2 ps-2"></i>

                    </div>
                </div>
            </div>
            <h6 className="pb-2 text-light">Copyright <i class="far fa-copyright"></i> by Tech Hub</h6>
        </div>
    );
};

export default Footer;