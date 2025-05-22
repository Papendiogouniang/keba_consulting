import React, { useState, useEffect } from 'react';
import CourseList from '../components/CourseList';
import Exercise from '../components/Exercise';
import Test from '../components/Test';
import Certificate from '../components/Certificate';
import CourseDownload from '../components/CourseDownload';

const ELearning = () => {
  const [passed, setPassed] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPhoto, setUserPhoto] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    const storedUserPhoto = localStorage.getItem('userPhoto');
    const storedPassed = localStorage.getItem('passed') === 'true';

    if (storedUserName) {
      setUserName(storedUserName);
      setUserPhoto(storedUserPhoto || '');
      setShowForm(false);
      setCurrentStep(storedPassed ? 5 : 1);
      if (storedPassed) setPassed(true);
    }
  }, []);

  const handleNameSubmit = () => {
    if (userName.trim() === '') return;
    localStorage.setItem('userName', userName);
    localStorage.setItem('userPhoto', userPhoto);
    setShowForm(false);
    setCurrentStep(1);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setUserPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleTestSuccess = () => {
    setPassed(true);
    localStorage.setItem('passed', 'true');
    setCurrentStep(5);
  };

  const handleReset = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userPhoto');
    localStorage.removeItem('passed');
    setUserName('');
    setUserPhoto('');
    setPassed(false);
    setShowForm(true);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">🎓 Module E-Learning</h1>

      {showForm ? (
        <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
          <h3 className="text-center mb-3 text-primary">
            👋 Bienvenue dans le module E-Learning
          </h3>
          <p className="text-center mb-4">
            Veuillez entrer votre nom et votre photo pour démarrer votre parcours.
          </p>

          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">Nom complet :</label>
            <input
              id="nameInput"
              type="text"
              className="form-control"
              placeholder="Entrez votre nom ici..."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="photoInput" className="form-label">Photo de profil :</label>
            <input
              id="photoInput"
              type="file"
              accept="image/*"
              className="form-control"
              onChange={handlePhotoUpload}
            />
            {userPhoto && (
              <img
                src={userPhoto}
                alt="Aperçu"
                className="mt-3 rounded-circle border"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            )}
          </div>

          <button
            onClick={handleNameSubmit}
            className="btn btn-primary w-100"
            disabled={userName.trim() === ''}
          >
            🚀 Commencer le parcours
          </button>
        </div>
      ) : (
        <div>
          <div className="text-end mb-3">
            <button className="btn btn-sm btn-outline-danger" onClick={handleReset}>
              🔄 Changer de nom / Recommencer
            </button>
          </div>

          {currentStep === 1 && (
            <div>
              <CourseList />
              <button className="btn btn-primary mt-3 me-2" onClick={nextStep}>
                Suivant
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <CourseDownload />
              <button className="btn btn-secondary mt-3 me-2" onClick={prevStep}>
                Précédent
              </button>
              <button className="btn btn-primary mt-3" onClick={nextStep}>
                Suivant
              </button>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <Exercise />
              <button className="btn btn-secondary mt-3 me-2" onClick={prevStep}>
                Précédent
              </button>
              <button className="btn btn-primary mt-3" onClick={nextStep}>
                Suivant
              </button>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <Test onSuccess={handleTestSuccess} />
              <button className="btn btn-secondary mt-3 me-2" onClick={prevStep}>
                Précédent
              </button>
            </div>
          )}

          {passed && currentStep === 5 && (
            <div>
              <Certificate userName={userName} userPhoto={userPhoto} />
              <button className="btn btn-warning mt-3" onClick={handleReset}>
                🔄 Réinitialiser
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ELearning;
