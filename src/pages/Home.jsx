import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  ArrowRight,
  MessageSquareCode,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Send,
} from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import { profile, stats, marqueeTech, stackOverview, projects } from '../data/portfolio'
import { Reveal, SplitWords, SectionHead, Corners, CountUp, Marquee, trackSpot, EASE } from '../components/ui'

/* ── Hero Component ────────────────────────────────────────── */
function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.roles.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section page-top" style={{ borderTop: 'none', paddingBottom: 'clamp(40px, 6vw, 72px)' }}>
      <div className="shell" style={{ position: 'relative' }}>
        <Corners />

        <div className="split-hero">
          {/* Left Column */}
          <div>
            <Reveal>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <span className="chip chip--green">
                  <span className="pulse-dot" style={{ marginRight: 6 }} />
                  {profile.status.toUpperCase()}
                </span>
                <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>
                  {profile.coordinates}
                </span>
              </div>
            </Reveal>

            <h1 style={{ fontSize: 'clamp(44px, 7.5vw, 92px)', letterSpacing: '-0.05em', lineHeight: 0.95, margin: '14px 0 20px' }}>
              <SplitWords text="Hello, I'm" wordClass="text-fade" />
              <br />
              <SplitWords text={profile.name} delay={0.12} wordClass="text-green" />
            </h1>

            {/* Dynamic Role Ticker */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '12px 0 24px', minHeight: 32 }}>
              <span className="mono" style={{ fontSize: 13, color: 'var(--text-3)' }}>&gt;</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="mono"
                  style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 600, color: 'var(--text)' }}
                >
                  {profile.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="mono" style={{ color: 'var(--green)', animation: 'blink 1s steps(2) infinite' }}>_</span>
            </div>

            <Reveal delay={0.2}>
              <p className="lead" style={{ maxWidth: 560, marginBottom: 32 }}>
                {profile.intro}
              </p>
            </Reveal>

            {/* Action buttons */}
            <Reveal delay={0.3}>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
                <Link to="/Project" className="btn btn--primary">
                  Explore Projects <ArrowUpRight size={16} className="arrow" />
                </Link>
                <Link to="/Contact" className="btn btn--ghost">
                  Get In Touch <ArrowRight size={16} className="arrow-r" />
                </Link>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                  style={{ borderColor: 'rgba(46, 255, 140, 0.25)' }}
                >
                  WhatsApp <MessageSquareCode size={15} style={{ color: 'var(--green)' }} />
                </a>
              </div>
            </Reveal>

            {/* Quick Contact Bar */}
            <Reveal delay={0.35}>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', paddingTop: 8 }}>
                <a
                  href={`mailto:${profile.email}`}
                  className="link-arrow"
                  style={{ fontSize: 12 }}
                  title="Direct Email"
                >
                  <Mail size={13} style={{ color: 'var(--green)' }} /> {profile.email}
                </a>
                <span className="mono" style={{ color: 'var(--line-2)' }}>|</span>
                <a
                  href={profile.phoneHref}
                  className="link-arrow"
                  style={{ fontSize: 12 }}
                  title="Direct Call"
                >
                  <Phone size={13} style={{ color: 'var(--green)' }} /> {profile.phone}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Terminal Telemetry HUD */}
          <Reveal delay={0.25}>
            <div
              className="spot"
              onPointerMove={trackSpot}
              style={{
                border: '1px solid var(--line-2)',
                background: 'rgba(8, 11, 9, 0.85)',
                backdropFilter: 'blur(16px)',
                position: 'relative',
              }}
            >
              {/* Terminal Window Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 18px',
                  borderBottom: '1px solid var(--line)',
                  background: 'rgba(0,0,0,0.4)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 8, height: 8, background: '#ff5f56', display: 'inline-block' }} />
                  <span style={{ width: 8, height: 8, background: '#ffbd2e', display: 'inline-block' }} />
                  <span style={{ width: 8, height: 8, background: '#27c93f', display: 'inline-block' }} />
                  <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)', marginLeft: 8 }}>
                    sheetal@system:~$ telemetry
                  </span>
                </div>
                <span className="chip chip--green" style={{ height: 20, fontSize: 10, padding: '0 6px' }}>
                  ACTIVE
                </span>
              </div>

              {/* Terminal Body */}
              <div style={{ padding: '24px 20px', display: 'grid', gap: 16, fontFamily: 'var(--font-mono)' }}>
                <div style={{ display: 'grid', gap: 6 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#7f8a83' }}>
                    <span>STACK_KERNEL</span>
                    <span style={{ color: '#2eff8c' }}>REACT 19 / NODE.JS</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#7f8a83' }}>
                    <span>DATABASE_LAYER</span>
                    <span style={{ color: '#e5e9e6' }}>MONGODB / FIREBASE</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#7f8a83' }}>
                    <span>STYLING_ENGINE</span>
                    <span style={{ color: '#e5e9e6' }}>TAILWIND CSS / SHARP EDGES</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#7f8a83' }}>
                    <span>MOTION_FRAMEWORK</span>
                    <span style={{ color: '#2eff8c' }}>FRAMER MOTION / SPRINGS</span>
                  </div>
                </div>

                <div style={{ height: 1, background: 'rgba(255, 255, 255, 0.1)' }} />

                {/* Rubik's Algorithmic Benchmark */}
                <div style={{ background: 'rgba(46, 255, 140, 0.05)', border: '1px solid rgba(46, 255, 140, 0.3)', padding: '14px 16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <span style={{ fontSize: 11, color: '#2eff8c', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      CUBE_SOLVER_ALGORITHM
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#2eff8c' }}>
                      3.5s PB
                    </span>
                  </div>
                  <p style={{ fontSize: 11.5, color: '#b0bcb4', lineHeight: 1.5, margin: 0, fontFamily: 'var(--font-sans)' }}>
                    Cross &rarr; F2L &rarr; OLL &rarr; PLL. Precision problem solving translated into deterministic software.
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, color: '#7f8a83' }}>
                  <span>HOST_NODE: {profile.city.toUpperCase()}, IN</span>
                  <span style={{ color: '#2eff8c' }}>&bull; 0 LATENCY</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 4-Cell Stats Row */}
        <Reveal delay={0.45}>
          <div className="cells cells--4" style={{ marginTop: 'clamp(44px, 7vw, 76px)' }}>
            {stats.map((s) => (
              <div key={s.label} style={{ padding: 'clamp(20px, 3.5vw, 32px)', display: 'grid', gap: 6 }}>
                <span className="mono" style={{ fontSize: 'clamp(30px, 4.2vw, 46px)', fontWeight: 600, color: 'var(--green)' }}>
                  <CountUp value={s.value} decimals={s.decimals || 0} suffix={s.suffix} />
                </span>
                <span className="mono" style={{ fontSize: 11.5, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ── Section 01: Algorithmic Mindset ──────────────────────── */
function AboutTeaser() {
  return (
    <section className="section">
      <div className="shell" style={{ position: 'relative' }}>
        <Corners />
        <SectionHead
          index="01"
          label="Philosophy"
          title="The Developer"
          accent="Behind The Code"
          lead="Just like a Rubik's Cube, complex software challenges have elegant solutions — you just need the right algorithm."
          right={
            <Link to="/About" className="link-arrow">
              Read my full story <ArrowUpRight size={14} />
            </Link>
          }
        />

        <div className="cells cells--auto">
          {/* Card 1 */}
          <div style={{ background: 'var(--bg-1)', padding: 'clamp(28px, 4vw, 44px)', display: 'grid', gap: 16 }}>
            <span className="chip chip--green" style={{ width: 'fit-content' }}>
              01 / Systematic Approach
            </span>
            <h3 style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', letterSpacing: '-0.03em' }}>
              Deconstructing Complexity Step by Step
            </h3>
            <p style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.75 }}>
              Speedcubing taught me that no puzzle is insurmountable when decomposed into clear, sequential milestones. In full-stack engineering, I apply the same discipline: strict type contracts, deterministic state transitions, and clean abstractions.
            </p>
          </div>

          {/* Card 2 */}
          <div style={{ background: 'var(--bg-1)', padding: 'clamp(28px, 4vw, 44px)', display: 'grid', gap: 16 }}>
            <span className="chip chip--green" style={{ width: 'fit-content' }}>
              02 / Execution Standard
            </span>
            <h3 style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', letterSpacing: '-0.03em' }}>
              Fast Pages, Sharp Edges, Zero Bloat
            </h3>
            <p style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.75 }}>
              I craft web apps that respect the user’s time. Minimal payload sizes, hardware-accelerated transitions, semantic layouts, and rock-solid REST backends designed to scale effortlessly without architectural debt.
            </p>
          </div>
        </div>

        {/* Featured Quote Callout */}
        <div style={{ background: 'var(--panel)', border: '1px solid var(--line-green)', borderTop: 'none', padding: 'clamp(24px, 3.5vw, 36px)' }}>
          <p style={{ fontSize: 'clamp(16px, 1.8vw, 21px)', color: 'var(--text)', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
            "Any sufficiently complex problem, broken down step by step, becomes <span style={{ color: 'var(--green)', fontStyle: 'normal', fontWeight: 600 }}>beautifully simple</span>."
          </p>
        </div>
      </div>
    </section>
  )
}

/* ── Section 02: Tech Stack Overview ──────────────────────── */
function StackSection() {
  return (
    <section className="section">
      <div className="shell" style={{ position: 'relative' }}>
        <Corners />
        <SectionHead
          index="02"
          label="Capabilities"
          title="Core Architecture &"
          accent="Tech Stack"
          lead="From interactive client interfaces to high-concurrency Node.js microservices."
          right={
            <Link to="/Skills" className="link-arrow">
              Deep-dive all skills <ArrowUpRight size={14} />
            </Link>
          }
        />

        <div className="cells cells--2">
          {stackOverview.map((card) => (
            <Reveal key={card.id} delay={Number(card.index.replace('0', '')) * 0.08}>
              <div
                className="spot"
                onPointerMove={trackSpot}
                style={{ padding: 'clamp(28px, 3.8vw, 44px)', display: 'grid', gap: 16, cursor: 'default' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="mono" style={{ fontSize: 13, color: 'var(--text-3)' }}>{card.index}</span>
                  <span className="chip chip--green">{card.title}</span>
                </div>
                <h3 style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', letterSpacing: '-0.03em' }}>{card.title}</h3>
                <p style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.65 }}>{card.desc}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
                  {card.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Section 03: Featured Projects Showcase ───────────────── */
function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Full Stack', 'JavaScript', 'Tailwind CSS']

  const filtered = projects.filter((p) => {
    if (selectedCategory === 'All') return p.featured
    return p.category === selectedCategory
  })

  return (
    <section className="section">
      <div className="shell" style={{ position: 'relative' }}>
        <Corners />
        <SectionHead
          index="03"
          label="Portfolio"
          title="Selected Works &"
          accent="Deployments"
          lead="Hand-crafted web applications, interactive utilities, and responsive design systems."
          right={
            <Link to="/Project" className="link-arrow">
              All {projects.length} projects <ArrowUpRight size={14} />
            </Link>
          }
        />

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`chip ${selectedCategory === cat ? 'chip--green' : ''}`}
              style={{
                cursor: 'pointer',
                borderColor: selectedCategory === cat ? 'var(--green)' : 'var(--line)',
                background: selectedCategory === cat ? 'var(--green-soft)' : 'transparent',
                color: selectedCategory === cat ? 'var(--green)' : 'var(--text-2)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="cells cells--auto">
          {filtered.slice(0, 6).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.07}>
              <div
                className="spot"
                onPointerMove={trackSpot}
                style={{ padding: 0, display: 'flex', flexDirection: 'column', cursor: 'default' }}
              >
                {/* Project Image */}
                {p.image && (
                  <div style={{ overflow: 'hidden', borderBottom: '1px solid var(--line)', aspectRatio: '16/10', background: '#040605' }}>
                    <motion.img
                      src={p.image}
                      alt={p.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5, ease: EASE }}
                    />
                  </div>
                )}

                {/* Project Info */}
                <div style={{ padding: 'clamp(20px, 3vw, 28px)', display: 'grid', gap: 12, flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: 18, fontWeight: 600 }}>{p.title}</h3>
                    <span className="chip chip--green">{p.category}</span>
                  </div>

                  <p style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.6 }}>{p.desc}</p>

                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
                    {p.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>

                  {p.url && (
                    <div style={{ marginTop: 8, paddingTop: 12, borderTop: '1px solid var(--line)' }}>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-arrow"
                        style={{ color: 'var(--green)' }}
                      >
                        Live Demonstration <ArrowUpRight size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Section 04: Interactive Contact ──────────────────────── */
function ContactSectionHome() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: false, error: null })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: null })
    try {
      const res = await fetch('http://localhost:5000/mail/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.message || 'Transmission failed. Please try again.')
      setStatus({ loading: false, success: true, error: null })
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus((p) => ({ ...p, success: false })), 6000)
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message || 'Error dispatching message.' })
    }
  }

  return (
    <section className="section">
      <div className="shell" style={{ position: 'relative' }}>
        <Corners />
        <SectionHead
          index="04"
          label="Transmission"
          title="Initiate Contact &"
          accent="Build Together"
          lead="Have a software project, freelance build, or contract role? Send a message or connect directly."
        />

        <div className="split-contact">
          {/* Direct channels */}
          <div style={{ background: 'var(--bg-1)', padding: 'clamp(28px, 4vw, 44px)', display: 'grid', gap: 24 }}>
            <div>
              <span className="eyebrow" style={{ marginBottom: 12 }}>DIRECT CHANNELS</span>
              <h3 style={{ fontSize: 22, marginBottom: 8 }}>Get In Touch</h3>
              <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6 }}>
                Based in Jamnagar, Gujarat. Available across IST and international timezones for development.
              </p>
            </div>

            <div style={{ display: 'grid', gap: 12 }}>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="spot"
                onPointerMove={trackSpot}
                style={{ padding: '16px 20px', border: '1px solid var(--line-2)', display: 'flex', alignItems: 'center', gap: 14 }}
              >
                <MessageSquareCode size={20} style={{ color: 'var(--green)' }} />
                <div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>WHATSAPP CHAT</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{profile.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="spot"
                onPointerMove={trackSpot}
                style={{ padding: '16px 20px', border: '1px solid var(--line-2)', display: 'flex', alignItems: 'center', gap: 14 }}
              >
                <Mail size={20} style={{ color: 'var(--green)' }} />
                <div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>EMAIL INBOX</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{profile.email}</div>
                </div>
              </a>

              <a
                href={profile.phoneHref}
                className="spot"
                onPointerMove={trackSpot}
                style={{ padding: '16px 20px', border: '1px solid var(--line-2)', display: 'flex', alignItems: 'center', gap: 14 }}
              >
                <Phone size={20} style={{ color: 'var(--green)' }} />
                <div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>DIRECT CALL</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{profile.phone}</div>
                </div>
              </a>

              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="spot"
                onPointerMove={trackSpot}
                style={{ padding: '16px 20px', border: '1px solid var(--line-2)', display: 'flex', alignItems: 'center', gap: 14 }}
              >
                <FaInstagram size={20} style={{ color: 'var(--green)' }} />
                <div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>INSTAGRAM</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>@web_2me</div>
                </div>
              </a>
            </div>

            <div style={{ borderTop: '1px solid var(--line)', paddingTop: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
              <MapPin size={16} style={{ color: 'var(--green)' }} />
              <span className="mono" style={{ fontSize: 12, color: 'var(--text-2)' }}>
                {profile.city}, {profile.state}, {profile.country}
              </span>
            </div>
          </div>

          {/* Contact form */}
          <div style={{ background: 'var(--bg-1)', padding: 'clamp(28px, 4vw, 44px)' }}>
            <span className="eyebrow" style={{ marginBottom: 12 }}>MESSAGE PORTAL</span>
            <h3 style={{ fontSize: 22, marginBottom: 24 }}>Send A Transmission</h3>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 18 }}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    required
                    placeholder="Sheetal Harvara"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="user@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  required
                  placeholder="Full-Stack Project / React Build"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your requirements, timeline and specifications..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {status.success && (
                <div style={{ padding: '12px 16px', background: 'var(--green-soft)', border: '1px solid var(--green)', color: 'var(--green)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle2 size={16} /> Transmission dispatched successfully!
                </div>
              )}

              {status.error && (
                <div style={{ padding: '12px 16px', background: 'rgba(255, 70, 70, 0.1)', border: '1px solid #ff4646', color: '#ff6b6b', fontSize: 13 }}>
                  {status.error}
                </div>
              )}

              <button type="submit" disabled={status.loading} className="btn btn--primary" style={{ width: '100%', marginTop: 8 }}>
                {status.loading ? 'Transmitting...' : 'Dispatch Message'} <Send size={15} style={{ marginLeft: 6 }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Main Home Component ──────────────────────────────────── */
function Home() {
  return (
    <div className="rails">
      <Hero />
      <Marquee items={marqueeTech} duration={35} />
      <AboutTeaser />
      <StackSection />
      <FeaturedProjects />
      <ContactSectionHome />
    </div>
  )
}

export default Home
