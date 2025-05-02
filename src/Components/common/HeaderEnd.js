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
  const [dropdownClicks, setDropdownClicks] = useState(0);
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
    setDropdownClicks(prev => prev + 1);
    if (dropdownClicks % 2 === 1) {
      setIsDropdownOpen(!isDropdownOpen);
    }
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
              <img src="assets/images/logo-beyaz.png" width="270" alt="Web Center" loading="lazy" />
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
                  {t("KOLEKSİYONLARIMIZ")}
                  <span className="dropdown-btn fa fa-angle-right"></span>
                </a>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} style={{ 
                  display: isDropdownOpen ? 'block' : 'none',
                  right: isDropdownOpen ? '0' : '-100%',
                  transition: 'right 0.3s ease-in-out'
                }}>
                  <li>
                    <a href="/milas" onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/milas');
                    }}>
                      {t("Milas")}
                    </a>
                  </li>
                  <li>
                    <a href="/e-ticaret" onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/e-ticaret');
                    }}>
                      {t("Köşe Takımları")}
                    </a>
                  </li>
                  <li>
                    <a href="/domain-hosting" onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/domain-hosting');
                    }}>
                      {t("Berjerler")}
                    </a>
                  </li>
                  <li>
                    <a href="/hosting" onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/hosting');
                    }}>
                      {t("Kanepeler")}
                    </a>
                  </li>

                </ul>
              </li>
              <li className=""><Link to="/catalog" target="_blank">Katalog<div className=""></div></Link>
								</li>
              <li><a onClick={() => handleLinkClick('/contact')}>{t("İLETİŞİM")}</a></li>
            </ul>
          </nav>

          <div className="side-menu__content">
            <p>
              <a href="mailto:neva@neva.com.tr">neva@neva.com.tr</a>
              <br />
              <a href="tel:+902242672424">0224 267 2424</a>
            </p>
            <div className="side-menu__social">
              <a href="https://www.facebook.com/neva.koltuk.5" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/nevasofa/" target="_blank" rel="noopener noreferrer">
                <span className="fab fa-instagram"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className="main-header header-style-thirteen">
            {/* Header Upper */}
            <div className="header-style-thirteen__main">
				<div className="header-style-thirteen__main__shape"></div>
				{/* Logo */}
				<div className="logo-box">
					<div className="logo">
            <Link to="/">
              <img src="assets/images/neva.webp" width="200" id="thm-logo" alt="Linoor" />
            </Link>
          </div>
				</div>
				<div className="nav-outer clearfix">
					{/* Mobile Navigation Toggler */}
					<div className="mobile-nav-toggler" onClick={toggleMenu}>
            <span className="icon flaticon-menu-2"></span>
            <span className="txt">Menu</span>
          </div>
					{/* Main Menu */}
					<nav className="main-menu navbar-expand-md navbar-light ms-auto">
						<div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
							<ul className="navigation clearfix">
              <li className="dropdown"><Link to="/">Anasayfa<div className="dropdown-btn"><span className="fa fa-angle-right"></span></div></Link></li>
								<li className="dropdown">
									<Link to="/about">Hakkımızda
                    <div className="dropdown-btn">
                      <span className="fa fa-angle-right"></span>
                    </div>
                  </Link>
								</li>
								<li className="dropdown"><Link to="/projects">Koleksiyonlarımız<div className="dropdown-btn"><span className="fa fa-angle-right"></span></div></Link>
									<ul>
										<li><Link to="/milas">Milas</Link></li>
										<li><Link to="/services-2">Köşe Takımları</Link></li>
										<li><Link to="/web-development">Berjerler</Link></li>
										<li><Link to="/graphic-designing">Kanepeler</Link></li>
									</ul>
								</li>

								<li className="dropdown"><Link to="/catalog" target="_blank">Katalog<div className="dropdown-btn"><span className="fa fa-angle-right"></span></div></Link>
								</li>
								<li className="dropdown">
									<Link to="/contact">İletişim<div className="dropdown-btn"><span className="fa fa-angle-right"></span></div></Link>
								</li>
							</ul>
						</div>
					</nav>
					<div className="header-style-thirteen__btn clearfix">
          <button 
              type="button" 
              className="language-btn" 
              onClick={() => i18n.changeLanguage('tr')}
              style={{ 
                background: '#fff', 
                border: 'none', 
                color: '#000',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                width:'40px',
                height:'40px',
                textAlign:'center',
                justifyContent:'center',
                marginRight: '10px',
                borderRadius: '50%',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 2px rgba(0,0,0,0.1)'
              }}
            >
              TR
            </button>
            <button 
              type="button" 
              className="language-btn" 
              onClick={() => i18n.changeLanguage('en')}
              style={{ 
                background: '#fff', 
                border: 'none', 
                color: '#000',
                fontSize: '14px',
                fontWeight: '600',
                width:'40px',
                height:'40px',
                textAlign:'center',
                justifyContent:'center',
                cursor: 'pointer',
                borderRadius: '50%',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 2px rgba(0,0,0,0.1)'
              }}
            >
              EN
            </button>
            <a className="header-style-thirteen__call" href="tel:+902242672424">
							<i className="flaticon-call"></i>
							<span className="header-style-thirteen__call__text">Hemen Arayın !</span>
							<span className="header-style-thirteen__call__number">0 224 267 2424</span>
						</a>
          </div>
					<Link to="/contact" className="thm-btn-thirteen">Hızlı Teklif Alın!</Link>
				</div>
			</div>
            {/* End Header Upper */}
            <div className="topbar-thirteen">
                <div className="container">
					<div className="topbar-thirteen__wrapper">
						<ul className="topbar-thirteen__info">
							<li>
                <span className="linoor-icon-three-location-pin-1"></span>
                Teyyareci Mehmet Ali Cd. No:1 Yıldırım/Bursa
              </li>
							<li>
                <span className="linoor-icon-three-email-1"></span>
                <a href="mailto:neva@neva.com.tr">neva@neva.com.tr</a>
              </li>
						</ul>
						<ul className="list-unstyled topbar-thirteen__social">
							<li><a href="https://www.facebook.com/neva.koltuk.5" target="_blank" rel="noopener noreferrer"><span className="fab fa-facebook-f"></span></a></li>
							<li><a href="https://www.instagram.com/nevasofa/" target="_blank" rel="noopener noreferrer"><span className="fab fa-instagram"></span></a></li>
						</ul>
					</div>
                </div>
            </div>
        </header>
    </>
  );
}

export default Header;

