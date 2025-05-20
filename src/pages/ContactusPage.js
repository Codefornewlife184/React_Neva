/* eslint-disable no-unused-vars */
import React from "react";
import Contactus from "../Components/contact/Contactus";
import { useTranslation } from "react-i18next";

function ContactusPage() {
  const { t } = useTranslation();
  return (
    <>
      <Contactus />
    </>
  );
}

export default ContactusPage;
