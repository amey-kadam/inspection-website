import { useEffect, useState } from 'react'
import { projects } from '../data/content'
import { Img } from './ui/Img'
import { Reveal } from './ui/Reveal'
import { SectionIntro } from './ui/SectionIntro'

export function Portfolio() {
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro label="Portfolio" heading="Recent inspections we're proud of" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 80}>
              <button
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden rounded-2xl border border-line/60 text-left"
              >
                <div className="relative overflow-hidden">
                  <Img
                    src={p.image}
                    alt={`${p.name}, a ${p.type} in ${p.city} inspected by PrimeInspect`}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink shadow-sm">
                    Inspection Complete
                  </span>
                </div>
                <div className="bg-white p-5">
                  <h3 className="text-base font-bold text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {p.type} · {p.city}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            aria-label="Close image"
            className="absolute inset-0 bg-ink/85 backdrop-blur-sm animate-fade-in"
            onClick={() => setActive(null)}
          />
          <div className="relative w-full max-w-3xl animate-fade-up overflow-hidden rounded-2xl bg-white shadow-2xl">
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
            <Img
              src={projects[active].image}
              alt={`${projects[active].name}, a ${projects[active].type} in ${projects[active].city}`}
              className="max-h-[75vh] w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-bold text-ink">{projects[active].name}</h3>
              <p className="mt-1 text-sm text-muted">
                {projects[active].type} · {projects[active].city}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
