import { Link } from "react-router-dom";
import { IconStar, IconBrandGoogle, IconArrowRight } from "@tabler/icons-react";
import { fill, useUi } from "../i18n";
import "./Reviews.css";

/** Estrellas fijas: las dos reseñas publicadas son de 5. */
const RATING = 5;

function Stars({ count, label }: { count: number; label: string }) {
  return (
    <span className="review-card__stars" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar
          key={i}
          size={14}
          stroke={0}
          fill={i < count ? "currentColor" : "none"}
          style={{ opacity: i < count ? 1 : 0.25 }}
        />
      ))}
    </span>
  );
}

function Reviews() {
  const ui = useUi();

  return (
    <section className="reviews">
      <header className="reviews__header" data-reveal="">
        <div className="reviews__heading">
          <p className="reviews__eyebrow">{ui.reviews.eyebrow}</p>
          <h2 className="reviews__title">{ui.reviews.title}</h2>
        </div>
        <div className="reviews__badge">
          <IconBrandGoogle size={20} stroke={1.5} />
          <span className="reviews__badge-text">
            <strong>5.0</strong> · {ui.reviews.badge}
          </span>
        </div>
      </header>

      <div className="reviews__body">
        <div className="reviews__grid">
          {ui.reviews.items.map((r, i) => (
            <article key={i} className="review-card" data-reveal="">
              <Stars
                count={RATING}
                label={fill(ui.reviews.starsAria, { n: RATING })}
              />
              <p className="review-card__text">"{r.text}"</p>
              <footer className="review-card__footer">
                <span className="review-card__author">{r.author}</span>
                <span className="review-card__date">{r.date}</span>
              </footer>
            </article>
          ))}
        </div>

        <div className="reviews__phrases">
          <p className="reviews__phrase-title">{ui.reviews.phraseTitle}</p>
          <span className="reviews__phrase-rule" aria-hidden="true" />
          <p className="reviews__phrase-text">{ui.reviews.phraseText}</p>
          <Link to="/reservas" className="reviews__phrase-link">
            {ui.reviews.phraseLink}
            <IconArrowRight size={16} stroke={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
