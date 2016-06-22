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
      locations: this.props.movieData,
    };
    console.log('-->', this.state.locations)
  }

  // componentWillReceiveProps() {
  //   // const dummyPosition = [-122.431297, 37.773972];
  //   console.log('props: ', this.props.movieData);
  //   this.setState({
  //     locations: this.props.movieData
  //   });
  // }

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
                location.coors ? 
                  <Feature 
                  key={index}
                  coordinates={location.coors} /> : 
                  <Feature
                  key={index}
                  coordinates={[0, 0]}
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



// const initialMap = {
//   center: [-122.431297, 37.773972],
//   zoom: 11,
// };

// let MyMap = ({movieData}) => (
//   <div>
//     <ReactMapboxGl
//       style="mapbox://styles/mapbox/streets-v9"
//       center={initialMap.center}
//       zoom={initialMap.zoom}
//       accessToken={accessTokens.SODA_api}
//       containerStyle={containerStyle}>

//       <Layer
//         type="symbol"
//         layout={ {"icon-image": "harbor-15"} }>
//         {console.log(movieData)}
//         { 
//           movieData.map((entry, index) => (
//             <Feature 
//               key={index}
//               coordinates={entry.coors}
//             />
//           ))
//         }
//       </Layer>



//     </ReactMapboxGl>
//   </div>
// );

