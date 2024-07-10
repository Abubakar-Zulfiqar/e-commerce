import React from 'react'
import { Routes, Route } from 'react-router-dom'

import {
  Home,
  About,
  Products,
  Contact,
  Cart,
  ProductDetail
}
  from './Components/index'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
