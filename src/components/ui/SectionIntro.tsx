import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export function SectionIntro({
  label,
  heading,
  description,
  center = false,
  light = false,
}: {
  label: string
  heading: ReactNode
  description?: string
  center?: boolean
  light?: boolean
}) {
  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span
        className={`text-xs font-semibold uppercase tracking-widest ${light ? 'text-brass-light' : 'text-brass-dark'}`}
      >
        {label}
      </span>
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-ink'}`}
      >
        {heading}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/70' : 'text-body'}`}>{description}</p>
      )}
    </Reveal>
  )
}
