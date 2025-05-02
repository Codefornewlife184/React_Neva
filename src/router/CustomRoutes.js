import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import QuestionPage from "../pages/QuestionPage";
import ContactusPage from "../pages/ContactusPage";
import SidebarPage from "../pages/SidebarPage";
import Slider2Page from "../pages/Slider2Page";
import ThreeBoxPage from "../pages/ThreeBoxPage";
import CommentsPage from "../pages/CommentsPage";
import MilasPage from "../pages/MilasPage";
import CatalogPage from "../pages/CatalogPage";
import CollectionsPage from "../pages/CollectionsPage";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route exact path="/catalog" element={<CatalogPage />} />
      <Route exact path="/milas" element={<MilasPage />} />
      <Route exact path="/Contactus" element={<ContactusPage />} />
      <Route exact path="/Comments" element={<CommentsPage />} />
      <Route exact path="/Collections" element={<CollectionsPage />} />
      <Route exact path="/ThreeBox" element={<ThreeBoxPage />} />
      <Route exact path="/Sidebar" element={<SidebarPage />} />
      <Route exact path="/Question" element={<QuestionPage />} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Slider2" element={<Slider2Page />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default CustomRoutes;