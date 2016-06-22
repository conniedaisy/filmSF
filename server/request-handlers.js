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
  let newData = {
    data: [],
  }; // {data: [{}, {}]}
  console.log('REQUEST: ', req.query.data)
  req.query.data.forEach((entry, index) => {
    if (entry.locations) {
      const search = {
        query: entry.locations.replace(/\s+/g, ',').replace(/\(|\)/g, '').replace(/[^\x00-\x7F]/g, ''),
        key: accessTokens.GooglePlaces_api,
        lat: 37.77392,
        long: -122.431297,
        radius: '6500',
      };
      console.log('query: ', search.query)
      const placesEndpoint = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${search.query}&key=${search.key}&location=${search.lat},${search.long}&radius=${search.radius}`;
      request(placesEndpoint, (error, response, body) => {
        if (error) { console.error(error); }
        // console.log(JSON.parse(body).results);
        if (JSON.parse(body).results.length > 0) {
          entry.coors = [
            JSON.parse(body).results[0].geometry.location.lng,
            JSON.parse(body).results[0].geometry.location.lat 
          ]; 
        } else {
          entry.coors = [0, 0]
        }
        newData.data.push(entry);
        // if (index === newData.data.length-1) {
        //   res.send(newData);
        // }
        if (newData.data.length === req.query.data.length) {
          // console.log('newData: ', newData);
          res.send(newData);
        }
      });
    } else {
      newData.data.push(entry);
    }

  });
};

const coorsRequest = () => {


};