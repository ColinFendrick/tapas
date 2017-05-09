import React from 'react'
import store from '../store'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

const DropDown = ({ name }) => {
  const list = store.initState[`${name}`].items.map((item, i) => {
    return <Link to='/home' key={i}>
      <li key={i}>{item}</li>
    </Link>
  })
  return <div style={{ 'display': `${store.dropDown[`${name}`].display}` }}>
    <ul className='DropDown'>
      {list}
    </ul>
  </div>
}

export default observer(DropDown)
