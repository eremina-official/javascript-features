console.log('----- shuffle array -----');

function shuffleArray(array) {
  const shuffledArray = [];

  while (array.length) {
    pushRandomItem();
  }

  function pushRandomItem() {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomItem = array.splice(randomIndex, 1);
    shuffledArray.push(randomItem[0]);
  }

  return shuffledArray;
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8]));


console.log('----- retrieve value of a given data type -----');

function retrieveValues(array, dataType) {
  const result = array.filter(item => {
    //console.log(typeof item);
    return (typeof item === dataType) ? true : false;
  });
  return result;
}
//console.log(retrieveValues(['NaN', 1, [], {}, () => {}, null, NaN], 'number'));


console.log('----- get nth largest element -----');

function nthLargestElement(array, number) {
  let largestElement = array[0];
  let largestElementIndex;
  let i = 1;

  function findLargest(array) {
    array.forEach((item, itemIndex) => {
      if (item > largestElement) {
        largestElement = item;
        largestElementIndex = itemIndex;
      }
    }); 
  }

  while (i < number) {
    findLargest(array);
    array.splice(largestElementIndex, 1);
    largestElement = array[0];
    i++;
  }
  findLargest(array);
  return largestElement;
}

function nthLargestElementTwo(array, number) {
  let i = 1;
  while (i < number) {
    const largestElement = Math.max(...array);
    const largestElementIndex = array.indexOf(largestElement);
    array.splice(largestElementIndex, 1);
    i++;
  }

  const largestElement = Math.max(...array);
  return largestElement;
}

function nthLargestElementThree(array, number) {
  const largestElement = Math.max(...array);
  if (number === 1) {
    return largestElement;
  } else {
    const largestElementIndex = array.indexOf(largestElement);
    array.splice(largestElementIndex, 1);
    return nthLargestElementThree(array, number - 1);  
  }
}

function test(n) {
  const testThree = testTwo(n);
  function testTwo(n) {
    if (n === 1) { return 8 ;}
    else { n--; return testTwo(n)}
  }
  return testThree;
}
console.log(test(2));


function nthLargestElementFour(array, number) {
  const largestElement = array.reduce((prevElement, nextElement) => {
    return Math.max(prevElement, nextElement);
  });

  if (number === 1) {
    return largestElement;
  } else {
    const largestElementIndex = array.indexOf(largestElement);
    array.splice(largestElementIndex, 1);
    return nthLargestElementFour(array, number - 1);
  }
}


export { retrieveValues, 
         nthLargestElement, 
         nthLargestElementTwo, 
         nthLargestElementThree, 
         nthLargestElementFour };
