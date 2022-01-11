import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import ReviewShop from '../ReviewShop/ReviewShop';
import './Review.css';
import Image from '../../images/giphy.gif';


const Review = () => {
    let getData = []
    if (localStorage.getItem('product')) {
        getData = JSON.parse(localStorage.getItem('product'))
    }
    const [newCart, setNewCart] = useState(getData)
    const removeProduct = (product) => {
        const reaming = getData.filter(pd => pd !== product);
        localStorage.setItem('product', JSON.stringify(reaming));
        setNewCart(reaming)
    };

    const handlePlaceOrder = () => {
        const reaming = [];
        localStorage.setItem('product', JSON.stringify(reaming));
        setNewCart(reaming);
        document.getElementById('main-review-container').style.display = 'none';
        document.getElementById('gif-image-container').style.display = 'block';
    }

    return (
        <div className="container">
            <Header />

            <div id="main-review-container">
                <div className="main-container row">
                    <div className="col-md-8">
                        <div className="shop-container">
                            {
                                getData.map(pd => <ReviewShop key={pd.key} removeProduct={removeProduct} product={pd}></ReviewShop>)
                            }
                        </div>
                    </div>
                    <div className="cart-container col-md-4">
                        <Cart handlePlaceOrder={handlePlaceOrder} cart={newCart} home={false}></Cart>
                    </div>
                </div>
            </div>
            <div style={{display:'none'}} id="gif-image-container">
                <img className="w-100" src={Image} alt="" />
            </div>
        </div>
    );
};

export default Review;