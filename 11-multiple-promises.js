function all(promise1, promise2) {
  let counter = 0;

  let arrValues = [];

  const promise = new Promise((resolve) => {
    function incrementCounter(val) {
      counter += 1;
      arrValues.push(val);
      if (counter >= 2) {
        resolve(arrValues);
      }
    }
    promise1.then(incrementCounter);
    promise2.then(incrementCounter);
    
  });

  return promise;
}


all(getPromise1(), getPromise2()).then(console.log);