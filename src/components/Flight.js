// src/components/Flight.js
import React from 'react';
import Card from './Card';  // Utilisation du composant Card pour afficher les options de vol
import parisImage from '../images/paris.png';  // Chemin vers l'image
import tokyoImage from '../images/tokyo.jpg';
import newyorkImage from '../images/newyork.jpg';
import '../styles/Flight.css';  // Style spécifique à la page Flight

const Flight = () => {
  return (
    <div className="flight-page">
      <h1>Explore Flights</h1>
      <p>Find the best flights to your favorite destinations.</p>
      
      <div className="flight-cards">
        <Card 
          image={parisImage} 
          title="Paris" 
          description="Book your flight to the City of Lights." 
        />
        <Card 
          image={tokyoImage} 
          title="Tokyo" 
          description="Book your flight to the vibrant capital of Japan." 
        />
        <Card 
          image={newyorkImage} 
          title="New York" 
          description="Book your flight to the Big Apple." 
        />
      </div>
    </div>
  );
};

export default Flight;
