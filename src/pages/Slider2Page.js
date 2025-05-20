import React from "react";
import { useTranslation } from "react-i18next";
import Slider2 from "../Components/common/Slider2";
// import Spacer2 from "../Components/common/Spacer2";

function Slider2Page() {
  const { t } = useTranslation();
  return (
    <>
      <Slider2 />
    </>
  );
}

export default Slider2Page;
