import React from 'react'; // Importation de React pour utiliser JSX
import { useLocation } from 'react-router-dom'; // Importation de `useLocation` pour détecter l'URL actuelle de la page
import { Carousel } from 'react-bootstrap'; // Importation du carrousel de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation du fichier CSS Bootstrap pour appliquer les styles

// Importation des images du carrousel
import image1 from '../assets/beka.jpg';
import image2 from '../assets/cl.jpg';
import image3 from '../assets/keba-consulting.jpg';

// Tableau d'images à afficher dans le carrousel
const images = [image1, image2, image3];

function Header() {
  // Utilisation de `useLocation` pour obtenir la route actuelle
  const location = useLocation();

  // Condition : afficher le carrousel sauf si l'URL est "/projects", "/about", "/services", "/team", "/contact"
  return (
    <div>
      {/* Si l'URL ne correspond pas aux pages spécifiques, afficher le carrousel */}
      {location.pathname !== '/projects' && 
        location.pathname !== '/about' && 
        location.pathname !== '/services' && 
        location.pathname !== '/team' && 
        location.pathname !== '/partners' && 
        location.pathname !== '/e-learning' &&
        location.pathname !== '/contact' && (
          <Carousel interval={1000} pause={false} controls={false} indicators={false}>
            {/* Parcours du tableau d'images pour créer chaque élément du carrousel */}
            {images.map((img, index) => (
              <Carousel.Item key={index}>
                {/* Div qui contient l'image de fond pour chaque élément du carrousel */}
                <div
                  style={{
                    height: '100vh', // Hauteur de la section carrousel (100% de la hauteur de la fenêtre)
                    backgroundImage: `url(${img})`, // L'image de fond de l'élément du carrousel
                    backgroundSize: 'cover', // L'image couvre entièrement la section
                    backgroundPosition: 'center', // L'image est centrée
                    display: 'flex',
                    alignItems: 'center', // Aligne les éléments au centre verticalement
                    justifyContent: 'flex-start', // Aligne les éléments au début de la section horizontalement
                    paddingLeft: '5%', // Ajoute un peu d'espace à gauche
                    filter: 'brightness(0.6)', // Applique un filtre de luminosité pour assombrir l'image
                  }}
                >
                  {/* Contenu superposé sur l'image avec une couleur de fond sombre */}
                  <div
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond sombre avec une transparence de 50%
                      padding: '40px', // Espacement interne autour du texte
                      borderRadius: '15px', // Bords arrondis
                      color: '#fff', // Couleur du texte en blanc
                      maxWidth: '600px', // Limite la largeur du contenu
                      backdropFilter: 'blur(4px)', // Applique un flou au fond derrière le contenu
                      boxShadow: '0 8px 24px rgba(0,0,0,0.6)', // Ombre portée pour donner un effet de profondeur
                    }}
                  >
                    {/* Titre principal du carrousel */}
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>
                      Développement Personnel
                    </h1>
                    {/* Paragraphe descriptif */}
                    <p style={{ fontSize: '1.3rem', marginBottom: '30px', lineHeight: '1.6' }}>
                      Transformez votre potentiel avec nos formations et notre accompagnement
                      personnalisé vers l'excellence professionnelle.
                    </p>
                    {/* Lien pour contacter l'entreprise */}
                    <a
                      href="#contact" // Lien vers la section de contact
                      style={{
                        backgroundColor: '#ff6600', // Couleur du fond du bouton
                        color: '#fff', // Couleur du texte du bouton
                        padding: '14px 30px', // Espacement interne du bouton
                        borderRadius: '8px', // Bords arrondis du bouton
                        fontSize: '1.1rem', // Taille de police du bouton
                        fontWeight: 'bold', // Gras pour le texte
                        textDecoration: 'none', // Pas de soulignement
                        transition: 'background-color 0.3s ease', // Animation pour changer la couleur au survol
                      }}
                      onMouseOver={e => (e.target.style.backgroundColor = '#e65c00')} // Changer la couleur au survol
                      onMouseOut={e => (e.target.style.backgroundColor = '#ff6600')} // Revenir à la couleur d'origine au retrait de la souris
                    >
                      Contactez-nous
                    </a>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
      )}
    </div>
  );
}

export default Header; // Exportation du composant Header
