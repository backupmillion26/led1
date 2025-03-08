// src/components/LogoBar.js
import React from 'react';
import './LogoBar.css';

const LogoBar = () => {
  const logos = [
    "https://i.ibb.co/8zdNznp/2.png",
    "https://i.ibb.co/vs1Hjcm/1.png",
    "https://i.ibb.co/frXp2Ng/1-logo3.png",
    "https://i.ibb.co/8zLM6Sw/Arbitrum-logo.png",
    "https://i.ibb.co/RyDV3QK/Cardano-logo.png",
    "https://i.ibb.co/r7PjKG8/1-logo4.png",
    "https://i.ibb.co/5vpPxS7/bnb-logo.png",
    "https://i.ibb.co/1qMSZ9N/Ethereum-logo.webp",
    "https://i.ibb.co/z8YmNbv/Optimism.webp",
    "https://i.ibb.co/Ytcz1xG/Solana-logo.webp",
    "https://i.ibb.co/tQVM8vk/ton-symbol.webp",
    "https://i.ibb.co/7RXd5j5/Tron-Logo.webp",
    "https://i.ibb.co/wzD6M7D/Uniswap-logo.webp",
    "https://i.ibb.co/S5qvyYw/USD-Coin-icon-1.webp",
    "https://i.ibb.co/WGzG8ZR/Wrapped-Bitcoin-logo-1.webp",
    "https://i.ibb.co/fpr8GQB/XRP-logo.webp",
  ];

  return (
    <div className="logo-bar-container">
      <div className="logo-track">
        {logos.concat(logos).map((logo, index) => (
          <div className="logo-wrap" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} className="logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBar;
