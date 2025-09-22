import React from 'react';
import { plantsData } from '../data/plantsData';
import PlantCard from '../components/PlantCard';
import './Products.css';

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <div className="page-header">
          <h1>Nuestras Plantas</h1>
          <p>Descubre nuestra colección de plantas aromáticas y medicinales</p>
        </div>

        {/* Sección Plantas Aromáticas */}
        <section className="category-section">
          <div className="category-header">
            <h2>🌿 Plantas Aromáticas</h2>
            <p>Perfectas para cocinar y aromatizar tu hogar</p>
          </div>
          <div className="plants-grid">
            {plantsData.aromaticas.map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>

        {/* Sección Plantas Medicinales */}
        <section className="category-section">
          <div className="category-header">
            <h2>🌺 Plantas Medicinales</h2>
            <p>Aprovecha las propiedades curativas naturales</p>
          </div>
          <div className="plants-grid">
            {plantsData.medicinales.map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;