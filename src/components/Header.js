// src/components/Header.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/0987654321.png';

function Header({ openSignUp, openLogin, isDashboardPage }) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Suivi du défilement de la page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Ajoute la classe scrolled lorsque le défilement dépasse 50px
      } else {
        setIsScrolled(false); // Retire la classe lorsque l'on est en haut de la page
      }
    };

    // Ajout de l'écouteur d'événement pour le scroll
    window.addEventListener('scroll', handleScroll);

    // Nettoyage de l'événement lors du démontage
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Si on est sur la page Dashboard, on masque le header
  if (isDashboardPage) {
    return null; // Ne rien afficher si la page est le dashboard
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Aviatours Logo" />
        <span>Aviatours</span>
      </div>
      {/* Navigation */}
      <nav className="nav">
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <Link to="/flight">Flight</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Barre de recherche */}
      <div className="search-bar">
        <input type="text" placeholder="Search destination..." />
      </div>

      {/* Authentification */}
      <div className="auth">
        {/* Remplacer le lien par un bouton qui ouvre la modal */}
        <button onClick={openLogin} className="button">Log in</button>
        <button onClick={openSignUp} className="button signup">Sign up</button>
      </div>
    </header>
  );
}

export default Header;
