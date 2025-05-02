import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import GoogleMaps from "../Components/services/GoogleMaps";

function GoogleMapsPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("GOOGLE HARİTA KAYDI")} />
      <GoogleMaps/>
    </>
  );
}

export default GoogleMapsPage; 