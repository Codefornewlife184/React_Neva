import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Milas from "../Components/collections/Milas";
import Footer from "../Components/common/Footer";

function MilasPage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("MİLAS KOLTUK TAKIMI")} backgroundImage="assets/images/background/111.png" />
    <Milas />
    <Footer />
</>
);
}

export default MilasPage;