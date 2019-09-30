const add = (x) => x + 'b';
const concat = (x) => (acc) => acc + x;


const pipe = (...fns) => (arg) => fns.reduce((acc, currentFn) => currentFn(acc), arg);

const addConcat = pipe(add, concat('c'))('a');
console.log('addConcat', addConcat);

const concatAdd = pipe(concat('c'), add)('a');
console.log('concatAdd', concatAdd);

console.log('----- reduce -----');

const emptyArray = [[1], [], []];

const reducedArray = emptyArray.reduce((acc, currentValue, currentValueIndex) => {
  if (currentValue) {
    acc[currentValueIndex] = [1];
  }
  return acc;
}, emptyArray);

console.log('emptyArray', emptyArray);
console.log('reducedArary', reducedArray);
