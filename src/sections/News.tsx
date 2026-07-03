import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { formatDate } from '@/utils/format'
import { news, NEWS_SITE } from '@/data/news'
import type { NewsArticle } from '@/types'

function Meta({ article }: { article: NewsArticle }) {
  return (
    <div className="flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.16em]">
      <span className="bg-molten px-2 py-0.5 text-white">{article.category}</span>
      <span className="text-smoke">{formatDate(article.date)}</span>
    </div>
  )
}

/** Large lead story. */
function FeatureCard({ article }: { article: NewsArticle }) {
  return (
    <a
      href={article.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden border border-bone/10"
    >
      <img
        src={article.image}
        alt={article.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
      <div className="relative flex flex-col gap-4 p-7">
        <Meta article={article} />
        <h3 className="max-w-xl font-display text-2xl font-bold uppercase italic leading-tight text-bone sm:text-3xl">
          {article.title}
        </h3>
        <span className="flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-molten">
          Read Article <ArrowUpRight size={14} />
        </span>
      </div>
    </a>
  )
}

/** Compact side story. */
function CompactCard({ article }: { article: NewsArticle }) {
  return (
    <a
      href={article.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-4 border border-bone/10 bg-carbon/50 p-3 transition-colors hover:border-molten/40"
    >
      <div className="relative h-24 w-28 shrink-0 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex min-w-0 flex-col justify-center gap-2">
        <Meta article={article} />
        <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-bone transition-colors group-hover:text-molten">
          {article.title}
        </h4>
      </div>
    </a>
  )
}

export function News() {
  const [lead, ...rest] = news
  const side = rest.slice(0, 5)

  return (
    <section id="news" className="relative overflow-hidden bg-void py-24 sm:py-32">
      <div className="motif-dots absolute inset-0 opacity-40" />
      <Container className="relative">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader index="05" kicker="Latest News" title="From The Paddock" />
          <Reveal delay={0.1}>
            <Button
              as="a"
              href={NEWS_SITE}
              variant="outline"
              icon={<ArrowUpRight size={16} />}
            >
              See More
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <FeatureCard article={lead} />
          </Reveal>
          <div className="flex flex-col gap-3">
            {side.map((article, i) => (
              <Reveal key={article.id} delay={i * 0.06}>
                <CompactCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex justify-center">
            <a
              href={NEWS_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ash transition-colors hover:text-bone"
            >
              See more at news.sarga.co
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
