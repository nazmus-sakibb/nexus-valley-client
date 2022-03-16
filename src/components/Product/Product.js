import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Product = (props) => {
    const {imageURL, name, price, _id} = props.product;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const buyProduct = id => {
        console.log(id);
    }

    return (
        <div className="col-md-4 col-sm-12">
            <img className="img-fluid" style={{ height: '300px' }} src={imageURL} alt="" />
            <h3>{name}</h3>
            <h4><span className="text-primary">{price}</span> <Link to={`/checkout/${_id}`}><button className="btn btn-primary text-white text-decoration-none">Buy Now</button></Link></h4>
        </div >
    );
};

export default Product;