import React, { useState } from 'react';
import '../styles/Exercise.css';

const Exercise = () => {
  const [response, setResponse] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const exercises = [
    {
      question: 'Décrivez une situation professionnelle où vous avez dû prioriser plusieurs tâches importantes. Comment avez-vous géré cette situation et quelles ont été les priorités que vous avez définies pour être plus productif ?',
    },
    {
      question: 'Donnez un exemple où une mauvaise communication a conduit à un malentendu ou un problème dans une équipe. Comment auriez-vous pu communiquer différemment pour éviter ce problème ?',
    },
    {
      question: 'Décrivez un cas où vous avez dû encadrer une équipe ou un collègue pour atteindre un objectif commun. Quelles compétences de leadership avez-vous utilisées et comment avez-vous motivé l’équipe ?',
    },
    {
      question: 'Écrivez un plan pour atteindre un objectif de développement personnel dans les 6 prochains mois. Quel sera votre premier objectif, et quelles actions spécifiques allez-vous entreprendre pour y parvenir ?',
    },
    {
      question: 'Avez-vous déjà été confronté à un conflit dans votre environnement professionnel ? Comment l\'avez-vous géré et quelles leçons en avez-vous tirées ?',
    },
  ];

  const [currentExercise, setCurrentExercise] = useState(0);

  const handleSubmit = () => {
    if (response.trim() !== '') {
      setSubmitted(true);
    }
  };

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setSubmitted(false);
      setResponse('');
    }
  };

  return (
    <div className="exercise-container bg-light p-4 rounded shadow-sm mb-5">
      <h2 className="text-primary mb-3">📝 Exercice de Réflexion</h2>
      <p className="mb-2">
        <strong>Objectif :</strong> Répondez à l'exercice suivant pour réfléchir sur votre développement personnel et professionnel dans le contexte de Kéba Consulting.
      </p>

      <p className="mb-3"><strong>Exercice {currentExercise + 1} :</strong> {exercises[currentExercise].question}</p>

      <textarea
        className="form-control"
        rows="5"
        placeholder="Répondez ici..."
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="btn btn-primary mt-3"
        disabled={submitted || response.trim() === ''}
      >
        {submitted ? 'Soumis ✅' : 'Soumettre'}
      </button>

      {submitted && (
        <div className="alert alert-success mt-3">
          ✅ Merci pour votre réponse, elle a été enregistrée avec succès !
        </div>
      )}

      <button
        className="btn btn-secondary mt-3"
        onClick={nextExercise}
        disabled={submitted === false}
      >
        {currentExercise < exercises.length - 1 ? 'Suivant' : 'Terminer'}
      </button>
    </div>
  );
};

export default Exercise;
