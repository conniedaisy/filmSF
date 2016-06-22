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

  componentDidMount() {
    const numToShow = 22;
    const movieEndpoint = 'https://data.sfgov.org/resource/wwmu-gmzc.json';

    $.get(movieEndpoint, (results, error) => {
      let params = {
        data: [],
      };
      for (var i = 0; i < numToShow; i++) {
        params.data.push(results[i]);
      }
      console.log('params: ', params.data);
      $.get('http://localhost:3000/getCoors', params, (results, error) => {
        if (error) { console.log(error); }
        this.setState({
          movieData: results.data,
        });
        console.log('App state: ', this.state.movieData);
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar/>
        {
          this.state.movieData.length > 0 ? 
            <MyMap movieData={this.state.movieData}/> :
            <span></span>
        }
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);