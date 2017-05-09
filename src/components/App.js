import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, Header, Menu, ContactForm, Locations, History, Reservations } from '.'

class App extends Component {
  render () {
    return <Router>
      <div>
        <Header />
        <Route path='/home' component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/contact us' component={ContactForm} />
        <Route path='/locations' component={Locations} />
        <Route path='/history' component={History} />
        <Route path='/reservations' component={Reservations} />
      </div>
    </Router>
  }
}

export default App
