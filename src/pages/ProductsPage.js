import React from "react";
import Products from "../Components/products/Products";
import PageHeader1 from "../Components/common/PageHeader1";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";

function ProductsPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader1 title={t("pages.products")} backgroundImage={"/assets/images/banner/20.webp"} />
      <Products />
      <Footer />
    </>
  );
}

export default ProductsPage; 