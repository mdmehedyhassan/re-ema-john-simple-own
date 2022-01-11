import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import fakeData from '../../fakeData/products.JSON';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';

const Home = () => {
    const [getData, setGetData] = useState([]);
    useEffect(() => {
        fetch(fakeData)
            .then(res => res.json())
            .then(data => setGetData(data))
    }, []);

    let newProducts = [];
    for (let i = getData.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        const index = newProducts.indexOf(getData[j]);
        if (index === -1) {
            newProducts.push(getData[j]);
        }
    }
    let product = newProducts.slice(0, 10);

    let getLocalStore = []
    if(localStorage.getItem('product')){
        getLocalStore = JSON.parse(localStorage.getItem('product'))
    }
    const [cart, setCart] = useState(getLocalStore)
    const handleAddClick = (getProducts) => {
        localStorage.setItem('product', JSON.stringify([...cart, getProducts]))
        setCart(JSON.parse(localStorage.getItem('product')))
    }

    return (
        <div className="container">
            <Header />
            <div className="header-search">
                <input className="form-control" type="text" name="" id="" placeholder="type here to search" />
                <h4><FontAwesomeIcon icon={faShoppingCart} /> <span>0</span> </h4>
            </div>
            <div className="main-container row">
                <div className="col-md-8">
                    <div className="shop-container">
                        {
                            product.map(pd => <Shop handleAddClick={handleAddClick} key={pd.key} product={pd}></Shop>)
                        }
                    </div>
                </div>
                <div className="cart-container col-md-4">
                    <Cart cart={cart} home={true}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Home;