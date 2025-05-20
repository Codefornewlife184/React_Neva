/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import emailjs from "emailjs-com";
/* import Spacer from "../common/Spacer"; */
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import ContactThree from "./ContactThree";
import ContactMap from "./ContactMap";

function Contact() {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  // eslint-disable-next-line no-unused-vars
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vzhem5v",
        "template_q6tt0ps",
        e.target,
        "vHITrMwYs-OEE439x"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(t("Email başarıyla gönderildi!"));
        },
        (error) => {
          console.log(error.text);
          alert(t("Email gönderilirken bir hata oluştu!"));
        }
      );
    e.target.reset();
  }

  return (
    <>
      <ContactForm />
      <ContactThree />
      <ContactMap />
    </>
  );
}

export default Contact;
