"use client"

import { useEffect, useRef, useState } from "react"
import { mapRange, scrollToSection } from "@/lib/scroll"

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const [introStep, setIntroStep] = useState(0)

  useEffect(() => {
    const timers = [0, 1, 2].map((index) =>
      window.setTimeout(() => setIntroStep((step) => Math.max(step, index + 1)), 500 + index * 450),
    )
    return () => timers.forEach((t) => window.clearTimeout(t))
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    const image = imageRef.current
    const overlay = overlayRef.current
    const title = titleRef.current
    if (!section || !image || !overlay || !title) return

    const update = () => {
      const sectionTop = section.offsetTop
      const progress = mapRange(window.scrollY, sectionTop, sectionTop + window.innerHeight * 0.85, 0, 1)
      const scale = mapRange(progress, 0, 1, 1, 1.14)
      const overlayOpacity = mapRange(progress, 0, 1, 0.45, 0.78)
      const titleY = mapRange(progress, 0, 1, 0, -48)
      const titleBlur = mapRange(progress, 0, 1, 0, 4)
      const titleOpacity = mapRange(progress, 0, 1, 1, 0.35)

      image.style.transform = `scale(${scale})`
      overlay.style.opacity = String(overlayOpacity)
      title.style.transform = `translateY(${titleY}px)`
      title.style.filter = `blur(${titleBlur}px)`
      title.style.opacity = String(titleOpacity)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  const visible = (step: number) => (introStep >= step ? "is-visible" : "")

  return (
    <header id="about" className="hero hero-parallax" ref={sectionRef}>
      <div className="hero-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/valo-park-hero.png"
          alt="Valo Park atrium, Tysons Corner — summit venue"
          className="hero-image"
          ref={imageRef}
        />
        <div className="hero-overlay" ref={overlayRef}></div>
      </div>
      <div className="hero-content">
        <p className={`hero-kicker hero-kicker-lines ${visible(1)}`}>
          <span className="hero-kicker-line" aria-hidden="true"></span>
          Wharton Club of DC
          <span className="hero-kicker-line" aria-hidden="true"></span>
        </p>
        <h1 className="hero-title" ref={titleRef}>
          <span className="hero-title-line">
            <span className="title-num">12</span>TH ANNUAL WHARTON DC
          </span>
          <span className="hero-title-line">INNOVATION SUMMIT</span>
        </h1>
        <p className={`hero-meta ${visible(2)}`}>Thursday, October 1, 2026 · Valo Park, Tysons, VA</p>
        <div className={`hero-actions ${visible(3)}`}>
          <button className="btn btn-primary" onClick={() => scrollToSection("register")}>
            Register Now
          </button>
          <button className="btn btn-ghost" onClick={() => scrollToSection("agenda")}>
            View Agenda
          </button>
        </div>
      </div>
      <button
        className="scroll-indicator"
        onClick={() => scrollToSection("about-details")}
        aria-label="Scroll to about the club"
      >
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </header>
  )
}
