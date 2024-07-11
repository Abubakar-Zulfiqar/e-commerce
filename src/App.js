import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  About,
  Products,
  Contact,
  Cart,
  ProductDetail,
} from "./Components/index";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default App;
