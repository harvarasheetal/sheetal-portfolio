import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1]

/* Fade + rise when scrolled into view */
export function Reveal({ children, delay = 0, y = 18, className, as = 'div', ...rest }) {
  const Comp = motion[as] ?? motion.div
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.55, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Comp>
  )
}

/* Word-by-word smooth animated reveal for big headings */
export function SplitWords({ text, className, delay = 0, stagger = 0.04, wordClass }) {
  if (!text) return null
  const words = text.split(' ')
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className={typeof wordClass === 'function' ? wordClass(w, i) : wordClass}
          style={{ display: 'inline-block' }}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: EASE, delay: delay + i * stagger }}
        >
          {w}
          {i < words.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </span>
  )
}

/* Blueprint corner crosshairs */
export function Corners() {
  return (
    <span className="corners" aria-hidden>
      <i /><i /><i /><i />
    </span>
  )
}

/* Section header: eyebrow + title + optional right slot */
export function SectionHead({ index, label, title, accent, lead, right }) {
  return (
    <div className="sec-head">
      <div className="sec-head__left">
        <Reveal>
          <span className="eyebrow"><b>{index}</b> / {label}</span>
        </Reveal>
        <h2 className="h-section">
          <SplitWords text={title} wordClass="text-fade" />
          {accent && (
            <>
              {' '}
              <SplitWords text={accent} delay={0.12} wordClass="text-green" />
            </>
          )}
        </h2>
        {lead && <Reveal delay={0.15}><p className="lead">{lead}</p></Reveal>}
      </div>
      {right && <Reveal delay={0.2}>{right}</Reveal>}
    </div>
  )
}

/* Mouse-tracked spotlight — attach to onPointerMove of any .spot element */
export function trackSpot(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}

/* Animated number that counts up once in view */
export function CountUp({ value, decimals = 0, suffix = '', duration = 1.8 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [display, setDisplay] = useState((0).toFixed(decimals))

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration,
      ease: EASE,
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    })
    return () => controls.stop()
  }, [inView, value, decimals, duration])

  return (
    <span ref={ref}>
      {display}
      <span className="count-suffix">{suffix}</span>
    </span>
  )
}

/* Infinite marquee */
export function Marquee({ items, duration = 40 }) {
  const row = (
    <div className="marquee__track" style={{ '--dur': `${duration}s` }}>
      {items.map((t, i) => (
        <span className="marquee__item" key={i}>{t}</span>
      ))}
    </div>
  )
  return (
    <div className="marquee" aria-hidden>
      {row}
      {row}
    </div>
  )
}

/* Live clock in a given timezone */
export function useClock(timeZone = 'Asia/Kolkata') {
  const fmt = () =>
    new Intl.DateTimeFormat('en-GB', { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(new Date())
  const [time, setTime] = useState(fmt)
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone])
  return time
}

/* Inner page header - Guaranteed mount animation */
export function PageHead({ label, title, accent, lead, meta }) {
  return (
    <header className="page-head shell">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <span className="eyebrow"><span className="pulse-dot" /> {label}</span>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.06 }}
      >
        <SplitWords text={title} wordClass="text-fade" />
        {accent && (
          <>
            <br />
            <SplitWords text={accent} delay={0.12} wordClass="text-green" />
          </>
        )}
      </motion.h1>
      {lead && (
        <motion.p
          className="lead"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.14 }}
        >
          {lead}
        </motion.p>
      )}
      {meta && (
        <motion.div
          className="page-head__meta"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.22 }}
        >
          {meta.map(([k, v]) => (
            <span key={k}>{k}: <b>{v}</b></span>
          ))}
        </motion.div>
      )}
    </header>
  )
}
