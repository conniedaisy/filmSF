import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import accessTokens from './accessTokens.js';
import { Map } from 'immutable';

const containerStyle = {
  height: "80vh",
  width: "80vw",
};

class MyMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [-122.431297, 37.773972],
      zoom: 11,
      locations: [],
    };
  }

  componentWillMount() {
    // this.props.data;
    const dummyPosition = [-122.431297, 37.773972];
    this.setState({
      locations: [
        {
          position: dummyPosition,
        },
      ],
    });
  }

  render() {
    return (
      <div>
        <ReactMapboxGl
          style="mapbox://styles/mapbox/streets-v9"
          center={this.state.center}
          zoom={this.state.zoom}
          accessToken={accessTokens.SODA_api}
          containerStyle={containerStyle}>

          <Layer
            id="marker"
            type="symbol"
            layout={{ "icon-image": "marker-15" }}>
            { 
              this.state.locations.map((location, index) => {
                <Feature 
                  key={index}
                  coordinates={location.position}
                />
              })
            }
          </Layer>

        </ReactMapboxGl>
      </div>
    );
  }
};

export default MyMap;
