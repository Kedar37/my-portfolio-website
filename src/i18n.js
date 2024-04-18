// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from './locales/en.json';
import translationJP from './locales/ja.json';

// Create an object with the resources
const resources = {
  en: {
    translation: translationEN
  },
  ja: {
    translation: translationJP
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Set the default language to English
    fallbackLng: 'en', // Use English if translation for the selected language is not available
    interpolation: {
      escapeValue: false // React is already safe from XSS attacks
    }
  });

export default i18n;