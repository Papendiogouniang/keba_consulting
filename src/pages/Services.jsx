import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { FaLightbulb, FaGraduationCap, FaUsers, FaHandshakeSimple, FaBuilding } from 'react-icons/fa6';

function Services() {
  const services = [
    {
      title: 'Conseil Stratégique',
      text: 'Accompagnement personnalisé pour optimiser votre stratégie organisationnelle et atteindre vos objectifs.',
      icon: <FaLightbulb size={40} className="mb-4 text-primary" />,
      gradient: 'linear-gradient(135deg, #3498db, #2980b9)',
    },
    {
      title: 'Formation Professionnelle',
      text: 'Programmes de formation sur mesure pour développer les compétences de vos équipes.',
      icon: <FaGraduationCap size={40} className="mb-4 text-primary" />,
      gradient: 'linear-gradient(135deg, #e74c3c, #c0392b)',
    },
    {
      title: 'Coaching Personnalisé',
      text: 'Accompagnement individuel pour révéler votre potentiel et atteindre l\'excellence.',
      icon: <FaUsers size={40} className="mb-4 text-primary" />,
      gradient: 'linear-gradient(135deg, #2ecc71, #27ae60)',
    },
    {
      title: 'Team Building',
      text: 'Activités innovantes pour renforcer la cohésion d\'équipe et la collaboration.',
      icon: <FaHandshakeSimple size={40} className="mb-4 text-primary" />,
      gradient: 'linear-gradient(135deg, #9b59b6, #8e44ad)',
    },
    {
      title: 'Gestion Immobilière',
      text: 'Solutions complètes pour optimiser la gestion et la valorisation de votre patrimoine immobilier.',
      icon: <FaBuilding size={40} className="mb-4 text-primary" />,
      gradient: 'linear-gradient(135deg, #f1c40f, #f39c12)',
    },
  ];

  return (
    <section className="services-section py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 
            className="display-4 mb-3"
            style={{
              background: 'linear-gradient(90deg, #007bff, #00bcd4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '800',
            }}
          >
            Nos Services
          </h2>
          <p className="lead text-muted">Des solutions adaptées à vos besoins</p>
        </div>

        <Row>
          {services.map((service, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <Card
                className="h-100 border-0 service-card"
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ background: service.gradient, height: '8px' }} />
                <Card.Body className="text-center p-4">
                  {service.icon}
                  <Card.Title className="h4 mb-3">{service.title}</Card.Title>
                  <Card.Text className="text-muted mb-4">{service.text}</Card.Text>
                  <Button
                    variant="outline-primary"
                    className="rounded-pill px-4"
                    style={{
                      borderWidth: '2px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                    }}
                  >
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