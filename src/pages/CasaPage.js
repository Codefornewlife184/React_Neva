import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import Casa from "../Components/armchair/Casa";

function CasaPage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.armchairs")} backgroundImage="assets/images/banner/19.webp" />
    <Casa />
    <Footer />
</>
);
}

export default CasaPage;