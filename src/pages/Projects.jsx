import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: "Transformation Digitale",
      description: "Accompagnement complet d'une grande entreprise dans sa transformation numérique, incluant la formation des équipes et l'implémentation de solutions innovantes.",
      image: '/assets/lm.jpg',
      category: 'Digital',
      duration: '8 mois',
    },
    {
      title: "Leadership Development",
      description: "Programme de développement du leadership pour une équipe de direction, aboutissant à une amélioration significative de la performance collective.",
      image: '/assets/kl.jpg',
      category: 'Formation',
      duration: '6 mois',
    },
    {
      title: "Optimisation RH",
      description: "Refonte complète des processus RH et mise en place d'une stratégie de gestion des talents pour une entreprise en forte croissance.",
      image: '/assets/lm.jpg',
      category: 'Conseil',
      duration: '12 mois',
    },
  ];

  return (
    <section className="projects-section py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
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
            Nos Projets
          </h2>
          <p className="lead text-muted">Découvrez nos réalisations marquantes</p>
        </div>

        <Row>
          {projects.map((project, index) => (
            <Col key={index} lg={4} className="mb-4">
              <Card
                className="border-0 h-100"
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
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    style={{
                      height: '250px',
                      objectFit: 'cover',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      background: 'rgba(255,255,255,0.9)',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#007bff',
                    }}
                  >
                    {project.category}
                  </div>
                </div>

                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <small className="text-muted">Durée: {project.duration}</small>
                  </div>
                  <Card.Title className="h4 mb-3">{project.title}</Card.Title>
                  <Card.Text className="text-muted">{project.description}</Card.Text>
                </Card.Body>

                <Card.Footer
                  className="border-0 bg-white p-4"
                  style={{
                    borderTop: '1px solid rgba(0,0,0,0.1)',
                  }}
                >
                  <a
                    href="#details"
                    className="text-primary d-flex align-items-center text-decoration-none"
                    style={{ fontWeight: '600' }}
                  >
                    Voir les détails
                    <FaArrowRight className="ms-2" />
                  </a>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;