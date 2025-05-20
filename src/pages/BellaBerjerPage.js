import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import BellaBerjer from "../Components/berjers/BellaBerjer";

function BellaBerjerPage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.bergere")} backgroundImage="assets/images/banner/19.webp" />
    <BellaBerjer />
    <Footer />
</>
);
}

export default BellaBerjerPage;