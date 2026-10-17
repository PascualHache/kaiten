import Hero from '../components/Hero'
import Experiences from '../components/Experiences'
import Reviews from '../components/Reviews'
import BookingBand from '../components/BookingBand'
import Footer from '../components/Footer'
import './Home.css'

/* Las reseñas se publican más adelante: hasta entonces la sección no se
   monta en ninguna resolución. Poner a true para devolverla a la Home. */
const SHOW_REVIEWS: boolean = false

function Home() {
  return (
    <div className="home">
      <section className="home__hero-section">
        <Hero />
      </section>
      <Experiences />
      {SHOW_REVIEWS && <Reviews />}
      <BookingBand />
      <Footer />
    </div>
  )
}

export default Home
