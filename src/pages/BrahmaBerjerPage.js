import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import BrahmaBerjer from "../Components/berjers/BrahmaBerjer";

function BrahmaBerjerPage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.bergere")} backgroundImage="assets/images/banner/19.webp" />    
    <BrahmaBerjer />
    <Footer />
</>
);
}

export default BrahmaBerjerPage;