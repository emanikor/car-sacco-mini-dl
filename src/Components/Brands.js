import React from 'react'
import './Brands.css';
import   Toyota  from '../assets/Toyota.png';
import   Mercedes  from '../assets/Mercedes.png';
import   Subaru  from '../assets/Subaru.png';
import    bmw  from '../assets/bmw.png';
import  Mazda  from '../assets/Mazda.png';
// import   Toyota  from '../assets/Toyota.png';
// import   Toyota  from '../assets/Toyota.png';

function brands() {
  return (
    <div className='brand'>
        <div className='brand-container'>
            <div className='brandimage'>
            <img src={Toyota}
         alt="car" 
         className="hero-car-section"
          />
           <img src={Mercedes}
         alt="car" 
         className="hero-car-section"
          />
           <img src={Subaru}
         alt="car" 
         className="hero-car-section"
          />
           <img src={bmw}
         alt="car" 
         className="hero-car-section"
          />
           <img src={Mazda}
         alt="car" 
         className="hero-car-section"
          />
            </div>
        </div>
    </div>
  )
}

export default brands