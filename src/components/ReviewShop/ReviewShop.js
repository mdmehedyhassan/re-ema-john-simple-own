import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewShop.css'

const ReviewShop = (props) => {
    const {name, seller, price, quantity} = props.product;
    console.log(props.product, props.product.quantity)
    return (
        <div className="row shop-show-card">
            <h4 className="product-name">{name}</h4>
            <div className="col-md-6">
                <h3 className="mt-4 mb-2">${price}</h3>
                <h3><small>sold by: {seller}</small></h3>
                <h3>Quantity: {quantity || 1}</h3>
                <button onClick={() => props.removeProduct(props.product)}><FontAwesomeIcon icon={faTrashAlt} /> Remove</button>
            </div>
            <div className="col-md-6">
                <h5>Shipping options</h5>
                <h4>
                    8-10 business days <br />
                    <span className="shipping-span">$0 - Free Shipping</span>
                </h4>
                <h4>
                    5-7 business days <br />
                    <span className="shipping-span">$3.99 - Free Shipping</span>
                </h4>
                
                <h4>2-4 business days <br />
                <span className="shipping-span">$7.99 - Free Shipping</span>
                </h4>
                
            </div>
        </div>
    );
};

export default ReviewShop;