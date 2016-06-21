import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchBar from './SearchBar.jsx';
import MyMap from './MyMap.jsx';
import accessTokens from './accessTokens.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: []
    };
  }

  componentWillMount() {
    const search = {
      query: 'Epic Roasthouse (399 Embarcadero)'.replace(/\s+/g, ',').replace(/\(|\)/g, ''),
      key: accessTokens.GooglePlaces_api,
      lat: 37.77392,
      long: -122.431297,
      radius: '6500',
    };
    console.log(search.query);
    const placesEndpoint = `https://maps.googleapis.com/maps/api/place/textsearch/json?
      query=${search.query}
      &key=${search.key}
      &location=${search.lat},${search.long}
      &radius=${search.radius}`;

    $.get('http://localhost:3000/getCoors', (results, error) => {
      console.log('getCoors: ', results);
    });

    const numToShow = 10;
    const movieEndpoint = 'https://data.sfgov.org/resource/wwmu-gmzc.json';
    $.get(movieEndpoint, (results, error) => {
      // TODO: Add error handling
      for (var i = 0; i < numToShow; i++) {
        this.state.movieData.push(results[i]);
      }
      console.log('results: ', this.state.movieData);
    });

    // TODO: send to server
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <MyMap data={this.state.movieData}/>
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);