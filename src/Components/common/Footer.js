/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

const Footer = () => {
const { t, i18n } = useTranslation();
const [isMenuOpen, setIsMenuOpen] = useState(false);
const navigate = useNavigate();

const toggleMenu = () => {
setIsMenuOpen(!isMenuOpen);
// Toggle body scroll
document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
};

const changeLanguage = (lng) => {
i18n.changeLanguage(lng);
};

const handleLinkClick = (path) => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
navigate(path);
if (isMenuOpen) {
toggleMenu();
}
};
const phoneNumber = "905465341963"; // Hedef telefon numarası

const openWhatsApp = () => {
const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
t("Merhaba, size bir mesaj gönderiyorum!")
)}`;
window.open(whatsappURL, "_blank");
};

const images = [
{
small: "assets/images/footer/1.png",
big: "assets/images/1.png",
},
{
small: "assets/images/footer/2.png",
big: "assets/images/2.png",
},
{
small: "assets/images/footer/3.png",
big: "assets/images/3.png",
},
{
small: "assets/images/footer/4.png",
big: "assets/images/4.png",
},
{
small: "assets/images/footer/5.png",
big: "assets/images/5.png",
},
{
small: "assets/images/footer/6.png",
big: "assets/images/6.png",
},
];

return (
<>
  <section className="footer-twelev mt-1">
    <div className="footer-twelev__bg" style={{ backgroundImage: "url(assets/images/products/uzun-3.webp)" }}></div>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="footer-twelev__widget text-white">
            <div className="logo-box">
              <div className="logo">
                <Link to="/">
                <img src="assets/images/logo-beyaz.png" width="270" alt="Web Center" loading="lazy" />
                </Link>
              </div>
            </div>
            <p className="footer-twelev__text">
              {t("Ustalarımızın becerileri ile tasarımlar şekillenip soyut fikirlerden somut bir gerçekliğe dönüştürülürken çağdaş ve modern çizgilerde mükemmellik anlayışını NEVA Mobilya'da sizlere sunmaya çalışıyoruz…")}
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-md-6">
          <div className="footer-twelev__widget text-white">
            <h6 className="footer-twelev__title" style={{ color: "#10adad", borderBottom: '1px solid #fff', paddingBottom: '10px', marginBottom: '15px' }}>
              {t("Kurumsal")}
            </h6>
            <ul>
              <li>
                <Link to="/" onClick={()=> handleLinkClick('/')}>{t("Anasayfa")}</Link>
              </li>
              <li>
                <Link to="/about" onClick={()=> handleLinkClick('/about')}>{t("Hakkımızda")}</Link>
              </li>
              <li>
                <Link to="/projects" onClick={()=> handleLinkClick('/projects')}>{t("Koleksiyonlarımız")}</Link>
              </li>
              <li>
                <Link to="/contact" onClick={()=> handleLinkClick('/contact')}>{t("İletişim")}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-twelev__widget text-white">
            <h6 className="footer-twelev__title" style={{ color: "#10adad", borderBottom: '1px solid #fff', paddingBottom: '10px', marginBottom: '15px' }}>
              {t("KOLEKSİYONLARIMIZ")}
            </h6>
            <ul>
              <li>
                <Link to="/milas" onClick={()=> handleLinkClick('/milas')}>{t("Koltuk Takımı")}</Link>
              </li>
              <li>
                <Link to="/milas" onClick={()=> handleLinkClick('/milas')}>{t("Köşe Takımları")}</Link>
              </li>
              <li>
                <Link to="/milas" onClick={()=> handleLinkClick('/milas')}>{t("Berjerler")}
                </Link>
              </li>
              <li>
                <Link to="/milas" onClick={()=> handleLinkClick('/milas')}>{t("Kanepeler")}</Link>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-twelev__widget text-white">
            <h6 className="footer-twelev__title" style={{ color: "#10adad", borderBottom: '1px solid #fff', paddingBottom: '10px', marginBottom: '15px' }}>
              {t("İLETİŞİM")}
            </h6>
            <div className="footer-twelev__info">
              <p className="footer-twelev__text">{t("Davutkadı, Teyyareci Mehmet Ali Cd. No:1 Yıldırım/Bursa")}</p>
              <ul>
                <li>
                  <span className="linoor-icon-three-telephone-1"></span>
                  <a href="tel:+902242672424">(0224) 267-2424</a>
                </li>
                <li>
                  <span className="linoor-icon-three-email-1"></span>
                  <a href="mailto:neva@neva.com.tr">neva@neva.com.tr</a>
                </li>
              </ul>
              <div className="footer-twelev__social">
                <a href="https://www.facebook.com/neva.koltuk.5" target="_blank"
                  rel="noopener noreferrer">
                  <span className="fab fa-facebook-f"></span>
                </a>
                <a href="https://www.instagram.com/nevasofa/" target="_blank" rel="noopener noreferrer">
                  <span className="fab fa-instagram"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    <div className="footer-twelev__copyright">{t("© 2025 NEVA MOBİLYA")} <br /> {t("Tüm Hakları Saklıdır.")} <br />
      <a
        href="https://www.webcenter.com.tr" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease' }}
        onMouseOver={(e) => e.target.style.color = '#10adad'}
        onMouseOut={(e) => e.target.style.color = '#fff'}>
        Web Dizayn : Web Center
      </a>
    </div>
  </section>

  <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
    <i className="fa fa-angle-up"></i>
    <svg className="whatsapp-button__circle" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
    </svg>
  </a>
  <a href="https://wa.me/905456136819" className="whatsapp-button" target="_blank" rel="noopener noreferrer"
    alt="Whatsapp" aria-label="Whatsapp">
    <i className="fab fa-whatsapp"></i>
    <svg className="whatsapp-button__circle" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
    </svg>
  </a>
</>
);
};

export default Footer;