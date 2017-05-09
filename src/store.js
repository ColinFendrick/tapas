import { observable, action } from 'mobx'
import { initialState } from './statics'

class Store {
  @observable dropDown = initialState

  @action hoverItem = name => {
    this.dropDown = initialState
    this.dropDown[name] = {...this.dropDown[name], 'display': 'inline'}
  }

  @action hoverLeave = () => {
    this.dropDown = initialState
  }
}

const store = new Store()

export default store
