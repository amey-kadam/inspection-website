import { stats } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'

function StatItem({ value, suffix, label }: (typeof stats)[number]) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const count = useCountUp(value, visible)

  return (
    <div ref={ref} className="text-center sm:text-left">
      <p className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        {count}
        <span className="text-brass">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-muted">{label}</p>
    </div>
  )
}

export function Stats() {
  return (
    <section className="border-y border-line bg-white py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4 lg:gap-6">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  )
}
