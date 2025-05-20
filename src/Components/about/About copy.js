import React from 'react';
import { useTranslation } from 'react-i18next';
import "../../assets/css/about.css";

const About = () => {
const { t } = useTranslation();

return (
<section className="about-section-three">
  <div className="auto-container">
  <div className="sec-title-twelev text-center">
            <div className="sec-title-twelev__tagline" style={{ color: '#908f91' }}>
              <span className="sec-title-twelev__tagline__bar"></span>
              {t("HAKKIMIZDA")}
            </div>
            <h2 className="sec-title-twelev__title">{t("HAKKIMIZDA")}</h2>
          </div>
    <div className="row clearfix">
      <div className="col-lg-6 col-md-12 col-sm-12 image-column">
        <div className="about-section-three__image">
          <img src="assets/images/products/kısa-5.webp" alt={t("HAKKIMIZDA")} loading="lazy" />
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 content-column">
        <div className="about-section-three__content">
          
          <div className="text">
            <p>
              <strong style={{ color: '#231f20' }}>{t("Neva Mobilya")}</strong> {t("olarak ilk anımız, kendimizi ifade ettiğimiz ilk tecrübe, ilk heyecan, 1990 yılında açtığımız döşemelik kumaş ve koltuk karma mağazasıdır.")}<br />
              {t("Tecrübe ve deneyim adına yapılan bu küçük başlangıç, sonraki yıllarda yerini 'NEVA' ya bırakmak suretiyle akıllarda hoş bir anı olarak kalmıştır.")}<br />

              {t("Tarz ustalık ister. Seçilen malzemelerden kumaşa,dikişlerden en ince çizgilere kadar tasarımın her detayında kendini gösterir. Trendleri birikimle buluşturmaktır tarz. Hatta onlara yön vermektir. Çünkü modayı herkes takip eder… Ama önemli olan takip edilmektir.")} <br />
              {t("Hem dünyaya ayak uydurmak, hem de kendi dünyanı kurmaktır tarz. Bugünü yakalarken, yarına göz kırpmaktır. Beklentiler, ihtiyaçlar ve beğeniler değişir… Ama tarzın gücü değişmez. Çünkü tarz dikkat çeker, etkiler, hayranlık uyandırır. Tarz, güzel bir tasarımdan çok daha fazlasıdır.")} <br />
              {t("Tarz, kelimelerle tanımlanamaz ama gören herkes onu anında tanır. Daha yakından görmek isterseniz; adres size en yakın mağazamız. Çünkü…")}<br />
              {t("90'lı yıllarda kendine özgü sadelikle seyreden ev modası, sonraki yıllarda yerini modern çizgilere bırakmış ve Türk mobilya sektörü dünya piyasalarında hak ettiği yere gelmeyi başarmıştır.")}<br />
              {t("Ürünlerimiz hakkında tüketicilerimiz her yıl düzenli olarak basılan kataloglarımız düzenlenen kumaş kartelalarımız aracılığı ile bilgilendirilip fikir ve tecrübelerinden istifade edebilmektedir.")}<br />        
              {t("Çeyrek asırlık bilgi birikimi, deneyimi ve sektördeki etkinliği ile; NEVA, çağın gerektirdiği her gelişime ayak uydurarak, estetik bakış, ergonomik kullanım, yeni trendler genel ilkeleriyle çalışmaktadır.")}
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
);
};

export default About;