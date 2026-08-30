import { useBooking } from '../context/BookingContext'
import { Reveal } from './ui/Reveal'

export function FinalCTA() {
  const { open } = useBooking()

  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-brass/10 blur-3xl"
        aria-hidden="true"
      />
      <Reveal className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-brass-light">
          Limited slots this week
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready for a Worry-Free Home Possession?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/70">
          Book your inspection today and step into your new home with total confidence.
        </p>

        <div className="mt-9 flex justify-center">
          <button
            onClick={() => open()}
            className="w-full rounded-full bg-brass px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-brass-light active:scale-[0.98] sm:w-auto"
          >
            Schedule Your Inspection
          </button>
        </div>
      </Reveal>
    </section>
  )
}
