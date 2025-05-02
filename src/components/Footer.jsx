import React from 'react'; // Importation de React pour pouvoir utiliser JSX dans ce fichier.

function Footer() {
  return (
    // Le footer du site avec des styles Bootstrap pour l'apparence
    <footer className="bg-dark text-white text-center py-3">
      {/* Affichage du texte de copyright avec l'année actuelle dynamique */}
      <p>&copy; {new Date().getFullYear()} Kéba Consulting. Tous droits réservés.</p>
      {/* Informations de contact, comme le numéro de téléphone et le site web */}
      <p>Tél : 764365026 | Site web : www.keba-consulting.com</p>
    </footer>
  );
}

export default Footer; // Export du composant Footer pour pouvoir l'utiliser ailleurs dans l'application.
