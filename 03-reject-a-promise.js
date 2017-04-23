'use strict';
require('es6-promise');

const promise = new Promise(function (fulfill, reject) {
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
});

function onReject(err) {
  console.log(err.message);
}

promise.then(
  successMessage => console.log(successMessage),
  onReject
  );