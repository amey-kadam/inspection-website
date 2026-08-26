import { useRef } from 'react'
import { testimonials } from '../data/content'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionIntro } from './ui/SectionIntro'

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: 'smooth' })
  }

  return (
    <section className="bg-paper-2 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionIntro label="Testimonials" heading="Homeowners who moved in without regrets" />
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:border-ink"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:border-ink"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-pl-5 pb-2"
        >
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 3) * 80}
              className="w-[85%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]"
            >
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-7">
                <span className="text-brass">
                  <Icon name="quote" className="h-7 w-7" />
                </span>
                <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-body">"{t.quote}"</p>
                <div className="mt-6 border-t border-line pt-4">
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
