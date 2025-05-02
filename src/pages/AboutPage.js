import React from "react";
import About from "../Components/about/About";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import PageHeader1 from "../Components/common/PageHeader1";

function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader1 title={t("HAKKIMIZDA")} backgroundImage={"/assets/images/background/breadcrumbs.png"}/>
      <About />
    </>
  );
}

export default AboutPage;
