import React, { useState } from 'react';
import './Login.css';

import googleLogo from '../images/logo google.jpg'; // Import des logos
import appleLogo from '../images/logo apple.jpg'; 

const Login = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Logged in successfully!');
    setFormData({
      email: '',
      password: '',
    });
    if (onClose) onClose(); // Close modal after submit
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-form button">Log In</button>
        </form>
        <div className="alternative-signup">
          <button className="google-btn">
            <img src={googleLogo} alt="Google" /> Sign in with Google
          </button>
          <button className="apple-btn">
            <img src={appleLogo} alt="Apple" /> Sign in with Apple
          </button>
        </div>
        <p className="signup-link">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
