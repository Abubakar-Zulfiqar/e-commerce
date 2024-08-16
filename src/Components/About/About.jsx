import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Image01 from '../Home/Images/Home 01.jpg'

import './about.css'

const About = () => {
    return (
        <>
            <Header />
            <Container>
                <Row className='about-info mt-5'>
                    <Col>
                        <h4 className='info-heading'>Welcome To</h4>
                        <h1>Abubakar's Store</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id hic ab reiciendis aut voluptate eius eum quae cupiditate molestiae vitae.
                        </p>
                        <Button variant='dark'>Show Now</Button>
                    </Col>
                    <Col>
                        <div className='info-img'>
                            <img src={Image01} alt='' />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default About