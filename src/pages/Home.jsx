import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Bienvenido a Paradise Nursery
            </h1>
            <p className="hero-subtitle">
              Descubre nuestra colección de plantas aromáticas y medicinales 
              para transformar tu hogar en un oasis natural
            </p>
            <Link to="/products" className="cta-button">
              Ver Nuestras Plantas
            </Link>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop" 
              alt="Plantas en invernadero"
            />
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2>¿Por qué elegir Paradise Nursery?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>Plantas Aromáticas</h3>
              <p>Perfectas para cocinar y aromaterpia, cultiva tus propias hierbas frescas</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌺</div>
              <h3>Plantas Medicinales</h3>
              <p>Aprovecha las propiedades curativas naturales de nuestras plantas</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Entrega Rápida</h3>
              <p>Recibe tus plantas en óptimas condiciones directamente en tu hogar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;