import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Worlds from './components/Worlds'
import Gallery from './components/Gallery'
import Download from './components/Download'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Worlds />
        <Gallery />
        <Download />
      </main>
      <Footer />
    </>
  )
}
