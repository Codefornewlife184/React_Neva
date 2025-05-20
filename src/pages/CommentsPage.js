import React from "react";
import { useTranslation } from "react-i18next";
import Comments from "../Components/comments/Comments";
// import Spacer2 from "../Components/common/Spacer2";

function CommentsPage() {
  const { t } = useTranslation();
  return (
    <>
      {/* <PageHeader title={t("YORUMLAR")} /> */}
      <Comments />
    </>
  );
}

export default CommentsPage;
