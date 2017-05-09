import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Body from './Body'
import Menu from './Menu'

class App extends Component {
  render () {
    return <Router>
      <div>
        <Header />
        <Route path='/menu' component={Menu} />
      </div>
    </Router>
  }
}

export default App
