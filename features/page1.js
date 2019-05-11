console.log('----- scope chain and lexical environment -----');

const testVariable = 3;

const testFunction1 = function() { 
  const testVariable = 4; 
  function logTestVariable1() { 
    console.log(testVariable); 
  }
  logTestVariable1();
};
testFunction1();


function logTestVariable2() { 
  console.log(testVariable); 
}
const testFunction2 = function() { 
  const testVariable = 4; 
  logTestVariable2();
};
testFunction2();


console.log('------- variable scoping -------');

/* 
  let and const are block-scoped variables, that they are not hoisted like var.
  When a variable is declared with let, it can be reassigned.
  When a variable is declared with const, it can not be reassigned.
  When an object is declared with const, it can not be reassigned, but the properties 
  and methods of the object can be changed.
*/

const buttonsI = document.querySelectorAll('div.i button');
var i;
for (i = 0; i < 3; i++) {
  buttonsI[i].addEventListener('click', () => { console.log('i', i) });
}

const buttonsJ = document.querySelectorAll('div.j button');
for (let j = 0; j < 3; j++) {
  buttonsJ[j].addEventListener('click', () => { console.log('j', j) });
}

console.log('------------');

