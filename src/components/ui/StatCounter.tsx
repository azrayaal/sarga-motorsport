import { useCountUp } from '@/hooks/useCountUp'
import type { Stat } from '@/types'

/** Animated stat block that counts up on scroll-into-view. */
export function StatCounter({ stat }: { stat: Stat }) {
  const { value, ref } = useCountUp(stat.value)
  const isFloat = !Number.isInteger(stat.value)
  const display = isFloat ? value.toFixed(1) : Math.round(value).toLocaleString()

  return (
    <div className="flex flex-col gap-2">
      <span ref={ref} className="font-display text-4xl font-extrabold text-bone sm:text-5xl">
        {stat.prefix}
        {display}
        {stat.suffix}
      </span>
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ash">
        {stat.label}
      </span>
    </div>
  )
}
