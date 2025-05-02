import React from 'react';
import { useTranslation } from 'react-i18next';



const About = () => {
const { t } = useTranslation();

return (
<section className="history-timeline mt-1">
      <div className="auto-container">
        <div className="history-timeline__card">
          <span className="history-timeline__year"></span>
          <div className="row g-0">
            <div className="col-md-12 col-lg-6">
              <span className="history-timeline__date"></span>
              <div className="history-timeline__info">
                <h3 className="history-timeline__title">{t("NEVA MOBİLYA")}</h3>
                <p className="history-timeline__text">
                <strong style={{ color: '#231f20' }}>{t("Neva Mobilya")}</strong> {t("olarak ilk anımız, kendimizi ifade ettiğimiz ilk tecrübe, ilk heyecan, 1990 yılında açtığımız döşemelik kumaş ve koltuk karma mağazasıdır.")}<br />
                {t("Tecrübe ve deneyim adına yapılan bu küçük başlangıç, sonraki yıllarda yerini 'NEVA' ya bırakmak suretiyle akıllarda hoş bir anı olarak kalmıştır.")}<br />
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex justify-content-start">
              <div className="history-timeline__image">
                <img src="assets/images/web-tasarım/2.png" alt="Web Tasarım" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="row g-0">
            <div className="col-md-12 col-lg-6">
              <div className="history-timeline__info">
                <span className="history-timeline__date"></span>
                <h3 className="history-timeline__title">{t("TARZ USTALIK İSTER!")}</h3>
                <p className="history-timeline__text">
                {t("Tarz ustalık ister. Seçilen malzemelerden kumaşa,dikişlerden en ince çizgilere kadar tasarımın her detayında kendini gösterir. Trendleri birikimle buluşturmaktır tarz. Hatta onlara yön vermektir. Çünkü modayı herkes takip eder… Ama önemli olan takip edilmektir.")} <br />
                {t("Hem dünyaya ayak uydurmak, hem de kendi dünyanı kurmaktır tarz. Bugünü yakalarken, yarına göz kırpmaktır.")} <br/>
              </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex justify-content-end">
              <div className="history-timeline__image">
                <img src="assets/images/web-tasarım/1.png" alt="Web Tasarım Önemi" loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        <div className="history-timeline__card">
          <div className="row g-0">
            <div className="col-md-12 col-lg-6">
              <div className="history-timeline__info">
                <span className="history-timeline__date"></span>
                <h3 className="history-timeline__title">{t("TASARIMDAN DAHA FAZLASI...")}</h3>
                <p className="history-timeline__text">
                {t("Beklentiler, ihtiyaçlar ve beğeniler değişir… Ama tarzın gücü değişmez. Çünkü tarz dikkat çeker, etkiler, hayranlık uyandırır. Tarz, güzel bir tasarımdan çok daha fazlasıdır.")} <br />
                {t("Tarz, kelimelerle tanımlanamaz ama gören herkes onu anında tanır. Daha yakından görmek isterseniz; adres size en yakın mağazamız. Çünkü…")}<br />
                {t("90'lı yıllarda kendine özgü sadelikle seyreden ev modası, sonraki yıllarda yerini modern çizgilere bırakmış ve Türk mobilya sektörü dünya piyasalarında hak ettiği yere gelmeyi başarmıştır.")}<br />
              
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex justify-content-start">
              <div className="history-timeline__image">
                <img src="assets/images/web-tasarım/4.png" alt="Web Tasarım Hizmetleri" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="row g-0">
            <div className="col-md-12 col-lg-6">
              <div className="history-timeline__info">
                <span className="history-timeline__date"></span>
                <h3 className="history-timeline__title">{t("NEDEN BİZ ?")}</h3>
                <p className="history-timeline__text">
                {t("Ürünlerimiz hakkında tüketicilerimiz her yıl düzenli olarak basılan kataloglarımız düzenlenen kumaş kartelalarımız aracılığı ile bilgilendirilip fikir ve tecrübelerinden istifade edebilmektedir.")}<br />        
                {t("Çeyrek asırlık bilgi birikimi, deneyimi ve sektördeki etkinliği ile; NEVA, çağın gerektirdiği her gelişime ayak uydurarak, estetik bakış, ergonomik kullanım, yeni trendler genel ilkeleriyle çalışmaktadır.")}
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex justify-content-end">
              <div className="history-timeline__image">
                <img src="assets/images/web-tasarım/3.png" alt="Web Tasarım Hizmetleri" loading="lazy" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
);
};

export default About;