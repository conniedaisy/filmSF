const path = require('path');

exports.root = (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
}

exports.bundle = (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/bundle.js'));
};
