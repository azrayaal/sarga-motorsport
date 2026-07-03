import { MapPin, ArrowRight } from 'lucide-react'
import { useCountdown } from '@/hooks/useCountdown'
import { cn } from '@/utils/cn'
import type { EventStatus, SeasonEvent } from '@/types'

const statusStyles: Record<EventStatus, string> = {
  'Registration Open': 'bg-emerald-500 text-white',
  'Selling Fast': 'bg-amber-500 text-ink',
  'Coming Soon': 'bg-slate text-ash',
}

function pad(n: number) {
  return n.toString().padStart(2, '0')
}

/** Compact inline countdown used inside event cards. */
function MiniCountdown({ iso }: { iso: string }) {
  const { days, hours, minutes, seconds } = useCountdown(iso)
  const cells = [
    { v: days, l: 'Days' },
    { v: hours, l: 'Hrs' },
    { v: minutes, l: 'Min' },
    { v: seconds, l: 'Sec' },
  ]
  return (
    <div className="flex items-center gap-4 border-y border-bone/10 py-3">
      {cells.map((c) => (
        <div key={c.l} className="flex flex-col items-center gap-0.5">
          <span className="font-display text-xl font-extrabold tabular-nums leading-none text-bone">
            {pad(c.v)}
          </span>
          <span className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-smoke">
            {c.l}
          </span>
        </div>
      ))}
    </div>
  )
}

export function EventCard({ event }: { event: SeasonEvent }) {
  return (
    <a
      href={event.href}
      className={cn(
        'group flex flex-col overflow-hidden border bg-carbon transition-colors duration-300',
        event.featured ? 'border-molten' : 'border-bone/10 hover:border-bone/30',
      )}
    >
      {/* Cover */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/20" />

        <span className="absolute left-3 top-3 bg-molten px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.16em] text-white">
          {event.category}
        </span>
        <span
          className={cn(
            'absolute right-3 top-3 px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.16em]',
            statusStyles[event.status],
          )}
        >
          {event.status}
        </span>
        <span className="absolute bottom-3 left-3 bg-ink/90 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-bone">
          {event.dateLabel}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-col gap-2">
          <h3
            className={cn(
              'font-display text-xl font-bold uppercase italic leading-tight',
              event.featured ? 'text-molten' : 'text-bone',
            )}
          >
            {event.title}
          </h3>
          <p className="flex items-center gap-1.5 text-xs text-ash">
            <MapPin size={13} className="shrink-0 text-molten" />
            {event.venue}
          </p>
        </div>

        <MiniCountdown iso={event.startsAt} />

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-smoke">
              From
            </span>
            <span className="font-display text-lg font-extrabold text-molten">
              {event.priceFrom}
            </span>
          </div>
          <span
            className={cn(
              'grid h-10 w-10 place-items-center border transition-all duration-300',
              event.featured
                ? 'border-molten bg-molten text-white'
                : 'border-bone/20 text-bone group-hover:border-molten group-hover:bg-molten group-hover:text-white',
            )}
          >
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </a>
  )
}
