import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import PianoKanepe from "../Components/sofas/PianoKanepe";

function PianoKanepePage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.sofas")} backgroundImage="assets/images/banner/22.webp" />
    <PianoKanepe />
    <Footer />
</>
);
}

export default PianoKanepePage;