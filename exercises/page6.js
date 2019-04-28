console.log('------- test for even number -------');

function even(number) {
  const modulus = number%2;
  const result = (modulus === 0) 
    ? true 
    : false;
  return result;
}

export { even };