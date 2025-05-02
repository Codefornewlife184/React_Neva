import React from 'react';

const Catalog = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: '#222', // Arka plan koyu olsun, isterseniz değiştirebilirsiniz
      zIndex: 9999
    }}>
      <iframe
        src="assets/images/catalog/katalog.pdf"
        title="Katalog PDF"
        width="100%"
        height="100%"
        style={{
          border: 'none',
          minHeight: '100vh',
          minWidth: '100vw'
        }}
      />
      <div style={{
        position: 'absolute',
        top: 20,
        right: 30,
        zIndex: 10000
      }}>
        <a href="assets/katalog.pdf" download className="btn btn-primary">
          PDF Olarak İndir
        </a>
      </div>
    </div>
  );
};

export default Catalog;