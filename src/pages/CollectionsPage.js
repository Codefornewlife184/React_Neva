import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Collections from "../Components/collections/Collections";
import Footer from "../Components/common/Footer";

function CollectionsPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("pages.collections")} backgroundImage={"assets/images/banner/21.webp"} />
      <Collections />
      <Footer />
    </>
  );
}

export default CollectionsPage;
