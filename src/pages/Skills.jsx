import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Check, Code, Server, Cpu, Cloud, Terminal } from 'lucide-react'
import { skillsData, marqueeTech } from '../data/portfolio'
import { PageHead, Corners, Marquee, trackSpot, EASE } from '../components/ui'

function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].id)

  const selected = skillsData.find((s) => s.id === activeCategory) || skillsData[0]

  const categoryIcons = {
    backend: Server,
    frontend: Code,
    ai: Cpu,
    cloud: Cloud,
  }

  return (
    <div className="rails page-top">
      <PageHead
        label="Engineering Specs"
        title="Technical Arsenal &"
        accent="Stack Architecture"
        lead="A comprehensive index of languages, libraries, runtimes, and cloud primitives I leverage to engineer web systems."
        meta={[
          ['Architecture', 'MERN / Full-Stack'],
          ['State Paradigm', 'Unidirectional / React 19'],
          ['API Protocol', 'RESTful / JSON'],
          ['Containerization', 'Docker / Alpine'],
        ]}
      />

      {/* Infinite Tech Marquee */}
      <Marquee items={marqueeTech} duration={35} />

      <section className="section">
        <div className="shell" style={{ position: 'relative' }}>
          <Corners />

          {/* Category Tabs Navigation - Sharp Vercel Style */}
          <div
            style={{
              display: 'flex',
              gap: 1,
              background: 'var(--line)',
              border: '1px solid var(--line)',
              marginBottom: 'clamp(32px, 5vw, 48px)',
              flexWrap: 'wrap',
            }}
          >
            {skillsData.map((cat) => {
              const Icon = categoryIcons[cat.id] || Terminal
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    flex: '1 1 200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    padding: '16px 20px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--green)' : 'var(--text-2)',
                    background: isActive ? 'rgba(46, 255, 140, 0.06)' : 'var(--bg-1)',
                    borderBottom: isActive ? '2px solid var(--green)' : '2px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                  }}
                >
                  <Icon size={16} style={{ color: isActive ? 'var(--green)' : 'var(--text-3)' }} />
                  <span>{cat.title.split(' ')[0]}</span>
                </button>
              )
            })}
          </div>

          {/* Active Category Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <div style={{ marginBottom: 32 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <span className="chip chip--green">{selected.badge}</span>
                  <span className="mono" style={{ fontSize: 12, color: 'var(--text-3)' }}>
                    DOMAIN SPECIFICATION
                  </span>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', letterSpacing: '-0.04em', margin: '8px 0 10px' }}>
                  {selected.title}
                </h2>
                <p style={{ fontSize: 15, color: 'var(--text-2)' }}>
                  {selected.subtitle}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="cells cells--auto">
                {selected.items.map((item, idx) => (
                  <div
                    key={item.title}
                    className="spot"
                    onPointerMove={trackSpot}
                    style={{ padding: 'clamp(24px, 3.5vw, 36px)', display: 'grid', gap: 16 }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="mono" style={{ fontSize: 13, color: 'var(--text-3)' }}>
                        0{idx + 1}
                      </span>
                      <span className="chip chip--green">{item.badge}</span>
                    </div>

                    <h3 style={{ fontSize: 20, letterSpacing: '-0.02em', margin: 0 }}>
                      {item.title}
                    </h3>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                      {item.points.map((pt, pIdx) => (
                        <li
                          key={pIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 10,
                            fontSize: 13.5,
                            lineHeight: 1.6,
                            color: 'var(--text-2)',
                          }}
                        >
                          <Check
                            size={14}
                            style={{ color: 'var(--green)', flexShrink: 0, marginTop: 4 }}
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Action Section */}
          <div style={{ marginTop: 'clamp(48px, 7vw, 80px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20, borderTop: '1px solid var(--line)', paddingTop: 32 }}>
            <div>
              <h3 style={{ fontSize: 20, marginBottom: 6 }}>Ready to put these skills to work?</h3>
              <p style={{ fontSize: 14, color: 'var(--text-2)' }}>Check out live projects or initiate a conversation.</p>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <Link to="/Project" className="btn btn--primary">
                View Projects <ArrowUpRight size={16} className="arrow" />
              </Link>
              <Link to="/Contact" className="btn btn--ghost">
                Contact Me <ArrowUpRight size={16} className="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
