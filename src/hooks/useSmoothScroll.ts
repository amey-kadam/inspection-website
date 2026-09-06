import { useEffect } from 'react'
import Lenis from 'lenis'

let instance: Lenis | null = null

/** Freeze page scrolling behind an open modal. No-op when smooth scroll is off. */
export function lockScroll(locked: boolean) {
  if (locked) instance?.stop()
  else instance?.start()
}

// Desktop wheel/trackpad only — Lenis leaves native touch scrolling alone by
// default (syncTouch: false), which is what we want on mid-range Android.
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ duration: 1.05, anchors: true })
    instance = lenis
    let raf = requestAnimationFrame(function tick(time) {
      lenis.raf(time)
      raf = requestAnimationFrame(tick)
    })

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      instance = null
    }
  }, [])
}
