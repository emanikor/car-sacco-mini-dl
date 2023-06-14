
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Bookings from './Components/Bookings';
import CarCard from './Components/CarCard';
import About from './Components/About';
import Fleets from './Components/Fleets';
import data from './Components/data';
import  './index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
  <>
  <Router>
  <Navbar/>
  <Hero/>
  
  
  <Bookings/>
  <CarCard/>
  <About/>
  <Fleets/>
  <data/>
  <Routes>
    <Route path='/' exact/>
  </Routes>
  </Router>
 
  </>
  );
}

export default App;
