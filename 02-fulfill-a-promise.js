'use strict';
require('es6-promise');

const promise = new Promise(function (fulfill, reject) {
  setTimeout(() => {
    fulfill('FULFILLED!');
  }, 300);
});

promise.then(successMessage => console.log(successMessage));