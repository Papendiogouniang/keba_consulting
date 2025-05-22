import React, { useState } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Message envoyé !');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section className="contact-section py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
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
            Contactez-nous
          </h2>
          <p className="lead text-muted">Nous sommes là pour répondre à vos questions</p>
        </div>

        <Row className="justify-content-center">
          <Col lg={4} md={6} className="mb-4">
            <div 
              className="contact-info-card p-4 h-100"
              style={{
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-10px)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div className="text-center mb-4">
                <FaPhone 
                  size={30} 
                  style={{ 
                    color: '#007bff',
                    padding: '20px',
                    background: 'rgba(0,123,255,0.1)',
                    borderRadius: '50%',
                    marginBottom: '15px'
                  }} 
                />
                <h4>Téléphone</h4>
                <p className="mb-0">764365026</p>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <div 
              className="contact-info-card p-4 h-100"
              style={{
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-10px)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div className="text-center mb-4">
                <FaEnvelope 
                  size={30} 
                  style={{ 
                    color: '#007bff',
                    padding: '20px',
                    background: 'rgba(0,123,255,0.1)',
                    borderRadius: '50%',
                    marginBottom: '15px'
                  }} 
                />
                <h4>Email</h4>
                <p className="mb-0">contact@keba-consulting.com</p>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <div 
              className="contact-info-card p-4 h-100"
              style={{
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-10px)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div className="text-center mb-4">
                <FaMapMarkerAlt 
                  size={30} 
                  style={{ 
                    color: '#007bff',
                    padding: '20px',
                    background: 'rgba(0,123,255,0.1)',
                    borderRadius: '50%',
                    marginBottom: '15px'
                  }} 
                />
                <h4>Adresse</h4>
                <p className="mb-0">Dakar, Sénégal</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <div 
              className="contact-form-container p-5"
              style={{
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              }}
            >
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label>Nom complet</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    style={{
                      padding: '12px',
                      borderRadius: '10px',
                      border: '2px solid #e9ecef',
                    }}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    style={{
                      padding: '12px',
                      borderRadius: '10px',
                      border: '2px solid #e9ecef',
                    }}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Votre message"
                    style={{
                      padding: '12px',
                      borderRadius: '10px',
                      border: '2px solid #e9ecef',
                      resize: 'none',
                    }}
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: 'linear-gradient(90deg, #007bff, #00bcd4)',
                    border: 'none',
                    padding: '12px 30px',
                    borderRadius: '10px',
                    width: '100%',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                  }}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;