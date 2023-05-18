import React from 'react'
import './Hero.css';
import { Button } from './Button';
import   dodge  from '../assets/dodge.png';


function Hero() {
  return (
    <div className='hero'>
        <div className='left-hero'>
          <h1><span>Premium</span> <br></br>car rental in Nairobi</h1>
          <h3>Dont denie yourself the pleasure
            of driving the best Premium cars from around the world here and now
          </h3>
          { <Button buttonStyle='btn--outline'>Book Your Car</Button>}
        </div>

        <div className='right-hero'>
         <div className='imageleft'>
         <img src={dodge}
         alt="car" 
         className="hero-car-section"
          />

         </div>
        </div>
    </div>
  )
}

export default Hero