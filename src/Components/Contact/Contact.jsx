import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Form } from 'react-bootstrap'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './contact.css'

const Contact = () => {
    const navigate = useNavigate()

    return (
        <>
            <Header />
            <Container>
                <div className='contact-main'>
                    <h1>Contact Section</h1>
                    <Form className='contact-form'>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email Name</Form.Label>
                            <Form.Control type='email' placeholder='Enter name' />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type='email' placeholder='name@example.com' />
                        </Form.Group>
                        <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlTextarea1'
                        >
                            <Form.Label>Enter Your Message</Form.Label>
                            <Form.Control as='textarea' rows={3} />
                        </Form.Group>
                        <Button
                            variant='dark'
                            type='submit'
                            onClick={() => navigate('/')}
                        >
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default Contact
