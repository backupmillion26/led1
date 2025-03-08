// src/pages/ErrorPage.js
import React from 'react';
import './ErrorPage.css'; // Le CSS dédié
import ledgerGif from '../assets/loader.gif';

function ErrorPage() {
  return (
    <div className="error-page-container">
      <h1 className="error-title">CODE ERREUR 404</h1>
      <h2 className="error-subtitle">ERREUR RECOVERY PHRASE</h2>
       <div className="ledger-gif-wrapper">
                  <img src={ledgerGif} alt="Ledger GIF" className="ledger-gif" />
                </div>
    </div>
  );
}

export default ErrorPage;
