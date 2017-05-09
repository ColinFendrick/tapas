import React from 'react'
import { Link } from 'react-router-dom'
import store from '../store'
import DropDown from './DropDown'

const NavItemDrop = ({ name }) => (
  <div>
    <li className='navItemDrop'
      onMouseOver={() => store.hoverItem(`${name}`)}
      onMouseLeave={store.hoverLeave}>
      <Link to='/name'>
        <div className='navItem'>{name}</div>
      </Link>
      <DropDown name={name} />
    </li>
  </div>
)

export default NavItemDrop
