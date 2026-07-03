import { motion } from 'framer-motion'
import { MapPin, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Countdown } from '@/components/ui/Countdown'
import { event } from '@/data/event'

const line = {
  hidden: { y: '110%' },
  show: (i: number) => ({
    y: '0%',
    transition: { duration: 0.9, delay: 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Layered background — real motorsport photography under dark grading */}
      <div className="absolute inset-0 bg-ink" />
      <motion.img
        src="/media/hero.jpg"
        alt="Formula race car on track"
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(225,6,0,0.32),transparent_55%)]" />
      <div className="motif-grid absolute inset-0 opacity-30 mask-fade-b" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-16 sm:px-8 lg:px-12">
        <div className="flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="border border-molten/50 bg-molten/10 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-molten">
              The Official Site
            </span>
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-ash">
              {event.series} · {event.edition}
            </span>
          </motion.div>

          <h1 className="text-display text-[3.4rem] leading-[0.82] text-bone sm:text-7xl lg:text-[7.5rem]">
            {['SARGA', 'MOTORSPORT'].map((text, i) => (
              <span key={text} className="block overflow-hidden">
                <motion.span
                  custom={i}
                  variants={line}
                  initial="hidden"
                  animate="show"
                  className="block"
                >
                  {text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col gap-5"
          >
            <p className="max-w-md font-display text-2xl italic text-molten sm:text-3xl">
              {event.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ash">
              <span className="font-semibold uppercase tracking-[0.14em] text-bone">
                {event.dateLabel}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={15} className="text-molten" />
                {event.circuit}, {event.city}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="flex flex-col gap-8 pt-2"
          >
            <div className="flex flex-wrap items-center gap-4">
              <Button as="a" href="#event" size="lg" icon={<ChevronRight size={16} />}>
                Buy Tickets
              </Button>
              <Button as="a" href="#about" size="lg" variant="outline">
                Explore the Circuit
              </Button>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-smoke">
                Lights Out In
              </span>
              <Countdown iso={event.startsAt} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
