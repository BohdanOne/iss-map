import React from 'react';

import Map from './Map';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Actual Position of International Space Station</h1>
        <Map />
      </div>
    );
  }
}

export default App;