import englishLocale from './en.json'; 
import teluguLocale from './te.json';

const getLabels = lang => {
  switch(lang) {
    case 'en': return englishLocale;
    case 'te': return teluguLocale;
    default:  return englishLocale;
  }
}

export default getLabels;
