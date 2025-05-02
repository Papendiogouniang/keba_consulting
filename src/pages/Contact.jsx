import React, { useState } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';

function Contact() {
  // État pour les champs du formulaire (nom, email, message)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Gestion des changements dans les champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });  // Mise à jour de l'état du formulaire
  };

  // Gestion de l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé !');  // Affiche un message d'alerte une fois le formulaire envoyé
  };

  return (
    <section className="contact-section py-5 bg-light">
      <Container>
        <h2 className="text-center text-primary mb-5">Contactez-nous</h2>
        <Row>
          {/* Formulaire de Contact */}
          <Col md={6} className="mb-4">
            <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">
              {/* Champ "Nom" */}
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez votre nom"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-control-custom"
                />
              </Form.Group>

              {/* Champ "Email" */}
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Entrez votre email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control-custom"
                />
              </Form.Group>

              {/* Champ "Message" */}
              <Form.Group controlId="message" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Votre message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-control-custom"
                />
              </Form.Group>

              {/* Bouton d'envoi */}
              <Button variant="primary" type="submit" className="w-100 btn-custom">
                Envoyer
              </Button>
            </Form>
          </Col>

          {/* Section Carte avec emplacement */}
          <Col md={6}>
            <div className="map-container">
              <h5 className="text-center mb-3">Notre emplacement</h5>
              {/* Intégration d'une carte Google Maps avec un iframe */}
              <iframe
                title="Kéba Consulting Location"
                src="https://www.google.com/maps/embed?..."
                width="100%"
                height="300"
                style={{ borderRadius: '10px', border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              {/* Informations supplémentaires sous la carte */}
              <div className="mt-3 text-center">
                <p><strong>📞 764365026</strong></p>
                <p>
                  🌐 <a href="http://www.keba-consulting.com" target="_blank" rel="noopener noreferrer">
                    www.keba-consulting.com
                  </a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
