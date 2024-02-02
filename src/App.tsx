import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Dots from './components/Dots';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Dots />
      <Projects />
      <Dots />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
