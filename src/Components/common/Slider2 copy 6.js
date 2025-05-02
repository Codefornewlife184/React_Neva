/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
// SliderComponent.js
import React, { Suspense } from "react";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useTranslation } from "react-i18next";

const Slider2 = () => {
const { t } = useTranslation();

const options = {
items: 1,
loop: true,
margin: 0,
nav: true,
dots: true,
autoplay: true,
autoplayTimeout: 5000,
autoplayHoverPause: true,
navText: [
'<i className="fa fa-angle-left"></i>',
'<i className="fa fa-angle-right"></i>'
]
};

return (
<Suspense fallback={<div>Loading...</div>}>
	<section className="slider-eight">
		<div className="swiper-container thm-swiper__slider"
			data-swiper-options='{"slidesPerView": 1, "loop": true, "effect": "fade", "pagination": { "el": "#main-slider-pagination", "type": "bullets", "clickable": true }, "autoplay": { "delay": 5000 }}'>
			<div className="swiper-wrapper">
				<div className="swiper-slide" style={{ height: '900px' }}>
					<div className="image-layer" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/products/1600.png)` }}>
					</div>

					<div className="auto-container">
						<div className="slider-eight__content">
							<p className="slider-eight__text"><span>Köşe Takımları</span></p>

							<h2 className="slider-eight__title">Class Köşe Takımları</h2>
							<div className="slider-eight__btns">
								<a href="projects" className="slider-eight__btn thm-btn__eight">KOLEKSİYONLARIMIZ</a>
								<a href="contact" className="slider-eight__btn slider-eight__btn--two thm-btn__eight">HIZLI TEKLİF ALIN!</a>
							</div>

						</div>
					</div>
				</div>
				<div className="swiper-slide" style={{ height: '900px' }}>
					<div className="image-layer" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/products/1603.png)` }}>
					</div>

					<div className="auto-container">
						<div className="slider-eight__content">
							<p className="slider-eight__text"><span>Koltuk Takımları</span></p>

							<h2 className="slider-eight__title">Zen Koltuk Takımları</h2>

							<div className="slider-eight__btns">
								<a href="projects" className="slider-eight__btn thm-btn__eight">KOLEKSİYONLARIMIZ</a>
								<a href="contact" className="slider-eight__btn slider-eight__btn--two thm-btn__eight">HIZLI TEKLİF ALIN!</a>
							</div>

						</div>
					</div>
				</div>

			</div>

		</div>
	</section>
</Suspense>
);
};

export default Slider2;