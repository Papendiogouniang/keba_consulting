import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Partners() {
  return (
    <Container className="my-5">
      {/* Titre de la section */}
      <h2 className="text-center text-primary mb-5">Nos Partenaires</h2>
      
      <Row className="justify-content-center">
        {/* Liste des logos des partenaires */}
        
        {/* Partenaire 1 */}
        <Col sm={6} md={4} lg={3} className="mb-4">
          <img 
            src="https://example.com/path/to/entreprise1.png"  // Remplacer par l'URL du logo de l'entreprise
            alt="Entreprise 1"  // Texte alternatif pour l'image
            className="img-fluid"  // Classe Bootstrap pour que l'image soit responsive
            style={{ maxHeight: '100px', objectFit: 'contain' }}  // Limite la hauteur et ajuste l'image
          />
        </Col>
        
        {/* Partenaire 2 */}
        <Col sm={6} md={4} lg={3} className="mb-4">
          <img 
            src="https://example.com/path/to/entreprise2.png"  // Remplacer par l'URL du logo de l'entreprise
            alt="Entreprise 2"
            className="img-fluid"
            style={{ maxHeight: '100px', objectFit: 'contain' }}
          />
        </Col>

        {/* Partenaire 3 */}
        <Col sm={6} md={4} lg={3} className="mb-4">
          <img 
            src="https://example.com/path/to/entreprise3.png"  // Remplacer par l'URL du logo de l'entreprise
            alt="Entreprise 3"
            className="img-fluid"
            style={{ maxHeight: '100px', objectFit: 'contain' }}
          />
        </Col>

        {/* Partenaire 4 */}
        <Col sm={6} md={4} lg={3} className="mb-4">
          <img 
            src="https://example.com/path/to/entreprise4.png"  // Remplacer par l'URL du logo de l'entreprise
            alt="Entreprise 4"
            className="img-fluid"
            style={{ maxHeight: '100px', objectFit: 'contain' }}
          />
        </Col>

        {/* Ajouter d'autres logos si nécessaire */}
      </Row>
    </Container>
  );
}

export default Partners;
