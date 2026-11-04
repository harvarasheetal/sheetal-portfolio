import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { blogArticles } from '../data/portfolio'
import { PageHead, Corners, trackSpot, EASE } from '../components/ui'

function Blog() {
  const [selectedArticleId, setSelectedArticleId] = useState(blogArticles[0].id)

  const selectedArticle = blogArticles.find((a) => a.id === selectedArticleId) || blogArticles[0]

  return (
    <div className="rails page-top">
      <PageHead
        label="Engineering Notes"
        title="Technical Logs &"
        accent="System Insights"
        lead="Dispatches on React internals, memory lifecycle, asynchronous Node.js runtimes, and algorithmic problem-solving."
        meta={[
          ['Publication', 'Signal Field Notes'],
          ['Focus', 'Performance & Architecture'],
          ['Cadence', 'Monthly'],
        ]}
      />

      <section className="section">
        <div className="shell" style={{ position: 'relative' }}>
          <Corners />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 1,
              background: 'var(--line)',
              border: '1px solid var(--line)',
            }}
          >
            {/* Left Column: Article List Selector */}
            <div style={{ background: 'var(--bg-1)', padding: 'clamp(24px, 3.5vw, 40px)', display: 'grid', gap: 16 }}>
              <span className="eyebrow">INDEX OF LOGS</span>

              <div style={{ display: 'grid', gap: 12 }}>
                {blogArticles.map((article, idx) => {
                  const isSelected = selectedArticleId === article.id
                  return (
                    <div
                      key={article.id}
                      onClick={() => setSelectedArticleId(article.id)}
                      className="spot"
                      onPointerMove={trackSpot}
                      style={{
                        padding: '18px 20px',
                        border: '1px solid',
                        borderColor: isSelected ? 'var(--green)' : 'var(--line)',
                        background: isSelected ? 'rgba(46, 255, 140, 0.05)' : 'var(--panel)',
                        cursor: 'pointer',
                        display: 'grid',
                        gap: 8,
                        transition: 'all 0.25s',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="chip chip--green" style={{ fontSize: 10, height: 22 }}>
                          {article.category}
                        </span>
                        <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>
                          {article.date}
                        </span>
                      </div>

                      <h3 style={{ fontSize: 16, fontWeight: 600, color: isSelected ? 'var(--green)' : 'var(--text)', margin: 0, lineHeight: 1.4 }}>
                        {article.title}
                      </h3>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, color: 'var(--text-3)' }}>
                        <span className="mono">ENTRY 0{idx + 1}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Column: Full Article View */}
            <div style={{ background: 'var(--bg-1)', padding: 'clamp(28px, 4vw, 48px)', display: 'grid', gap: 24 }}>
              <AnimatePresence mode="wait">
                <motion.article
                  key={selectedArticle.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  style={{ display: 'grid', gap: 20 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span className="chip chip--green">{selectedArticle.category}</span>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>
                      {selectedArticle.date} · {selectedArticle.readTime}
                    </span>
                  </div>

                  <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', letterSpacing: '-0.035em', lineHeight: 1.1, margin: 0 }}>
                    {selectedArticle.title}
                  </h2>

                  <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8 }}>
                    {selectedArticle.summary}
                  </p>

                  <div style={{ height: 1, background: 'var(--line)' }} />

                  {/* Deep dive content specific to selected article */}
                  {selectedArticle.id === 'usecallback-optimization' && (
                    <div style={{ display: 'grid', gap: 16 }}>
                      <h4 className="mono" style={{ fontSize: 13, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        1. The Heap & Call Stack Interaction
                      </h4>
                      <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7 }}>
                        Whenever a component re-renders, any regular function defined inside it is re-instantiated with a <strong>brand new memory address on the Heap</strong>. If that function is passed down as a prop to child components (e.g. User, Booking, or Payment tables), those child components receive a new prop reference and force a full reconciliation pass, needlessly overloading the JavaScript call stack.
                      </p>

                      <div
                        style={{
                          background: '#040605',
                          border: '1px solid var(--line-2)',
                          padding: '16px 20px',
                          fontFamily: 'var(--font-mono)',
                          fontSize: 12.5,
                          color: '#b6ffda',
                          lineHeight: 1.6,
                        }}
                      >
                        <code>
                          // Unmemoized (Heap allocation on every render):<br />
                          const fetchCustomer = () =&gt; &#123; api.get(...) &#125;<br /><br />
                          // Memoized (Preserves heap reference across cycles):<br />
                          const fetchCustomer = useCallback(() =&gt; &#123;<br />
                          &nbsp;&nbsp;api.get(...)<br />
                          &#125;, [customerId])
                        </code>
                      </div>
                    </div>
                  )}

                  {selectedArticle.id === 'rubiks-cube-algorithms' && (
                    <div style={{ display: 'grid', gap: 16 }}>
                      <h4 className="mono" style={{ fontSize: 13, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        Algorithmic Reduction in System Design
                      </h4>
                      <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7 }}>
                        A scramble is chaos. Trying to solve all pieces simultaneously leads to deadlock. In high-level cube methods like CFOP, the puzzle is divided into 4 isolated phases. The same applies to architecting scalable applications: database schema isolation, API contract normalization, client state synchronization, and presentation layout.
                      </p>

                      <div
                        style={{
                          background: '#040605',
                          border: '1px solid var(--line-2)',
                          padding: '16px 20px',
                          fontFamily: 'var(--font-mono)',
                          fontSize: 12.5,
                          color: '#b6ffda',
                        }}
                      >
                        <code>
                          CROSS &rarr; Foundation schemas &amp; API routes<br />
                          F2L &nbsp; &rarr; Pair state with backend mutations<br />
                          OLL &nbsp; &rarr; Component styling &amp; layout trees<br />
                          PLL &nbsp; &rarr; Edge distribution &amp; production release
                        </code>
                      </div>
                    </div>
                  )}

                  {selectedArticle.id === 'nodejs-event-loop' && (
                    <div style={{ display: 'grid', gap: 16 }}>
                      <h4 className="mono" style={{ fontSize: 13, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        Event Loop Phases &amp; High Concurrency
                      </h4>
                      <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7 }}>
                        Node.js achieves massive throughput not by threading JavaScript, but by delegating asynchronous I/O to libuv threadpools while the main thread coordinates events. Understanding the difference between timer phases, pending callbacks, poll phase, and the microtask queue (process.nextTick, Promise ticks) is essential to avoiding event-loop starvation.
                      </p>
                    </div>
                  )}

                  {/* Key Takeaways */}
                  <div style={{ background: 'var(--panel)', border: '1px solid var(--line-green)', padding: '20px 24px', display: 'grid', gap: 12, marginTop: 8 }}>
                    <span className="mono" style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', textTransform: 'uppercase' }}>
                      Key Architectural Takeaways:
                    </span>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
                      {selectedArticle.keyPoints.map((pt, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>
                          <span style={{ color: 'var(--green)', marginTop: 2 }}>&bull;</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
