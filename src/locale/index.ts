import type { BackendModule } from 'i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const LazyImportPlugin: BackendModule = {
  type: 'backend',
  init() {
    // TODO
  },
  read(language, namespace, callback) {
    import(`./lang/${language}/${namespace || 'translation'}.json`)
      .then((obj: any) => {
        callback(null, obj);
      })
      .catch(err => {
        callback(err, null);
      });
  },
  save() {
    // TODO
  },

  create() {
    /* save the missing translation */
  },
};

i18n
  .use(LazyImportPlugin)
  .use(initReactI18next)
  .init({
    lng: 'pt',
    fallbackLng: 'pt',
    fallbackNS: ['translation'],
    saveMissing: true,
    missingKeyHandler(lng, ns, key, fallbackValue) {
      console.info(`Missing translate ${lng}:${ns}:${key}`);
    },
  });
