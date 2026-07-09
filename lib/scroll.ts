import { NAV_OFFSET } from "./data"

export function scrollToSection(id: string) {
  if (id === "about") {
    window.scrollTo({ top: 0, behavior: "smooth" })
    return
  }

  const target = document.getElementById(id)
  if (!target) return

  const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
  window.scrollTo({ top, behavior: "smooth" })
}

export function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  const clamped = Math.min(Math.max(value, inMin), inMax)
  const ratio = (clamped - inMin) / (inMax - inMin)
  return outMin + ratio * (outMax - outMin)
}
