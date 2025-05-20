import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import ZenKanepe from "../Components/sofas/ZenKanepe";

function ZenKanepePage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.sofas")} backgroundImage="assets/images/banner/16.webp" />  
    <ZenKanepe />
    <Footer />
</>
);
}

export default ZenKanepePage;