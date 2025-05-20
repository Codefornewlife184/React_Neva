import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function PageHeader({ title, subtitle, backgroundImage, children }) {
  const { t } = useTranslation();

  return (
    <section 
      className="page-header" 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px 0',
        position: 'relative',
        color: '#fff',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        textTransform: 'uppercase'
      }}
    >
      <div className="auto-container" style={{ width: '100%' }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header__content" style={{ textAlign: 'center' }}>
              <div className="inner-container" style={{ 
                marginBottom: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <h1 style={{ 
                  color: '#fff',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  marginBottom: '15px',
                  fontSize: 'clamp(24px, 5vw, 48px)',
                  fontWeight: '600'
                }}>
                  {title}
                </h1>
                <div className="page-nav" style={{ marginTop: '10px' }}>
                  <ul className="bread-crumb" style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    fontSize: '16px'
                  }}>
                    <li style={{ color: '#fff' }}>
                      <Link to="/" style={{ 
                        color: '#fff',
                        textDecoration: 'none',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                      }}>
                        Anasayfa
                      </Link>
                    </li>
                    <li style={{ color: '#fff' }}>›</li>
                    <li style={{ color: '#fff' }}>Koleksiyonlarımız</li>
                  </ul>
                </div>
              </div>
              {subtitle && (
                <p style={{
                  color: '#fff',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  marginBottom: '0'
                }}>
                  {subtitle}
                </p>
              )}
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHeader; 