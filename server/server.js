const express = require('express');
// const app = express();
const path = require('path');
const handlers = require('./request-handlers.js');
const port = process.env.PORT || 3000;

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, '/../client/dist/index.html');
    const publicPath = express.static(path.join(__dirname, '/../client/dist'));

    app.use('/public', publicPath);

    app.get('/bundle.js', handlers.bundle);

    app.get('/', handlers.root);

}
app.listen(port, function () {
  console.log('Listening on port ', port);
});

