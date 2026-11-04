import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Code2, ArrowUpRight } from 'lucide-react'
import { projects, projectCategories } from '../data/portfolio'
import { PageHead, Corners, trackSpot, EASE } from '../components/ui'

function Project() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = projects.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory
    const query = searchQuery.toLowerCase().trim()
    const matchesSearch =
      !query ||
      p.title.toLowerCase().includes(query) ||
      p.desc.toLowerCase().includes(query) ||
      p.tech.some((t) => t.toLowerCase().includes(query))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="rails page-top">
      <PageHead
        label="Production Index"
        title="Deployed Works &"
        accent="Software Builds"
        lead="A catalog of full-stack platforms, interactive client utilities, and responsive design systems."
        meta={[
          ['Total Projects', `${projects.length} Shipped`],
          ['Filter Status', `${filtered.length} Matching`],
          ['License', 'Open Source / Client'],
          ['Hosting', 'Netlify / Vercel'],
        ]}
      />

      <section className="section">
        <div className="shell" style={{ position: 'relative' }}>
          <Corners />

          {/* Filter & Search Bar - Sharp Hairline Design */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 16,
              flexWrap: 'wrap',
              marginBottom: 'clamp(32px, 5vw, 48px)',
              paddingBottom: 24,
              borderBottom: '1px solid var(--line)',
            }}
          >
            {/* Category Tabs */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`chip ${activeCategory === cat ? 'chip--green' : ''}`}
                  style={{
                    cursor: 'pointer',
                    borderColor: activeCategory === cat ? 'var(--green)' : 'var(--line)',
                    background: activeCategory === cat ? 'var(--green-soft)' : 'transparent',
                    color: activeCategory === cat ? 'var(--green)' : 'var(--text-2)',
                    fontSize: 12,
                    padding: '0 12px',
                    height: 32,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div style={{ position: 'relative', minWidth: 200, maxWidth: 320, width: '100%', flexGrow: 1 }}>
              <Search
                size={14}
                style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-3)' }}
              />
              <input
                type="text"
                placeholder="Search projects or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 14px 9px 36px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12.5,
                  background: 'var(--panel)',
                  border: '1px solid var(--line-2)',
                  color: 'var(--text)',
                  outline: 'none',
                  transition: 'border-color 0.25s',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--green)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--line-2)')}
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="cells cells--auto">
            {filtered.map((p, idx) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="spot"
                onPointerMove={trackSpot}
                style={{ display: 'flex', flexDirection: 'column', cursor: 'default' }}
              >
                {/* Project Image */}
                {p.image && (
                  <div style={{ overflow: 'hidden', borderBottom: '1px solid var(--line)', aspectRatio: '16/10', background: '#020302' }}>
                    <motion.img
                      src={p.image}
                      alt={p.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5, ease: EASE }}
                    />
                  </div>
                )}

                {/* Details */}
                <div style={{ padding: 'clamp(20px, 3vw, 28px)', display: 'grid', gap: 12, flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: 19, fontWeight: 600 }}>{p.title}</h3>
                    <span className="chip chip--green">{p.category}</span>
                  </div>

                  <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6 }}>{p.desc}</p>

                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
                    {p.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>

                  <div style={{ marginTop: 12, paddingTop: 14, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-arrow"
                        style={{ color: 'var(--green)' }}
                      >
                        Launch Demo <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>
                        LOCAL / REPO ARCHIVE
                      </span>
                    )}

                    <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>
                      REF_0{idx + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty Search State */}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '64px 20px', border: '1px solid var(--line)', background: 'var(--panel)' }}>
              <Code2 size={36} style={{ color: 'var(--text-3)', margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: 18, marginBottom: 6 }}>No matching projects located</h3>
              <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
                Try adjusting your search criteria or resetting filters.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All')
                  setSearchQuery('')
                }}
                className="btn btn--ghost btn--sm"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Project
