import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button, Col, Container, Row } from 'react-bootstrap'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { TbReplace, TbTruckDelivery } from 'react-icons/tb'
import { MdOutlineSecurity } from 'react-icons/md'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Image01 from './images/iphone 01.jpg'
import Image02 from './images/iphone 02.jpg'
import Image03 from './images/iphone 03.jpg'
import Image04 from './images/iphone 04.jpg'

import './products.css'

const Product01 = () => {
    const [selectedColor, setSelectedColor] = useState('grey')
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <h2 className='heading-01'>
                <Link to='/'>Home</Link>/ IPhone X
            </h2>
            <Container>
                <Row className='main'>
                    <Col>
                        <div className='product-images'>
                            <img src={Image01} alt='' />
                            <img src={Image02} alt='' />
                            <img src={Image03} alt='' />
                            <img src={Image04} alt='' />
                        </div>
                    </Col>
                    <Col>
                        <div className='product-image me-5'>
                            <img src={Image01} alt='' />
                        </div>
                    </Col>
                    <Col>
                        <div className='product-details ms-5'>
                            <h3>IPhone X</h3>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                            <span> (58 customer reviews)</span>
                            <br />
                            <br />
                            <b>PKR: 100,000</b>
                            <br />
                            <br />
                            <p>
                                The mobile is compact with its 6.2-inch OLED screen and far
                                lighter at 168g. It perfectly captures the design, looks, and
                                feel of the expensive one. It comes with a snapdragon processor
                                with a 5n chip in it. It has a 200mp camera in the rear 100mp in
                                front perfect for selfie lovers. It also support HDR content
                                means you can watch 4K content on it.
                            </p>
                            <div className='delivery-status'>
                                <div>
                                    <TbTruckDelivery className='status-1' />
                                    <p>Free Delivery</p>
                                </div>
                                <div>
                                    <TbReplace className='status-2' />
                                    <p>30 Days Replacement</p>
                                </div>
                                <div>
                                    <TbTruckDelivery className='status-3' />
                                    <p>Delivered</p>
                                </div>
                                <div>
                                    <MdOutlineSecurity className='status-4' />
                                    <p>2 Year Warranty</p>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <p>
                                    Available: <b>In Stock</b>
                                </p>
                                <p>
                                    ID: <b>01</b>
                                </p>
                                <p>
                                    Brand: <b>Apple</b>
                                </p>
                            </div>
                            <hr />
                            <div>
                                <select
                                    value={selectedColor}
                                    onChange={(e) => setSelectedColor(e.target.value)}
                                >
                                    <option value='grey'>Grey</option>
                                    <option value='black'>Black</option>
                                </select>
                                <div
                                    style={{
                                        backgroundColor: selectedColor,
                                        marginTop: '1rem',
                                        width: 50,
                                        height: 50,
                                        borderRadius: '50%',
                                    }}
                                />
                            </div>
                            <div className='cart'>
                                <Button
                                    onClick={() => setCount(count >= 1 ? count - 1 : 0)}
                                    variant='dark'
                                >
                                    -
                                </Button>
                                <span>{count}</span>
                                <Button onClick={() => setCount(count + 1)} variant='dark'>
                                    +
                                </Button>
                                <br />
                                <br />
                                <br />
                                <Link to='/cart'>
                                    <Button variant='dark' className='ms-4'>
                                        Add to cart
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Product01
