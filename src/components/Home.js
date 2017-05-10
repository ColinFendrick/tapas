import React from 'react'
import { imageLinks } from '../statics'

const Home = () => (
  <div className='Home'>
    <div className='homeTitle'>
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
export default Home
