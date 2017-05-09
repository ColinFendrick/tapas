import React from 'react'
import { NavLink } from 'react-router-dom'
import store from '../store'
import DropDown from './DropDown'

const NavItemDrop = ({ name }) => (
  <div>
    <li className='navItemDrop'
      onMouseOver={() => store.hoverItem(`${name}`)}
      onMouseLeave={store.hoverLeave}>
      <NavLink to={`/${name}`}>
        <div className='navItem'>{name}</div>
      </NavLink>
      <DropDown name={name} />
    </li>
  </div>
)

export default NavItemDrop
