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


export { isString, isBlank };
