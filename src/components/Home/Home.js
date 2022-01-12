import React, { useState } from 'react';
import './Home.css';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import fakeData from '../../fakeData/products.JSON';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';
import fakeData from '../../fakeData';

const Home = () => {
    // const [getData, setGetData] = useState([]);
    // useEffect(() => {
    //     fetch(fakeData)
    //         .then(res => res.json())
    //         .then(data => setGetData(data))
    // }, []);

    // let newProducts = [];
    // for (let i = getData.length; i; i--) {
    //     let j = Math.floor(Math.random() * i);
    //     const index = newProducts.indexOf(getData[j]);
    //     if (index === -1) {
    //         newProducts.push(getData[j]);
    //     }
    // }
    
    // let product = newProducts.slice(0, 10);
    let product = fakeData.slice(0, 10);

    let getLocalStore = []
    if (localStorage.getItem('product')) {
        getLocalStore = JSON.parse(localStorage.getItem('product'))
    }
    const [cart, setCart] = useState(getLocalStore)
    const handleAddClick = (getProducts) => {
        if (cart === []) {
            getProducts.quantity = 1;
            localStorage.setItem('product', JSON.stringify([...cart, getProducts]))
            setCart(JSON.parse(localStorage.getItem('product')))
            
        }
        else {
            const key = getProducts.key;

            const findProducts = getLocalStore.find(pd => pd.key === key);
            if (!findProducts) {
                getProducts.quantity = 1;
                localStorage.setItem('product', JSON.stringify([...cart, getProducts]))
                setCart(JSON.parse(localStorage.getItem('product')))
            }
            else {
                findProducts.quantity = findProducts.quantity + 1;
                const reaming = cart.filter(pd => pd.key !== key)
                console.log(findProducts)
                localStorage.setItem('product', JSON.stringify([...reaming, findProducts]))
                setCart(JSON.parse(localStorage.getItem('product')))
            }
        }
    }
    let productQuantity = 0;
    for (let i = 0; i < cart.length; i++) {
        const getCart = cart[i];
        productQuantity += getCart.quantity;
    }
    return (
        <div className="container">
            <Header />
            <div className="header-search">
                <input className="form-control" type="text" name="" id="" placeholder="type here to search" />
                <h4 className="text-warning"><FontAwesomeIcon icon={faShoppingCart} /> <span>{productQuantity}</span> </h4>
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