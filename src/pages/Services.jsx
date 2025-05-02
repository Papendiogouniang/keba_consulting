import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import klImage from '../assets/kl.jpg';  // Remplacer par vos images
import lmImage from '../assets/lm.jpg';  // Remplacer par vos images

function Services() {
  // Liste des services proposés
  const services = [
    {
      title: 'Conseil',
      text: 'Accompagnement stratégique pour atteindre les objectifs de votre organisation.',
      img: klImage,
    },
    {
      title: 'Formation',
      text: 'Programmes de formation adaptés à vos besoins professionnels.',
      img: lmImage,
    },
    {
      title: 'Coaching',
      text: 'Coaching personnalisé pour révéler votre potentiel.',
      img: klImage,
    },
    {
      title: 'Team Building',
      text: 'Activités pour renforcer l’esprit d’équipe et la collaboration.',
      img: lmImage,
    },
    {
      title: 'Gestion Immobilière',
      text: 'Gestion et valorisation de vos biens pour une meilleure rentabilité.',
      img: klImage,
    },
  ];

  return (
    <section className="services-section py-5 bg-light">
      {/* Container principal */}
      <Container>
        <h2 className="text-center text-primary mb-5">Nos Services</h2>
        <Row>
          {/* Itération sur les services */}
          {services.map((service, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
              <Card
                className="h-100 border-0 shadow-lg rounded service-card"
                style={{ transition: 'transform 0.3s ease-in-out' }} // Animation d'effet hover
              >
                {/* Image du service avec un overlay sombre */}
                <div className="service-img-container" style={{ position: 'relative' }}>
                  <Card.Img variant="top" src={service.img} className="service-img" />
                  <div
                    className="img-overlay"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Superposition sombre
                      borderRadius: '10px',
                    }}
                  ></div>
                </div>
                <Card.Body>
                  {/* Titre du service */}
                  <Card.Title className="text-center">{service.title}</Card.Title>
                  {/* Description du service */}
                  <Card.Text>{service.text}</Card.Text>
                  {/* Bouton pour plus d'informations */}
                  <Button variant="outline-primary" className="d-block mx-auto">
                    En savoir plus
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
