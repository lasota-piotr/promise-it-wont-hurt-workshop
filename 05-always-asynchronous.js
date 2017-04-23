const promise = new Promise((fulfill, reject) => {
  fulfill('PROMISE VALUE');
});

promise.then(successMsg => console.log(successMsg));

console.log('MAIN PROGRAM');