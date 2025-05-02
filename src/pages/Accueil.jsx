import React from 'react';
import About from './About';
import Services from './Services';
import Team from './Team';
import Contact from './Contact';
import Projects from './Projects';
import Posts from '../components/Posts'; // ✅ Importation du composant Posts
import Testimonials from '../components/Testimonials'; // ✅ Importation du composant Testimonials
import { Container } from 'react-bootstrap';
import Partners from './Partners';  // ✅ Importation du composant Partners

function Accueil() {
  return (
    <Container className="my-5">
      {/* Section "À propos" */}
      <section className="mb-5">
        <About />  {/* Affichage du composant "About" */}
      </section>

      {/* Section "Services" */}
      <section className="mb-5">
        <Services />  {/* Affichage du composant "Services" */}
      </section>

      {/* Section "Équipe" */}
      <section className="mb-5">
        <Team />  {/* Affichage du composant "Team" */}
      </section>

      {/* Section "Nos Projets" */}
      <section className="mb-5">
        <Projects />  {/* Affichage du composant "Projects" */}
      </section>

      {/* Section "Actualités (Posts)" */}
      <section className="mb-5">
        <Posts />  {/* ✅ Ajout de la section "Posts" pour afficher les actualités ou les articles */}
      </section>

      {/* Section "Témoignages" */}
      <section className="mb-5">
        <Testimonials />  {/* ✅ Ajout de la section "Testimonials" pour afficher les témoignages des clients */}
      </section>

      {/* Section "Partenaires" */}
      <Partners />  {/* ✅ Affichage de la section "Partners" qui présente les partenaires de l'entreprise */}

      {/* Section "Contact" */}
      <section className="mb-5">
        <Contact />  {/* Affichage du composant "Contact" */}
      </section>
    </Container>
  );
}

export default Accueil;
