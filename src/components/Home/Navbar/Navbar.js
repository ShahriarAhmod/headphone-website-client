import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import icon from '../../../images/logo.png';
import './Navbar.css'


const Navbar = () => {
    const { logOut, user, admin } = useAuth()


    return (
        <div>
            {
                admin ?
                    <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'rgb(173, 235, 235)'}}>
                        <div class="container-fluid">
                        <img className="ms-4" src={icon} alt="" style={{ width: '40px' }} />
                                <span className="fs-4 fw-bold ms-2" style={{color: 'rgb(15, 62, 62)'}}>Tech Hub</span>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse " id="navbarNavDropdown">


                                <ul class="navbar-nav  ms-auto">
                                    <li class="nav-item">
                                        <Link to="/home" className=" fs-5 text-dark text-decoration-none title" style={{ cursor: 'pointer' }}>Home</Link>
                                    </li>
                                    <li class="nav-item">
                                            <Link to="/allProducts" className=" fs-5 text-dark text-decoration-none ms-4" style={{ cursor: 'pointer' }}>Explore</Link>
                                        </li>

                                    <li class="nav-item">
                                        <Link to="/dashBoardNav" className=" fs-5 text-dark text-decoration-none ms-4 " style={{ cursor: 'pointer' }}>Dashboard</Link>
                                    </li>

                                    <Link to="/login" className=" fs-5 text-dark text-decoration-none ms-4 me-3 title" style={{ cursor: 'pointer' }}>Login</Link>
                                    <span className=" fs-5 me-2 ms-5 text-dark text-decoration-none mt-1">{user.displayName} </span>
                                    {user?.displayName && <button className="btn-logout fw-bold ms-2 me-3" onClick={logOut}>Logout</button>}
                                </ul>
                            </div>

                        </div>
                    </nav >

                    :

                    <div>
                        <nav class="navbar navbar-expand-lg navbar-light"  style={{backgroundColor: 'rgb(173, 235, 235)'}}>
                            <div class="container-fluid">
                                <img className="ms-4" src={icon} alt="" style={{ width: '40px' }} />
                                <span className="fs-4 fw-bold ms-2" style={{color: 'rgb(15, 62, 62)'}}>Tech Hub</span>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse " id="navbarNavDropdown">
                                    <ul class="navbar-nav  ms-auto">
                                        <li class="nav-item">
                                            <Link to="/home" className=" fs-5 text-dark text-decoration-none title" style={{ cursor: 'pointer' }}>Home</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/allProducts" className=" fs-5 text-dark text-decoration-none ms-4 title" style={{ cursor: 'pointer' }}>Explore</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/myorders" className=" fs-5 text-dark text-decoration-none ms-4 title" style={{ cursor: 'pointer' }}>Dashboard</Link>
                                        </li>
                                        <Link to="/login" className=" fs-5 text-dark text-decoration-none ms-4 me-3 title" style={{ cursor: 'pointer' }}>Login</Link>
                                        <span className=" fs-5 me-2 ms-4 text-dark text-decoration-none">{user.displayName} </span>
                                        {user?.displayName && <button className="btn-logout fw-bold ms-2 me-3 mt-1" onClick={logOut}>Logout</button>}
                                    </ul>
                                </div>
                            </div>
                        </nav >
                    </div >
            }
        </div>
    );
};

export default Navbar;