import React from 'react';
import { useTranslation } from 'react-i18next';

const Catalog = () => {
  const { t } = useTranslation();

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
        top: 10,
        right: 30,
        zIndex: 10000
      }}>
        <a href="assets/images/catalog/katalog.pdf" download className="btn btn-dark">
          {t("catalog.download")}
        </a>
      </div>
    </div>
  );
};

export default Catalog;