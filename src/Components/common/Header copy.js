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

      <header className="main-header header-style-thirteen">
            {/* Header Upper */}
            <div className="header-style-thirteen__main">
				<div className="header-style-thirteen__main__shape"></div>
				{/* Logo */}
				<div className="logo-box">
					<div className="logo">
            <Link to="/">
              <img src="images/update-15-08-2024/logo.png" width="135" id="thm-logo" alt="Linoor" />
            </Link>
          </div>
				</div>
				<div className="nav-outer clearfix">
					{/* Mobile Navigation Toggler */}
					<div className="mobile-nav-toggler">
            <span className="icon flaticon-menu-2"></span>
            <span className="txt">Menu</span>
          </div>
					{/* Main Menu */}
					<nav className="main-menu navbar-expand-md navbar-light">
						<div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
							<ul className="navigation clearfix">
								<li className="dropdown">
									<Link to="/about">About Us
                    <div className="dropdown-btn">
                      <span className="fa fa-angle-right"></span>
                    </div>
                  </Link>
									<ul>
										<li><Link to="/about-2">About Two</Link></li>
										<li><Link to="/about-me">About Me</Link></li>
										<li><Link to="/mission">Our Mission</Link></li>
										<li><Link to="/history">Our History</Link></li>
										<li className="dropdown">
											<Link to="/team">Our Team 
                        <div className="dropdown-btn">
                          <span className="fa fa-angle-right"></span>
                        </div>
                      </Link>
											<ul>
												<li><Link to="/team">Team 01</Link></li>
												<li><Link to="/team-2">Team 02</Link></li>
												<li><Link to="/team-3">Team 03</Link></li>
											</ul>
										</li>
										<li><Link to="/process">Our Process</Link></li>
										<li><Link to="/partners">Our Partner</Link></li>
									</ul>
								</li>
								<li className="dropdown"><Link to="/pages">Pages<div className="dropdown-btn"><span className="fa fa-angle-right"></span></div></Link>
									<ul>
										<li><Link to="/pricing">Our Pricing</Link></li>
										<li><Link to="/pricing-2">Pricing 02</Link></li>
										<li><Link to="/how-it-works">How it Works</Link></li>
										<li><Link to="/coming-soon">Coming Soon</Link></li>
										<li><Link to="/testimonials">Testimonials</Link></li>
										<li><Link to="/testimonials-2">Testimonials Two</Link></li>
										<li><Link to="/faqs">FAQs</Link></li>
										<li><Link to="/events">Events</Link></li>
										<li><Link to="/event-details">Event Details</Link></li>
										<li><Link to="/clients">Clients Page</Link></li>
										<li><Link to="/not-found">404 Page</Link></li>
										<li><Link to="/login">Login Page</Link></li>
										<li><Link to="/register">Register Page</Link></li>
										<li><Link to="/forgot-password">Forget Page</Link></li>
										<li><Link to="/under-construction">Under Construction</Link></li>
									</ul>
								</li>
								<li className="dropdown"><Link to="/services">Services<div className="dropdown-btn"><span className="fa fa-angle-right"></span></div></Link>
									<ul>
										<li><Link to="/services">All Services</Link></li>
										<li><Link to="/services-2">Services Two</Link></li>
										<li><Link to="/web-development">Website Development</Link></li>
										<li><Link to="/graphic-designing">Graphic Designing</Link></li>
										<li><Link to="/digital-marketing">Digital Marketing</Link></li>
										<li><Link to="/seo">SEO &amp; Content Writting</Link></li>
										<li><Link to="/app-development">App Development</Link></li>
										<li><Link to="/ui-designing">UI/UX Designing</Link></li>
									</ul>
								</li>
								<li className="dropdown"><Link to="/portfolio">Portfolio<div className="dropdown-btn"><span className="fa fa-angle-right"></span></div></Link>
									<ul>
										<li><Link to="/portfolio">Portfolio</Link></li>
										<li><Link to="/portfolio-2-columns">Portfolio 2 Col <span>new</span></Link></li>
										<li><Link to="/portfolio-4-columns">Portfolio 4 Col <span>new</span></Link></li>
										<li><Link to="/portfolio-masonary">Portfolio Masonary
												<span>new</span></Link></li>
										<li><Link to="/portfolio-single">Portfolio Single 01</Link></li>
										<li><Link to="/portfolio-single-2">Portfolio Single 02</Link></li>
										<li><Link to="/portfolio-single-3">Portfolio Single 03
											</Link></li>
									</ul>
								</li>
								<li className="dropdown"><Link to="/shop">Shop<div className="dropdown-btn"><span className="fa fa-angle-right"></span></div></Link>
									<ul>
										<li><Link to="/shop">Shop Page</Link></li>
										<li><Link to="/product-details">Product Details</Link></li>
										<li><Link to="/cart">Cart Page</Link></li>
										<li><Link to="/checkout">Checkout Page</Link></li>
									</ul>
								</li>
								<li className="dropdown"><Link to="/blog">Blog<div className="dropdown-btn"><span className="fa fa-angle-right"></span></div></Link>
									<ul>
										<li><Link to="/blog">Blog Right Sidebar</Link></li>
										<li><Link to="/blog-left">Blog Left Sidebar <span>new</span></Link></li>
										<li><Link to="/blog-grid">Blog Grid View</Link></li>
										<li><Link to="/blog-single">Blog Single</Link></li>
									</ul>
								</li>
								<li className="dropdown">
									<Link to="/contact">Contact<div className="dropdown-btn"><span className="fa fa-angle-right"></span></div></Link>
									<ul>
										<li><Link to="/contact">Contact 01</Link></li>
										<li><Link to="/contact-2">Contact 02 <span>New</span></Link></li>
									</ul>
								</li>
							</ul>
						</div>
					</nav>
					<div className="header-style-thirteen__btn clearfix">
            <button type="button" className="search-toggler">
              <span className="flaticon-loupe"></span>
            </button>
            <Link to="/cart" className="cart-toggler">
              <span className="flaticon-shopping-cart"></span>
            </Link>
            <a className="header-style-thirteen__call" href="tel:+9238008060">
							<i className="flaticon-call"></i>
							<span className="header-style-thirteen__call__text">Emergency call</span>
							<span className="header-style-thirteen__call__number">+92 3800 8060</span>
						</a>
          </div>
					<Link to="/contact" className="thm-btn-thirteen">Get a Quote</Link>
				</div>
			</div>
            {/* End Header Upper */}
            <div className="topbar-thirteen">
                <div className="container">
					<div className="topbar-thirteen__wrapper">
						<ul className="topbar-thirteen__info">
							<li>
                <span className="linoor-icon-three-location-pin-1"></span>
                30 Commercial Road Fratton, Australia
              </li>
							<li>
                <span className="linoor-icon-three-email-1"></span>
                <a href="mailto:needhelp@company.com">needhelp@company.com</a>
              </li>
						</ul>
						<ul className="list-unstyled topbar-thirteen__social">
							<li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
							<li><a href="#"><span className="fab fa-twitter"></span></a></li>
							<li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
							<li><a href="#"><span className="fab fa-instagram"></span></a></li>
						</ul>
					</div>
                </div>
            </div>
        </header>
    </>
  );
}

export default Header;

