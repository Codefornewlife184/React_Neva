import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import Brahma from "../Components/armchair/Brahma";

function BrahmaPage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.armchairs")} backgroundImage="assets/images/banner/19.webp" /> 
    <Brahma />
    <Footer />
</>
);
}

export default BrahmaPage;