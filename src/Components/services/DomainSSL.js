import React from 'react'
import { useTranslation } from 'react-i18next'

function DomainSSL() {
  const { t } = useTranslation();

  return (
    <>
    <section id="pricing" className="pricing mb-5">
            <div className="container" data-aos="fade-up">

                <div className="row mt-5">

                    <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                        <div className="box featured" data-aos="fade-up" data-aos-delay="200">
                            <h3>{t("Domain & .com")}</h3>
                            <h4><sup>$</sup>9<span>{t("/ yıllık")}</span></h4>
                            <ul>
                                <li>{t("www.siteadi.com")}</li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="https://wa.me/905456136819" className="btn-buy" target="_blank" rel="noopener noreferrer">
                                    <i className="btn-curve" />
                                    <span className="btn-title">{t("HIZLI TEKLİF ALIN !")}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                        <div className="box featured" data-aos="fade-up" data-aos-delay="200">
                            <h3>{t("Domain & .com.tr")}</h3>
                            <h4><sup>$</sup>1.9<span>{t("/ yıllık")}</span></h4>
                            <ul>
                                <li>{t("www.siteadi.com.tr")}</li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="https://wa.me/905456136819" className="btn-buy" target="_blank" rel="noopener noreferrer">
                                    <i className="btn-curve" />
                                    <span className="btn-title">{t("HIZLI TEKLİF ALIN !")}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                        <div className="box featured" data-aos="fade-up" data-aos-delay="300">
                            <h3>{t("SSL Güvenlik Sertifikası")}</h3>
                            <h4><sup>$</sup>29<span>{t("/ yıllık")}</span></h4>
                            <ul>
                                <li><strong style={{color:'#10adad'}}>https </strong>{t("://www.siteadi.com")}</li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="https://wa.me/905456136819" className="btn-buy" target="_blank" rel="noopener noreferrer">
                                    <i className="btn-curve" />
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

export default DomainSSL