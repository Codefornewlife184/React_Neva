/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";

const Slider = () => {
  const [showTitle, setShowTitle] = useState(true);

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
        <source src="/assets/videos/Nevaa.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
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
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        {showTitle && (
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color:'#231f20'}}>
            Neva Mobilya
          </h1>
        )}
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
         {/*  Sitenize etkileyici bir giriş yapın! */}
        </p>
        {/* <a
          href="/projects"
          style={{
            background: '#fff',
            color: '#222',
            padding: '1rem 2rem',
            borderRadius: '30px',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '1.2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}
        >
          Koleksiyonlarımız
        </a> */}
      </div>
    </section>
  );
};

export default Slider;