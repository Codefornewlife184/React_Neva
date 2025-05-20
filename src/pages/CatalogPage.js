import React from "react";
import { useTranslation } from "react-i18next";
import Catalog from "../Components/catalog/Catalog";

function CatalogPage() {
  const { t } = useTranslation();
  return (
    <>
      <Catalog />
    </>
  );
}

export default CatalogPage;
