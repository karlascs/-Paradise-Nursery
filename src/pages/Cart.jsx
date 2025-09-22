import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart } from '../store/cartSlice';
import { formatPrice } from '../utils/formatters';
import CartItem from '../components/CartItem';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    alert('¡Gracias por tu compra! Tu pedido está siendo procesado.');
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <div className="cart">
        <div className="container">
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Tu carrito está vacío</h2>
            <p>Agrega algunas plantas hermosas a tu carrito</p>
            <Link to="/products" className="continue-shopping-btn">
              Ir a Productos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="container">
        <div className="cart-header">
          <h1>Tu Carrito de Compras</h1>
          <p>{totalQuantity} {totalQuantity === 1 ? 'artículo' : 'artículos'} en tu carrito</p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Resumen del Pedido</h3>
              
              <div className="summary-row">
                <span>Cantidad de artículos:</span>
                <span>{totalQuantity}</span>
              </div>
              
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>{formatPrice(totalAmount)}</span>
              </div>
              
              <div className="summary-row">
                <span>Envío:</span>
                <span>Gratis</span>
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="summary-row total">
                <span><strong>Total:</strong></span>
                <span><strong>{formatPrice(totalAmount)}</strong></span>
              </div>

              <div className="cart-actions">
                <button 
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  Pagar
                </button>
                
                <Link to="/products" className="continue-shopping-btn">
                  Continuar Comprando
                </Link>
                
                <button 
                  className="clear-cart-btn"
                  onClick={handleClearCart}
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;