import { processSteps } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionIntro } from './ui/SectionIntro'

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-paper-2 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionIntro
          center
          label="Our Process"
          heading="Six steps to a worry-free handover"
          description="Simple, transparent, and designed around your possession timeline."
        />

        <ol className="relative mt-16">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-line sm:left-6" aria-hidden="true" />
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 70} className="relative flex gap-5 pb-10 last:pb-0 sm:gap-7">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-brass ring-4 ring-paper-2 sm:h-12 sm:w-12 sm:text-sm">
                {s.step}
              </span>
              <div className="pt-1.5 sm:pt-2">
                <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-body">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
