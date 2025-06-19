import en from '../locales/en.json';
import es from '../locales/es.json';
import { useLocation } from 'react-router-dom';

const translations = { en, es };

export function useTranslation() {
  const location = useLocation();
  const lang = location.pathname.startsWith('/en') ? 'en' : 'es';

  console.log(location.pathname, lang);

  return (key: keyof typeof en) => translations[lang][key] || key;
}
