import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`home ${isVisible ? 'fade-in' : ''}`}>
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title animate-text">
              Bienvenido a Paradise Nursery
            </h1>
            <p className="hero-subtitle animate-text-delay">
              Descubre nuestra colección de plantas aromáticas y medicinales 
              para transformar tu hogar en un oasis natural
            </p>
            <Link to="/products" className="cta-button pulse-button">
              Ver Nuestras Plantas
            </Link>
          </div>
          <div className="hero-image floating">
            <img 
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop" 
              alt="Plantas en invernadero"
            />
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2 className="section-title fade-in-up">¿Por qué elegir Paradise Nursery?</h2>
          <div className="features-grid">
            <div className="feature-card hover-effect">
              <div className="feature-icon bounce">🌿</div>
              <h3>Plantas Aromáticas</h3>
              <p>Perfectas para cocinar y aromaterpia, cultiva tus propias hierbas frescas</p>
            </div>
            
            <div className="feature-card hover-effect">
              <div className="feature-icon bounce" style={{animationDelay: '0.2s'}}>🌺</div>
              <h3>Plantas Medicinales</h3>
              <p>Aprovecha las propiedades curativas naturales de nuestras plantas</p>
            </div>
            
            <div className="feature-card hover-effect">
              <div className="feature-icon bounce" style={{animationDelay: '0.4s'}}>🚚</div>
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