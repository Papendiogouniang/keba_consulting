import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>&copy; {new Date().getFullYear()} Kéba Consulting. Tous droits réservés.</p>
      <p>Tél : 764365026 | Site web : www.keba-consulting.com</p>
    </footer>
  );
}

export default Footer;
