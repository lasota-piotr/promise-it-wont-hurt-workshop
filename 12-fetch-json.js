var HTTP = require("q-io/http");

function getData() {
  HTTP.read('http://localhost:1337')
    .then(json => {
      console.log(JSON.parse(json));
    });
}

getData();