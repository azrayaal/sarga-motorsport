import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { StatCounter } from '@/components/ui/StatCounter'
import { aboutHighlight, aboutIntro, pillars, stats } from '@/data/about'

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="bg-glow-cool absolute inset-0" />
      <div className="rule-cool absolute inset-x-0 top-0 h-px opacity-70" />
      <div className="motif-dots absolute inset-0 opacity-50" />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-8">
            <SectionHeader
              index="01"
              kicker="About SARGA Motorsport"
              title={
                <>
                  Indonesia’s
                  <br />
                  <span className="text-gradient-molten">Racing Home</span>
                </>
              }
              intro={aboutIntro}
            />
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-8 border-t border-bone/10 pt-8">
                {stats.map((stat) => (
                  <StatCounter key={stat.label} stat={stat} />
                ))}
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="group flex gap-5 border border-bone/10 bg-carbon/60 p-6 transition-colors hover:border-molten/40">
                  <span className="font-display text-xl font-extrabold text-molten/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-xl font-bold uppercase italic text-bone">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ash">{pillar.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="mt-2 flex items-center justify-between border border-molten/40 bg-molten/10 px-6 py-4">
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-bone">
                  {aboutHighlight.title}
                </span>
                <span className="text-sm text-ash">{aboutHighlight.note}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
