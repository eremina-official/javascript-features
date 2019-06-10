'use strict';
console.log('----- this in JavaScript -----');

const a = {
  a: 'a'
};

const obj = {
  getThis: () => this,
  getThis2: function() {
    return this;
  }
};

obj.getThis3 = obj.getThis.bind(obj);
obj.getThis4 = obj.getThis2.bind(obj);

const answersObject = [
  obj.getThis(),
  obj.getThis.call(a),
  obj.getThis2(),
  obj.getThis2.call(a),
  obj.getThis3(),
  obj.getThis3.call(a),
  obj.getThis4(),
  obj.getThis4.call(a)
];
console.log(answersObject);


class Obj {
  getThis = () => this;
  getThis2() {
    return this;
  }
}

const objInstance = new Obj();
objInstance.getThis3 = objInstance.getThis.bind(objInstance);
objInstance.getThis4 = objInstance.getThis2.bind(objInstance);

const answersClass = [
  objInstance.getThis(),
  objInstance.getThis.call(a),
  objInstance.getThis2(),
  objInstance.getThis2.call(a),
  objInstance.getThis3(),
  objInstance.getThis3.call(a),
  objInstance.getThis4(),
  objInstance.getThis4.call(a)
];
console.log(answersClass);




let testF1 = function() {
  console.log(this);
};
testF1();

let testF2 = function() {
  console.log(this);
};
testF2();

console.log(this);