import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Services from './Component/Services';
import Casestudies from './Component/Casestudies';
import More from './Component/More';
import Aboutus from'./Component/Aboutus';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Casestudies" element={<Casestudies/>}/>
          <Route path="/Aboutus"element={<Aboutus/>}/>
          <Route path="/More"element={<More/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App 
