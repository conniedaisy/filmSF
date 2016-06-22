import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import accessTokens from './accessTokens.js';
// import MapboxCSS from "./../../node_modules/react-mapbox-gl/dist/mapbox-css/mapbox-gl.css";


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
      locations: [{
        id: 0,
        position: dummyPosition,
      }],
    });

    console.log('state: ', this.state.locations)

    // this.setState({
    //   locations: [[
    //     {
    //       id: 0,
    //       position: dummyPosition,
    //     },
    //   ]],
    // });
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
            type="symbol"
            layout={ {"icon-image": "harbor-15"} }>
            { 
              this.state.locations.map((location, index) => (
                <Feature 
                  coordinates={[-122.431297, 37.773972]}
                />
              ))
            }
          </Layer>



        </ReactMapboxGl>
      </div>
    );
  }
};

export default MyMap;


// this.setState(({locations}) => {
//   locations: locations.merge(new Map({
//     id: 0,
//     position: dummyPosition,
//   })).merge(new Map({
//     id: 1,
//     position: dummyPosition1,
//   })) 
// })

// <Feature 
//   coordinates={[-122.431297, 37.773972]}
// />

// <Layer
//   type="circle"
//   paint={{ "circle-radius": 30, "circle-color": "#E54E52", "circle-opacity": .8 }}>
//   <Feature coordinates={[-122.431297, 37.773972]}/>
// </Layer>


