import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function OdessaKanepe() {
  const { t } = useTranslation();
  const [mainImage, setMainImage] = useState('assets/images/products/kanepe/odessa-kanepe-1.webp');
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = [
    'assets/images/products/kanepe/odessa-kanepe-1.webp',
    'assets/images/products/kanepe/odessa-kanepe-2.webp'
  ];

  const handleKeyDown = (e) => {
    if (showModal) {
      if (e.key === 'ArrowLeft') {
        setCurrentImageIndex(prev => (prev > 0 ? prev - 1 : productImages.length - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex(prev => (prev < productImages.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'Escape') {
        setShowModal(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  return (
    <>
      <section className="product-details">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 col-xl-6">
              <div className="product-details__image">
                <img src={mainImage} alt={t("odessaKanepe.title")} style={{ 
                  width: '100%',
                  height: 'auto',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }} onClick={() => openModal(productImages.indexOf(mainImage))}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div className="product-thumbnails" style={{ 
                display: 'flex', 
                gap: '10px', 
                marginTop: '20px',
                overflowX: 'auto',
                padding: '10px 0'
              }}>
                {productImages.map((image, index) => (
                  <img key={index} src={image} alt={`${t("odessaKanepe.title")} ${index + 1}`} style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    border: mainImage === image ? '2px solid #575253' : 'none',
                    opacity: mainImage === image ? 1 : 0.7,
                    transition: 'all 0.3s ease'
                  }} onClick={() => {
                    setMainImage(image);
                    openModal(index);
                  }}
                  onMouseOver={(e) => e.target.style.opacity = 1}
                  onMouseOut={(e) => e.target.style.opacity = mainImage === image ? 1 : 0.7}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="product-details__top">
                <h3 className="product-details__title">
                  {t("odessaKanepe.title")}
                </h3>
                <p className="product-details__price">{t("odessaKanepe.price")}</p>
              </div>
              <div className="product-details__content">
                <p>
                  <strong style={{color:'#000'}}>{t("odessaKanepe.intro")}</strong>
                  <br />{t("odessaKanepe.description")}</p>
                <p className="product-description__text">
                  {t("odessaKanepe.features.text")}
                </p>
                <p>
                  → {t("odessaKanepe.features.list.design")}
                  <br />
                  → {t("odessaKanepe.features.list.comfort")}
                  <br />
                  → {t("odessaKanepe.features.list.fabric")}
                  <br />
                  → {t("odessaKanepe.features.list.accessories")}
                  <br />
                  → {t("odessaKanepe.features.list.structure")}
                  <br />
                  <strong style={{color:'#000'}}>{t("odessaKanepe.conclusion")}</strong>
                </p>
              </div>
              <div className="product-details__buttons">
                <a className="theme-btn btn-style-one" href="/contact">
                  <i className="btn-curve"></i>
                  <span className="btn-title">{t("odessaKanepe.contact")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        (() => {
          const isMobile = window.innerWidth <= 600;
          return (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.9)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999,
              cursor: 'pointer'
            }} onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowModal(false);
              }
            }}>
              <div style={{
                position: 'relative',
                maxWidth: isMobile ? '95vw' : '90%',
                maxHeight: isMobile ? '80vh' : '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <button onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(prev => (prev > 0 ? prev - 1 : productImages.length - 1));
                }}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  background: 'rgba(255,255,255,0.8)',
                  border: 'none',
                  color: '#333',
                  padding: '10px 16px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '22px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                }}>←</button>

                <img src={process.env.PUBLIC_URL + '/' + productImages[currentImageIndex]} alt={t("odessaKanepe.title")} style={{
                  maxWidth: '100%',
                  maxHeight: isMobile ? '80vh' : '90vh',
                  objectFit: 'contain',
                  display: 'block'
                }} />

                <button onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(prev => (prev < productImages.length - 1 ? prev + 1 : 0));
                }} style={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  background: 'rgba(255,255,255,0.8)',
                  border: 'none',
                  color: '#333',
                  padding: '10px 16px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '22px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                }}>→</button>
              </div>
            </div>
          );
        })()
      )}
    </>
  );
}

export default OdessaKanepe;