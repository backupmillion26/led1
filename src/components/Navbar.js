import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Logo desktop (SVG)
import logoImage from '../assets/Ledger-logo.svg';
// Logo mobile (PNG)
import mobileLogo from '../assets/ledger-logo.png';
// Icône panier
import Carticon from '../assets/cart-icon.png';

const Navbar = () => {
  // État du dropdown
  const [dropdown, setDropdown] = useState({
    products: false,
    appServices: false,
    learn: false,
    business: false,
  });

  // État : menu mobile ouvert/fermé
  const [mobileOpen, setMobileOpen] = useState(false);

  /**
   * Bloquer le scroll quand le menu mobile est ouvert,
   * en ajoutant la classe .mobile-menu-open au <body>
   */
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [mobileOpen]);

  // Ouvrir/fermer le menu mobile
  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  // Ferme le menu en cliquant sur l'overlay gris
  const closeMenu = () => {
    setMobileOpen(false);
  };

  // Sur desktop, on active le dropdown au survol
  // Sur mobile, on l’active si le menu est déjà ouvert et qu’on clique
  const handleMouseEnter = (menu) => {
    if (!mobileOpen) {
      setDropdown((prev) => ({ ...prev, [menu]: true }));
    }
  };
  const handleMouseLeave = (menu) => {
    if (!mobileOpen) {
      setDropdown((prev) => ({ ...prev, [menu]: false }));
    }
  };

  // Gérer le dropdown par clic en mobile
  const handleDropdown = (menu) => {
    setDropdown((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <>
      {/* Overlay grisé en arrière-plan */}
      <div
        className={`mobile-overlay ${mobileOpen ? 'opened' : ''}`}
        onClick={closeMenu}
      />

      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo : version desktop + version mobile */}
          <div className="navbar-logo">
            <Link to="/">
              {/* Logo PC (SVG) : visible uniquement sur desktop */}
              <img
                src={logoImage}
                alt="Accueil"
                className="home-image desktop-logo"
              />
              {/* Logo MOBILE (PNG) : visible uniquement sur mobile */}
              <img
                src={mobileLogo}
                alt="Accueil"
                className="home-image mobile-logo"
              />
            </Link>
          </div>

          {/* Icône burger → X si menu ouvert */}
          <div
            className={`burger-icon ${mobileOpen ? 'change' : ''}`}
            onClick={toggleMobileMenu}
          >
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>

          {/* Menu (UL) */}
          <ul className={`navbar-links ${mobileOpen ? 'links-open' : ''}`}>
            {/* Liens simples */}
            {/* <li>
              <Link to="/" onClick={closeMenu}>
                Accueil
              </Link>
            </li> */}
            <li>
              <Link to="/activation" onClick={closeMenu}>
                Activation
              </Link>
            </li>
            {/* <li>
              <Link to="/identifiant" onClick={closeMenu}>
                ID
              </Link>
            </li> */}
            {/* <li>
              <Link to="/recovery-phrase" onClick={closeMenu}>
                phrase
              </Link>
            </li> */}

            {/* Dropdown Produits */}
            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={() => handleMouseLeave('products')}
            >
              <div
                className="dropdown-wrapper"
                onClick={() => mobileOpen && handleDropdown('products')}
              >
                <span
                  className={`dropdown-link ${
                    dropdown.products ? 'active' : ''
                  }`}
                >
                  Produits
                  <span className="dropdown-triangle"></span>
                </span>
              </div>
              {dropdown.products && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="https://shop.ledger.com/fr/pages/ledger-flex">
                      Ledger Flex
                    </a>
                  </li>
                  <li>
                    <a href="https://shop.ledger.com/fr/pages/ledger-stax">
                      Ledger Stax
                    </a>
                  </li>
                  <li>
                    <a href="https://shop.ledger.com/fr/pages/ledger-nano-x">
                      Ledger Nano X
                    </a>
                  </li>
                  <li>
                    <a href="https://shop.ledger.com/fr/pages/ledger-nano-s-plus">
                      Ledger Nano S Plus
                    </a>
                  </li>
                  <li>
                    <a href="https://shop.ledger.com/fr/pages/hardware-wallets-comparison">
                      Comparer nos appareils
                    </a>
                  </li>
                  <li>
                    <a href="https://shop.ledger.com/fr/pages/hardware-wallet">
                      Hardware Wallet
                    </a>
                  </li>
                  <li>
                    <a href="https://shop.ledger.com/fr#category-bundle">
                      Packs
                    </a>
                  </li>
                  <li>
                    <a href="https://shop.ledger.com/fr#category-accessories">
                      Accessoires
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Dropdown App & Services */}
            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnter('appServices')}
              onMouseLeave={() => handleMouseLeave('appServices')}
            >
              <div
                className="dropdown-wrapper"
                onClick={() => mobileOpen && handleDropdown('appServices')}
              >
                <span
                  className={`dropdown-link ${
                    dropdown.appServices ? 'active' : ''
                  }`}
                >
                  App & Services
                  <span className="dropdown-triangle"></span>
                </span>
              </div>
              {dropdown.appServices && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="https://www.ledger.com/fr/ledger-live">
                      Ledger Live
                    </a>
                  </li>
                  <li>
                    <a href="https://greenyellow-lapwing-agb6npjn44c3o9wn.builder-preview.com/activation">
                      Ledger Recover
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ledger.com/fr/cl-card">Carte CL</a>
                  </li>
                  <li>
                    <a href="https://www.ledger.com/fr/supported-services">
                      Service pris en charge
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ledger.com/fr/coin/price">
                      Prix des cryptos
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Dropdown Apprendre */}
            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnter('learn')}
              onMouseLeave={() => handleMouseLeave('learn')}
            >
              <div
                className="dropdown-wrapper"
                onClick={() => mobileOpen && handleDropdown('learn')}
              >
                <span
                  className={`dropdown-link ${dropdown.learn ? 'active' : ''}`}
                >
                  Apprendre
                  <span className="dropdown-triangle"></span>
                </span>
              </div>
              {dropdown.learn && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="https://www.ledger.com/fr/academy">
                      Ledger Academy
                    </a>
                  </li>
                  <li>
                    <a href="https://quest.ledger.com/">Learn & Earn</a>
                  </li>
                  <li>
                    <a href="https://www.ledger.com/fr/academy/quest-ce-que-le-web-30nbsp-tout-ce-quil-faut-savoirnbsp">
                      L'essentiel
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ledger.com/fr/blog">Blog</a>
                  </li>
                
                  <li>
                    <a href="https://www.ledger.com/fr/buy">Comment acheter</a>
                  </li>
                  <li>
                    <a href="https://www.ledger.com/fr/swap">
                      Comment échanger
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ledger.com/fr/staking">
                      Comment staker
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Dropdown Pour les entreprises */}
            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnter('business')}
              onMouseLeave={() => handleMouseLeave('business')}
            >
              <div
                className="dropdown-wrapper"
                onClick={() => mobileOpen && handleDropdown('business')}
              >
                <span
                  className={`dropdown-link ${
                    dropdown.business ? 'active' : ''
                  }`}
                >
                  Pour les entreprises
                  <span className="dropdown-triangle"></span>
                </span>
              </div>
              {dropdown.business && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="https://enterprise.ledger.com/?utm_source=mainsite&utm_medium=header">
                      Enterprise Solutions
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ledger.com/fr/partners">
                      Partenaires Ledger
                    </a>
                  </li>
                  <li>
                    <a href="https://co-branded.ledger.com/">Co-branding</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Assistance */}
            <li>
              <Link to="/Activation" onClick={closeMenu}>
                Assistance
              </Link>
            </li>
          </ul>

          {/* Panier (icône) à droite */}
          <div className="navbar-cart">
            <Link to="/">
              <img src={Carticon} alt="Accueil" className="home-image" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
