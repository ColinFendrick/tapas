import { observable } from 'mobx'

class Store {
  @observable dropDown = {
    'Menu': 'none',
    'Contact Us': 'none',
    'Locations': 'none',
    'History': 'none'
  }

  hoverItem = name => {
    this.dropDown = {
      'Menu': 'none',
      'Contact Us': 'none',
      'Locations': 'none',
      'History': 'none'
    }
    this.dropDown = {[name]: 'inline'}
    console.log(this.dropDown)
  }

  hoverLeave = () => {
    console.log(`Hey`)
    this.dropDown = {
      'Menu': 'none',
      'Contact Us': 'none',
      'Locations': 'none',
      'History': 'none'
    }
  }
}

const store = new Store()

export default store
