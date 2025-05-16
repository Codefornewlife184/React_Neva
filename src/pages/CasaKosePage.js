import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import CasaKose from "../Components/cornerteam/CasaKose";

function CasaKosePage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.cornerSets")} backgroundImage="assets/images/banner/16.webp" /> 
    <CasaKose />
    <Footer />
</>
);
}

export default CasaKosePage;