import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Collections from "../Components/collections/Collections";
import Footer from "../Components/common/Footer";

function CollectionsPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("KOLEKSİYONLARIMIZ")} backgroundImage={"assets/images/background/3.png"} />
      <Collections />
      <Footer />
    </>
  );
}

export default CollectionsPage;
