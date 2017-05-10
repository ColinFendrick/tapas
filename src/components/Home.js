import React from 'react'
import store from '../store'
import { observer } from 'mobx-react'
import { imageLinks } from '../statics'

const Home = () => (
  <div className='Home'>
    <div className='homeTitle' onMouseOver={() => setTimeout(() => {
      store.welcomeModal()
    }, 5000)}
      style={{'display': store.modal.welcome}} >
      <span className='bars'>|</span>
      <span className='welcome'> Tapas the Mornin to Jah </span>
      <span className='bars'>|</span>
    </div>
    <div className='home-image' style={{'backgroundImage': imageLinks[0]}}>Fine Dining!</div>
    <div className='home-image' style={{'backgroundImage': imageLinks[1]}}>Ample Seating</div>
    <div className='home-image' style={{'backgroundImage': imageLinks[2]}}>Spooky Forest Adjacent</div>
    <div className='home-image' style={{'backgroundImage': imageLinks[3]}}>Bird Free</div>
    <div className='home-image' style={{'backgroundImage': imageLinks[4]}}>Not That Racist!</div>
  </div>
)
export default observer(Home)

// Comments for git check
