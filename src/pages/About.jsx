import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { profile, stats } from '../data/portfolio'
import { PageHead, Corners, CountUp, trackSpot } from '../components/ui'

function About() {
  const principles = [
    {
      index: '01',
      title: 'Deterministic State & Clarity',
      desc: 'No ghost state, no unexplained race conditions. Complex web apps require predictable unidirectional data flows and clear boundaries.',
    },
    {
      index: '02',
      title: 'Algorithmic Speedcubing Mindset',
      desc: 'Solving 3x3 Rubik’s cubes in sub-3.5 seconds trained my brain to break high-dimensional challenges into systematic, sequential algorithms.',
    },
    {
      index: '03',
      title: 'Zero-Bloat Performance',
      desc: 'Hardware-accelerated CSS transforms, minimal JavaScript bundle footprints, and aggressive cache utilization for instant paint times.',
    },
    {
      index: '04',
      title: 'Resilient Asynchronous Services',
      desc: 'Node.js event loop protection, typed REST contracts, error handling middleware pipelines, and structured MongoDB schema models.',
    },
  ]

  return (
    <div className="rails page-top">
      <PageHead
        label="Identity & Philosophy"
        title="The Developer"
        accent="Behind The Code"
        lead="Hi, I'm Sheetal Harvara — crafting high-concurrency Node.js backends and pixel-sharp React interfaces from Jamnagar, Gujarat."
        meta={[
          ['Origin', `${profile.city}, ${profile.state}, ${profile.country}`],
          ['Coordinates', profile.coordinates],
          ['Core Focus', 'Full-Stack JavaScript / MERN'],
          ['Cube PB', '3.5s Single'],
        ]}
      />

      {/* Main Narrative Split */}
      <section className="section">
        <div className="shell" style={{ position: 'relative' }}>
          <Corners />

          <div className="split-story">
            {/* Story Column */}
            <div style={{ background: 'var(--bg-1)', padding: 'clamp(28px, 4vw, 48px)', display: 'grid', gap: 20 }}>
              <span className="eyebrow">MY STORY</span>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', letterSpacing: '-0.035em' }}>
                Turning Intricate Challenges Into Clean, Deterministic Code
              </h2>

              <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8 }}>
                My journey into software engineering was shaped by an obsession with algorithms and speedcubing. In a Rubik’s Cube with 43 quintillion possible configurations, panic gets you nowhere — systematic algorithmic reduction gets you solved states in seconds.
              </p>

              <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8 }}>
                I brought that exact mental framework into web development. Whether configuring an Express authentication pipeline, optimizing React reconciliation to cut out redundant re-renders, or architecting a real-time MongoDB service, I strive for simplicity, clarity, and predictable execution.
              </p>

              <div style={{ padding: '20px 24px', background: 'var(--panel)', border: '1px solid var(--line-green)', marginTop: 8 }}>
                <blockquote style={{ fontSize: 16, color: 'var(--green)', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
                  "Any sufficiently complex problem, broken down step by step, becomes beautifully simple."
                </blockquote>
              </div>
            </div>

            {/* Rubik's Algorithmic Telemetry Box */}
            <div style={{ background: 'var(--bg-1)', padding: 'clamp(28px, 4vw, 48px)', display: 'grid', gap: 20 }}>
              <span className="eyebrow">THE CUBE ANALOGY</span>
              <h3 style={{ fontSize: 22 }}>Algorithmic Stages</h3>

              <div style={{ display: 'grid', gap: 12 }}>
                {[
                  { step: '01. CROSS', role: 'Foundation / Architecture', desc: 'Establishing robust schemas, REST contracts, and foundational layouts.' },
                  { step: '02. F2L', role: 'State & Pairing', desc: 'Unifying client state with server responses seamlessly without duplication.' },
                  { step: '03. OLL', role: 'Orientation & Polish', desc: 'Applying Tailwind responsive utility tokens and hardware-accelerated transitions.' },
                  { step: '04. PLL', role: 'Permutation & Deployment', desc: 'Final production build optimization, Docker containers, and Vercel edge pushes.' },
                ].map((item) => (
                  <div key={item.step} style={{ padding: '14px 16px', background: 'var(--panel)', border: '1px solid var(--line)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span className="mono" style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)' }}>{item.step}</span>
                      <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>{item.role}</span>
                    </div>
                    <p style={{ fontSize: 12.5, color: 'var(--text-2)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="section">
        <div className="shell" style={{ position: 'relative' }}>
          <Corners />
          <div style={{ marginBottom: 'clamp(36px, 5vw, 56px)' }}>
            <span className="eyebrow">DISCIPLINE</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              Core Engineering <span className="text-green">Principles</span>
            </h2>
          </div>

          <div className="cells cells--2">
            {principles.map((p) => (
              <div
                key={p.index}
                className="spot"
                onPointerMove={trackSpot}
                style={{ padding: 'clamp(28px, 4vw, 44px)', display: 'grid', gap: 14, cursor: 'default' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="mono" style={{ fontSize: 13, color: 'var(--text-3)' }}>{p.index}</span>
                  <span className="chip chip--green">STANDARD</span>
                </div>
                <h3 style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', letterSpacing: '-0.025em' }}>{p.title}</h3>
                <p style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="cells cells--4" style={{ marginTop: 1 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ padding: 'clamp(20px, 3.5vw, 32px)', display: 'grid', gap: 6 }}>
                <span className="mono" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 600, color: 'var(--green)' }}>
                  <CountUp value={s.value} decimals={s.decimals || 0} suffix={s.suffix} />
                </span>
                <span className="mono" style={{ fontSize: 11.5, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Call to Actions */}
          <div style={{ marginTop: 'clamp(40px, 6vw, 64px)', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/Project" className="btn btn--primary">
              View Shipped Projects <ArrowUpRight size={16} className="arrow" />
            </Link>
            <Link to="/Skills" className="btn btn--ghost">
              Explore Tech Stack <ArrowRight size={16} className="arrow-r" />
            </Link>
            <Link to="/Contact" className="btn btn--ghost">
              Hire Me <ArrowRight size={16} className="arrow-r" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
