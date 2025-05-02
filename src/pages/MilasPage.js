import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Milas from "../Components/collections.js/Milas";

function MilasPage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("MİLAS KOLTUK TAKIMI")} subtitle={t("MİLAS KOLTUK TAKIMI")} backgroundImage="assets/images/products/1702.png" />
    <Milas />
</>
);
}

export default MilasPage;