// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Assurez-vous que BrowserRouter est importé
import App from './App';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous que Bootstrap est bien importé

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
