import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { EventCard } from '@/components/ui/EventCard'
import { seasonEvents } from '@/data/seasonEvents'

export function Schedule() {
  return (
    <section id="schedule" className="relative overflow-hidden bg-void py-24 sm:py-32">
      <div className="motif-grid absolute inset-0 opacity-40" />
      <Container className="relative">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            index="03"
            kicker="Season Calendar"
            title="The Schedule"
            intro="Every round of the 2026 SARGA Motorsport season — grand prix, rallycross, drift and speed. Secure your seat before lights out."
          />
          <Reveal delay={0.1}>
            <Button as="a" href="#event" variant="outline" icon={<ArrowUpRight size={16} />}>
              All Events
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {seasonEvents.map((event, i) => (
            <Reveal key={event.id} delay={(i % 3) * 0.08}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
