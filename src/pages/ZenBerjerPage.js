import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import ZenBerjer from "../Components/berjers/ZenBerjer";

function ZenBerjerPage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.bergere")} backgroundImage="assets/images/banner/16.webp" />    
    <ZenBerjer />
    <Footer />
</>
);
}

export default ZenBerjerPage;