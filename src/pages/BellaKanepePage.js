import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import BellaKanepe from "../Components/sofas/BellaKanepe";

function BellaKanepePage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.sofas")} backgroundImage="assets/images/banner/21.webp" />
    <BellaKanepe />
    <Footer />
</>
);
}

export default BellaKanepePage;