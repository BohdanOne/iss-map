import React from 'react';
import { getDistance } from 'geolib';

import '../css/DistanceCounter.css';

class DistanceCounter extends React.Component {
  counter = 0;
  coords = [ {latitude: this.props.lat, longitude: this.props.lng }];
  distance = 0;

  componentDidUpdate() {
    if (this.counter === 0) {
      this.coords.push({latitude: this.props.lat, longitude: this.props.lng});
      this.counter++;
    }
    let start = this.coords.pop();
    let end = {latitude: this.props.lat, longitude: this.props.lng};
    let distanceChunk = getDistance(start,end);
    this.coords.push({latitude: this.props.lat, longitude: this.props.lng})
    this.distance += distanceChunk;
  }

  render() {
    return (
      <div className="distance-counter">
        <p>Since you're here, ISS traveled the distance of {this.distance} meters.</p>
      </div>
    );
  }
}


export default DistanceCounter;