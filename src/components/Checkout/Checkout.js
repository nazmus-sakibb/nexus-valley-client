import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Checkout.css';

const Checkout = () => {
    const { id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://damp-inlet-46603.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id])
    const selectedProduct = product.find(pd => pd._id === id);

    if (selectedProduct) {
        console.log(selectedProduct);
    }


    return (
        <div>
            <h2 className="checkout-header">Checkout</h2>
            {selectedProduct && <table>
                <thead>
                    <tr className="thead">
                        <td>Descriptions</td>
                        <td>Quantity</td>
                        <td>Price</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{selectedProduct.name}</td>
                        <td>1</td>
                        <td>{selectedProduct.price}</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td></td>
                        <td><strong>{selectedProduct.price}</strong></td>
                    </tr>
                </tbody>
                <br/>
                <button className="btn btn-success button">Checkout</button>
            </table>}
        </div>
    );
};

export default Checkout;