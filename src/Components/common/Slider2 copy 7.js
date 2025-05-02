/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
// SliderComponent.js
import React, { Suspense } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
'<i class="fa fa-angle-left"></i>',
'<i class="fa fa-angle-right"></i>'
]
};

return (
<Suspense fallback={<div>Loading...</div>}>
	<section className="slider-thirteen">
		<OwlCarousel className="banner-carousel owl-theme owl-carousel" {...options}>
			<div className="item">
				<div className="slider-thirteen__item"
					style={{ position: 'relative', minHeight: '300px', width: '100%' }}>
					<div className="slider-thirteen__bg" style={{
                  backgroundImage: 'url(/assets/images/products/uzun-4.webp)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  zIndex: 1
                }}></div>
					<div className="slider-thirteen__shape-one" style={{
                  backgroundImage: 'url(/assets/images/background/slider-2-shape-1.webp)',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  position: 'absolute',
                  right: 0,
                  bottom: 0,
                  width: '45%',
                  height: '100%',
                  minHeight: '120px',
                  zIndex: 3
                }}></div>
					<div className="container">
						<div className="slider-thirteen__content">
							<h3 className="slider-thirteen__title" style={{ fontSize: '80px' }}>
								Milas <br />Kanepe <br />Modelleri
							</h3>
							<div className="slider-thirteen__btn">
								<Link to="/contact" className="thm-btn-thirteen">Kanepeler</Link>
							</div>
						</div>
					</div>
					<div className="slider-thirteen__layer responsive-hide-right"
						style={{ height: '100%', display: 'flex', alignItems: 'flex-end', position: 'absolute', right: 0, bottom: 0, width: '45%', zIndex: 2 }}>
						<img src="/assets/images/products/kısa-4.webp" alt="linoor"
							style={{ height: '100%', width: 'auto', maxHeight: '100%' }} />
					</div>
				</div>
			</div>
			<div className="item">
				<div className="slider-thirteen__item"
					style={{ position: 'relative', minHeight: '300px', width: '100%' }}>
					<div className="slider-thirteen__bg" style={{
                  backgroundImage: 'url(/assets/images/products/uzun-2.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  zIndex: 1
                }}></div>
					<div className="slider-thirteen__shape-one" style={{
                  backgroundImage: 'url(/assets/images/background/slider-2-shape-1.webp)',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  position: 'absolute',
                  right: 0,
                  bottom: 0,
                  width: '45%',
                  height: '100%',
                  minHeight: '120px',
                  zIndex: 3
                }}></div>
					<div className="container">
						<div className="slider-thirteen__content">
							<h3 className="slider-thirteen__title" style={{ fontSize: '80px' }}>
								Zen <br />Koltuk <br />Takımları
							</h3>
							<div className="slider-thirteen__btn">
								<Link to="/contact" className="thm-btn-thirteen">Koltuklar</Link>
							</div>
						</div>
					</div>
					<div className="slider-thirteen__layer"
						style={{ height: '100%', display: 'flex', alignItems: 'flex-end' }}>
						<img src="assets/images/products/kısa-2.png" alt="linoor"
							style={{ height: '100%', width: 'auto', maxHeight: '100%' }} />
					</div>
				</div>
			</div>
			<div className="item">
				<div className="slider-thirteen__item"
					style={{ position: 'relative', minHeight: '300px', width: '100%' }}>
					<div className="slider-thirteen__bg" style={{
                  backgroundImage: 'url(/assets/images/products/uzun-3.webp)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  zIndex: 1
                }}></div>
					<div className="slider-thirteen__shape-one" style={{
                  backgroundImage: 'url(/assets/images/background/slider-2-shape-1.webp)',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  position: 'absolute',
                  right: 0,
                  bottom: 0,
                  width: '45%',
                  height: '100%',
                  minHeight: '120px',
                  zIndex: 3
                }}></div>
					<div className="container">
						<div className="slider-thirteen__content">
							<h3 className="slider-thirteen__title" style={{ fontSize: '80px' }}>
								Class <br />Köşe <br />Takımları
							</h3>
							<div className="slider-thirteen__btn">
								<Link to="/contact" className="thm-btn-thirteen">Köşe Takımları</Link>
							</div>
						</div>
					</div>
					<div className="slider-thirteen__layer"
						style={{ height: '100%', display: 'flex', alignItems: 'flex-end' }}>
						<img src="assets/images/products/kısa-3.webp" alt="linoor"
							style={{ height: '100%', width: 'auto', maxHeight: '100%' }} />
					</div>
				</div>
			</div>
		</OwlCarousel>
	</section>
	<style>
		{
			` @media (max-width: 1200px) {
				.responsive-hide-right {
					display: none !important;
				}
			}

			`
		}
	</style>
</Suspense>
);
};

export default Slider2;