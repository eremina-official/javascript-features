console.log('----- event loop -----')

function log() {
  const logStart = () => { console.log('logStart'); };

  logStart();
  setTimeout(() => { console.log('timeout 100ms') }, 100);
  setTimeout(() => { console.log('timeout 0s') }, 0);

  Promise.resolve()
    .then(() => { console.log('firstPromise firstThen') })
    .then(() => { console.log('firstPromise secondThen') });

  Promise.resolve()
    .then(() => { console.log('secondPromise firstThen') });

  delay(1000);
  console.log('after delay');

  function delay(millis) {
    const date = +new Date();
    let curDate = null;

    do {
      curDate = +new Date();
      console.log(curDate);
    } while (curDate - date < millis);

    console.log('inside delay');
  }

  /*  
    another implementation of busy wait function
    console.log(delay(1000));
    
    const laterDate = delay(1000);

    while (+new Date() < laterDate) {
      console.log(laterDate);
    };

    console.log('logFinish');

    function delay(ms) {
      const date = +new Date() + ms;
      return date;
    }  
  */
 
}

log();