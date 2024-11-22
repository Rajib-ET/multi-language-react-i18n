import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enLang from "./locals/en/en.json";
import npLang from "./locals/np/np.json";

i18n.use(LanguageDetector).use(initReactI18next).init({
    lng: 'en',
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation:  enLang,
      },
      np: {
        translation: npLang,
      }
    }
  });

export default i18n;