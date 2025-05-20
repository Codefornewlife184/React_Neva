import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import BrahmaKose from "../Components/cornerteam/BrahmaKose";

function BrahmaKosePage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.cornerSets")} backgroundImage="assets/images/banner/16.webp" />   
    <BrahmaKose />
    <Footer />
</>
);
}

export default BrahmaKosePage;