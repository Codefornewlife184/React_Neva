import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import OdessaKanepe from "../Components/sofas/OdessaKanepe";

function OdessaKanepePage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.sofas")} backgroundImage="assets/images/banner/16.webp" />
    <OdessaKanepe />
    <Footer />
</>
);
}

export default OdessaKanepePage;