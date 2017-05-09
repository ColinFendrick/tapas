import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'
import Body from './Body'

class App extends Component {
  render () {
    return <Router>
      <div>
        <Header />
        <Body />
      </div>
    </Router>
  }
}

export default App
