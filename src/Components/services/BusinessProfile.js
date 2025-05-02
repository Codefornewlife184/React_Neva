import React from 'react'
import { useTranslation } from 'react-i18next'

function BusinessProfile() {
  const { t } = useTranslation();

  return (
    <section className="faqs-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="faq-block col-lg-6 col-md-12 col-sm-12">
            <div className="about-section-three__image">
              <img src="assets/images/domain&hosting/5.webp" alt={t("İŞLETME PROFİLİ")} />
            </div>
          </div>

          <div className="faq-block col-lg-6 col-md-12 col-sm-12">
            <div className="about-twelev__content">
              <div className="sec-title-twelev">
                <div className="sec-title-twelev__tagline">
                  <span className="sec-title-twelev__tagline__bar" />
                  {t("İŞLETME PROFİLİ")}
                </div>
                <h2 className="sec-title-twelev__title">{t("Web Center: İŞLETME PROFİLİ")}</h2>
              </div>
              <p className="about-twelev__content__text">
                {t("Profesyonel bir işletme profili, müşterilerinizle kuracağınız güvenin temel taşını oluşturur.")}
                <strong style={{ color: '#10adad' }}> Web Center</strong> {t("olarak, işletmenizin kimliğini en iyi şekilde yansıtan profesyonel işletme profilleri oluşturuyoruz. Bu hizmet kapsamında:")}<br /><br />

                <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }} />&nbsp;&nbsp;{t("İşletmenizin misyon ve vizyonunu tanımlıyor")},<br />
                <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }} />&nbsp;&nbsp;{t("Faaliyet alanlarınızı detaylı bir şekilde açıklıyor")},<br />
                <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }} />&nbsp;&nbsp;{t("Hedef kitlenizi etkileyecek güçlü ve etkileyici bir anlatım dili kullanıyoruz")}.<br /><br />

                {t("Hazırladığımız işletme profilleri, web sitenizde, sosyal medya hesaplarınızda veya iş ortaklarınızla paylaşabileceğiniz profesyonel bir imaj sunar.")}<br /><br />
                <strong style={{ color: '#10adad' }}>Web Center</strong> {t("ile geleceğinizi bugünden inşa edin!")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessProfile