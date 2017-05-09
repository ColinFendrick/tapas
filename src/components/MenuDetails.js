import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store'

@observer class MenuDetails extends Component {
  componentDidMount () {
    store.query()
  }

  render () {
    return <div className='MenuDetails'>
      {store.currentMenu.map((item, i) =>
        <h1>{item.name}</h1>
      )}
    </div>
  }
}

export default MenuDetails
