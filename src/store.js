import { observable, action } from 'mobx'

class Store {
  initState = {
    'Menu': {
      'items': ['Jamaican', 'Irish', 'Spanish', 'Breakfast', 'Small Plate'],
      'display': 'none'
    },
    'Contact Us': {
      'items': ['Email', 'Snailmail, fuckhead'],
      'display': 'none'
    },
    'Locations': {
      'items': ['Tampa', 'Dublin', 'East Berlin circa 1988'],
      'display': 'none'
    },
    'History': {
      'items': ['Story', 'Follow Us'],
      'display': 'none'
    }
  }

  @observable dropDown = this.initState

  @action hoverItem = name => {
    this.dropDown = this.initState
    this.dropDown[name] = {...this.dropDown[name], 'display': 'inline'}
  }

  @action hoverLeave = () => {
    this.dropDown = this.initState
  }
}

const store = new Store()

export default store
