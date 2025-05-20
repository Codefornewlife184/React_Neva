import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/product.json";
import SidebarCategory from "./SidebarCategory";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  return (
    <>
      <SRLWrapper>
        <section className="blog-details section-space p-5">
          <div className="container-fluid">
            <div className="row gutter-y-60">
              <div className="col-lg-3">
                <div className="sidebar">
                  <aside className="widget-area">
                    <div className="sidebar__categories-wrapper sidebar__single">
                      <h4 className="sidebar__title">KATEGORİLER</h4>
                      <SidebarCategory />
                    </div>
                  </aside>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row">
                  {data.map((product, index) => (
                    <div
                      key={index}
                      className="col-xl-4 col-lg-4 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay={`${index * 200}ms`}
                    >
                      <div className="product__item">
                        <div className="product__item__image">
                          <img src={product.picture} alt={product.title} />
                        </div>
                        <div className="product__item__content">
                          <div className="boskery-ratings">
                            {[1, 2, 3, 4, 5].map((star, starIndex) => (
                              <span
                                key={starIndex}
                                className="icon-star"
                              ></span>
                            ))}
                          </div>
                          <h4 className="product__item__title">
                            <Link to={product.nav} onClick={scrollToTop}>{product.title}</Link>
                          </h4>
                          <div className="product__item__price"></div>
                          <Link
                            to={product.nav}
                            className="boskery-btn product__item__link" onClick={scrollToTop}
                          >
                            <span className="boskery-btn__hover"></span>
                            <span className="boskery-btn__hover"></span>
                            <span className="boskery-btn__hover"></span>
                            <span className="boskery-btn__hover"></span>
                            <span className="boskery-btn__hover"></span>
                            <span className="boskery-btn__hover"></span>
                            <span className="boskery-btn__text">
                              {product.price}
                            </span>
                            <i className="icon-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </SRLWrapper>
    </>
  );
};

export default Sidebar;
