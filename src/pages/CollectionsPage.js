import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Collections from "../Components/collections.js/collections";
import Footer from "../Components/common/Footer";
// import Spacer2 from "../Components/common/Spacer2";

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
