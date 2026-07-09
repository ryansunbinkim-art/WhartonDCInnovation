"use client"

import { useEffect, useRef, useState } from "react"

const STATS = [
  { value: 12, suffix: "th", label: "Annual Summit" },
  { value: 40, suffix: "+", label: "CEOs + Founders" },
  { value: 500, suffix: "+", label: "represented companies" },
  { value: 1000, suffix: "s", label: "of past Summit Attendees" },
]

export function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0))
  const startedRef = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const run = () => {
      if (startedRef.current) return
      startedRef.current = true

      const duration = 1400
      const start = performance.now()

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCounts(STATS.map((s) => Math.round(s.value * eased)))
        if (progress < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.35 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="summit-stats" className="section section-stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat, index) => (
            <div className="stat-card" key={stat.label}>
              <span className="stat-value">
                {counts[index]}
                {stat.suffix}
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
