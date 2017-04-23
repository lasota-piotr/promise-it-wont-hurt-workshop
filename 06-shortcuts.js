const promise = Promise.reject(new Error('There is a problem here!'));

promise.catch(err => console.log(err.message));