import React from 'react'
import store from '../store'
import { observer } from 'mobx'

const DropDown = ({ name }) => (
  <div style={{ 'display': `${store.dropDown.name}` }}>
    <ul className='DropDown'
      onMouseOver={() => {
        console.log(`${store.dropDown.name}`)
      }}>
      <li>{name}</li>
      <li>{name}</li>
    </ul>
  </div>
)

// export default observer(DropDown)
export default DropDown
