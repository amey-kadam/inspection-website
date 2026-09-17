import { checklistItems } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHead } from './ui/Report'

export function Checklist() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          index={4}
          light
          label="Inspection checklist"
          meta="200+ checkpoints"
          heading="200+ checkpoints. Zero shortcuts."
          description="Our engineers run through a rigorously refined checklist so nothing slips through — here's a snapshot of what's covered."
        />

        <div className="mt-14 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {checklistItems.map((item, i) => (
            <Reveal key={item} delay={(i % 6) * 40}>
              <div className="flex items-baseline gap-4 border-b border-white/10 py-3.5">
                <span className="label tnum shrink-0 text-brass">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex-1 text-sm text-white/80">{item}</span>
                <span className="label shrink-0 text-white/30" aria-hidden="true">
                  ✓
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
