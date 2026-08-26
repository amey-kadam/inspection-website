import { features } from '../data/content'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionIntro } from './ui/SectionIntro'

export function WhyChooseUs() {
  return (
    <section id="services" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          label="Why Choose Us"
          heading="Built for Indian homebuyers"
          description="Every home tells a different story. Our engineers know exactly what to look for behind fresh paint and polished tiles."
        />

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 90}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-brass-dark">
                <Icon name={f.icon} className="h-5 w-5" />
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
