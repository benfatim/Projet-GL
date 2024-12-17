import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Importer le composant Header
import Hero from './components/Hero';
import SignUp from './components/SignUp'; // Importer SignUp
import Login from './components/Login'; // Importer Login
import About from './components/About';
import Flight from './components/Flight';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Importer Footer
import GestionDesAvions from './components/GestionDesAvions';
import PassengerManagement from './components/passangermanagement';
import CrewManagement from "./components/crewmanagement"; 
import AirportManagement from "./components/airportmanagement";  
import FlightManagement from "./components/FlightManagement";  

import Dashboard from './components/admindashboard';
import PassengerDashboard from './components/passengerdashboard';

import './styles/App.css';

function App() {
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  // Handlers pour SignUp
  const openSignUp = () => setSignUpOpen(true);
  const closeSignUp = () => setSignUpOpen(false);

  // Handlers pour Login
  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);

  // Identifier si on est sur la page Dashboard ou PassengerDashboard
  const isDashboardPage = window.location.pathname === "/Dashboard"; // Vérifier l'URL pour Dashboard
  const isPassengerDashboardPage = window.location.pathname === "/PassengerDashboard"; // Vérifier l'URL pour PassengerDashboard

  return (
    <Router>
      {/* Ne pas afficher le Header si on est sur le Dashboard ou le PassengerDashboard */}
      {!isDashboardPage && !isPassengerDashboardPage && (
        <Header 
          isScrolled={false} 
          openSignUp={openSignUp} 
          openLogin={openLogin} 
          isDashboardPage={isDashboardPage}
        />
      )}

      <div className="App">
        <Routes>
          <Route path="/" element={<Hero openSignUp={openSignUp} openLogin={openLogin} />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/GestionDesAvions" element={<GestionDesAvions />} />
          <Route path="/PassengerManagement" element={<PassengerManagement />} />
          <Route path="/CrewManagement" element={<CrewManagement />} />
          <Route path="/AirportManagement" element={<AirportManagement />} />
          <Route path="/FlightManagement" element={<FlightManagement />} />

          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/PassengerDashboard" element={<PassengerDashboard />} />
        </Routes>

        {/* Modals */}
        {isSignUpOpen && <SignUp onClose={closeSignUp} />}
        {isLoginOpen && <Login onClose={closeLogin} />}
      </div>
      <Footer />
    </Router>
  );
}

export default App;
