import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import BrahmaKanepe from "../Components/sofas/BrahmaKanepe";

function BrahmaKanepePage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("BRAHMA KANEPE")} backgroundImage="assets/images/banner/19.webp" />
    <BrahmaKanepe />
    <Footer />
</>
);
}

export default BrahmaKanepePage;