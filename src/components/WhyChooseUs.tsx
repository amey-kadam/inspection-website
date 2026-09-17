import { features } from '../data/content'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionHead } from './ui/Report'

export function WhyChooseUs() {
  return (
    <section id="services" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index={2}
          label="Why choose us"
          meta={`${features.length} pillars`}
          heading="Built for Indian homebuyers"
          description="Every home tells a different story. Our engineers know exactly what to look for behind fresh paint and polished tiles."
        />

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 90}>
              <div className="flex items-center gap-4 border-t border-line pt-5">
                <span className="label tnum text-brass-dark">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-paper-2 text-brass-dark">
                  <Icon name={f.icon} className="h-4.5 w-4.5" />
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{f.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
