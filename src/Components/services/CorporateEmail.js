import React from 'react'
import { useTranslation } from 'react-i18next'

function CorporateEmail() {
  const { t } = useTranslation();
  
  return (
    <>
      <section className="faqs-section">
        <div className="auto-container">
          <div className="row clearfix">

            <div className="faq-block col-lg-6 col-md-12 col-sm-12">
              <div className="about-section-three__image">
                <img src="assets/images/domain&hosting/10.webp" alt={t("KURUMSAL E-POSTA")} />
              </div>
            </div>

            <div className="faq-block col-lg-6 col-md-12 col-sm-12">
              <div className="about-twelev__content">
                <div className="sec-title-twelev">
                  <div className="sec-title-twelev__tagline">
                    <span className="sec-title-twelev__tagline__bar" />
                    {t("KURUMSAL E-POSTA")}</div>
                  <h2 className="sec-title-twelev__title">{t("Web Center: KURUMSAL E-POSTA")}</h2>
                </div>
                <p className="about-twelev__content__text">
                  {t("Kurumsal e-posta adresleri, işletmenizin prestijini artırırken güvenilirliğini de pekiştirir.")}<br/><br/>
                  <strong style={{color:'#10adad'}}>{t("Web Center")}</strong> {t("olarak, işletmenize özel kurumsal e-posta çözümleri sunuyoruz. Profesyonel e-posta altyapısıyla iletişiminizi güçlendirin ve iş süreçlerinizi daha verimli hale getirin.")}<br/><br/>

                  <i className="fas fa-arrow-alt-circle-right" style={{color:'#10adad'}}></i>&nbsp;&nbsp;<strong
                    style={{color:'#10adad'}}>{t("Kurumsal E-Posta Nedir?")} </strong>
                  <br/>
                  {t("Kurumsal e-posta, işletmenizin alan adını (örneğin: adiniz@webcenter.com) içeren özel e-posta adresleridir. Gmail, Yahoo gibi genel e-posta adresleri yerine kendi alan adınızı kullanmanız, markanızın profesyonelliğini ve kimliğini yansıtır.")}<br/><br/>
                </p><br/><br/>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="faqs-sections">
        <div className="auto-container">
          <h2 className="sec-title-twelev__title mb-2">{t("Web Center: Kurumsal E-Postanın Avantajları")}</h2>
          <p className="about-twelev__content__text">
            <i className="fas fa-arrow-alt-circle-right" style={{color:'#10adad'}}></i>&nbsp;&nbsp;<strong
              style={{color:'#10adad'}}>{t("Profesyonel Görünüm")} : </strong>{t("Müşterileriniz, iş ortaklarınız ve çalışanlarınız nezdinde kurumsal bir imaj yaratır. Örneğin: info@webcenter.com veya destek@webcenter.com gibi adresler, işletmenizin ciddiyetini gösterir.")}<br/>
            <i className="fas fa-arrow-alt-circle-right" style={{color:'#10adad'}}></i>&nbsp;&nbsp;<strong
              style={{color:'#10adad'}}>{t("Güvenilirlik ve Marka Gücü")} : </strong>{t("Özel bir alan adı kullanımı, işletmenizin güvenilirliğini artırır. Kurumsal e-posta adresleri, spam ve dolandırıcılık riskini azaltır.")}<br/>
            <i className="fas fa-arrow-alt-circle-right" style={{color:'#10adad'}}></i>&nbsp;&nbsp;<strong
              style={{color:'#10adad'}}>{t("Kolay Yönetim")} : </strong>{t("Tüm çalışanlarınız için farklı e-posta hesapları oluşturabilirsiniz. E-posta hesaplarının yönetimi, belirli yetkilere göre düzenlenebilir.")}<br/>
            <i className="fas fa-arrow-alt-circle-right" style={{color:'#10adad'}}></i>&nbsp;&nbsp;<strong
              style={{color:'#10adad'}}>{t("Daha Fazla Depolama Alanı")} : </strong>{t("Genel e-posta sağlayıcılarına göre daha geniş depolama kapasitesi sunar. Önemli iş dosyalarını ve yazışmaları güvenle saklayabilirsiniz.")}<br/>
            <i className="fas fa-arrow-alt-circle-right" style={{color:'#10adad'}}></i>&nbsp;&nbsp;<strong
              style={{color:'#10adad'}}>{t("Reklamsız ve Kapsamlı Özellikler")} : </strong>{t("Genel e-posta servislerinden farklı olarak reklamsız bir deneyim sağlar. Paylaşılabilir takvimler, görev yönetimi ve iş birliği araçları gibi ek özelliklerle iş süreçlerinizi destekler.")}<br/>
          </p>

          <h2 className="sec-title-twelev__title mb-2">{t("Web Center'ın Kurumsal E-Posta HİZMETLERİ")}</h2>
          <p className="about-twelev__content__text">
            <i className="fas fa-arrow-alt-circle-right" style={{color:'#10adad'}}></i>&nbsp;&nbsp;<strong
              style={{color:'#10adad'}}>{t("Alan Adınıza Özel E-Posta Kurulumu")} : </strong>{t("İşletmenizin alan adına bağlı e-posta hesaplarını hızlı ve kolay bir şekilde oluşturuyoruz. İstediğiniz kadar kullanıcı hesabı ekleyebilir ve yönetebilirsiniz.")}<br/>
            <i className="fas fa-arrow-alt-circle-right" style={{color:'#10adad'}}></i>&nbsp;&nbsp;<strong
              style={{color:'#10adad'}}>{t("Güçlü Güvenlik Önlemleri")} : </strong>{t("SSL ve spam koruma gibi güvenlik önlemleriyle e-postalarınızı koruyoruz. Virüs taraması ve veri şifreleme özellikleri sayesinde bilgileriniz güvende.")}<br/>
            <i className="fas fa-arrow-alt-circle-right" style={{color:'#10adad'}}></i>&nbsp;&nbsp;<strong
              style={{color:'#10adad'}}>{t("Mobil ve Masaüstü Uyumlu")} : </strong>{t("E-postalarınıza dilediğiniz cihazdan erişebilirsiniz. Outlook, Gmail veya mobil cihazlar üzerinden kolay entegrasyon sağlanır.")}<br/>
            <i className="fas fa-arrow-alt-circle-right" style={{color:'#10adad'}}></i>&nbsp;&nbsp;<strong
              style={{color:'#10adad'}}>{t("Teknik Destek ve Yönetim")} : </strong>{t("Sorunlarınızın çözümü için 7/24 destek sunuyoruz. E-posta sisteminizi yedekliyor ve gerektiğinde kurtarma hizmeti sağlıyoruz.")}<br/><br/>

            <strong style={{color:'#10adad'}}>{t("Web Center")}</strong>{t("olarak, işletmenize değer katan ve iletişimde güven sağlayan kurumsal e-posta çözümleriyle iş süreçlerinizi destekliyoruz.")}

            {t("Hemen bizimle iletişime geçin ve işletmenize özel kurumsal e-posta hizmetimizden yararlanın!")}

            <br/><br/>
            <strong style={{color:'#10adad'}}>{t("Web Center")}</strong> {t("ile geleceğinizi bugünden inşa edin!")}
          </p>
        </div>
      </section>
    </>
  )
}

export default CorporateEmail