import React, { Component } from 'react'

import NavItemDrop from './NavItemDrop'

class NavBar extends Component {
  render () {
    return <div className='NavBar'>
      <ul className='navItemList'>
        <NavItemDrop name='History' />
        <NavItemDrop name='Locations' />
        <NavItemDrop name='Contact Us' />
        <NavItemDrop name='Reservations' />
        <NavItemDrop name='Menu' />
      </ul>
    </div>
  }
}

export default NavBar
