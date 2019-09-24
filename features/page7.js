const add = (x) => x + 'b';
const concat = (x) => (acc) => acc + x;


const pipe = (...fns) => (arg) => fns.reduce((acc, currentFn) => currentFn(acc), arg);

const addConcat = pipe(add, concat('c'))('a');
console.log('addConcat', addConcat);

const concatAdd = pipe(concat('c'), add)('a');
console.log('concatAdd', concatAdd);

