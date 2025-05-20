import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import TurkuazKanepe from "../Components/sofas/TurkuazKanepe";

function TurkuazKanepePage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.sofas")} backgroundImage="assets/images/banner/21.webp" />
    <TurkuazKanepe />
    <Footer />
</>
);
}

export default TurkuazKanepePage;