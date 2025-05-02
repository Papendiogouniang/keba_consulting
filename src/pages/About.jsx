import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    // Section de la page "À propos", avec un fond clair
    <section className="about-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Conteneur qui centralise et gère la disposition des éléments */}
      <Container>
        {/* Ligne qui contient deux colonnes pour la vidéo et le texte */}
        <Row className="align-items-center">
          {/* Colonne pour la vidéo (sur petit écran, toute la largeur, sinon 50% sur grand écran) */}
          <Col md={6} className="mb-4 mb-md-0">
            {/* Bloc pour contenir l'iframe (vidéo) avec un effet d'ombre et un rayon de bordure */}
            <div
              style={{
                overflow: 'hidden', // Pour que l'image ne déborde pas du conteneur
                borderRadius: '15px', // Coins arrondis
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)', // Ombre pour donner un effet de profondeur
              }}
              // Effet de zoom au survol de la souris
              onMouseOver={e => (e.currentTarget.firstChild.style.transform = 'scale(1.05)')}
              onMouseOut={e => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
            >
              {/* Intégration de la vidéo YouTube */}
              <iframe
                src="https://www.youtube.com/embed/p1ikmsa151s"
                title="Kéba Consulting Présentation"
                frameBorder="0" // Retirer la bordure autour de la vidéo
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Autoriser certaines fonctionnalités dans la vidéo
                allowFullScreen // Permet le mode plein écran
                style={{
                  width: '100%', // La vidéo prend toute la largeur disponible
                  height: '315px', // Hauteur fixe pour la vidéo
                  borderRadius: '15px', // Bordures arrondies pour un effet esthétique
                  transition: 'transform 0.5s ease', // Transition douce lors du zoom sur la vidéo
                }}
              ></iframe>
            </div>
          </Col>

          {/* Colonne pour le texte descriptif */}
          <Col md={6}>
            {/* Titre avec une couleur spécifique et un texte en gras */}
            <h2 className="mb-4" style={{ color: '#003366', fontWeight: 'bold' }}>
              Qui sommes-nous ?
            </h2>
            {/* Premier paragraphe avec des informations sur l'entreprise */}
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
              <strong>Kéba Consulting</strong>, fondé en 2016, accompagne les entreprises, administrations
              et ONG dans l'intégration de la dimension humaine dans leur stratégie de management.
              Nous croyons que <strong>le capital humain</strong> est le moteur essentiel de toute organisation performante.
            </p>
            {/* Deuxième paragraphe avec des détails sur les services proposés */}
            <p style={{ fontSize: '1.05rem', color: '#555' }}>
              Notre équipe d’experts vous propose des solutions personnalisées en <em>conseil</em>,
              <em> formation</em>, <em> coaching</em> et <em> développement organisationnel</em>, pour stimuler la croissance
              durable de votre structure.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
