import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BookingBar from '../components/BookingBar'
import Footer from '../components/Footer'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Navbar />
      <section className="home__hero-section">
        <Hero />
        <BookingBar />
      </section>
      <Footer />
    </div>
  )
}

export default Home
