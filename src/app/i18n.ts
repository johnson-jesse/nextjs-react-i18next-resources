import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

import ent from "../locales/en/translation.json";
import det from "../locales/de/translation.json";

const resources: Resource = {
  en: { translation: ent },
  de: { translation: det },
};

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: false,
  saveMissing: true,
  saveMissingTo: "current",

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },

  resources,

  backend: {
    addPath: "/i18n/missing/key/{{lng}}/{{ns}}",
  },
});

export default i18n;
