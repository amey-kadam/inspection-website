import { useState } from 'react'
import { motion } from 'motion/react'
import { sampleReport, WHATSAPP_URL } from '../data/content'
import { Callout } from './ui/Report'
import { SampleReportModal } from './SampleReportModal'

// CSS-driven so the copy is visible without waiting on JS. Framer still drives
// the CTA hover/tap springs below.
const rise = (i: number) => ({ animationDelay: `${80 + i * 90}ms` })

export function Hero() {
  const [sampleOpen, setSampleOpen] = useState(false)

  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[32rem] w-[32rem] rounded-full bg-brass/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div>
          <span style={rise(0)} className="label animate-fade-up block text-brass-dark">
            Inspect before you invest
          </span>

          <h1
            style={rise(1)}
            className="mt-6 animate-fade-up text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Professional Home Inspection Services in India
          </h1>

          <p style={rise(2)} className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-body">
            Get complete peace of mind before taking possession of your new home. Our certified
            engineers inspect every corner of your property using professional equipment and
            provide a detailed digital inspection report.
          </p>

          <div style={rise(3)} className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="rounded-full bg-ink px-7 py-3.5 text-center text-sm font-semibold text-white hover:bg-ink-2"
            >
              Book Inspection
            </motion.a>
            <motion.button
              onClick={() => setSampleOpen(true)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="rounded-full border border-line bg-white px-7 py-3.5 text-sm font-semibold text-ink hover:border-ink"
            >
              View Sample Report
            </motion.button>
          </div>

          <div
            style={rise(4)}
            className="mt-10 flex animate-fade-up flex-wrap items-center gap-x-10 gap-y-4 border-t border-line pt-7"
          >
            <span className="flex items-baseline gap-2.5">
              <span className="tnum text-2xl font-extrabold text-ink">4.9</span>
              <span className="label text-muted">/ 5 · 100+ homeowners</span>
            </span>
            <span className="hidden h-8 w-px bg-line sm:block" aria-hidden="true" />
            <span className="flex items-baseline gap-2.5">
              <span className="tnum text-2xl font-extrabold text-ink">24</span>
              <span className="label text-muted">hrs to report</span>
            </span>
          </div>
        </div>

        <div className="animate-fade-in [animation-delay:200ms]">
          <ReportCard />
          <Callout className="mt-5">Thermal imaging on every inspection</Callout>
        </div>
      </div>

      <SampleReportModal open={sampleOpen} onClose={() => setSampleOpen(false)} />
    </section>
  )
}

/** The product, not a stock photograph: an extract of the report you receive. */
function ReportCard() {
  const { ref, property, date, findings, groups } = sampleReport

  return (
    <div className="rounded-2xl border border-line bg-white shadow-2xl shadow-ink/10">
      <div className="flex items-center justify-between border-b border-line px-6 py-4">
        <span className="label text-ink">Inspection Report</span>
        <span className="label tnum rounded-full bg-paper-2 px-2.5 py-1 text-muted">Sample · {ref}</span>
      </div>

      <div className="flex items-center justify-between border-b border-line bg-paper/60 px-6 py-3">
        <span className="text-sm font-semibold text-ink">{property}</span>
        <span className="label tnum text-muted">{date}</span>
      </div>

      <div className="px-6 py-5">
        {groups.map((group, gi) => (
          <div key={group.label} className={gi ? 'mt-7' : ''}>
            <div className="flex items-center gap-3">
              <span className="label tnum text-brass-dark">{String(gi + 1).padStart(2, '0')}</span>
              <span className="label text-muted">{group.label}</span>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
              <span className="label tnum text-muted">{group.checks} checks</span>
            </div>

            <div className="mt-2">
              {group.rows.map((row) => (
                <div
                  key={row.name}
                  className="flex items-center gap-3 border-b border-line/70 py-2.5 last:border-0"
                >
                  <span
                    className={`label ${row.status === 'flag' ? 'text-brass-dark' : 'text-muted/60'}`}
                    aria-hidden="true"
                  >
                    {row.status === 'flag' ? '!' : '✓'}
                  </span>
                  <span className="flex-1 text-sm text-body">{row.name}</span>
                  <span
                    className={`label tnum ${row.status === 'flag' ? 'font-semibold text-brass-dark' : 'text-muted'}`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-line bg-paper/60 px-6 py-4">
        <span className="label text-muted">
          <span className="tnum font-semibold text-ink">{findings}</span> findings documented
        </span>
        <span className="label text-muted">Photo-annotated</span>
      </div>
    </div>
  )
}
