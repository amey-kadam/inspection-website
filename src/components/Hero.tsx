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
    <section id="top" className="relative flex min-h-[78svh] flex-col overflow-hidden bg-ink sm:min-h-[90svh]">
      <Img
        src="https://images.pexels.com/photos/8082227/pexels-photo-8082227.jpeg?auto=compress&cs=tinysrgb&w=2000"
        width={2000}
        height={1335}
        priority
        alt="A finished apartment interior with wooden flooring, built-in joinery and large windows"
        // The source is a cool, flat grey room; lifting exposure and warmth stops
        // it reading as murky behind a light scrim.
        className="absolute inset-0 h-full w-full object-cover object-[55%_25%] brightness-[1.12] contrast-[1.12] saturate-[1.25] sepia-[0.06] sm:object-center"
      />
      {/* The source photograph is bright, so a flat wash strong enough to carry
          white type just flattens it to a dark band. Instead the scrim is
          asymmetric: near-solid under the copy on the left, clearing entirely by
          the right third so the image is genuinely visible. A darker,
          architectural photograph would not need this and could run far lighter. */}
      {/* This photograph is dark navy exactly where the copy sits, so white type
          needs far less coverage here than dark type would — the scrim can stay
          light and the colour survives. Mobile gets an explicit solid base
          because a soft fade cannot carry type over detail this busy. */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-ink)_0%,var(--color-ink)_60%,transparent_97%)] sm:hidden"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden bg-gradient-to-r from-ink via-ink/60 via-40% to-transparent sm:block"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden bg-gradient-to-t from-ink/80 via-transparent via-35% to-ink/45 sm:block"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pt-40 pb-8 sm:justify-center sm:px-8 sm:pt-36 sm:pb-10">
        <span style={rise(0)} className="flex animate-fade-up items-center gap-3">
          <span className="h-px w-10 bg-brass" aria-hidden="true" />
          <span className="label text-brass-light">Inspect before you invest</span>
        </span>

        <h1
          style={rise(1)}
          className="mt-6 max-w-4xl animate-fade-up text-balance text-[2.35rem] font-extrabold leading-[1.0] sm:leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Professional Home <span className="text-brass-light">Inspection</span> Services in India
        </h1>

        <div style={rise(2)} className="mt-10 flex animate-fade-up flex-col gap-3 sm:flex-row">
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-ink shadow-lg shadow-ink/30 hover:bg-brass-light"
          >
            Book Inspection
          </motion.a>
          <motion.button
            onClick={() => setSampleOpen(true)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="rounded-full border border-white/45 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:border-white hover:bg-white/10"
          >
            View Sample Report
          </motion.button>
        </div>
      </div>

      <div
        style={rise(3)}
        className="relative z-10 mx-auto w-full max-w-7xl animate-fade-up px-5 pb-12 sm:px-8"
      >
        <div className="flex flex-col gap-8 border-t border-white/25 pt-7 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-wrap items-baseline gap-x-10 gap-y-4">
            <span className="flex items-baseline gap-2.5">
              <span className="tnum text-2xl font-extrabold text-white">4.9</span>
              <span className="label text-white/60">/ 5 · 100+ homeowners</span>
            </span>
            <span className="flex items-baseline gap-2.5">
              <span className="tnum text-2xl font-extrabold text-white">24</span>
              <span className="label text-white/60">hrs to report</span>
            </span>
          </div>

          <p className="hidden max-w-sm text-sm leading-relaxed text-white/85 sm:block sm:text-right">
            Certified engineers inspect every corner of your property with professional
            equipment, and deliver a photo-annotated report within 24 hours.
          </p>
        </div>
      </div>

      <SampleReportModal open={sampleOpen} onClose={() => setSampleOpen(false)} />
    </section>
  )
}
