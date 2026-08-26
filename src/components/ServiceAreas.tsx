import { cities } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionIntro } from './ui/SectionIntro'

export function ServiceAreas() {
  return (
    <section className="bg-paper-2 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          center
          label="Service Areas"
          heading="Serving India's fastest-growing cities"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {cities.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 60}>
              <div className="group rounded-2xl border border-line bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-brass/40 hover:shadow-lg">
                <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-brass/10 text-brass-dark">
                  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path
                      d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="9.5" r="2.4" />
                  </svg>
                </span>
                <p className="mt-3 text-base font-bold text-ink">{c.name}</p>
                <p className="mt-1 text-xs text-muted">Serving all major localities</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
