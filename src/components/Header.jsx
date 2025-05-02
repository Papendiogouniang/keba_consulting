import React from 'react';
import { useLocation } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import image1 from '../assets/beka.jpg';
import image2 from '../assets/cl.jpg';
import image3 from '../assets/keba-consulting.jpg';

const images = [image1, image2, image3];

function Header() {
  const location = useLocation();  // Utilisation de useLocation pour détecter l'URL actuelle

  // Condition : afficher le carrousel sauf si l'URL est "/projects", "/about", "/services", "/team", "/contact"
  return (
    <div>
      {location.pathname !== '/projects' && 
        location.pathname !== '/about' && 
        location.pathname !== '/services' && 
        location.pathname !== '/team' && 
        location.pathname !== '/contact' && (
          <Carousel interval={1000} pause={false} controls={false} indicators={false}>
            {images.map((img, index) => (
              <Carousel.Item key={index}>
                <div
                  style={{
                    height: '100vh',
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingLeft: '5%',
                    filter: 'brightness(0.6)',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      padding: '40px',
                      borderRadius: '15px',
                      color: '#fff',
                      maxWidth: '600px',
                      backdropFilter: 'blur(4px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
                    }}
                  >
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>
                      Développement Personnel
                    </h1>
                    <p style={{ fontSize: '1.3rem', marginBottom: '30px', lineHeight: '1.6' }}>
                      Transformez votre potentiel avec nos formations et notre accompagnement
                      personnalisé vers l'excellence professionnelle.
                    </p>
                    <a
                      href="#contact"
                      style={{
                        backgroundColor: '#ff6600',
                        color: '#fff',
                        padding: '14px 30px',
                        borderRadius: '8px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        transition: 'background-color 0.3s ease',
                      }}
                      onMouseOver={e => (e.target.style.backgroundColor = '#e65c00')}
                      onMouseOut={e => (e.target.style.backgroundColor = '#ff6600')}
                    >
                      Contactez-nous
                    </a>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
      )}
    </div>
  );
}

export default Header;
