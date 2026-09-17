import { processSteps } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHead } from './ui/Report'

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-paper-2 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHead
          index={2}
          label="Our process"
          meta={`${processSteps.length} steps`}
          heading="Five steps to a worry-free handover"
          description="Simple, transparent, and designed around your possession timeline."
        />

        <ol className="mt-16">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 70}>
              <li className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-line py-7 sm:grid-cols-[6rem_1fr] sm:gap-x-10">
                <span className="tnum text-3xl font-extrabold leading-none text-brass sm:text-5xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink sm:text-xl">{s.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-body">{s.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
          <div className="border-t border-line" aria-hidden="true" />
        </ol>
      </div>
    </section>
  )
}
