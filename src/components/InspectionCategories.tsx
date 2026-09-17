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
          description="Each area is inspected against its own set of checkpoints, and anything that fails is photographed and written up."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={(i % 5) * 60} className="h-full">
              <div className="group relative flex h-full flex-col justify-between gap-10 overflow-hidden rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ink/15 hover:shadow-xl hover:shadow-ink/[0.08] sm:p-6">
                {/* Brass wash that warms the card on hover without hiding the text. */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brass/[0.09] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brass/10 text-brass-dark transition-colors duration-300 group-hover:bg-brass group-hover:text-white">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <span className="label tnum text-muted/50 transition-colors duration-300 group-hover:text-brass-dark">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="relative">
                  <span className="block text-[0.95rem] font-bold leading-snug text-ink">
                    {c.title}
                  </span>
                  <span className="mt-2 flex items-center gap-1.5">
                    <span
                      className="h-px w-5 bg-brass transition-all duration-300 group-hover:w-9"
                      aria-hidden="true"
                    />
                    <span className="label text-muted">Inspected</span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
