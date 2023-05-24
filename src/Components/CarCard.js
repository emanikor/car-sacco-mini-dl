import React, { useState } from 'react';
import './CardCard.css';
import   flight  from '../assets/flight.png';


const CarCard = () => {
  const [cars] = useState([
    {
      image: 'flight.png',
      title: 'Airport transfer',
      description: `With additional wait time and flight 
        tracking in case of delays, our service is optimized 
        to make every airport transfer a breeze.`,
    },
    {
      image: 'flight.png',
      title: 'Intercity trips',
      description: `With additional wait time and flight 
        tracking in case of delays, our service is optimized 
        to make every airport transfer a breeze.`,
    },
    {
      image: 'flight.png',
      title: 'Wedding Events',
      description: `With additional wait time and flight 
        tracking in case of delays, our service is optimized 
        to make every airport transfer a breeze.`,
    },
    {
      image: 'flight.png',
      title: 'Business Meeting',
      description: `With additional wait time and flight 
        tracking in case of delays, our service is optimized 
        to make every airport transfer a breeze.`,
    },
  ]);

  return (
    <div>
        <div className='flexCenter paddings Services-title'>
          <h1>Services</h1>
          <h4>We invite you to try our Services and personaly<br></br> 
          guarantee that will be completely satisified</h4>
        </div>
      {cars.map((car, index) => (
      
        <div key={index} className=" flexCenter  card">
          <div className='cardContainer'></div>
          <img src={car.image} alt={car.title} />
          <div className=" card-body">
            <h3 className="card-title">{car.title}</h3>
            <p className="card-description">{car.description}</p>
            <button className="card-button">Read more</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarCard;
