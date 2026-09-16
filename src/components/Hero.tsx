import { useState } from 'react'
import { motion } from 'motion/react'
import { FEATURED_INSPECTION, inspections, WHATSAPP_URL } from '../data/content'
import { Img } from './ui/Img'
import { StreetMap } from './ui/StreetMap'
import { SampleReportModal } from './SampleReportModal'

// The hero is the LCP element, so its entrance is CSS-driven: the copy is in the
// HTML and animates without waiting on JS. Framer is used below only for the
// pins, which are interactive and meaningless without JS anyway.
const rise = (i: number) => ({ animationDelay: `${80 + i * 90}ms` })

const CARD_ALIGN = {
  center: 'left-0 -translate-x-1/2',
  right: 'left-0 -translate-x-6',
  left: 'right-0 translate-x-6',
} as const

export function Hero() {
  const [sampleOpen, setSampleOpen] = useState(false)
  const [active, setActive] = useState<string>(FEATURED_INSPECTION)
  const current = inspections.find((i) => i.id === active) ?? inspections[0]

  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-32 pb-10 sm:pt-36 sm:pb-14">
      <StreetMap className="absolute inset-0 h-full w-full" />
      {/* Keeps the copy legible over the map and fades it toward the top. */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-paper via-paper/75 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[32rem] w-[32rem] rounded-full bg-brass/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span
          style={rise(0)}
          className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-line bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brass-dark backdrop-blur"
        >
          Inspect Before You Invest
        </span>

        <h1
          style={rise(1)}
          className="mt-6 animate-fade-up text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]"
        >
          Professional Home Inspection Services
        </h1>

        <p style={rise(2)} className="mx-auto mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-body">
          Get complete peace of mind before taking possession of your new home. Our certified
          engineers inspect every corner using professional equipment and deliver a detailed
          digital report.
        </p>

        <div style={rise(3)} className="mt-9 flex animate-fade-up flex-col justify-center gap-3 sm:flex-row">
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
            className="rounded-full border border-line bg-white/80 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur hover:border-ink"
          >
            View Sample Report
          </motion.button>
        </div>

        <div
          style={rise(4)}
          className="mt-9 flex animate-fade-up flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm"
        >
          <span className="flex items-center gap-2.5">
            <span className="text-xl font-extrabold text-ink">4.9/5</span>
            <span className="text-muted">Trusted by 100+ homeowners</span>
          </span>
          <span className="hidden h-5 w-px bg-line sm:block" />
          <span className="flex items-center gap-2 font-medium text-body">
            <span className="h-1.5 w-1.5 rounded-full bg-brass" aria-hidden="true" />
            Report ready in 24 hours
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 max-w-6xl px-5 sm:mt-12 sm:px-8">
        <p className="sr-only">Recent inspections. Select a marker to see its details.</p>

        <div className="relative h-[200px] sm:h-[300px]">
          {inspections.map((ins, i) => (
            <Pin
              key={ins.id}
              data={ins}
              index={i}
              active={active === ins.id}
              onActivate={() => setActive(ins.id)}
            />
          ))}

          {/* Desktop: the card hangs off its pin. Pins in the upper half open
              downward so the card cannot collide with the copy above. */}
          <div className="absolute" style={{ left: `${current.x}%`, top: `${current.y}%` }}>
            {/* Keyed remount, not AnimatePresence: the swap must be instant on
                hover, and an exit animation would leave a gap or overlap. */}
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              className={`absolute hidden w-56 sm:block ${
                current.y < 45 ? 'top-8' : 'bottom-8'
              } ${CARD_ALIGN[current.align]}`}
            >
              <InspectionCard data={current} />
            </motion.div>
          </div>
        </div>

        {/* Mobile: the field is too small for an anchored card to avoid covering
            other pins, so it gets a stable slot underneath instead. */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          className="mx-auto mt-5 w-full max-w-[15rem] sm:hidden"
        >
          <InspectionCard data={current} />
        </motion.div>
      </div>

      <SampleReportModal open={sampleOpen} onClose={() => setSampleOpen(false)} />
    </section>
  )
}

function Pin({
  data,
  index,
  active,
  onActivate,
}: {
  data: (typeof inspections)[number]
  index: number
  active: boolean
  onActivate: () => void
}) {
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      aria-expanded={active}
      aria-label={`${data.project}, ${data.city} — ${data.defects} defects found`}
      style={{ left: `${data.x}%`, top: `${data.y}%`, animationDelay: `${450 + index * 80}ms` }}
      // p-2 pads the 28px marker out to a 44px touch target.
      className={`absolute -translate-x-1/2 -translate-y-1/2 animate-fade-in rounded-full p-2 outline-offset-2 ${
        data.mobile ? '' : 'hidden sm:block'
      }`}
    >
      <span
        className={`relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-white shadow-lg transition-colors ${
          active ? 'bg-ink' : 'bg-brass hover:bg-brass-dark'
        }`}
      >
        <span className="h-2 w-2 rounded-full bg-white" />
        {active && (
          <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-ink/20" />
        )}
      </span>
    </button>
  )
}

function InspectionCard({ data }: { data: (typeof inspections)[number] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-xl shadow-ink/10">
      {'image' in data && <Img src={data.image} alt="" className="h-24 w-full object-cover" />}
      <div className="p-3.5">
        <p className="text-sm font-bold leading-tight text-ink">{data.project}</p>
        <p className="mt-0.5 text-xs text-muted">
          {data.city} · {data.config}
        </p>
        <p className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-brass-dark">
          <span className="h-1.5 w-1.5 rounded-full bg-brass" aria-hidden="true" />
          {data.defects} defects found
        </p>
      </div>
    </div>
  )
}
