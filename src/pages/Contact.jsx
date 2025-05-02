import React, { useState } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé !');
  };

  return (
    <section className="contact-section py-5 bg-light">
      <Container>
        <h2 className="text-center text-primary mb-5">Contactez-nous</h2>
        <Row>
          {/* Formulaire de Contact */}
          <Col md={6} className="mb-4">
            <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">
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

              <Button variant="primary" type="submit" className="w-100 btn-custom">
                Envoyer
              </Button>
            </Form>
          </Col>

          {/* Section Map */}
          <Col md={6}>
            <div className="map-container">
              <h5 className="text-center mb-3">Notre emplacement</h5>
              <iframe
                title="Kéba Consulting Location"
                src="https://www.google.com/maps/embed?..."
                width="100%"
                height="300"
                style={{ borderRadius: '10px', border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
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
