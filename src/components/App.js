import React from 'react';

import logo from '../logo192.png';
import '../css/App.css';

import Map from './Map';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header className="heading">
          <img className="logo" src={logo} alt="logo"/>
          <h1 className="title">Actual Position of International Space Station</h1>
        </header>
        <Map />
      </div>
    );
  }
}

export default App;