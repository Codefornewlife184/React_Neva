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
        padding: '150px 0 60px 0',
        position: 'relative',
        color: '#231f20',
        minHeight: '250px',
        display: 'flex',
        alignItems: 'center',
        '@media (max-width: 768px)': {
          minHeight: '200px',
          padding: '40px 0'
        },
        '@media (max-width: 480px)': {
          minHeight: '250px',
          padding: '0px 0'
        },
        '@media (max-width: 320px)': {
          minHeight: '200px',
          padding: '20px 0'
        }
      }}
    >
      <div className="auto-container" style={{ width: '100%' }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header__content" style={{ 
              textAlign: 'center',
              '@media (max-width: 768px)': {
                padding: '0 15px',
              }
            }}>
              <div className="inner-container" style={{ 
                marginBottom: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '@media (max-width: 768px)': {
                  marginBottom: '20px'
                }
              }}>
                <h1 style={{ 
                  color: '#fff',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  marginBottom: '15px',
                  fontSize: 'clamp(24px, 5vw, 48px)',
                  fontWeight: '600',
                  '@media (max-width: 768px)': {
                    fontSize: 'clamp(20px, 4vw, 36px)',
                    marginBottom: '10px'
                  }
                }}>
                  {title}
                </h1>
                <div className="page-nav" style={{ 
                  marginTop: '10px',
                  '@media (max-width: 768px)': {
                    marginTop: '5px'
                  }
                }}>
                  <ul className="bread-crumb" style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    fontSize: '16px',
                    '@media (max-width: 768px)': {
                      fontSize: '14px',
                      gap: '8px'
                    }
                  }}>
                    <li style={{ color: '#fff' }}>
                      <Link to="/" style={{ 
                        color: '#fff',
                        textDecoration: 'none',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                      }}>
                        {t("pageHeader.home")}
                      </Link>
                    </li>
                    <li style={{ color: '#fff' }}>›</li>
                    <li style={{ color: '#fff' }}>
                      <Link to="/collections" style={{ 
                        color: '#fff',
                        textDecoration: 'none',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                      }}>
                        {t("pageHeader.collections")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {subtitle && (
                <p style={{
                  color: '#fff',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  marginBottom: '0',
                  '@media (max-width: 768px)': {
                    fontSize: 'clamp(14px, 1.8vw, 18px)'
                  }
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