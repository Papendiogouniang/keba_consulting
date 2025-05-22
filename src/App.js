import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Composants
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Accueil from './pages/Accueil';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Partners from './pages/Partners';
import ELearning from './pages/ELearning';

function App() {
  return (
    <div className="app-container">
      {/* Navbar affichée sur toutes les pages */}
      <Navbar />
      
      {/* Header affiché sur toutes les pages */}
      <Header />

      {/* Contenu principal de l'application */}
      <main className="main-container my-4">
        {/* Définition des Routes pour la navigation entre les pages */}
        <Routes>
          <Route path="/" element={<Accueil />} /> {/* Page d'Accueil */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/e-learning" element={<ELearning />} />
          <Route path="/contact" element={<Contact />} />
          {/* Route pour la page Partenaires */}
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </main>

      {/* Footer affiché sur toutes les pages */}
      <Footer />
    </div>
  );
}

export default App;
