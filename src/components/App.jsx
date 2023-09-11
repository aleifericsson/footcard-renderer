import '../css/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx'
import About from './About';
import Home from './Home';
import Footer from './Footer';

function App() {

  return (
    <>
    <Router>
      <div style={{display: "flex", flexDirection:"column",justifyContent:"space-between"}}>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer/>
      </div>
    </Router>
    </>
  )
}

export default App
