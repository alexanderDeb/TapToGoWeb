import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, es } from "./translation/index.ts";

const resources = {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  };
  
  i18n.use(initReactI18next).init({
    fallbackLng: "en",
    compatibilityJSON: "v3",
    lng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources,
    react: {
      useSuspense: false,
    },
  });
  
  export default i18n;