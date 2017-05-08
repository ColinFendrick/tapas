import { observable } from 'mobx'

class Store {
  @observable dropDown = {}

  hoverItem = name => {
    this.dropDown = {}
    this.dropDown = {[name]: 'inline'}
  }
}

const store = new Store()

export default store
