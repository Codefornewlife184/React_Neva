import React from "react";
import About from "../Components/about/About";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import PageHeader1 from "../Components/common/PageHeader1";
import Footer from "../Components/common/Footer";
import TopBar from "../Components/common/TopBar";

function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
    {/* <TopBar style={{marginBottom:"30px"}}/> */}
      <PageHeader1 title={t("pages.about")} backgroundImage={"/assets/images/banner/19.webp"} />
      <About />
      <Footer />
    </>
  );
}

export default AboutPage;
