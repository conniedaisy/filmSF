const express = require('express');
// const app = express();
const path = require('path');
const handlers = require('./request-handlers.js');

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, '/../client/dist/index.html');
    const publicPath = express.static(path.join(__dirname, '/../client/dist'));

    app.use('/public', publicPath);

    app.get('/bundle.js', handlers.bundle);

    app.get('/', handlers.root);

    return app;
  }
}



// app.use(express.static('../client'));

// app.get('/', handlers.root);

// app.get('/dist/bundle.js', handlers.bundle);

// app.get('/getCoors', handlers.getCoors);

// app.listen(3000, function () {
//   console.log('Listening on port 3000!');
// });

// module.exports = app;