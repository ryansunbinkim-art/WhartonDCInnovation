import { SPONSORS } from "@/lib/data"
import { LogoItem } from "./logo-item"
import { Reveal } from "./reveal"

export function Sponsors() {
  return (
    <section id="sponsors" className="section section-sponsors">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Sponsors</p>
          <h2>Powered by our partners</h2>
        </Reveal>
        <div>
          {SPONSORS.map((tier, tierIndex) => (
            <Reveal className="sponsor-tier" delay={tierIndex * 100} key={tier.tier}>
              <h3>{tier.tier}</h3>
              <div className="sponsor-row">
                {tier.items.map((item) => (
                  <LogoItem key={item.name} {...item} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
