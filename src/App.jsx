import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Hero from './sections/Hero'
import Highlights from './sections/Highlights'
import Journal from './sections/Journal'
import Documentation from './sections/Documentation'
import Certification from './sections/Certification'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Journal />
        <Documentation />
        <Certification />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App

