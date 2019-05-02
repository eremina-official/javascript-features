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