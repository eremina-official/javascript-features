console.log('----- move element from one position to another -----');

function moveElement(array, index, nextIndex) {
  if (index >= array.length) {
    return `There is no element with index ${index} in the given array.`;
  }

  const element = array.splice(index, 1);
  array.splice(nextIndex, 0, element[0]);
  return array;
}


console.log('----- generate array between two integers -----');

function generateArray(integerOne, integerTwo) {
  const result = [];
  let counter = integerOne;

  if (integerOne < integerTwo) {
    fillArray(+1);
  } else {
    fillArray(-1);
  }

  function fillArray(step) {
    while (counter !== integerTwo + step) {
      result.push(counter);
      counter += step;
    }
  }

  return result;
}


function generateArrayRecursion(integerOne, integerTwo) {
  if (integerOne < integerTwo) {
    return fillArray(+1, []);
  } else {
    return fillArray(-1, []);
  }

  function fillArray(step, array) {
    if (integerOne === integerTwo + step) {
      return array;
    } else {
      array.push(integerOne);
      integerOne += step;
      return fillArray(step, array);
    }
  }
}


export { moveElement, generateArray, generateArrayRecursion };
