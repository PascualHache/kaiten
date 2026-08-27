import { Link } from "react-router-dom";
import { IconStar, IconBrandGoogle, IconArrowRight } from "@tabler/icons-react";
import "./Reviews.css";

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  source: "google";
}

const REVIEWS: Review[] = [
  {
    author: "Laura M.",
    rating: 5,
    text: "Experiencia increíble. Aitor tiene una paciencia y una pedagogía excepcionales. En dos días mejoré más que en los últimos tres años de esquí.",
    date: "Enero 2025",
    source: "google",
  },
  {
    author: "Carlos R.",
    rating: 5,
    text: "El Full Day fue perfecto. Recorrimos zonas de Baqueira que jamás hubiera encontrado solo. Completamente personalizado al nivel de cada uno.",
    date: "Febrero 2025",
    source: "google",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="review-card__stars" aria-label={`${count} de 5 estrellas`}>
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
  return (
    <section className="reviews">
      <header className="reviews__header">
        <div className="reviews__heading">
          <p className="reviews__eyebrow">Reseñas verificadas</p>
          <h2 className="reviews__title">Lo que dicen nuestros clientes</h2>
        </div>
        <div className="reviews__badge">
          <IconBrandGoogle size={20} stroke={1.5} />
          <span className="reviews__badge-text">
            <strong>5.0</strong> · Google Reviews
          </span>
        </div>
      </header>

      <div className="reviews__body">
        <div className="reviews__grid">
          {REVIEWS.map((r, i) => (
            <article key={i} className="review-card">
              <Stars count={r.rating} />
              <p className="review-card__text">"{r.text}"</p>
              <footer className="review-card__footer">
                <span className="review-card__author">{r.author}</span>
                <span className="review-card__date">{r.date}</span>
              </footer>
            </article>
          ))}
        </div>

        <div className="reviews__phrases">
          <p className="reviews__phrase-title">
            Una buena clase no termina cuando te quitas los esquís.
          </p>
          <span className="reviews__phrase-rule" aria-hidden="true" />
          <p className="reviews__phrase-text">
            Empieza cuando quieres volver mañana.
          </p>
          <Link to="/reservas" className="reviews__phrase-link">
            Reserva tu experiencia
            <IconArrowRight size={16} stroke={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
