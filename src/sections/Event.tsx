import { Check, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'
import { ticketTiers, currency } from '@/data/tickets'
import { event } from '@/data/event'

export function Event() {
  return (
    <section id="event" className="relative overflow-hidden bg-carbon py-24 sm:py-32">
      <div className="motif-diagonal absolute inset-0 opacity-70" />
      <Container className="relative">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            index="01"
            kicker={event.dateLabel}
            title={
              <>
                {new Date(event.startsAt).getFullYear()} Tickets
                <br />
                <span className="text-outline">Are Live</span>
              </>
            }
            intro="Pick your vantage point across the Sarga Street Circuit. Every ticket is a three-day pass to the full race weekend."
          />
          <Reveal delay={0.1}>
            <Button as="a" href="#" variant="outline" icon={<ArrowUpRight size={16} />}>
              Full Ticket Guide
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ticketTiers.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 0.07}>
              <article
                className={cn(
                  'group relative flex h-full flex-col justify-between gap-6 border p-6 transition-all duration-300 clip-angle',
                  tier.featured
                    ? 'border-molten/60 bg-gradient-to-b from-molten/15 to-carbon'
                    : 'border-bone/10 bg-void hover:border-bone/25',
                )}
              >
                {tier.featured && (
                  <span className="absolute right-4 top-4 bg-molten px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-[0.18em] text-white">
                    Most Popular
                  </span>
                )}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-molten">
                      {tier.zone}
                    </span>
                    <h3 className="font-display text-2xl font-bold uppercase italic text-bone">
                      {tier.name}
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-sm text-ash">
                        <Check size={15} className="mt-0.5 shrink-0 text-molten" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-baseline gap-1.5 border-t border-bone/10 pt-4">
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-smoke">
                      From
                    </span>
                    <span className="font-display text-3xl font-extrabold text-bone">
                      {currency(tier.from)}
                    </span>
                  </div>
                  <Button
                    as="a"
                    href="#"
                    size="sm"
                    variant={tier.featured ? 'primary' : 'light'}
                    className="w-full"
                  >
                    Select
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
