import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h1>🌿 Paradise Nursery</h1>
          </Link>
        </div>
        
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">Inicio</Link>
            </li>
            <li>
              <Link to="/products" className="nav-link">Productos</Link>
            </li>
            <li>
              <Link to="/cart" className="nav-link cart-link">
                🛒 Carrito
                {totalQuantity > 0 && (
                  <span className="cart-badge">{totalQuantity}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;