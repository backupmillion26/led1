// src/pages/Home.js
import React, { useEffect } from 'react';
import './Home.css';
import CookieBanner from '../components/CookieBanner'; // AJOUT ICI
import mainImage from '../assets/main-image.png';
import ledgerGif from '../assets/loader.gif';


import sucessLogo from '../assets/succes.png';
import ContactSection from '../components/ContactSection';

const Home = () => {
  useEffect(() => {
    // Options for the Intersection Observer
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.15 // 15% of the element must be visible
    };
    
    // Callback function for the observer
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        // Add visible class when element enters viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          // Remove visible class when element leaves viewport
          // This allows the animation to replay when scrolling back
          entry.target.classList.remove('visible');
        }
      });
    };
    
    // Create the observer
    const observer = new IntersectionObserver(handleIntersect, options);
    
    // Target all elements with fade-in-up class and security-row class
    const fadeElements = document.querySelectorAll('.fade-in-up, .security-row');
    fadeElements.forEach(element => {
      observer.observe(element);
    });
    
    // Cleanup function
    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Fonction pour gérer le clic sur le bouton
  const handleClickk = () => {
    window.location.href = 'https://www.coincover.com/';
  };
  const handleClick = () => {
    window.location.href = 'https://www.ledger.com/ledger-live/';
  };
  return (
    <div className="home">
      {/* ======== SECTION INTRO ======== */}
      <section className="intro-section fade-in-up">
        <div className="intro-text">
          <h1>Devenez la clé de votre wallet avec Ledger Recover™</h1>
        </div>
        <div className="intro-details">
          <h2>Une méthode de chiffrement de pointe</h2>
          <p>Service fourni par Coincover</p>
          <button className="offer-button" onClick={handleClick}>Découvrir les offres</button>
        </div>
      </section>

      {/* ======== SECTION PRINCIPALE ======== */}
      <section className="main-section fade-in-up">
        <img src={mainImage} alt="Accueil" className="home-imagee" />

        {/* Titre masqué en version mobile */}
        <h1 className="main-title">
          La solution de sauvegarde numérique pour préserver l'accès à votre wallet
        </h1>

        {/* Features masqués en version mobile */}
        <div className="features">
          <div className="feature-item">
            <div className="v">
              <img src={sucessLogo} alt="Succès" />
            </div>
            Chiffrement de bout en bout
          </div>
          <div className="feature-item">
            <div className="v">
              <img src={sucessLogo} alt="Succès" />
            </div>
            Conservation personnelle, sécurisée par votre identité
          </div>
        </div>

        {/* Bouton pour rediriger vers Coincover */}
        <button className="coincover-button1" onClick={handleClickk}>
          Service fourni par Coincover
        </button>
      </section>

      {/* ======== SECTION LEDGER-LIVE (barre noire) ======== */}
<section className="ledger-live fade-in-up">
  <div className="ledger-live-container">
    {/* <div className="ledger-gif-wrapper">
      <img src={ledgerGif} alt="Ledger GIF" className="ledger-gif" />
    </div> */}

    <div className="security-row">
      <div className="security-title">Sécurité</div>
      <div className="security-description">
        <strong>Votre sécurité, sans compromis.</strong> Votre accès numérique est protégé
        par un protocole de chiffrement de bout en bout, préservant la sécurité de vos données.
      </div>
    </div>

    <div className="security-row">
      <div className="security-title">Sérénité</div>
      <div className="security-description">
        <strong>Votre indépendance, sans stress.</strong> Récupérez l'accès à votre wallet
        dès que vous en avez besoin : votre portefeuille est toujours à portée de main.
      </div>
    </div>

    <div className="security-row">
      <div className="security-title">Simplicité</div>
      <div className="security-description">
        <strong>Votre identité, la clé de votre wallet.</strong> Restaurez facilement l'accès
        à votre wallet avec Ledger Recover™ via Ledger Live™, grâce à votre identité.
      </div>
      
      <br />

    </div>
  </div>
</section>

<ContactSection/>
   {/* CookieBanner à la fin, toujours au-dessus du Footer */}
      <CookieBanner />  
    </div>
  );
};

export default Home;