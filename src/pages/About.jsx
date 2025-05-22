import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section className="about-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <div className="position-relative">
              <div
                className="video-container"
                style={{
                  overflow: 'hidden',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  transform: 'perspective(1000px) rotateY(-5deg)',
                  transition: 'transform 0.5s ease'
                }}
                onMouseOver={e => (e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg)')}
              >
                <iframe
                  src="https://www.youtube.com/embed/p1ikmsa151s"
                  title="Kéba Consulting Présentation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    width: '100%',
                    height: '315px',
                    borderRadius: '20px',
                  }}
                ></iframe>
              </div>
              <div
                className="video-decoration"
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(45deg, #007bff, #00bcd4)',
                  borderRadius: '20px',
                  zIndex: -1,
                }}
              ></div>
            </div>
          </Col>

          <Col md={6}>
            <div className="about-content" style={{ position: 'relative' }}>
              <div
                className="accent-line"
                style={{
                  width: '80px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #007bff, #00bcd4)',
                  marginBottom: '20px',
                  borderRadius: '2px',
                }}
              ></div>
              <h2 
                className="mb-4"
                style={{
                  color: '#003366',
                  fontWeight: '800',
                  fontSize: '2.5rem',
                  background: 'linear-gradient(90deg, #003366, #007bff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Qui sommes-nous ?
              </h2>
              <p 
                className="lead mb-4"
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  color: '#333',
                  textShadow: '1px 1px 1px rgba(0,0,0,0.05)',
                }}
              >
                <strong>Kéba Consulting</strong>, fondé en 2016, accompagne les entreprises, administrations
                et ONG dans l'intégration de la dimension humaine dans leur stratégie de management.
                Nous croyons que <strong>le capital humain</strong> est le moteur essentiel de toute organisation performante.
              </p>
              <p 
                style={{
                  fontSize: '1.1rem',
                  color: '#555',
                  lineHeight: '1.6',
                  position: 'relative',
                  padding: '20px',
                  background: 'rgba(255,255,255,0.8)',
                  borderRadius: '15px',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                }}
              >
                Notre équipe d'experts vous propose des solutions personnalisées en <em>conseil</em>,
                <em> formation</em>, <em> coaching</em> et <em> développement organisationnel</em>, pour stimuler la croissance
                durable de votre structure.
              </p>
              <div
                className="stats-container mt-4"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '20px 0',
                }}
              >
                <div className="stat-item text-center">
                  <h3 style={{ color: '#007bff', fontWeight: 'bold' }}>7+</h3>
                  <p>Années d'expérience</p>
                </div>
                <div className="stat-item text-center">
                  <h3 style={{ color: '#007bff', fontWeight: 'bold' }}>500+</h3>
                  <p>Clients satisfaits</p>
                </div>
                <div className="stat-item text-center">
                  <h3 style={{ color: '#007bff', fontWeight: 'bold' }}>50+</h3>
                  <p>Experts</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;