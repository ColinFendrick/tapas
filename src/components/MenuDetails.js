import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store'

@observer class MenuDetails extends Component {
  componentDidMount () {
    store.query(this.props.name)
  }

  render () {
    return <div className='MenuDetails'>
      {store.currentMenu.map((item, i) =>
        <div key={i}>
          <h1 >{item.name}</h1>
          <h4>${item.price}</h4>
          <h3>{item.description}</h3>
        </div>
      )}
    </div>
  }
}

export default MenuDetails
