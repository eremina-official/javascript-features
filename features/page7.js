const add = (x) => x + 'b';
const concat = (x) => (acc) => acc + x;


const pipe = (...fns) => (arg) => fns.reduce((acc, currentFn) => currentFn(acc), arg);

const addConcat = pipe(add, concat('c'))('a');
console.log('addConcat', addConcat);

const concatAdd = pipe(concat('c'), add)('a');
console.log('concatAdd', concatAdd);

console.log('----- reduce -----');

const emptyArray = [[1], [], []];

const reducedEmptyArray = emptyArray.reduce((acc, currentValue, currentValueIndex) => {
  if (currentValue) {
    acc[currentValueIndex] = [1];
  }
  return acc;
}, emptyArray);

console.log('emptyArray', emptyArray);
console.log('reducedEmptyArary', reducedEmptyArray);


console.log('----- reduce example, check if the array remains unmodified -----');

const initialArray = [[1], [], []];

const reducedInitialArray = initialArray.reduce((acc, currentValue, currentIndex) => {
  if (currentIndex === 1) {
    currentValue = [2];
    acc.push(currentValue);
  }
  return acc;
}, []);

console.log('initialArray', initialArray);
console.log('reducedInitalArray', reducedInitialArray);

