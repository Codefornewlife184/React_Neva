import React from 'react';
import { useTranslation } from 'react-i18next';
import "../../assets/css/about.css";

const About = () => {
const { t } = useTranslation();

return (
<section className="history-timeline mt-1">
      <div className="auto-container">
        <div className="history-timeline__card">
          <span className="history-timeline__year"></span>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <span className="history-timeline__date"></span>
              <div className="history-timeline__info">
                <h3 className="history-timeline__title">{t("Web Center: Modern ve Profesyonel Web Tasarım HİZMETLERİ")}</h3>
                <p className="history-timeline__text">
                <strong style={{ color: '#231f20' }}>{t("Neva Mobilya")}</strong> {t("olarak ilk anımız, kendimizi ifade ettiğimiz ilk tecrübe, ilk heyecan, 1990 yılında açtığımız döşemelik kumaş ve koltuk karma mağazasıdır.")}<br />
                {t("Tecrübe ve deneyim adına yapılan bu küçük başlangıç, sonraki yıllarda yerini 'NEVA' ya bırakmak suretiyle akıllarda hoş bir anı olarak kalmıştır.")}<br />
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="history-timeline__image">
                <img src="assets/images/web-tasarım/1.webp" alt="Web Tasarım" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="history-timeline__info">
                <span className="history-timeline__date"></span>
                <h3 className="history-timeline__title">{t("Web Tasarımı Nedİr ve Neden ÖnemlİDİr?")}</h3>
                <p className="history-timeline__text">
                  {t("Web tasarımı, bir web sitesinin görsel estetiği, kullanıcı deneyimi (UX) ve teknik altyapısının bir araya getirilmesidir.")}
                  <br />
                  <strong style={{ color: '#10adad' }}>{t("Kullanıcı Deneyimi")}: </strong>{t("Ziyaretçilerin web sitenizi kolayca kullanmasını ve ihtiyaçlarına hızla ulaşmasını sağlar.")}
                  <br />
                  <strong style={{ color: '#10adad' }}>{t("Marka Kimliği")}: </strong> {t("İşletmenizin profesyonel bir imaj çizmesine yardımcı olur.")}
                  <br />
                  <strong style={{ color: '#10adad' }}>{t("Mobil Uyumluluk")}: </strong> {t("Günümüzde trafiğin büyük kısmı mobil cihazlardan gelir; bu nedenle responsive (mobil uyumlu) tasarım şarttır.")}
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="history-timeline__image">
                <img src="assets/images/web-tasarım/2.webp" alt="Web Tasarım Önemi" loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        <div className="history-timeline__card">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="history-timeline__info">
                <span className="history-timeline__date" style={{ color: '#231f20' }}></span>
                <h3 className="history-timeline__title">{t("Web Center'ın Sağladığı Web Tasarım HİZMETLERİ")}</h3>
                <p className="history-timeline__text">
                <strong style={{ color: '#231f20' }}>{t("Neva Mobilya")}</strong> {t("olarak ilk anımız, kendimizi ifade ettiğimiz ilk tecrübe, ilk heyecan, 1990 yılında açtığımız döşemelik kumaş ve koltuk karma mağazasıdır.")}<br />
                {t("Tecrübe ve deneyim adına yapılan bu küçük başlangıç, sonraki yıllarda yerini 'NEVA' ya bırakmak suretiyle akıllarda hoş bir anı olarak kalmıştır.")}<br />
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="history-timeline__image">
                <img src="assets/images/web-tasarım/3.webp" alt="Web Tasarım Hizmetleri" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="history-timeline__info">
                <span className="history-timeline__date"></span>
                <h3 className="history-timeline__title">{t("Web Center'ın Sağladığı Web Tasarım HİZMETLERİ")}</h3>
                <p className="history-timeline__text">
                  <strong style={{ color: '#10adad' }}>{t("Blog ve İçerik Siteleri")} : </strong>{t("İlgi çekici ve kolayca yönetilebilen blog platformları tasarlıyoruz.")}
                  <br />
                  <strong style={{ color: '#10adad' }}>{t("SEO Uyumlu Tasarım")} : </strong>{t("Tasarım aşamasında SEO kriterlerini göz önünde bulundurarak, web sitenizin arama motorlarında daha görünür olmasını sağlıyoruz.")}
                  <br />
                  <strong style={{ color: '#10adad' }}>{t("Mobil Uyumlu (Responsive) Tasarım")} : </strong> {t("Her cihazda sorunsuz çalışan web siteleriyle ziyaretçilerinizin deneyimini kusursuz hale getiriyoruz.")}
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="history-timeline__image">
                <img src="assets/images/web-tasarım/4.webp" alt="Web Tasarım Hizmetleri" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="history-timeline__info">
                <span className="history-timeline__date"></span>
                <h3 className="history-timeline__title">{t("Web Tasarım SÜRECİMİZ")}</h3>
                <p className="history-timeline__text">
                  <strong style={{ color: '#10adad' }}>{t("Analiz ve Strateji")} : </strong> {t("İşletmenizin ihtiyaçlarını ve hedeflerini anlamak için detaylı bir analiz yapıyoruz.")}
                  <br />
                  <strong style={{ color: '#10adad' }}>{t("Tasarım")} : </strong>{t("Markanıza uygun modern ve etkileyici bir tasarım hazırlıyoruz.")}
                  <br />
                  <strong style={{ color: '#10adad' }}>{t("Geliştirme")} : </strong> {t("Web sitenizi, en son teknolojilerle güvenli ve hızlı bir şekilde kodluyoruz.")}
                  <br />
                  <strong style={{ color: '#10adad' }}>{t("Test ve Yayınlama")} : </strong> {t("Yayın öncesinde tüm testleri yaparak sorunsuz bir kullanıcı deneyimi sunuyoruz.")}
                  <br />
                  <strong style={{ color: '#10adad' }}>{t("Destek ve Güncelleme")} : </strong> {t("Yayınlandıktan sonra da teknik destek ve gerektiğinde güncelleme hizmeti sağlıyoruz.")}
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="history-timeline__image">
                <img src="assets/images/web-tasarım/5.webp" alt="Web Tasarım Süreci" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="history-timeline__info">
                <span className="history-timeline__date"></span>
                <h3 className="history-timeline__title">{t("Neden Web Center?")}</h3>
                <p className="history-timeline__text">
                  <strong style={{ color: '#10adad' }}>{t("Profesyonellik")} : </strong>{t("Her projede uzman ekibimizle kaliteli işler sunarız.")}
                  <br />
                  <strong style={{ color: '#10adad' }}>{t("Müşteri Odaklılık")} : </strong>{t("Taleplerinize uygun kişiselleştirilmiş çözümler üretiriz.")}
                  <br />
                  <strong style={{ color: '#10adad' }}>{t("Güvenilirlik")} : </strong> {t("Web sitenizin güvenliği ve performansı bizim için önceliklidir.")}
                  <br />
                  <strong style={{ color: '#10adad' }}>{t("Yenilikçi Yaklaşım")} : </strong> {t("En son trendleri takip ederek tasarımlarımızı sürekli geliştiririz.")}
                  <br />
                  <br />
                  <strong style={{ color: '#10adad' }}>Web Center </strong> {t("olarak, işletmenizi dijital dünyada bir adım öne taşıyacak çözümler sunmaktan mutluluk duyarız.")}
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="history-timeline__image">
                <img src="assets/images/web-tasarım/6.webp" alt="Neden Web Center" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);
};

export default About;