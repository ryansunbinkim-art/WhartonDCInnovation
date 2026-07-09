import { CAROUSEL_LOGOS } from "@/lib/data"
import { LogoItem } from "./logo-item"
import { Reveal } from "./reveal"

export function Attendees() {
  const doubled = [...CAROUSEL_LOGOS, ...CAROUSEL_LOGOS]

  return (
    <section id="attendees" className="section section-carousel">
      <div className="container">
        <Reveal as="h2" className="attendees-heading">
          Attendees include leaders from:
        </Reveal>
      </div>
      <Reveal className="logo-carousel-wrap">
        <div className="logo-carousel-fade logo-carousel-fade-left"></div>
        <div className="logo-carousel-fade logo-carousel-fade-right"></div>
        <div className="logo-carousel-track">
          {doubled.map((logo, index) => (
            <LogoItem key={`${logo.name}-${index}`} {...logo} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
