/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { useTranslation } from 'react-i18next'

function Hosting() {
  const { t } = useTranslation();

  return (
    <>
      <section id="pricing" className="pricing mb-5">
        <div className="container" data-aos="fade-up">
          <div className="row mt-5">
            <div className="col-lg-3 col-md-6">
              <div className="box" data-aos="fade-up" data-aos-delay="100">
                <span className="advanced" style={{ color: '#10adad' }}>{t("En Uygun")}</span>
                <h3>{t("Başlangıç")}</h3>
                <h4><sup>$</sup>15<span> / yıllık</span></h4>
                <ul>
                  <li>{t("1 Site")} {t("Site Barındırma")}</li>
                  <li>{t("10 GB")} {t("Disk Alanı")}</li>
                  <li>{t("50 GB")} {t("Trafik")}</li>
                  <li>{t("10 Adet")} {t("E-Posta")}</li>
                  <li>{t("1 Core")} {t("CPU")}</li>
                  <li>{t("512 MB")} {t("Ram")}</li>
                  <li>{t("cPanel")}</li>
                  <li>{t("Litespeed")}</li>
                  <li>{t("Litespeed Cache")}</li>
                  <li className="na">{t("Ücretsiz .com.tr Domain")}</li>
                  <li className="na">{t("Ücretsiz SSL")}</li>
                </ul>
                <div className="btn-wrap">
                  <a href="https://wa.me/905456136819" className="btn-buy" target="_blank" rel="noopener noreferrer">
                    <i className="btn-curve"></i>
                    <span className="btn-title">{t("HIZLI TEKLİF ALIN !")}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
              <div className="box featured" data-aos="fade-up" data-aos-delay="200">
                <h3>{t("Uzman")}</h3>
                <h4><sup>$</sup>39<span> / yıllık</span></h4>
                <ul>
                  <li>{t("3 Site")} {t("Site Barındırma")}</li>
                  <li>{t("10 GB")} {t("Disk Alanı")}</li>
                  <li>{t("SINIRSIZ")} {t("Trafik")}</li>
                  <li>{t("30 Adet")} {t("E-Posta")}</li>
                  <li>{t("1 Core")} {t("CPU")}</li>
                  <li>{t("1024 MB")} {t("Ram")}</li>
                  <li>{t("cPanel")}</li>
                  <li>{t("Litespeed")}</li>
                  <li>{t("Litespeed Cache")}</li>
                  <li>{t("Ücretsiz .com.tr Domain")}</li>
                  <li className="na">{t("Ücretsiz SSL")}</li>
                </ul>
                <div className="btn-wrap">
                  <a href="https://wa.me/905456136819" className="btn-buy" target="_blank" rel="noopener noreferrer">
                    <i className="btn-curve"></i>
                    <span className="btn-title">{t("HIZLI TEKLİF ALIN !")}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
              <div className="box featured" data-aos="fade-up" data-aos-delay="300">
                <h3>{t("Profosyonel")}</h3>
                <h4><sup>$</sup>59<span> / yıllık</span></h4>
                <ul>
                  <li>{t("SINIRSIZ")} {t("Site Barındırma")}</li>
                  <li>{t("SINIRSIZ")} {t("Disk Alanı")}</li>
                  <li>{t("SINIRSIZ")} {t("Trafik")}</li>
                  <li>{t("SINIRSIZ")} {t("E-Posta")}</li>
                  <li>{t("2 Core")} {t("CPU")}</li>
                  <li>{t("2048 MB")} {t("Ram")}</li>
                  <li>{t("cPanel")}</li>
                  <li>{t("Litespeed")}</li>
                  <li>{t("Litespeed Cache")}</li>
                  <li>{t("Ücretsiz .com.tr Domain")}</li>
                  <li>{t("Ücretsiz SSL")}</li>
                </ul>
                <div className="btn-wrap">
                  <a href="https://wa.me/905456136819" className="btn-buy" target="_blank" rel="noopener noreferrer">
                    <i className="btn-curve"></i>
                    <span className="btn-title">{t("HIZLI TEKLİF ALIN !")}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
              <div className="box" data-aos="fade-up" data-aos-delay="400">
                <span className="advanced" style={{ color: '#10adad' }}>{t("En Avantajlı")}</span>
                <h3>{t("Ultra")}</h3>
                <h4><sup>$</sup>119<span> / yıllık</span></h4>
                <ul>
                  <li>{t("SINIRSIZ")} {t("Site Barındırma")}</li>
                  <li>{t("SINIRSIZ")} {t("Disk Alanı")}</li>
                  <li>{t("SINIRSIZ")} {t("Trafik")}</li>
                  <li>{t("SINIRSIZ")} {t("E-Posta")}</li>
                  <li>{t("4 Core")} {t("CPU")}</li>
                  <li>{t("4096 MB")} {t("Ram")}</li>
                  <li>{t("cPanel")}</li>
                  <li>{t("Litespeed")}</li>
                  <li>{t("Litespeed Cache")}</li>
                  <li>{t("Ücretsiz .com.tr Domain")}</li>
                  <li>{t("Ücretsiz SSL + Özel IP")}</li>
                </ul>
                <div className="btn-wrap">
                  <a href="https://wa.me/905456136819" className="btn-buy" target="_blank" rel="noopener noreferrer">
                    <i className="btn-curve"></i>
                    <span className="btn-title">{t("HIZLI TEKLİF ALIN !")}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hosting