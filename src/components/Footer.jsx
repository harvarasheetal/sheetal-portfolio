import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowUp, MessageSquareCode, Mail, Phone } from 'lucide-react'
import { FaInstagram, FaGithub } from 'react-icons/fa'
import { profile, navLinks } from '../data/portfolio'
import { Marquee, useClock } from './ui'
import { Logo } from './Navbar'
import { scrollToTop } from '../lib/scroll'
import './Footer.css'

function Footer() {
  const time = useClock(profile.timezone)

  const tickerItems = [
    'Available for freelance & full-time engineering',
    'React 19 · Node.js · MongoDB · Tailwind CSS',
    'Speedcubing Algorithm Mindset: 3.5s PB',
    `Based in ${profile.city}, Gujarat, India`,
    `Coordinates: ${profile.coordinates}`,
    'Zero layout shift · 60fps springs · Zero fluff',
  ]

  return (
    <footer className="footer-wrapper">
      {/* Top Infinite Telemetry Ticker */}
      <Marquee items={tickerItems} duration={38} />

      <div className="footer-inner shell">
        {/* Main 4-Column Grid */}
        <div className="footer-grid">
          {/* Col 1: Brand & Status Telemetry */}
          <div className="footer-col footer-col--brand">
            <Logo />
            <p className="footer-tagline">
              {profile.tagline}
            </p>

            <div className="footer-telemetry-box">
              <div className="footer-telemetry-row">
                <span className="pulse-dot" />
                <span className="mono" style={{ fontSize: 11, color: 'var(--green)' }}>
                  SYSTEM OPERATIONAL
                </span>
              </div>
              <div className="footer-telemetry-row">
                <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>
                  LOCAL TIME:
                </span>
                <span className="mono" style={{ fontSize: 11, color: 'var(--text)' }}>
                  {time} IST
                </span>
              </div>
              <div className="footer-telemetry-row">
                <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>
                  STATION:
                </span>
                <span className="mono" style={{ fontSize: 11, color: 'var(--text)' }}>
                  {profile.city.toUpperCase()}, IN
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Sitemap */}
          <div className="footer-col">
            <span className="footer-heading mono">01 SITEMAP</span>
            <ul className="footer-links-list">
              {navLinks.map((link, idx) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link">
                    <span className="mono footer-link__idx">0{idx + 1}</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Connect Channels */}
          <div className="footer-col">
            <span className="footer-heading mono">02 CONNECT</span>
            <ul className="footer-links-list">
              <li>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <MessageSquareCode size={14} style={{ color: 'var(--green)' }} />
                  <span>WhatsApp Chat</span>
                  <ArrowUpRight size={13} className="footer-link__arrow" />
                </a>
              </li>
              <li>
                <a href={`mailto:${profile.email}`} className="footer-link">
                  <Mail size={14} style={{ color: 'var(--green)' }} />
                  <span>Direct Email</span>
                  <ArrowUpRight size={13} className="footer-link__arrow" />
                </a>
              </li>
              <li>
                <a href={profile.phoneHref} className="footer-link">
                  <Phone size={14} style={{ color: 'var(--green)' }} />
                  <span>Telephone</span>
                  <ArrowUpRight size={13} className="footer-link__arrow" />
                </a>
              </li>
              <li>
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <FaInstagram size={14} style={{ color: 'var(--green)' }} />
                  <span>Instagram</span>
                  <ArrowUpRight size={13} className="footer-link__arrow" />
                </a>
              </li>
              {profile.github && (
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <FaGithub size={14} style={{ color: 'var(--green)' }} />
                    <span>GitHub</span>
                    <ArrowUpRight size={13} className="footer-link__arrow" />
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Col 4: Engine Manifest */}
          <div className="footer-col">
            <span className="footer-heading mono">03 SYSTEM SPECS</span>
            <div className="footer-manifest">
              <div className="footer-manifest-item">
                <span className="mono">CORE:</span>
                <span>React 19 + Vite</span>
              </div>
              <div className="footer-manifest-item">
                <span className="mono">STYLING:</span>
                <span>Tailwind CSS + Sharp Edges</span>
              </div>
              <div className="footer-manifest-item">
                <span className="mono">MOTION:</span>
                <span>Framer Motion 13</span>
              </div>
              <div className="footer-manifest-item">
                <span className="mono">SCROLL:</span>
                <span>Lenis Smooth Scroll</span>
              </div>
              <div className="footer-manifest-item">
                <span className="mono">DEPLOY:</span>
                <span>Vercel Edge Network</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left mono">
            © {new Date().getFullYear()} {profile.name.toUpperCase()} · ALL SYSTEMS NOMINAL
          </div>

          <div className="footer-bottom-center mono">
            {profile.coordinates}
          </div>

          <button
            onClick={() => scrollToTop()}
            className="footer-back-to-top"
            aria-label="Scroll back to top of page"
          >
            <span>TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
