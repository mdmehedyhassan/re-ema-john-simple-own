import React from 'react';
import './Header.css';
import loto from '../../images/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img style={{ height: '80px' }} src={loto} alt="" />
            </div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand className="link-header-tag" href="/">ema-John</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="link-header-tag" href="/home">Shop</Link>
                            <Link className="link-header-tag" href="/review">Order Review</Link>
                            <Link className="link-header-tag" href="/manage">Manage Inventory here</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;