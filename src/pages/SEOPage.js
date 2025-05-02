import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import SEO from "../Components/services/SEO";

function SEOPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("SEO OPTİMİZASYONU")} />
      <SEO/>
    </>
  );
}

export default SEOPage; 