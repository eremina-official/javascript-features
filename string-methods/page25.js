console.log('----- isString -----');

function isString(input) {
  const result = (typeof input === 'string') 
    ? true
    : false;

  return result;
}


console.log('----- isBlank -----');

function isBlank(string) {
  const result = (!string.charCodeAt(0))
    ? false
    : true;

  return result;
}


console.log('----- parametrizeString -----');

function parametrizeString(string) {
  const result = string.toLowerCase()
    .split(' ')
    .filter(word => { if (word) { return word } })
    .join('-');
    
  return result;
}

console.log('----- capitalizeString -----');

function capitalizeString(string) {
  const result = string.split(' ')
    .map(word => {
      const firstLetter = word.slice(0, 1).
        toUpperCase();
      const restLetters = word.slice(1);
      return firstLetter.concat(restLetters);
    })
    .join(' ');

  return result;
}


export { isString, 
         isBlank, 
         parametrizeString, 
         capitalizeString };
