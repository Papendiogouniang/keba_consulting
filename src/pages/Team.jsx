// Team.js
import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

function Team() {
  const teamMembers = [
    {
      name: 'Aïssatou Diallo',
      role: 'Experte en développement personnel',
      img: '/assets/kl.jpg',
    },
    {
      name: 'Mamadou Fall',
      role: 'Spécialiste en coaching et leadership',
      img: '/assets/lm.jpg',
    },
    {
      name: 'Sophie Ndiaye',
      role: 'Consultante en stratégie RH',
      img: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <section className="team-section py-5 bg-light">
      <Container>
        <h2 className="text-center text-primary mb-5">Notre Équipe</h2>
        <Row>
          {teamMembers.map((member, idx) => (
            <Col key={idx} sm={12} md={6} lg={4} className="mb-4">
              <Card className="text-center shadow-sm border-0">
                <Card.Img variant="top" src={member.img} style={{ height: '300px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text>{member.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Team;