console.log('----- delete duplicates ------')

/* 
  All the functions only work for arrays containing primitive values.
  Duplicate objects will not be deleted even if they are equal.
*/
function deleteDuplicatesPush(testArray) {
  const resultArray = [];

  testArray.forEach(testArrayElement => {
    let uniqueElement = resultArray.find(resultArrayElement => {
      return resultArrayElement === testArrayElement;
    });

    if (!uniqueElement) {
      resultArray.push(testArrayElement);
    }
  });

  return resultArray;
}

function deleteDuplicatesSort(testArray) {
  let resultArray = testArray.sort();

  removeElement(1);

  function removeElement(i) {
    if (i === resultArray.length) {
      return;
    }

    const resultArrayCopy = [...resultArray];

    if (resultArrayCopy[i] === resultArrayCopy[i - 1]) {
      resultArrayCopy.splice(i, 1);
      resultArray = [...resultArrayCopy];
      removeElement(i);
    } else {
      i = i + 1;
      removeElement(i);
    }
  }

  return resultArray;
}

function deleteDuplicatesReduce(array) {
  let result = array.reduce((acc, currentValue) => {
    if (acc.indexOf(currentValue) === -1) {
      acc.push(currentValue);
    }
    return acc;
  }, []);
  return result;
}

export { deleteDuplicatesPush, deleteDuplicatesSort, deleteDuplicatesReduce };
