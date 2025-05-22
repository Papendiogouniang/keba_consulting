import React, { useState } from 'react';
import questions from '../data/questions'; // Import des questions personnalisées
import '../styles/Test.css'; // Optionnel : si tu veux un fichier CSS dédié

const Test = ({ onSuccess }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const handleSubmit = () => {
    const correct = questions.filter((q) => answers[q.id] === q.answer).length;
    setScore(correct);
    setSubmitted(true);
    if (correct === questions.length) onSuccess();
  };

  return (
    <div className="test-container bg-white p-4 rounded shadow mb-5">
      <h2 className="text-primary mb-4">🧠 Test de Validation des Connaissances - Kéba Consulting</h2>
      {questions.map((q) => (
        <div key={q.id} className="question-block mb-4">
          <strong className="d-block mb-2">{q.question}</strong>
          {q.options.map((option, i) => (
            <div key={i} className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name={`q${q.id}`}
                value={option}
                id={`q${q.id}_option${i}`}
                onChange={() => handleChange(q.id, option)}
                disabled={submitted}
              />
              <label htmlFor={`q${q.id}_option${i}`} className="form-check-label">
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}

      {!submitted ? (
        <button className="btn btn-success" onClick={handleSubmit}>
          Soumettre mes réponses
        </button>
      ) : (
        <div className="mt-4">
          <h5 className={`mt-3 ${score === questions.length ? 'text-success' : 'text-danger'}`}>
            ✅ Score : {score} / {questions.length}
          </h5>
          {score === questions.length ? (
            <p className="text-success">Bravo ! Vous avez réussi le test avec un score parfait 🎉</p>
          ) : (
            <p className="text-danger">Vous pouvez revoir les cours et réessayer pour réussir le test.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Test;
