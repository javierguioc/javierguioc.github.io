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
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) e.target.classList.add('in-view')
    }
  },
  { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
)

const connectReveals = () => {
  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => io.observe(el))
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', connectReveals)
} else {
  connectReveals()
}
