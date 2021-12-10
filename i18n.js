import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en_view from './locales/en/view.json'
import ja_view from './locales/ja/view.json'

// import Backend from 'i18next-http-backend';
// import Backend from 'i18next-fs-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init
const resources = {
    en: {
        view: en_view,
        translation: {
        }    
    },
    ja: {
        view: ja_view,
        translation: {
        }
    }
  };
/* 
const resources = {
    en: {
      translation: {
          view: {
              "title": "Welcome to react using react-i18next",
              "description": {
                "part1": "To get started, edit <1>src/App.js</1> and save to reload.",
                "part2": "Switch language between english and german using buttons above."
              }
          }
      }    
    },
    ja: {
      translation: {
          view: {
              "title": "react-i18nextを使ったreactへようこそ",
              "description": {
                "part1": "始めるには<1>src/App.js</1>を編集しましょう。保存するとリロードされます。",
                "part2": "Switch language between english and german using buttons above."
              }
          }
      }
    }
  };
 */
i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
//   .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
//   .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'ja',
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;