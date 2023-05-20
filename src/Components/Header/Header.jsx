import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import './header.css'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' className='nav'>
                <Navbar.Brand href='/' className='nav-heading'>Online Store</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ms-auto nav-links'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/about'>About</Nav.Link>
                        <Nav.Link href='/products'>Products</Nav.Link>
                        <Nav.Link href='/contact'>Contact</Nav.Link>
                        <Nav.Link href='/cart'><AiOutlineShoppingCart /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header