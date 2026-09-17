import { useState } from 'react'
import { motion } from 'motion/react'
import { WHATSAPP_URL } from '../data/content'
import { Img } from './ui/Img'
import { SampleReportModal } from './SampleReportModal'

// CSS-driven so the copy is visible without waiting on JS. Framer still drives
// the CTA hover/tap springs.
const rise = (i: number) => ({ animationDelay: `${120 + i * 90}ms` })

export function Hero() {
  const [sampleOpen, setSampleOpen] = useState(false)

  return (
    <section id="top" className="relative flex min-h-[90svh] flex-col overflow-hidden bg-paper">
      <Img
        src="https://images.pexels.com/photos/8146330/pexels-photo-8146330.jpeg?auto=compress&cs=tinysrgb&w=2000"
        width={2000}
        height={1335}
        priority
        alt="An empty, freshly finished apartment awaiting handover, the point at which a pre-possession inspection is carried out"
        // The source is a cool, flat grey room; lifting exposure and warmth stops
        // it reading as murky behind a light scrim.
        className="absolute inset-0 h-full w-full object-cover brightness-[1.12] contrast-[1.12] saturate-[1.25] sepia-[0.06]"
      />
      {/* The source photograph is bright, so a flat wash strong enough to carry
          white type just flattens it to a dark band. Instead the scrim is
          asymmetric: near-solid under the copy on the left, clearing entirely by
          the right third so the image is genuinely visible. A darker,
          architectural photograph would not need this and could run far lighter. */}
      {/* Light scrims in the page's own paper cream rather than a dark wash, so
          the hero reads bright and runs straight into the cream sections below.
          Copy is dark-on-light, which needs far less coverage than white-on-dark. */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-paper via-paper/80 via-52% to-transparent sm:hidden"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden bg-gradient-to-r from-paper via-paper/70 via-35% to-transparent sm:block"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden bg-gradient-to-t from-paper/70 via-transparent to-paper/55 sm:block"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pt-32 pb-10 sm:justify-center sm:px-8 sm:pt-36">
        <span style={rise(0)} className="flex animate-fade-up items-center gap-3">
          <span className="h-px w-10 bg-brass" aria-hidden="true" />
          <span className="label text-brass-dark">Inspect before you invest</span>
        </span>

        <h1
          style={rise(1)}
          className="mt-6 max-w-4xl animate-fade-up text-balance text-[2.6rem] font-extrabold leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl"
        >
          Professional Home <span className="text-brass-dark">Inspection</span> Services in India
        </h1>

        <div style={rise(2)} className="mt-10 flex animate-fade-up flex-col gap-3 sm:flex-row">
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="rounded-full bg-ink px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-ink/20 hover:bg-ink-2"
          >
            Book Inspection
          </motion.a>
          <motion.button
            onClick={() => setSampleOpen(true)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="rounded-full border border-ink/25 bg-white/70 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm hover:border-ink hover:bg-white"
          >
            View Sample Report
          </motion.button>
        </div>
      </div>

      <div
        style={rise(3)}
        className="relative z-10 mx-auto w-full max-w-7xl animate-fade-up px-5 pb-12 sm:px-8"
      >
        <div className="flex flex-col gap-8 border-t border-ink/15 pt-7 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-wrap items-baseline gap-x-10 gap-y-4">
            <span className="flex items-baseline gap-2.5">
              <span className="tnum text-2xl font-extrabold text-ink">4.9</span>
              <span className="label text-muted">/ 5 · 100+ homeowners</span>
            </span>
            <span className="flex items-baseline gap-2.5">
              <span className="tnum text-2xl font-extrabold text-ink">24</span>
              <span className="label text-muted">hrs to report</span>
            </span>
          </div>

          <p className="hidden max-w-sm text-sm leading-relaxed text-body sm:block sm:text-right">
            Certified engineers inspect every corner of your property with professional
            equipment, and deliver a photo-annotated report within 24 hours.
          </p>
        </div>
      </div>

      <SampleReportModal open={sampleOpen} onClose={() => setSampleOpen(false)} />
    </section>
  )
}
