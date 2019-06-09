console.log('----- isArray -----');

function checkArray(input) {
  const result = (Array.isArray(input))
    ? `Provided input is an array`
    : `Provided input is not an array but ${typeof input}`;
  
  return result;
}

function arrayToString(array, delimiter) {
  const result = array.reduce((acc, currentValue) => {
    acc += delimiter + currentValue;
    return acc;
  });

  return result;
}

export { checkArray, arrayToString };
