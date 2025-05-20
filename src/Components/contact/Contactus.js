/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
// Contactus.js
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

function Contactus() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  return (
    <>
      <section class="call-to-section mt-5">
        <div class="auto-container">
          <div class="inner clearfix">
            <div class="shape-1 wow slideInRight" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
            <div class="shape-2 wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
            <h3 class="text-white">{t("PROJENİZİ BAŞLATMAK İSTERSENİZ!")}</h3>
            <div class="link-box">
              <a class="theme-btn btn-style-two" href="https://wa.me/905456136819" target="_blank">
                <i class="btn-curve"></i>
                <span class="btn-title">{t("BİZİMLE İLETİŞİME GEÇİNİZ!")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactus;
