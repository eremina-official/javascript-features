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

export { getMostFrequentItemWithForEach, getMostFrequentItemWithSort };