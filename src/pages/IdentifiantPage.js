// src/pages/IdentifiantPage.js
import React from 'react';
import LogoBar from '../components/Logobar.js';
import IdentifiantForm from '../components/Identifiant.js';
import Footer from '../components/Footer'
import facebookLogo from '../assets/reseau1.png';
import twitterLogo from '../assets/reseau2.png';
import instagramLogo from '../assets/reseau3.png';
import instagramLogo2 from '../assets/reseau4.png';
import instagramLogo3 from '../assets/reseau5.png';
import instagramLogo4 from '../assets/reseau6.png';
import instagramLogo5 from '../assets/reseau7.png';
import instagramLogo6 from '../assets/reseau8.png';
import ContactSection from '../components/ContactSection.js'

/** Import du CSS unique pour cette page & composant */
import '../components/Identifiant.css';

const IdentifiantPage = () => {
  // Fonction pour gérer le clic sur le bouton Coincover
  const handleCoincoverClick = () => {
    window.location.href = 'https://www.coincover.com/';
  };
  return (
    <div className="identifiant-page-container">
      {/* Barre de navigation en haut */}
      <LogoBar />

      {/* SECTION HERO noir : titre + sous-texte + bouton coincover */}
      <section className="identifiant-hero">
        <div className="hero-content">
          <h1>Une méthode de chiffrement de pointe</h1>
          <p>
            Restez serein, quoi qu'il arrive.  Récupérez votre wallet 
            sans effort, même en cas de perte de vos informations.
          </p>

         
        </div>
      </section>

      {/* Formulaire Identifiant (GIF + champ + bouton), toujours sur fond noir */}
      <IdentifiantForm />
 {/* Bouton en bordure blanche */}
 <button
        data-aos="fade-up"
        className="coincover-button"
        onClick={handleCoincoverClick} // Ajout de l'événement onClick
      >
        Service fourni par Coincover
      </button>
      <br/>
      <div className="activation-separrator" />

<div><Footer /></div>
   
    </div>
  );
};

export default IdentifiantPage;