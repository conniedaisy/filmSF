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
  let newData = req.query; // {data: [{}, {}]}

  req.query.data.forEach((entry, index) => {
    const search = {
      query: entry.locations.replace(/\s+/g, ',').replace(/\(|\)/g, ''),
      key: accessTokens.GooglePlaces_api,
      lat: 37.77392,
      long: -122.431297,
      radius: '6500',
    };
    const placesEndpoint = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${search.query}&key=${search.key}&location=${search.lat},${search.long}&radius=${search.radius}`;
    request(placesEndpoint, (error, response, body) => {
      if (error) { res.send('An error has occured: ', error); }
      newData.data[index].coors = [
        JSON.parse(body).results[0].geometry.location.lat, 
        JSON.parse(body).results[0].geometry.location.lng
      ]; 
      if (index === newData.data.length-1) {
        res.send(newData);
      }
    });
  });
};