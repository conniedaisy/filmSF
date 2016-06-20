import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';
import Map from './Map.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBar />
        <Map />
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);