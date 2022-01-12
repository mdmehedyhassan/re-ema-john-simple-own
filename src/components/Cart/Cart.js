import { faCalendarCheck, faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    let productQuantity = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        productQuantity += product.quantity;
        const sumQuantity =  product.price * product.quantity;
        total =  total + sumQuantity ;
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const beforeTax = total + shipping;

    const tax = beforeTax * 0.1;

    const totalPrice = tax + beforeTax;


    return (
        <div className="cart-container">
            <h3>Order Summary</h3>
            <h5>Items ordered: {productQuantity}</h5>
            <div className="text-start">
                <div className="d-flex justify-content-between">
                    <h5>Items: </h5>
                    <h5>$ {(total).toFixed(2) || 0}</h5>
                </div>
                <div className="d-flex justify-content-between">
                    <h5>Shipping & Handling: </h5>
                    <h5>${(shipping).toFixed(2)}</h5>
                </div>
                <div className="d-flex justify-content-between">
                    <h5>Total before tax: </h5>
                    <h5>${(beforeTax).toFixed(2) || 0}</h5>
                </div>
                <div className="d-flex justify-content-between">
                    <h5>Estimated tax:</h5>
                    <h5>${(tax).toFixed(2) || 0}</h5>
                </div>
                <div className="d-flex text-danger justify-content-between">
                    <h4>Order Total: </h4>
                    <h4>${(totalPrice).toFixed(2) || 0}</h4>
                </div>
                {
                    props.home ? <Link style={{ textDecoration: 'none', color: 'black' }} to="/review"><button><FontAwesomeIcon icon={faHistory} /> Review your order</button></Link> :
                    <button onClick={()=> props.handlePlaceOrder()}><FontAwesomeIcon icon={faCalendarCheck} /> Place order</button>
                }
            </div>
        </div>
    );
};

export default Cart;