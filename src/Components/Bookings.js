import React from 'react'
import './Bookings.css'
import '../index.css'
import { Button } from './Button';

function Bookings() {
  return (
    <div className=' paddings flexColStart booking-wrapper'>
        <div className=' innerWidth flexCenter booking-container'>
            <form className=' flexCenter form-container'>
            <label for="name"> address</label>
                <input  type='text'  placeholder='Enter location'/>
              
                <input type='text' placeholder='Enter location'/>
               
                <input type='date' value={1} placeholder=''/>
              
                <input type='time' value={2} placeholder=''/>
                { <Button className='hero-button' buttonStyle='btn--outline'>Book Now</Button>}
            </form>
        </div>
    </div>
  )
}

export default Bookings