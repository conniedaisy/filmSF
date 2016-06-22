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
    const numToShow = 2;
    const movieEndpoint = 'https://data.sfgov.org/resource/wwmu-gmzc.json';

    $.get(movieEndpoint, (results, error) => {
      let params = {
        data: [],
      };
      for (var i = 0; i < numToShow; i++) {
        params.data.push(results[i]);
      }
      $.get('http://localhost:3000/getCoors', params, (results, error) => {
        if (error) { console.log(error); }
        console.log('getCoors: ', results);
        this.setState({
          movieData: results.data,
        });
      });
    });

  }

  render() {
    return (
      <div>
        <SearchBar/>
        <MyMap movieData={this.state.movieData}/>
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);