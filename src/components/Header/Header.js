import React from 'react';
import './Header.css';
import loto from '../../images/logo.png'

const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img style={{height: '80px'}} src={loto} alt="" />
            </div>
            <nav>
                <ul>
                    <a href="/home">Shop</a>
                    <a href="/review">Order Review</a>
                    <a href="/manage">Manage Inventory here</a>
                </ul>
            </nav>
        </div>
    );
};

export default Header;