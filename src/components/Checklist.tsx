import { checklistItems } from '../data/content'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionIntro } from './ui/SectionIntro'

export function Checklist() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionIntro
          center
          light
          label="Inspection Checklist"
          heading="250+ checkpoints. Zero shortcuts."
          description="Our engineers run through a rigorously refined checklist so nothing slips through — here's a snapshot of what's covered."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-0.5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-2 sm:p-10 lg:grid-cols-3">
          {checklistItems.map((item, i) => (
            <Reveal
              key={item}
              delay={(i % 6) * 40}
              className="flex items-center gap-3 border-b border-white/10 py-3.5 last:border-0 sm:[&:nth-last-child(-n+2)]:border-0 lg:[&:nth-last-child(-n+3)]:border-0"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass">
                <Icon name="check" stroke className="h-3 w-3" />
              </span>
              <span className="text-sm font-medium text-white/85">{item}</span>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-white/50">
          + 230 more checkpoints covered in your full digital report
        </p>
      </div>
    </section>
  )
}
