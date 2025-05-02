import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import WebDesign from "../Components/services/WebDesign";

function WebDesignPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("WEB TASARIM")} />
      <WebDesign/>
    </>
  );
}

export default WebDesignPage;
