import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';

const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://enigmatic-reef-99485.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <h3 className="mt-5" style={{ color: 'rgb(32, 32, 96)' }}>Explore Our Headphone Collection</h3>
            <hr/>
            <div className="container mt-4 mb-5 mt-5">
                <div className="row">
                    {
                        products.map(product => <div key={product._id} className='col-sm-6 border-bottom'>
                            <div className="card border-white p-5">
                                <img className='rounded-top p-3' src={product.image} style={{ height: '400px' }} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title fs-4 fw-bold">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <h5 className='mb-3 fs-4 fw-bold' style={{color: 'rgb(0, 26, 102)'}}>Price: {product.price} $</h5>
                                    <Link to={`/purchase/${product._id}`}><button className='btn btn-outline-dark'>Purchase</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;