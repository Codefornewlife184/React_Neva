import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import BusinessProfile from "../Components/services/BusinessProfile";

function BusinessProfilePage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("İŞLETME PROFİLİ")} />
      <BusinessProfile/>
    </>
  );
}

export default BusinessProfilePage; 