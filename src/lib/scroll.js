// Shared Lenis instance so any component can drive smooth scrolling
export const lenisRef = { current: null }

export function scrollToTop(immediate = true) {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, left: 0, behavior: immediate ? 'instant' : 'smooth' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }
  if (lenisRef.current) {
    try {
      lenisRef.current.scrollTo(0, { immediate: true, force: true })
    } catch {
      // ignore
    }
  }
}

// Opens the global ⌘K / Ctrl+K command menu from anywhere
export const openCommandMenu = () => window.dispatchEvent(new CustomEvent('cmdk:open'))
