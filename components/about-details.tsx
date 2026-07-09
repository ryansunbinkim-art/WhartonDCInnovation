import { Reveal } from "./reveal"

export function AboutDetails() {
  return (
    <section id="about-details" className="section section-about-details">
      <div className="container">
        <div className="about-details-grid">
          <Reveal className="about-details-block">
            <h2>What is Wharton DC?</h2>
            <p>
              The Wharton DC Club is a business-focused membership organization that provides opportunities for
              networking and lifelong learning to entrepreneurs and business leaders, as well as professionals from
              elite/top universities and business schools. With a 58-year history and a core base of Wharton
              Business School alumni as members, our Club is an active, engaged non-profit organization that values
              innovation, entrepreneurship, and the sharing of ideas to advance well-being throughout the U.S. and
              beyond.
            </p>
          </Reveal>
          <Reveal className="about-details-block" delay={120}>
            <h2>Why?</h2>
            <p>
              Singular experts, critical innovators and industry leaders come together in the DC area to impart
              wisdom that attendees can absorb, returning to work refreshed, energized and motivated to apply what
              they have learned. Keynotes and interactive sessions will offer valuable insights to representatives
              from fast-growing innovative companies, industry, tech, government and agile smaller businesses.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
