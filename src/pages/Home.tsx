import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Experiences from '../components/Experiences'
import Footer from '../components/Footer'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Navbar />
      <section className="home__hero-section">
        <Hero />
      </section>
      <Experiences />
      <Footer />
    </div>
  )
}

export default Home
