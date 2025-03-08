// src/pages/LoadingPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ledgerGif from '../assets/loader.gif';
import './LoadingPage.css';

/**
 * Splash screen réutilisable.
 * nextPath        => route finale (ex: "/recovery-phrase" ou "/home")
 * displayDuration => durée d'affichage (ms)
 * fadeOutDelay    => moment du fade-out (ms)
 * alwaysShow      => si true, on ignore localStorage et on montre toujours le loader
 */
function LoadingPage({
  nextPath = '/home',
  displayDuration = 4000,
  fadeOutDelay = 3500,
  alwaysShow = false,
}) {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Si on n'est pas en alwaysShow,
    // on vérifie si le splash a déjà été vu.
    if (!alwaysShow) {
      const hasSeenLoader = localStorage.getItem('hasSeenLoader');
      if (hasSeenLoader) {
        // Si oui, on saute directement
        navigate(nextPath, { replace: true });
        return;
      }
    }

    // Sinon, timers fade + redirection
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, fadeOutDelay);

    const navTimer = setTimeout(() => {
      // On peut stocker hasSeenLoader ici si on veut, 
      // mais ça risque de gêner la home. 
      // -> On n'y touche pas si alwaysShow = true => on ne modifie pas 
      //    localStorage pour la home.
      if (!alwaysShow) {
        localStorage.setItem('hasSeenLoader', 'true');
      }
      navigate(nextPath);
    }, displayDuration);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(navTimer);
    };
  }, [alwaysShow, navigate, nextPath, displayDuration, fadeOutDelay]);

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

export default LoadingPage;
