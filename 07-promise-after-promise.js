'use strict';

// function first(val) {
//   return Promise.resolve(val);
// }

// function second(val) {
//   return Promise.resolve(val);
// }

first('secret value')
  .then(second)
  .then(console.log);