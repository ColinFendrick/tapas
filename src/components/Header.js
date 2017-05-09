import React from 'react'
import NavBar from './NavBar'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <div className='Header'>
    <NavLink to='/Home'>
      <div className='title'>
        <h1>Tapas the Mornin' to Jah</h1>
        <h3>A Jamaican Irish Spanish Small-Plate Breakfast Restaurant, For You!!</h3>
        <img className='brazil' src='http://bestanimations.com/Flags/SouthAmerica/Brazil/brazilian-flag-animated-gif-3.gif' alt='Brazilian Flag' />
        <img className='ireland' src='http://www.abflags.com/_flags/flags-of-the-world/Ireland%20flag/Ireland%20flag-XXL-anim.gif' alt='Irish Flag' />
      </div>
    </NavLink>
    <NavBar />
  </div>
)

export default Header
