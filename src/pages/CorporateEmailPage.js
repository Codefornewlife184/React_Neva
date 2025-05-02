import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import CorporateEmail from "../Components/services/CorporateEmail";

function CorporateEmailPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("KURUMSAL E-POSTA")} />
      <CorporateEmail/>
    </>
  );
}

export default CorporateEmailPage; 