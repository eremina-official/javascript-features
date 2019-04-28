/* function that returns a function */
function outer(a) {
  return function inner(b) {
    return a + b;
  };
}

const test1 = outer(3);
const test2 = test1(4);
console.log('test2', test2);

/* nested function */
function getValues(a, b) {
  
  function add() {
    return a + b;
  }

  console.log('add', add(a, b));
}
getValues(4, 4);

/* function that returns a function */
function getWord() {
  const word = 'Word';

  function displayWord() {
    console.log('displayWord', word);
  }
  return displayWord;
}
const words = getWord();
words();


/* 
const outside = () => {
  return greet + 'John';
}

function close(greet) {
  return outside;
}

const test3 = close('Hi');
console.log('test3', test3());
returns 'greet is not defined'
 */