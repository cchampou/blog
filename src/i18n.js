import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../lang/en';
import fr from '../lang/fr';

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: typeof document !== 'undefined' ? document.documentElement.lang : "fr",
    // keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
