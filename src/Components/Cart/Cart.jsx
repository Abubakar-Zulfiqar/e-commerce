import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Container, Table } from 'react-bootstrap'

import { CartContext } from '../Context/CartContext '
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './cart.css'

const Cart = () => {
    const { items, removeItem } = useContext(CartContext)

    return (
        <>
            <Header />
            <Container>
                <Link to='/products'>
                    <Button variant='dark' className='mt-4'>
                        Back
                    </Button>
                </Link>
                <section className='cart'>
                    <h1>Cart Section</h1>
                    <div className='products-col'>

                        {items.map((item) => (
                            <Card
                                className='product-card'
                                key={item.id}
                            >
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>${item.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Cart