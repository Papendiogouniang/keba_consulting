import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="app-container">
      {/* Navbar affichée sur toutes les pages */}
      <Navbar />
      {/* Header affiché sur toutes les pages */}
      <Header />

      <main className="container my-4">
        {/* Définition des Routes */}
        <Routes>
          <Route path="/" element={<Accueil />} /> {/* Page d'Accueil */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} /> {/* Changer le chemin ici */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer affiché sur toutes les pages */}
      <Footer />
    </div>
  );
}

export default App;
