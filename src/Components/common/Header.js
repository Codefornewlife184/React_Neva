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
		<div class="side-menu__block">

			<div class="side-menu__block-overlay custom-cursor__overlay">
				<div class="cursor"></div>
				<div class="cursor-follower"></div>
			</div>
			<div className="side-menu__block-inner">
      <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            margin: '15px 0'
          }}>
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
                width: '40px',
                height: '40px',
                textAlign: 'center',
                justifyContent: 'center',
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
                width: '40px',
                height: '40px',
                textAlign: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                borderRadius: '50%',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 2px rgba(0,0,0,0.1)'
              }}
            >
              EN
            </button>
          </div>
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
              <li><a onClick={() => handleLinkClick('/')}>{t("header.home")}</a></li>
              <li><a onClick={() => handleLinkClick('/about')}>{t("header.about")}</a></li>
              <li className="dropdown">
                <a href="/collections" onClick={handleDropdownClick} style={{ display: 'flex', alignItems: 'center' }}>
                  {t("header.collections")}
                  <span className={`dropdown-btn fa fa-angle-right${isDropdownOpen ? ' open' : ''}`} style={{ marginLeft: 8 }}></span>
                </a>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} style={{ 
                  display: isDropdownOpen ? 'block' : 'none',
                  right: isDropdownOpen ? '0' : '-100%',
                  transition: 'right 0.3s ease-in-out'
                }}>
                  <li>
                    <a href="/koltuk" onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/koltuk');
                    }}>
                      {t("header.armchairSet")}
                    </a>
                  </li>
                  <li>
                    <a href="/kose" onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/kose');
                    }}>
                      {t("header.cornerSet")}
                    </a>
                  </li>
                  <li>
                    <a href="/kanepeler" onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/kanepeler');
                    }}>
                      {t("header.sofas")}
                    </a>
                  </li>
                  <li>
                    <a href="/berjerler" onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/berjerler');
                    }}>
                      {t("header.bergere")}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="/catalog" target="_blank">{t("header.catalog")}<div className="dropdown-btn"></div></Link>
              </li>
              <li><a onClick={() => handleLinkClick('/contact')}>{t("header.contact")}</a></li>
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

		<div class="search-popup">
			<div class="search-popup__overlay custom-cursor__overlay">
				<div class="cursor"></div>
				<div class="cursor-follower"></div>
			</div>
			<div class="search-popup__inner">
				<form action="#" class="search-popup__form">
					<input type="text" name="search" placeholder={t("header.search")}/>
					<button type="submit"><i class="fa fa-search"></i></button>
				</form>
			</div>
		</div>

		<header id="banner" class="header-eleven">
			<nav class="mainmenu-eleven main-header m-0">
				<div class="auto-container">
					<div class="nav-outer mainmenu-eleven__inner">
						<div class="mainmenu-eleven__left">
							<a href="/">
								<img src="assets/images/neva.webp" width="250" alt="Neva Mobilya"/>
							</a>

							<div className="mobile-nav-toggler" onClick={toggleMenu}>
								<span className="bar"></span>
								<span className="bar"></span>
								<span className="bar"></span>
								<span className="txt">{t("header.menu")}</span>
							</div>

						</div>
						<div class="mainmenu-eleven__right">
							<nav class="main-menu navbar-expand-md navbar-light">
								<div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
									<ul class="navigation clearfix">
										<li class="dropdown">
											<Link to="/about">{t("header.about")}</Link>
										</li>
										<li class="dropdown">
                      <Link to="/collections">{t("header.collections")}</Link>
											<ul>
												<li><Link to="/koltuk">{t("header.armchairSet")}</Link></li>
												<li><Link to="/kose-takimi">{t("header.cornerSet")}</Link></li>
												<li><Link to="/kanepeler">{t("header.sofas")}</Link></li>
												<li><Link to="/berjerler">{t("header.bergere")}</Link></li>
											</ul>
										</li>
                    <li className="dropdown"><Link to="/catalog" target="_blank">{t("header.catalog")}<div className="dropdown-btn"></div></Link>
								</li>
										<li class="dropdown">
											<Link to="/contact">{t("header.contact")}</Link>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</nav>
		</header>

  <a href="https://wa.me/905326471674" className="whatsapp-button" target="_blank" rel="noopener noreferrer"
    alt="Whatsapp" aria-label="Whatsapp">
    <i className="fab fa-whatsapp"></i>
    <svg className="whatsapp-button__circle" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
    </svg>
  </a>
    </>
  );
}

export default Header;

