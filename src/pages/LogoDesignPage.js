import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import LogoDesign from "../Components/services/LogoDesign";

function LogoDesignPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("LOGO ÇALIŞMASI")} />
      <LogoDesign/>
    </>
  );
}

export default LogoDesignPage; 