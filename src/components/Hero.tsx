import { useState } from 'react'
import { useBooking } from '../context/BookingContext'
import { Img } from './ui/Img'
import { SampleReportModal } from './SampleReportModal'

export function Hero() {
  const { open } = useBooking()
  const [sampleOpen, setSampleOpen] = useState(false)

  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[32rem] w-[32rem] rounded-full bg-brass/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brass-dark">
            Inspect Before You Invest
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Professional Home Inspection Services
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
            Get complete peace of mind before taking possession of your new home. Our
            certified engineers inspect every corner of your property using
            professional equipment and provide a detailed digital inspection report.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => open()}
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-ink-2 active:scale-[0.98]"
            >
              Book Inspection
            </button>
            <button
              onClick={() => setSampleOpen(true)}
              className="rounded-full border border-line bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-ink"
            >
              View Sample Report
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-7">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl font-extrabold text-ink">4.9/5</span>
              <span className="text-sm leading-tight text-muted">
                Trusted by
                <br />
                1,500+ homeowners
              </span>
            </div>
            <div className="hidden h-9 w-px bg-line sm:block" />
            <div className="flex items-center gap-2 text-sm font-medium text-body">
              <Dot /> Report ready in 24 hours
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-body">
              <Dot /> Certified
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-body">
              <Dot /> ISO 9001
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in [animation-delay:150ms]">
          <div className="overflow-hidden rounded-3xl border border-line/60 shadow-2xl shadow-ink/10">
            <Img
              src="https://images.unsplash.com/photo-1621891333266-0e9402242154?w=1200&q=80&auto=format&fit=crop"
              alt="Bright, freshly finished modern apartment interior ready for a certified pre-possession inspection"
              className="aspect-[4/5] w-full object-cover sm:aspect-[4/4.4]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl border border-line bg-white p-4 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass-dark">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="m5 13 4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-ink">250+ checks</p>
                <p className="text-xs text-muted">completed on-site</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SampleReportModal open={sampleOpen} onClose={() => setSampleOpen(false)} />
    </section>
  )
}

function Dot() {
  return <span className="h-1.5 w-1.5 rounded-full bg-brass" aria-hidden="true" />
}
