import React from 'react'
import store from '../store'
import DropDown from './DropDown'

const NavItemDrop = ({ name }) => (
  <li className='navItemDrop'
    onMouseOver={() => store.hoverItem(`${name}`)}
    onMouseLeave={store.hoverLeave}>
    <div className='navItem'>{name}</div>
    <DropDown name={name} />
  </li>
)

export default NavItemDrop
