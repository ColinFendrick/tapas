import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store'

@observer class MenuDetails extends Component {
  componentDidMount () {
    store.query(this.props.name)
  }

  render () {
    return <div>
      {store.currentMenu.map((item, i) =>
        <div key={i} className='MenuDetails'>
          <h1>{item.name}</h1>
          <h4>${item.price}</h4>
          <h3>{item.description}</h3>
        </div>
      )}
    </div>
  }
}

export default MenuDetails
