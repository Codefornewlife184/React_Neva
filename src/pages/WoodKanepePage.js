import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import WoodKanepe from "../Components/sofas/WoodKanepe";

function WoodKanepePage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.sofas")} backgroundImage="assets/images/banner/16.webp" />  
    <WoodKanepe />
    <Footer />
</>
);
}

export default WoodKanepePage;