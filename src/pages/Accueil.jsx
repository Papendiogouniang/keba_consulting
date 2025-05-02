// src/pages/Accueil.js
import React from 'react';
import About from './About';  // Importer le composant About
import Services from './Services';
import Team from './Team';
import Contact from './Contact';
import Projects from './Projects';  // Importer le nouveau composant Projects
import { Container } from 'react-bootstrap';

function Accueil() {
  return (
    <Container className="my-5">
      {/* Section À propos */}
      <section className="mb-5">
        <About />  {/* Affichage du composant About */}
      </section>

      {/* Section Services */}
      <section className="mb-5">
        <Services />
      </section>

      {/* Section Équipe */}
      <section className="mb-5">
        <Team />
      </section>

      {/* Section Nos Projets */}
      <section className="mb-5">
        <Projects />  {/* Affichage du composant Projects */}
      </section>

      {/* Section Contact */}
      <section className="mb-5">
      
        <Contact />
      </section>
    </Container>
  );
}

export default Accueil;
