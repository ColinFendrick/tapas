import React from 'react'
import MenuDetails from './MenuDetails'
import { BrowserRouter as Route, NavLink } from 'react-router-dom'

const Menu = () => (
  <div className='Menu'>
    <NavLink to='/Menu/Jamaican'><h2>Jamaican</h2></NavLink>
    <Route path='/Menu/Jamaican' component={MenuDetails} />
    <NavLink to='/Menu/Irish'><h2>Irish</h2></NavLink>
    <NavLink to='/Menu/Spanish'><h2>Spanish</h2></NavLink>
    <NavLink to='/Menu/Small-Plate'><h2>Small Plate</h2></NavLink>
    <NavLink to='/Menu/Breakfast'><h2>Breakfast</h2></NavLink>
  </div>
)

export default Menu
