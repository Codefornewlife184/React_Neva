import React from "react";
import Question from "../Components/question/Question";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";

function QuestionPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("SIKÇA SORULAN SORULAR")}/>
      <Question />
    </>
  );
}

export default QuestionPage;
