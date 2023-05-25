import React from 'react';
import './Button.css'
import './About.css'
import dodge1 from '../assets/dodge1.png';

const About = () => {
  return (
    <section className="about">
      <div className="container">
       
        <div className="about-content">
          <div className="about-image">
            <img src={dodge1} alt="About Us" />
          </div>
          <div className="about-text">
          <h2>About Us</h2>
            <p>  Welcome to our car website! We are passionate about cars and
                 committed to providing you with the latest information, reviews, and resources 
                 to help you make informed decisions about your automotive needs.</p>
            
            <p>Thank you for choosing our car website!</p>
            <button className='btn--outline'>See all cars</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
