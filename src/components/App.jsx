import '../css/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx'
import About from './About';
import Home from './Home';
import Footer from './Footer';
import { useEffect } from 'react';
import { card_data, setData } from '../scripts/cardData';

function App() {
  useEffect(() => {
    setData(card_data);
},[])

  return (
    <div className="app">
    <Router>
      <div style={{display: "flex", flexDirection:"column",justifyContent:"space-between"}}>
      <Navbar/>
      <Routes>
        <Route exact path='/footcard-renderer/' element={<Home />} />
        <Route path='footcard-renderer/about' element={<About />} />
      </Routes>
      <Footer/>
      </div>
    </Router>
    </div>
  )
}

export default App
