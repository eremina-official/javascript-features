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
      if (item + arrayElement === targetNumber) {
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
console.log(getElementSum([1, 2, 3], 3));
export { getElementSum };