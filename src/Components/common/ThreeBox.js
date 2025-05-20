import React from 'react';
import { useTranslation } from 'react-i18next';

const ThreeBox = () => {
	const { t } = useTranslation();
	
	return (
		<section className="feature-twelev mb-0">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms">
						<div className="feature-twelev__item">
							<div className="feature-twelev__item__wrapper">
								<div className="feature-twelev__item__icon">
									<i className="linoor-icon-three-touch"></i>
								</div>
								<br />
								<h3 className="feature-twelev__item__title">{t("SON TEKNOLOJİ")}</h3>
								<p className="feature-twelev__item__text">
									{t("Web Center olarak projelerinizde en yeni teknolojileri kullanarak modern, uzun ömürlü dijital çözümler sunuyoruz.")}
								</p>
								<div className="feature-twelev__item__br"></div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
						<div className="feature-twelev__item">
							<div className="feature-twelev__item__wrapper">
								<div className="feature-twelev__item__icon">
									<i className="linoor-icon-three-technical-support-1"></i>
								</div>
								<br />
								<h3 className="feature-twelev__item__title">{t("ÜCRETSİZ")}<br/>{t("DESTEK")}</h3>
								<p className="feature-twelev__item__text">
									{t("Müşteri memnuniyetini ön planda tutarak, ihtiyaç duyduğunuz her an yanınızda olan ücretsiz destek hizmeti sağlıyoruz.")}
								</p>
								<div className="feature-twelev__item__br"></div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
						<div className="feature-twelev__item">
							<div className="feature-twelev__item__wrapper">
								<div className="feature-twelev__item__icon">
									<i className="linoor-icon-three-quick-2"></i>
								</div>
								<br />
								<h3 className="feature-twelev__item__title">{t("HIZLI")}<br/>{t("SERVİS")}</h3>
								<p className="feature-twelev__item__text">
									{t("Zamana değer veren profesyonel yaklaşımımızla, tüm projelerinizi hızlı, eksiksiz ve kaliteli bir şekilde teslim ediyoruz.")}
								</p>
								<div className="feature-twelev__item__br"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ThreeBox;