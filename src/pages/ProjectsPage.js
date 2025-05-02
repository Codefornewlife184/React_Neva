import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Projects from "../Components/project/projects";
// import Spacer2 from "../Components/common/Spacer2";

function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("KOLEKSİYONLARIMIZ")} backgroundImage={"/assets/images/products/uzun-2.png"} />
      <Projects />
    </>
  );
}

export default ProjectsPage;
