import React from 'react'
import './Links.css';
import LinksContainer from '../components/LinksContainer'
import Footer from '../components/Footer'
import Contact from '../components/Contact';
import { Helmet } from 'react-helmet';

function Links() {
  return (
    <div className='main'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Gabriel Thome - Links</title>
                <meta name="description" content="Gabriel Thome - Blockchain Developer" />
      </Helmet>
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