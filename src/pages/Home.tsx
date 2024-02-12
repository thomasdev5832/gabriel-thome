import React from 'react';
import './Home.css';
import Hero from '../components/Hero';
import About from '../components/About';
import Dots from '../components/Dots';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className='main'>
      <Hero />
      <Dots />
      <About />
      <Dots />
      <Projects />
      <Dots />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home