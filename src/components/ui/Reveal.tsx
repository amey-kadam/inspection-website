import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'

// useLayoutEffect warns during server rendering; useEffect is the right no-op there.
const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

type Phase = 'static' | 'hidden' | 'shown'

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  // The server render and the first client render both paint the content
  // plainly visible, so the prerendered HTML contains nothing hidden and
  // hydration matches. The hidden state is only applied afterwards, in a layout
  // effect that runs before the browser paints, so there is no flash.
  const [phase, setPhase] = useState<Phase>('static')

  useIsoLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setPhase('hidden')
  }, [])

  useEffect(() => {
    if (phase !== 'hidden') return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase('shown')
          obs.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [phase])

  const motion =
    phase === 'static'
      ? ''
      : `transition-all duration-700 ease-out ${
          phase === 'shown' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`

  return (
    <div
      ref={ref}
      className={`${className} ${motion}`}
      style={phase === 'static' ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
