console.log('----- async await -----');
//example borrowed from mdn https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

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
  console.log(result);
  // expected output: 'resolved'
  console.log('after result');
}

asyncCall();
