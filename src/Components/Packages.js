import React from 'react'
import './Button.css';
import '../index.css'
import './Package.css';
import   dodge1  from '../assets/dodge1.png';
import { Button } from './Button';


const Packages = () => (
 
<section className="package">
  <div className="texts">
<h2 className="flexCenter packageheading">Only today $ 75/day </h2>
  <p className="flexCenter paddings ">take advantage of our hot offers solving a significant amount when rentin a car </p>
  </div>
  <div className='package-row flexCenter'>
    <div className="left-package">
     <h3 className='heading2'>cadillac Escalade</h3>
     <div className='list-wrapped '>
       <ul className='list-1'>
        <li><span>&#10003;</span> for upto 8 passenger</li>
        <li><span>&#10003;</span> Increadible sound system</li>
        <li><span>&#10003;</span> fibre optic lights</li>
        <li><span>&#10003;</span> bar area with fridge</li>
       </ul>
       <ul className='list-2'>
        <li><span>&#10003;</span> for upto 8 passenger</li>
        <li><span>&#10003;</span> Increadible sound system</li>
        <li><span>&#10003;</span> fibre optic lights</li>
        <li><span>&#10003;</span> bar area with fridge</li>
       </ul> 
       </div>
       <div className='pack-button flexColStart'>
        <Button className="btn--outline " >Reserve Now</Button> 
       </div>
    </div>

    <div className="right-packege">
    <div className='image-container'>
        <img src={dodge1}
        alt="car" 
        className="dodge"
        />

</div>
        
    </div>
    </div>
  </section>
)



export default Packages