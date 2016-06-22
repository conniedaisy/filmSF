// TODO: implement search
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input type="text" name="search" placeholder="Search Movies" autocomplete="on" />
      </div>
    );
  }
};

export default SearchBar;