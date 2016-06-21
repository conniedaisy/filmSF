import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import accessTokens from './accessTokens.js';
import mapboxStyle from './mapboxStyle.js';

const containerStyle = {
  height: "100vh",
  width: "100vw",
};


class MyMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [-0.109970527, 51.52916347],
      zoom: 11,
      skip: 0,
    };
  }

  render() {
    return (
      <div>
        <ReactMapboxGl
          style={mapboxStyle}
          center={this.state.center}
          zoom={this.state.zoom}
          accessToken={accessTokens.SODA_api}
          containerStyle={containerStyle}>
        </ReactMapboxGl>
      </div>
    );
  }
};

export default MyMap;
