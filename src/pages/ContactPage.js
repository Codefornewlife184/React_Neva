import React from "react";
import Contact from "../Components/contact/Contact";
import { t } from "i18next";
import PageHeader1 from "../Components/common/PageHeader1";
import Footer from "../Components/common/Footer";

function ContactPage() {
  return (
    <>
    <PageHeader1 title={t("İLETİŞİM")} backgroundImage={"/assets/images/background/111.png"}/>
      <Contact /> 
      <Footer /> 
    </>
  );
}

export default ContactPage;
