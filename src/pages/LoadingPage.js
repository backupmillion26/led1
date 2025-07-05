import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ledgerGif from '../assets/loader.gif';
import './LoadingPage.css';

/**
 * Splash screen réutilisable.
 * Le timer est différent sur mobile (iPhone/Android)
 */
function LoadingPage({
  nextPath = '/home',
  displayDuration,
  fadeOutDelay,
  alwaysShow = false,
}) {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  // Détecte si mobile (pour timer spécifique)
  function isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }

  // Timers différents selon device
  const mobileDuration = displayDuration || 5200; // mobile = + long
  const mobileFade = fadeOutDelay || 4700; // fade avant navigation
  const desktopDuration = displayDuration || 4000;
  const desktopFade = fadeOutDelay || 3500;

  useEffect(() => {
    // Affiche toujours le loader sur mobile à chaque visite !
    if (!alwaysShow && isMobile()) {
      localStorage.removeItem('hasSeenLoader');
    }

    if (!alwaysShow) {
      const hasSeenLoader = localStorage.getItem('hasSeenLoader');
      if (hasSeenLoader && !isMobile()) {
        // Desktop only : saute le loader si déjà vu
        navigate(nextPath, { replace: true });
        return;
      }
    }

    // Timer différents mobile/desktop
    const duration = isMobile() ? mobileDuration : desktopDuration;
    const fade = isMobile() ? mobileFade : desktopFade;

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, fade);

    const navTimer = setTimeout(() => {
      if (!alwaysShow && !isMobile()) {
        localStorage.setItem('hasSeenLoader', 'true');
      }
      navigate(nextPath);
    }, duration);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(navTimer);
    };
    // eslint-disable-next-line
  }, [alwaysShow, navigate, nextPath]);

  return (
    <div className={`loading-container ${isExiting ? 'fade-out' : ''}`}>
      <img
        src={ledgerGif}
        alt="Loading..."
        className="loading-gif"
        draggable="false"
      />
    </div>
  );
}

export default LoadingPage;
