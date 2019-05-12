console.log('--------------');

/* 
  Function takes an array as an argument and returns the smallest positive integer value (greater than 0)
  which is not present in the array. For example, given an array [1, 2, 4] 
  it returns 3, given an array [1, 2, 3] it returns 4, given an array [-1, -2] it returns 1. 
  Arrays can have integers from -1000 to 1000. 
*/

function smallestInteger(array) {
  let sortedArray = [...array];
  sortedArray.sort(sortNumbers);

  function sortNumbers(a, b) {
    return a - b;
  }

  const maxIntegerInSortedArray = sortedArray[sortedArray.length - 1];
  
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
