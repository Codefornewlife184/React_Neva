/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/common/Footer";
import Header from "./Components/common/Header";
import CustomRoutes from "./router/CustomRoutes";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
      localStorage.setItem('i18nextLng', lng);
    });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Header changeLanguage={changeLanguage} />
        <CustomRoutes />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
