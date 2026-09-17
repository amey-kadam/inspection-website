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
    <section id="top" className="relative flex min-h-[78svh] flex-col overflow-hidden bg-paper sm:min-h-[90svh]">
      <Img
        src="https://images.pexels.com/photos/8146330/pexels-photo-8146330.jpeg?auto=compress&cs=tinysrgb&w=2000"
        width={2000}
        height={1335}
        priority
        alt="An empty, freshly finished apartment awaiting handover, the point at which a pre-possession inspection is carried out"
        // The source is a cool, flat grey room; lifting exposure and warmth stops
        // it reading as murky behind a light scrim.
        className="absolute inset-0 h-full w-full object-cover object-[72%_75%] brightness-[1.02] contrast-[1.14] saturate-[1.3] sepia-[0.05] sm:object-center"
      />
      {/* The source photograph is bright, so a flat wash strong enough to carry
          white type just flattens it to a dark band. Instead the scrim is
          asymmetric: near-solid under the copy on the left, clearing entirely by
          the right third so the image is genuinely visible. A darker,
          architectural photograph would not need this and could run far lighter. */}
      {/* This photograph is bright, so the copy is dark-on-light and the scrims
          are the page's own paper cream — the hero then runs straight into the
          cream sections below. Mobile keeps an explicit solid base rather than a
          soft fade, which cannot reliably carry type over a photograph. */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-paper)_0%,var(--color-paper)_60%,transparent_97%)] sm:hidden"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden bg-gradient-to-r from-paper via-paper/65 via-32% to-transparent sm:block"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden bg-gradient-to-t from-paper/70 via-transparent to-paper/40 sm:block"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pt-40 pb-8 sm:justify-center sm:px-8 sm:pt-36 sm:pb-10">
        <span style={rise(0)} className="flex animate-fade-up items-center gap-3">
          <span className="h-px w-10 bg-brass" aria-hidden="true" />
          <span className="label text-brass-dark">Inspect before you invest</span>
        </span>

        <h1
          style={rise(1)}
          className="mt-6 max-w-4xl animate-fade-up text-balance text-[2.35rem] font-extrabold leading-[1.0] sm:leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl"
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
