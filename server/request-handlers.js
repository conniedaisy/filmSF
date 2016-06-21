const path = require('path');
const request = require('request');
const accessTokens = require('./accessTokens.js');

exports.root = (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
};

exports.bundle = (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/bundle.js'));
};

exports.getCoors = (req, res) => {
  const search = {
    query: 'Epic Roasthouse (399 Embarcadero)'.replace(/\s+/g, ',').replace(/\(|\)/g, ''),
    key: accessTokens.GooglePlaces_api,
    lat: 37.77392,
    long: -122.431297,
    radius: '6500',
  };
  const placesEndpoint = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${search.query}&key=${search.key}&location=${search.lat},${search.long}&radius=${search.radius}`;
  request(placesEndpoint, (error, response, body) => {
    // console.log('=====> ', response.body);
    console.log('=====> ', JSON.parse(body).results[0].geometry.location);
  });
};