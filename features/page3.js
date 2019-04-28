console.log('------- functions -------');

const sum = function() {
  const a = 1 + 2;
  console.log(a);
};
//console.log(sum());
console.log(sum);

console.log('--------------');

const returnSum = function() {
  let a = 3 + 4;
  return a;
};
//returnSum();
console.log(returnSum());
console.log(returnSum);
console.log(returnSum.a);

console.log('------- IIFE -------');

const returnSumObj = (function() {
  const objVariable = "objVariable";
  function a() {
    console.log('6');
  }
  return {a: a, objVariable: objVariable};
})();
returnSumObj.a();
//console.log(returnSumObj());
console.log(returnSumObj);
console.log(returnSumObj.a());
console.log(returnSumObj.objVariable);

console.log('--------------');
