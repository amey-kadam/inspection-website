import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

/**
 * The visual grammar of an inspection report, reused across every section:
 * a numbered mark, hairline rules, measured data rows and annotation callouts.
 * Anything counted, measured or labelled is set in mono — that contrast against
 * the display face is what makes the page read as a document.
 */

/** `03 ———————————— CIVIL & STRUCTURAL ———————— 24 checks` */
export function SectionMark({
  index,
  label,
  meta,
  light = false,
}: {
  index: number
  label: string
  meta?: string
  light?: boolean
}) {
  const line = light ? 'bg-white/20' : 'bg-line'
  const text = light ? 'text-white/60' : 'text-muted'
  return (
    <div className="flex items-center gap-4">
      <span className={`label tnum ${light ? 'text-brass-light' : 'text-brass-dark'}`}>
        {String(index).padStart(2, '0')}
      </span>
      <span className={`h-px w-8 shrink-0 ${line}`} aria-hidden="true" />
      <span className={`label ${text}`}>{label}</span>
      <span className={`h-px flex-1 ${line}`} aria-hidden="true" />
      {meta && <span className={`label tnum ${text}`}>{meta}</span>}
    </div>
  )
}

/** Hairline divider. The report's structural unit. */
export function Rule({ light = false, className = '' }: { light?: boolean; className?: string }) {
  return (
    <div
      className={`h-px ${light ? 'bg-white/10' : 'bg-line'} ${className}`}
      aria-hidden="true"
    />
  )
}

/** A field row: name on the left, measured value on the right, hairline beneath. */
export function DataRow({
  name,
  value,
  status,
  light = false,
}: {
  name: ReactNode
  value?: ReactNode
  status?: 'pass' | 'flag'
  light?: boolean
}) {
  return (
    <div
      className={`flex items-baseline gap-4 border-b py-3.5 ${
        light ? 'border-white/10' : 'border-line'
      }`}
    >
      {status && (
        <span
          className={`label shrink-0 ${status === 'flag' ? 'text-brass-dark' : light ? 'text-white/40' : 'text-muted'}`}
        >
          {status === 'flag' ? '!' : '✓'}
        </span>
      )}
      <span className={`flex-1 text-sm ${light ? 'text-white/80' : 'text-body'}`}>{name}</span>
      {value && (
        <span
          className={`label tnum shrink-0 ${light ? 'text-white/50' : 'text-muted'}`}
        >
          {value}
        </span>
      )}
    </div>
  )
}

/** Mono annotation with a leader line, as pencilled into a report margin. */
export function Callout({
  children,
  className = '',
  align = 'left',
}: {
  children: ReactNode
  className?: string
  align?: 'left' | 'right'
}) {
  return (
    <span className={`flex items-center gap-2 ${align === 'right' ? 'flex-row-reverse' : ''} ${className}`}>
      <span className="h-px w-6 shrink-0 bg-brass" aria-hidden="true" />
      <span className="label whitespace-nowrap rounded-full border border-brass/40 bg-paper px-2.5 py-1 text-brass-dark">
        {children}
      </span>
    </span>
  )
}

/** Section heading in the report voice: numbered mark, then the statement. */
export function SectionHead({
  index,
  label,
  heading,
  description,
  meta,
  light = false,
  className = '',
}: {
  index: number
  label: string
  heading: ReactNode
  description?: string
  meta?: string
  light?: boolean
  className?: string
}) {
  return (
    <Reveal className={className}>
      <SectionMark index={index} label={label} meta={meta} light={light} />
      <h2
        className={`mt-7 max-w-2xl text-balance text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-xl text-base leading-relaxed ${light ? 'text-white/70' : 'text-body'}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
