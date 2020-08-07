import synonyms from '../synonyms';

export const getSynonyms = word => {
  let words = [];
  synonyms.forEach(s => {
    if(s.some(r => r.startsWith(word))) {
      words = words.concat(s);
    }
  });

  return words;
};

export const getMultiSynonyms = wordsArray => {
  let words = [];
  wordsArray.forEach(word => {
    words = words.concat(getSynonyms(word));
  });

  return words
};
