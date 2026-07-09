import { PRICING, REGISTER_URL } from "@/lib/data"
import { Reveal } from "./reveal"

export function MoreInfo() {
  return (
    <section id="more-info" className="section section-info-link">
      <div className="container">
        <Reveal as="p" className="info-link">
          For more information visit:{" "}
          <a href="https://www.whartondc.com/article.html?aid=5029" target="_blank" rel="noopener noreferrer">
            https://www.whartondc.com/article.html?aid=5029
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export function Register() {
  return (
    <section id="register" className="section section-register">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Register</p>
          <h2>Secure your seat</h2>
          <p className="lead">
            Review the registration options below, then complete your purchase on the Wharton DC store.
          </p>
        </Reveal>
        <Reveal className="register-promo">
          <div className="register-promo-head">
            <p className="register-promo-deadline">Now through July 5</p>
            <p className="register-promo-intro">Everyone who registers gets</p>
          </div>
          <ul className="register-promo-list">
            <li className="register-promo-item">
              <span className="register-promo-icon" aria-hidden="true">
                ✓
              </span>
              <div>
                <strong>30-day Money Back Guarantee</strong>
                <p>
                  Time for you to review the program and see if it meets your needs. If not, easy to request and
                  receive a full refund!
                </p>
              </div>
            </li>
            <li className="register-promo-item">
              <span className="register-promo-icon" aria-hidden="true">
                ✓
              </span>
              <div>
                <strong>Embassy Reception included</strong>
                <p>
                  Attend the probable Embassy Reception — now being organized at the Japanese Embassy — on Friday,
                  October 2, 2026, at no added fee. It will be at least $75/person after June 15.
                </p>
              </div>
            </li>
          </ul>
        </Reveal>
        <div className="pricing-grid">
          {PRICING.map((tier, index) => (
            <Reveal
              as="article"
              className={`pricing-card${tier.featured ? " pricing-card-featured" : ""}`}
              delay={index * 80}
              key={tier.name}
            >
              <p className="pricing-name">{tier.name}</p>
              <p className="pricing-price">{tier.price}</p>
              <p className="pricing-desc">{tier.desc}</p>
              <a
                className="btn btn-primary btn-block"
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="register-note">
          All registrations are processed through the official Wharton Club of DC store.
        </Reveal>
      </div>
    </section>
  )
}
