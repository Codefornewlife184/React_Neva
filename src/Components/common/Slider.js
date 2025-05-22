/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

// Custom hook for detecting screen size
const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const Slider = () => {
  const [showTitle, setShowTitle] = useState(true);
  const isMobile = useScreenSize();
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(false), 4000); // 3 saniye sonra kaybolur
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      overflowX: 'hidden'
    }}>
      {/* Video arka plan */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          left: 0,
          top: 0,
          zIndex: 1
        }}
      >
        <source 
          src={isMobile ? "/assets/videos/Neva-Mobile.mp4" : "/assets/videos/Neva.mp4"} 
          type="video/mp4" 
        />
        {t("slider.videoNotSupported")}
      </video>

      {/* Overlay (isteğe bağlı koyu katman) */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        zIndex: 2
      }} />

      {/* İçerik */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        color: '#fff',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        textAlign: 'center',
        paddingBottom: '10vh'
      }}>
        {showTitle && (
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color:'#231f20'}}>
            {/* {t("slider.title")} */}
          </h1>
        )}
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          {/* {t("slider.subtitle")} */}
        </p>
        
        <Link
          to="/collections"
          style={{
            background: 'rgba(35, 31, 32, 0.9)',
            color: '#fff',
            padding: '1rem 2rem',
            borderRadius: '5px 70px 5px 70px',
            fontWeight: '600',
            textDecoration: 'none',
            fontSize: '1.1rem',
            boxShadow: '0 10px 30px rgba(35, 31, 32, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 15px 35px rgba(35, 31, 32, 0.3)',
              background: 'rgba(35, 31, 32, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              '&::before': {
                transform: 'translateX(0)',
                opacity: 1
              }
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
              transform: 'translateX(-100%)',
              transition: 'all 0.4s ease',
              opacity: 0
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-5px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              height: '10px',
              background: 'rgba(35, 31, 32, 0.7)',
              borderRadius: '50%',
              filter: 'blur(5px)',
              transition: 'all 0.4s ease'
            }
          }}
        >
          <span style={{ position: 'relative', zIndex: 1 }}>{t("slider.collections")}</span>
          
        </Link>
        
        {/* Animasyonlu Aşağı Ok 
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          cursor: 'pointer'
        }}>
          <i className="fas fa-chevron-up" style={{
            color: '#231f20',
            fontSize: '2rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}></i>
        </div>*/}

        <style>
          {`
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% {
                transform: translateY(0) translateX(-50%);
              }
              40% {
                transform: translateY(-20px) translateX(-50%);
              }
              60% {
                transform: translateY(-10px) translateX(-50%);
              }
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default Slider;