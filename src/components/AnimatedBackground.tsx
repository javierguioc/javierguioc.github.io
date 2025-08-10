import { useEffect, useRef } from 'react'

function usePrefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

type Point = { x: number; y: number; vx: number; vy: number }

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let frameId = 0
    let points: Point[] = []
    let width = 0
    let height = 0
    let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))

    function rand(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    function init() {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
      // canvas is defined due to early return above
      canvas!.width = Math.floor(width * dpr)
      canvas!.height = Math.floor(height * dpr)
      canvas!.style.width = width + 'px'
      canvas!.style.height = height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const density = Math.min(120, Math.floor((width * height) / 20000))
      points = Array.from({ length: density }, () => ({
        x: rand(0, width),
        y: rand(0, height),
        vx: rand(-0.25, 0.25),
        vy: rand(-0.25, 0.25),
      }))
    }

    function step() {
      ctx.clearRect(0, 0, width, height)
      // subtle vignette
      const grd = ctx.createRadialGradient(width * 0.7, height * 0.2, 0, width * 0.7, height * 0.2, Math.max(width, height))
      grd.addColorStop(0, 'rgba(16,185,129,0.05)') // emerald-500/5
      grd.addColorStop(1, 'rgba(2,6,23,0)') // neutral-950 transparent
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, width, height)

      // update points
      for (const p of points) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20
      }

      // draw connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i]
          const b = points[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist2 = dx * dx + dy * dy
          if (dist2 < 130 * 130) {
            const alpha = Math.max(0, 1 - dist2 / (130 * 130)) * 0.4
            ctx.strokeStyle = `rgba(16,185,129,${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // draw points
      ctx.fillStyle = 'rgba(16,185,129,0.6)'
      for (const p of points) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2)
        ctx.fill()
      }

      frameId = requestAnimationFrame(step)
    }

    init()
    step()
    window.addEventListener('resize', init)
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', init)
    }
  }, [reduced])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-neutral-950"
    />
  )
}


