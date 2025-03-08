// src/pages/LoaderAndHome.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from './Home';

import ledgerGif from '../assets/loader.gif';
import './LoadingPage.css'; // on réutilise le même style

function LoaderAndHome() {
  const [showHome, setShowHome] = useState(false);   // Affiche la home ?
  const [showLoader, setShowLoader] = useState(false); // Affiche le splash ?
  const [isExiting, setIsExiting] = useState(false); // Gère le fade-out

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà vu le loader de la home
    const hasSeen = localStorage.getItem('hasSeenLoader');
    if (hasSeen) {
      // Déjà vu => on saute directement à la Home
      setShowHome(true);
    } else {
      // Pas vu => on affiche le loader
      setShowLoader(true);

      // 1) Au bout de 3,5 s => fade out
      const fadeTimer = setTimeout(() => {
        setIsExiting(true);
      }, 3500);

      // 2) Au bout de 4 s => on met la clé, on affiche la Home
      const loadTimer = setTimeout(() => {
        localStorage.setItem('hasSeenLoader', 'true');
        setShowHome(true);
      }, 4000);

      // Nettoyage
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(loadTimer);
      };
    }
  }, []);

  // (1) Si on doit afficher la Home (loader déjà vu ou fin de timer)
  if (showHome) {
    return (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    );
  }

  // (2) Sinon, on montre le loader (première visite)
  if (showLoader) {
    return (
      <div className={`loading-container ${isExiting ? 'fade-out' : ''}`}>
        <img 
          src={ledgerGif}
          alt="Loading..."
          className="loading-gif"
        />
      </div>
    );
  }

  // (3) Cas rare (latence) : on pourrait mettre un écran noir
  return null;
}

export default LoaderAndHome;
