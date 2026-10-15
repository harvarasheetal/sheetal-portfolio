import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import './Projectsection.css'; // Ensure file name casing matches
import EasySell from '../images/EasySell.png'
import discord from '../images/discord.png'
import smartwatch from '../images/smartwatch.png'
import portfolio from '../images/portfolio.png'

import ice from '../images/ice.png'
import arjuna from '../images/arjuna.png'
import codeEditor from '../images/codeEditor.png'
import { image } from 'framer-motion/client';

const projectsData = [
  { id: '01', title: 'EasySell', desc: 'Node,js', platefrom: 'Ecommerce', border: 'orange',image:EasySell },
  { id: '02', title: 'SmartWatch', desc: 'JavaScript', platefrom: 'Technology', border: 'blue',image:smartwatch },
  { id: '03', title: 'Discord', desc: 'JavaScript', platefrom: 'Developer', border: 'yellow', image:discord},
  { id: '04', title: 'Portfolio Site', desc: 'React', platefrom: 'Framer-Motion', border: 'cyan' ,image:portfolio },
  { id: '05', title: 'ICEWebsite', desc: 'Fronted', platefrom: 'UI', border: 'green',image:ice },
  { id: '06', title: 'The Arjuna', desc: 'Javascript', platefrom: 'Game', border: 'red', image:arjuna },
];

function Projectsection() {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;

  const totalProjects = projectsData.length;
  const visibleProjects = projectsData.slice(currentPage, currentPage + cardsPerPage);

  const canNext = currentPage + cardsPerPage < totalProjects;
  const canPrev = currentPage > 0;

  const handleNext = () => {
    if (canNext) {
      setCurrentPage((prev) => prev + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (canPrev) {
      setCurrentPage((prev) => prev - cardsPerPage);
    }
  };

  return (
    <div className="portfolio-section">
      <div className="projects-container">
        <h3 className="section-label">03 - PROJECTS</h3>
        <h1 className="main-title">
          Featured <span className="work">Work</span>
        </h1>
        <p className="subtitle">Hover a card to reveal details</p>

        {/* Outer wrapper positioning the grid and arrows cleanly */}
        <div className="projects-wrapper">
          <div className="projects-grid">
            <AnimatePresence mode="wait">
              {visibleProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  totalCount={totalProjects}
                  staggerDelay={index * 0.1}
                  // image={image}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="pagination-arrows-cell">
            <button
              onClick={handlePrev}
              disabled={!canPrev}
              className={`pagination-arrow ${!canPrev ? 'disabled' : ''}`}
              aria-label="Previous Projects"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              disabled={!canNext}
              className={`pagination-arrow ${!canNext ? 'disabled' : ''}`}
              aria-label="Next Projects"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({ project, totalCount, staggerDelay }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  // Format total count to always be 2 digits (e.g., 06)
  const formattedTotal = String(totalCount).padStart(2, '0');

  return (
    <motion.div
      ref={ref}
      className={`project-card ${project.border}-border`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: staggerDelay, duration: 0.8, ease: [0.25, 0.1,0.25,1.0] }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      <div className="card-top">
        {/* <span className="card-id">{project.id} / {formattedTotal}</span> */}
      </div>

      <div className="card-middle">
        
          <div className="imageprojects">
            <img src={project.image}></img>
          </div>
        {/* <h3 className="card-title">{project.title}</h3> */}
      </div>

      <div className="card-bottom">
        <span className="card-tags">{project.desc}</span>
        <span className="card-plateform">{project.platefrom}</span>
        <h3 className="card-title">{project.title}</h3>

      </div>
    </motion.div>
  );
};

export default Projectsection;