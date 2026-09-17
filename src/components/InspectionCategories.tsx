import { categories } from '../data/content'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionHead } from './ui/Report'

export function InspectionCategories() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index={4}
          label="Coverage"
          meta={`${categories.length} areas`}
          heading="Every surface. Every system. Every detail."
        />

        <div className="mt-14 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={(i % 5) * 60} className="bg-paper">
              <div className="group flex h-full flex-col justify-between gap-8 bg-white p-5 transition-colors duration-300 hover:bg-ink">
                <div className="flex items-start justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-paper-2 text-brass-dark transition-colors duration-300 group-hover:bg-white/10 group-hover:text-brass">
                    <Icon name={c.icon} className="h-4.5 w-4.5" />
                  </span>
                  <span className="label tnum text-muted/60 transition-colors duration-300 group-hover:text-white/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-white">
                  {c.title}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
