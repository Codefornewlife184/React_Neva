import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// Dil dosyalarını içe aktarın
import translationEN from "./locales/en/en.json";
import translationTR from "./locales/tr/tr.json";

// Dil dosyalarını tanımlayın
const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || "tr", // Varsayılan dil
    fallbackLng: "tr", // Yedek dil
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    react: {
      useSuspense: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
    },
    initImmediate: false
  });

export default i18n;
