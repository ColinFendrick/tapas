import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header, Menu, ContactForm, Locations, History } from '.'

class App extends Component {
  render () {
    return <Router>
      <div>
        <Header />
        <Route path='/menu' component={Menu} />
        <Route path='/contact us' component={ContactForm} />
        <Route path='/locations' component={Locations} />
        <Route path='/history' component={History} />
      </div>
    </Router>
  }
}

export default App
