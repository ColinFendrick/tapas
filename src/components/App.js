import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Menu from './Menu'
import ContactForm from './ContactForm'
import Locations from './Locations'
import History from './History'

class App extends Component {
  render () {
    return <Router>
      <div>
        <Header />
        <Route path='/menu' component={Menu} />
        <Route path='/contact_us' component={ContactForm} />
        <Route path='/locations' component={Locations} />
        <Route path='/history' component={History} />
      </div>
    </Router>
  }
}

export default App
