import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import Berjerler from "../Components/collections/Berjerler";

function BerjerlerPage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.bergere")} backgroundImage="assets/images/banner/22.webp" /> 
    <Berjerler />
    <Footer />
</>
);
}

export default BerjerlerPage;