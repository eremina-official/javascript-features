console.log('------- Object.create() --------');

const objectToCopyFrom = { key: 'value', someKey: 4};

const objectCopy = Object.create(objectToCopyFrom);

console.log(objectToCopyFrom);
console.log(objectCopy);

objectCopy.method = () => console.log('objectCopyMethod');
console.log('add method to objectCopy', objectToCopyFrom);
console.log(objectCopy);

objectCopy.key = 'changedValue';
console.log('overwrite key on objectCopy', objectToCopyFrom);
console.log(objectCopy);

objectToCopyFrom.anotherKey = 'anotherKey';
console.log('add a property to objectToCopyFrom', objectToCopyFrom);
console.log(objectCopy);


console.log('------- Object.assign() --------');

const objectTarget = { key: 'value', anotherKey: 3};
const objectSouce = {key: 'anotherValue', someKey: 6};
const objectAssign = Object.assign(objectTarget, objectSouce);

console.log(objectTarget);
console.log(objectSouce);
console.log(objectAssign);

objectTarget.method = () => {console.log('objectTargetMethod')};
console.log('add method to objectTarget', objectTarget);
console.log(objectSouce);
console.log(objectAssign);

objectTarget.key = 'changedValue';
console.log('overwrtite key on objectTarget', objectTarget);
console.log(objectSouce);
console.log(objectAssign);

objectSouce.addedKey = '9';
console.log('add property to objectSource', objectTarget);
console.log(objectSouce);
console.log(objectAssign);

console.log('------- composition --------');

function method() {
  console.log('method');
}

function CreateObject() {
  return {
    key: 'key',
    method: method
  };
}

const objectInstance = CreateObject();
console.log(objectInstance);
objectInstance.method();
