console.log('----- sum of two elements equals to a specific target number ----');

/* 
  Function takes an array and a specific target number and finds in the array 
  two elements which sum equals the target number. Function returns indices of the 
  elements or -1 if the elements are not found.
*/
function getElementSum(array, targetNumber) {
  let result;

  array.forEach((arrayElement, index) => {
    let anotherElementIndex = array.findIndex(item => {
      if (
        item + arrayElement === targetNumber &&
        array.indexOf(item) !== array.indexOf(arrayElement)
      ) {
        return item;
      }
    });

    if (anotherElementIndex !== -1) {
      result = [index, anotherElementIndex];
      return;
    }
  });

  result = (result === undefined) ? -1 : result;

  return result;
}

/* TODO: function should return same pair of indices only once */
function getElementSumReduce(array, targetNumber) {
  const result = array.reduce((acc, currentValue, currentValueIndex) => {
    const anotherElementIndex = array.findIndex(item => {
      if (
        item + currentValue === targetNumber &&
        array.indexOf(item) !== array.indexOf(currentValue)
      ) {
        return item;
      }
    });

    if (anotherElementIndex !== -1) {
      acc.push([currentValueIndex, anotherElementIndex]);
    }

    return acc;
  }, []);

  return result;
}

console.log(getElementSum([1, 2, 3], 3));
console.log(getElementSumReduce([1, 2, 3], 3));
export { getElementSum };
