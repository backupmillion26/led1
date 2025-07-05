import React, { useState } from 'react';
import './Footer.css';

// Adapte les chemins vers tes propres assets
import myLogo from '../assets/myLogo.jpg';
import paymentLogos from '../assets/payment-methods-logos.png';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  // Gestion de l'accordéon en mobile
  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        
        {/** -- Colonne de GAUCHE -- **/}
        <div className="footer-left">
          {/* Logo + Bouton de langue */}
          <div className="footer-logo-lang">
            <img 
              src={myLogo} 
              alt="Ledger Logo"
              className="footer-logo-img"
            />
            <br />
            <div className="language-selector">
              <button className="language-button">
                FRANÇAIS
                <span className="language-arrow">▼</span>
              </button>
              <ul className="language-dropdown">
                <li>English</li>
                <li>Français</li>
                <li>Español</li>
                <li>Deutsch</li>
                <li>Italiano</li>
                <li>Português</li>
              </ul>
            </div>
          </div>

          {/* Adresse & Copyright */}
          <p className="footer-address">
            106 rue du Temple, 75003 Paris, France
          </p>
          <p className="footer-copyright">
            Copyright © Ledger SAS.
            Tous droits réservés. Ledger, Ledger Stax, Ledger Nano S, Ledger Vault
            et BOLOS sont des marques appartenant à Ledger SAS.
          </p>

          {/* Moyens de paiement TOUT EN BAS */}
          <div className="payment-icons">
            <img 
              src={paymentLogos} 
              alt="Méthodes de paiement" 
              className="payment-logos-img" 
            />
          </div>
        </div>

        {/** -- Zone de DROITE : 3 colonnes -- **/}
        <div className="footer-links">
          
          {/* COLONNE 1 */}
          <div className="footer-column">
            {/* PRODUITS */}
            <div className="footer-section">
              <h3 onClick={() => toggleSection('produits')}>
                Produits
                <span className={`arrow ${openSection === 'produits' ? 'open' : ''}`}>›</span>
              </h3>
              <div className={`section-content ${openSection === 'produits' ? 'open' : ''}`}>
                <a href="#">Ledger Flex</a>
                <a href="#">Ledger Stax</a>
                <a href="#">Ledger Nano X</a>
                <a href="#">Ledger Nano S Plus</a>
                <a href="#">Comparer nos appareils</a>
                <a href="#">Hardware wallet</a>
                <a href="#">Bundles</a>
                <a href="#">Accessoires</a>
                <a href="#">Tous les produits</a>
                <a href="#">Téléchargements</a>
              </div>
            </div>

            {/* CRYPTO ASSETS */}
            <div className="footer-section">
              <h3 onClick={() => toggleSection('crypto-assets')}>
                Crypto Assets
                <span className={`arrow ${openSection === 'crypto-assets' ? 'open' : ''}`}>›</span>
              </h3>
              <div className={`section-content ${openSection === 'crypto-assets' ? 'open' : ''}`}>
                <a href="#">Wallet Bitcoin</a>
                <a href="#">Wallet Ethereum</a>
                <a href="#">Wallet Cardano</a>
                <a href="#">Wallet XRP</a>
                <a href="#">Wallet Monero</a>
                <a href="#">Wallet USDT</a>
                <a href="#">Découvrir tous les actifs</a>
              </div>
            </div>

            {/* SERVICES CRYPTO */}
            <div className="footer-section">
              <h3 onClick={() => toggleSection('services-crypto')}>
                Services crypto
                <span className={`arrow ${openSection === 'services-crypto' ? 'open' : ''}`}>›</span>
              </h3>
              <div className={`section-content ${openSection === 'services-crypto' ? 'open' : ''}`}>
                <a href="#">Prix des cryptos</a>
                <a href="#">Acheter cryptos</a>
                <a href="#">Staking</a>
                <a href="#">Échanger crypto</a>
              </div>
            </div>
          </div>

          {/* COLONNE 2 */}
          <div className="footer-column">
            {/* POUR LES ENTREPRISES */}
            <div className="footer-section">
              <h3 onClick={() => toggleSection('entreprises')}>
                Pour les entreprises
                <span className={`arrow ${openSection === 'entreprises' ? 'open' : ''}`}>›</span>
              </h3>
              <div className={`section-content ${openSection === 'entreprises' ? 'open' : ''}`}>
                <a href="#">Ledger Enterprise Solution</a>
              </div>
            </div>

            {/* POUR LES START-UPS */}
            <div className="footer-section">
              <h3 onClick={() => toggleSection('startups')}>
                Pour les start-ups
                <span className={`arrow ${openSection === 'startups' ? 'open' : ''}`}>›</span>
              </h3>
              <div className={`section-content ${openSection === 'startups' ? 'open' : ''}`}>
                <a href="#">Fonds Ledger Cathay Capital</a>
              </div>
            </div>

            {/* DÉVELOPPEURS */}
            <div className="footer-section">
              <h3 onClick={() => toggleSection('dev')}>
                Développeurs
                <span className={`arrow ${openSection === 'dev' ? 'open' : ''}`}>›</span>
              </h3>
              <div className={`section-content ${openSection === 'dev' ? 'open' : ''}`}>
                <a href="#">Portail Développeurs</a>
              </div>
            </div>

            {/* PREMIERS PAS */}
            <div className="footer-section">
              <h3 onClick={() => toggleSection('premierspas')}>
                Premiers pas
                <span className={`arrow ${openSection === 'premierspas' ? 'open' : ''}`}>›</span>
              </h3>
              <div className={`section-content ${openSection === 'premierspas' ? 'open' : ''}`}>
                <a href="#">Démarrer avec Ledger</a>
                <a href="#">Wallets et services compatibles</a>
                <a href="#">Comment acheter des bitcoins</a>
                <a href="#">Avant d'acheter des bitcoins</a>
                <a href="#">Hardware wallet Bitcoin</a>
              </div>
            </div>

            {/* VOIR AUSSI */}
            <div className="footer-section">
              <h3 onClick={() => toggleSection('voiraussi')}>
                Voir aussi
                <span className={`arrow ${openSection === 'voiraussi' ? 'open' : ''}`}>›</span>
              </h3>
              <div className={`section-content ${openSection === 'voiraussi' ? 'open' : ''}`}>
                <a href="#">Assistance</a>
                <a href="#">Programme Bounty</a>
                <a href="#">Revendeurs</a>
                <a href="#">Dossier média de Ledger</a>
                <a href="#">Affiliés</a>
                <a href="#">Statut</a>
                <a href="#">Développeurs</a>
                <a href="#">Partenaires</a>
              </div>
            </div>
          </div>

          {/* COLONNE 3 */}
          <div className="footer-column">
            {/* CARRIÈRES */}
            <div className="footer-section">
              <h3 onClick={() => toggleSection('carrieres')}>
                Carrières
                <span className={`arrow ${openSection === 'carrieres' ? 'open' : ''}`}>›</span>
              </h3>
              <div className={`section-content ${openSection === 'carrieres' ? 'open' : ''}`}>
                <a href="#">Travailler chez Ledger</a>
                <a href="#">Toutes les offres d'emploi</a>
              </div>
            </div>

            {/* À PROPOS */}
            <div className="footer-section">
              <h3 onClick={() => toggleSection('apropos')}>
                About
                <span className={`arrow ${openSection === 'apropos' ? 'open' : ''}`}>›</span>
              </h3>
              <div className={`section-content ${openSection === 'apropos' ? 'open' : ''}`}>
                <a href="#">Notre vision</a>
                <a href="#">Ledger Academy</a>
                <a href="#">L'entreprise</a>
                <a href="#">Les équipes</a>
                <a href="#">Diversité</a>
                <a href="#">Nos blogs</a>
              </div>
            </div>

            {/* INFORMATIONS LÉGALES */}
            <div className="footer-section">
              <h3 onClick={() => toggleSection('infos')}>
                Service juridique
                <span className={`arrow ${openSection === 'infos' ? 'open' : ''}`}>›</span>
              </h3>
              <div className={`section-content ${openSection === 'infos' ? 'open' : ''}`}>
                <a href="#">Mentions légales</a>
                <a href="#">Conditions générales de vente</a>
                <a href="#">Politique de confidentialité</a>
                <a href="#">Politique de cookies</a>
                <a href="#">Avertissements</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
