console.log('----- time taken by a function to execute -----');

function measureTime(cb) {
  const timeBeforeCallback = +new Date();
  cb();
  const timeAfterCallback = +new Date();
  const timeToExecute = timeAfterCallback - timeBeforeCallback;
  return timeToExecute + 'ms';
}

function cb() {
  console.log('callback');
}

function delay() {
  const date = +new Date();
  let curDate = null;

  do {
    curDate = +new Date();
  } while (curDate - date < 18);

  console.log('inside delay');
}

console.log(measureTime(cb));
console.log(measureTime(delay));
