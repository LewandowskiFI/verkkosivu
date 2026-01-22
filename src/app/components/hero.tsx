import React from 'react';

// --- KORJAUS ALKAA ---
// Vanha, virheellinen rivi oli: import image from "figma:asset/..."

// Uusi, korjattu rivi.
// Huom: "../../" nousee kansioissa ylöspäin (components -> app -> src),
// jotta päästään assets-kansioon.
import heroImage from '../../assets/hero-image.png'; 
// --- KORJAUS PÄÄTTYY ---

const Hero = () => {
  return (
    <div className="hero-section">
      {/* Tässä kohtaa oli todennäköisesti virheellinen kuva */}
      
      <img 
        src={heroImage} 
        alt="Hero banner" 
        className="w-full h-auto" // Esimerkki Tailwind-tyyleistä
      />

      <div className="hero-content">
        <h1>Tervetuloa sivuille</h1>
      </div>
    </div>
  );
};

export default Hero;
