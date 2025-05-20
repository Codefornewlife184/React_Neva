import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import Turkuaz from "../Components/armchair/Turkuaz";

function TurkuazPage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.armchairs")} backgroundImage="assets/images/banner/19.webp" />    
    <Turkuaz />
    <Footer />
</>
);
}

export default TurkuazPage;