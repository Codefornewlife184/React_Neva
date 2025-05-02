import React from 'react'
import { useTranslation } from 'react-i18next'

function ECommerce() {
  const { t } = useTranslation();

  return (
    <>
      <section className="faqs-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="faq-block col-lg-6 col-md-12 col-sm-12">
              <div className="about-section-three__image">
                <img src="assets/images/domain&hosting/9.webp" alt="E-Ticaret" />
              </div>
            </div>

            <div className="faq-block col-lg-6 col-md-12 col-sm-12">
              <div className="about-twelev__content">
                <div className="sec-title-twelev">
                  <div className="sec-title-twelev__tagline">
                    <span className="sec-title-twelev__tagline__bar" />
                    {t("E TİCARET SİTELERİ")}
                  </div>
                  <h2 className="sec-title-twelev__title">{t("Web Center: E TİCARET SİTELERİ")}</h2>
                </div>
                <p className="about-twelev__content__text">
                  {t("Dijital çağda başarılı bir işletme için e-ticaret, vazgeçilmez bir unsurdur.")} <strong
                    style={{ color: '#10adad' }}> Web
                    Center</strong> {t("olarak, kullanıcı dostu ve güvenli e-ticaret platformları tasarlayarak işletmelerin online dünyada daha geniş kitlelere ulaşmasını sağlıyoruz.")}<br/><br/>
                  <strong style={{ color: '#10adad' }}>{t("E-ticaret")}</strong>, {t("ürün veya hizmetlerin internet üzerinden satışa sunulmasıdır. Online alışveriş, günümüz tüketici alışkanlıklarının merkezinde yer alıyor.")}<br/><br/>

                  <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }} />{' '}
                  <strong style={{ color: '#10adad' }}>{t("Daha Geniş Bir Kitleye Ulaşım")} : </strong>{t("Mağazanızın fiziksel sınırlarını aşarak global müşterilere ulaşabilirsiniz.")}
                  <br/>
                  <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }} />{' '}
                  <strong style={{ color: '#10adad' }}>{t("7/24 Açık Mağaza")} : </strong>{t("Online mağazanız her zaman açık olur; müşteriler istediği zaman alışveriş yapabilir.")}<br/>
                  <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }} />{' '}
                  <strong style={{ color: '#10adad' }}>{t("Düşük Maliyet")} : </strong>{t("Fiziksel mağazalara kıyasla daha düşük işletme maliyetleriyle satış yapabilirsiniz.")}<br/><br/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faqs-sections">
        <div className="auto-container">
          <h2 className="sec-title-twelev__title mb-2">{t("Web Center: E-TİCARET HİZMETLERİ")}</h2>
          <p className="about-twelev__content__text">
            <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }} />{' '}
            <strong style={{ color: '#10adad' }}>{t("Profesyonel E-Ticaret Tasarımı")} : </strong>{t("Markanızın kimliğini yansıtan şık ve modern tasarımlar hazırlıyoruz. Kullanıcı deneyimi (UX) odaklı tasarımlarımız, müşterilerinizin siteyi kolayca kullanmasını sağlar.")}<br/>
            <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }} />{' '}
            <strong style={{ color: '#10adad' }}>{t("Ürün ve Stok Yönetimi")} : </strong>{t("Sitenize kolayca ürün ekleyebilir, stoklarınızı takip edebilirsiniz. Otomasyon sistemleriyle süreçlerinizi hızlandırıyoruz.")}<br/>
            <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }} />{' '}
            <strong style={{ color: '#10adad' }}>{t("Ödeme Sistemleri Entegrasyonu")} : </strong>{t("Kredi kartı, banka havalesi, kapıda ödeme ve dijital cüzdan gibi çeşitli ödeme yöntemlerini sitenize entegre ediyoruz.")}<br/>
            <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }} />{' '}
            <strong style={{ color: '#10adad' }}>{t("Mobil Uyumlu (Responsive) Tasarım")} : </strong>{t("Müşterilerinizin mobil cihazlardan da sorunsuz alışveriş yapmasını sağlıyoruz.")}<br/>
            <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }} />{' '}
            <strong style={{ color: '#10adad' }}>{t("SEO ve Pazarlama Desteği")} : </strong>{t("Sitenizin arama motorlarında üst sıralarda yer alması için SEO uyumlu altyapı sunuyoruz. Ayrıca dijital pazarlama entegrasyonlarıyla satışlarınızı artırmanıza yardımcı oluyoruz.")}<br/>
            <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }} />{' '}
            <strong style={{ color: '#10adad' }}>{t("Hızlı ve Güvenli Altyapı")} : </strong>{t("SSL sertifikası, güvenli ödeme sistemleri ve hızlı yükleme süreleriyle hem müşterilerinizin güvenini kazanıyor hem de daha iyi bir kullanıcı deneyimi sunuyoruz.")}<br/>
            <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }} />{' '}
            <strong style={{ color: '#10adad' }}>{t("Analitik ve Raporlama Araçları")} : </strong>{t("Satışlarınızı, ziyaretçi trafiğinizi ve performansınızı analiz ederek işinizi büyütmenize yardımcı olacak veriler sağlıyoruz.")}<br/>
          </p>

          <h2 className="sec-title-twelev__title mb-2">{t("Web Center: E-TİCARET SİTELERİMİZİN AVANTAJLARI")}</h2>
          <p className="about-twelev__content__text">
            <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }} />{' '}
            <strong style={{ color: '#10adad' }}>{t("Kolay Kullanım")} : </strong>{t("Yönetim paneli sayesinde teknik bilgi gerektirmeden sitenizi yönetebilirsiniz.")}<br/>
            <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }} />{' '}
            <strong style={{ color: '#10adad' }}>{t("Esneklik")} : </strong>{t("Küçük işletmelerden büyük markalara kadar her ölçek için uygun çözümler sunarız.")}<br/>
            <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }} />{' '}
            <strong style={{ color: '#10adad' }}>{t("Hızlı Başlangıç")} : </strong>{t("E-ticaret sitenizi kısa sürede yayına alarak satış yapmaya başlayabilirsiniz.")}<br/>
            <i className="fas fa-arrow-alt-circle-right" style={{ color: '#10adad' }} />{' '}
            <strong style={{ color: '#10adad' }}>{t("Müşteri Memnuniyeti")} : </strong>{t("Hızlı ve kolay alışveriş deneyimi sunarak müşteri sadakatini artırabilirsiniz.")}<br/>

            <strong style={{ color: '#10adad' }}>Web Center</strong>{t("olarak, e-ticaret sitenizi hayata geçirmek için baştan sona tüm süreçlerde sizin yanınızdayız. Sitenizin tasarımından teknik altyapısına, pazarlama stratejilerinden güvenlik önlemlerine kadar her detayı titizlikle ele alıyoruz.")}

            <br/><br/>
            <strong style={{ color: '#10adad' }}>Web Center</strong> {t("ile geleceğinizi bugünden inşa edin!")}
          </p>
        </div>
      </section>
    </>
  )
}

export default ECommerce