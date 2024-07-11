import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Button, Col, Container, Row } from "react-bootstrap";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { BsBarChart } from "react-icons/bs";
import {
  AiFillApple,
  AiFillFacebook,
  AiFillGoogleCircle,
} from "react-icons/ai";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products.slice(0, 3)); // Get first three products
      })
      .catch((error) => console.error("Error fetching the data:", error));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Row className="about-info mt-5">
          <Col>
            <h4 className="info-heading">Welcome To</h4>
            <h1>Abubakar's Store</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id hic
              ab reiciendis aut voluptate eius eum quae cupiditate molestiae
              vitae.
            </p>
            <Button variant="dark">Show Now</Button>
          </Col>
          <Col>
            <div className="info-img">
              <img src={"./Images/Home 01.jpg"} alt="" />
            </div>
          </Col>
        </Row>

        <Row className="features">
          <p className="info-heading">CHECK NOW!</p>
          <h3>Our Feature Services</h3>
          {products.map((product, index) => (
            <Col key={index} onClick={() => navigate(`/product/${product.id}`)}>
              <div className="img-cover">
                <img
                  src={require(`../Products/images/${product.image1}`)}
                  alt={product.name}
                />
              </div>
              <p>{product.name}</p>
              <div className="price">PKR {product.price}</div>
            </Col>
          ))}
        </Row>

        <Row className="services mt-5">
          <Col className="services-1">
            <div className="icon-1">
              <TbTruckDelivery className="services-icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </Col>
          <Col className="services-2">
            <div className="icon-2">
              <MdOutlineSecurity className="services-icon" />
              <h3>Non-contact Shipping</h3>
            </div>
            <div className="icon-3">
              <FaHandHoldingUsd className="services-icon" />
              <h3>Money-back guaranteed</h3>
            </div>
          </Col>
          <Col className="services-3">
            <div className="icon-4">
              <RiSecurePaymentFill className="services-icon" />
              <h3>Super Secure Payment</h3>
            </div>
          </Col>
        </Row>

        <Row className="trusted mt-5 mb-5">
          <h3>Trusted By 1000+ Companies</h3>
          <Col className="trusted-1">
            <BsBarChart />
            <span>Chartz</span>
          </Col>
          <Col className="trusted-2">
            <AiFillApple />
            <span>Apple</span>
          </Col>
          <Col className="trusted-3">
            <AiFillFacebook />
            <span>Facebook</span>
          </Col>
          <Col className="trusted-4">
            <AiFillGoogleCircle />
            <span>Google</span>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
