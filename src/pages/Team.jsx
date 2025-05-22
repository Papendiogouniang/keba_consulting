import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Team() {
  const teamMembers = [
    {
      name: 'Aïssatou Diallo',
      role: 'Experte en développement personnel',
      img: '/assets/mm.jpg',
      bio: 'Plus de 10 ans d\'expérience dans l\'accompagnement et le développement personnel.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'aissatou@keba-consulting.com',
      },
    },
    {
      name: 'Mamadou Fall',
      role: 'Spécialiste en coaching et leadership',
      img: '/assets/co.jpg',
      bio: 'Expert en leadership transformationnel et coaching d\'équipe.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mamadou@keba-consulting.com',
      },
    },
    {
      name: 'Sophie Ndiaye',
      role: 'Consultante en stratégie RH',
      img: '/assets/ceo.jpg',
      bio: 'Spécialiste en gestion des talents et transformation organisationnelle.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sophie@keba-consulting.com',
      },
    },
  ];

  return (
    <section className="team-section py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
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
            Notre Équipe
          </h2>
          <p className="lead text-muted">Des experts passionnés à votre service</p>
        </div>

        <Row>
          {teamMembers.map((member, idx) => (
            <Col key={idx} lg={4} className="mb-4">
              <Card
                className="border-0 team-card h-100"
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
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                      padding: '20px',
                    }}
                  >
                    <h3 className="text-white mb-1">{member.name}</h3>
                    <p className="text-white-50 mb-0">{member.role}</p>
                  </div>
                </div>
                
                <Card.Body className="text-center p-4">
                  <p className="text-muted mb-4">{member.bio}</p>
                  <div className="d-flex justify-content-center gap-3">
                    <a href={member.social.linkedin} className="text-primary" style={{ fontSize: '1.5rem' }}>
                      <FaLinkedin />
                    </a>
                    <a href={member.social.twitter} className="text-primary" style={{ fontSize: '1.5rem' }}>
                      <FaTwitter />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-primary" style={{ fontSize: '1.5rem' }}>
                      <FaEnvelope />
                    </a>
                  </div>
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