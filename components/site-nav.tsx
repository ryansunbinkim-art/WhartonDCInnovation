"use client"

import { useEffect, useState } from "react"
import { NAV_OFFSET, NAV_SECTIONS } from "@/lib/data"
import { scrollToSection } from "@/lib/scroll"

export function SiteNav() {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 120)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const updateNav = () => {
      const scrollPos = window.scrollY + NAV_OFFSET + 80
      let current: string | null = null

      NAV_SECTIONS.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return
        if (el.offsetTop <= scrollPos) current = id
      })

      setActive(current)
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", updateNav, { passive: true })
    updateNav()
    return () => window.removeEventListener("scroll", updateNav)
  }, [])

  const handleNav = (id: string) => {
    scrollToSection(id)
    setDrawerOpen(false)
  }

  const navClass = ["nav", mounted ? "is-mounted" : "", scrolled ? "is-scrolled" : ""]
    .filter(Boolean)
    .join(" ")

  return (
    <nav id="nav" className={navClass} aria-label="Main navigation">
      <div className="nav-inner">
        <button
          className="nav-brand"
          onClick={() => handleNav("about")}
          aria-label="Wharton DC Innovation Summit home"
        >
          <span className="nav-monogram">W</span>
          <span className="nav-brand-text">Wharton DC Innovation Summit</span>
        </button>
        <div className="nav-links" role="menubar">
          {NAV_SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={[id === "register" ? "nav-cta" : "", active === id ? "is-active" : ""]
                .filter(Boolean)
                .join(" ")}
            >
              {label}
            </button>
          ))}
        </div>
        <button
          className="nav-toggle"
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="nav-drawer" hidden={!drawerOpen}>
        {NAV_SECTIONS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleNav(id)}
            className={active === id ? "is-active" : undefined}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  )
}
