import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Gallery from './Gallery'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Gallery />
        </BrowserRouter>
    )
  }
}

export default App
