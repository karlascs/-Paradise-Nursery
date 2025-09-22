import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../store/cartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [imageError, setImageError] = useState(false);

  const handleIncrement = () => {
    dispatch(incrementQuantity(item.id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(item.id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        {imageError ? (
          <div className="cart-image-placeholder">
            <span>🌿</span>
          </div>
        ) : (
          <img 
            src={item.image} 
            alt={item.name} 
            onError={handleImageError}
          />
        )}
      </div>
      
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <div className="item-price">
          <span className="unit-price">Precio unitario: ${item.price.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="item-controls">
        <div className="quantity-controls">
          <button 
            className="quantity-btn decrease"
            onClick={handleDecrement}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="quantity">{item.quantity}</span>
          <button 
            className="quantity-btn increase"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        
        <div className="item-total">
          <strong>Total: ${item.totalPrice.toFixed(2)}</strong>
        </div>
        
        <button 
          className="remove-btn"
          onClick={handleRemove}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;