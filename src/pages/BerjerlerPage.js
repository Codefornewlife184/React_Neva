import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import Berjerler from "../Components/collections/Berjerler";

function BerjerlerPage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("BERJERLER")} backgroundImage="assets/images/banner/16.webp" />
    <Berjerler />
    <Footer />
</>
);
}

export default BerjerlerPage;