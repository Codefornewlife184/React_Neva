import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Sidebar from "../Components/sidebar/Sidebar";

// import Spacer2 from "../Components/common/Spacer2";

function SidebarPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("KATEGORİLER")} />
      <Sidebar />
    </>
  );
}

export default SidebarPage;