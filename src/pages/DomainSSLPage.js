import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import DomainSSL from "../Components/services/DomainSSL";

function DomainSSLPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("SSL SERTİFİKASI")} />
      <DomainSSL/>
    </>
  );
}

export default DomainSSLPage; 