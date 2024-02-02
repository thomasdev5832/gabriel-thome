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

function About() {
  return (
    <section className="about">
        <h2>About</h2>
        <p>I'm Full-stack Developer focused on Blockchain solutions.<br /><br /> In the realm of blockchain technology, I blend smart contracts, frontend interfaces, and backend systems, propelling innovation with optimized transactions and enriched user experiences.
        </p>
        <div className='stack'>
          <ul>
            <li>
              <img src={solidity_logo} style={{backgroundColor:"white"}} alt="" />
            </li>
            <li>
              <img src={typescript_logo} alt="" />
            </li>
            <li>
              <img src={javascript_logo} alt="" />
            </li>
            <li>
              <img src={node_logo} alt="" />
            </li>
            <li>
              <img src={react_logo} alt="" />
            </li>
            <li>
              <img src={angular_logo} alt="" />
            </li>
            <li>
              <img src={tailwind_logo} alt="" />
            </li>
            <li>
              <img src={hardhat_logo} alt="" />
            </li>
          </ul>
        </div>
        
    </section>
    
  )
}

export default About