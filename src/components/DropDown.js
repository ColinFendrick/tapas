import React from 'react'
import store from '../store'
import { observer } from 'mobx-react'
import { NavLink } from 'react-router-dom'

const DropDown = ({ name }) => {
  const list = store.dropDown[`${name}`].items.map((item, i) => {
    return <NavLink to={`/${name}/${item}`} key={i}>
      <li key={i}>{item}</li>
    </NavLink>
  })
  return <div style={{ 'display': `${store.dropDown[`${name}`].display}` }}>
    <ul className='DropDown'>
      {list}
    </ul>
  </div>
}

export default observer(DropDown)
