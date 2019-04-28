console.log('------- test for strict mode -------');

let testF1 = function() {
  console.log(this);
};
testF1();

let testF2 = function() {
  'use strict';
  console.log(this);
};
testF2();

console.log(this);

