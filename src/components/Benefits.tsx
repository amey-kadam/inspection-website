import { benefits } from '../data/content'
import { Img } from './ui/Img'
import { Reveal } from './ui/Reveal'
import { Callout, SectionHead } from './ui/Report'

export function Benefits() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index={7}
          label="How it helps"
          meta={`${benefits.length} outcomes`}
          heading="Buy your home with total confidence"
        />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-line">
              <Img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1000&q=80&auto=format&fit=crop"
                width={1000}
                height={750}
                alt="Engineer reviewing an inspection report with a homeowner in a modern apartment"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <Callout className="mt-5">Findings walked through on site</Callout>
          </Reveal>

          <Reveal delay={100}>
            <ul>
              {benefits.map((b, i) => (
                <li
                  key={b}
                  className="flex items-baseline gap-4 border-t border-line py-4 last:border-b"
                >
                  <span className="label tnum shrink-0 text-brass-dark">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 text-base text-ink">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
