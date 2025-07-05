import React, { useEffect, useState } from "react";
import "./CookieBanner.css";

const COOKIE_KEY = "cookie-consent-pair-ledger";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Vérifie si le choix cookies est déjà stocké
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setShow(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner__text">
        Ce site utilise des cookies pour fournir les fonctionnalités de site nécessaires et améliorer votre expérience. En utilisant ce site, vous acceptez notre utilisation des cookies.
      </div>
      <div className="cookie-banner__actions">
        <button className="cookie-banner__accept" onClick={handleAccept}>
          Accepter
        </button>
        <button className="cookie-banner__decline" onClick={handleDecline}>
          Décliner
        </button>
      </div>
    </div>
  );
}
