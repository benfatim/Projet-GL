// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Import du composant principal App
import './styles/App.css';  // Import des styles globaux

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
