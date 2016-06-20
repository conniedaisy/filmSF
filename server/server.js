const express = require('express');
const app = express();
const path = require('path');
const handlers = require('./request-handlers.js');

app.use(express.static('../client'));

app.get('/', handlers.root);

app.get('/dist/bundle.js', handlers.bundle);

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});