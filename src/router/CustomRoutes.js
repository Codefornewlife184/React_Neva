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
import CatalogPage from "../pages/CatalogPage";
import CollectionsPage from "../pages/CollectionsPage";
import KoltukPage from "../pages/KoltukPage";
import KanepelerPage from "../pages/KanepelerPage";
import KosePage from "../pages/KosePage";
import BellaPage from "../pages/BellaPage";
import BossPage from "../pages/BossPage";
import BrahmaPage from "../pages/BrahmaPage";
import CasaPage from "../pages/CasaPage";
import PianoPage from "../pages/PianoPage";
import GolfPage from "../pages/GolfPage";
import OdessaPage from "../pages/OdessaPage";
import TurkuazPage from "../pages/TurkuazPage";
import ZenPage from "../pages/ZenPage";
import CasaKosePage from "../pages/CasaKosePage";
import CasaRelaxKosePage from "../pages/CasaRelaxKosePage";
import BrahmaKosePage from "../pages/BrahmaKosePage";
import GolfKosePage from "../pages/GolfKosePage";
import CasaKanepePage from "../pages/CasaKanepePage";
import BossKanepePage from "../pages/BossKanepePage";
import BrahmaKanepePage from "../pages/BrahmaKanepePage";
import GolfKanepePage from "../pages/GolfKanepePage";
import OdessaKanepePage from "../pages/OdessaKanepePage";
import PianoKanepePage from "../pages/PianoKanepePage";
import TurkuazKanepePage from "../pages/TurkuazKanepePage";
import BellaKanepePage from "../pages/BellaKanepePage";
import BerjerlerPage from "../pages/BerjerlerPage";
import CasaBerjerPage from "../pages/CasaBerjerPage";
import BossBerjerPage from "../pages/BossBerjerPage";
import BrahmaBerjerPage from "../pages/BrahmaBerjerPage";
import GolfBerjerPage from "../pages/GolfBerjerPage";
import OdessaBerjerPage from "../pages/OdessaBerjerPage";
import PianoBerjerPage from "../pages/PianoberjerPage";
import TurkuazBerjerPage from "../pages/TurkuazBerjerPage";
import BellaBerjerPage from "../pages/BellaBerjerPage";
import ZenBerjerPage from "../pages/ZenBerjerPage";
import ZenKanepePage from "../pages/ZenKanepePage";
import WoodPage from "../pages/WoodPage";
import WoodKanepePage from "../pages/WoodKanepePage";
import WoodBerjerPage from "../pages/WoodBerjerPage";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route exact path="/catalog" element={<CatalogPage />} />
      <Route exact path="/bella-berjer" element={<BellaBerjerPage />} />
      <Route exact path="/casa-berjer" element={<CasaBerjerPage />} />
      <Route exact path="/boss-berjer" element={<BossBerjerPage />} />
      <Route exact path="/brahma-berjer" element={<BrahmaBerjerPage />} />
      <Route exact path="/golf-berjer" element={<GolfBerjerPage />} />
      <Route exact path="/odessa-berjer" element={<OdessaBerjerPage />} />
      <Route exact path="/piano-berjer" element={<PianoBerjerPage />} />
      <Route exact path="/turkuaz-berjer" element={<TurkuazBerjerPage />} />
      <Route exact path="/zen-berjer" element={<ZenBerjerPage />} />
      <Route exact path="/wood-berjer" element={<WoodBerjerPage />} />
      <Route exact path="/casa-kanepe" element={<CasaKanepePage />} />
      <Route exact path="/boss-kanepe" element={<BossKanepePage />} />
      <Route exact path="/brahma-kanepe" element={<BrahmaKanepePage />} />
      <Route exact path="/bella-kanepe" element={<BellaKanepePage />} />
      <Route exact path="/golf-kanepe" element={<GolfKanepePage />} />
      <Route exact path="/odessa-kanepe" element={<OdessaKanepePage />} />
      <Route exact path="/piano-kanepe" element={<PianoKanepePage />} />
      <Route exact path="/turkuaz-kanepe" element={<TurkuazKanepePage />} />
      <Route exact path="/zen-kanepe" element={<ZenKanepePage />} />
      <Route exact path="/wood-kanepe" element={<WoodKanepePage />} />
      <Route exact path="/casa-relax-kose" element={<CasaRelaxKosePage />} />
      <Route exact path="/brahma-kose" element={<BrahmaKosePage />} />
      <Route exact path="/golf-kose" element={<GolfKosePage />} />
      <Route exact path="/casa-kose" element={<CasaKosePage />} />
      <Route exact path="/bella" element={<BellaPage />} />
      <Route exact path="/boss" element={<BossPage />} />
      <Route exact path="/brahma" element={<BrahmaPage />} />
      <Route exact path="/casa" element={<CasaPage />} />
      <Route exact path="/golf" element={<GolfPage />} />
      <Route exact path="/odessa" element={<OdessaPage />} />
      <Route exact path="/piano" element={<PianoPage />} />
      <Route exact path="/turkuaz" element={<TurkuazPage />} />
      <Route exact path="/zen" element={<ZenPage />} />
      <Route exact path="/wood" element={<WoodPage />} />
      <Route exact path="/berjerler" element={<BerjerlerPage />} />
      <Route exact path="/koltuk" element={<KoltukPage />} />
      <Route exact path="/kanepeler" element={<KanepelerPage />} />
      <Route exact path="/kose" element={<KosePage />} />
      <Route exact path="/contactus" element={<ContactusPage />} />
      <Route exact path="/comments" element={<CommentsPage />} />
      <Route exact path="/collections" element={<CollectionsPage />} />
      <Route exact path="/threebox" element={<ThreeBoxPage />} />
      <Route exact path="/sidebar" element={<SidebarPage />} />
      <Route exact path="/question" element={<QuestionPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/slider2" element={<Slider2Page />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default CustomRoutes;