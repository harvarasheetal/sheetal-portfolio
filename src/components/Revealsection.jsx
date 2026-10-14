import React, { useRef } from 'react'
import {motion,scale,useInView} from 'framer-motion'
import './Revealsection.css'

function Revealsection() {
    const ref = useRef(null)
    const isInView = useInView(ref,{ amount:0.5})

    // core container animation

    const containerVariants = {
        hiddien:{
            opacity:0, y:50,
        
        visible:{
            opacity:1, y:0
        },
        transition:{
            type:'spring',
            stiffness:100,
            damping:20,
            staggerChildren:0.2
        }
    }
    }

    // left side animation variants

    const itemVariantsLeft={
      hidden:{
        opacity:0,
        x:-30
      },
      visible:{
        opacity:1,
        x:0
      }
    }

    // right side motion

    const itemVariantsRight={
        hidden:{opacity:0, scale:0.8},
        visible:{opacity:1, scale:1}
    }
  return (
    <div>
      <div className="portfolio-section">
        
        <div className="highlight-text2">
            The <span className="highlight">Developer</span> Behind The Cube

        </div>

      {/* Simulation for existing content flow */}
      {/* <div className="page-spacer">
        <h2 style={{ color: '#aaa', textAlign: 'center' }}>Scroll down to see the section reveal</h2>
      </div> */}

      <motion.div
        ref={ref}
        // Triggers the special motion trails defined in CSS
        className={`reveal-content-container ${isInView ? "visible" : ""}`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* ========================================= */}
        {/* LEFT BLOCK: STAGGERED TEXT CONTENT ONLY */}
        {/* ========================================= */}
        <div className="text-content">
          <motion.h1 variants={itemVariantsLeft}>
          </motion.h1>

       <motion.p variants={itemVariantsLeft} className="trail-paragraph">
            Just like a Rubik's Cube, complex problems have elegant solutions — you just need the right algorithm. I'm a passionate developer who turns intricate challenges into clean, functional code.
            With expertise in front-end development, scripting, and automation, I bring ideas to life across the full stack. Each project is a new puzzle, and I approach every one with curiosity and precision.

          </motion.p>
          <motion.p variants={itemVariantsLeft} className="trail-paragraph">
            <p className='quote'>"Any sufficiently complex problems, broken down step by step, becomes beautifully simple"</p>
          </motion.p>
          
          {/* NOTICE: The stats block is GONE from here */}
        </div>

        {/* ============================================ */}
        {/* RIGHT BLOCK: CIRCLE GRAPHIC & MOVED STATS */}
        {/* ============================================ */}
        <div className="graphic-and-stats-block">
          {/* The abstract circle graphic */}
          <motion.div variants={itemVariantsRight} className="circular-graphic">
            <div className="circle">
              <span className="blurred-name">Sheetal harvara</span>
            </div>
          </motion.div>

          {/* =========================================== */}
          {/* FIXED LOCATION: Stats are now here */}
          {/* We now use itemVariantsRight so it follows */}
          {/* the circle's zoom animation style.      */}
          {/* =========================================== */}
          <motion.div 
            variants={itemVariantsRight} // Switched to Right variants
            className="project-stats"
          >
            <div className="core-part grid-container ">
            <div className=" grid-item core-tech">
            <span className=" plus core-tech">10+</span><br></br><br></br>
                    CORESTECH
            </div>

            <div className="  grid-item figure projects">

            <span className=" plus projects">20+</span><br></br><br></br>
            PROJECTS
            </div>
            <div className=" grid-item figure experience">
              
            <span className= "  plus experience">1+</span><br></br><br></br>
            EXPERENCE
            
            </div>


            <div className="  grid-item figure best-time">
              
            <span className="   plus best-time">3.5+</span><br></br><br></br>
            BESTTIME
            
            </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  
    </div>
  )
}

export default Revealsection
