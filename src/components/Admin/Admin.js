import React, { useState } from 'react';
import AddProducts from '../AddProducts/AddProducts';

const Admin = () => {
    const [addProduct, setAddProduct] = useState(false);


    return (
        <div className="row">
            <div className="col-md-4 col-sm-12">
                <nav>
                    <ul>
                        <li><a className="text-decoration-none" onClick={() => setAddProduct(!addProduct)} href="#manageProduct">Manage Product</a></li>
                        <li><a className="text-decoration-none" onClick={() => setAddProduct(!addProduct)} href="#addProduct">Add Product</a></li>
                        <li><a className="text-decoration-none" href="">Edit Product</a></li>
                    </ul>
                </nav>
            </div>
            <div className="col-md-8 col-sm-12">
                {!addProduct && <div id="manageProduct">
                    <h3>Manage product area</h3>
                </div>}
                {addProduct && <div id="addProduct">
                    <h3>Add Product</h3>
                    <AddProducts />
                </div>}
            </div>
        </div>
    );
};

export default Admin;