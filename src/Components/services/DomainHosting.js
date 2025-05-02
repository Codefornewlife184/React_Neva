import React from 'react'
import { useTranslation } from 'react-i18next'

function DomainHosting() {
  const { t } = useTranslation();

  return (
    <>
    <section className="history-timeline mt-1">
            <div className="auto-container">
                <div className="history-timeline__card">
                    <span className="history-timeline__year"></span>
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="history-timeline__info">
                                <h3 className="history-timeline__title">Web Center</h3>
                                
                                <p className="history-timeline__text">{t("Web Center olarak, dijital dünyada yerinizi sağlamlaştırmanız için ihtiyaç duyduğunuz domain (alan adı) ve hosting (barındırma) hizmetlerini sizlere profesyonel bir yaklaşımla sunuyoruz. İşletmenizin çevrimiçi dünyada güçlü bir şekilde temsil edilmesini sağlayacak en uygun çözümleri üretiyoruz.")}</p>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="history-timeline__info">
                                <span className="history-timeline__date"></span>
                                <h3 className="history-timeline__title">{t("DOMAIN HİZMETLERİMİZ")}</h3>
                                
                                <p className="history-timeline__text"><strong style={{ color: '#10adad' }}>{t("Kusursuz Marka Kimliği")}:</strong> {t("İşletmenize özel, kolay hatırlanabilir ve etkileyici alan adlarıyla çevrimiçi dünyada fark yaratmanızı sağlıyoruz.")}
                                    <br/><strong style={{ color: '#10adad' }}>{t("Hızlı Tescil İşlemleri")}: </strong>{t("Alan adı seçiminizden tescil sürecine kadar tüm işlemleri hızlı ve sorunsuz bir şekilde tamamlıyoruz.")}
                                    <br/><strong style={{ color: '#10adad' }}>{t("Güçlü Alan Adı Yönetimi")}: </strong> {t("DNS ayarları, yenileme ve transfer gibi tüm süreçlerde teknik destek sağlıyoruz.")}</p>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="history-timeline__image">
                                <img src="assets/images/domain&hosting/1.webp" alt={t("DOMAIN HİZMETLERİMİZ")}/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="history-timeline__card">

                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="history-timeline__info">
                                <span className="history-timeline__date"></span>
                                <h3 className="history-timeline__title">{t("HOSTING HİZMETLERİMİZ")}</h3>
                                
                                <p className="history-timeline__text"><strong style={{ color: '#10adad' }}>{t("Hızlı ve Güvenilir Sunucular")}: </strong> {t("Web sitenizin her zaman hızlı ve kesintisiz çalışması için üst düzey sunucu altyapıları kullanan firmalarla çalışıyoruz.")}
                                    <br/><strong style={{ color: '#10adad' }}>{t("Esnek Hosting Paketleri")}: </strong>{t("İhtiyacınıza uygun ekonomik ve performans odaklı hosting seçenekleri sunuyoruz.")}
                                    <br/><strong style={{ color: '#10adad' }}>{t("Tam Teknik Destek")}: </strong> {t("Web sitenizin bakım, güvenlik ve optimizasyon süreçlerinde yanınızdayız.")}</p>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="history-timeline__image">
                                <img src="assets/images/domain&hosting/2.webp" alt={t("HOSTING HİZMETLERİMİZ")}/>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="history-timeline__info">
                                <span className="history-timeline__date"></span>
                                <h3 className="history-timeline__title">{t("Neden Web Center ?")}</h3>
                                
                                <p className="history-timeline__text"><strong style={{ color: '#10adad' }}>{t("7/24 Destek")}: </strong>
                                    {t("Her an ulaşabileceğiniz bir müşteri hizmetleri anlayışıyla hareket ediyoruz.")}
                                    <br/><strong style={{ color: '#10adad' }}>{t("Müşteri Memnuniyeti")}: </strong>{t("Başarılarımızı, müşterilerimizin memnuniyeti ve sadakatiyle ölçüyoruz.")}
                                    <br/><strong style={{ color: '#10adad' }}>{t("Kalite Anlayışı")}: </strong> {t("Kalite Anlayışı ile sizin ihtiyaçlarınıza özel çözümler sunuyoruz.")}</p>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="history-timeline__image">
                                <img src="assets/images/domain&hosting/3.webp" alt={t("Neden Web Center ?")}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default DomainHosting