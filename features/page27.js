console.log('----- async await -----');
//example borrowed from mdn https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

//async function returns a Promise, therefore it is possible to chain .then method to it
async function showNumber() {
  return 'number';
}
showNumber().then(data => { console.log(data) });


function resolveAfter2Seconds() {
  return new Promise(resolve => {
    console.log('before setTimeout');
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
    console.log('after setTimeout');
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result); //the value assigned to result will be 'resolved'
  console.log('after result');
}

asyncCall();
console.log('after asyncCall')