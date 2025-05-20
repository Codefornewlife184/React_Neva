import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import Odessa from "../Components/armchair/Odessa";

function OdessaPage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.armchairs")} backgroundImage="assets/images/banner/16.webp" /> 
    <Odessa />
    <Footer />
</>
);
}

export default OdessaPage;