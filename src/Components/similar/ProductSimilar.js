import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
/* import $ from "jquery"; */
import "owl.carousel";
import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-bootstrap";
import ProductOne from "../product/ProductOne";
import data from "../../data/product.json";

function ProductSimilar() {
  const { t } = useTranslation();

  return (
    <>
      <section class="product mt--100">
        <div class="container">
          <div class="section-title text-center">
            <div class="section-title__triangle">
              <img
                src="assets/images/favicons/icon.ico"
                alt="icon"
                aria-label="icon"
              />
            </div>
            <h5 className="section-title__tagline">
              {t("YENİDÜNYA ENDÜSTRİYEL TEDARİK")}
            </h5>
            <h2 class="section-title__title">{t("BENZER ÜRÜNLER")}</h2>
          </div>
          <div class="nisoz-owl__dots nisoz-owl__carousel ">
            <Row>
              {data.map((product) => {
                const { picture, id, nav, price } = product;
                const title = t(product.title);

                return (
                  <Col md={3} key={id} className="text-center mb-5">
                    <ProductOne
                      picture={picture}
                      title={title}
                      price={price}
                      nav={nav}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductSimilar;
