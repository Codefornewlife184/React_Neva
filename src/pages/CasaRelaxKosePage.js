import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import CasaRelaxKose from "../Components/cornerteam/CasaRelaxKose";

function CasaRelaxKosePage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.cornerSets")} backgroundImage="assets/images/banner/16.webp" />   
    <CasaRelaxKose />
    <Footer />
</>
);
}

export default CasaRelaxKosePage;