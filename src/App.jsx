import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import { EASE } from './components/ui'
import { lenisRef, scrollToTop } from './lib/scroll'

// Enforce Signal Dark Mode permanently
if (typeof window !== 'undefined') {
  document.documentElement.classList.add('dark')
  document.documentElement.classList.remove('light')
  document.documentElement.setAttribute('data-theme', 'dark')
  document.documentElement.style.colorScheme = 'dark'
}

function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4), smoothWheel: true })
    lenisRef.current = lenis
    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])
}

// Global grid + aurora + cursor glow + grain
function Backdrop() {
  useEffect(() => {
    const root = document.documentElement
    let raf = 0
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        root.style.setProperty('--cx', `${e.clientX}px`)
        root.style.setProperty('--cy', `${e.clientY}px`)
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])
  return (
    <div className="backdrop" aria-hidden>
      <div className="backdrop__aurora" />
      <div className="backdrop__grid" />
      <div className="backdrop__cursor" />
      <div className="backdrop__grain" />
    </div>
  )
}

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation()
  useEffect(() => {
    scrollToTop(true)
    const raf = requestAnimationFrame(() => {
      scrollToTop(true)
    })
    return () => cancelAnimationFrame(raf)
  }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" onExitComplete={() => scrollToTop(true)}>
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </motion.main>
    </AnimatePresence>
  )
}

function App() {
  useSmoothScroll()
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <Backdrop />
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
