import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { formatPrice } from '../utils/formatters';
import './PlantCard.css';

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="plant-card">
      <div className="plant-image">
        {imageError ? (
          <div className="image-placeholder">
            <span>🌿</span>
            <p>{plant.name}</p>
          </div>
        ) : (
          <img 
            src={plant.image} 
            alt={plant.name} 
            onError={handleImageError}
          />
        )}
      </div>
      
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-description">{plant.description}</p>
        <div className="plant-price">{formatPrice(plant.price)}</div>
        
        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default PlantCard;