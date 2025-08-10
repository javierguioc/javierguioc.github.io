import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// IntersectionObserver to toggle 'in-view' on .reveal elements
const io = 'IntersectionObserver' in window ? new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) e.target.classList.add('in-view')
    }
  },
  { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
) : null

function attachObserverForNewReveals() {
  if (!io) return
  document.querySelectorAll<HTMLElement>('.reveal:not([data-observed])').forEach((el) => {
    el.setAttribute('data-observed', 'true')
    io.observe(el)
  })
}

function connectReveals() {
  const root = document.documentElement
  if (!io) {
    root.classList.add('no-js')
    document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => el.classList.add('in-view'))
    return
  }
  attachObserverForNewReveals()
  // Observe future additions
  const mo = new MutationObserver(() => attachObserverForNewReveals())
  mo.observe(document.body, { childList: true, subtree: true })
}

// Run after mount; schedule twice to ensure React content exists
const start = () => {
  requestAnimationFrame(() => {
    connectReveals()
    requestAnimationFrame(connectReveals)
  })
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start)
} else {
  start()
}
