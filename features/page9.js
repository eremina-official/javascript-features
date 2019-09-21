console.log('------- Object.create() method creates a new object using an existing object as a prototype for the new object --------');

const objectToCopyFrom = { key: 'value', someKey: 4};
const objectCopy = Object.create(objectToCopyFrom);

console.log('objectToCopyFrom', objectToCopyFrom);
console.log('objectCopy', objectCopy);

console.log('-- add method to objectCopy --')
objectCopy.method = () => console.log('objectCopyMethod');
console.log('objectToCopyFrom.method', objectToCopyFrom.method);
console.log('objectCopy.method', objectCopy.method);

console.log('-- Inherited properties can be overwritten --')
objectCopy.key = 'changedValue';
console.log('objectToCopyFrom.key', objectToCopyFrom.key);
console.log('objectCopy.key', objectCopy.key);

console.log('-- add a property anotherKey to objectToCopyFrom --')
objectToCopyFrom.anotherKey = 'anotherKey';
console.log('objectToCopyFrom', objectToCopyFrom.anotherKey);
console.log('objectCopy', objectCopy.anotherKey);


console.log('------- Object.assign() method is used to copy of values of enumerable own properties from one or more source objects to a target object. It returns the target object, so the returned object is a reference to the target object --------');

const objectTarget = { key: 'value', objectTargetKey: 3};
const objectSource = {key: [], objectSourceKey: 6};
const objectAssign = Object.assign(objectTarget, objectSource);

console.log('objectTarget', objectTarget);
console.log('objectSource', objectSource);
console.log('objectAssign', objectAssign);

console.log('-- add method objectTargetMethod to objectTarget --');
objectTarget.objectTargetMethod = () => {console.log('objectTargetMethod')};
console.log('objectTarget', objectTarget);
console.log('objectSource', objectSource);
console.log('objectAssign', objectAssign);

console.log('-- add method objectSourceMethod to objectSource --');
objectSource.objectSourceMethod = () => {console.log('objectSourceMethod')};
console.log('objectTarget', objectTarget);
console.log('objectSource', objectSource);
console.log('objectAssign', objectAssign);

console.log('-- change a property with a non-primitive value on objectSource --');
objectSource.key = [1, 2];
console.log('objectTarget', objectTarget);
console.log('objectSource', objectSource);
console.log('objectAssign', objectAssign);

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
