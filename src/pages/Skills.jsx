import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Skills.css';

const skillsData = [
  {
    id: 'backend',
    categoryTitle: 'Backend Engineering',
    categorySubtitle: 'Structured breakdown of backend technologies & frameworks',
    badgeColor: '#ff5722',
    subSkills: [
      {
        id: 1,
        title: 'Node.js Engine',
        badge: 'Node.js Runtime',
        points: [
          'Building asynchronous non-blocking architectures',
          'Event-driven JavaScript runtime engine',
          'Runtimes for high-concurrency systems',
          'npm package ecosystem & module publishing'
        ]
      },
      {
        id: 2,
        title: 'Express.js & APIs',
        badge: 'Framework',
        points: [
          'RESTful API Design & Contract Architecture',
          'Custom Middleware execution pipeline',
          'Routing & error handler middleware',
          'Request validation with Zod / Joi'
        ]
      },
      {
        id: 3,
        title: 'Firebase Suite',
        badge: 'BaaS / Cloud',
        points: [
          'Firestore NoSQL real-time synchronization',
          'OAuth 2.0 & Firebase Auth implementation',
          'Serverless Cloud Functions triggers',
          'Cloud Storage bucket security rules'
        ]
      },
      {
        id: 4,
        title: 'MongoDB & Databases',
        badge: 'NoSQL Database',
        points: [
          'Document schema modeling & validation',
          'Mongoose ODM integration & indexing',
          'Aggregation pipelines & lookup queries',
          'Atlas cluster management & scaling'
        ]
      }
    ]
  },
  {
    id: 'frontend',
    categoryTitle: 'Frontend Development',
    categorySubtitle: 'Modern UI/UX rendering frameworks, state, and styling',
    badgeColor: '#1e88e5',
    subSkills: [
      {
        id: 1,
        title: 'React Ecosystem',
        badge: 'UI Library',
        points: [
          'Component-driven UI architecture',
          'Custom React Hooks & Context API state',
          'Virtual DOM reconciler & optimization',
          'Framer Motion page transition animations'
        ]
      },
      {
        id: 2,
        title: 'Modern JavaScript',
        badge: 'Core Language',
        points: [
          'ES6+ functional programming syntax',
          'Async / Await promise concurrency',
          'Event Loop & microtask queue handling',
          'Modular ES Import / Export patterns'
        ]
      },
      {
        id: 3,
        title: 'Tailwind CSS',
        badge: 'Styling',
        points: [
          'Utility-first responsive layout design',
          'Custom color themes & config extensions',
          'JIT compiler optimization & purge',
          'Dark mode mode switching setup'
        ]
      },
      {
        id: 4,
        title: 'HTML5 & CSS3',
        badge: 'Web Standard',
        points: [
          'Semantic layout for high SEO ranking',
          'CSS Flexbox & CSS Grid layouts',
          'Web accessibility (a11y) standards',
          'Custom CSS properties & animations'
        ]
      }
    ]
  },
  {
    id: 'ai',
    categoryTitle: 'AI Assisted Workflow',
    categorySubtitle: 'Generative AI tools and prompt engineering practices',
    badgeColor: '#ffd700',
    subSkills: [
      {
        id: 1,
        title: 'Prompt Engineering',
        badge: 'AI Prompting',
        points: [
          'System prompt context crafting',
          'Multi-modal prompt chaining strategy',
          'Zero-shot & Few-shot prompt tuning',
          'Automated UI generation pipelines'
        ]
      },
      {
        id: 2,
        title: 'Code Optimization',
        badge: 'Refactoring',
        points: [
          'Algorithmic time complexity reduction',
          'Legacy codebase cleanup with AI',
          'Type safety enrichment via TypeScript',
          'Reducing bundle sizes and tech debt'
        ]
      },
      {
        id: 3,
        title: 'AI Debugging',
        badge: 'Pair Programming',
        points: [
          'Stack trace & error log diagnosis',
          'Automated edge-case test creation',
          'Memory leak & memory profile analysis',
          'Automated unit test generation'
        ]
      }
    ]
  },
  {
    id: 'cloud',
    categoryTitle: 'Cloud & DevOps',
    categorySubtitle: 'Containerization, CI/CD pipelines, and server infrastructure',
    badgeColor: '#4caf50',
    subSkills: [
      {
        id: 1,
        title: 'GitHub & Versioning',
        badge: 'VCS / CI-CD',
        points: [
          'Git flow & feature branching strategies',
          'GitHub Actions automated deployment',
          'Pull request peer code review rules',
          'Semantic versioning & release tags'
        ]
      },
      {
        id: 2,
        title: 'Docker Containerization',
        badge: 'DevOps',
        points: [
          'Multi-stage optimized Dockerfiles',
          'Docker Compose multi-service setup',
          'Container image registry management',
          'Lightweight Alpine base images'
        ]
      },
      {
        id: 3,
        title: 'Cloud AWS Architecture',
        badge: 'Cloud Infrastructure',
        points: [
          'AWS S3 bucket asset hosting',
          'AWS EC2 virtual server deployments',
          'AWS Lambda serverless functions',
          'CloudWatch log monitoring setup'
        ]
      }
    ]
  }
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].id);

  const selectedData = skillsData.find((s) => s.id === activeCategory);

  return (
    <div className="skills-page-wrapper">
      {/* Category Selection Bar */}
      <div className="category-tabs-nav">
        {skillsData.map((cat) => (
          <button
            key={cat.id}
            className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
            style={{
              borderColor: activeCategory === cat.id ? cat.badgeColor : 'transparent',
            }}
          >
            <span
              className="tab-dot"
              style={{ backgroundColor: cat.badgeColor }}
            ></span>
            {cat.categoryTitle}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedData.id}
          className="skills-content-container"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="content-header">
            <h1 className="header-title">{selectedData.categoryTitle}</h1>
            <p className="header-subtitle">{selectedData.categorySubtitle}</p>
          </div>

          {/* Cards Grid */}
          <div className="skills-cards-grid">
            {selectedData.subSkills.map((subskill) => (
              <div key={subskill.id} className="skill-card-box">
                <div className="card-top">
                  <h3 className="card-heading">
                    {subskill.id}. {subskill.title}
                  </h3>
                  <span
                    className="card-badge"
                    style={{
                      color: selectedData.badgeColor,
                      borderColor: `${selectedData.badgeColor}33`,
                      backgroundColor: `${selectedData.badgeColor}15`,
                    }}
                  >
                    {subskill.badge}
                  </span>
                </div>

                <ol type="a" className="points-list">
                  {subskill.points.map((pt, index) => (
                    <li key={index} className="point-item">
                      <span className="bullet-letter">
                        {String.fromCharCode(97 + index)}.
                      </span>
                      <span className="bullet-text">{pt}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Skills;