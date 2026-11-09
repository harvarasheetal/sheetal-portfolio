import { useState } from 'react'
import {
  MessageSquareCode,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import { profile } from '../data/portfolio'
import { PageHead, Corners, trackSpot, useClock } from '../components/ui'

function Contact() {
  const time = useClock(profile.timezone)

  const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '8854c3b0-b67f-4e19-b873-9dc9f0e3c083'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: null })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || `Portfolio Transmission from ${formData.name.trim()}`,
          message: formData.message.trim(),
          from_name: 'Sheetal Harvara Portfolio',
          botcheck: '',
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok && data.success) {
        setStatus({ loading: false, success: true, error: null })
        setFormData({ name: '', email: '', subject: '', message: '' })

        setTimeout(() => {
          setStatus((prev) => ({ ...prev, success: false }))
        }, 7000)
      } else {
        throw new Error(data.message || 'Failed to dispatch transmission. Please retry or contact directly via WhatsApp.')
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: err.message || 'An error occurred while transmitting your request.',
      })
    }
  }

  return (
    <div className="rails page-top">
      <PageHead
        label="Direct Transmission"
        title="Initialize Contact &"
        accent="Start Building"
        lead="Available for full-time engineering roles, freelance contracts, and software collaborations."
        meta={[
          ['Response Time', '< 24 Hours'],
          ['Local Time', `${time} IST`],
          ['Base Station', `${profile.city}, ${profile.state}`],
          ['Status', 'Accepting Projects'],
        ]}
      />

      <section className="section">
        <div className="shell" style={{ position: 'relative' }}>
          <Corners />

          <div className="split-contact">
            {/* Left Column: Direct Contact & Location */}
            <div style={{ background: 'var(--bg-1)', padding: 'clamp(28px, 4vw, 44px)', display: 'grid', gap: 24 }}>
              <div>
                <span className="eyebrow" style={{ marginBottom: 10 }}>COMMUNICATION CHANNELS</span>
                <h3 style={{ fontSize: 24, letterSpacing: '-0.025em', marginBottom: 8 }}>
                  Reach Out Directly
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.65 }}>
                  Whether you have an existing codebase that needs refactoring or a brand new product to build from scratch, let's talk.
                </p>
              </div>

              {/* Contact Cards */}
              <div style={{ display: 'grid', gap: 12 }}>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spot"
                  onPointerMove={trackSpot}
                  style={{
                    padding: '16px 20px',
                    border: '1px solid var(--line-2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <MessageSquareCode size={20} style={{ color: 'var(--green)' }} />
                    <div>
                      <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>WHATSAPP CHAT</div>
                      <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text)' }}>{profile.phone}</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} style={{ color: 'var(--text-3)' }} />
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  className="spot"
                  onPointerMove={trackSpot}
                  style={{
                    padding: '16px 20px',
                    border: '1px solid var(--line-2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <Mail size={20} style={{ color: 'var(--green)' }} />
                    <div>
                      <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>DIRECT EMAIL</div>
                      <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text)' }}>{profile.email}</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} style={{ color: 'var(--text-3)' }} />
                </a>

                <a
                  href={profile.phoneHref}
                  className="spot"
                  onPointerMove={trackSpot}
                  style={{
                    padding: '16px 20px',
                    border: '1px solid var(--line-2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <Phone size={20} style={{ color: 'var(--green)' }} />
                    <div>
                      <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>TELEPHONE</div>
                      <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text)' }}>{profile.phone}</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} style={{ color: 'var(--text-3)' }} />
                </a>

                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spot"
                  onPointerMove={trackSpot}
                  style={{
                    padding: '16px 20px',
                    border: '1px solid var(--line-2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <FaInstagram size={20} style={{ color: 'var(--green)' }} />
                    <div>
                      <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>INSTAGRAM</div>
                      <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text)' }}>@web_2me</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} style={{ color: 'var(--text-3)' }} />
                </a>
              </div>

              {/* Station Info Box */}
              <div
                style={{
                  padding: '20px',
                  background: 'var(--panel)',
                  border: '1px solid var(--line)',
                  display: 'grid',
                  gap: 12,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <MapPin size={16} style={{ color: 'var(--green)' }} />
                  <span className="mono" style={{ fontSize: 12, color: 'var(--text)', fontWeight: 600 }}>
                    BASE STATION
                  </span>
                </div>
                <div style={{ display: 'grid', gap: 4, fontSize: 13, color: 'var(--text-2)' }}>
                  <div>City: <span style={{ color: 'var(--text)' }}>{profile.city}</span></div>
                  <div>State: <span style={{ color: 'var(--text)' }}>{profile.state}</span></div>
                  <div>Country: <span style={{ color: 'var(--text)' }}>{profile.country}</span></div>
                  <div>Coordinates: <span className="mono" style={{ color: 'var(--green)' }}>{profile.coordinates}</span></div>
                </div>
              </div>
            </div>

            {/* Right Column: Transmission Form */}
            <div style={{ background: 'var(--bg-1)', padding: 'clamp(28px, 4vw, 44px)' }}>
              <span className="eyebrow" style={{ marginBottom: 10 }}>TRANSMISSION FORM</span>
              <h3 style={{ fontSize: 24, letterSpacing: '-0.025em', marginBottom: 24 }}>
                Send A Direct Message
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 18 }}>
                {/* Honeypot spam protection for Web3Forms */}
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="c-name">Full Name</label>
                    <input
                      id="c-name"
                      required
                      placeholder="Sheetal Harvara"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="c-email">Email Address</label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      placeholder="user@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="c-subject">Subject</label>
                  <input
                    id="c-subject"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="field">
                  <label htmlFor="c-message">Message</label>
                  <textarea
                    id="c-message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, timeline, scope, and technical requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {status.success && (
                  <div
                    style={{
                      padding: '14px 16px',
                      background: 'var(--green-soft)',
                      border: '1px solid var(--green)',
                      color: 'var(--green)',
                      fontSize: 13.5,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <CheckCircle2 size={18} />
                    <span>Transmission received! Delivered directly to Sheetal. I will respond within 24 hours.</span>
                  </div>
                )}

                {status.error && (
                  <div
                    style={{
                      padding: '14px 16px',
                      background: 'rgba(255, 70, 70, 0.1)',
                      border: '1px solid #ff4646',
                      color: '#ff6b6b',
                      fontSize: 13.5,
                    }}
                  >
                    {status.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.loading}
                  className="btn btn--primary"
                  style={{ width: '100%', marginTop: 8 }}
                >
                  {status.loading ? 'Transmitting via Web3Forms...' : 'Dispatch Message'}
                  <Send size={15} style={{ marginLeft: 6 }} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
