import React from "react";
import Contact from "../Components/contact/Contact";
import PageHeader1 from "../Components/common/PageHeader1";
import { useTranslation } from "react-i18next";
import Footer from "../Components/common/Footer";

function ContactPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader1 title={t("pages.contact")} backgroundImage={"/assets/images/banner/19.webp"} />
      <Contact />
      <Footer />
    </>
  );
}

export default ContactPage;
