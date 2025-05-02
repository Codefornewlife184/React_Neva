import React from 'react'
import { useTranslation } from 'react-i18next'

function GoogleMaps() {
  const { t } = useTranslation();

  return (
    <>
      <section className="faqs-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="faq-block col-lg-6 col-md-12 col-sm-12">
              <div className="about-section-three__image">
                <img src="assets/images/domain&hosting/4.webp" alt=""/>
              </div>
            </div>

            <div className="faq-block col-lg-6 col-md-12 col-sm-12">
              <div className="about-twelev__content">
                <div className="sec-title-twelev">
                  <div className="sec-title-twelev__tagline">
                    <span className="sec-title-twelev__tagline__bar"></span>
                    {t("GOOGLE HARİTA KAYDI")}
                  </div>
                  <h2 className="sec-title-twelev__title">{t("Web Center: GOOGLE HARİTA KAYDI")}</h2>
                </div>
                <p className="about-twelev__content__text">
                  {t("Yerel müşterilere ulaşmak ve işletmenizin fiziksel varlığını güçlendirmek için harita kayıt hizmetimizden faydalanabilirsiniz.")} <strong style={{ color: '#10adad' }}>Web Center</strong> {t("olarak, Google My Business gibi platformlara işletme bilgilerinizi doğru ve eksiksiz bir şekilde kaydediyoruz. Bu hizmetle:")}<br/><br/>

                  <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }}></i>&nbsp;&nbsp;{t("İşletme adresinizi, iletişim bilgilerinizi ve çalışma saatlerinizi ekliyoruz.")}<br/>
                  <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }}></i>&nbsp;&nbsp;{t("Müşteri yorumlarını yönetmenizi kolaylaştırıyoruz.")}<br/>
                  <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }}></i>&nbsp;&nbsp;{t("Harita üzerinde görünebilirliğinizi artırarak müşterilerinizin size ulaşmasını kolaylaştırıyoruz.")}<br/>

                  {t("Böylece hem yerel pazarda daha güçlü bir konum elde ediyor hem de müşterilerinizin sizi bulma sürecini basitleştiriyoruz.")} <br/><br/>
                  <strong style={{ color: '#10adad' }}>Web Center</strong> {t("ile geleceğinizi bugünden inşa edin!")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GoogleMaps