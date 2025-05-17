import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import WoodBerjer from "../Components/berjers/WoodBerjer";

function WoodBerjerPage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.bergere")} backgroundImage="assets/images/banner/16.webp" />    
    <WoodBerjer />
    <Footer />
</>
);
}

export default WoodBerjerPage;