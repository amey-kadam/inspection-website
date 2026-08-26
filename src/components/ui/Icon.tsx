import { iconPaths } from '../../data/content'

export function Icon({
  name,
  className = 'w-6 h-6',
  stroke = false,
}: {
  name: string
  className?: string
  stroke?: boolean
}) {
  const d = iconPaths[name]
  if (!d) return null

  if (stroke) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
        <path d={d} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d={d} />
    </svg>
  )
}
