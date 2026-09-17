import { testimonials } from '../data/content'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionHead } from './ui/Report'

export function Testimonials() {
  return (
    <section className="bg-paper-2 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index={8}
          label="Testimonials"
          meta={`${testimonials.length} homeowners`}
          heading="Homeowners who moved in without regrets"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink/15 hover:shadow-xl hover:shadow-ink/[0.08]">
                <span className="text-brass">
                  <Icon name="quote" className="h-6 w-6" />
                </span>
                <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-body">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-baseline justify-between gap-4 border-t border-line pt-4">
                  <span className="text-sm font-bold text-ink">{t.name}</span>
                  <span className="label text-muted">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
