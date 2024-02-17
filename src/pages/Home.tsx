import React, { useEffect } from 'react';
import './Home.css';
import Hero from '../components/Hero';
import About from '../components/About';
import Dots from '../components/Dots';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

function Home() {

  return (
    <div className='main'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Gabriel Thome - Blockchain Developer</title>
                <meta name="description" content="Gabriel Thome - Blockchain Developer" />
      </Helmet>
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