import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/-Paradise-Nursery/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/-Paradise-Nursery/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/-Paradise-Nursery/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
