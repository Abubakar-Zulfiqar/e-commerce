import { Routes, Route } from 'react-router-dom'

import {
  Home,
  About,
  Products,
  Contact,
  Cart,
  Product01,
  Product02,
  Product03,
  Product04
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
        <Route exact path='/p1/' element={<Product01 />} />
        <Route exact path='/p2/' element={<Product02 />} />
        <Route exact path='/p3/' element={<Product03 />} />
        <Route exact path='/p/:id' element={<Product04 />} />
      </Routes>
    </>
  )
}

export default App
