import React from 'react';
import './SignUp.css'; // Assure-toi que le fichier CSS est bien lié.

// Import des images depuis le dossier "src/components/images/"
import googleLogo from '../images/logo google.jpg';
import appleLogo from '../images/logo apple.jpg';


const SignUp = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="hero">
          <div className="content">
            <h1>Get Started Now</h1>
            <form className="signup-form">
              <input type="text" placeholder="Email address" required />
              <input type="password" placeholder="Password" required />
              <select required>
                <option value="" disabled selected>
                  Type
                </option>
                <option value="Admin">Admin</option>
                <option value="Passager">Passager</option>
              </select>
              <label>
                <input type="checkbox" required /> I agree to the terms & policies
              </label>
              <button type="submit">Sign-up</button>
            </form>
            <div className="alternative-signup">
              <button className="google-btn">
                <img src={googleLogo} alt="Google Logo" className="logo" /> Sign up with Google
              </button>
              <button className="apple-btn">
                <img src={appleLogo} alt="Apple Logo" className="logo" /> Sign up with Apple
              </button>
            </div>
            <p>
              Have an account? <a href="#">Sign in</a>
            </p>
            <button className="close-btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
