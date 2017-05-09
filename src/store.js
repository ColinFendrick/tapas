import { observable, action } from 'mobx'
import { initialState } from './statics'

class Store {
  @observable dropDown = initialState
  @observable currentMenu = []

  @action hoverItem = name => {
    this.dropDown = initialState
    this.dropDown[name] = {...this.dropDown[name], 'display': 'inline'}
  }

  @action hoverLeave = () => {
    this.dropDown = initialState
  }

  query = slug => {
    const url = 'https://api.graph.cool/simple/v1/cj2hpn26v8fx70187k7f75y1o'
    window.fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/JSON' },
      body: JSON.stringify({'query': `query {
          allMenus(filter: {slug: "${slug}"}) {
            name,
            slug,
            items {
              name,
              description,
              price
            }
          }
        }`})
    })
    .then(r => r.json())
    .then(({data}) => { this.currentMenu = data.allMenus[0].items })
  }
}

const store = new Store()

export default store
