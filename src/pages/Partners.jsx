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
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Logo_IBM.svg"  // Logo IBM
            alt="IBM"
            className="img-fluid"
            style={{ maxHeight: '100px', objectFit: 'contain' }}
          />
        </Col>
        
        {/* Partenaire 2 */}
        <Col sm={6} md={4} lg={3} className="mb-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Logo_Ford_2017.svg"  // Logo Ford
            alt="Ford"
            className="img-fluid"
            style={{ maxHeight: '100px', objectFit: 'contain' }}
          />
        </Col>

        {/* Partenaire 3 */}
        <Col sm={6} md={4} lg={3} className="mb-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/94/Logo_Nike_2020.svg"  // Logo Nike
            alt="Nike"
            className="img-fluid"
            style={{ maxHeight: '100px', objectFit: 'contain' }}
          />
        </Col>

        {/* Partenaire 4 */}
        <Col sm={6} md={4} lg={3} className="mb-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Logo_Adidas.svg"  // Logo Adidas
            alt="Adidas"
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
