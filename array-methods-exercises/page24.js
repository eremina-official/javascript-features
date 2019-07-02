console.log('----- find a highest index at which a value should be inserted in order to maintain sort order -----');

function pushValue(array, value) {
  //sorted ascending or descending, findIndex
  let copiedArray = [...array];
  const isAscendingOrSame = copiedArray[0] <= copiedArray[copiedArray.length - 1];
  let result;

  copiedArray = (isAscendingOrSame) 
    ? copiedArray 
    : copiedArray.reverse();

  const index = copiedArray.findIndex(element => {
    return element > value;
  });

  if (index === -1) {
    result = array.length;
  } else {
    result = (isAscendingOrSame)
      ? index
      : array.length - index;
  }

  return result;
}


export { pushValue };
