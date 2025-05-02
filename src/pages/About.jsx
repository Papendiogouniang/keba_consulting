import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import klPhoto from '../assets/lm.jpg';

function About() {
  return (
    <section className="about-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <div style={{ overflow: 'hidden', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
              <img
                src={klPhoto}
                alt="À propos de Kéba Consulting"
                className="img-fluid"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          </Col>

          <Col md={6}>
            <h2 className="mb-4" style={{ color: '#003366', fontWeight: 'bold' }}>
              Qui sommes-nous ?
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
              <strong>Kéba Consulting</strong>, fondé en 2016, accompagne les entreprises, administrations
              et ONG dans l'intégration de la dimension humaine dans leur stratégie de management.
              Nous croyons que <strong>le capital humain</strong> est le moteur essentiel de toute organisation performante.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#555' }}>
              Notre équipe d’experts vous propose des solutions personnalisées en <em>conseil</em>,
              <em> formation</em>, <em> coaching</em> et <em> développement organisationnel</em>, pour stimuler la croissance
              durable de votre structure.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
