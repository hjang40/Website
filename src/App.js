import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/" exact element={<Home/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
    </Router>
         
    </>
  );
}

export default App;
