import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import CasaKanepe from "../Components/sofas/CasaKanepe";

function CasaKanepePage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.sofas")} backgroundImage="assets/images/banner/19.webp" />  
    <CasaKanepe />
    <Footer />
</>
);
}

export default CasaKanepePage;