import { categories } from '../data/content'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'

export function InspectionCategories() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Every surface. Every system. Every detail.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 60}>
              <div className="group flex h-full flex-col gap-4 bg-white p-6 transition-colors hover:bg-ink sm:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper-2 text-brass-dark transition-colors group-hover:bg-white/10 group-hover:text-brass">
                  <Icon name={c.icon} className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold text-ink transition-colors group-hover:text-white">
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
