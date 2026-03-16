import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BookingBar from '../components/BookingBar'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <BookingBar />
    </div>
  )
}

export default Home
