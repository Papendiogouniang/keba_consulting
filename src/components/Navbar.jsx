import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow-lg">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" height="40" className="me-2 rounded-circle" />
          <span className="fw-bold text-white">Kéba Consulting</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white nav-link-hover" to="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white nav-link-hover" to="/about">À propos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white nav-link-hover" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white nav-link-hover" to="/team">Équipe</Link>
            </li>
            <Link className="nav-link text-white nav-link-hover" to="/projects">Projets</Link>

            <li className="nav-item">
              <Link className="nav-link text-white nav-link-hover" to="/contact">Contact</Link>
            </li>
            
          </ul>

          {/* Réseaux sociaux */}
          <div className="ms-auto d-flex align-items-center social-icons">
            <a href="https://facebook.com" className="text-white mx-2 social-icon" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="text-white mx-2 social-icon" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" className="text-white mx-2 social-icon" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" className="text-white mx-2 social-icon" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
