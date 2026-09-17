import { useEffect, useState } from 'react'

export function useCountUp(target: number, active: boolean, duration = 1200) {
  // Starts at the final value so prerendered HTML — and anything that reads the
  // page without running the animation — carries the real number. The count-up
  // is a client-side flourish layered on top, not the source of the value.
  const [value, setValue] = useState(target)

  useEffect(() => {
    if (!active) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf: number
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return value
}
