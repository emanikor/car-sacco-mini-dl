import React, { useState } from 'react';
import './CardCard.css';
import '../index.css';
import wedding from '../assets/wedding.jpg';
import flight from '../assets/flight.png';
import suzzuki from '../assets/suzzuki.jpg';
import black from '../assets/black.jpg';





const CarCard = () => {
  const [cars] = useState([
    {
      id:1,
      image: flight,
      title: 'Airport transfer',
      description: `With additional wait time and flight 
        tracking in case of delays, our service is optimized 
        to make every airport transfer a breeze.`,
    },
    {
      id:2,
      image: suzzuki,
      title: 'Intercity trips',
      description: `Your stressfree solution for 
      traveling between three cities with mercedeec benz all over 
      the world.`,
    },
    {
      id:3,
      image: wedding,
      title: 'Wedding Events',
      description: ` Our friendly, and attentive service combined
       with through attention to details ensure
        you an truly relax and enjoy  your 
        special day.`,
    },
    {
      id:4,
      image:black,
      title: 'Business Meeting',
      description: `Focus on your meeting with
       your partners forget about the road and 
       the car, which will distract your thoughts.`,
    },
  ]);
  return (
    <div className="card-container">
      <div className='flexCenter paddings Services-title'>
        <h1>Services</h1>
        <h4>We invite you to try our Services and personally <br></br>
        guarantee that you will be completely satisfied.</h4>
      </div>
      <div className=" paddings card-grid">
        {cars.map((car) => (
          <div key={car.id} className=" card">
            <img src={car.image} alt={car.title} />
            <div className=" paddings card-body">
              <h3 className="card-title">{car.title}</h3>
              <p className="card-description">{car.description}</p>
              <button className="card-button">Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarCard;
