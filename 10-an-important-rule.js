




function alwaysThrows() {
  throw(new Error('OH NOES'));
}

function iterate(intVal) {
  console.log(intVal);
  return intVal + 1;
}


function myPromise(val) {
  return new Promise((resolve, reject) => {
    resolve(val)
  });
}

myPromise(1)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(null, console.log);
