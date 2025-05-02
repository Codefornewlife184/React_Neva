import React from 'react'
import { useTranslation } from 'react-i18next'

function LogoDesign() {
  const { t } = useTranslation();

  return (
    <>
    <section className="faqs-section">
            <div className="auto-container">
                <div className="row clearfix">

                    <div className="faq-block col-lg-6 col-md-12 col-sm-12">
                        <div className="about-section-three__image">
                            <img src="assets/images/domain&hosting/6.webp" alt=""/>
                        </div>
                    </div>

                    <div className="faq-block col-lg-6 col-md-12 col-sm-12">
                        <div className="about-twelev__content">
                            <div className="sec-title-twelev">
                                <div className="sec-title-twelev__tagline"><span
                                        className="sec-title-twelev__tagline__bar"></span>
                                    {t("LOGO TASARIMI")}</div>
                                <h2 className="sec-title-twelev__title">{t("Web Center: LOGO TASARIMI")}</h2>
                            </div>
                            <p className="about-twelev__content__text">
                                {t("Marka kimliğinizin en önemli parçası olan logonuz, müşterilerinizle kurduğunuz ilk bağdır.")}<strong style={{ color: '#10adad' }}> {t("Web Center")}</strong> {t("olarak, işletmenizin vizyonunu ve değerlerini en iyi şekilde yansıtan, yaratıcı ve profesyonel logo tasarımları sunuyoruz. Tasarım sürecimizde:")}<br/><br/>

                                <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }}></i>&nbsp;&nbsp;{t("Sektör analizleri yapıyor")},<br/>
                                <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }}></i>&nbsp;&nbsp;{t("Markanızı farklılaştıracak özgün fikirler geliştiriyor")},<br/>
                                <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }}></i>&nbsp;&nbsp;{t("Renk ve tipografi seçimleriyle mesajınızı görselleştiriyoruz")}.<br/><br/>

                                {t("Sonuç olarak, işletmenizin unutulmaz bir kimliğe sahip olmasını sağlıyoruz. Sizinle birlikte çalışarak, markanızın hikayesini güçlü bir şekilde anlatan bir logo tasarlıyoruz.")}

                                <br/><br/>
                                <strong style={{ color: '#10adad' }}>{t("Web Center")}</strong> {t("ile geleceğinizi bugünden inşa edin!")}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default LogoDesign