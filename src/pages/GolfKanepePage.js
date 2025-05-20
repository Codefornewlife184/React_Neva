import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import GolfKanepe from "../Components/sofas/GolfKanepe";

function GolfKanepePage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.sofas")} backgroundImage="assets/images/banner/21.webp" />
    <GolfKanepe />
    <Footer />
</>
);
}

export default GolfKanepePage; 