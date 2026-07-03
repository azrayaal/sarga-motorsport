import { useEffect, useRef, useState } from 'react'

/**
 * Counts from 0 to `end` once the element scrolls into view.
 * Returns the current value plus a ref to attach to the target.
 */
export function useCountUp(end: number, duration = 1600) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true

        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration)
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(end * eased)
          if (progress < 1) requestAnimationFrame(tick)
          else setValue(end)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration])

  return { value, ref }
}
