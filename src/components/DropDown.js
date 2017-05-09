import React from 'react'
import store from '../store'
import { observer } from 'mobx-react'

const DropDown = ({ name }) => {
  const list = store.initState[`${name}`].items.map((item, i) => {
    return <li key={i}>{item}</li>
  })
  return <div style={{ 'display': `${store.dropDown[`${name}`].display}` }}>
    <ul className='DropDown'>
      {list}
    </ul>
  </div>
}

export default observer(DropDown)
