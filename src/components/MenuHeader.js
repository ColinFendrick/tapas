import React from 'react'
import MenuDetails from './MenuDetails'
import { Route, NavLink } from 'react-router-dom'

const MenuHeader = ({ name }) => (
  <div className='MenuHeader'>
    <NavLink to={`/Menu/${name}`}><h2>{name}</h2></NavLink>
    <Route path={`/Menu/${name}`} render={() => <MenuDetails name={name} />} />
  </div>
)

export default MenuHeader
