import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Kose from "../Components/collections/Kose";
import Footer from "../Components/common/Footer";

function KosePage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("KÖŞE TAKIMI")} backgroundImage="assets/images/banner/9.webp" />
    <Kose />
    <Footer />
</>
);
}

export default KosePage;