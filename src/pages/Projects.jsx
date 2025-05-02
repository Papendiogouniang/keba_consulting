import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import projectImage1 from '../assets/lm.jpg';  // Remplacez par vos images
import projectImage2 from '../assets/kl.jpg';  // Remplacez par vos images
import projectImage3 from '../assets/lm.jpg';  // Remplacez par vos images

function Projects() {
  return (
    <section className="projects-section py-5 bg-light">
      <Container>
        <h2 className="text-center text-primary mb-5">Nos Projets</h2>
        <Row>
          {/* Projet 1 */}
          <Col sm={12} md={4} className="mb-4">
            <Card className="shadow hover-effect">
              <div className="project-img-container">
                <Card.Img variant="top" src={projectImage1} className="project-img" />
              </div>
              <Card.Body>
                <Card.Title>Développement d'une plateforme RH</Card.Title>
                <Card.Text>
                  Nous avons accompagné une grande entreprise dans la création d'une plateforme numérique pour la gestion des ressources humaines, optimisant ainsi leur productivité et leur gestion des talents.
                </Card.Text>
                <Button variant="primary" className="btn-custom">Voir le projet</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Projet 2 */}
          <Col sm={12} md={4} className="mb-4">
            <Card className="shadow hover-effect">
              <div className="project-img-container">
                <Card.Img variant="top" src={projectImage2} className="project-img" />
              </div>
              <Card.Body>
                <Card.Title>Formation Leadership</Card.Title>
                <Card.Text>
                  Nous avons animé des sessions de formation en leadership pour une organisation internationale, renforçant les compétences des managers et leaders.
                </Card.Text>
                <Button variant="primary" className="btn-custom">Voir le projet</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Projet 3 */}
          <Col sm={12} md={4} className="mb-4">
            <Card className="shadow hover-effect">
              <div className="project-img-container">
                <Card.Img variant="top" src={projectImage3} className="project-img" />
              </div>
              <Card.Body>
                <Card.Title>Transformation Digitale</Card.Title>
                <Card.Text>
                  Nous avons conduit une transformation digitale complète pour une PME, incluant la mise en place d'outils collaboratifs et de gestion de projets en ligne.
                </Card.Text>
                <Button variant="primary" className="btn-custom">Voir le projet</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
