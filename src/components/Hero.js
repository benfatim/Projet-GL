import React from 'react';

const Hero = ({ openSignUp }) => {
  return (
    <div className="hero">
      <div className="overlay"></div>

      <div className="content">
        <h1>Effortless Flights, Personalized For You</h1>
        <p>Find the best flight deals in seconds. Start booking your next adventure today!</p>
        <div className="search-bar">
          <input type="text" placeholder="Where to?" />
          <input type="text" placeholder="Check-in — Check-out" />
          <button>Search</button>
        </div>
        
       
      </div>
    </div>
  );
};

export default Hero;
