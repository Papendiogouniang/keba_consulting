import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

// Importation des images des membres de l'équipe
import imgAissatou from '../assets/mm.jpg';  // Image de Aïssatou
import imgMamadou from '../assets/co.jpg';   // Image de Mamadou
import imgSophie from '../assets/ceo.jpg';   // Image de Sophie

function Team() {
  // Définition des membres de l'équipe avec leurs informations
  const teamMembers = [
    {
      name: 'Aïssatou Diallo',    // Nom de la première membre
      role: 'Experte en développement personnel',  // Son rôle
      img: imgAissatou,  // Image correspondante
    },
    {
      name: 'Mamadou Fall',      // Nom de la deuxième membre
      role: 'Spécialiste en coaching et leadership',  // Son rôle
      img: imgMamadou,    // Image correspondante
    },
    {
      name: 'Sophie Ndiaye',   // Nom de la troisième membre
      role: 'Consultante en stratégie RH',  // Son rôle
      img: imgSophie,   // Image correspondante
    },
  ];

  return (
    // Section principale de l'équipe
    <section className="team-section py-5 bg-light">
      <Container>
        {/* Titre de la section "Notre Équipe" */}
        <h2 className="text-center text-primary mb-5">Notre Équipe</h2>
        
        <Row>
          {/* On mappe chaque membre de l'équipe pour créer une carte pour chaque membre */}
          {teamMembers.map((member, idx) => (
            <Col key={idx} sm={12} md={6} lg={4} className="mb-4">
              {/* Card contenant les informations du membre */}
              <Card className="text-center shadow-sm border-0 team-card p-3">
                {/* Conteneur de l'image, avec un alignement au centre */}
                <div className="d-flex justify-content-center mb-3">
                  {/* Image ronde avec une bordure bleue */}
                  <img
                    src={member.img}
                    alt={`${member.name}, ${member.role}`}  // Description pour l'accessibilité
                    className="rounded-circle shadow"
                    style={{
                      width: '180px',  // Taille de l'image
                      height: '180px', // Taille de l'image
                      objectFit: 'cover',  // L'image occupe tout le cercle sans déformation
                      border: '4px solid #0d6efd',  // Bordure bleue autour de l'image
                    }}
                  />
                </div>
                {/* Corps de la carte avec le nom et le rôle du membre */}
                <Card.Body>
                  {/* Titre avec le nom du membre */}
                  <Card.Title className="fw-bold">{member.name}</Card.Title>
                  {/* Texte avec le rôle du membre */}
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
