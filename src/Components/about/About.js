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
                <h3 className="history-timeline__title">{t("about.title")}</h3>
                <p className="history-timeline__text">
                  <strong style={{ color: '#231f20' }}>{t("about.companyName")}</strong> {t("about.intro")}<br />
                  {t("about.intro2")}<br />
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex justify-content-start">
              <div className="history-timeline__image">
                <img src="assets/images/about/2.webp" alt="Web Tasarım" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="row g-0">
            <div className="col-md-12 col-lg-6">
              <div className="history-timeline__info">
                <span className="history-timeline__date"></span>
                <h3 className="history-timeline__title">{t("about.styleTitle")}</h3>
                <p className="history-timeline__text">
                  {t("about.styleText")} <br />
                  {t("about.styleText2")} <br/>
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex justify-content-end">
              <div className="history-timeline__image">
                <img src="assets/images/about/1.webp" alt="Web Tasarım Önemi" loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        <div className="history-timeline__card">
          <div className="row g-0">
            <div className="col-md-12 col-lg-6">
              <div className="history-timeline__info">
                <span className="history-timeline__date"></span>
                <h3 className="history-timeline__title">{t("about.designTitle")}</h3>
                <p className="history-timeline__text">
                  {t("about.designText")} <br />
                  {t("about.designText2")}<br />
                  {t("about.designText3")}<br />
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex justify-content-start">
              <div className="history-timeline__image">
                <img src="assets/images/about/4.webp" alt="Web Tasarım Hizmetleri" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="row g-0">
            <div className="col-md-12 col-lg-6">
              <div className="history-timeline__info">
                <span className="history-timeline__date"></span>
                <h3 className="history-timeline__title">{t("about.whyUsTitle")}</h3>
                <p className="history-timeline__text">
                  {t("about.whyUsText")}<br />        
                  {t("about.whyUsText2")}
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex justify-content-end">
              <div className="history-timeline__image">
                <img src="assets/images/about/3.webp" alt="Web Tasarım Hizmetleri" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;