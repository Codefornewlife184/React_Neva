import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Milas() {
  const { t } = useTranslation();
  const [mainImage, setMainImage] = useState('assets/images/products/kısa.png');
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = [
    { type: 'image', src: 'assets/images/products/kısa.png' },
    { type: 'image', src: 'assets/images/products/kısa-2.png' },
    { type: 'image', src: 'assets/images/products/kısa-3.webp' },
    /* { type: 'video', src: 'assets/videos/product-video.mp4', thumbnail: 'assets/images/products/video-thumbnail.jpg' }, */
    { type: 'image', src: 'assets/images/products/kısa-4.webp' },
    { type: 'image', src: 'assets/images/products/kısa-5.webp' }
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
                {productImages[currentImageIndex].type === 'video' ? (
                  <div style={{ position: 'relative' }}>
                    <img 
                      src={productImages[currentImageIndex].thumbnail} 
                      alt="Video thumbnail" 
                      style={{ 
                        width: '100%',
                        height: 'auto',
                        cursor: 'pointer'
                      }}
                      onClick={() => openModal(currentImageIndex)}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: 'rgba(0,0,0,0.5)',
                      borderRadius: '50%',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                    onClick={() => openModal(currentImageIndex)}>
                      <span style={{ color: 'white', fontSize: '30px' }}>▶</span>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={productImages[currentImageIndex].src} 
                    alt="Milas Koleksiyonu" 
                    style={{ 
                      width: '100%',
                      height: 'auto',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease'
                    }}
                    onClick={() => openModal(currentImageIndex)}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  />
                )}
              </div>
              <div className="product-thumbnails" style={{ 
                display: 'flex', 
                gap: '10px', 
                marginTop: '20px',
                overflowX: 'auto',
                padding: '10px 0'
              }}>
                {productImages.map((item, index) => (
                  <div key={index} style={{ position: 'relative' }}>
                    <img
                      src={item.type === 'video' ? item.thumbnail : item.src}
                      alt={`Milas Koleksiyonu ${index + 1}`}
                      style={{
                        width: '80px',
                        height: '80px',
                        objectFit: 'cover',
                        cursor: 'pointer',
                        border: currentImageIndex === index ? '2px solid #10adad' : 'none',
                        opacity: currentImageIndex === index ? 1 : 0.7,
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setMainImage(item.type === 'video' ? item.thumbnail : item.src);
                      }}
                      onMouseOver={(e) => e.target.style.opacity = 1}
                      onMouseOut={(e) => e.target.style.opacity = currentImageIndex === index ? 1 : 0.7}
                    />
                    {item.type === 'video' && (
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        fontSize: '20px',
                        textShadow: '0 0 5px rgba(0,0,0,0.5)'
                      }}>
                        ▶
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="product-details__top">
                <h3 className="product-details__title">
                  Milas Koleksiyonu
                </h3>
                <p className="product-details__price">Özel Fiyat</p>
              </div>
              <div className="product-details__content">
                <p>
                  Milas koleksiyonu, modern tasarım anlayışıyla üretilen, konfor ve şıklığı bir arada sunan özel bir seridir. 
                  Yüksek kaliteli malzemeler ve özenli işçilikle üretilen bu koleksiyon, evinize zarafet katacak.
                </p>
                <p>
                  REF: MIL-2024 <br />
                  Stokta Mevcut
                </p>
              </div>
              <div className="product-details__buttons">
                <a className="theme-btn btn-style-one" href="/contact">
                  <i className="btn-curve"></i>
                  <span className="btn-title">{t("İletişime Geçin")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-description">
        <div className="auto-container">
          <h3 className="product-description__title">{t("Detaylar")}</h3>
          <p className="product-description__text">
            Milas koleksiyonu, modern yaşam alanlarınıza uyum sağlayan, şık ve konforlu tasarımlarıyla öne çıkar. 
            Yüksek kaliteli kumaşlar ve dayanıklı malzemeler kullanılarak üretilen bu seri, uzun yıllar boyunca 
            kullanım sağlar. Ergonomik tasarımı sayesinde maksimum konfor sunar.
          </p>
          <p className="product-description__text">
            Özel tasarım detayları ve modern çizgileriyle dikkat çeken Milas koleksiyonu, evinizin her köşesine 
            zarafet katacak. Geniş renk ve kumaş seçenekleriyle kişisel zevkinize uygun kombinasyonlar oluşturabilirsiniz.
          </p>
        </div>
      </section>

      {showModal && (
        <div 
          style={{
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
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowModal(false);
            }
          }}
        >
          <div style={{ 
            position: 'relative', 
            maxWidth: '90%', 
            maxHeight: '90%',
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(prev => (prev > 0 ? prev - 1 : productImages.length - 1));
              }}
              style={{
                background: 'rgba(255,255,255,0.9)',
                border: 'none',
                color: '#333',
                padding: '15px 20px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.9)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              ←
            </button>

            {productImages[currentImageIndex].type === 'video' ? (
              <video
                controls
                autoPlay
                style={{
                  maxWidth: '100%',
                  maxHeight: '90vh',
                  objectFit: 'contain'
                }}
              >
                <source src={productImages[currentImageIndex].src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img 
                src={productImages[currentImageIndex].src} 
                alt="Büyük görüntü" 
                style={{
                  maxWidth: '100%',
                  maxHeight: '90vh',
                  objectFit: 'contain'
                }}
              />
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(prev => (prev < productImages.length - 1 ? prev + 1 : 0));
              }}
              style={{
                background: 'rgba(255,255,255,0.9)',
                border: 'none',
                color: '#333',
                padding: '15px 20px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.9)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Milas;