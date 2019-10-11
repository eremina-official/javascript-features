console.log('----- delete duplicates ------')

/* 
  All the functions only work for arrays containing primitive values.
  Duplicate objects will not be deleted even if they are equal.

  Other ways to remove duplicates (as described in https://www.youtube.com/watch?v=itrAyrGRuwQ);
  - turn array to set
  - lodash uniq utility
  - variation with function which takes an array and comparison function
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

/* Methods that work for array of objects. */

/**
 * Note that objects must have keys sorted in the same order (since JSON.stringify converts an object 
 * to a JSON string).
 * 
 * @param {array} array - array of duplicate values
 * @param {function} getIdentifier - a function that returns a value which should be used as a unique identifier
 * for duplicate values comparison
 */
function deleteDuplicatesObject(array, getIdentifier) {
  const uniqueIdentifiers = [];

  const result = array.filter(value => {
    const identifier = JSON.stringify(getIdentifier(value));

    if (uniqueIdentifiers[identifier]) {
      return false;
    }

    uniqueIdentifiers[identifier] = true;
    return true;
  });

  return result;
}


console.log('----- union of two arrays -----');

function unionOfTwoArrays(arrayOne, arrayTwo) {
  const result = arrayOne.reduce((acc, currentValue) => {
    let itemInArrayTwo = arrayTwo.find(item => item === currentValue);

    if (itemInArrayTwo) {
      acc.push(currentValue);
    }

    return acc;
  }, []);

  return result;
}

function unionOfTwoArraysTwo(arrayOne, arrayTwo) {
  return arrayOne.filter(item => arrayTwo.includes(item));
}


console.log('----- difference of two arrays -----');

function differenceOfTwoArrays(arrayOne, arrayTwo) {
  const resultOne = arrayOne.reduce((acc, currentValue) => {
    let itemInArrayTwo = arrayTwo.find(item => {
      return item === currentValue;
    });

    if (!itemInArrayTwo) {
      acc = [...acc, currentValue];
    }

    return acc;
  }, []);

  const resultTwo = arrayTwo.reduce((acc, currentValue) => {
    let itemInArrayOne = arrayOne.find(item => {
      return item === currentValue;
    });

    if (!itemInArrayOne) {
      acc = [...acc, currentValue];
    }

    return acc;
  }, []);

  const result = [...resultOne, ...resultTwo];
  return result;
}

function differenceOfTwoArraysTwo(arrayOne, arrayTwo) {
  const result = arrayOne.reduce((acc, currentValue) => {
    let itemInAcc = acc.find(item => {
      return item === currentValue;
    });

    if (itemInAcc) {
      acc = acc.filter(item => item !== currentValue);
    } else {
      acc = [...acc, currentValue];
    }

    return acc;
  }, arrayTwo);

  return result;
}


export { deleteDuplicatesPush, 
         deleteDuplicatesSort, 
         deleteDuplicatesReduce, 
         unionOfTwoArrays,
         unionOfTwoArraysTwo,
         differenceOfTwoArrays, 
         differenceOfTwoArraysTwo,
         deleteDuplicatesObject
       };
