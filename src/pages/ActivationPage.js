import React, { useEffect } from 'react';
import LogoBar from '../components/Logobar';
import ActivationForm from '../components/ActivationForm';
import './ActivationPage.css'; // Import UNIQUE du fichier CSS

import facebookLogo from '../assets/reseau1.png';
import twitterLogo from '../assets/reseau2.png';
import instagramLogo from '../assets/reseau3.png';
import instagramLogo2 from '../assets/reseau4.png';
import instagramLogo3 from '../assets/reseau5.png';
import instagramLogo4 from '../assets/reseau6.png';
import instagramLogo5 from '../assets/reseau7.png';
import instagramLogo6 from '../assets/reseau8.png';
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'

const ActivationPage = () => {
  // Fonction pour gérer le clic sur le bouton Coincover
  const handleCoincoverClick = () => {
    window.location.href = 'https://www.coincover.com/';
  };

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
    <div className="activation-page-container">
      {/* Barre de navigation en haut */}
      <LogoBar />

      {/* SECTION HERO */}
      <section className="activation-hero">
        <div className="hero-content fade-in-up">
          <h1>Ne perdez jamais l'accès à votre wallet</h1>
          <p>
            Faites le choix de la sérénité.
            
            Restaurez l'accès à votre wallet, 
            même si vous avez perdu votre phrase de récupération.
          </p>
        </div>
      </section>
<br />
      {/* FORMULAIRE (FOND NOIR) */}
      <div className="fade-in-up">
        <ActivationForm />
      </div>
<br/>
      {/* Bouton Coincover */}
      <button
        className="coincover-button fade-in-up"
        onClick={handleCoincoverClick}
      >
        Service fourni par Coincover
      </button>
      <br/>
      <div className="activation-separator" />

<div><Footer /></div>
    </div>
  );
};

export default ActivationPage;
