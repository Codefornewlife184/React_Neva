import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import Bella from "../Components/armchair/Bella";

function BellaPage() {
const { t } = useTranslation();
return (
<>
    <PageHeader 
        title={t("bella.title")} 
        backgroundImage="assets/images/banner/19.webp" 
    />
    <Bella />
    <Footer />
</>
);
}

export default BellaPage;