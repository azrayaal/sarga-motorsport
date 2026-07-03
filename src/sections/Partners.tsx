import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'
import { partnerTiers } from '@/data/partners'
import type { Partner } from '@/types'

function Wordmark({ partner, size }: { partner: Partner; size: 'lg' | 'md' | 'sm' }) {
  const cls = {
    lg: 'text-4xl sm:text-5xl',
    md: 'text-2xl sm:text-3xl',
    sm: 'text-xl sm:text-2xl',
  }[size]

  return (
    <div className="group flex flex-col items-center gap-1.5 text-center">
      <span
        className={cn(
          'font-display font-extrabold uppercase italic tracking-tight text-smoke transition-colors duration-300 group-hover:text-bone',
          cls,
        )}
      >
        {partner.wordmark}
      </span>
      {partner.descriptor && (
        <span className="text-[0.55rem] font-semibold uppercase tracking-[0.24em] text-smoke/70">
          {partner.descriptor}
        </span>
      )}
    </div>
  )
}

const gridForTier: Record<string, string> = {
  title: 'grid-cols-1',
  founding: 'grid-cols-2 md:grid-cols-4',
  presenting: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5',
  official: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-6',
}

export function Partners() {
  return (
    <section id="partners" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="motif-diagonal absolute inset-0 opacity-60" />
      <Container className="relative">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionHeader
            index="04"
            kicker="Partners & Sponsors"
            title={
              <>
                Powered By
                <br />
                <span className="text-outline">The Best</span>
              </>
            }
            align="center"
            intro="Indonesia’s leading brands power the SARGA season — from our title partner to every official supplier on the grid."
          />
        </div>

        <div className="mt-16 flex flex-col gap-14">
          {partnerTiers.map((group, gi) => (
            <div key={group.tier} className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <span className="h-px flex-1 bg-bone/10" />
                <span className="kicker whitespace-nowrap text-ash">{group.label}</span>
                <span className="h-px flex-1 bg-bone/10" />
              </div>
              <Reveal delay={gi * 0.05}>
                <div
                  className={cn(
                    'grid items-center gap-x-8 gap-y-10',
                    gridForTier[group.tier],
                    group.tier === 'title' && 'place-items-center',
                  )}
                >
                  {group.partners.map((partner) => (
                    <Wordmark
                      key={partner.name}
                      partner={partner}
                      size={group.tier === 'title' ? 'lg' : group.tier === 'founding' ? 'md' : 'sm'}
                    />
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-20 flex flex-col items-center gap-6 border border-bone/10 bg-carbon/60 px-8 py-12 text-center clip-angle">
            <h3 className="max-w-xl font-display text-3xl font-bold uppercase italic text-bone sm:text-4xl">
              Put Your Brand On The Grid
            </h3>
            <p className="max-w-md text-sm text-ash">
              Partnership packages for {new Date().getFullYear() + 1} and beyond are open. Reach
              millions of fans across the SARGA Motorsport season in Indonesia.
            </p>
            <Button as="a" href="#" size="lg" icon={<ArrowUpRight size={16} />}>
              Become a Partner
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
