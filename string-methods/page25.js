console.log('----- isString -----');

// 2019 version
// function isString(input) {
//   const result = (typeof input === 'string') 
//     ? true
//     : false;

//   return result;
// }

// 2021 version
const isString = (value) => typeof value === 'string';


console.log('----- isBlank -----');

// 2019 version
// function isBlank(string) {
//   const result = (!string.charCodeAt(0))
//     ? false
//     : true;

//   return result;
// }

// 2021 version
const isBlank = (string) => !!string;

console.log('----- parametrizeString -----');

function parametrizeString(string) {
  const result = string.toLowerCase()
    .split(' ')
    .filter(word => word)
    .join('-');
    
  return result;
}

console.log('----- capitalizeString -----');

// 2019 version
// function capitalizeString(string) {
//   const result = string.split(' ')
//     .map(word => {
//       const firstLetter = word.slice(0, 1).
//         toUpperCase();
//       const restLetters = word.slice(1);
//       return firstLetter.concat(restLetters);
//     })
//     .join(' ');

//   return result;
// }

// 2021 version
// const capitalizeString = (string) => string.split(' ')
//     .map((word) => {
//       const arrayFromWord = word.split('');
//       arrayFromWord[0] = arrayFromWord[0].toUpperCase();
//       return arrayFromWord.join('');
//     })
//     .join(' ');

// 2022 version
const capitalizeString = (string) => string.split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');

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
