const add = (x) => x + 'b';
const concat = (x) => x + 'c';


const pipe = (...fns) => (arg) => fns.reduce((acc, currentFn) => currentFn(acc), arg);

const addConcat = pipe(add, concat)('a');
console.log('addConcat', addConcat);

const concatAdd = pipe(concat, add)('a');
console.log('concatAdd', concatAdd);

