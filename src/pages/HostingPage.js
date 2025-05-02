import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Hosting from "../Components/services/Hosting";

function HostingPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("HOSTING PAKETLERİ")} />
      <Hosting/>
    </>
  );
}

export default HostingPage; 