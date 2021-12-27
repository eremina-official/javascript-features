console.log('----- isString -----');

// 2019 verstion
// function isString(input) {
//   const result = (typeof input === 'string') 
//     ? true
//     : false;

//   return result;
// }

// 2021 verstion
const isString = (value) => typeof value === 'string';


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

console.log('----- makeOrdinalNumber -----');

function makeOrdinalNumber(number) {
  const str = '' + number;

  if (
    str.endsWith(11) ||
    str.endsWith(12) ||
    str.endsWith(13)
  ) {
    return `${str}th`;
  }

  switch (str.slice(-1)) {
    case '1':
      return `${str}st`;
    case '2':
      return `${str}nd`;
    case '3':
      return `${str}rd`;  
    default:
      return `${str}th`;
  }
}


export { isString, 
         isBlank, 
         parametrizeString, 
         capitalizeString, 
         makeOrdinalNumber };
