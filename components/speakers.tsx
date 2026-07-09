import { Reveal } from "./reveal"

export function Speakers() {
  return (
    <section id="speakers" className="section section-speakers">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Speakers</p>
          <h2>To be announced&hellip;</h2>
        </Reveal>
        <Reveal as="p" className="lead speakers-tba">
          Our speaker lineup for the 2026 summit will be announced soon.
        </Reveal>
      </div>
    </section>
  )
}
