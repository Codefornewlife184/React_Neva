import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";
import Zen from "../Components/armchair/Zen";

function ZenPage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.armchairs")} backgroundImage="assets/images/banner/16.webp" />
    <Zen />
    <Footer />
</>
);
}

export default ZenPage;