import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import BossKanepe from "../Components/sofas/BossKanepe";

function BossKanepePage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.sofas")} backgroundImage="assets/images/banner/19.webp" />  
    <BossKanepe />
    <Footer />
</>
);
}

export default BossKanepePage;