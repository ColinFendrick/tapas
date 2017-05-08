import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store'

import DropDown from './DropDown'

@observer class NavBar extends Component {
  _hover = name => {
    store.hoverItem(name)
  }

  render () {
    return <div className='NavBar'>
      <ul className='navItemList'>
        <li className='navItemDrop' onMouseOver={() => this._hover('Contact Us')}>
          <div className='navItem'>Contact Us</div>
          <DropDown name='Contact Us' />
        </li>
        <li className='navItemDrop' onMouseOver={() => this._hover('Locations')}>
          <div className='navItem' >Locations</div>
          <DropDown name='Locations' />
        </li>
        <li className='navItemDrop' onMouseOver={() => this._hover('About Us')}>
          <div className='navItem'>About Us</div>
          <DropDown name='About Us' />
        </li>
        <li className='navItemDrop' onMouseOver={() => this._hover('Menu')}>
          <div className='navItem'>Menu</div>
          <DropDown name='Menu' />
        </li>
      </ul>
    </div>
  }
}

export default NavBar
