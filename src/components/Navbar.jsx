import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import { ArrowUpRight, Menu, X, Clock } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'
import { EASE, useClock } from './ui'
import { lenisRef } from '../lib/scroll'
import './Navbar.css'

export function Logo() {
  return (
    <Link to="/" className="nav__logo" aria-label="Sheetal Harvara Portfolio Home">
      <div className="nav__logo-matrix" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="nav__logo-text">
        <span className="nav__logo-handle">{profile.handle}</span>
        <span className="nav__logo-caret" />
      </div>
    </Link>
  )
}

function Navbar() {
  const location = useLocation()
  const time = useClock(profile.timezone)
  const [hovered, setHovered] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [prevPath, setPrevPath] = useState(location.pathname)

  // Auto-close mobile drawer on route change
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname)
    setOpen(false)
    setScrolled(false)
  }

  const { scrollY, scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 28, mass: 0.2 })

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 16)
  })

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) lenisRef.current?.stop()
    else lenisRef.current?.start()
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <header
        className={`nav-wrapper ${scrolled ? 'nav-wrapper--scrolled' : ''}`}
      >
        <div className="nav-container">
          {/* Brand Logo & Online Badge */}
          <div className="nav-brand">
            <Logo />
            <div className="nav-status-badge">
              <span className="pulse-dot" />
              <span className="nav-status-text">ONLINE</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="nav-menu" onMouseLeave={() => setHovered(null)}>
            {navLinks.map((item, idx) => {
              const isActive = location.pathname.toLowerCase() === item.to.toLowerCase()
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive: active }) => `nav-item ${active ? 'nav-item--active' : ''}`}
                  onMouseEnter={() => setHovered(item.to)}
                >
                  {hovered === item.to && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="nav-item__hover"
                      transition={{ type: 'spring', stiffness: 440, damping: 32 }}
                    />
                  )}
                  <span className="nav-item__index">0{idx + 1}</span>
                  <span className="nav-item__label">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-line"
                      className="nav-item__line"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </NavLink>
              )
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="nav-actions">
            {/* Live IST Clock */}
            <div className="nav-clock" title={`Current time in ${profile.city}, India`}>
              <Clock size={12} className="nav-clock__icon" />
              <span>{time} IST</span>
            </div>

            {/* Hire Me CTA Button */}
            <Link to="/Contact" className="btn btn--primary btn--sm nav-cta">
              <span>Hire Me</span>
              <ArrowUpRight size={14} className="arrow" />
            </Link>

            {/* Mobile Burger Toggle */}
            <button
              className="nav-burger-btn"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div className="nav-scroll-bar" style={{ scaleX: progress }} />
      </header>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <div className="mobile-nav__header">
              <span className="mono" style={{ fontSize: 12, color: 'var(--green)', letterSpacing: '0.08em' }}>
                NAVIGATION MENU
              </span>
              <button
                className="nav-burger-btn"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mobile-nav__list">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: EASE }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) => `mobile-nav__link ${isActive ? 'mobile-nav__link--active' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="mobile-nav__index mono">0{i + 1}</span>
                    <span className="mobile-nav__title">{item.label}</span>
                    <ArrowUpRight size={18} className="mobile-nav__arrow" />
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="mobile-nav__footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="mobile-nav__telemetry">
                <span>LOCAL TIME: <b style={{ color: 'var(--green)' }}>{time} IST</b></span>
                <span>BASE: <b>{profile.city.toUpperCase()}, GUJARAT</b></span>
              </div>

              <div className="mobile-nav__buttons">
                <Link to="/Contact" className="btn btn--primary" onClick={() => setOpen(false)}>
                  Start A Project <ArrowUpRight size={15} />
                </Link>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
