import React from 'react'
import './Hero.css';
import '../index.css'
import './Button.css'
import { Button } from './Button';
import   dodge  from '../assets/dodge.png';


function Hero() {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth hero-container'>
    {/* left-hero */}
        <div className='flexColStart left-hero'>
          <h1 className='flexColStart hero-title'>Premium <br></br>car rental in<br/> Nairobi</h1>
          <span className='flexColStart hero-text'>Dont denie yourself the pleasure
            of driving the best Premium cars from around the world here and now
          </span>
          <div className='heros-btn'>
        <button className='btnHero'>Book Now</button>
        <button className='btnHero2'>Sell your car</button>
        </div>
        </div>

        <div className='flexCenter right-hero1'>
         <div className='flexCenter image-container'>
         <img src={dodge}
         alt="car" 
         className="hero-car-section"
          />

         </div>
        </div>
    </div>
    
    </section>
  )
}

export default Hero