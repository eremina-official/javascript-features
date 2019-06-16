console.log('----- sum of two elements equals to a specific target number ----');

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


function sumAndProduct(array) {
  const result = array.reduce((acc, currentValue) => {
    acc.sum += currentValue;
    acc.product *= currentValue;
    return acc;
  }, {sum: 0, product: 1});

  return result;
}


function sumIndices(arrayOne, arrayTwo) {
  let longestArray;
  let shortestArray;

  if (arrayOne.length >= arrayTwo.length) {
    longestArray = arrayOne;
    shortestArray = arrayTwo;
  } else {
    longestArray = arrayTwo;
    shortestArray = arrayOne;
  }

  const result = longestArray.map((currentValue, currentValueIndex) => {
    if (currentValueIndex < shortestArray.length) {
      currentValue = currentValue + shortestArray[currentValueIndex];
      return currentValue;
    } else {
      return currentValue;
    }
  });

  return result;
}

function sumIndicesTwo(arrayOne, arrayTwo) {
  let longestArray;
  let shortestArray;

  if (arrayOne.length >= arrayTwo.length) {
    longestArray = arrayOne;
    shortestArray = arrayTwo;
  } else {
    longestArray = arrayTwo;
    shortestArray = arrayOne;
  }

  let result = longestArray.reduce((acc, currentValue, currentValueIndex) => {
    if (currentValueIndex < acc[0].length) {
      const sumValue = currentValue + acc[0][currentValueIndex];
      acc[1].push(sumValue);
    } else {
      acc[1].push(currentValue);
    }
    return acc;
  }, [shortestArray, []]);

  result = [...result[1]];
  return result;
}

export { getElementSum, sumAndProduct, sumIndices, sumIndicesTwo };
