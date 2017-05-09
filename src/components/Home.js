import React from 'react'

const Home = () => (
  <div className='Home'>
    <div>
      <span className='bars'>|</span>
      <span className='welcome'> Tapas the Mornin to Jah </span>
      <span className='bars'>|</span>
      <div className='image-slider-wrapper'>
        <ul className='image-slider'>
          <li>
            <span className='image-title'>Fine Dining</span>
            <img src='https://media-cdn.tripadvisor.com/media/photo-s/06/ac/70/5e/fardi-syrian-restaurant.jpg' alt='' />
          </li>
          <li>
            <span className='image-title'>Ample Seating</span>
            <img src='https://www.lockwoodrestaurant.com/files/2014/09/lockwood-chicago-restaurant-bar-2.jpg' alt='' />
          </li>
          <li>
            <span className='image-title'>Spooky Forest Adjacent!</span>
            <img src='http://wallpaper-gallery.net/images/wallpapers-dark/wallpapers-dark-23.jpg' alt='' />
          </li>
          <li>
            <span className='image-title'>Bird Free!</span>
            <img src='http://3.bp.blogspot.com/-YJ6Om64vPGQ/TfMFnCBVvDI/AAAAAAAAAE8/wNO9WwxzVHY/s1600/Black-Bird-French-Fry.jpg' alt='' />
          </li>
          <li>
            <span className='image-title'>Not That Racist!</span>
            <img src='https://previews.123rf.com/images/alexmax/alexmax1505/alexmax150500004/40110971-Conceptual-peace-and-cultural-diversity-symbol-of-multiracial-hands-making-a-circle-together-around--Stock-Photo.jpg' />
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Home
