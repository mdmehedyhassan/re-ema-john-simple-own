import React from 'react';
import Header from '../Header/Header';
import Sleeping from '../../images/sleeping.gif';

const Manage = () => {
    return (
        <div className="container text-center">
            <Header></Header>
            <h1 className="text-success">Developer Now Sleeping!!!</h1>
            <img src={Sleeping} alt=""/>
        </div>
    );
};

export default Manage;