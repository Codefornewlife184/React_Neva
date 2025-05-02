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

  const sliderItems = [
    {
      bgImage: 'assets/images/background/slider-1-1.webp',
      title: 'Growth-driven digital agencies for businesses',
      layerImage: 'assets/images/background/slider-1-1.webp',
      shapeImage: 'assets/images/background/slider-1-1.webp'
    },
    {
      bgImage: 'assets/images/background/slider-1-1.webp',
      title: 'Growth-driven digital agencies for businesses',
      layerImage: 'assets/images/background/slider-1-1.webp',
      shapeImage: 'assets/images/background/slider-1-1.webp'
    },
    {
      bgImage: 'assets/images/background/slider-1-1.webp',
      title: 'Growth-driven digital agencies for businesses',
      layerImage: 'assets/images/background/slider-1-1.webp',
      shapeImage: 'assets/images/background/slider-1-1.webp'
    }
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="slider-thirteen">
        <OwlCarousel className="banner-carousel owl-theme owl-carousel" {...options}>
          {sliderItems.map((item, index) => (
            <div key={index} className="item">
              <div className="slider-thirteen__item">
                <div 
                  className="slider-thirteen__bg" 
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                ></div>
                <div className="container">
                  <div className="slider-thirteen__content">
                    <h3 className="slider-thirteen__title">
                      {item.title.split(' ').map((word, i) => (
                        <React.Fragment key={i}>
                          {word}
                          <br />
                        </React.Fragment>
                      ))}
                    </h3>
                    <div className="slider-thirteen__btn">
                      <Link to="/contact" className="thm-btn-thirteen">Discover More</Link>
                    </div>
                  </div>
                </div>
                <div className="slider-thirteen__layer">
                  <img src={item.layerImage} alt="slider" />
                </div>
                <div 
                  className="slider-thirteen__shape-one" 
                  style={{ backgroundImage: `url(${item.shapeImage})` }}
                ></div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </section>
    </Suspense>
  );
};

export default Slider2;
