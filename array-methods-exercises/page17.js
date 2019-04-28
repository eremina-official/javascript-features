console.log('----- delete duplicates ------')

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

export { deleteDuplicatesPush, deleteDuplicatesSort };