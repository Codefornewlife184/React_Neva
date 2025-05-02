import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import DomainHosting from "../Components/services/DomainHosting";

function DomainHostingPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("DOMAIN & HOSTING")} />
      <DomainHosting/>
    </>
  );
}

export default DomainHostingPage; 