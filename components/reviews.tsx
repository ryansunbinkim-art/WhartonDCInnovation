import { REVIEWS } from "@/lib/data"
import { Reveal } from "./reveal"

export function Reviews() {
  return (
    <section id="reviews" className="section section-reviews">
      <div className="container reviews-layout">
        <Reveal className="section-head">
          <p className="eyebrow">Reviews</p>
          <h2>What attendees are saying</h2>
        </Reveal>
        <div className="reviews-grid">
          {REVIEWS.map((review, index) => (
            <Reveal as="article" className="review-card" delay={index * 100} key={review.author}>
              <div className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote>{`"${review.quote}"`}</blockquote>
              <cite>
                {review.author} · {review.org}
              </cite>
            </Reveal>
          ))}
        </div>
        <Reveal className="video-wrap" delay={200}>
          <iframe
            src="https://www.youtube.com/embed/OdG7e4e6VPs"
            title="Wharton DC Innovation Summit highlights"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Reveal>
      </div>
    </section>
  )
}
