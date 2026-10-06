import Hero from '../components/Hero'
import Experiences from '../components/Experiences'
import Reviews from '../components/Reviews'
import BookingBand from '../components/BookingBand'
import Footer from '../components/Footer'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="home__hero-section">
        <Hero />
      </section>
      <Experiences />
      <Reviews />
      <BookingBand />
      <Footer />
    </div>
  )
}

export default Home
