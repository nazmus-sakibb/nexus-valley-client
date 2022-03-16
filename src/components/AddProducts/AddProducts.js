import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL,
            orderTime: new Date().toLocaleString
        }
        const url = `http://localhost:5500/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => console.log('server site response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '6fdd391ac1cf90bc398c9c5896554cac');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name"><strong>Product Name</strong></label>
                <input name="name" id="name" placeholder="Enter Name" ref={register}/>
                <br />
                <label htmlFor="price"><strong>Add Price</strong></label>
                <input name="price" id="price" placeholder="Enter Price" ref={register}/>
                <br />
                <label htmlFor="Weight"><strong>Weight</strong></label>
                <input name="weight" id="Weight" placeholder="Enter Weight" ref={register}/>
                <br />
                <label htmlFor="img"><strong>Add Photo</strong></label>
                <input id="img" name="image" type="file" onChange={handleImageUpload} />
                <br />
                <input type="submit" value="Save" />
            </form>
        </div>
    );
};

export default AddProducts;