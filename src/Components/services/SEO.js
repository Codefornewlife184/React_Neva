import React from 'react'
import { useTranslation } from 'react-i18next'

function SEO() {
const { t } = useTranslation();

return (
<>
    <section className="faqs-section">
        <div className="auto-container">
            <div className="row clearfix">

                <div className="faq-block col-lg-6 col-md-12 col-sm-12">
                    <div className="about-section-three__image">
                        <img src="assets/images/domain&hosting/7.webp" alt="" />
                    </div>
                </div>

                <div className="faq-block col-lg-6 col-md-12 col-sm-12">
                    <div className="about-twelev__content">
                        <div className="sec-title-twelev">
                            <div className="sec-title-twelev__tagline"><span
                                    className="sec-title-twelev__tagline__bar"></span>
                                {t("SEO OPTİMİZASYONU")}</div>
                            <h2 className="sec-title-twelev__title">{t("Web Center: SEO OPTİMİZASYONU")}</h2>
                        </div>
                        <p className="about-twelev__content__text">
                            {t("Dijital dünyada görünür olmak artık her işletme için hayati öneme sahip.")}<strong
                                style={{ color: '#10adad' }}> Web
                                Center</strong> {t("olarak, web sitenizin arama motorlarında üst sıralarda yer almasını sağlamak için kapsamlı SEO hizmetleri sunuyoruz. Hizmetlerimiz arasında:")}<br /><br />

                            <i className="fas fa-arrow-alt-circle-right"
                                style={{ color: '#10adad' }}></i>&nbsp;&nbsp;{t("Hedef kitlenizin arama alışkanlıklarına uygun stratejik anahtar kelimeler belirliyoruz.")}<br />
                            <i className="fas fa-arrow-alt-circle-right"
                                style={{ color: '#10adad' }}></i>&nbsp;&nbsp;{t("Web sitenizdeki metinleri, görselleri ve videoları arama motorlarına uyumlu hale getiriyoruz.")}<br />
                            <i className="fas fa-arrow-alt-circle-right"
                                style={{ color: '#10adad' }}></i>&nbsp;&nbsp;{t("Sayfa hızını artırıyor, mobil uyumluluğunuzu geliştiriyor ve web sitenizin teknik performansını optimize ediyoruz.")}<br /><br />

                            {t("Amacımız, işletmenizin dijital dünyada daha fazla trafik almasını ve müşteri kitlenizi büyütmesini sağlamaktır.")}

                            <br /><br />
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

export default SEO