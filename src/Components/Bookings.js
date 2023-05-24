import React from 'react'
import './Bookings.css'
import '../index.css'
 

function Bookings() {
  return (
    <div className=' flexCenter paddings booking-wrapper'>
        <div className='flexCenter  BookingInput'>
          <label htmlFor='address'>pick Off address
          </label>
          <div className='input flex'>
            <input type='text' placeholder='enter your location..'/>
            <i class="fa-regular fa-location-dot"></i>
          </div>
          <label htmlFor='address'>Drop Off address
          </label>
          <div className='input flex'>
            <input type='text' placeholder='enter your location..'/>
            <i class="fa-regular fa-location-dot"></i>
          </div>
          <label htmlFor='address'>pick up date
          </label>
          <div className='input flex'>
            <input type='date'name='date' />
          </div>
          <label htmlFor='address'>pick up time
          </label>
          <div className='input flex'>
            <input type='time' name='time' />
          </div>
        </div>
    </div>
  )
}

export default Bookings