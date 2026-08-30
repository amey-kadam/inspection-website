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

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={(i % 5) * 60}>
              <div className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-ink/10">
                <div className="absolute inset-0 -z-10 bg-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute right-5 top-5 font-mono text-xs font-semibold text-line transition-colors duration-300 group-hover:text-white/20">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brass/10 text-brass-dark transition-colors duration-300 group-hover:bg-brass group-hover:text-ink">
                  <Icon name={c.icon} className="h-5 w-5" />
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
