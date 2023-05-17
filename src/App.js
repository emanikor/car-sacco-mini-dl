
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
  <>
  <Router>
  <Navbar/>
  <Routes>
    <Route path='/' exact/>
  </Routes>
  </Router>
 
  </>
  );
}

export default App;
