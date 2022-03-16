import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://damp-inlet-46603.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="row product-container">
            {
                products.map(product => <Product product={product} id={product._id}></Product>)
            }
        </div>
    );
};

export default Home;