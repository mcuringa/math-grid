import React, { Component } from 'react';
import Grid from "./Grid";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Grid cols={18} rows={8} />
      </div>
    );
  }
}

export default App;
