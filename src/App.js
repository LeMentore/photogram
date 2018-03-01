import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
        <HashRouter>
            <Gallery />
        </HashRouter>
    )
  }
}

export default App;
