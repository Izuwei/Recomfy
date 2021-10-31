import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import languageDetector from "./LangDetector";

import english from "../constants/lang/English.json";
import czech from "../constants/lang/Czech.json";
import turkish from "../constants/lang/Turkish.json";

/** i18n Config */
i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: english,
      cz: czech,
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
