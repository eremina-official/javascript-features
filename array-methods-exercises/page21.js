console.log('----- isArray -----');

function checkArray(input) {
  const result = (Array.isArray(input))
    ? `Provided input is an array`
    : `Provided input is not an array but ${typeof input}`;
  
  return result;
}


console.log('----- array to string -----');

// 2019 version
// function arrayToString(array, delimiter) {
//   const result = array.reduce((acc, currentValue) => {
//     acc += delimiter + currentValue;
//     return acc;
//   });

//   return result;
// }

// 2021 version
const arrayToString = (array, delimiter) => array.join(delimiter);


console.log('----- print elements -----');

function printElements(array) {
  array.forEach((element, elementIndex) => {
    console.log(`row ${elementIndex}`);
    element.forEach(item => {
      console.log('' + item);
    });
  });
}
printElements([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]);

export { checkArray, arrayToString };
