import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchBar from './SearchBar.jsx';
import MyMap from './MyMap.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let filteredResults = {};
    const endpoint = 'https://data.sfgov.org/resource/wwmu-gmzc.json';
    $.get(endpoint, (results, error) => {
      console.log('results: ', results);
      results.forEach(result => {
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <MyMap />
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);