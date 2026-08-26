import { BookingProvider } from './context/BookingContext'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Process } from './components/Process'
import { InspectionCategories } from './components/InspectionCategories'
import { Checklist } from './components/Checklist'
import { Pricing } from './components/Pricing'
import { Benefits } from './components/Benefits'
import { ServiceAreas } from './components/ServiceAreas'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { BookingModal } from './components/BookingModal'
import { WhatsAppButton } from './components/WhatsAppButton'

function App() {
  return (
    <BookingProvider>
      <div className="overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <Stats />
          <WhyChooseUs />
          <Process />
          <InspectionCategories />
          <Checklist />
          <Pricing />
          <Benefits />
          <ServiceAreas />
          <Portfolio />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <BookingModal />
        <WhatsAppButton />
      </div>
    </BookingProvider>
  )
}

export default App
