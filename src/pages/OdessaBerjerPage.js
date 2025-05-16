import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import OdessaBerjer from "../Components/berjers/OdessaBerjer";

function OdessaBerjerPage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.bergere")} backgroundImage="assets/images/banner/16.webp" />
    <OdessaBerjer />
    <Footer />
</>
);
}

export default OdessaBerjerPage;