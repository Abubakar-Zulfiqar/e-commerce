import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";

import { CartContext } from "../Context/CartContext ";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./products.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useContext(CartContext);

  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedColor, setSelectedColor] = useState("grey");

  const getProduct = async () => {
    try {
      const response = await fetch(`/db.json`);
      const data = await response.json();
      const product = data.products.find((product) => product.id === id);
      setData(product);
    } catch (err) {
      console.error("Error fetching the product");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Header />
      <h2 className="heading-01">
        <Link to="/">Home</Link>/ {data.name}
      </h2>
      <Container>
        <Row className="main">
          <Col sm={2}>
            <div className="product-images">
              <img
                src={data?.image1 ? require(`./images/${data.image1}`) : null}
                alt=""
              />
              <img
                src={data?.image2 ? require(`./images/${data.image2}`) : null}
                alt=""
              />
              <img
                src={data?.image3 ? require(`./images/${data.image3}`) : null}
                alt=""
              />
              <img
                src={data?.image4 ? require(`./images/${data.image4}`) : null}
                alt=""
              />
            </div>
          </Col>
          <Col sm={6}>
            <div className="product-image">
              <img
                src={data?.image1 ? require(`./images/${data.image1}`) : null}
                alt=""
              />
            </div>
          </Col>
          <Col sm={4}>
            <div className="product-details ms-5">
              <h3>{data.name}</h3>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <span> (58 customer reviews)</span>
              <br />
              <br />
              <b>${data.price}</b>
              <br />
              <br />
              <p>{data.des}</p>
              <div className="delivery-status">
                <div>
                  <TbTruckDelivery className="status-1" />
                  <p>Free Delivery</p>
                </div>
                <div>
                  <TbReplace className="status-2" />
                  <p>30 Days Replacement</p>
                </div>
                <div>
                  <TbTruckDelivery className="status-3" />
                  <p>Delivered</p>
                </div>
                <div>
                  <MdOutlineSecurity className="status-4" />
                  <p>2 Year Warranty</p>
                </div>
              </div>
              <hr />
              <div>
                <p>
                  Available: <b>In Stock</b>
                </p>
                <p>
                  ID: <b>{data.id}</b>
                </p>
                <p>
                  Brand: <b>{data.brand}</b>
                </p>
              </div>
              <hr />
              <div>
                <Form.Select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  style={{ textAlign: "center", width: "5rem" }}
                  disabled
                >
                  <option value={data.color}>{data.color}</option>
                </Form.Select>
                <div
                  style={{
                    backgroundColor: selectedColor,
                    marginTop: "1rem",
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="cart">
                <Link to="/cart">
                  <Button
                    variant="dark"
                    className="ms-4"
                    onClick={() => addItem(data)}
                  >
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
  );
};

export default ProductDetail;
