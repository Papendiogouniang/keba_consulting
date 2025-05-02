// src/components/Testimonials.js
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const testimonials = [
  {
    name: "Fatou Sarr",
    feedback: "Grâce à Kéba Consulting, j’ai réussi à redéfinir mes objectifs de carrière avec clarté et ambition.",
  },
  {
    name: "Alioune Diop",
    feedback: "Un accompagnement professionnel de qualité, une équipe à l’écoute et des outils concrets.",
  },
  {
    name: "Mariama Ba",
    feedback: "Les formations proposées sont enrichissantes et parfaitement adaptées à mes besoins.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section py-5 bg-light">
      <Container>
        <h2 className="text-center text-primary mb-5">Témoignages</h2>
        <Row>
          {testimonials.map((item, idx) => (
            <Col key={idx} md={4} className="mb-4">
              <Card className="text-center shadow-sm h-100 border-0">
                <Card.Body>
                  <Card.Text className="mb-4 fst-italic">"{item.feedback}"</Card.Text>
                  <Card.Title className="text-secondary">{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
