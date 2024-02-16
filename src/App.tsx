import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Links from './pages/Links';
import DigitalSolutions from './pages/DigitalSolutions';


function App() {
  useEffect(() => {
    document.title = "Gabriel Thome - Blockchain Developer";
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/links' element={<Links />} />
          <Route path='/digital-solutions' element={<DigitalSolutions />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
