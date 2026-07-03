import { cn } from '@/utils/cn'

interface MarqueeProps {
  items: string[]
  className?: string
}

/** Infinite horizontal ticker — the content is duplicated for a seamless loop. */
export function Marquee({ items, className }: MarqueeProps) {
  const row = [...items, ...items]
  return (
    <div className={cn('flex overflow-hidden', className)}>
      <div className="flex shrink-0 animate-marquee items-center">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap px-6 font-display text-lg font-bold uppercase italic tracking-tight text-bone/90">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-molten" />
          </span>
        ))}
      </div>
    </div>
  )
}
