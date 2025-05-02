/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Mobile menü açıldığında sayfa scroll'unu engelle
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClick = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
    // Mobile modda dropdown açıldığında sayfa scroll'unu engelle
    if (window.innerWidth <= 991) { // 991px ve altındaki ekranlar için
      if (!isDropdownOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Add/remove active class based on isMenuOpen state
    const sideMenuBlock = document.querySelector('.side-menu__block');
    const sideMenuOverlay = document.querySelector('.side-menu__block-overlay');
    
    if (sideMenuBlock && sideMenuOverlay) {
      if (isMenuOpen) {
        sideMenuBlock.classList.add('active');
        sideMenuOverlay.classList.add('active');
      } else {
        sideMenuBlock.classList.remove('active');
        sideMenuOverlay.classList.remove('active');
      }
    }
  }, [isMenuOpen]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleLinkClick = (path) => {
    // Önce sayfaya yönlendir
    navigate(path);
    
    // Menüyü kapat ve scroll'u aktif et
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsDropdownOpen(false);
      document.body.style.overflow = 'auto';
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className={`side-menu__block ${isMenuOpen ? 'active' : ''}`}>
        <div className={`side-menu__block-overlay custom-cursor__overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="cursor"></div>
          <div className="cursor-follower"></div>
        </div>
        <div className="side-menu__block-inner">
          <div className="side-menu__top justify-content-between">
            <Link to="/">
              <img src="assets/images/logo-mobile.webp" width="135" alt="Web Center" loading="lazy" />
            </Link>
            <button className="side-menu__toggler side-menu__close-btn" onClick={toggleMenu}>
              <img src="assets/images/icons/close-1-1.webp" alt="Close" loading="lazy" />
            </button>
          </div>

          <nav className="mobile-nav__container">
            <ul className="navigation clearfix">
              <li><a onClick={() => handleLinkClick('/')}>{t("Anasayfa")}</a></li>
              <li><a onClick={() => handleLinkClick('/about')}>{t("Hakkımızda")}</a></li>
              <li className="dropdown">
                <a href="#" onClick={handleDropdownClick}>
                  {t("HİZMETLERİMİZ")}
                  <span className="dropdown-btn fa fa-angle-right"></span>
                </a>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} style={{ display: isDropdownOpen ? 'block' : 'none' }}>
                  <li>
                    <a href="/web-design" onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/web-design');
                    }}>
                      {t("WEB TASARIM")}
                    </a>
                  </li>
                  <li>
                    <a href="/e-ticaret" onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/e-ticaret');
                    }}>
                      {t("E-TİCARET")}
                    </a>
                  </li>
                  <li>
                    <a href="/domain-hosting" onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/domain-hosting');
                    }}>
                      {t("DOMAIN & HOSTING")}
                    </a>
                  </li>
                  <li>
                    <a href="/hosting" onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/hosting');
                    }}>
                      {t("HOSTING PAKETLERİ")}
                    </a>
                  </li>
                  <li>
                    <a href="/domain-ssl" onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/domain-ssl');
                    }}>
                      {t("SSL SERTİFİKASI")} 
                    </a>
                  </li>
                  <li>
                    <a href="/kurumsal-e-posta" onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/kurumsal-e-posta');
                    }}>
                      {t("KURUMSAL E-POSTA")}
                    </a>
                  </li>
                  <li>
                    <a href="/seo-optimizasyon" onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/seo-optimizasyon');
                    }}>
                      {t("SEO")}
                    </a>
                  </li>
                  <li>
                    <a href="/logo-tasarimi" onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/logo-tasarimi');
                    }}>
                      {t("LOGO ÇALIŞMASI")}
                    </a>
                  </li>
                  <li>
                    <a href="/isletme-profili" onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/isletme-profili');
                    }}>
                      {t("İŞLETME PROFİLİ")}
                    </a>
                  </li>
                  <li>
                    <a href="/google-maps" onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/google-maps');
                    }}>
                      {t("GOOGLE MAPS")}
                    </a>
                  </li>
                </ul>
              </li>
              <li><a onClick={() => handleLinkClick('/projects')}>{t("PROJELERİMİZ")}</a></li>
              <li><a onClick={() => handleLinkClick('/contact')}>{t("İLETİŞİM")}</a></li>
            </ul>
          </nav>
          <div className="side-menu__sep"></div>
          <div className="side-menu__content">
            <p>
              <a href="mailto:info@webcenter.com.tr">info@webcenter.com.tr</a>
              <br />
              <a href="tel:905456136819">0545 613 6819</a>
            </p>
            <div className="side-menu__social">
              <a href="https://www.facebook.com/profile.php?id=61569515864445" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/webcenter.office/" target="_blank" rel="noopener noreferrer">
                <span className="fab fa-instagram"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className="main-header header-style-twelev">
        <div className="topbar-twelev">
          <div className="container">
            <div className="topbar-twelev__wrapper">
              <ul className="topbar-twelev__info">
                <li>
                  <span className="linoor-icon-three-email-1 justify-content-center"></span>
                  <a href="mailto:info@webcenter.com.tr">info@webcenter.com.tr</a>
                </li>
              </ul>
              <ul className="list-unstyled topbar-twelev__social">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61569515864445" target="_blank" rel="noopener noreferrer">
                    <span className="fab fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/webcenter.office/" target="_blank" rel="noopener noreferrer">
                    <span className="fab fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header-style-twelev__main">
          <div className="logo-box">
            <div className="logo">
              <a onClick={() => handleLinkClick('/')}>
                <img src="assets/images/logo.webp" width="135" alt="Web Center" loading="lazy" />
              </a>
            </div>
          </div>
          <div className="nav-outer clearfix">
            <div className="mobile-nav-toggler" onClick={toggleMenu}>
              <span className="icon flaticon-menu-2"></span>
              <span className="txt">{t("Menu")}</span>
            </div>
            <nav className="main-menu navbar-expand-md navbar-light ms-auto">
              <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''} clearfix`} id="navbarSupportedContent">
                <ul className="navigation clearfix">
                  <li><a onClick={() => handleLinkClick('/')}>{t("Anasayfa")}</a></li>
                  <li><a onClick={() => handleLinkClick('/about')}>{t("Hakkımızda")}</a></li>
                  <li className="dropdown">
                    <a href="#" onClick={handleDropdownClick}>
                      {t("HİZMETLERİMİZ")}
                      <span className="dropdown-btn fa fa-angle-right"></span>
                    </a>
                    <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} style={{ display: isDropdownOpen ? 'block' : 'none' }}>
                      <li>
                        <a href="/web-design" onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('/web-design');
                        }}>
                          {t("WEB TASARIM")}
                        </a>
                      </li>
                      <li>
                        <a href="/e-ticaret" onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('/e-ticaret');
                        }}>
                          {t("E-TİCARET")}
                        </a>
                      </li>
                      <li>
                        <a href="/domain-hosting" onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('/domain-hosting');
                        }}>
                          {t("DOMAIN & HOSTING")}
                        </a>
                      </li>
                      <li>
                        <a href="/hosting" onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('/hosting');
                        }}>
                          {t("HOSTING PAKETLERİ")}
                        </a>
                      </li>
                      <li>
                        <a href="/domain-ssl" onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('/domain-ssl');
                        }}>
                          {t("SSL SERTİFİKASI")}
                        </a>
                      </li>
                      <li>
                        <a href="/kurumsal-e-posta" onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('/kurumsal-e-posta');
                        }}>
                          {t("KURUMSAL E-POSTA")}
                        </a>
                      </li>
                      <li>
                        <a href="/seo-optimizasyon" onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('/seo-optimizasyon');
                        }}>
                          {t("SEO")}
                        </a>
                      </li>
                      <li>
                        <a href="/logo-tasarimi" onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('/logo-tasarimi');
                        }}>
                          {t("LOGO ÇALIŞMASI")}
                        </a>
                      </li>
                      <li>
                        <a href="/isletme-profili" onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('/isletme-profili');
                        }}>
                          {t("İŞLETME PROFİLİ")}
                        </a>
                      </li>
                      <li>
                        <a href="/google-maps" onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('/google-maps');
                        }}>
                          {t("GOOGLE MAPS")}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li><a onClick={() => handleLinkClick('/projects')}>{t("PROJELERİMİZ")}</a></li>
                  <li><a onClick={() => handleLinkClick('/contact')}>{t("İLETİŞİM")}</a></li>
                </ul>
              </div>
            </nav>
            <div className="header-style-twelev__btn clearfix">
              <button onClick={() => changeLanguage('tr')} className="cart-toggler">
                <span>{t("TR")}</span>
              </button>
              <button onClick={() => changeLanguage('en')} className="cart-toggler">
                <span>{t("EN")}</span>
              </button>
              <a className="header-style-twelev__call" href="tel:+905456136819">
                <i className="flaticon-call"></i>
              </a>
            </div>
            <a href="https://wa.me/905456136819" className="thm-btn-twelev" target="_blank" rel="noopener noreferrer">
              {t("HIZLI TEKLİF ALIN!")}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

