import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import '../styles/CourseDownload.css'; // Si tu veux du style personnalisé

const CourseDownload = () => {
  const courses = [
    {
      title: "Cours 1 - Introduction à la programmation",
      file: "/pdfs/cours1.pdf"
    },
    {
      title: "Cours 2 - Développement web avec React",
      file: "/pdfs/cours2.pdf"
    },
    {
      title: "Cours 3 - Approfondissement JavaScript",
      file: "/pdfs/cours3.pdf"
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-primary text-center mb-4">📚 Téléchargez vos supports de cours</h2>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-6 col-lg-4 mb-3" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <FaFilePdf size={40} className="text-danger mb-3" />
                <h5 className="card-title">{course.title}</h5>
                <a
                  href={course.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary mt-3"
                >
                  Télécharger le PDF
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDownload;
