import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HeroFull from '../components/HeroFull'
import Experiences from '../components/Experiences'
import Footer from '../components/Footer'
import { useHeroVariant } from '../dev/heroVariant'
import './Home.css'

function Home() {
  const heroVariant = useHeroVariant()

  return (
    <div className="home">
      <Navbar />
      <section className="home__hero-section">
        {heroVariant === 'full' ? <HeroFull /> : <Hero />}
      </section>
      <Experiences />
      <Footer />
    </div>
  )
}

export default Home
