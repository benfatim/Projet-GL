import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./admindashboard.css"; // For dashboard styling

const Dashboard = () => {
  const navigate = useNavigate(); // Using the useNavigate hook

  const handleLogout = () => {
    // Logic for logging out (typically clearing session or token)
    console.log("Logged out!");
    // Redirect to the homepage after logout
    navigate("/"); // Redirect to the homepage
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li>
            <Link to="/FlightManagement">Flight Management</Link>
          </li>
          <li>
            <Link to="/PassengerManagement">Passenger Management</Link>
          </li>
          <li>
            <Link to="/crewmanagement">Crew Management</Link>
          </li>
          <li>
            <Link to="/AirportManagement">Airport Management</Link>
          </li>
          <li>
            <Link to="/GestionDesAvions">Aircraft Management</Link>
          </li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>
          Log Out
        </button>
      </div>

      <div className="main-content">
        <header>
          <h3>Welcome to the Admin Dashboard</h3>
        </header>

        <section className="dashboard-overview">
          <div className="stats-card">
            <h4>Flight Statistics</h4>
            <p>Number of ongoing flights: 150</p>
          </div>
          <div className="stats-card">
            <h4>Passengers</h4>
            <p>Registered passengers: 3000</p>
          </div>
          <div className="stats-card">
            <h4>Crew</h4>
            <p>Number of crews: 120</p>
          </div>
          <div className="stats-card">
            <h4>Airports</h4>
            <p>Number of airports: 30</p>
          </div>
          <div className="stats-card">
            <h4>Aircrafts</h4>
            <p>Aircrafts in service: 50</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
