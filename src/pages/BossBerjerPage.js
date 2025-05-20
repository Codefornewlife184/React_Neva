import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import BossBerjer from "../Components/berjers/BossBerjer";

function BossBerjerPage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.bergere")} backgroundImage="assets/images/banner/19.webp" />  
    <BossBerjer />
    <Footer />
</>
);
}

export default BossBerjerPage;