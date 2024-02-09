import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import CommonEl from './locales/common/el.json';
import CommonEn from './locales/common/en.json';

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage', 'cookie', 'querystring', 'navigator'],
      lookupLocalStorage: 'lang',
      lookupCookie: 'lang',
      lookupQuerystring: 'lang',
      caches: ['localStorage', 'cookie'],
    },
    react: {
      bindI18n: 'loaded languageChanged',
      bindI18nStore: 'added',
      useSuspense: true,
    },
    ns: ['common'],
    resources: {
      en: {
        common: CommonEn,
      },
      el: {
        common: CommonEl,
      },
    },
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
