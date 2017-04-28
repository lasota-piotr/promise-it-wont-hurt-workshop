const HTTP = require("q-io/http");

HTTP.read('http://localhost:7000')
  .then(id => HTTP.read('http://localhost:7001/' + id))
  .then(data => JSON.parse(data))
  .then(console.log);