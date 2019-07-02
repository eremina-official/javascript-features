console.log('----- most frequent item of an array, given that all items have different counts -----');

console.log('---- with forEach ----');

/* forEach, count, if longer replace prev result */

function getMostFrequentItemWithForEach(array) {
  let mostFrequentItem = array[0];
  let mostFrequentItemCount = 0;

  array.forEach(item => {
    let currentItemCount = 0;

    for (let i = 0; i < array.length; i++) {
      if (item === array[i]) {
        currentItemCount++;
      }
    }

    if (currentItemCount > mostFrequentItemCount) {
      mostFrequentItem = item;
      mostFrequentItemCount = currentItemCount;
    }
  });

  return {
    item: mostFrequentItem,
    count: mostFrequentItemCount
  }

}

console.log('---- with sorting ----');

/* sort, if next same as first count, if not count from beginning, if longer replace prev result */

function getMostFrequentItemWithSort(array) {
  const arrayCopy = [...array];
  const sortedArray = arrayCopy.sort();
console.log(sortedArray);
  let mostFrequentItem = sortedArray[0];
  let mostFrequentItemCount = 0;

  let i = 1;
  let currentItem = sortedArray[0];
  let currentItemCount = 1;
  

  while (i < sortedArray.length) {
    while (currentItem === sortedArray[i]) {
      currentItemCount++;
      i++;
    }
    
    if (currentItemCount > mostFrequentItemCount) {
      mostFrequentItem = currentItem;
      mostFrequentItemCount = currentItemCount;
    }
    
    currentItem = sortedArray[i];
    currentItemCount = 0;
  }

  return {
    item: mostFrequentItem,
    count: mostFrequentItemCount
  }

}

function getMostFrequentItemWithReduce(array) {
  const countItemsObj = array.reduce((acc, currentValue) => {
    if (currentValue in acc) {
      acc[currentValue]++;
    } else {
      acc[currentValue] = 1;
    }
    return acc;
  }, {});

  let result = {item: '', count: 0};
  for (const [item, count] of Object.entries(countItemsObj)) {
    if (count > result.count) {
      result.item = item;
      result.count = count;
    }
  } 

  return result;
}

function getMostFrequentItemWithReduceTwo(array) {
  const countItemsObj = array.reduce((acc, currentValue) => {    
    const uniqueItem = acc.find(value => {
      return value.item === currentValue;
    });

    if (uniqueItem) {
      uniqueItem.count++;
    } else {
      acc.push({
        item: currentValue,
        count: 1
      });
    } 

    return acc;
  }, []);

  let result = countItemsObj.reduce((acc, currentValue) => {
    acc = (currentValue.count > acc.count) 
      ? currentValue 
      : acc;
    return acc;
  }, {item: '', count: 0});

  return result;
}


console.log('----- unique items -----');

function uniqueItems(array) {
  let currentElement;
  let referenceArray = [...array];
  let notUniqueElements = [];
  let result = [];

  array.forEach(element => {
    const notUniqueElement = notUniqueElements.find(item => item === element);

    if (!notUniqueElement) {
      currentElement = element;
      const elementIndex = referenceArray.indexOf(currentElement);
      referenceArray.splice(elementIndex, 1);
      
      if (referenceArray.indexOf(currentElement) === -1) {
        result.push(currentElement);
      } else {
        notUniqueElements.push(currentElement);
      }
    }
  });

  return result;
}

function uniqueItemsReduce(array) {
  const result = array.reduce((acc, currentValue) => {
    const uniqueItem = acc.find(item => item.item === currentValue);

    if (!uniqueItem) {
      acc.push({
        item: currentValue,
        count: 1
      });
    } else {
      uniqueItem.count += 1;
    }

    return acc;
  }, [])
  .filter(uniqueItem => uniqueItem.count === 1)
  .map(uniqueItem => uniqueItem.item);

  return result;
}


export { 
          getMostFrequentItemWithForEach, 
          getMostFrequentItemWithSort, 
          getMostFrequentItemWithReduce,
          getMostFrequentItemWithReduceTwo,
          uniqueItems,
          uniqueItemsReduce
       };
