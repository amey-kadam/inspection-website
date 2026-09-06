import { MotionConfig } from 'motion/react'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Process } from './components/Process'
import { InspectionCategories } from './components/InspectionCategories'
import { Checklist } from './components/Checklist'
import { Pricing } from './components/Pricing'
import { Benefits } from './components/Benefits'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'

function App() {
  useSmoothScroll()

  return (
    <MotionConfig reducedMotion="user">
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
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </MotionConfig>
  )
}

export default App
