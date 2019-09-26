import React from 'react';
import { getDistance } from 'geolib';

import '../css/DistanceCounter.css';

class DistanceCounter extends React.Component {
  counter = 0;
  coords = [ {latitude: this.props.lat, longitude: this.props.lng }];
  distance = 0;

  componentDidMount() {
    this.startTime = new Date().getTime();
  }

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
    this.counter++;
  }

  countSpeed() {
    return Math.round( this.distance / this.counter );
  }

  render() {
    return (
      <div className="distance-counter">
        <p>Since you're here: ISS traveled the distance of { this.distance / 1000 } kilometers, with average speed of { this.countSpeed() } m/s.</p>
      </div>
    );
  }
}

export default DistanceCounter;