import React, { useEffect, useRef } from 'react';
import './Skilltech.css'; // Don't forget to create this CSS file
import fronted from '../images/fronted.png'
import backend from '../images/backend.png'
import Aiasisted from '../images/Aiassisted.png'
import cloud from '../images/cloud.png'

function Skilltech(){
  // 1. Create references (ref) for each card.
  // We use references to easily access the DOM elements.
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  useEffect(() => {
    // 2. Set up the Intersection Observer API.
    // This API allows us to run code when an element enters the viewport.

    const observer = new IntersectionObserver(
      (entries) => {
        // Entries is an array of objects for each observed element.
        entries.forEach((entry) => {
          // Check if the observed element is currently in the viewport.
          if (entry.isIntersecting) {
            // If it is, add the 'show-card' class.
            // This is the class that will have the transition in CSS.
            entry.target.classList.add('show-card');
          } 
          else {
          // If it IS NOT intersecting (scrolled away):
          // Remove the 'show-card' class. This resets it 
          // to its hidden state, ready to animate again.
          entry.target.classList.remove('show-card');
        }
        });
      },
      // Optional: 'threshold' controls how much of the element must be
      // visible before 'isIntersecting' is true. (0.5 = 50% visible).
      { threshold: 0.5 } 
    );

    // 3. Start observing each card element.
    // We access the DOM element using .current
    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);
    if (card3Ref.current) observer.observe(card3Ref.current);
    if (card4Ref.current) observer.observe(card4Ref.current);

    // 4. Cleanup function to stop observing when the component unmounts.
    // This is important for performance.
    return () => {
      observer.disconnect();
    };
  }, []); // Run this effect only once on mount.

  // 5. Structure of the component.
  // Each card uses one of the refs we created.
  return (
    <div className="tech-stack-container">
      <h2>02 - SKILLS</h2>
      <h1>My <span className='next-part'>Tech Stack</span></h1>

      <div className="cards-grid">
        {/* Card 1: Backend Engineering (Orange) */}
        <div className="stack-card card-1" ref={card1Ref}>
          <div className="cube-wrapper">
            <div className="skillicon">
              <img src={backend}/>
            </div>
          </div>
          <h3>Backend Engineering</h3>
          <p>Node.js, Express, Firebase, REST APIs, Mongodb,</p>
        </div>

        {/* Card 2: Frontend (Blue) */}
        <div className="stack-card card-2" ref={card2Ref}>
          <div className="cube-wrapper">
            <div className="skillicon">
              <img src={fronted}></img>
            </div>
          </div>
          <h3>Frontend</h3>
          <p>React, Javascript.js, Python, Tailwind CSS, Html,</p>
        </div>

        {/* Card 3: AI Engineering (Yellow) */}
        <div className="stack-card card-3" ref={card3Ref}>
          <div className="cube-wrapper">
            <div className="skillicon">
              <img src={Aiasisted}/>
            </div>
          </div>
          <h3>AI Assisted</h3>
          <p>Prompt, Optimize, Debuging</p>
        </div>

        {/* Card 4: Systems & Cloud (Green) */}
        <div className="stack-card card-4" ref={card4Ref}>
          <div className="cube-wrapper">
            <div className="skillicon">
              <img src={cloud}/>
            </div>
          </div>
          <h3>Systems & Cloud</h3>
          {/* Placeholder description for the 4th card */}
          <p>Description placeholder...</p>
        </div>
      </div>
    </div>
  );
};

export default Skilltech