import { benefits } from '../data/content'
import { Icon } from './ui/Icon'
import { Img } from './ui/Img'
import { Reveal } from './ui/Reveal'

export function Benefits() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="overflow-hidden rounded-3xl border border-line/60">
          <Img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1000&q=80&auto=format&fit=crop"
            alt="Engineer reviewing an inspection report with a homeowner in a modern apartment"
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>

        <Reveal delay={100}>
          <span className="text-xs font-semibold uppercase tracking-widest text-brass-dark">How It Helps</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Buy your home with total confidence
          </h2>

          <ul className="mt-8 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3.5 border-b border-line pb-4 last:border-0">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass-dark">
                  <Icon name="check" stroke className="h-3.5 w-3.5" />
                </span>
                <span className="text-base font-medium text-ink">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
