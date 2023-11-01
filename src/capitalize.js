const capitalize = (word) => {
  if (word === '') return '';
  const firstLetter = word[0].toUpperCase();
  const restWord = word.slice(1);
  const result = `${firstLetter}${restWord}`;
  return result;
};

export default capitalize;
