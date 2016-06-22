const express = require('express');
const app = express();
const path = require('path');
const handlers = require('./request-handlers.js');
const port = process.env.PORT || 3000;

app.use(express.static('../client'));

app.get('/', handlers.root);

app.get('/dist/bundle.js', handlers.bundle);

app.get('/getCoors', handlers.getCoors);

app.listen(port, function () {
  console.log('Listening on port ', port);
});