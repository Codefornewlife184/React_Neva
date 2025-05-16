import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Kanepeler from "../Components/collections/Kanepeler";
import Footer from "../Components/common/Footer";

function KanepelerPage() {
const { t } = useTranslation();
return (
<>
    <PageHeader title={t("pages.sofas")} backgroundImage="assets/images/banner/16.webp" />
    <Kanepeler />
    <Footer />
</>
);
}

export default KanepelerPage;