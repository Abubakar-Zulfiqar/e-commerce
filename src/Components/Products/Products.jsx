import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import { BsFillGridFill, BsList } from 'react-icons/bs'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './products.css'

const Products = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')

    useEffect(() => {
        axios
            .get(`http://localhost:3000/products?q=${search}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log('wrong in get method', err))
    }, [search])

    const [minPrice, maxPrice] = selectedCategory.split('-').map(Number)

    const filteredProducts = data.filter(
        (product) =>
            selectedCategory === 'all' ||
            product.category === selectedCategory ||
            product.brand === selectedCategory ||
            product.color === selectedCategory ||
            product.price >= minPrice && product.price <= maxPrice
    )

    const uniqueCategory = []
    data.map((items) => {
        if (uniqueCategory.indexOf(items.category) === -1) {
            uniqueCategory.push(items.category)
        }
    })

    const uniqueBrand = []
    data.map((items) => {
        if (uniqueBrand.indexOf(items.brand) === -1) {
            uniqueBrand.push(items.brand)
        }
    })

    const uniqueColor = []
    data.map((items) => {
        if (uniqueColor.indexOf(items.color) === -1) {
            uniqueColor.push(items.color)
        }
    })

    return (
        <>
            <Header />
            <Container>
                <Row className='products mt-5' >
                    <Col sm={2}>
                        <div className='products-search mb-5'>
                            <Form style={{ width: '12rem' }}>
                                <Form.Group className='mb-3'>
                                    <Form.Control
                                        type='text'
                                        placeholder='Search'
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </Form.Group>
                            </Form>
                        </div>
                        <div className='products-categories mb-5'>
                            <h4>Category</h4>
                            <Form.Select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value='all'>All</option>
                                {uniqueCategory.map((value, id) => (
                                    <option value={value} key={id}>
                                        {value}
                                    </option>
                                ))}
                            </Form.Select>
                        </div>
                        <div className='products-companies mb-5'>
                            <h4>Company</h4>
                            <Form.Select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value='all'>All</option>
                                {uniqueBrand.map((value, id) => (
                                    <option value={value} key={id}>
                                        {value}
                                    </option>
                                ))}
                            </Form.Select>
                        </div>
                        <div className='products-colors'>
                            <h4>Colors</h4>
                            <div>
                                <Form.Select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    <option value='all'>All</option>
                                    {uniqueColor.map((x, i) => (
                                        <option value={x} key={i}>
                                            {x}
                                        </option>
                                    ))}
                                </Form.Select>
                                <div
                                    style={{
                                        backgroundColor: selectedCategory,
                                        marginTop: '1rem',
                                        width: 50,
                                        height: 50,
                                        borderRadius: '50%',
                                        border: '1px solid black'
                                    }}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col sm={10}>
                        <Row className='mb-5'>
                            <Col className='mt-2' sm={8} style={{ textAlign: 'center' }}>
                                <h5>12 Products Available</h5>
                            </Col>
                            <Col>
                                <Form.Select value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}>
                                    <option value='all'>All</option>
                                    <option value='0-100'>$0 - $100</option>
                                    <option value='100-200'>$100 - $200</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Col className='products-col'>
                            {filteredProducts.map((x, i) =>
                            (
                                <Card
                                    className='product-card'
                                    key={i}
                                    onClick={() => navigate(`/p/${x.id}`)}
                                >
                                    <Card.Body>
                                        <Card.Title>{x.name}</Card.Title>
                                        <Card.Text>${x.price}</Card.Text>
                                        <Card.Text className='products-images'>
                                            <img
                                                src={require(`./images/${x.image1}`)}
                                                alt='x.name'
                                            />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                            )}
                        </Col>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Products
