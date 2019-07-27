console.log('----- isString -----');

function isString(input) {
  const result = (typeof input === 'string') 
    ? true
    : false;

  return result;
}


export { isString };
