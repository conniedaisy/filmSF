# filmSF
[Check out the app!](https://gentle-meadow-66359.herokuapp.com/)

## Description
 - A map that shows locations where movies have been filmed in San Francisco
 - A full-stack application
 
## Tech Stack
- React / Webpack / Babel - for modular frontend
- Node.js / Express - for fast & scalable backend, and using JS on the backend unifies data format (JSON)
- DataSF Film Locations in San Francisco API - for list of SF film locations
- Mapbox API / React-Mapbox-GL Library - for customizable map as a React component
- Google Places API - for lat/long coordinates from addresses/cross-sections
- Heroku - for quick and smooth deployment

## Challenges
- Adding Mapbox as a React component - This is my first time using Mapbox. Mapbox typically has a quick setup, but is difficult to set up as a React component. Layering, adding features were both time-consuming. 
- Google Places API limits - DataSF API film locations are incomplete addresses and cross-sections. I had to the address strings as queries to the Google Places API to get the best lat/long estimate. Due to these limits, only ~20 locations are shown on the map.

## TODO
- Make markers clickable, and add description popup on click
- Implement persistent storage - convert all locations to lat/long and store in a database - 
- Move DataSF API call to server-side

## Development
```
$ npm install
$ npm run buld
$ npm start
```

## About Me
- [Resume](http://www.conniedaisy.com/resume)
- [Portfolio website](http://www.conniedaisy.com/)

## License
MIT
