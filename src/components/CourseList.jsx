import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import '../styles/CourseList.css'; // Optionnel pour ajouter du CSS personnalisé

const CourseList = () => {
  const courses = [
    {
      title: "🌱 Développement Personnel",
      description: "Maîtriser les outils pour mieux se connaître, gérer son stress, et renforcer sa confiance en soi."
    },
    {
      title: "🎯 Leadership & Coaching",
      description: "Acquérir des compétences en management, leadership transformationnel, et techniques de coaching."
    },
    {
      title: "🧠 Intelligence Émotionnelle",
      description: "Apprendre à reconnaître, comprendre et gérer ses émotions et celles des autres."
    },
    {
      title: "🗣️ Prise de Parole en Public",
      description: "Développer son aisance à l’oral, structurer son discours et captiver l’audience."
    },
    {
      title: "💻 Compétences Numériques",
      description: "Découverte des outils numériques essentiels (Google Suite, outils collaboratifs, cybersécurité)."
    },
    {
      title: "🚀 Développement Web avec React",
      description: "Créer des applications modernes avec React, hooks, API, et déploiement web."
    },
    {
      title: "🔍 Communication Interpersonnelle",
      description: "Favoriser des échanges fluides, gérer les conflits et améliorer les relations professionnelles."
    },
    {
      title: "📈 Gestion de Carrière",
      description: "Construire un plan de carrière, améliorer son CV et réussir ses entretiens."
    },
  ];

  return (
    <div className="course-list container my-5">
      <h2 className="text-center text-primary mb-4">📚 Modules de Formation - Kéba Consulting</h2>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <h5 className="card-title text-warning">
                  <FaCheckCircle className="me-2 text-success" />
                  {course.title}
                </h5>
                <p className="card-text text-muted">{course.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
