import React from 'react'
import './Links.css';
import LinksContainer from '../components/LinksContainer'
import Footer from '../components/Footer'
import Contact from '../components/Contact';

function Links() {
  return (
    <div className='main'>
        <div className='names'>
            <h1>Gabriel Thome</h1>
            <p>Software Development</p>
        </div>
        <LinksContainer />
        <Contact />
        <Footer />
    </div>
  )
}

export default Links