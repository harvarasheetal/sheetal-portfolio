import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaWhatsapp}from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'

import './Navbar.css'

function Navbar() {
  return (
    <div>
        <div className="main-div">
            {/* my prfolio logo */}
      <div className="logo-name"> Sheetal</div>
      {/* navbar */}
      <div className="navbar">
        <nav>
          <NavLink to='/'></NavLink>
            <NavLink to='/About'>ABOUT</NavLink>
            <NavLink to='/Skills'>SKILLS</NavLink>
            <NavLink to='/Project'>PROJECTS</NavLink>
            <NavLink to='/Contact'>CONTACT</NavLink>
            <NavLink to='/Blog'>BLOG</NavLink>
            <div className="">
                                        <a 
              href="https://wa.me/9106788622" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#25D366', fontSize: '30px' }}
            >
              <FaWhatsapp />
              </a>
                                    </div>
                                    <div className="">
                                                                    <a 
                                          href="tel:+91 9106788622" 
                                          style={{ color: '#007bff', fontSize: '30px' }}
                                        >
                                          <FaPhoneAlt />
                                        </a>
                                                                </div>
        </nav>
        
      </div>

    </div>
    </div>
  )
}

export default Navbar
