import { useEffect, useState } from 'react'

export interface Countdown {
  days: number
  hours: number
  minutes: number
  seconds: number
  done: boolean
}

function diff(target: number): Countdown {
  const now = Date.now()
  const delta = Math.max(0, target - now)
  return {
    days: Math.floor(delta / 86_400_000),
    hours: Math.floor((delta / 3_600_000) % 24),
    minutes: Math.floor((delta / 60_000) % 60),
    seconds: Math.floor((delta / 1000) % 60),
    done: delta === 0,
  }
}

/** Live countdown to an ISO date string, ticking once per second. */
export function useCountdown(iso: string): Countdown {
  const target = new Date(iso).getTime()
  const [state, setState] = useState<Countdown>(() => diff(target))

  useEffect(() => {
    const id = setInterval(() => setState(diff(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return state
}
