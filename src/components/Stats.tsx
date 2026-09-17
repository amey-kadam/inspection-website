import { stats } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'

function StatItem({ value, suffix, label }: (typeof stats)[number]) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const count = useCountUp(value, visible)

  return (
    <div ref={ref} className="border-t border-line pt-5">
      <p className="tnum text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        {count}
        <span className="text-brass">{suffix}</span>
      </p>
      <p className="label mt-3 text-muted">{label}</p>
    </div>
  )
}

export function Stats() {
  return (
    <section className="border-y border-line bg-white py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-10 px-5 sm:px-8 lg:grid-cols-4 lg:gap-x-6">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  )
}
