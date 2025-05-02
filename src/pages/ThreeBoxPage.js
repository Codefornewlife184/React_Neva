/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import ThreeBox from "../Components/common/ThreeBox";
// import Spacer2 from "../Components/common/Spacer2";

function ThreeBoxPage() {
  const { t } = useTranslation();
  return (
    <>
      <ThreeBox />
    </>
  );
}

export default ThreeBoxPage;
