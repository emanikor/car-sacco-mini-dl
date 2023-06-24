import React, { useState } from 'react';
import './CardCard.css';
import '../index.css'
// import  './assets';




const CarCard = () => {
  const [cars] = useState([
    {
      id:1,
      image: 'flight.png',
      title: 'Airport transfer',
      description: `With additional wait time and flight 
        tracking in case of delays, our service is optimized 
        to make every airport transfer a breeze.`,
    },
    {
      id:2,
      image: 'suzzuki.jpg',
      title: 'Intercity trips',
      description: `With additional wait time and flight 
        tracking in case of delays, our service is optimized 
        to make every airport transfer a breeze.`,
    },
    {
      id:3,
      image: 'wagon.jpg',
      title: 'Wedding Events',
      description: `With additional wait time and flight 
        tracking in case of delays, our service is optimized 
        to make every airport transfer a breeze.`,
    },
    {
      id:4,
      image: 'black subaru.png',
      title: 'Business Meeting',
      description: `With additional wait time and flight 
        tracking in case of delays, our service is optimized 
        to make every airport transfer a breeze.`,
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
        {cars.map((car, index) => (
          <div key={index.id} className=" card">
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
