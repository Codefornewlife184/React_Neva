import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import Wood from "../Components/armchair/Wood";

function WoodPage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.armchairs")} backgroundImage="assets/images/banner/16.webp" /> 
    <Wood />
    <Footer />
</>
);
}

export default WoodPage;