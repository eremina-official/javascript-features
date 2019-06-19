console.log('----- samllest positive integer -----');

function smallestInteger(array) {
  let sortedArray = [...array];
  sortedArray.sort(sortNumbers);

  function sortNumbers(a, b) {
    return a - b;
  }

  let resultInteger;
  let testArrayFilteredZero = sortedArray.filter(filterIntegers);
  function filterIntegers(integer) {
    if (integer > 0) {
      return integer;
    }
  }
  if (testArrayFilteredZero.length === 0) {
    resultInteger = 1;
    return resultInteger;
  }

  resultInteger = findInteger(testArrayFilteredZero);
  
  function findInteger(testArray) {
    let result;
    let trueOrFalse = true;
    let counter = 1;
    trueOrFalse = testArray.includes(counter);
    while (counter < 1000 && trueOrFalse === true) {
      counter++;
      trueOrFalse = testArray.includes(counter);
    }
    result = counter;
    return result;
  }

  return resultInteger;
}


function smallestIntegerTwo(array) {
  let result;

  const filteredArray = array.filter(item => item > 0);

  if (!filteredArray.length) {
    result = 1;
    return result;
  }

  let i = 1;
  while (i < 1000) {
    const item = filteredArray.find(item => item === i);
    if (!item) {
      result = i;
      return result;
    }
    i++;
  }
}

export { smallestInteger, smallestIntegerTwo };
