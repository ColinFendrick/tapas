import { observable } from 'mobx'

class Store {
  @observable dropDown = {
    'Menu': 'none',
    'About Us': 'none',
    'Locations': 'inline',
    'Contact Us': 'none'
  }

  hoverItem = name => {
    // console.log(name)
    this.dropDown = {
      'Menu': 'none',
      'About Us': 'none',
      'Locations': 'inline',
      'Contact Us': 'none'
    }
    // this.dropDown = {...this.dropDown, `${name}`: 'inline'}
    // console.log(this.dropDown)
  }
}

const store = new Store()

export default store
