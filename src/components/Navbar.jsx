import React from 'react'; // Importation de React pour utiliser JSX
import { Link } from 'react-router-dom'; // Importation de `Link` pour la navigation entre les pages
import logo from '../assets/logo.png'; // Importation du logo de l'entreprise
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importation des icônes des réseaux sociaux

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-3 sticky-top">
      <div className="container-fluid">
        {/* Logo et nom de l'entreprise */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" height="45" className="me-2 rounded-circle shadow-sm" />
          <span className="fw-bold fs-6">Kéba Consulting</span> {/* Réduction de la taille du texte du nom de l'entreprise */}
        </Link>

        {/* Bouton hamburger pour mobile */}
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

        {/* Liens et icônes de navigation */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          {/* Liste des liens de navigation */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link text-white fw-medium px-3 fs-6 nav-hover" to="/">Accueil</Link> {/* Réduction de la taille de la police */}
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-medium px-3 fs-6 nav-hover" to="/about">À propos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-medium px-3 fs-6 nav-hover" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-medium px-3 fs-6 nav-hover" to="/team">Équipe</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-medium px-3 fs-6 nav-hover" to="/projects">Projets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-medium px-3 fs-6 nav-hover" to="/contact">Contact</Link>
            </li>
            {/* Nouveau lien "Partenaires" ajouté */}
            <li className="nav-item">
              <Link className="nav-link text-white fw-medium px-3 fs-6 nav-hover" to="/partners">Partenaires</Link>
            </li>
            {/* Nouveau lien "E-learning" ajouté */}
            <li className="nav-item">
              <Link className="nav-link text-white fw-medium px-3 fs-6 nav-hover" to="/e-learning">E-learning</Link>
            </li>
          </ul>

          {/* Section des icônes de réseaux sociaux */}
          <div className="d-flex align-items-center">
            {/* Lien vers Facebook */}
            <a href="https://facebook.com" className="text-white mx-2 social-icon" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={18} /> {/* Taille des icônes réduite */}
            </a>
            {/* Lien vers Twitter */}
            <a href="https://twitter.com" className="text-white mx-2 social-icon" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={18} />
            </a>
            {/* Lien vers LinkedIn */}
            <a href="https://linkedin.com" className="text-white mx-2 social-icon" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={18} />
            </a>
            {/* Lien vers Instagram */}
            <a href="https://instagram.com" className="text-white mx-2 social-icon" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; // Exportation du composant Navbar
