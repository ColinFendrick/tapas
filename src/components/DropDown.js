import React from 'react'
import store from '../store'
import { observer } from 'mobx-react'

const DropDown = ({ name }) => (
  <div style={{ 'display': `${store.dropDown[`${name}`]}` }}>
    <ul className='DropDown'>
      <li>{name}</li>
      <li>{name}</li>
    </ul>
  </div>
)

export default observer(DropDown)
