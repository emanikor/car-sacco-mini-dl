import React from 'react';
import './Bookings.css';

function Bookings() {
  return (
    <div className='booking-wrapper'>
      <div className='BookingInput'>
        <div className='input'>
          <label htmlFor='pick-address' className='label'>Pick-up Address</label>
          <div className='input-wrapper'>
            <input type='text' id='pick-address' placeholder='Enter your location...' />
            <i className='fa-regular fa-location-dot'></i>
          </div>
        </div>
        <div className='input'>
          <label htmlFor='drop-address' className='label'>Drop-off Address</label>
          <div className='input-wrapper'>
            <input type='text' id='drop-address' placeholder='Enter your location...' />
            <i className='fa-regular fa-location-dot'></i>
          </div>
        </div>
        <div className='input'>
          <label htmlFor='pick-date' className='label'>Pick-up Date</label>
          <input type='date' id='pick-date' />
        </div>
        <div className='input'>
          <label htmlFor='pick-time' className='label'>Pick-up Time</label>
          <input type='time' id='pick-time' />
        </div>
        <button className='booking-button'>Search</button>
      </div>
    </div>
  );
}

export default Bookings;
