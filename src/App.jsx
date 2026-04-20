import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import AudienceCarousel from './components/AudienceCarousel'
import SharingDemo from './components/SharingDemo'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FooterCTA from './components/FooterCTA'
import MobileStickyCTA from './components/MobileStickyCTA'
import PrivacyPolicy from './components/PrivacyPolicy'
import DeleteAccount from './components/DeleteAccount'

function App() {
  return (
    <Router>
      <div className="w-full bg-warm-white text-deep-navy min-h-screen relative overflow-clip flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <HowItWorks />
                <Features />
                <AudienceCarousel />
                <SharingDemo />
                <Testimonials />
                <Pricing />
              </main>
            } />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/privacy/delete-account" element={<DeleteAccount />} />
          </Routes>
        </div>
        <FooterCTA />
        <MobileStickyCTA />
      </div>
    </Router>
  )
}

export default App
