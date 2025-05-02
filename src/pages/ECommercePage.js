import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import ECommerce from "../Components/services/ECommerce";

function ECommercePage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("E-TİCARET SİTELERİ")} />
      <ECommerce/>
    </>
  );
}

export default ECommercePage; 