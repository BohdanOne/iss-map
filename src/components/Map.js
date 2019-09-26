import React from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

import '../css/Map.css';

import ISS from './ISS';

class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lat: 0,
      lng: 0
    };
  }

  static defaultProps = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 0
  };

  componentDidMount() {
    setInterval(() => {
      axios.get('http://api.open-notify.org/iss-now.json')
      .then(result => {
        const coords = result.data.iss_position;
        this.setState({
          lat: Number(coords.latitude),
          lng: Number(coords.longitude)
        });
      });
    }, 1000);
  }

  render () {
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: ''}} // Insert your own api key from Google Maps
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }
          center={{lat: this.state.lat, lng: this.state.lng}}
        >
          <ISS lat={this.state.lat} lng ={this.state.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;