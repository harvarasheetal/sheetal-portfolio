import React, { useEffect, useState } from 'react'
import computer from '../images/computer.png'
import {FaWhatsapp}from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import {Link} from "react-router-dom"



import './Herosection.css'

function Herosection() {
    const [showConact, setShowContact]=useState(false);

    const fullText = 'Full Stack Developer'
    const [displayedText, setDisplayedText] = useState('')

    useEffect(() => {

        const words = fullText.split(' ')
        let index = 0

        const interval = setInterval(() => {

            if (index < words.length) {

                setDisplayedText(
                    words.slice(0, index + 1).join(' ')
                )

                index++

            } else {

                clearInterval(interval)

            }

        }, 1000)

        return () => clearInterval(interval)

    }, [])


    


    return (

        <div>

            <div className="hero-container">

                {/* left side */}

                <div className="hero-left">

                    <div className="status-badge">

                        <span className="dot"></span>

                        READY TO WORK

                    </div>


                    <h1 className="hero-title">

                        Hello, I'm <br />

                        <span className="highlight-text">
                            SheetalHarvara
                        </span>

                    </h1>


                    <h3 className="hero-subtitle">

                        {displayedText}

                        <span className="cursor">
                            |
                        </span>

                    </h3>


                    <div className="hero-description">

                        <p>
                            Technology based, every complex problem has
                            an elegant solution — you just need the right
                            moves. I build clean, fast, and beautiful web
                            experiences.
                        </p>


                        <div className="hero-buttons">
                           <Link to={'/Project'}>
                            <button className="btn primary-btn">
                                View Projects
                            </button>
                            </Link>

                            <button className="btn btn-secondary"
                            onClick={()=>setShowContact(!showConact)}>
                                {showConact ? "Hide Contact" :"Get In Touch"}

                            </button>
                            </div>
                            {showConact && (<div className="touchwithme">
                            <div className="whatsapp">
                                <a 
      href="https://wa.me/9106788622" 
    //   target="_blank" 
    //   rel="noopener noreferrer"
      style={{ color: '#25D366', fontSize: '40px' }}
    >
      <FaWhatsapp />
      </a>
                            </div>

                            <div className="phoneicon">
                                <a 
      href="tel:+91 9106788622" 
      style={{ color: '#007bff', fontSize: '30px' }}
    >
      <FaPhoneAlt />
    </a>
                            </div>
                            <div className="instagram">
                               <a 
      href="https://instagram.com/web_2me"
      target="_blank" 
      rel="noopener noreferrer"
      style={{ color: '#FF46A2', fontSize: '40px' }}
    >
      <FaInstagram />
      </a>                      
                            </div>
                            <div className="emailicon">
                                  <a 
      href="mailto:harvarasheetal@gmail.com" 
    //   target="_blank" 
    //   rel="noopener noreferrer"
      style={{ color: '#FFC5D3', fontSize: '35px' }}
    >
      <FaEnvelope />
      </a>
                            </div>

                        </div>)}

                    </div>

                </div>


                {/* right side */}

                <div className="right-container">
                 <img src={computer}/>
                </div>

            </div>

        </div>
    )
}

export default Herosection