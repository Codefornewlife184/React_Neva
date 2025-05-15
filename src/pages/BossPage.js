import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import Boss from "../Components/armchair/Boss";

function BossPage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("BOSS KOLTUK TAKIMI")} backgroundImage="assets/images/banner/19.webp" />
    <Boss />
    <Footer />
</>
);
}

export default BossPage;