console.log('----- isArray -----');

function checkArray(input) {
  const result = (Array.isArray(input))
    ? `Provided input is an array`
    : `Provided input is not an array but ${typeof input}`;
  
  return result;
}

function arrayToString(array) {
  return null;
}

export { checkArray, arrayToString };
