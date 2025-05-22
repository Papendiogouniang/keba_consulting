import React from 'react';
import jsPDF from 'jspdf';
import logo from '../assets/logo.png'; // Vérifie que ce fichier existe bien
import background from '../assets/logo.png'; // Remplace par ton image de fond avec dégradé

const Certificate = ({ userName, userPhoto }) => {
  const generateCertificate = () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [595, 420], // Format A5 paysage
    });

    // Ajouter une image de fond avec un dégradé
    const backgroundImg = new Image();
    backgroundImg.src = background;

    backgroundImg.onload = () => {
      doc.addImage(backgroundImg, 'JPEG', 0, 0, 595, 420);

      // Ajout du logo
      const logoImg = new Image();
      logoImg.src = logo;

      const drawCertificate = (photoImg = null) => {
        // Logo centré en haut
        doc.addImage(logoImg, 'PNG', 240, 30, 100, 100);

        // Si l'image de l'utilisateur est présente
        if (photoImg) {
          doc.addImage(photoImg, 'JPEG', 60, 270, 80, 80);
        }

        // Titre du certificat
        doc.setFontSize(30);
        doc.setTextColor(255, 255, 255); // Texte en blanc
        doc.setFont('helvetica', 'bold');
        doc.text('Certificat de Réussite', 160, 160);

        // Nom de l'utilisateur
        doc.setFontSize(22);
        doc.setTextColor(255, 215, 0); // Couleur or
        doc.setFont('helvetica', 'normal');
        doc.text(`Décerné à : ${userName}`, 180, 200);

        // Description
        doc.setFontSize(16);
        doc.setTextColor(255, 255, 255); // Texte en blanc
        doc.text(
          "Pour avoir complété avec succès le module e-learning en développement personnel.",
          60,
          240,
          { maxWidth: 480 }
        );

        // Date de délivrance
        const date = new Date().toLocaleDateString();
        doc.setFontSize(12);
        doc.setTextColor(255, 255, 255); // Texte en blanc
        doc.text(`Délivré le : ${date}`, 420, 380);

        // Signature
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0); // Texte en noir
        doc.text("Signature : _______________", 60, 380);

        // Téléchargement du certificat
        doc.save(`${userName}_certificat.pdf`);
      };

      logoImg.onload = () => {
        if (userPhoto) {
          const photoImg = new Image();
          photoImg.src = userPhoto;
          photoImg.onload = () => drawCertificate(photoImg);
        } else {
          drawCertificate();
        }
      };
    };
  };

  return (
    <div className="text-center mt-5">
      <h3 className="text-success">🎉 Félicitations, {userName} !</h3>
      <p>Vous avez terminé le module avec succès.</p>

      {userPhoto && (
        <div className="my-3">
          <img
            src={userPhoto}
            alt={`${userName}`} // ✅ plus accessible, pas de mot redondant
            className="rounded-circle border"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
        </div>
      )}

      <button className="btn btn-success btn-lg mt-3" onClick={generateCertificate}>
        📄 Télécharger votre certificat
      </button>
    </div>
  );
};

export default Certificate;
