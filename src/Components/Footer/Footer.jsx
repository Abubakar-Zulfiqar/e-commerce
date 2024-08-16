import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { FaDiscord } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsYoutube } from 'react-icons/bs'

import './footer.css'

const Footer = () => {
    return (
        <>
            <footer className='py-4 bg-dark text-center text-light footer'>
                <div className='about'>
                    <div className='about-child'>
                        <h4>Mian Abubakar</h4>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, repellat.
                        </p>
                    </div>
                    <div className='about-child'>
                        <h4>Subscribe to get more Updates</h4>
                        <br />
                        <Form>
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <Form.Control type='email' placeholder='Enter email' />
                            </Form.Group>
                        </Form>
                        <br />
                        <Button variant='light'>Subscribe</Button>
                    </div>
                    <div className='about-child'>
                        <h4>Folow Us</h4>
                        <div className='icons'>
                            <FaDiscord className='icon' />
                            <AiOutlineInstagram className='icon' />
                            <BsYoutube className='icon' />
                        </div>
                    </div>
                    <div className='about-child'>
                        <h4>Call Us</h4>
                        <p>+92 123 1234567</p>
                    </div>
                </div>
                <hr />
                All Rights Reserved &copy {new Date().getFullYear()}
            </footer>
        </>
    )
}

export default Footer