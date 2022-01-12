import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Shop.css';

const Shop = (props) => {
    const {img, name, seller, price,  stock, features} = props.product;
    
    return (
        <div className="row shop-show-card">
            <div className="col-md-4">
                <img className="w-100" src={img} alt="" />
            </div>
            <div className="col-md-8">
                <h4 className="product-name">{name}</h4>
                <div className="row">
                    <div className="col-md-6">
                        <p><small>by: {seller}</small></p>
                        <p>${price}</p>
                        <p><small>only {stock} left in stock - order soon</small></p>
                        <button onClick={() => props.handleAddClick(props.product)}><FontAwesomeIcon icon={faShoppingCart} />  add to cart</button>
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-warning">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </h4>
                        <h5>Features</h5>
                        <ul>
                            {
                                features.map(feature => <li key={feature.description}><span className="feature-description">{feature.description}</span>: <span className="feature-value">{feature.value}</span></li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;