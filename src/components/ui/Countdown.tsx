import { useCountdown } from '@/hooks/useCountdown'
import { cn } from '@/utils/cn'

interface CountdownProps {
  iso: string
  className?: string
}

function pad(n: number) {
  return n.toString().padStart(2, '0')
}

/** Four-cell lights-out countdown. */
export function Countdown({ iso, className }: CountdownProps) {
  const { days, hours, minutes, seconds } = useCountdown(iso)

  const cells = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hrs' },
    { value: minutes, label: 'Min' },
    { value: seconds, label: 'Sec' },
  ]

  return (
    <div className={cn('flex items-stretch gap-2 sm:gap-3', className)}>
      {cells.map((cell, i) => (
        <div key={cell.label} className="flex items-center gap-2 sm:gap-3">
          <div className="flex min-w-[3.75rem] flex-col items-center gap-1 border border-bone/10 bg-carbon/70 px-3 py-2.5 backdrop-blur clip-angle sm:min-w-[4.5rem]">
            <span className="font-display text-2xl font-extrabold tabular-nums text-bone sm:text-3xl">
              {pad(cell.value)}
            </span>
            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-smoke">
              {cell.label}
            </span>
          </div>
          {i < cells.length - 1 && (
            <span className="font-display text-xl text-molten sm:text-2xl">:</span>
          )}
        </div>
      ))}
    </div>
  )
}
