import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import QuestionPage from "../pages/QuestionPage";
import ContactusPage from "../pages/ContactusPage";
import SidebarPage from "../pages/SidebarPage";
import Slider2Page from "../pages/Slider2Page";
import ProjectsPage from "../pages/ProjectsPage";
import ThreeBoxPage from "../pages/ThreeBoxPage";
import CommentsPage from "../pages/CommentsPage";
import WebDesignPage from "../pages/WebDesignPage";
import ECommercePage from "../pages/ECommercePage";
import DomainHostingPage from "../pages/DomainHostingPage";
import HostingPage from "../pages/HostingPage";
import DomainSSLPage from "../pages/DomainSSLPage";
import CorporateEmailPage from "../pages/CorporateEmailPage";
import SEOPage from "../pages/SEOPage";
import LogoDesignPage from "../pages/LogoDesignPage";
import BusinessProfilePage from "../pages/BusinessProfilePage";
import GoogleMapsPage from "../pages/GoogleMapsPage";
import MilasPage from "../pages/MilasPage";
import CatalogPage from "../pages/CatalogPage";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route exact path="/catalog" element={<CatalogPage />} />
      <Route exact path="/web-design" element={<WebDesignPage />} />
      <Route exact path="/milas" element={<MilasPage />} />
      <Route exact path="/e-ticaret" element={<ECommercePage />} />
      <Route exact path="/domain-hosting" element={<DomainHostingPage />} />
      <Route exact path="/hosting" element={<HostingPage />} />
      <Route exact path="/domain-ssl" element={<DomainSSLPage />} />
      <Route exact path="/kurumsal-e-posta" element={<CorporateEmailPage />} />
      <Route exact path="/seo-optimizasyon" element={<SEOPage />} />
      <Route exact path="/logo-tasarimi" element={<LogoDesignPage />} />
      <Route exact path="/isletme-profili" element={<BusinessProfilePage />} />
      <Route exact path="/google-maps" element={<GoogleMapsPage />} />
      <Route exact path="/Contactus" element={<ContactusPage />} />
      <Route exact path="/Comments" element={<CommentsPage />} />
      <Route exact path="/Projects" element={<ProjectsPage />} />
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