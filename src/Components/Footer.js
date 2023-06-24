import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className='footer-1'>
        <div className=' footer-logo ' >
            MYSTILT
            <i class="fa-solid fa-fingerprint"></i>
          </div>
            <p className='footer-text'>subscribe to our newletter</p>
            <div className='form'>
            <input type='email' name='email' placeholder='enter em..' />
            <button className='footer-btn'> sub </button>
            </div>
        </div>
        <div className='footer-2'>
            <h3>Top Cities</h3>
            <ul>
                <li>Nairobi</li>
                <li>Mombasa</li>
                <li>Nakuru</li>
                <li>kisumu</li>
                <li>dar es salamu</li>
            </ul>

        </div>
        <div className='footer-3'>
            <h3>Explore</h3>
            <ul>
                <li>Intercity ride</li>
                <li>Mercedec services</li>
                <li>Chauffer services</li>
                <li>Private car services</li>
                <li>Air transfer</li>
            </ul>

        </div>
        <div className='footer-4'>
            <h3>intercity-Cities rides</h3>
            <ul>
                <li>Nairobi-mombasa</li>
                <li>Mombasa-lamu</li>
                <li>Nakuru-lodwar</li>
                <li>kisumu-eldoret</li>
                <li>dar es salamu-kampala</li>
            </ul>

        </div>
        <div className=' footer-5 '>
            <div className='links'>
        <h3>© {new Date().getFullYear()} MYSTILT</h3>
        
       <li>terms</li>
       <li>privacy policy</li>
       <li>legal notice</li>
       <li>accessibility</li>
        </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer