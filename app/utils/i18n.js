import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import languageDetector from "./langDetector";

import english from "../constants/lang/english.json";
import czech from "../constants/lang/czech.json";
import german from "../constants/lang/german.json";
import turkish from "../constants/lang/turkish.json";

/** i18n Config */
i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: english,
      cz: czech,
      de: german,
      tr: turkish,
    },
    keySeparator: false,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: "v3",
    debug: false,
  });

export default i18next;
