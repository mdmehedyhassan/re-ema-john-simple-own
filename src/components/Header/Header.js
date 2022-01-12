import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img style={{ height: '80px' }} src={logo} alt="" />
            </div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Link className="link-header-tag" to="/">ema-John</Link>
                    <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="link-header-tag" to="/home">Shop</Link>
                            <Link className="link-header-tag" to="/review">Order Review</Link>
                            <Link className="link-header-tag" to="/manage">Manage Inventory here</Link>
                            <a className="link-header-tag" href="https://github.com/mdmehedyhassan/re-ema-john-simple-own">GitHub code</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;