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


console.log('--------------');

let datenow = new Date();
console.log(datenow);
