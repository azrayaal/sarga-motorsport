import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/utils/cn'
import { schedule } from '@/data/schedule'
import type { SessionCategory } from '@/types'

const categoryStyles: Record<SessionCategory, string> = {
  practice: 'text-ash border-bone/20',
  qualifying: 'text-gold border-gold/40',
  race: 'text-molten border-molten/50',
  support: 'text-ash border-bone/20',
  show: 'text-ash border-bone/20',
}

export function Schedule() {
  const [active, setActive] = useState(schedule[0].id)
  const day = schedule.find((d) => d.id === active) ?? schedule[0]

  return (
    <section id="schedule" className="relative overflow-hidden bg-void py-24 sm:py-32">
      <div className="motif-grid absolute inset-0 opacity-40" />
      <Container className="relative">
        <SectionHeader
          index="03"
          kicker="Race Weekend"
          title="The Schedule"
          intro="Three nights of running under the lights. Times shown are local to the circuit."
        />

        {/* Day tabs */}
        <div className="mt-12 flex flex-wrap gap-2">
          {schedule.map((d) => {
            const selected = d.id === active
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setActive(d.id)}
                className={cn(
                  'flex flex-col items-start gap-0.5 border px-5 py-3 text-left transition-all duration-300 clip-angle',
                  selected
                    ? 'border-molten bg-molten/15'
                    : 'border-bone/10 bg-carbon/50 hover:border-bone/30',
                )}
              >
                <span
                  className={cn(
                    'font-display text-lg font-bold uppercase italic',
                    selected ? 'text-bone' : 'text-ash',
                  )}
                >
                  {d.weekday}
                </span>
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-smoke">
                  {d.date} · {d.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Sessions */}
        <div className="mt-8 flex flex-col">
          {day.sessions.map((session, i) => (
            <Reveal key={`${day.id}-${session.title}`} delay={i * 0.06}>
              <div className="group grid grid-cols-[auto_1fr] items-start gap-5 border-t border-bone/10 py-6 sm:grid-cols-[6rem_1fr_auto] sm:items-center sm:gap-8">
                <span className="font-display text-2xl font-extrabold tabular-nums text-bone sm:text-3xl">
                  {session.time}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-xl font-bold uppercase italic text-bone">
                    {session.title}
                  </h3>
                  <p className="text-sm text-ash">{session.description}</p>
                </div>
                <span
                  className={cn(
                    'col-span-2 w-fit border px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] sm:col-span-1',
                    categoryStyles[session.category],
                  )}
                >
                  {session.category}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
