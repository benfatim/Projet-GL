import React from 'react';
import './Card.css'; // Créez ce fichier pour le style des cartes

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="card-button">Book Now</button>
    </div>
  );
};

export default Card;