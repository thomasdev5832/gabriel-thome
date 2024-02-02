import React from 'react';
import './About.css';
import solidity_logo from '../assets/Solidity_logo.svg';
import typescript_logo from '../assets/typescript-2.svg';
import javascript_logo from '../assets/logo-javascript.svg';
import node_logo from '../assets/nodejs-icon.svg';
import react_logo from '../assets/react-2.svg';
import angular_logo from '../assets/angular-icon.svg';
import tailwind_logo from '../assets/tailwind-css-2.svg';
import hardhat_logo from '../assets/hardhat-seeklogo-com.svg';
import foundry_logo from '../assets/foundry_logo.png';

function About() {
  return (
    <section className="about">
        <h2>About</h2>
        <p>I'm Full-stack Developer focused on Blockchain solutions.<br /><br /> In the realm of blockchain technology, I blend smart contracts, frontend interfaces, and backend systems, propelling innovation with optimized transactions and enriched user experiences.
        </p>
        <div className='stack'>
              <img src={solidity_logo} style={{backgroundColor:"white"}} alt="" />
           
              <img src={typescript_logo} alt="" />
            
              <img src={javascript_logo} alt="" />
          
              <img src={node_logo} alt="" />
           
              <img src={react_logo} alt="" />
            
              <img src={angular_logo} alt="" />
            
              <img src={tailwind_logo} alt="" />
           
              <img src={hardhat_logo} alt="" />
            
              <img src={foundry_logo} alt="" />
           
        </div>
        
    </section>
    
  )
}

export default About