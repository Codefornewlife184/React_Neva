import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaSearch, FaMobileAlt, FaChartLine } from 'react-icons/fa';

const SEO = () => {
  const { t } = useTranslation();

  return (
    <div className="seo-container">
      <div className="seo-content">
        <h1>{t("SEO OPTİMİZASYONU")}</h1>
        <h2>{t("Web Center: SEO OPTİMİZASYONU")}</h2>
        <p>{t("Dijital dünyada görünür olmak artık her işletme için hayati öneme sahip.")}</p>
        <p>{t("olarak, web sitenizin arama motorlarında üst sıralarda yer almasını sağlamak için kapsamlı SEO hizmetleri sunuyoruz. Hizmetlerimiz arasında:")}</p>
        
        <div className="seo-features">
          <div className="seo-feature">
            <FaSearch className="feature-icon" />
            <h3>{t("Anahtar Kelime Analizi")}</h3>
            <p>{t("Hedef kitlenizin arama alışkanlıklarına uygun stratejik anahtar kelimeler belirliyoruz.")}</p>
          </div>
          
          <div className="seo-feature">
            <FaMobileAlt className="feature-icon" />
            <h3>{t("İçerik Optimizasyonu")}</h3>
            <p>{t("Web sitenizdeki metinleri, görselleri ve videoları arama motorlarına uyumlu hale getiriyoruz.")}</p>
          </div>
          
          <div className="seo-feature">
            <FaChartLine className="feature-icon" />
            <h3>{t("Teknik SEO")}</h3>
            <p>{t("Sayfa hızını artırıyor, mobil uyumluluğunuzu geliştiriyor ve web sitenizin teknik performansını optimize ediyoruz.")}</p>
          </div>
        </div>
        
        <p className="seo-goal">{t("Amacımız, işletmenizin dijital dünyada daha fazla trafik almasını ve müşteri kitlenizi büyütmesini sağlamaktır.")}</p>
        
        <Link to="/contact" className="seo-cta">
          {t("HIZLI TEKLİF ALIN!")}
        </Link>
      </div>
    </div>
  );
};

export default SEO; 