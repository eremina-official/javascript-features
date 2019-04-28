/* copied object
spread operator
slice
nested objects and arrays */

console.log('------- copied object -------')
const object = { key: 'value'};
const copiedObject = object;

copiedObject.key = 'anotherValue';

console.log(object);
console.log(copiedObject);

console.log('------ object copied with spread operator --------')

const spreadObject = {key: 'value'};
const copiedSpreadObject = {...spreadObject};

copiedSpreadObject.key = 'changedValue';

console.log(spreadObject);
console.log(copiedSpreadObject);

console.log('------ copied array --------')

const array = [1, 2, 3];
const copiedArray = array;

copiedArray.push(4);

console.log(array);
console.log(copiedArray);

console.log('------- array copied with spread operator -------')

const spreadArray = [1, 2, 3];
const copiedSpreadArray = [...spreadArray];

copiedSpreadArray.push(4);

console.log(spreadArray);
console.log(copiedSpreadArray);

console.log('------ sliced array --------')

const sliceArray = [1, 2, 3];
const copiedSliceArray = sliceArray.slice();

copiedSliceArray.push(4);

console.log(sliceArray);
console.log(copiedSliceArray);

console.log('------- nested objects copied with spread operator -------')

const nestedObject = {
  key: {
    nestedKey: 'value'
  }
};

const copiedNestedObject = {...nestedObject};

copiedNestedObject.key.nestedKey = 'changedValue';

console.log(nestedObject);
console.log(copiedNestedObject);

console.log('------- nested array copied with spread operator -------')

const nestedArray = [
  {
    key: 'value'
  }
];

const copiedNestedArray = [...nestedArray];

copiedNestedArray[0].key = 'changedValue';

console.log(nestedArray);
console.log(copiedNestedArray);

console.log('------- nested objects stringified and parsed -------')

const objectToParse = {key: 'value'};
const parsedObject = JSON.parse(JSON.stringify(objectToParse));

parsedObject.key = 'changedValue';

console.log(objectToParse);
console.log(parsedObject);

console.log('--------------')
