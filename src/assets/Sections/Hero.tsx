import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {

  const { t } = useTranslation();

  const sectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    textAlign: 'center',
    padding: '0 20px'
  };

  const imageStyle: React.CSSProperties = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #646cff',
    marginBottom: '30px',
    boxShadow: '0 0 20px rgba(100, 108, 255, 0.2)'
  };

  const btnContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '20px',
    marginTop: '40px'
  };

  const commonBtnStyle: React.CSSProperties = {
    padding: '12px 30px',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: '0.3s'
  };

  return (
    <section style={sectionStyle}>
      <img 
        src="/myPhoto.png" 
        alt="Hasan Berk Göktaş" 
        style={imageStyle} 
      />

      <h1 style={{ fontSize: '4rem', fontWeight: '900', margin: '0', letterSpacing: '-2px', lineHeight: '1' }}>
        {t("hero.title")}
      </h1>

      <p style={{ fontSize: '1.5rem', color: '#888', marginTop: '15px', fontWeight: '400' }}>
        {t("hero.subtitle")}
      </p>
      
      <p style={{ maxWidth: '600px', color: '#666', marginTop: '20px', lineHeight: '1.6' }}>
        {t("hero.description")}
      </p>

      <div style={btnContainerStyle}>
        <Link 
          to="/projects" 
          style={{ ...commonBtnStyle, backgroundColor: '#646cff', color: 'white' }}
        >
          {t("hero.projectsBtn")}
        </Link>
        
        <Link 
          to="/contact" 
          style={{ ...commonBtnStyle, backgroundColor: 'transparent', color: 'white', border: '1px solid #333' }}
        >
          {t("hero.contactBtn")}
        </Link>
      </div>

      <div style={{ marginTop: '60px', width: '2px', height: '100px', background: 'linear-gradient(to bottom, #646cff, transparent)' }}></div>
    </section>
  );
};

export default Hero;